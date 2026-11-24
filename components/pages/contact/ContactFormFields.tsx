"use client";

import { useRef, useState } from "react";
import { LuLoader, LuPaperclip, LuSend, LuX } from "react-icons/lu";
import { BorderTrace } from "@/components/ui/BorderTrace";
import { useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import {
  CONTACT_ATTACHMENT_ACCEPT,
  validateContactAttachment,
} from "@/lib/contact-attachment-policy";
import { cn } from "@/lib/utils";
import {
  getContactPackageIcon,
  getContactServiceIcon,
} from "./contact-select-icons";
import { ContactFormFieldShell } from "./ContactFormFieldShell";
import { ContactFormSelect } from "./ContactFormSelect";
import { ContactPhoneField } from "./ContactPhoneField";
import { defaultPhoneCountryCode } from "./phone-country-codes";

interface SelectOption {
  value: string;
  label: string;
}

type ServicePackagesMap = Record<string, SelectOption[]>;

interface ContactFormFieldsProps {
  labels: {
    fieldName: string;
    fieldNamePlaceholder: string;
    fieldEmail: string;
    fieldEmailPlaceholder: string;
    fieldPhone: string;
    fieldPhonePlaceholder: string;
    fieldPhoneCountryLabel: string;
    fieldService: string;
    fieldServicePlaceholder: string;
    fieldPackage: string;
    fieldPackagePlaceholder: string;
    fieldTier: string;
    fieldTierPlaceholder: string;
    fieldBudget: string;
    fieldBudgetPlaceholder: string;
    fieldMessage: string;
    fieldMessagePlaceholder: string;
    fieldAttachment: string;
    fieldAttachmentHint: string;
    fieldAttachmentButton: string;
    fieldAttachmentRemove: string;
    errorAttachmentSize: string;
    errorAttachmentType: string;
    errorAttachmentUnavailable: string;
    submitButton: string;
    submitting: string;
    errorMessage: string;
    serviceOptions: SelectOption[];
    tierOptions: SelectOption[];
    servicePackages: ServicePackagesMap;
    budgetOptions: SelectOption[];
  };
  className?: string;
}

type FormState = "idle" | "submitting" | "error";

type FieldKey =
  | "name"
  | "email"
  | "service"
  | "servicePackage"
  | "serviceTier"
  | "budget";

type FieldErrors = Partial<Record<FieldKey, boolean>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputInner =
  "w-full rounded-[9px] border-0 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-0";

const labelBase = "mb-1.5 block text-[0.8125rem] text-foreground/80";

const labelText = "font-semibold";

export function ContactFormFields({
  labels,
  className,
}: ContactFormFieldsProps) {
  const router = useRouter();
  const locale = useLocale();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedTier, setSelectedTier] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [phoneCountryCode, setPhoneCountryCode] = useState<string>(
    defaultPhoneCountryCode,
  );
  const [phoneNumber, setPhoneNumber] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);

  const basePackageOptions =
    selectedService && labels.servicePackages[selectedService]
      ? labels.servicePackages[selectedService]
      : labels.servicePackages["web-sitesi-gelistirme"];

  const unknownOption = labels.budgetOptions.find(
    (o) => o.value === "belirsiz",
  )!;
  const packageOptions = [...basePackageOptions, unknownOption];

  const serviceOptionsWithIcons = labels.serviceOptions.map((opt) => ({
    ...opt,
    icon: getContactServiceIcon(opt.value),
  }));

  const packageServiceKey =
    selectedService && labels.servicePackages[selectedService]
      ? selectedService
      : "web-sitesi-gelistirme";

  const packageOptionsWithIcons = packageOptions.map((opt) => ({
    ...opt,
    icon: getContactPackageIcon(packageServiceKey, opt.value),
  }));

  function clearFieldError(key: FieldKey) {
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  const hideTierField =
    selectedService === "teknik-denetim" ||
    selectedService === "bakim-ve-destek";

  function validateFields(values: {
    name: string;
    email: string;
    service: string;
    servicePackage: string;
    serviceTier: string;
    budget: string;
  }): FieldErrors {
    const errors: FieldErrors = {};
    if (values.name.trim().length < 2) errors.name = true;
    if (!EMAIL_RE.test(values.email.trim())) errors.email = true;
    if (!values.service) errors.service = true;
    if (!values.servicePackage) errors.servicePackage = true;
    if (!hideTierField && !values.serviceTier) errors.serviceTier = true;
    if (!values.budget) errors.budget = true;
    return errors;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const form = e.currentTarget;
    const content =
      (
        form.elements.namedItem("content") as HTMLTextAreaElement
      ).value.trim() || "";

    const resolvedTier = hideTierField ? "belirsiz" : selectedTier;

    const errors = validateFields({
      name,
      email,
      service: selectedService,
      servicePackage: selectedPackage,
      serviceTier: resolvedTier,
      budget: selectedBudget,
    });

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setFormState("idle");
      return;
    }

    setFieldErrors({});
    setFormState("submitting");

    if (attachment) {
      const validation = validateContactAttachment(attachment);
      if (validation === "size") {
        setFormState("error");
        setErrorMsg(labels.errorAttachmentSize);
        return;
      }
      if (validation === "type") {
        setFormState("error");
        setErrorMsg(labels.errorAttachmentType);
        return;
      }
    }

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("email", email.trim());
    if (phoneNumber.trim()) {
      formData.append("phone", `${phoneCountryCode} ${phoneNumber.trim()}`);
    }
    formData.append("service", selectedService);
    formData.append("servicePackage", selectedPackage);
    formData.append("serviceTier", resolvedTier);
    formData.append("budget", selectedBudget);
    formData.append("content", content);
    formData.append("locale", locale === "en" ? "en" : "tr");
    if (attachment) {
      formData.append("attachment", attachment);
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const json = (await res.json().catch(() => ({}))) as {
          error?: string;
          code?: string;
        };
        if (json.error === "attachment") {
          if (json.code === "size") {
            setErrorMsg(labels.errorAttachmentSize);
          } else if (json.code === "type") {
            setErrorMsg(labels.errorAttachmentType);
          } else if (json.code === "blob_not_configured") {
            setErrorMsg(labels.errorAttachmentUnavailable);
          } else {
            setErrorMsg(labels.errorAttachmentType);
          }
          setFormState("error");
          return;
        }
        throw new Error("Server error");
      }

      router.push("/tesekkurler");
    } catch {
      setFormState("error");
      setErrorMsg(labels.errorMessage);
    }
  }

  function handleAttachmentChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setErrorMsg("");
    if (!file) {
      setAttachment(null);
      return;
    }
    const validation = validateContactAttachment(file);
    if (validation === "size") {
      setAttachment(null);
      setFormState("error");
      setErrorMsg(labels.errorAttachmentSize);
      e.target.value = "";
      return;
    }
    if (validation === "type") {
      setAttachment(null);
      setFormState("error");
      setErrorMsg(labels.errorAttachmentType);
      e.target.value = "";
      return;
    }
    setFieldErrors({});
    setFormState("idle");
    setAttachment(file);
  }

  function clearAttachment() {
    setAttachment(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn("space-y-5", className)}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelBase}>
            <span className={labelText}>
              {labels.fieldName}
              <span className="ml-1 text-brand-accent" aria-hidden>
                *
              </span>
            </span>
          </label>
          <ContactFormFieldShell invalid={fieldErrors.name}>
            <input
              id="cf-name"
              name="name"
              type="text"
              required
              minLength={2}
              maxLength={100}
              autoComplete="name"
              value={name}
              aria-invalid={fieldErrors.name || undefined}
              onChange={(e) => {
                setName(e.target.value);
                clearFieldError("name");
              }}
              placeholder={labels.fieldNamePlaceholder}
              className={inputInner}
            />
          </ContactFormFieldShell>
        </div>
        <div>
          <label htmlFor="cf-email" className={labelBase}>
            <span className={labelText}>
              {labels.fieldEmail}
              <span className="ml-1 text-brand-accent" aria-hidden>
                *
              </span>
            </span>
          </label>
          <ContactFormFieldShell invalid={fieldErrors.email}>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              aria-invalid={fieldErrors.email || undefined}
              onChange={(e) => {
                setEmail(e.target.value);
                clearFieldError("email");
              }}
              placeholder={labels.fieldEmailPlaceholder}
              className={inputInner}
            />
          </ContactFormFieldShell>
        </div>
      </div>

      <div>
        <label htmlFor="cf-phone" className={labelBase}>
          <span className={labelText}>{labels.fieldPhone}</span>
        </label>
        <ContactPhoneField
          id="cf-phone"
          placeholder={labels.fieldPhonePlaceholder}
          countryCodeLabel={labels.fieldPhoneCountryLabel}
          countryCode={phoneCountryCode}
          phoneNumber={phoneNumber}
          onCountryCodeChange={setPhoneCountryCode}
          onPhoneNumberChange={setPhoneNumber}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-service" className={labelBase}>
            <span className={labelText}>
              {labels.fieldService}
              <span className="ml-1 text-brand-accent" aria-hidden>
                *
              </span>
            </span>
          </label>
          <ContactFormSelect
            id="cf-service"
            name="service"
            required
            placeholder={labels.fieldServicePlaceholder}
            options={serviceOptionsWithIcons}
            value={selectedService}
            invalid={fieldErrors.service}
            onChange={(value) => {
              setSelectedService(value);
              setSelectedPackage("");
              setSelectedTier("");
              clearFieldError("service");
              clearFieldError("servicePackage");
              clearFieldError("serviceTier");
            }}
          />
        </div>
        <div>
          <label htmlFor="cf-package" className={labelBase}>
            <span className={labelText}>
              {labels.fieldPackage}
              <span className="ml-1 text-brand-accent" aria-hidden>
                *
              </span>
            </span>
          </label>
          <ContactFormSelect
            id="cf-package"
            name="servicePackage"
            required
            placeholder={labels.fieldPackagePlaceholder}
            options={packageOptionsWithIcons}
            value={selectedPackage}
            invalid={fieldErrors.servicePackage}
            onChange={(value) => {
              setSelectedPackage(value);
              clearFieldError("servicePackage");
            }}
          />
        </div>
        {!hideTierField ? (
          <div>
            <label htmlFor="cf-tier" className={labelBase}>
              <span className={labelText}>
                {labels.fieldTier}
                <span className="ml-1 text-brand-accent" aria-hidden>
                  *
                </span>
              </span>
            </label>
            <ContactFormSelect
              id="cf-tier"
              name="serviceTier"
              required
              placeholder={labels.fieldTierPlaceholder}
              options={labels.tierOptions}
              value={selectedTier}
              invalid={fieldErrors.serviceTier}
              onChange={(value) => {
                setSelectedTier(value);
                clearFieldError("serviceTier");
              }}
            />
          </div>
        ) : null}
        <div>
          <label htmlFor="cf-budget" className={labelBase}>
            <span className={labelText}>
              {labels.fieldBudget}
              <span className="ml-1 text-brand-accent" aria-hidden>
                *
              </span>
            </span>
          </label>
          <ContactFormSelect
            id="cf-budget"
            name="budget"
            required
            placeholder={labels.fieldBudgetPlaceholder}
            options={labels.budgetOptions}
            value={selectedBudget}
            invalid={fieldErrors.budget}
            onChange={(value) => {
              setSelectedBudget(value);
              clearFieldError("budget");
            }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-content" className={labelBase}>
          <span className={labelText}>{labels.fieldMessage}</span>
        </label>
        <ContactFormFieldShell>
          <textarea
            id="cf-content"
            name="content"
            maxLength={2000}
            rows={4}
            placeholder={labels.fieldMessagePlaceholder}
            className={cn(
              inputInner,
              "resize-none leading-relaxed",
              "[scrollbar-color:var(--brand-accent)_rgb(var(--brand-accent-rgb)/0.1)] scrollbar-thin",
              "[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-brand-accent/10",
              "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-brand-accent",
            )}
          />
        </ContactFormFieldShell>
      </div>

      <div>
        <label htmlFor="cf-attachment" className={labelBase}>
          <span className={labelText}>{labels.fieldAttachment}</span>
        </label>
        <p className="mb-2 text-xs leading-relaxed text-muted-foreground">
          {labels.fieldAttachmentHint}
        </p>
        <input
          ref={fileInputRef}
          id="cf-attachment"
          name="attachment"
          type="file"
          accept={CONTACT_ATTACHMENT_ACCEPT}
          className="sr-only"
          onChange={handleAttachmentChange}
        />
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className={cn(
              "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border/60 bg-background px-4 text-sm font-semibold text-foreground",
              "transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-accent/25",
            )}
          >
            <LuPaperclip className="size-4 shrink-0" aria-hidden />
            {labels.fieldAttachmentButton}
          </button>
          {attachment ? (
            <div className="flex min-h-11 flex-1 items-center justify-between gap-2 rounded-xl border border-border/60 bg-background px-3 py-2 text-sm">
              <span className="truncate text-foreground/90">
                {attachment.name}
              </span>
              <button
                type="button"
                onClick={clearAttachment}
                className="inline-flex shrink-0 items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              >
                <LuX className="size-3.5" aria-hidden />
                {labels.fieldAttachmentRemove}
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {formState === "error" && errorMsg && (
        <p
          role="alert"
          className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
        >
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={formState === "submitting"}
        className={cn(
          "group relative flex h-12 w-full items-center justify-center gap-2 overflow-visible rounded-full px-8",
          "border-trace-hover-fallback box-border border-[3px] border-solid border-transparent",
          "bg-transparent text-sm font-semibold text-white",
          "transition-all duration-300 ease-in-out motion-reduce:transition-none",
          "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-accent/25",
          "disabled:pointer-events-none disabled:opacity-60",
        )}
      >
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute -inset-0.75 rounded-full bg-brand-accent",
            "shadow-[0_4px_14px_rgb(58_107_82/0.25)] transition-all duration-300 ease-in-out motion-reduce:transition-none",
            "group-hover:bg-[#325a45] group-hover:shadow-[0_6px_18px_rgb(58_107_82/0.3)]",
            "group-disabled:shadow-none",
          )}
        />
        <BorderTrace durationSec={1.4} radius={24} />
        <span className="relative z-10 inline-flex items-center gap-2">
          {formState === "submitting" ? (
            <>
              <LuLoader className="size-4 animate-spin" aria-hidden />
              {labels.submitting}
            </>
          ) : (
            <>
              <LuSend className="size-4 shrink-0" aria-hidden />
              {labels.submitButton}
            </>
          )}
        </span>
      </button>
    </form>
  );
}

import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import { WorkflowSection } from "@/components/sections/workflow";
import { ContactFormFields } from "./ContactFormFields";
import {
  ContactInfo,
  ContactSectionBadge,
  ContactSectionDescription,
  ContactSectionHeader,
  ContactSectionTitle,
} from "./ContactInfo";

interface SelectOption {
  value: string;
  label: string;
}

interface ContactItem {
  label: string;
  value?: string;
  href?: string;
}

interface ContactFormProps {
  formBadge: string;
  formTitle: string;
  formDescription: string;

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
  submitButton: string;
  submitting: string;
  successTitle: string;
  successMessage: string;
  successButtonBack: string;
  errorMessage: string;
  serviceOptions: SelectOption[];
  tierOptions: SelectOption[];
  servicePackages: Record<string, SelectOption[]>;
  budgetOptions: SelectOption[];

  infoBadge: string;
  infoTitle: string;
  contactItems: ContactItem[];

  className?: string;
}

export function ContactForm({
  formBadge,
  formTitle,
  formDescription,
  infoBadge,
  infoTitle,
  contactItems,
  className,
  ...fieldLabels
}: ContactFormProps) {
  const formLabels = {
    ...fieldLabels,
    serviceOptions: fieldLabels.serviceOptions,
    tierOptions: fieldLabels.tierOptions,
    servicePackages: fieldLabels.servicePackages,
    budgetOptions: fieldLabels.budgetOptions,
  };

  const formCard = (
    <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-[0_2px_16px_rgb(0_0_0/0.04)] sm:p-8">
      <ContactFormFields labels={formLabels} className="h-full" />
    </div>
  );

  return (
    <section
      id="contact-form"
      aria-labelledby="contact-form-title"
      className={`scroll-mt-16 bg-[#F8F9FA] pt-10 pb-16 md:pt-12 md:pb-20 ${className ?? ""}`}
    >
      <SiteContainer>
        <div className="flex flex-col gap-12 lg:hidden">
          <section>
            <SectionScrollReveal direction="up">
              <ContactSectionHeader
                badge={formBadge}
                title={formTitle}
                description={formDescription}
                titleAs="h1"
                titleId="contact-form-title"
              />
            </SectionScrollReveal>
            <SectionScrollReveal direction="left" delay={0.06} trigger="entry">
              <div className="mt-10">{formCard}</div>
            </SectionScrollReveal>
          </section>

          <SectionScrollReveal direction="right" trigger="entry">
            <ContactInfo
              badge={infoBadge}
              title={infoTitle}
              items={contactItems}
              showHeader={false}
            />
          </SectionScrollReveal>
        </div>

        <div className="hidden lg:grid lg:grid-cols-[1fr_380px] lg:grid-rows-[auto_1fr] lg:items-stretch lg:gap-x-16 lg:gap-y-10 xl:gap-x-20">
          <SectionScrollReveal direction="left">
            <div>
              <ContactSectionBadge badge={formBadge} />
              <div className="mt-5">
                <ContactSectionTitle
                  title={formTitle}
                  titleAs="h1"
                  titleId="contact-form-title"
                />
                <ContactSectionDescription description={formDescription} />
              </div>
            </div>
          </SectionScrollReveal>
          <div aria-hidden />
          <SectionScrollReveal direction="left" delay={0.06} className="h-full">
            <div className="h-full">{formCard}</div>
          </SectionScrollReveal>
          <SectionScrollReveal
            direction="right"
            delay={0.06}
            trigger="entry"
            className="h-full"
          >
            <ContactInfo
              badge={infoBadge}
              title={infoTitle}
              items={contactItems}
              showHeader={false}
              stretchItems
              className="h-full"
            />
          </SectionScrollReveal>
        </div>

        <SectionScrollReveal direction="up" trigger="entry">
          <div className="mt-16 rounded-3xl border border-border/60 bg-card p-8 shadow-[0_2px_16px_rgb(0_0_0/0.04)] md:mt-20 md:p-12">
            <WorkflowSection contentOnly />
          </div>
        </SectionScrollReveal>
      </SiteContainer>
    </section>
  );
}

import { Mail, Phone, X } from "lucide-react";
import { resolveContactLabels } from "@/lib/contact-labels";
import { Button } from "@/components/ui/shadcn/button";
import type { AdminMessageItem } from "./types";
import { formatDetailDate, getInitials } from "./utils";

interface MessageDetailPanelProps {
  message: AdminMessageItem;
  marking: boolean;
  onClose: () => void;
}

export function MessageDetailPanel({
  message,
  marking,
  onClose,
}: MessageDetailPanelProps) {
  const labels = resolveContactLabels({
    service: message.service ?? "",
    servicePackage: message.servicePackage ?? "",
    serviceTier: message.serviceTier ?? "",
    budget: message.budget ?? "",
  });

  const details = [
    { label: "HİZMET", value: labels.service },
    { label: "PAKET", value: labels.servicePackage },
    { label: "KADEME", value: labels.serviceTier },
    { label: "BÜTÇE", value: labels.budget },
  ].filter((item) => item.value);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        type="button"
        aria-label="Kapat"
        className="absolute inset-0 bg-black/35 backdrop-blur-[2px] transition-opacity"
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="message-detail-title"
        className="relative flex h-full w-full max-w-xl flex-col border-l border-border/60 bg-white shadow-2xl motion-safe:animate-in motion-safe:slide-in-from-right motion-safe:duration-300 sm:max-w-lg md:max-w-xl"
      >
        <div className="relative overflow-hidden border-b border-border/60">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-br from-brand-accent/8 via-transparent to-transparent"
          />
          <div className="relative flex items-start justify-between gap-4 px-5 py-5 sm:px-6">
            <div className="flex min-w-0 items-start gap-3.5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand-accent text-sm font-semibold tracking-wide text-white shadow-sm shadow-brand-accent/25">
                {getInitials(message.name)}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-brand-accent">
                    MESAJ DETAYI
                  </p>
                  {marking ? (
                    <span className="text-[10px] text-muted-foreground">
                      kaydediliyor…
                    </span>
                  ) : null}
                </div>
                <h2
                  id="message-detail-title"
                  className="mt-1 truncate text-xl font-semibold tracking-tight text-foreground"
                >
                  {message.name}
                </h2>
                <time
                  dateTime={message.createdAt}
                  className="mt-1 block text-xs text-muted-foreground"
                >
                  {formatDetailDate(message.createdAt)}
                </time>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              className="shrink-0 rounded-xl border-border/70"
              onClick={onClose}
              aria-label="Kapat"
            >
              <X className="size-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 space-y-5 overflow-x-hidden overflow-y-auto px-5 py-5 sm:px-6">
          <div className="grid gap-2 sm:grid-cols-2">
            <a
              href={`mailto:${message.email}`}
              className="inline-flex min-w-0 items-center gap-2.5 rounded-xl border border-border/60 bg-[#F8FAF9] px-3.5 py-2.5 text-sm text-foreground transition hover:border-brand-accent/30 hover:bg-brand-accent/4 hover:text-brand-accent"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-muted-foreground shadow-sm">
                <Mail className="size-3.5" />
              </span>
              <span className="truncate">{message.email}</span>
            </a>
            {message.phone ? (
              <a
                href={`tel:${message.phone}`}
                className="inline-flex items-center gap-2.5 rounded-xl border border-border/60 bg-[#F8FAF9] px-3.5 py-2.5 text-sm text-foreground transition hover:border-brand-accent/30 hover:bg-brand-accent/4 hover:text-brand-accent"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-muted-foreground shadow-sm">
                  <Phone className="size-3.5" />
                </span>
                {message.phone}
              </a>
            ) : null}
          </div>

          {details.length > 0 ? (
            <dl className="grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 sm:grid-cols-2">
              {details.map((item) => (
                <div key={item.label} className="bg-[#F8FAF9] px-4 py-3.5">
                  <dt className="text-[10px] font-semibold tracking-widest text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          <div className="rounded-2xl border border-border/60 bg-white p-4 sm:p-5">
            <p className="text-[10px] font-semibold tracking-widest text-muted-foreground">
              MESAJ
            </p>
            <p className="mt-3 wrap-break-word whitespace-pre-wrap break-all text-[15px] leading-7 text-foreground/90">
              {message.content?.trim() || "—"}
            </p>
          </div>
        </div>

        <div className="border-t border-border/60 bg-[#F8FAF9]/80 px-5 py-4 sm:px-6">
          <Button
            asChild
            className="h-11 w-full rounded-xl bg-brand-accent text-sm font-semibold shadow-sm shadow-brand-accent/20 hover:bg-brand-accent/90"
          >
            <a
              href={`mailto:${message.email}?subject=${encodeURIComponent(`Re: Teklif talebi — ${message.name}`)}`}
            >
              <Mail className="size-4" />
              E-posta ile yanıtla
            </a>
          </Button>
        </div>
      </aside>
    </div>
  );
}

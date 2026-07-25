import { Link } from "@/i18n/navigation";
import { LuArrowUpRight, LuMessageCircle } from "react-icons/lu";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import { cn } from "@/lib/utils";

interface FaqContactHintProps {
  hint: string;
  linkLabel: string;
  className?: string;
}

export function FaqContactHint({
  hint,
  linkLabel,
  className,
}: FaqContactHintProps) {
  return (
    <SectionScrollReveal direction="up" trigger="entry" className={className}>
      <div className="relative overflow-hidden rounded-2xl border border-brand-accent/20 bg-linear-to-br from-brand-accent/8 via-white to-white p-6 shadow-[0_8px_32px_rgb(58_107_82/0.08)] dark:via-card sm:p-7">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-brand-accent/10 blur-3xl"
        />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent/12 text-brand-accent ring-1 ring-brand-accent/15">
              <LuMessageCircle className="size-5" strokeWidth={1.75} aria-hidden />
            </div>
            <p className="text-sm leading-relaxed text-foreground/80 sm:text-[0.9375rem]">
              {hint}
            </p>
          </div>

          <Link
            href="/iletisim"
            className={cn(
              "inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-accent px-5 py-3 text-sm font-semibold text-white",
              "shadow-[0_8px_24px_rgb(58_107_82/0.24)] transition-all duration-300",
              "hover:-translate-y-0.5 hover:bg-brand-accent/92 hover:shadow-[0_12px_32px_rgb(58_107_82/0.3)]",
            )}
          >
            {linkLabel}
            <LuArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </SectionScrollReveal>
  );
}

import { getLocale } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { toLatinUppercase } from "@/lib/utils";

interface LegalPageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
}

export async function LegalPageHero({
  badge,
  title,
  subtitle,
}: LegalPageHeroProps) {
  const locale = (await getLocale()) as "tr" | "en";

  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-[#050f0c] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgb(58_107_82/0.16),transparent)]"
      />
      <SiteContainer className="relative py-16 sm:py-20">
        <SectionBadge variant="emerald-muted">
          {toLatinUppercase(badge, locale)}
        </SectionBadge>
        <div
          aria-hidden
          className="mt-6 h-px w-12 bg-linear-to-r from-brand-accent to-transparent"
        />
        <h1 className="mt-5 max-w-3xl font-(family-name:--font-heading) text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-emerald-50/65 sm:text-base">
          {subtitle}
        </p>
      </SiteContainer>
    </section>
  );
}

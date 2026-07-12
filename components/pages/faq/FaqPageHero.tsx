import { getLocale } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import { ServicesPageHeroImage } from "@/components/pages/services/ServicesPageHeroImage";
import { toLatinUppercase } from "@/lib/utils";

interface FaqPageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  imageAlt: string;
}

export async function FaqPageHero({
  badge,
  title,
  subtitle,
  imageAlt,
}: FaqPageHeroProps) {
  const locale = (await getLocale()) as "tr" | "en";

  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-[#050f0c] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgb(58_107_82/0.14),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-20 size-[420px] rounded-full bg-emerald-600/6 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-20 size-[360px] rounded-full bg-emerald-800/5 blur-[100px]"
      />
      <SiteContainer className="relative py-16 sm:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <SectionScrollReveal
            direction="left"
            when="mount"
            className="min-w-0 max-w-2xl lg:max-w-none"
          >
            <SectionBadge variant="emerald-muted">
              {toLatinUppercase(badge, locale)}
            </SectionBadge>
            <div
              aria-hidden
              className="mt-8 h-px w-12 bg-linear-to-r from-brand-accent to-transparent"
            />
            <h1 className="mt-6 font-(family-name:--font-heading) text-[2rem] font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-[3rem]">
              {title}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-[1.85] text-emerald-50/75 sm:mt-6 sm:text-base lg:text-lg">
              {subtitle}
            </p>
          </SectionScrollReveal>

          <SectionScrollReveal
            direction="right"
            delay={0.14}
            when="mount"
            className="min-w-0"
          >
            <ServicesPageHeroImage
              alt={imageAlt}
              src="/images/pages/faq/hero.png"
            />
          </SectionScrollReveal>
        </div>
      </SiteContainer>
    </section>
  );
}

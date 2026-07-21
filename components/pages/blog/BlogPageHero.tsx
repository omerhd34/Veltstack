import { getLocale } from "next-intl/server";
import { LuChevronDown } from "react-icons/lu";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { HeroStatsCards, type HeroStat } from "@/components/ui/HeroStatsCards";
import { PageScrollAnchor } from "@/components/ui/PageScrollAnchor";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import { PageHeroMobileBackdrop } from "@/components/ui/PageHeroMobileBackdrop";
import { ServicesPageHeroImage } from "@/components/pages/services/ServicesPageHeroImage";
import { toLatinUppercase } from "@/lib/utils";

interface BlogPageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  subtitleSecondary: string;
  imageAlt: string;
  scrollLabel: string;
  stats: HeroStat[];
}

export async function BlogPageHero({
  badge,
  title,
  subtitle,
  subtitleSecondary,
  imageAlt,
  scrollLabel,
  stats,
}: BlogPageHeroProps) {
  const locale = (await getLocale()) as "tr" | "en";

  return (
    <>
    <section
      data-page-hero
      className="relative flex min-h-dvh flex-col overflow-hidden bg-[#050f0c] pt-18 text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgb(58_107_82/0.18),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(58_107_82/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(58_107_82/0.04)_1px,transparent_1px)] bg-size-[56px_56px] mask-[radial-gradient(ellipse_80%_70%_at_50%_40%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-20 size-105 rounded-full bg-emerald-600/6 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-20 size-90 rounded-full bg-emerald-800/5 blur-[100px]"
      />

      <PageHeroMobileBackdrop src="/images/pages/blog/hero-mobile.png" />

      <SiteContainer className="relative flex h-[calc(100dvh-4.5rem)] flex-col pt-4 pb-5 sm:h-auto sm:min-h-[calc(100dvh-4.5rem)] sm:py-10">
        <div className="grid min-h-0 flex-1 items-start gap-4 overflow-hidden sm:gap-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12">
          <SectionScrollReveal
            direction="left"
            when="mount"
            className="relative z-10 min-w-0 max-w-2xl"
          >
            <div className="min-w-0 max-w-2xl">
              <SectionBadge
                variant="emerald-muted"
                className="hidden sm:inline-flex"
              >
                {toLatinUppercase(badge, locale)}
              </SectionBadge>

              <div
                aria-hidden
                className="mt-8 hidden h-px w-12 bg-linear-to-r from-brand-accent to-transparent sm:block"
              />

              <h1 className="font-(family-name:--font-heading) text-[2rem] font-bold leading-[1.08] tracking-tight sm:mt-6 sm:text-4xl lg:text-[3rem]">
                {title}
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-[1.85] text-emerald-50/75 sm:mt-6 sm:text-base lg:text-lg">
                {subtitle}
              </p>
              <p className="mt-3 hidden max-w-xl text-sm leading-[1.85] text-emerald-50/45 sm:block sm:text-[0.9375rem]">
                {subtitleSecondary}
              </p>
            </div>
          </SectionScrollReveal>

          <SectionScrollReveal
            direction="right"
            when="mount"
            delay={0.14}
            className="min-w-0 min-h-0"
          >
            <ServicesPageHeroImage
              src="/images/pages/blog/hero.png"
              alt={imageAlt}
              className="hidden sm:block"
            />
          </SectionScrollReveal>
        </div>

        <div className="mt-auto shrink-0 border-t border-emerald-900/35 pt-4 sm:pt-8">
          <SectionScrollReveal direction="up" when="mount" delay={0.28}>
            <HeroStatsCards stats={stats} />
          </SectionScrollReveal>

          <a
            href="#blog-grid"
            className="mt-4 flex flex-col items-center gap-1.5 text-emerald-300/55 transition-colors hover:text-emerald-300/80 sm:mt-8"
          >
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em]">
              {scrollLabel}
            </span>
            <LuChevronDown className="size-4 animate-bounce" aria-hidden />
          </a>
        </div>
      </SiteContainer>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-emerald-500/20 to-transparent"
      />
    </section>
    <PageScrollAnchor id="blog-grid" />
    </>
  );
}

import { LuChevronDown } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ServicesPageHeroImage } from "@/components/pages/services/ServicesPageHeroImage";
import { PageHeroMobileBackdrop } from "@/components/ui/PageHeroMobileBackdrop";
import { PageScrollAnchor } from "@/components/ui/PageScrollAnchor";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import { HeroStatsCards, type HeroStat } from "@/components/ui/HeroStatsCards";

interface ServiceHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  subtitleSecondary: string;
  imageAlt: string;
  imageSrc: string;
  scrollLabel: string;
  stats: HeroStat[];
  className?: string;
}

export function ServiceHero({
  badge,
  title,
  subtitle,
  subtitleSecondary,
  imageAlt,
  imageSrc,
  scrollLabel,
  stats,
  className,
}: ServiceHeroProps) {
  return (
    <>
      <section
        data-page-hero
        className={`relative flex h-dvh max-h-dvh flex-col overflow-hidden bg-[#050f0c] pt-18 text-white ${className ?? ""}`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgb(58_107_82/0.14),transparent)]" />
          <div className="absolute -right-20 top-20 size-105 rounded-full bg-emerald-600/6 blur-[120px]" />
          <div className="absolute -left-20 bottom-20 size-90 rounded-full bg-emerald-800/5 blur-[100px]" />
        </div>

        <PageHeroMobileBackdrop
          src={imageSrc.replace("/hero.png", "/hero-mobile.png")}
        />

        <SiteContainer className="relative flex min-h-0 flex-1 flex-col pt-4 pb-6 lg:py-10">
          <div className="grid min-h-0 flex-1 items-start gap-4 overflow-hidden sm:gap-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12">
            <SectionScrollReveal
              direction="left"
              when="mount"
              className="relative z-10 min-w-0"
            >
              <div className="min-w-0">
                <SectionBadge className="hidden sm:inline-flex">
                  {badge}
                </SectionBadge>

                <div
                  aria-hidden
                  className="mt-8 hidden h-px w-12 bg-linear-to-r from-brand-accent to-transparent lg:block"
                />

                <h1 className="font-(family-name:--font-heading) text-[2rem] font-bold leading-[1.08] tracking-tight sm:mt-6 sm:text-4xl lg:text-[3rem]">
                  {title}
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-[1.85] text-emerald-50/75 sm:mt-6 sm:text-base lg:text-lg">
                  {subtitle}
                </p>
                <p className="mt-3 hidden max-w-xl text-sm leading-[1.85] text-emerald-50/65 sm:block sm:text-[0.9375rem]">
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
                alt={imageAlt}
                src={imageSrc}
                className="hidden lg:block"
                frameClassName="h-[180px] sm:h-[320px] lg:h-[420px]"
              />
            </SectionScrollReveal>
          </div>

          <div className="mt-auto shrink-0 pt-4 lg:border-t lg:border-emerald-900/35 lg:pt-8">
            <SectionScrollReveal direction="up" when="mount" delay={0.28}>
              <HeroStatsCards stats={stats} />
            </SectionScrollReveal>

            <Link
              href="#service-features"
              className="mt-4 flex flex-col items-center gap-1.5 text-emerald-300/55 transition-colors hover:text-emerald-300/80 lg:mt-8"
            >
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em]">
                {scrollLabel}
              </span>
              <LuChevronDown className="size-4 animate-bounce" aria-hidden />
            </Link>
          </div>
        </SiteContainer>
      </section>
      <PageScrollAnchor id="service-features" />
    </>
  );
}

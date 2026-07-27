import { getLocale } from "next-intl/server";
import type { IconType } from "react-icons";
import { LuChevronDown } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { PageHeroShell } from "@/components/ui/page-hero";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import { toLatinUppercase } from "@/lib/utils";

interface LegalPageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  scrollLabel: string;
  icon: IconType;
}

export async function LegalPageHero({
  badge,
  title,
  subtitle,
  lastUpdated,
  scrollLabel,
  icon: Icon,
}: LegalPageHeroProps) {
  const locale = (await getLocale()) as "tr" | "en";

  return (
    <PageHeroShell showGrid showBottomHairline glow="legal">
      <SiteContainer className="relative flex min-h-[calc(100dvh-4.5rem)] flex-col justify-center pb-24 pt-8 sm:pb-28 sm:pt-10 2xl:pt-12">
        <Icon
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-0 hidden size-72 -translate-y-1/2 text-emerald-500/8 sm:block lg:right-4 lg:size-88 xl:right-8"
          strokeWidth={1}
        />

        <SectionScrollReveal
          direction="up"
          when="mount"
          className="relative z-1 max-w-3xl"
        >
          <SectionBadge variant="emerald-muted">
            {toLatinUppercase(badge, locale)}
          </SectionBadge>

          <div
            aria-hidden
            className="mt-7 hidden h-px w-14 bg-linear-to-r from-brand-accent via-brand-accent/50 to-transparent lg:block"
          />

          <h1 className="mt-6 font-(family-name:--font-heading) text-[33.75px] font-bold leading-[1.2] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl lg:leading-tight">
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-emerald-50/70">
            {subtitle}
          </p>

          <p className="mt-8 inline-flex items-center gap-2 text-[0.6875rem] font-medium tracking-[0.12em] text-emerald-300/45 uppercase sm:text-xs sm:tracking-[0.14em]">
            <span
              aria-hidden
              className="inline-block size-1 rounded-full bg-brand-accent/70"
            />
            {lastUpdated}
          </p>
        </SectionScrollReveal>
      </SiteContainer>

      <Link
        href="#legal-content"
        className="absolute inset-x-0 bottom-7 z-20 mx-auto flex w-fit flex-col items-center gap-1.5 text-emerald-100/85 transition-colors hover:text-white sm:bottom-9"
      >
        <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em]">
          {scrollLabel}
        </span>
        <LuChevronDown className="size-4 animate-bounce" aria-hidden />
      </Link>
    </PageHeroShell>
  );
}

import { getLocale } from "next-intl/server";
import type { IconType } from "react-icons";
import { LuChevronDown } from "react-icons/lu";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionBadge } from "@/components/ui/SectionBadge";
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
    <section
      data-page-hero
      className="relative flex min-h-dvh flex-col overflow-hidden bg-[#050f0c] pt-18 text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgb(58_107_82/0.2),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(58_107_82/0.045)_1px,transparent_1px),linear-gradient(90deg,rgb(58_107_82/0.045)_1px,transparent_1px)] bg-size-[56px_56px] mask-[radial-gradient(ellipse_80%_70%_at_40%_35%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-16 right-[12%] size-85 rounded-full bg-emerald-600/8 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 size-75 rounded-full bg-emerald-800/6 blur-[100px]"
      />

      <SiteContainer className="relative flex min-h-[calc(100dvh-4.5rem)] flex-col justify-center pb-24 pt-8 sm:pb-28 sm:pt-10">
        <Icon
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-0 hidden size-72 -translate-y-1/2 text-emerald-500/8 sm:block lg:right-4 lg:size-88 xl:right-8"
          strokeWidth={1}
        />

        <SectionScrollReveal direction="up" when="mount" className="relative z-1 max-w-3xl">
          <SectionBadge variant="emerald-muted">
            {toLatinUppercase(badge, locale)}
          </SectionBadge>

          <div
            aria-hidden
            className="mt-7 h-px w-14 bg-linear-to-r from-brand-accent via-brand-accent/50 to-transparent"
          />

          <h1 className="mt-6 font-(family-name:--font-heading) text-[2rem] font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-[1.85] text-emerald-50/70 sm:text-base lg:text-lg">
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

      <a
        href="#legal-content"
        className="absolute inset-x-0 bottom-7 z-20 mx-auto flex w-fit flex-col items-center gap-1.5 text-emerald-100/85 transition-colors hover:text-white sm:bottom-9"
      >
        <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em]">
          {scrollLabel}
        </span>
        <LuChevronDown className="size-4 animate-bounce" aria-hidden />
      </a>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-emerald-500/25 to-transparent"
      />
    </section>
  );
}

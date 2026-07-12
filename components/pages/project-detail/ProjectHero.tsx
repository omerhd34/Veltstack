import type { IconType } from "react-icons";
import { LuChevronDown, LuExternalLink } from "react-icons/lu";
import Image from "next/image";
import { PageScrollAnchor } from "@/components/ui/PageScrollAnchor";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import { HeroStatsCards } from "@/components/ui/HeroStatsCards";
import {
  PAGE_HERO_IMAGE_FRAME_CLASS,
  PAGE_HERO_IMAGE_WRAPPER_CLASS,
} from "@/components/pages/services/ServicesPageHeroImage";
import { cn } from "@/lib/utils";

interface ProjectHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  subtitleSecondary: string;
  metrics: { value: string; label: string }[];
  demoUrl?: string;
  demoLabel: string;
  scrollLabel: string;
  imageUrl?: string;
  coverGradient: string;
  icon: IconType;
  className?: string;
}

export function ProjectHero({
  badge,
  title,
  subtitle,
  subtitleSecondary,
  metrics,
  demoUrl,
  demoLabel,
  scrollLabel,
  imageUrl,
  coverGradient,
  icon: Icon,
  className,
}: ProjectHeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-4.5rem)] flex-col overflow-hidden bg-[#050f0c] text-white",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgb(58_107_82/0.16),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 size-[480px] rounded-full bg-emerald-600/8 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 size-[360px] rounded-full bg-emerald-800/6 blur-[100px]"
      />

      <SiteContainer className="relative flex min-h-[calc(100svh-4.5rem)] flex-col py-8 sm:py-10 md:py-12">
        <div className="grid min-h-0 flex-1 items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <SectionScrollReveal
            direction="left"
            when="mount"
            className="min-w-0"
          >
            <div className="min-w-0">
              <SectionBadge>{badge}</SectionBadge>

              <div
                aria-hidden
                className="mt-8 h-px w-12 bg-linear-to-r from-brand-accent to-transparent"
              />

              <h1 className="mt-6 font-(family-name:--font-heading) text-[2rem] font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-[3rem]">
                {title}
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-[1.85] text-emerald-50/75 sm:text-base lg:text-lg">
                {subtitle}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-[1.85] text-emerald-50/45 sm:text-[0.9375rem]">
                {subtitleSecondary}
              </p>
            </div>
          </SectionScrollReveal>

          <SectionScrollReveal
            direction="right"
            when="mount"
            delay={0.14}
            className="min-w-0"
          >
            <div className={PAGE_HERO_IMAGE_WRAPPER_CLASS}>
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[2rem] bg-linear-to-br from-brand-accent/20 via-transparent to-emerald-600/10 blur-2xl"
              />
              {demoUrl ? (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/preview relative block"
                  aria-label={`${demoLabel}: ${title}`}
                >
                  <PreviewFrame
                    imageUrl={imageUrl}
                    title={title}
                    coverGradient={coverGradient}
                    icon={Icon}
                  />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors group-hover/preview:bg-emerald-600/80">
                    <LuExternalLink className="size-3.5" aria-hidden />
                    {demoLabel}
                  </span>
                </a>
              ) : (
                <PreviewFrame
                  imageUrl={imageUrl}
                  title={title}
                  coverGradient={coverGradient}
                  icon={Icon}
                />
              )}
            </div>
          </SectionScrollReveal>
        </div>

        <SectionScrollReveal
          direction="up"
          when="mount"
          delay={0.28}
          className="mt-auto shrink-0 border-t border-emerald-900/35 pt-6 sm:pt-8"
        >
          <HeroStatsCards stats={metrics} />

          <a
            href="#project-overview"
            className="mt-6 flex flex-col items-center gap-1.5 text-emerald-300/50 transition-colors hover:text-emerald-300/80 sm:mt-8"
          >
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em]">
              {scrollLabel}
            </span>
            <LuChevronDown className="size-4 animate-bounce" aria-hidden />
          </a>
        </SectionScrollReveal>
      </SiteContainer>
      <PageScrollAnchor id="project-overview" />
    </section>
  );
}

interface PreviewFrameProps {
  imageUrl?: string;
  title: string;
  coverGradient: string;
  icon: IconType;
}

function PreviewFrame({
  imageUrl,
  title,
  coverGradient,
  icon: Icon,
}: PreviewFrameProps) {
  return (
    <div
      className={cn(
        PAGE_HERO_IMAGE_FRAME_CLASS,
        "transition-transform duration-500 group-hover/preview:scale-[1.01]",
        !imageUrl && cn("bg-linear-to-br", coverGradient),
      )}
    >
      {imageUrl ? (
        <>
          <Image
            src={imageUrl}
            alt={title}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 90vw"
            className="object-cover transition-transform duration-700 group-hover/preview:scale-105"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#050f0c]/60 via-transparent to-transparent"
          />
        </>
      ) : (
        <div className="flex h-full items-center justify-center">
          <Icon
            className="size-24 text-white/20 lg:size-32"
            strokeWidth={1.25}
            aria-hidden
          />
        </div>
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-emerald-400/15"
      />
    </div>
  );
}

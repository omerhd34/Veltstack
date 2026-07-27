import type { ReactNode } from "react";
import { SiteContainer } from "@/components/layout/SiteContainer";
import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { PageScrollAnchor } from "@/components/ui/PageScrollAnchor";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import { PageHeroCopy } from "./PageHeroCopy";
import { PageHeroFooter } from "./PageHeroFooter";
import {
  PAGE_HERO_DETAIL_FRAME_CLASS,
  PageHeroImage,
} from "./PageHeroImage";
import { PageHeroShell } from "./PageHeroShell";

type BadgeVariant =
  | "emerald"
  | "emerald-soft"
  | "emerald-muted"
  | "emerald-label"
  | "accent"
  | "accent-card"
  | "accent-glass";

interface PageHeroDetailProps {
  title: string;
  subtitle: string;
  scrollHref: string;
  scrollLabel: string;
  badge?: string;
  badgeVariant?: BadgeVariant;
  leading?: ReactNode;
  trailing?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  media?: ReactNode;
  belowMedia?: ReactNode;
  frameClassName?: string;
  stats?: HeroStat[];
  borderAlways?: boolean;
  showGrid?: boolean;
  showBottomHairline?: boolean;
  glow?: "default" | "rich" | "legal";
  className?: string;
}

export function PageHeroDetail({
  title,
  subtitle,
  scrollHref,
  scrollLabel,
  badge,
  badgeVariant,
  leading,
  trailing,
  imageSrc,
  imageAlt,
  media,
  belowMedia,
  frameClassName,
  stats,
  borderAlways = false,
  showGrid = false,
  showBottomHairline = false,
  glow = "default",
  className,
}: PageHeroDetailProps) {
  const anchorId = scrollHref.replace(/^#/, "");

  return (
    <>
      <PageHeroShell
        className={className}
        showGrid={showGrid}
        showBottomHairline={showBottomHairline}
        glow={glow}
      >
        <SiteContainer className="relative flex flex-1 flex-col pt-4 pb-8 lg:min-h-0 lg:py-10 2xl:py-12">
          <div className="grid min-h-0 flex-1 items-start gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 xl:gap-14 2xl:gap-16">
            <PageHeroCopy
              badge={badge}
              title={title}
              subtitle={subtitle}
              badgeVariant={badgeVariant}
              badgeAlwaysVisible
              leading={leading}
              trailing={trailing}
            />

            {media || imageSrc ? (
              <SectionScrollReveal
                direction="right"
                when="mount"
                delay={0.14}
                className="min-h-0 min-w-0"
              >
                <div className="flex flex-col gap-4 sm:gap-5">
                  {media ?? (
                    <PageHeroImage
                      src={imageSrc}
                      alt={imageAlt ?? title}
                      frameClassName={
                        frameClassName ?? PAGE_HERO_DETAIL_FRAME_CLASS
                      }
                    />
                  )}
                  {belowMedia}
                </div>
              </SectionScrollReveal>
            ) : null}
          </div>

          <PageHeroFooter
            scrollHref={scrollHref}
            scrollLabel={scrollLabel}
            stats={stats}
            borderAlways={borderAlways}
          />
        </SiteContainer>
      </PageHeroShell>
      <PageScrollAnchor id={anchorId} />
    </>
  );
}

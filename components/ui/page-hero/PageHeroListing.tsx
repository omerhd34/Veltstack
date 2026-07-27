import { SiteContainer } from "@/components/layout/SiteContainer";
import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { PageHeroMobileBackdrop } from "@/components/ui/PageHeroMobileBackdrop";
import { PageScrollAnchor } from "@/components/ui/PageScrollAnchor";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import { PageHeroCopy } from "./PageHeroCopy";
import { PageHeroFooter } from "./PageHeroFooter";
import { PageHeroImage } from "./PageHeroImage";
import { PageHeroShell } from "./PageHeroShell";

type BadgeVariant =
  | "emerald"
  | "emerald-soft"
  | "emerald-muted"
  | "emerald-label"
  | "accent"
  | "accent-card"
  | "accent-glass";

interface PageHeroListingProps {
  badge: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageMobileSrc: string;
  imageAlt: string;
  scrollHref: string;
  scrollLabel: string;
  stats: HeroStat[];
  badgeVariant?: BadgeVariant;
  showGrid?: boolean;
  showBottomHairline?: boolean;
  glow?: "default" | "rich";
  imageFrameClassName?: string;
  className?: string;
}

export function PageHeroListing({
  badge,
  title,
  subtitle,
  imageSrc,
  imageMobileSrc,
  imageAlt,
  scrollHref,
  scrollLabel,
  stats,
  badgeVariant,
  showGrid = false,
  showBottomHairline = false,
  glow = "default",
  imageFrameClassName,
  className,
}: PageHeroListingProps) {
  const anchorId = scrollHref.replace(/^#/, "");

  return (
    <>
      <PageHeroShell
        className={className}
        showGrid={showGrid}
        showBottomHairline={showBottomHairline}
        glow={glow}
      >
        <PageHeroMobileBackdrop src={imageMobileSrc} />

        <SiteContainer className="relative flex min-h-0 flex-1 flex-col pt-8 pb-6 sm:pt-6 lg:py-10 2xl:py-12">
          <div className="grid min-h-0 flex-1 items-start gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 xl:gap-14 2xl:gap-16">
            <PageHeroCopy
              badge={badge}
              title={title}
              subtitle={subtitle}
              badgeVariant={badgeVariant}
            />

            <SectionScrollReveal
              direction="right"
              when="mount"
              delay={0.14}
              className="min-h-0 min-w-0"
            >
              <PageHeroImage
                src={imageSrc}
                alt={imageAlt}
                frameClassName={imageFrameClassName}
                className="hidden lg:block"
              />
            </SectionScrollReveal>
          </div>

          <PageHeroFooter
            scrollHref={scrollHref}
            scrollLabel={scrollLabel}
            stats={stats}
          />
        </SiteContainer>
      </PageHeroShell>
      <PageScrollAnchor id={anchorId} />
    </>
  );
}

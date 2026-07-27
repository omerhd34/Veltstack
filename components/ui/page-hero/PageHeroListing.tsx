import { SiteContainer } from "@/components/layout/SiteContainer";
import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { PageHeroMobileBackdrop } from "@/components/ui/PageHeroMobileBackdrop";
import { PageScrollAnchor } from "@/components/ui/PageScrollAnchor";
import { PageHeroCopy } from "./PageHeroCopy";
import { PageHeroFooter } from "./PageHeroFooter";
import { PageHeroShell } from "./PageHeroShell";

type BadgeVariant =
  | "emerald"
  | "emerald-soft"
  | "emerald-muted"
  | "emerald-label"
  | "soft"
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
  className?: string;
}

export function PageHeroListing({
  badge,
  title,
  subtitle,
  imageSrc,
  imageMobileSrc,
  scrollHref,
  scrollLabel,
  stats,
  badgeVariant,
  showGrid = false,
  showBottomHairline = false,
  glow = "default",
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
        <PageHeroMobileBackdrop src={imageMobileSrc} desktopSrc={imageSrc} />

        <SiteContainer className="relative flex min-h-0 flex-1 flex-col pt-8 pb-6 sm:pt-6 lg:py-10 2xl:py-12">
          <div className="flex min-h-0 flex-1 items-start justify-center lg:items-center">
            <PageHeroCopy
              badge={badge}
              title={title}
              subtitle={subtitle}
              badgeVariant={badgeVariant}
              align="center"
            />
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

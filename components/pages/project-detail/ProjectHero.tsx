import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { PageHeroListing } from "@/components/ui/page-hero";
import { pageAnchorHref } from "@/lib/page-anchors";

interface ProjectHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  metrics: HeroStat[];
  scrollLabel: string;
  imageSrc: string;
  imageMobileSrc: string;
  imageAlt: string;
  className?: string;
}

export function ProjectHero({
  badge,
  title,
  subtitle,
  metrics,
  scrollLabel,
  imageSrc,
  imageMobileSrc,
  imageAlt,
  className,
}: ProjectHeroProps) {
  return (
    <PageHeroListing
      badge={badge}
      title={title}
      subtitle={subtitle}
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      imageMobileSrc={imageMobileSrc}
      scrollHref={pageAnchorHref("projectOverview")}
      scrollLabel={scrollLabel}
      stats={metrics}
      className={className}
    />
  );
}

import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { PageHeroListing } from "@/components/ui/page-hero";
import { pageAnchorHref } from "@/lib/page-anchors";

interface ProjectsPageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  imageAlt: string;
  scrollLabel: string;
  stats: HeroStat[];
  className?: string;
}

export function ProjectsPageHero({
  badge,
  title,
  subtitle,
  imageAlt,
  scrollLabel,
  stats,
  className,
}: ProjectsPageHeroProps) {
  return (
    <PageHeroListing
      badge={badge}
      title={title}
      subtitle={subtitle}
      imageAlt={imageAlt}
      imageSrc="/images/pages/projects/hero.webp"
      imageMobileSrc="/images/pages/projects/hero-mobile.webp"
      scrollHref={pageAnchorHref("projectsShowcase")}
      scrollLabel={scrollLabel}
      stats={stats}
      className={className}
    />
  );
}

import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { PageHeroListing } from "@/components/ui/page-hero";

interface ProjectsPageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  subtitleSecondary: string;
  imageAlt: string;
  scrollLabel: string;
  stats: HeroStat[];
  className?: string;
}

export function ProjectsPageHero({
  badge,
  title,
  subtitle,
  subtitleSecondary,
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
      subtitleSecondary={subtitleSecondary}
      imageAlt={imageAlt}
      imageSrc="/images/pages/projects/hero.png"
      imageMobileSrc="/images/pages/projects/hero-mobile.png"
      scrollHref="#projects-showcase"
      scrollLabel={scrollLabel}
      stats={stats}
      className={className}
    />
  );
}

import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { PageHeroListing } from "@/components/ui/page-hero";

interface AboutHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  imageAlt: string;
  scrollLabel: string;
  stats: HeroStat[];
  className?: string;
}

export function AboutHero({
  badge,
  title,
  subtitle,
  imageAlt,
  scrollLabel,
  stats,
  className,
}: AboutHeroProps) {
  return (
    <PageHeroListing
      badge={badge}
      title={title}
      subtitle={subtitle}
      imageAlt={imageAlt}
      imageSrc="/images/pages/about/hero.png"
      imageMobileSrc="/images/pages/about/hero-mobile.png"
      scrollHref="#about-story"
      scrollLabel={scrollLabel}
      stats={stats}
      className={className}
    />
  );
}

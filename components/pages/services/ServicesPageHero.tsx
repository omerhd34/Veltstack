import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { PageHeroListing } from "@/components/ui/page-hero";

interface ServicesPageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  subtitleSecondary: string;
  imageAlt: string;
  scrollLabel: string;
  stats: HeroStat[];
  className?: string;
}

export function ServicesPageHero({
  badge,
  title,
  subtitle,
  subtitleSecondary,
  imageAlt,
  scrollLabel,
  stats,
  className,
}: ServicesPageHeroProps) {
  return (
    <PageHeroListing
      badge={badge}
      title={title}
      subtitle={subtitle}
      subtitleSecondary={subtitleSecondary}
      imageAlt={imageAlt}
      imageSrc="/images/pages/services/hero.png"
      imageMobileSrc="/images/pages/services/hero-mobile.png"
      scrollHref="#services-packages"
      scrollLabel={scrollLabel}
      stats={stats}
      className={className}
    />
  );
}

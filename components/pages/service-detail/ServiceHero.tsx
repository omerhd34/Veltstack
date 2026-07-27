import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { PageHeroListing } from "@/components/ui/page-hero";

interface ServiceHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  imageAlt: string;
  imageSrc: string;
  imageMobileSrc: string;
  scrollLabel: string;
  stats: HeroStat[];
  className?: string;
}

export function ServiceHero({
  badge,
  title,
  subtitle,
  imageAlt,
  imageSrc,
  imageMobileSrc,
  scrollLabel,
  stats,
  className,
}: ServiceHeroProps) {
  return (
    <PageHeroListing
      badge={badge}
      title={title}
      subtitle={subtitle}
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      imageMobileSrc={imageMobileSrc}
      scrollHref="#service-features"
      scrollLabel={scrollLabel}
      stats={stats}
      className={className}
    />
  );
}

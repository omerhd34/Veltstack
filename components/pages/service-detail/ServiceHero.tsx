import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { PageHeroListing } from "@/components/ui/page-hero";

interface ServiceHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  subtitleSecondary: string;
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
  subtitleSecondary,
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
      subtitleSecondary={subtitleSecondary}
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      imageMobileSrc={imageMobileSrc}
      scrollHref="#service-features"
      scrollLabel={scrollLabel}
      stats={stats}
      imageFrameClassName="h-[180px] sm:h-[320px] lg:h-[420px] 2xl:h-[460px]"
      className={className}
    />
  );
}

import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { PageHeroListing } from "@/components/ui/page-hero";
import { pageAnchorHref } from "@/lib/page-anchors";

interface ServicesPageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  imageAlt: string;
  scrollLabel: string;
  stats: HeroStat[];
  className?: string;
}

export function ServicesPageHero({
  badge,
  title,
  subtitle,
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
      imageAlt={imageAlt}
      imageSrc="/images/pages/services/hero.webp"
      imageMobileSrc="/images/pages/services/hero-mobile.webp"
      scrollHref={pageAnchorHref("servicesPackages")}
      scrollLabel={scrollLabel}
      stats={stats}
      className={className}
    />
  );
}

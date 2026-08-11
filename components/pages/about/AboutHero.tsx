import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { PageHeroListing } from "@/components/ui/page-hero";
import { pageAnchorHref } from "@/lib/page-anchors";

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
      imageSrc="/images/pages/about/hero.webp"
      imageMobileSrc="/images/pages/about/hero-mobile.webp"
      scrollHref={pageAnchorHref("aboutStory")}
      scrollLabel={scrollLabel}
      stats={stats}
      className={className}
    />
  );
}

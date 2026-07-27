import { getLocale } from "next-intl/server";
import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { PageHeroListing } from "@/components/ui/page-hero";
import { toLatinUppercase } from "@/lib/utils";

interface BlogPageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  imageAlt: string;
  scrollLabel: string;
  stats: HeroStat[];
}

export async function BlogPageHero({
  badge,
  title,
  subtitle,
  imageAlt,
  scrollLabel,
  stats,
}: BlogPageHeroProps) {
  const locale = (await getLocale()) as "tr" | "en";

  return (
    <PageHeroListing
      badge={toLatinUppercase(badge, locale)}
      title={title}
      subtitle={subtitle}
      imageAlt={imageAlt}
      imageSrc="/images/pages/blog/hero.png"
      imageMobileSrc="/images/pages/blog/hero-mobile.png"
      scrollHref="#blog-grid"
      scrollLabel={scrollLabel}
      stats={stats}
      badgeVariant="emerald-muted"
      showGrid
      showBottomHairline
      glow="rich"
    />
  );
}

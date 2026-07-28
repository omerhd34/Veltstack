import { getLocale } from "next-intl/server";
import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { PageHeroListing } from "@/components/ui/page-hero";
import { toLatinUppercase } from "@/lib/utils";

interface FaqPageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  imageAlt: string;
  scrollLabel: string;
  stats: HeroStat[];
}

export async function FaqPageHero({
  badge,
  title,
  subtitle,
  imageAlt,
  scrollLabel,
  stats,
}: FaqPageHeroProps) {
  const locale = (await getLocale()) as "tr" | "en";

  return (
    <PageHeroListing
      badge={toLatinUppercase(badge, locale)}
      title={title}
      subtitle={subtitle}
      imageAlt={imageAlt}
      imageSrc="/images/pages/faq/hero.webp"
      imageMobileSrc="/images/pages/faq/hero-mobile.webp"
      scrollHref="#faq-content"
      scrollLabel={scrollLabel}
      stats={stats}
      badgeVariant="emerald-muted"
      showGrid
      showBottomHairline
      glow="rich"
    />
  );
}

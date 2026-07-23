import { getLocale } from "next-intl/server";
import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { PageHeroListing } from "@/components/ui/page-hero";
import { toLatinUppercase } from "@/lib/utils";

interface FaqPageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  subtitleSecondary: string;
  imageAlt: string;
  scrollLabel: string;
  stats: HeroStat[];
}

export async function FaqPageHero({
  badge,
  title,
  subtitle,
  subtitleSecondary,
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
      subtitleSecondary={subtitleSecondary}
      imageAlt={imageAlt}
      imageSrc="/images/pages/faq/hero.png"
      imageMobileSrc="/images/pages/faq/hero-mobile.png"
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

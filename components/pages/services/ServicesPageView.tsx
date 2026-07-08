import { getTranslations } from "next-intl/server";
import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { ServicesPageHero } from "./ServicesPageHero";
import { ServicesPackagesSection } from "./ServicesPackagesSection";
import { ApproachSection } from "@/components/sections/approach";
import { ServicesConsultationCTA } from "./ServicesConsultationCTA";

interface ServicesPageViewProps {
  className?: string;
}

export async function ServicesPageView({ className }: ServicesPageViewProps) {
  const t = await getTranslations("servicesPage");
  const stats = t.raw("stats") as HeroStat[];

  return (
    <div className={className}>
      <ServicesPageHero
        badge={t("heroBadge")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        subtitleSecondary={t("heroSubtitleSecondary")}
        imageAlt={t("heroImageAlt")}
        scrollLabel={t("scrollLabel")}
        stats={stats}
      />
      <ServicesPackagesSection />
      <ApproachSection />
      <ServicesConsultationCTA />
    </div>
  );
}

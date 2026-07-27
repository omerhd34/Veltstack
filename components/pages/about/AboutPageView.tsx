import { getTranslations } from "next-intl/server";
import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { AboutHero } from "./AboutHero";
import { AboutStory } from "./AboutStory";
import { WhyMeSection } from "@/components/sections/why-me";
import { TechMarqueeSection } from "@/components/sections/tech-marquee";
import { ServicesConsultationCTA } from "@/components/pages/services/ServicesConsultationCTA";

interface AboutPageViewProps {
  className?: string;
}

export async function AboutPageView({ className }: AboutPageViewProps) {
  const t = await getTranslations("about");

  const stats = t.raw("stats") as HeroStat[];

  return (
    <div className={className}>
      <AboutHero
        badge={t("heroBadge")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        imageAlt={t("heroImageAlt")}
        scrollLabel={t("scrollLabel")}
        stats={stats}
      />
      <AboutStory
        profileBadge={t("profileBadge")}
        profileTitle={t("profileTitle")}
        paragraphs={t.raw("profileParagraphs") as string[]}
      />
      <WhyMeSection className="bg-[#EDF6F1]" />
      <TechMarqueeSection />
      <ServicesConsultationCTA />
    </div>
  );
}

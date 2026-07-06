import { getTranslations } from "next-intl/server";
import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { WorkflowSection } from "@/components/sections/workflow";
import { AboutContact } from "./AboutContact";
import { AboutHero } from "./AboutHero";
import { AboutStory } from "./AboutStory";
import { TechMarqueeSection } from "@/components/sections/tech-marquee";

interface AboutPageViewProps {
  className?: string;
}

export async function AboutPageView({ className }: AboutPageViewProps) {
  const t = await getTranslations("about");

  const stats = t.raw("stats") as HeroStat[];
  const contactItems = t.raw("contactItems") as {
    label: string;
    value: string;
    href?: string;
  }[];

  return (
    <div className={className}>
      <AboutHero
        badge={t("heroBadge")}
        tagline={t("heroTagline")}
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
      <WorkflowSection />
      <TechMarqueeSection />
      <AboutContact
        badge={t("contactBadge")}
        title={t("contactTitle")}
        subtitle={t("contactSubtitle")}
        items={contactItems}
      />
    </div>
  );
}

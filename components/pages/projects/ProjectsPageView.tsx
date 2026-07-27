import { getTranslations } from "next-intl/server";
import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { techItemCount } from "@/components/sections/tech-marquee/tech-items";
import { ServicesConsultationCTA } from "@/components/pages/services/ServicesConsultationCTA";
import { ProjectsPageHero } from "./ProjectsPageHero";
import { ProjectsShowcase } from "./ProjectsShowcase";

interface ProjectsPageViewProps {
  className?: string;
}

const TECH_COUNT_PLACEHOLDER = "__techCount__";

export async function ProjectsPageView({ className }: ProjectsPageViewProps) {
  const t = await getTranslations("projectsPage");
  const stats = (t.raw("stats") as HeroStat[]).map((stat) =>
    stat.value === TECH_COUNT_PLACEHOLDER
      ? { ...stat, value: String(techItemCount) }
      : stat,
  );
  return (
    <div className={className}>
      <ProjectsPageHero
        badge={t("heroBadge")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        imageAlt={t("heroImageAlt")}
        scrollLabel={t("scrollLabel")}
        stats={stats}
      />
      <ProjectsShowcase />
      <ServicesConsultationCTA />
    </div>
  );
}

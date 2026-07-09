import { getTranslations } from "next-intl/server";
import {
  projectCoverGradients,
  projectImageUrls,
} from "@/components/sections/projects/project-detail-config";
import {
  projectItems,
  type ProjectSlug,
} from "@/components/sections/projects/project-items";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ProjectShowcaseCard } from "./ProjectShowcaseCard";

const featuredProjectSlugs = new Set<ProjectSlug>([
  "iqfinansai",
  "yazici-ticaret",
  "fablessi",
]);

interface ProjectsShowcaseProps {
  className?: string;
}

export async function ProjectsShowcase({ className }: ProjectsShowcaseProps) {
  const tPage = await getTranslations("projectsPage");
  const tHome = await getTranslations("home");

  return (
    <section
      className={`relative overflow-hidden bg-[#F8F9FA] py-24 md:py-32 ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-1/2 w-1/3 rounded-bl-[100px] bg-brand-accent/4"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-brand-accent/3 blur-3xl"
      />

      <SiteContainer className="relative">
        <header className="max-w-3xl">
          <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            {tPage("showcaseBadge")}
          </span>
          <h2 className="mt-6 font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-[#0A0A0F] md:text-4xl lg:text-[2.625rem]">
            {tPage("showcaseTitle")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/62 md:text-lg">
            {tPage("showcaseSubtitle")}
          </p>
        </header>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectItems.map((project, i) => (
            <ProjectShowcaseCard
              key={project.slug}
              index={i + 1}
              href={project.href}
              title={tHome(project.titleKey)}
              description={tHome(project.descKey)}
              icon={project.icon}
              imageUrl={projectImageUrls[project.slug]}
              coverGradient={projectCoverGradients[project.slug]}
              featuredLabel={tPage("featuredLabel")}
              showFeaturedBadge={featuredProjectSlugs.has(project.slug)}
            />
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}

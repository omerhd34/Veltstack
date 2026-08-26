import { setRequestLocale, getTranslations } from "next-intl/server";
import { ProjectsPageView } from "@/components/pages/projects";
import { projectItems, hasProjectHref } from "@/components/sections/projects/project-items";
import { BreadcrumbSchema, CollectionPageSchema } from "@/components/seo";
import { createPageMetadata } from "@/lib/create-page-metadata";
import type { Locale } from "@/i18n/routing";
import { SITE_URL, absoluteUrl, localizedPath } from "@/lib/seo";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ProjectsPageProps) {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    namespace: "pages",
    titleKey: "projectsTitle",
    descriptionKey: "projectsSubtitle",
    keywordsKey: "projectsKeywords",
    href: "/projeler",
    absoluteTitle: true,
  });
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const loc = locale as Locale;
  const tPages = await getTranslations("pages");
  const tProjects = await getTranslations("projectDetails");
  const tHome = await getTranslations("home");
  const projectsUrl = absoluteUrl(localizedPath(loc, "/projeler"));

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: tProjects("breadcrumbHome"), url: SITE_URL },
          { name: tProjects("breadcrumbProjects"), url: projectsUrl },
        ]}
      />
      <CollectionPageSchema
        name={tPages("projectsTitle")}
        description={tPages("projectsSubtitle")}
        url={projectsUrl}
        inLanguage={loc === "tr" ? "tr-TR" : "en-US"}
        items={projectItems.filter(hasProjectHref).map((project, index) => ({
          name: tHome(project.titleKey),
          url: absoluteUrl(localizedPath(loc, project.href)),
          position: index + 1,
        }))}
      />
      <ProjectsPageView />
    </>
  );
}

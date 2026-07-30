import { setRequestLocale } from "next-intl/server";
import { ProjectsPageView } from "@/components/pages/projects";
import { createPageMetadata } from "@/lib/create-page-metadata";

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

  return <ProjectsPageView />;
}

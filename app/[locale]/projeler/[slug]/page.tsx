import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  ProjectDetailView,
  getProjectStaticSlugs,
  validateProjectSlug,
} from "@/components/pages/project-detail/ProjectDetailView";
import { BreadcrumbSchema } from "@/components/seo";
import type { Locale } from "@/i18n/routing";
import {
  SITE_URL,
  absoluteUrl,
  buildPageAlternates,
  buildSocialMetadata,
  localizedPath,
} from "@/lib/seo";

interface ProjectDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export const revalidate = 86400;

export function generateStaticParams() {
  return getProjectStaticSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!validateProjectSlug(slug)) return {};

  const t = await getTranslations({ locale, namespace: "projectDetails" });
  const loc = locale as Locale;
  const href = `/projeler/${slug}`;
  const title = t(`${slug}.metaTitle`);
  const description = t(`${slug}.metaDesc`);

  return {
    title,
    description,
    alternates: buildPageAlternates(loc, href),
    ...buildSocialMetadata({ title, description, locale: loc, href }),
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!validateProjectSlug(slug)) notFound();

  const t = await getTranslations("projectDetails");
  const loc = locale as Locale;
  const projectUrl = absoluteUrl(localizedPath(loc, `/projeler/${slug}`));
  const projectsUrl = absoluteUrl(localizedPath(loc, "/projeler"));

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: t("breadcrumbHome"), url: SITE_URL },
          { name: t("breadcrumbProjects"), url: projectsUrl },
          { name: t(`${slug}.heroTitle`), url: projectUrl },
        ]}
      />
      <ProjectDetailView slug={slug} />
    </>
  );
}

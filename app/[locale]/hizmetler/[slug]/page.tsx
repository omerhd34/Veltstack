import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  ServiceDetailView,
  getServiceStaticSlugs,
  isServiceSlug,
} from "@/components/pages/service-detail";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo";
import type { Locale } from "@/i18n/routing";
import {
  SITE_URL,
  absoluteUrl,
  buildPageAlternates,
  buildSocialMetadata,
  localizedPath,
} from "@/lib/seo";

interface ServiceDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export const revalidate = 86400;

export function generateStaticParams() {
  return getServiceStaticSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isServiceSlug(slug)) return {};

  const t = await getTranslations({ locale, namespace: "serviceDetails" });
  const loc = locale as Locale;
  const href = `/hizmetler/${slug}`;
  const title = t(`${slug}.metaTitle`);
  const description = t(`${slug}.metaDesc`);

  return {
    title,
    description,
    alternates: buildPageAlternates(loc, href),
    ...buildSocialMetadata({ title, description, locale: loc, href }),
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!isServiceSlug(slug)) notFound();

  const t = await getTranslations("serviceDetails");
  const loc = locale as Locale;
  const serviceUrl = absoluteUrl(localizedPath(loc, `/hizmetler/${slug}`));
  const servicesUrl = absoluteUrl(localizedPath(loc, "/hizmetler"));

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: t("breadcrumbHome"), url: SITE_URL },
          { name: t("breadcrumbServices"), url: servicesUrl },
          { name: t(`${slug}.heroTitle`), url: serviceUrl },
        ]}
      />
      <ServiceSchema
        name={t(`${slug}.heroTitle`)}
        description={t(`${slug}.heroSubtitle`)}
        url={serviceUrl}
      />
      <ServiceDetailView slug={slug} />
    </>
  );
}

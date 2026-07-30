import { setRequestLocale } from "next-intl/server";
import { AboutPageView } from "@/components/pages/about";
import { createPageMetadata } from "@/lib/create-page-metadata";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AboutPageProps) {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    namespace: "pages",
    titleKey: "aboutTitle",
    descriptionKey: "aboutSubtitle",
    keywordsKey: "aboutKeywords",
    href: "/hakkimizda",
    absoluteTitle: true,
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutPageView />;
}

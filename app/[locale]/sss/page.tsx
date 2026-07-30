import { setRequestLocale } from "next-intl/server";
import { FaqPageView } from "@/components/pages/faq";
import { createPageMetadata } from "@/lib/create-page-metadata";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    namespace: "pages",
    titleKey: "faqTitle",
    descriptionKey: "faqSubtitle",
    keywordsKey: "faqKeywords",
    href: "/sss",
    absoluteTitle: true,
  });
}

export default async function FaqPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <FaqPageView />;
}

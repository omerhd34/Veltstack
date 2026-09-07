import { setRequestLocale } from "next-intl/server";
import { ThankYouPageView } from "@/components/pages/tesekkurler";
import { createPageMetadata } from "@/lib/create-page-metadata";

interface ThankYouPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ThankYouPageProps) {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    namespace: "pages",
    titleKey: "thanksTitle",
    descriptionKey: "thanksSubtitle",
    href: "/tesekkurler",
    noIndex: true,
  });
}

export default async function ThankYouPage({ params }: ThankYouPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ThankYouPageView />;
}

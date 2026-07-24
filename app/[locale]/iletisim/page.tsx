import { setRequestLocale } from "next-intl/server";
import { ContactPageView } from "@/components/pages/contact";
import { createPageMetadata } from "@/lib/create-page-metadata";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ContactPageProps) {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    namespace: "pages",
    titleKey: "contactTitle",
    descriptionKey: "contactSubtitle",
    keywordsKey: "contactKeywords",
    href: "/iletisim",
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactPageView />;
}

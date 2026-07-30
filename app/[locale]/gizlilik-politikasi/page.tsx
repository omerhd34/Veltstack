import { setRequestLocale } from "next-intl/server";
import { LegalPageView } from "@/components/pages/legal";
import { createPageMetadata } from "@/lib/create-page-metadata";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    namespace: "legal.privacy",
    titleKey: "title",
    descriptionKey: "subtitle",
    href: "/gizlilik-politikasi",
    noIndex: true,
  });
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LegalPageView pageKey="privacy" />;
}

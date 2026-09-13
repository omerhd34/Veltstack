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
    namespace: "legal.cookies",
    titleKey: "title",
    descriptionKey: "subtitle",
    href: "/cerez-politikasi",
  });
}

export default async function CookiePolicyPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LegalPageView pageKey="cookies" />;
}

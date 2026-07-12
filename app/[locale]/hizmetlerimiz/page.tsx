import { setRequestLocale } from "next-intl/server";
import { ServicesPageView } from "@/components/pages/services";
import { createPageMetadata } from "@/lib/create-page-metadata";

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ServicesPageProps) {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    namespace: "pages",
    titleKey: "servicesTitle",
    descriptionKey: "servicesSubtitle",
    href: "/hizmetlerimiz",
  });
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ServicesPageView />;
}

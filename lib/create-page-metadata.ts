import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

interface CreatePageMetadataOptions {
  locale: string;
  namespace: string;
  titleKey: string;
  descriptionKey: string;
  href: string;
}

export async function createPageMetadata({
  locale,
  namespace,
  titleKey,
  descriptionKey,
  href,
}: CreatePageMetadataOptions): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });
  const canonical = `https://www.veltstack.com${getPathname({
    locale: locale as Locale,
    href,
  })}`;

  return {
    title: t(titleKey),
    description: t(descriptionKey),
    alternates: { canonical },
    openGraph: {
      title: t(titleKey),
      description: t(descriptionKey),
      type: "website",
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
  };
}

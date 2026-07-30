import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildPageAlternates, buildSocialMetadata } from "@/lib/seo";

interface CreatePageMetadataOptions {
  locale: string;
  namespace: string;
  titleKey: string;
  descriptionKey: string;
  href: string;
  absoluteTitle?: boolean;
  keywordsKey?: string;
  noIndex?: boolean;
}

export async function createPageMetadata({
  locale,
  namespace,
  titleKey,
  descriptionKey,
  href,
  absoluteTitle = false,
  keywordsKey,
  noIndex = false,
}: CreatePageMetadataOptions): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });
  const loc = locale as Locale;
  const title = t(titleKey);
  const description = t(descriptionKey);
  const keywords = keywordsKey ? (t.raw(keywordsKey) as string[]) : undefined;
  const social = buildSocialMetadata({
    title,
    description,
    locale: loc,
    href,
  });

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords ? { keywords } : {}),
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
    alternates: buildPageAlternates(loc, href),
    ...social,
  };
}

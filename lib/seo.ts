import type { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export const SITE_URL = "https://www.veltstack.com";
export const SITE_NAME = "Veltstack";
export const SITE_DOMAIN = "veltstack.com";
export const DEFAULT_OG_IMAGE = "/hero/veltstack.png";

export function absoluteUrl(path = ""): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function localizedPath(locale: Locale, href: string): string {
  return getPathname({ locale, href });
}

export function buildLanguageAlternates(href: string): Record<string, string> {
  const languages: Record<string, string> = {};

  for (const locale of routing.locales) {
    languages[locale] = absoluteUrl(localizedPath(locale, href));
  }

  languages["x-default"] = absoluteUrl(
    localizedPath(routing.defaultLocale, href),
  );

  return languages;
}

export function buildPageAlternates(locale: Locale, href: string) {
  return {
    canonical: absoluteUrl(localizedPath(locale, href)),
    languages: buildLanguageAlternates(href),
  };
}

export function buildSocialMetadata({
  title,
  description,
  locale,
  href,
  type = "website",
  images,
}: {
  title: string;
  description: string;
  locale: Locale;
  href: string;
  type?: "website" | "article";
  images?: NonNullable<Metadata["openGraph"]>["images"];
}): Pick<Metadata, "openGraph" | "twitter"> {
  const url = absoluteUrl(localizedPath(locale, href));
  const ogImages = images ?? [{ url: DEFAULT_OG_IMAGE }];

  return {
    openGraph: {
      title,
      description,
      type,
      locale: locale === "tr" ? "tr_TR" : "en_US",
      url,
      siteName: SITE_NAME,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: Array.isArray(ogImages)
        ? ogImages.map((img) =>
            typeof img === "string"
              ? img
              : "url" in img
                ? String(img.url)
                : DEFAULT_OG_IMAGE,
          )
        : [DEFAULT_OG_IMAGE],
    },
  };
}

import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { serviceSlugs } from "@/components/sections/services/service-items";
import { projectSlugs } from "@/components/sections/projects/project-items";
import { blogPosts } from "@/components/pages/blog/posts";
import { SITE_URL, buildLanguageAlternates } from "@/lib/seo";

const staticPages = [
  "/",
  "/hizmetler",
  "/projeler",
  "/blog",
  "/hakkimizda",
  "/iletisim",
  "/sss",
] as const;

function localizedUrl(locale: (typeof routing.locales)[number], href: string) {
  return `${SITE_URL}${getPathname({ locale, href })}`;
}

function entriesForHref(
  href: string,
  options: {
    lastModified: Date;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  },
): MetadataRoute.Sitemap {
  const languages = buildLanguageAlternates(href);

  return routing.locales.map((locale) => ({
    url: localizedUrl(locale, href),
    lastModified: options.lastModified,
    changeFrequency: options.changeFrequency,
    priority: options.priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticPages.flatMap((page) =>
    entriesForHref(page, {
      lastModified: now,
      changeFrequency: "monthly",
      priority: page === "/" ? 1 : 0.8,
    }),
  );

  const serviceEntries = serviceSlugs.flatMap((slug) =>
    entriesForHref(`/hizmetler/${slug}`, {
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    }),
  );

  const projectEntries = projectSlugs.flatMap((slug) =>
    entriesForHref(`/projeler/${slug}`, {
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    }),
  );

  const postEntries = blogPosts.flatMap((post) =>
    entriesForHref(`/blog/${post.slug}`, {
      lastModified: new Date(post.publishedAt),
      changeFrequency: "weekly",
      priority: 0.8,
    }),
  );

  return [
    ...staticEntries,
    ...serviceEntries,
    ...projectEntries,
    ...postEntries,
  ];
}

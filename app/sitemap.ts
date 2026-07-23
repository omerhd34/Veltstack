import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { serviceSlugs } from "@/components/sections/services/service-items";
import { projectSlugs } from "@/components/sections/projects/project-items";
import { blogPosts } from "@/components/pages/blog/posts";

const staticPages = [
  "/",
  "/hizmetler",
  "/projeler",
  "/blog",
  "/hakkimizda",
  "/iletisim",
  "/sss",
  "/gizlilik-politikasi",
  "/kullanim-sartlari",
  "/cerez-politikasi",
  "/kvkk-aydinlatma-metni",
] as const;

function localizedUrl(locale: (typeof routing.locales)[number], href: string) {
  return `https://www.veltstack.com${getPathname({ locale, href })}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticPages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(locale, page),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: page === "/" ? 1 : 0.8,
    })),
  );

  const serviceEntries = serviceSlugs.flatMap((slug) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(locale, `/hizmetler/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  );

  const projectEntries = projectSlugs.flatMap((slug) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(locale, `/projeler/${slug}`),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  );

  const postEntries = blogPosts.flatMap((post) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(locale, `/blog/${post.slug}`),
      lastModified: new Date(post.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  );

  return [
    ...staticEntries,
    ...serviceEntries,
    ...projectEntries,
    ...postEntries,
  ];
}

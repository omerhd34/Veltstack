import { getTranslations, getLocale } from "next-intl/server";
import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { ServicesPageCTA } from "@/components/pages/services/ServicesPageCTA";
import { blogPosts, getAllCategories, getFeaturedPosts } from "./blog-data";
import { BlogPageHero } from "./BlogPageHero";
import { BlogGrid } from "./BlogGrid";

interface BlogHeroStatCopy {
  label: string;
  hint: string;
  unit?: string;
}

interface BlogPageViewProps {
  className?: string;
}

export async function BlogPageView({ className }: BlogPageViewProps) {
  const t = await getTranslations("blogPage");
  const locale = (await getLocale()) as "tr" | "en";

  const posts = blogPosts.map((post) => ({
    ...post,
    readingTimeLabel: t("readingTime", { minutes: post.readingTime }),
  }));

  const statsCopy = t.raw("heroStats") as {
    posts: BlogHeroStatCopy;
    categories: BlogHeroStatCopy;
    reading: BlogHeroStatCopy;
    featured: BlogHeroStatCopy;
  };

  const totalReadingTime = blogPosts.reduce(
    (sum, post) => sum + post.readingTime,
    0,
  );

  const heroStats: HeroStat[] = [
    {
      value: String(blogPosts.length),
      label: statsCopy.posts.label,
      hint: statsCopy.posts.hint,
    },
    {
      value: String(getAllCategories(locale).length),
      label: statsCopy.categories.label,
      hint: statsCopy.categories.hint,
    },
    {
      value: `${totalReadingTime} ${statsCopy.reading.unit ?? ""}`.trim(),
      label: statsCopy.reading.label,
      hint: statsCopy.reading.hint,
    },
    {
      value: String(getFeaturedPosts().length),
      label: statsCopy.featured.label,
      hint: statsCopy.featured.hint,
    },
  ];

  const labels = {
    searchPlaceholder: t("searchPlaceholder"),
    clearSearch: t("clearSearch"),
    allCategories: t("allCategories"),
    readMore: t("readMore"),
    noResults: t("noResults"),
    noResultsSub: t("noResultsSub"),
    categories: t.raw("categories") as string[],
  };

  return (
    <div className={className}>
      <BlogPageHero
        badge={t("heroBadge")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        subtitleSecondary={t("heroSubtitleSecondary")}
        imageAlt={t("heroImageAlt")}
        scrollLabel={t("scrollLabel")}
        stats={heroStats}
      />

      <BlogGrid posts={posts} locale={locale} labels={labels} />

      <ServicesPageCTA
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
        buttonLabel={t("ctaButton")}
      />
    </div>
  );
}

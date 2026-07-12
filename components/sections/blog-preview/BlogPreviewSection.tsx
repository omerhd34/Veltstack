import { getLocale, getTranslations } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import {
  getBlogListImageUrl,
  getHomepageBlogPosts,
} from "@/components/pages/blog/blog-data";
import { toLatinUppercase } from "@/lib/utils";
import { BlogPreviewMoreButton } from "./BlogPreviewMoreButton";
import { BlogPreviewScrollCarousel } from "./BlogPreviewScrollCarousel";

interface BlogPreviewSectionProps {
  className?: string;
}

export async function BlogPreviewSection({
  className,
}: BlogPreviewSectionProps) {
  const t = await getTranslations("home");
  const locale = (await getLocale()) as "tr" | "en";

  const posts = getHomepageBlogPosts().map((post) => ({
    slug: post.slug,
    title: locale === "tr" ? post.titleTr : post.titleEn,
    excerpt: locale === "tr" ? post.excerptTr : post.excerptEn,
    href: `/makaleler/${post.slug}`,
    image: getBlogListImageUrl(post.imageUrl),
    readingTimeLabel: t("readingTime", { minutes: post.readingTime }),
  }));

  return (
    <section
      className={`relative overflow-hidden bg-[#061812] py-24 text-white md:py-32 ${className ?? ""}`}
      aria-labelledby="blog-preview-section-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgb(58_107_82/0.2),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/30 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 size-80 rounded-full bg-brand-accent/8 blur-3xl"
      />
      <SiteContainer className="relative">
        <SectionScrollReveal direction="right">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <SectionBadge variant="emerald-label">
                {toLatinUppercase(t("blogTitle"), locale)}
              </SectionBadge>
              <h2
                id="blog-preview-section-title"
                className="mt-6 font-(family-name:--font-heading) text-4xl font-bold tracking-tight text-white md:text-5xl"
              >
                {t("blogHeadline")}{" "}
                <span className="text-brand-accent">
                  {t("blogHeadlineAccent")}
                </span>
              </h2>
              <p className="mt-4 text-lg text-white/55">{t("blogSubtitle")}</p>
            </div>
            <div className="hidden md:block">
              <BlogPreviewMoreButton label={t("blogMoreButton")} />
            </div>
          </div>
        </SectionScrollReveal>
      </SiteContainer>

      <SectionScrollReveal direction="right" delay={0.14} trigger="wide">
        <BlogPreviewScrollCarousel className="mt-4 md:mt-8" posts={posts} />
      </SectionScrollReveal>

      <SiteContainer className="relative">
        <div className="mt-8 flex justify-center md:hidden">
          <BlogPreviewMoreButton label={t("blogMoreButton")} />
        </div>
      </SiteContainer>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-emerald-400/20 to-transparent"
      />
    </section>
  );
}

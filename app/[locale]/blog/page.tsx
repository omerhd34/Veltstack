import { setRequestLocale } from "next-intl/server";
import { BlogPageView } from "@/components/pages/blog";
import { createPageMetadata } from "@/lib/create-page-metadata";

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    namespace: "blogPage",
    titleKey: "heroBadge",
    descriptionKey: "heroSubtitle",
    keywordsKey: "keywords",
    href: "/blog",
  });
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <BlogPageView />;
}

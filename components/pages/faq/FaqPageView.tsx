import { getTranslations } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import type { HeroStat } from "@/components/ui/HeroStatsCards";
import { FAQSchema } from "@/components/seo";
import { ServicesConsultationCTA } from "@/components/pages/services/ServicesConsultationCTA";
import type { FaqItem } from "./FaqAccordion";
import { FaqCategorySection } from "./FaqCategorySection";
import { FaqContactHint } from "./FaqContactHint";
import { FaqPageHero } from "./FaqPageHero";

interface FaqCategory {
  title: string;
  items: FaqItem[];
}

interface FaqHeroStatCopy {
  label: string;
  labelShort?: string;
  hint: string;
}

interface FaqPageViewProps {
  className?: string;
}

export async function FaqPageView({ className }: FaqPageViewProps) {
  const t = await getTranslations("faqPage");
  const categories = t.raw("categories") as FaqCategory[];
  const allItems = categories.flatMap((category) => category.items);

  const statsCopy = t.raw("heroStats") as {
    questions: FaqHeroStatCopy;
    categories: FaqHeroStatCopy;
    services: FaqHeroStatCopy;
    support: FaqHeroStatCopy;
  };

  const heroStats: HeroStat[] = [
    {
      value: String(allItems.length),
      label: statsCopy.questions.label,
      labelShort: statsCopy.questions.labelShort,
      hint: statsCopy.questions.hint,
    },
    {
      value: String(categories.length),
      label: statsCopy.categories.label,
      labelShort: statsCopy.categories.labelShort,
      hint: statsCopy.categories.hint,
    },
    {
      value: String(categories[1]?.items.length ?? 0),
      label: statsCopy.services.label,
      labelShort: statsCopy.services.labelShort,
      hint: statsCopy.services.hint,
    },
    {
      value: String(categories[3]?.items.length ?? 0),
      label: statsCopy.support.label,
      labelShort: statsCopy.support.labelShort,
      hint: statsCopy.support.hint,
    },
  ];

  return (
    <div className={className}>
      <FAQSchema items={allItems} />
      <FaqPageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        subtitleSecondary={t("subtitleSecondary")}
        imageAlt={t("imageAlt")}
        scrollLabel={t("scrollLabel")}
        stats={heroStats}
      />
      <section
        id="faq-content"
        className="relative overflow-hidden bg-[#f7faf8] py-16 sm:py-24 dark:bg-background"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgb(58_107_82/0.08),transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(58_107_82/0.03)_1px,transparent_1px),linear-gradient(90deg,rgb(58_107_82/0.03)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_90%_80%_at_50%_40%,black,transparent)]"
        />

        <SiteContainer className="relative max-w-4xl">
          <div className="space-y-14 sm:space-y-16">
            {categories.map((category, index) => (
              <FaqCategorySection
                key={category.title}
                title={category.title}
                items={category.items}
                index={index}
                questionCountLabel={t("questionCount", {
                  count: category.items.length,
                })}
              />
            ))}
          </div>

          <FaqContactHint
            hint={t("contactHint")}
            linkLabel={t("contactLink")}
            className="mt-14 sm:mt-16"
          />
        </SiteContainer>
      </section>
      <ServicesConsultationCTA />
    </div>
  );
}

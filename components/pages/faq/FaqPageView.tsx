import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import { FAQSchema } from "@/components/seo";
import { ServicesConsultationCTA } from "@/components/pages/services/ServicesConsultationCTA";
import { FaqAccordion, type FaqItem } from "./FaqAccordion";
import { FaqPageHero } from "./FaqPageHero";

interface FaqCategory {
  title: string;
  items: FaqItem[];
}

interface FaqPageViewProps {
  className?: string;
}

export async function FaqPageView({ className }: FaqPageViewProps) {
  const t = await getTranslations("faqPage");
  const categories = t.raw("categories") as FaqCategory[];
  const allItems = categories.flatMap((category) => category.items);

  return (
    <div className={className}>
      <FAQSchema items={allItems} />
      <FaqPageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        imageAlt={t("imageAlt")}
      />
      <section className="py-12 sm:py-16">
        <SiteContainer className="max-w-3xl">
          {categories.map((category) => (
            <div key={category.title} className="mb-12 last:mb-0">
              <SectionScrollReveal direction="left" trigger="entry">
                <h2 className="font-(family-name:--font-heading) text-lg font-bold tracking-tight text-foreground sm:text-xl">
                  {category.title}
                </h2>
              </SectionScrollReveal>
              <SectionScrollReveal
                direction="right"
                delay={0.14}
                trigger="entry"
              >
                <FaqAccordion items={category.items} className="mt-5" />
              </SectionScrollReveal>
            </div>
          ))}
          <SectionScrollReveal direction="up" trigger="entry">
            <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
              {t("contactHint")}{" "}
              <Link
                href="/iletisim"
                className="font-medium text-brand-accent hover:underline"
              >
                {t("contactLink")}
              </Link>
              .
            </p>
          </SectionScrollReveal>
        </SiteContainer>
      </section>
      <ServicesConsultationCTA />
    </div>
  );
}

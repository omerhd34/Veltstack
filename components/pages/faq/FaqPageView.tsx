import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SiteContainer } from "@/components/layout/SiteContainer";
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
      />
      <section className="py-12 sm:py-16">
        <SiteContainer className="max-w-3xl">
          {categories.map((category) => (
            <div key={category.title} className="mb-12 last:mb-0">
              <h2 className="font-(family-name:--font-heading) text-lg font-bold tracking-tight text-foreground sm:text-xl">
                {category.title}
              </h2>
              <FaqAccordion items={category.items} className="mt-5" />
            </div>
          ))}
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
        </SiteContainer>
      </section>
      <ServicesConsultationCTA />
    </div>
  );
}

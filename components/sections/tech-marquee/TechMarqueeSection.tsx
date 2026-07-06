import { getTranslations } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { TechMarqueeContent } from "./TechMarqueeContent";
import {
  getOrbitIdForCategory,
  techCategories,
  type TechCategoryKey,
} from "./tech-items";

interface TechMarqueeSectionProps {
  className?: string;
}

const categoryMessageKeys: Record<TechCategoryKey, string> = {
  frontend: "techCategoryFrontend",
  backend: "techCategoryBackend",
  database: "techCategoryDatabase",
  mobile: "techCategoryMobile",
  hosting: "techCategoryHosting",
  seo: "techCategorySeo",
};

export async function TechMarqueeSection({
  className,
}: TechMarqueeSectionProps) {
  const t = await getTranslations("about");

  const categories = techCategories.map((category) => ({
    key: category.key,
    label: t(categoryMessageKeys[category.key]),
    orbitId: getOrbitIdForCategory(category.key),
    itemCount: category.items.length,
  }));

  return (
    <section
      className={`relative overflow-x-clip border-y border-[#00D4AA]/15 bg-[#071410] py-20 text-white md:py-28 ${className ?? ""}`}
      aria-labelledby="tech-stack-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgb(0_212_170/0.12),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_100%,rgb(58_107_82/0.14),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#00D4AA]/35 to-transparent"
      />

      <SiteContainer>
        <TechMarqueeContent categories={categories}>
          <SectionBadge>{t("techStackBadge")}</SectionBadge>
          <h2
            id="tech-stack-title"
            className="mt-4 font-(family-name:--font-heading) text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-[2.65rem]"
          >
            {t("techStackTitle")}
            <br />
            <span className="text-[#00D4AA]">{t("techStackTitleAccent")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/65 lg:mx-0 md:text-lg">
            {t("techStackSubtitle")}
          </p>
        </TechMarqueeContent>
      </SiteContainer>
    </section>
  );
}

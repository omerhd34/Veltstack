import { getTranslations } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { HeroImage } from "./HeroImage";
import { HeroContent } from "./HeroContent";
import { HeroCTA } from "./HeroCTA";

interface HeroSectionProps {
  className?: string;
}

export async function HeroSection({ className }: HeroSectionProps) {
  const t = await getTranslations("home");

  return (
    <section
      data-page-hero
      className={`relative flex min-h-dvh items-center overflow-hidden bg-[#0A0A0F] pt-18 text-white ${className ?? ""}`}
    >
      <HeroImage alt={t("heroImageAlt")} />
      <SiteContainer className="relative z-10 w-full py-10 sm:py-12 lg:py-16">
        <div className="flex w-full max-w-xl flex-col items-start gap-7 text-left sm:max-w-2xl sm:gap-8 lg:gap-10">
          <SectionBadge className="max-w-full px-3 tracking-[0.14em] sm:px-4 sm:tracking-[0.2em]">
            {t("heroBadge")}
          </SectionBadge>
          <HeroContent title={t("heroTitle")} subtitle={t("heroSubtitle")} />
          <HeroCTA primary={t("ctaPrimary")} secondary={t("ctaSecondary")} />
        </div>
      </SiteContainer>
    </section>
  );
}

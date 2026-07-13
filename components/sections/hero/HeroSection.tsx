import { getTranslations } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
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
      <SiteContainer className="relative z-10 w-full py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
        <SectionScrollReveal
          direction="left"
          when="mount"
          className="flex w-full max-w-78 flex-col items-start gap-5 text-left min-[400px]:max-w-sm sm:max-w-md md:max-w-88 lg:max-w-lg lg:gap-6 xl:max-w-xl xl:gap-8 2xl:max-w-2xl"
        >
          <SectionBadge className="max-w-full px-3 tracking-[0.14em] sm:px-4 sm:tracking-[0.2em]">
            {t("heroBadge")}
          </SectionBadge>
          <HeroContent title={t("heroTitle")} subtitle={t("heroSubtitle")} />
          <HeroCTA primary={t("ctaPrimary")} secondary={t("ctaSecondary")} />
        </SectionScrollReveal>
      </SiteContainer>
    </section>
  );
}

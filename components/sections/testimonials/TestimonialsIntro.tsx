import { getTranslations } from "next-intl/server";

interface TestimonialsIntroProps {
  className?: string;
}

export async function TestimonialsIntro({ className }: TestimonialsIntroProps) {
  const t = await getTranslations("home");

  return (
    <div className={`mx-auto max-w-2xl text-center ${className ?? ""}`}>
      <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
        {t("testimonialsBadge")}
      </span>

      <h2
        id="testimonials-section-title"
        className="mt-5 font-(family-name:--font-heading) text-[1.75rem] font-bold leading-[1.12] tracking-tight text-[#0A0A0F] sm:mt-7 sm:text-3xl md:text-4xl lg:text-5xl"
      >
        {t("testimonialsTitleLead")}{" "}
        <span className="text-brand-accent">{t("testimonialsTitleAccent")}</span>
      </h2>

      <p className="mt-4 text-[0.9375rem] leading-[1.75] text-foreground/65 sm:mt-5 sm:text-base sm:leading-[1.85] md:text-lg md:text-foreground/62">
        {t("testimonialsSubtitle")}
      </p>
    </div>
  );
}

import { getTranslations } from "next-intl/server";

interface WhyMeIntroProps {
  className?: string;
}

export async function WhyMeIntro({ className }: WhyMeIntroProps) {
  const t = await getTranslations("home");

  return (
    <div className={className}>
      <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
        {t("whyMeBadge")}
      </span>

      <h2
        id="why-me-section-title"
        className="mt-6 font-(family-name:--font-heading) text-3xl font-bold tracking-tight md:text-4xl"
      >
        {t("whyMeTitleLead")}{" "}
        <span className="text-brand-accent">{t("whyMeTitleAccent")}</span>
      </h2>

      <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
        {t("whyMeSubtitle")}
      </p>
    </div>
  );
}

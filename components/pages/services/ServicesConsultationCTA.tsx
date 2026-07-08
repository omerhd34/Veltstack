import { getTranslations } from "next-intl/server";
import { ServicesPageCTA } from "./ServicesPageCTA";

interface ServicesConsultationCTAProps {
  className?: string;
}

export async function ServicesConsultationCTA({
  className,
}: ServicesConsultationCTAProps) {
  const t = await getTranslations("servicesPage");

  return (
    <ServicesPageCTA
      badge={t("ctaBadge")}
      title={t("ctaTitle")}
      titleLead={t("ctaTitleLead")}
      titleAccent={t("ctaTitleAccent")}
      subtitle={t("ctaSubtitle")}
      highlights={[t("ctaPoint1"), t("ctaPoint2"), t("ctaPoint3")]}
      buttonLabel={t("ctaButton")}
      className={className}
    />
  );
}

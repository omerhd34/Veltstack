import { getTranslations } from "next-intl/server";
import { LoadingView } from "@/components/pages/status";

export default async function LocaleLoading() {
  const t = await getTranslations("status.loading");

  return <LoadingView label={t("label")} ariaLabel={t("aria")} />;
}

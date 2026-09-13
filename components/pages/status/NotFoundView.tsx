import { getTranslations } from "next-intl/server";
import { LuArrowUpRight, LuHouse, LuMessageCircle } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { StatusPage } from "./StatusPage";

const primaryClassName = cn(
  "inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-accent px-8 text-base font-semibold text-white",
  "shadow-[0_8px_24px_rgb(58_107_82/0.24)] transition-all duration-300",
  "hover:-translate-y-0.5 hover:bg-brand-accent/92 hover:shadow-[0_12px_32px_rgb(58_107_82/0.3)]",
);

const secondaryLinkClassName = cn(
  "inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border/70 bg-white/80 px-6 text-base font-medium text-foreground backdrop-blur-sm",
  "shadow-[0_2px_12px_rgb(0_0_0/0.04)] transition-all duration-300",
  "hover:-translate-y-0.5 hover:border-brand-accent/35 hover:text-brand-accent",
);

export async function NotFoundView() {
  const t = await getTranslations("status.notFound");

  return (
    <StatusPage
      code={t("code")}
      badge={t("badge")}
      title={t("title")}
      description={t("description")}
      actions={
        <>
          <Link href="/" className={primaryClassName}>
            <LuHouse className="size-4" aria-hidden />
            {t("homeCta")}
            <LuArrowUpRight className="size-4" aria-hidden />
          </Link>
          <Link href="/iletisim" className={secondaryLinkClassName}>
            <LuMessageCircle className="size-4" aria-hidden />
            {t("contactCta")}
            <LuArrowUpRight className="size-4" aria-hidden />
          </Link>
        </>
      }
    />
  );
}

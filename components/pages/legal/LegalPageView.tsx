import { connection } from "next/server";
import { getLocale, getTranslations } from "next-intl/server";
import { footerLegalItems } from "@/components/layout/footer/footer-config";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { cn } from "@/lib/utils";
import { LegalPageHero } from "./LegalPageHero";
import { LegalRichText } from "./LegalRichText";
import type { LegalPageKey, LegalSection } from "./types";

function formatLastUpdatedDate(locale: "tr" | "en"): string {
  const date = new Date();
  date.setDate(date.getDate() - 5);
  return date.toLocaleDateString(locale === "tr" ? "tr-TR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface LegalPageViewProps {
  pageKey: LegalPageKey;
  className?: string;
}

export async function LegalPageView({
  pageKey,
  className,
}: LegalPageViewProps) {
  await connection();
  const locale = (await getLocale()) as "tr" | "en";
  const t = await getTranslations(`legal.${pageKey}`);
  const sections = t.raw("sections") as LegalSection[];
  const icon =
    footerLegalItems.find((item) => item.labelKey === pageKey)?.icon ??
    footerLegalItems[0].icon;

  return (
    <div className={className}>
      <LegalPageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        lastUpdated={t("lastUpdated", { date: formatLastUpdatedDate(locale) })}
        scrollLabel={t("scrollLabel")}
        icon={icon}
      />
      <section className="relative py-14 sm:py-20">
        <div
          id="legal-content"
          aria-hidden
          className="absolute inset-x-0 top-8 h-0 scroll-mt-18 sm:top-10"
        />
        <SiteContainer className="max-w-3xl">
          {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className={cn(
                  "scroll-mt-28 border-b border-border/50 py-9 last:border-0 sm:py-11",
                  index === 0 && "pt-0 sm:pt-0",
                )}
              >
                <h2 className="font-(family-name:--font-heading) text-xl font-bold tracking-tight text-foreground sm:text-[1.625rem]">
                  {section.title}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="mt-4 text-[0.9375rem] leading-[1.9] text-foreground/72 sm:text-base"
                  >
                    <LegalRichText text={paragraph} />
                  </p>
                ))}
                {section.items && section.items.length > 0 ? (
                  <ul
                    className={cn(
                      "mt-5 space-y-2.5 border-l-2 border-brand-accent/25 pl-5 text-[0.9375rem] leading-[1.9] text-foreground/72 sm:text-base",
                    )}
                  >
                    {section.items.map((item) => (
                      <li key={item.slice(0, 48)} className="relative pl-1">
                        <LegalRichText text={item} />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
        </SiteContainer>
      </section>
    </div>
  );
}

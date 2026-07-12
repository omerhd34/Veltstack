import { getTranslations } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { cn } from "@/lib/utils";
import { LegalPageHero } from "./LegalPageHero";
import type { LegalPageKey, LegalSection } from "./types";

interface LegalPageViewProps {
  pageKey: LegalPageKey;
  className?: string;
}

export async function LegalPageView({ pageKey, className }: LegalPageViewProps) {
  const t = await getTranslations(`legal.${pageKey}`);
  const sections = t.raw("sections") as LegalSection[];

  return (
    <div className={className}>
      <LegalPageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <section className="py-12 sm:py-16">
        <SiteContainer className="max-w-3xl">
          <p className="text-sm text-muted-foreground">{t("lastUpdated")}</p>
          <div className="mt-8">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-b border-border/60 py-8 last:border-0 sm:py-10"
              >
                <h2 className="font-(family-name:--font-heading) text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {section.title}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mt-4 text-sm leading-[1.85] text-foreground/75 sm:text-[0.9375rem]"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.items && section.items.length > 0 ? (
                  <ul
                    className={cn(
                      "mt-4 list-disc space-y-2 pl-5 text-sm leading-[1.85] text-foreground/75 sm:text-[0.9375rem]",
                    )}
                  >
                    {section.items.map((item) => (
                      <li key={item.slice(0, 40)}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </SiteContainer>
      </section>
    </div>
  );
}

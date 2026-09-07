import { getTranslations } from "next-intl/server";
import { LuCheck, LuHouse } from "react-icons/lu";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";

export async function ThankYouPageView() {
  const t = await getTranslations("thanks");

  return (
    <section className="relative flex w-full min-h-[calc(100dvh-4.5rem)] flex-1 flex-col items-center justify-center overflow-hidden bg-[#F8F9FA] py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(var(--brand-accent-rgb)/0.12),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/3 size-72 rounded-full bg-brand-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-8 size-64 rounded-full bg-brand-accent/8 blur-3xl"
      />

      <SiteContainer className="relative">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent">
            <LuCheck className="size-7" strokeWidth={2.5} aria-hidden />
          </div>

          <SectionBadge variant="accent">{t("badge")}</SectionBadge>

          <h1 className="mt-5 font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-tight">
            {t("title")}
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
            {t("description")}
          </p>

          <div className="mt-9 flex justify-center">
            <PrimaryCtaLink
              href="/"
              size="lg"
              variant="accent"
              leadingIcon={<LuHouse className="size-4" aria-hidden />}
            >
              {t("homeCta")}
            </PrimaryCtaLink>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

import { LuMessageCircle } from "react-icons/lu";
import { getLocale } from "next-intl/server";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { CTAHighlights } from "@/components/sections/cta/CTAHighlights";
import { toLatinUppercase } from "@/lib/utils";

interface ServicesPageCTAProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  badge?: string;
  titleLead?: string;
  titleAccent?: string;
  highlights?: [string, string, string];
  className?: string;
}

export async function ServicesPageCTA({
  title,
  subtitle,
  buttonLabel,
  badge,
  titleLead,
  titleAccent,
  highlights,
  className,
}: ServicesPageCTAProps) {
  const locale = (await getLocale()) as "tr" | "en";
  const hasSplitTitle = Boolean(titleLead && titleAccent);

  return (
    <section
      className={`relative overflow-hidden bg-[#E8F3ED] py-20 md:py-28 ${className ?? ""}`}
      aria-labelledby="page-cta-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgb(58_107_82/0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_0%_100%,rgb(58_107_82/0.07),transparent_50%)]" />
        <div className="absolute -left-20 top-1/3 size-80 rounded-full bg-brand-accent/5 blur-3xl" />
        <div className="absolute -right-16 bottom-1/4 size-72 rounded-full bg-brand-accent/6 blur-3xl" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-accent/25 to-transparent"
      />

      <SiteContainer className="relative">
        <SectionScrollReveal direction="left">
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-[#0A0A0F] px-6 py-14 shadow-[0_24px_80px_rgb(58_107_82/0.12)] md:px-14 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 size-120 -translate-x-1/2 rounded-full bg-brand-accent/12 blur-[90px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgb(58_107_82/0.12),transparent_60%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/30 to-transparent md:inset-x-12"
          />

          <div
            className={`relative mx-auto text-center ${highlights ? "max-w-5xl" : "max-w-4xl"}`}
          >
            {badge ? (
              <SectionBadge>{toLatinUppercase(badge, locale)}</SectionBadge>
            ) : null}

            <h2
              id="page-cta-title"
              className={`font-(family-name:--font-heading) text-3xl font-bold leading-[1.08] tracking-tight text-white md:text-4xl lg:text-5xl ${badge ? "mt-5" : ""}`}
            >
              {hasSplitTitle ? (
                <>
                  {titleLead}{" "}
                  <span className="bg-linear-to-r from-emerald-200 via-emerald-300 to-brand-accent bg-clip-text text-transparent">
                    {titleAccent}
                  </span>
                </>
              ) : (
                title
              )}
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-emerald-50/60 md:max-w-5xl md:text-lg lg:max-w-6xl">
              {subtitle}
            </p>

            {highlights ? <CTAHighlights points={highlights} /> : null}

            <div
              className={`flex flex-col items-center ${highlights ? "mt-10" : "mt-8"}`}
            >
              <PrimaryCtaLink
                href="/iletisim"
                variant="accent"
                className="h-13 px-10"
                showArrow={false}
                leadingIcon={<LuMessageCircle className="size-5" aria-hidden />}
              >
                {buttonLabel}
              </PrimaryCtaLink>
            </div>
            </div>
          </div>
        </SectionScrollReveal>
      </SiteContainer>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-accent/20 to-transparent"
      />
    </section>
  );
}

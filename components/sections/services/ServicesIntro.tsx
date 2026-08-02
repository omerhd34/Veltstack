import { LuCircleCheck, LuCompass, LuMessageCircle } from "react-icons/lu";
import { getLocale, getTranslations } from "next-intl/server";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";

interface ServicesIntroProps {
  className?: string;
}

export async function ServicesIntro({ className }: ServicesIntroProps) {
  const t = await getTranslations("home");
  const locale = await getLocale();

  const bullets = t.raw("servicesBullets") as string[];

  const cta = (
    <div className="flex w-full flex-col gap-3 min-[480px]:w-auto min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:gap-4">
      <PrimaryCtaLink
        href="/iletisim"
        variant="accent"
        showArrow={false}
        wrapperClassName="w-full min-[480px]:w-auto"
        className="w-full justify-center min-[480px]:w-auto"
        leadingIcon={<LuMessageCircle className="size-5" aria-hidden />}
      >
        {t("servicesCta")}
      </PrimaryCtaLink>
      <PrimaryCtaLink
        href="/hizmetler"
        variant="glass"
        showArrow={false}
        wrapperClassName="w-full min-[480px]:w-auto"
        className="w-full justify-center min-[480px]:w-auto"
        leadingIcon={<LuCompass className="size-5" aria-hidden />}
      >
        {t("servicesAllCta")}
      </PrimaryCtaLink>
    </div>
  );

  return (
    <div className={`w-full min-w-0 ${className ?? ""}`}>
      <SectionBadge variant="emerald-soft">{t("servicesTitle")}</SectionBadge>

      <div className="relative mt-8 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
        <SectionScrollReveal direction="left" className="flex flex-col">
          <h2
            id="services-section-title"
            className="font-(family-name:--font-heading) text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-[2.5rem] lg:text-5xl xl:text-[3rem] 2xl:text-[3.25rem] 2xl:leading-[1.04]"
          >
            {t("servicesHeadline")}
            {locale === "tr" ? <br /> : " "}
            <span className="text-brand-accent">
              {t("servicesHeadlineAccent")}
            </span>
          </h2>

          <div className="relative z-10 mt-8 hidden lg:block">{cta}</div>
        </SectionScrollReveal>

        <SectionScrollReveal
          direction="right"
          delay={0.06}
          className="flex flex-col gap-6"
        >
          <p className="text-[0.9375rem] leading-[1.9] text-white/55">
            {t("servicesIntro")}
          </p>

          <ul className="flex flex-col gap-2.5">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-white/65"
              >
                <LuCircleCheck
                  className="mt-0.5 size-4 shrink-0 text-brand-accent"
                  strokeWidth={2}
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="relative z-10 mt-4 lg:hidden">{cta}</div>
        </SectionScrollReveal>
      </div>
    </div>
  );
}

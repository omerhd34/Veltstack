import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import {
  LuArrowLeft,
  LuCalendar,
  LuChevronDown,
  LuClock,
  LuPenLine,
} from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ServicesPageHeroImage } from "@/components/pages/services/ServicesPageHeroImage";
import { PageScrollAnchor } from "@/components/ui/PageScrollAnchor";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import { cn, toLatinUppercase } from "@/lib/utils";

const AUTHOR = {
  name: "Ömer Halis Demir",
  role: "Full Stack Developer",
  avatar: "/images/img.jpg",
} as const;

interface BlogDetailHeroProps {
  category: string;
  date: string;
  readingTime: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
  writtenByLabel: string;
  scrollLabel: string;
  className?: string;
}

export async function BlogDetailHero({
  category,
  date,
  readingTime,
  title,
  excerpt,
  imageUrl,
  imageAlt,
  writtenByLabel,
  scrollLabel,
  className,
}: BlogDetailHeroProps) {
  const locale = (await getLocale()) as "tr" | "en";
  const t = await getTranslations("nav");

  return (
    <>
      <section
        data-page-hero
        className={cn(
          "relative flex min-h-dvh flex-col overflow-hidden bg-[#050f0c] pt-18 text-white",
          className,
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgb(58_107_82/0.18),transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(58_107_82/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(58_107_82/0.04)_1px,transparent_1px)] bg-size-[56px_56px] mask-[radial-gradient(ellipse_80%_70%_at_50%_40%,black,transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-16 size-120 rounded-full bg-emerald-600/8 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 bottom-16 size-90 rounded-full bg-emerald-800/6 blur-[100px]"
        />
        <SiteContainer className="relative flex min-h-[calc(100dvh-4.5rem)] flex-col py-8 sm:py-10">
          <div className="grid min-h-0 flex-1 items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
            <SectionScrollReveal direction="left" className="min-w-0">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-emerald-300/60 sm:gap-x-8">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-emerald-300/55 transition-colors hover:text-emerald-200"
                  >
                    <LuArrowLeft className="size-3.5" aria-hidden />
                    {t("blog")}
                  </Link>
                  <span className="inline-flex items-center rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-[0.6875rem] font-semibold text-emerald-300">
                    {category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <LuCalendar
                      className="size-3.5 text-emerald-400/70"
                      aria-hidden
                    />
                    {date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <LuClock
                      className="size-3.5 text-emerald-400/70"
                      aria-hidden
                    />
                    {readingTime}
                  </span>
                </div>

                <div
                  aria-hidden
                  className="mt-8 h-px w-12 bg-linear-to-r from-brand-accent to-transparent"
                />

                <h1 className="mt-6 font-(family-name:--font-heading) text-[2rem] font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-[3rem]">
                  {title}
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-[1.85] text-emerald-50/72 sm:text-base lg:text-lg">
                  {excerpt}
                </p>

                <div className="mt-10 inline-flex min-w-70 max-w-md items-center gap-4 rounded-2xl border border-emerald-900/45 bg-[#0a1612]/75 px-5 py-4 sm:min-w-[20rem] sm:max-w-lg sm:px-6 shadow-[0_12px_40px_rgb(0_0_0/0.25)] backdrop-blur-sm">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-accent/35 ring-offset-2 ring-offset-[#0a1612]">
                    <Image
                      src={AUTHOR.avatar}
                      alt={AUTHOR.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="flex items-center gap-1.5 text-[0.625rem] font-semibold tracking-[0.14em] text-emerald-400/55">
                      <LuPenLine className="size-3" aria-hidden />
                      {toLatinUppercase(writtenByLabel, locale)}
                    </p>
                    <p className="mt-0.5 text-base font-semibold text-white">
                      {AUTHOR.name}
                    </p>
                    <p className="text-sm text-emerald-400/65">{AUTHOR.role}</p>
                  </div>
                </div>
              </div>
            </SectionScrollReveal>

            <SectionScrollReveal
              direction="right"
              delay={0.14}
              className="min-w-0"
            >
              <ServicesPageHeroImage src={imageUrl} alt={imageAlt} />
            </SectionScrollReveal>
          </div>

          <div className="mt-auto shrink-0 pt-6 sm:pt-8">
            <a
              href="#blog-article"
              className="flex flex-col items-center gap-1.5 text-emerald-300/50 transition-colors hover:text-emerald-300/80"
            >
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em]">
                {scrollLabel}
              </span>
              <LuChevronDown className="size-4 animate-bounce" aria-hidden />
            </a>
          </div>
        </SiteContainer>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-emerald-500/25 to-transparent"
        />
      </section>
      <PageScrollAnchor id="blog-article" />
    </>
  );
}

import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { LuArrowLeft, LuCalendar, LuClock, LuPenLine } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import {
  PAGE_HERO_DETAIL_FRAME_CLASS,
  PageHeroDetail,
} from "@/components/ui/page-hero";
import { toLatinUppercase } from "@/lib/utils";

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

  const authorCard = (
    <div className="inline-flex max-w-md items-center gap-3 rounded-2xl border border-emerald-900/45 bg-[#0a1612]/75 px-3.5 py-3 shadow-[0_8px_28px_rgb(0_0_0/0.2)] backdrop-blur-sm sm:min-w-[20rem] sm:max-w-lg sm:gap-4 sm:px-6 sm:py-4 sm:shadow-[0_12px_40px_rgb(0_0_0/0.25)]">
      <div className="relative size-10 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-accent/35 ring-offset-2 ring-offset-[#0a1612] sm:size-12">
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
        <p className="mt-0.5 text-sm font-semibold text-white sm:text-base">
          {AUTHOR.name}
        </p>
        <p className="text-xs text-emerald-400/65 sm:text-sm">{AUTHOR.role}</p>
      </div>
    </div>
  );

  return (
    <PageHeroDetail
      className={className}
      title={title}
      subtitle={excerpt}
      scrollHref="#blog-article"
      scrollLabel={scrollLabel}
      imageSrc={imageUrl}
      imageAlt={imageAlt}
      frameClassName={PAGE_HERO_DETAIL_FRAME_CLASS}
      showGrid
      showBottomHairline
      glow="rich"
      leading={
        <div className="mb-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-emerald-300/60 sm:gap-x-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-emerald-300/55 transition-colors hover:text-emerald-200"
          >
            <LuArrowLeft className="size-3.5" aria-hidden />
            {t("blog")}
          </Link>
          <span className="inline-flex items-center rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[0.6875rem] font-semibold text-emerald-300 sm:px-4 sm:py-1.5">
            {category}
          </span>
          <span className="hidden items-center gap-1.5 lg:flex">
            <LuCalendar className="size-3.5 text-emerald-400/70" aria-hidden />
            {date}
          </span>
          <span className="flex items-center gap-1.5">
            <LuClock className="size-3.5 text-emerald-400/70" aria-hidden />
            {readingTime}
          </span>
        </div>
      }
      trailing={
        <div className="mt-5 hidden xl:block sm:mt-6">{authorCard}</div>
      }
      belowMedia={<div className="xl:hidden">{authorCard}</div>}
    />
  );
}

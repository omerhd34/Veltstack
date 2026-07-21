import { useLocale, useTranslations } from "next-intl";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { BorderTrace } from "@/components/ui/BorderTrace";
import { cn, toLatinUppercase } from "@/lib/utils";
import { BlogPreviewImage } from "./BlogPreviewImage";

const slowTransition =
  "transition-all duration-1000 ease-in-out motion-reduce:transition-none";

interface BlogPreviewCardProps {
  title: string;
  excerpt: string;
  href: string;
  image: string;
  readingTimeLabel?: string;
}

export function BlogPreviewCard({
  title,
  excerpt,
  href,
  image,
  readingTimeLabel,
}: BlogPreviewCardProps) {
  const locale = useLocale() as "tr" | "en";
  const t = useTranslations("home");

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col rounded-2xl bg-white",
        "border-trace-hover-fallback box-border border-[3px] border-solid border-transparent",
        "shadow-[0_8px_32px_rgb(0,0,0,0.16)] hover:-translate-y-1 hover:shadow-[0_20px_56px_rgb(0,0,0,0.24)]",
        slowTransition,
      )}
    >
      <BorderTrace durationSec={2.5} />
      <div className="relative aspect-16/10 shrink-0 overflow-hidden rounded-t-[calc(1rem-3px)]">
        <BlogPreviewImage src={image} alt={title} />
        <span
          className={cn(
            "absolute right-3 top-3 z-10 inline-flex size-9 items-center justify-center bg-transparent text-white drop-shadow-md sm:right-4 sm:top-4 sm:size-10",
            "transition-[color,transform] duration-500 ease-out",
            "group-hover:scale-105 group-hover:text-brand-accent",
            "motion-reduce:group-hover:scale-100",
          )}
        >
          <span className="sr-only">{t("readMore")}</span>
          <LuArrowUpRight
            className="size-5 shrink-0"
            strokeWidth={2.75}
            aria-hidden
          />
        </span>
      </div>
      <div className="flex min-h-0 flex-col p-4 sm:p-5 lg:p-6">
        <span className="mb-2 block h-4 shrink-0 text-[0.6875rem] font-semibold leading-4 tracking-[0.15em] text-brand-accent sm:text-xs">
          {readingTimeLabel
            ? toLatinUppercase(readingTimeLabel, locale)
            : "\u00A0"}
        </span>
        <h3 className="line-clamp-2 shrink-0 font-(family-name:--font-heading) text-base font-bold leading-snug text-[#0A0A0F] transition-colors group-hover:text-brand-accent sm:text-lg">
          {title}
        </h3>
        <p className="mt-1.5 line-clamp-3 min-h-[calc(0.8125rem*1.625*3)] shrink-0 text-[0.8125rem] leading-relaxed text-muted-foreground sm:mt-2 sm:min-h-[calc(0.875rem*1.625*3)] sm:text-sm">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}

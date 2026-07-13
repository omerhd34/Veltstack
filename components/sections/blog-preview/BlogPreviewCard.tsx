import { useLocale, useTranslations } from "next-intl";
import { LuArrowRight } from "react-icons/lu";
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
        "group relative flex h-full flex-col rounded-2xl bg-white",
        "border-trace-hover-fallback box-border border-[3px] border-solid border-transparent",
        "shadow-[0_2px_12px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgb(58,107,82,0.1)]",
        slowTransition,
      )}
    >
      <BorderTrace durationSec={2.5} />
      <div className="aspect-3/2 shrink-0 overflow-hidden rounded-t-[calc(1rem-3px)]">
        <BlogPreviewImage src={image} alt={title} />
      </div>
      <div className="flex min-h-0 flex-1 flex-col p-4 sm:p-5 md:p-6">
        <span className="mb-2 block h-4 shrink-0 text-[0.6875rem] font-semibold leading-4 tracking-[0.15em] text-brand-accent sm:mb-3 sm:text-xs">
          {readingTimeLabel
            ? toLatinUppercase(readingTimeLabel, locale)
            : "\u00A0"}
        </span>
        <h3 className="line-clamp-2 shrink-0 font-(family-name:--font-heading) text-base font-bold leading-snug text-[#0A0A0F] transition-colors group-hover:text-brand-accent sm:text-lg">
          {title}
        </h3>
        <p className="mt-1.5 line-clamp-2 min-h-[calc(0.8125rem*1.625*2)] shrink-0 text-[0.8125rem] leading-relaxed text-muted-foreground sm:mt-1 sm:min-h-[calc(0.875rem*1.625*2)] sm:text-sm">
          {excerpt}
        </p>
        <div className="mt-auto shrink-0 pt-4 sm:pt-5">
          <span
            className={cn(
              "inline-flex w-fit items-center gap-1.5 text-[0.6875rem] font-semibold text-brand-accent sm:text-xs",
              "origin-left transition-[color,transform] duration-700 ease-in-out",
              "group-hover:scale-105 group-hover:text-[#a8dfc4]",
              "motion-reduce:group-hover:scale-100",
            )}
          >
            <span>{t("readMore")}</span>
            <LuArrowRight className="size-3 shrink-0" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}

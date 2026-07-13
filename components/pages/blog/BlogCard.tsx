import Image from "next/image";
import { LuArrowUpRight, LuCalendar, LuClock, LuPenLine } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { BorderTrace } from "@/components/ui/BorderTrace";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import { cn } from "@/lib/utils";
import type { BlogPost } from "./blog-data";
import { formatDate, getBlogListImageUrl } from "./blog-data";

const slowTransition =
  "transition-all duration-1000 ease-in-out motion-reduce:transition-none";

const AUTHOR_NAME = "Ömer Halis Demir";

interface BlogCardProps {
  post: BlogPost;
  locale: "tr" | "en";
  readMoreLabel: string;
  readingTimeLabel: string;
  layout?: "horizontal" | "vertical";
  className?: string;
}

export function BlogCard({
  post,
  locale,
  readMoreLabel,
  readingTimeLabel,
  layout = "horizontal",
  className,
}: BlogCardProps) {
  const title = locale === "tr" ? post.titleTr : post.titleEn;
  const excerpt = locale === "tr" ? post.excerptTr : post.excerptEn;
  const category = locale === "tr" ? post.category : post.categoryEn;
  const date = formatDate(post.publishedAt, locale);
  const isHorizontal = layout === "horizontal";

  const imageSection = (
    <>
      <Image
        src={getBlogListImageUrl(post.imageUrl)}
        alt={title}
        fill
        className="object-contain transition-transform duration-700 group-hover:scale-105"
        sizes={
          isHorizontal
            ? "(max-width: 768px) 100vw, 42vw"
            : "(max-width: 768px) 100vw, 33vw"
        }
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/80 px-3 py-1 text-[0.6875rem] font-semibold text-white">
        {category}
      </span>
    </>
  );

  const textSection = (
    <>
      <div
        className={cn(
          "flex flex-wrap items-center gap-5 text-muted-foreground",
          isHorizontal ? "text-sm" : "text-xs",
        )}
      >
        <span className="flex items-center gap-1.5">
          <LuCalendar
            className={cn(
              "text-brand-accent/70",
              isHorizontal ? "size-4" : "size-3.5",
            )}
            aria-hidden
          />
          {date}
        </span>
        <span className="flex items-center gap-1.5">
          <LuClock
            className={cn(
              "text-brand-accent/70",
              isHorizontal ? "size-4" : "size-3.5",
            )}
            aria-hidden
          />
          {readingTimeLabel}
        </span>
        <span className="flex items-center gap-1.5">
          <LuPenLine
            className={cn(
              "text-brand-accent/70",
              isHorizontal ? "size-4" : "size-3.5",
            )}
            aria-hidden
          />
          {AUTHOR_NAME}
        </span>
      </div>

      <h2
        className={cn(
          "mt-4 font-(family-name:--font-heading) font-bold leading-tight tracking-tight transition-colors group-hover:text-brand-accent",
          isHorizontal ? "text-2xl lg:text-3xl" : "text-lg",
        )}
      >
        {title}
      </h2>

      <p
        className={cn(
          "mt-4 leading-relaxed text-foreground/60",
          isHorizontal ? "text-lg" : "line-clamp-2 text-sm",
        )}
      >
        {excerpt}
      </p>

      <span
        className={cn(
          "mt-6 inline-flex items-center gap-2 font-semibold text-brand-accent",
          isHorizontal ? "text-base" : "text-sm",
        )}
      >
        {readMoreLabel}
        <LuArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </>
  );

  const imageClassName = cn(
    "relative overflow-hidden bg-[#0B0F0D]",
    isHorizontal
      ? "rounded-t-[calc(1.5rem-3px)] md:rounded-l-[calc(1.5rem-3px)] md:rounded-tr-none md:rounded-br-none"
      : "rounded-t-[calc(1.5rem-3px)]",
    isHorizontal
      ? "aspect-3/2 md:w-[42%] md:shrink-0 md:self-center"
      : "aspect-3/2",
  );

  const textClassName = cn(
    "flex flex-col",
    isHorizontal ? "justify-center p-7 md:w-[58%] md:p-8 lg:p-10" : "p-6",
  );

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group relative flex rounded-3xl bg-white",
        "border-trace-hover-fallback box-border border-[3px] border-solid border-transparent",
        "shadow-[0_2px_12px_rgb(0_0_0/0.04)] hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgb(58_107_82/0.14)]",
        slowTransition,
        isHorizontal ? "flex-col md:flex-row" : "flex-col",
        className,
      )}
    >
      <BorderTrace durationSec={2.5} />
      {isHorizontal ? (
        <>
          <SectionScrollReveal
            direction="left"
            trigger="entry"
            className={imageClassName}
          >
            {imageSection}
          </SectionScrollReveal>
          <SectionScrollReveal
            direction="right"
            delay={0.14}
            trigger="entry"
            className={textClassName}
          >
            {textSection}
          </SectionScrollReveal>
        </>
      ) : (
        <>
          <div className={imageClassName}>{imageSection}</div>
          <div className={textClassName}>{textSection}</div>
        </>
      )}
    </Link>
  );
}

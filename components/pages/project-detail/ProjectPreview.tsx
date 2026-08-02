import type { IconType } from "react-icons";
import { LuExternalLink } from "react-icons/lu";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import { PAGE_HERO_DETAIL_CTA_CLASS } from "@/components/ui/page-hero";
import { cn } from "@/lib/utils";

interface ProjectPreviewProps {
  title: string;
  imageUrl?: string;
  coverGradient: string;
  icon: IconType;
  demoUrl?: string;
  demoLabel: string;
  className?: string;
}

export function ProjectPreview({
  title,
  imageUrl,
  coverGradient,
  icon: Icon,
  demoUrl,
  demoLabel,
  className,
}: ProjectPreviewProps) {
  const frame = (
    <div
      className={cn(
        "relative aspect-21/10 w-full overflow-hidden rounded-2xl border border-border/80 shadow-[0_24px_80px_rgb(0_0_0/0.12)] sm:rounded-3xl",
        "transition-transform duration-300 group-hover/preview:scale-[1.01]",
        imageUrl ? "bg-[#050f0c]" : cn("bg-linear-to-br", coverGradient),
      )}
    >
      {imageUrl ? (
        <>
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(min-width: 992px) 60vw, 90vw"
            className="object-cover transition-transform duration-300 group-hover/preview:scale-105"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#050f0c]/60 via-transparent to-transparent"
          />
        </>
      ) : (
        <div className="flex h-full items-center justify-center">
          <Icon
            className="size-16 text-white/20 sm:size-20 lg:size-32"
            strokeWidth={1.25}
            aria-hidden
          />
        </div>
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-emerald-400/15"
      />
    </div>
  );

  return (
    <section className={cn("bg-background pt-16 md:pt-24", className)}>
      <SiteContainer>
        <SectionScrollReveal direction="up" trigger="entry">
          <div className="relative mx-auto w-full max-w-5xl">
            <div
              aria-hidden
              className="absolute inset-0 rounded-[2rem] bg-linear-to-br from-brand-accent/15 via-transparent to-emerald-600/10 blur-2xl"
            />
            {demoUrl ? (
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/preview relative block"
                aria-label={`${demoLabel}: ${title}`}
              >
                {frame}
                <span className={PAGE_HERO_DETAIL_CTA_CLASS}>
                  <LuExternalLink className="size-3 lg:size-3.5" aria-hidden />
                  {demoLabel}
                </span>
              </Link>
            ) : (
              <div className="relative">{frame}</div>
            )}
          </div>
        </SectionScrollReveal>
      </SiteContainer>
    </section>
  );
}

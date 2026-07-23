import Image from "next/image";
import { cn } from "@/lib/utils";

export const PAGE_HERO_IMAGE_WRAPPER_CLASS =
  "relative mx-auto w-full max-w-sm overflow-hidden lg:mx-0 lg:max-w-none lg:w-full lg:justify-self-end";

export const PAGE_HERO_IMAGE_FRAME_CLASS =
  "relative h-[180px] w-full overflow-hidden rounded-3xl border border-emerald-700/30 shadow-[0_24px_80px_rgb(0_0_0/0.45)] sm:h-[320px] lg:h-[min(380px,calc(100dvh-26rem))] 2xl:h-[min(420px,calc(100dvh-24rem))] 4xl:h-[min(460px,calc(100dvh-22rem))]";

export const PAGE_HERO_DETAIL_FRAME_CLASS =
  "h-[180px] rounded-2xl sm:h-[280px] sm:rounded-3xl lg:h-[min(380px,calc(100dvh-26rem))] 2xl:h-[min(420px,calc(100dvh-24rem))] 4xl:h-[min(460px,calc(100dvh-22rem))]";

export const PAGE_HERO_DETAIL_CTA_CLASS =
  "absolute bottom-2 left-2 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/50 px-2 py-0.5 text-[0.625rem] font-semibold text-white ring-1 ring-white/15 backdrop-blur-md transition-colors sm:bottom-2.5 sm:left-2.5 sm:px-2.5 sm:py-1 sm:text-[0.6875rem] lg:bottom-4 lg:left-4 lg:gap-2 lg:px-3 lg:py-1.5 lg:text-xs group-hover/preview:bg-emerald-600/75";
interface PageHeroImageProps {
  alt: string;
  src?: string;
  className?: string;
  frameClassName?: string;
}

export function PageHeroImage({
  alt,
  src = "/images/pages/services/hero.png",
  className,
  frameClassName,
}: PageHeroImageProps) {
  return (
    <div className={cn(PAGE_HERO_IMAGE_WRAPPER_CLASS, className)}>
      <div
        aria-hidden
        className="absolute inset-0 rounded-[2rem] bg-linear-to-br from-brand-accent/20 via-transparent to-emerald-600/10 blur-2xl"
      />
      <div className={cn(PAGE_HERO_IMAGE_FRAME_CLASS, frameClassName)}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-[#050f0c]/90 via-[#050f0c]/15 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 ring-1 ring-inset ring-emerald-400/15"
        />
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width: 992px) 50vw, 90vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

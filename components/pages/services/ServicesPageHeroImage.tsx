import Image from "next/image";
import { cn } from "@/lib/utils";

export const PAGE_HERO_IMAGE_WRAPPER_CLASS =
  "relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none lg:w-full lg:justify-self-end";

export const PAGE_HERO_IMAGE_FRAME_CLASS =
  "relative h-[180px] w-full overflow-hidden rounded-3xl border border-emerald-700/30 shadow-[0_24px_80px_rgb(0_0_0/0.45)] sm:h-[320px] lg:h-[420px]";

interface ServicesPageHeroImageProps {
  alt: string;
  src?: string;
  className?: string;
  frameClassName?: string;
}

export function ServicesPageHeroImage({
  alt,
  src = "/images/pages/services/hero.png",
  className,
  frameClassName,
}: ServicesPageHeroImageProps) {
  return (
    <div className={cn(PAGE_HERO_IMAGE_WRAPPER_CLASS, className)}>
      <div
        aria-hidden
        className="absolute -inset-3 rounded-[2rem] bg-linear-to-br from-brand-accent/20 via-transparent to-emerald-600/10 blur-2xl"
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
          sizes="(min-width: 1024px) 50vw, 90vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

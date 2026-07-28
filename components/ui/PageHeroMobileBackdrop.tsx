import Image from "next/image";
import { HERO_BLUR_DATA_URL, HERO_IMAGE_QUALITY } from "@/lib/hero-image";

interface PageHeroMobileBackdropProps {
  src: string;
  desktopSrc?: string;
}

export function PageHeroMobileBackdrop({
  src,
  desktopSrc,
}: PageHeroMobileBackdropProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#050f0c] opacity-70"
    >
      <Image
        src={src}
        alt=""
        fill
        priority
        fetchPriority="high"
        quality={HERO_IMAGE_QUALITY}
        placeholder="blur"
        blurDataURL={HERO_BLUR_DATA_URL}
        sizes={desktopSrc ? "(max-width: 991px) 100vw, 0px" : "100vw"}
        className={desktopSrc ? "object-cover lg:hidden" : "object-cover"}
      />
      {desktopSrc ? (
        <Image
          src={desktopSrc}
          alt=""
          fill
          priority
          fetchPriority="high"
          quality={HERO_IMAGE_QUALITY}
          placeholder="blur"
          blurDataURL={HERO_BLUR_DATA_URL}
          sizes="(min-width: 992px) 100vw, 0px"
          className="hidden object-cover lg:block"
        />
      ) : null}
      <div className="absolute inset-0 bg-linear-to-t from-[#050f0c]/90 via-[#050f0c]/35 to-[#050f0c]/55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgb(5_15_12/0.15),rgb(5_15_12/0.72))]" />
    </div>
  );
}

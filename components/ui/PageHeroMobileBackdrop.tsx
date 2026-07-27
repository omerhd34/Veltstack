import Image from "next/image";

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
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-70"
    >
      <Image
        src={src}
        alt=""
        fill
        priority
        sizes="100vw"
        className={desktopSrc ? "object-cover lg:hidden" : "object-cover"}
      />
      {desktopSrc ? (
        <Image
          src={desktopSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover lg:block"
        />
      ) : null}
      <div className="absolute inset-0 bg-linear-to-t from-[#050f0c]/90 via-[#050f0c]/35 to-[#050f0c]/55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgb(5_15_12/0.15),rgb(5_15_12/0.72))]" />
    </div>
  );
}

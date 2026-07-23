import Image from "next/image";

interface PageHeroMobileBackdropProps {
  src: string;
}

export function PageHeroMobileBackdrop({ src }: PageHeroMobileBackdropProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-70 lg:hidden"
    >
      <Image
        src={src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#050f0c]/90 via-[#050f0c]/15 to-transparent" />
    </div>
  );
}

import { ServicesPageHeroImage } from "@/components/pages/services/ServicesPageHeroImage";

interface PageHeroMobileBackdropProps {
  src: string;
}

export function PageHeroMobileBackdrop({ src }: PageHeroMobileBackdropProps) {
  return (
    <ServicesPageHeroImage
      alt=""
      src={src}
      className="pointer-events-none absolute inset-0 h-full max-w-none opacity-70 lg:hidden"
      frameClassName="h-full rounded-none border-0 shadow-none"
    />
  );
}

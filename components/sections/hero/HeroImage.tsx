import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroImageProps {
  alt?: string;
  className?: string;
}

export function HeroImage({ alt = "", className }: HeroImageProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden bg-[#0A0A0F]",
        className,
      )}
      aria-hidden={alt === ""}
    >
      <div className="absolute inset-y-0 right-0 h-full w-full md:left-[22%] lg:left-[18%] xl:left-[14%]">
        <Image
          src="/hero/veltstack-mobile.png"
          alt={alt}
          fill
          priority
          fetchPriority="high"
          quality={100}
          sizes="100vw"
          className="object-cover object-[68%_58%] lg:hidden"
        />
        <Image
          src="/hero/veltstack.png"
          alt={alt}
          fill
          priority
          fetchPriority="high"
          quality={100}
          sizes="(max-width: 1200px) 100vw, 80vw"
          className="hidden object-cover object-[72%_52%] lg:block xl:object-[74%_50%]"
        />
      </div>
      <div
        className="absolute inset-0 bg-[#0A0A0F]/10 max-sm:bg-[#0A0A0F]/22 md:max-lg:bg-[#0A0A0F]/08"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgb(10_10_15/0.94)_0%,rgb(10_10_15/0.62)_24%,rgb(10_10_15/0.14)_48%,transparent_66%)] max-sm:bg-[linear-gradient(to_right,rgb(10_10_15/0.9)_0%,rgb(10_10_15/0.62)_40%,rgb(10_10_15/0.2)_70%,transparent_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(10_10_15/0.1)_0%,transparent_16%,transparent_84%,rgb(10_10_15/0.32)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_48%_52%_at_22%_42%,rgb(10_10_15/0.4),transparent_70%)] max-sm:bg-[radial-gradient(ellipse_110%_70%_at_12%_30%,rgb(10_10_15/0.62),transparent_72%)]"
        aria-hidden
      />
    </div>
  );
}

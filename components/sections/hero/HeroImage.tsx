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
      <div className="absolute inset-y-0 right-0 h-full w-full md:left-[36%] lg:left-[34%] xl:left-[32%]">
        <Image
          src="/hero/veltstack-mobile.png"
          alt={alt}
          fill
          priority
          fetchPriority="high"
          quality={70}
          sizes="100vw"
          className="object-cover object-[50%_62%] lg:hidden"
        />
        <Image
          src="/hero/veltstack.png"
          alt={alt}
          fill
          priority
          fetchPriority="high"
          quality={70}
          sizes="(max-width: 1200px) 65vw, 55vw"
          className="hidden object-cover object-[58%_48%] lg:block lg:object-[60%_46%] xl:object-[62%_45%]"
        />
      </div>
      <div
        className="absolute inset-0 bg-[#0A0A0F]/22 max-sm:bg-[#0A0A0F]/36 md:max-lg:bg-[#0A0A0F]/20"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgb(10_10_15/0.96)_0%,rgb(10_10_15/0.72)_28%,rgb(10_10_15/0.22)_52%,transparent_70%)] max-sm:bg-[linear-gradient(to_right,rgb(10_10_15/0.92)_0%,rgb(10_10_15/0.7)_42%,rgb(10_10_15/0.28)_72%,transparent_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(10_10_15/0.15)_0%,transparent_16%,transparent_84%,rgb(10_10_15/0.45)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_48%_52%_at_22%_42%,rgb(10_10_15/0.55),transparent_70%)] max-sm:bg-[radial-gradient(ellipse_110%_70%_at_12%_30%,rgb(10_10_15/0.78),transparent_72%)]"
        aria-hidden
      />
    </div>
  );
}

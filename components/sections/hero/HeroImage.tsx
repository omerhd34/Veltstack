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
          src="/hero/veltstack.png"
          alt={alt}
          fill
          priority
          fetchPriority="high"
          quality={60}
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 65vw, 55vw"
          className="object-cover object-[62%_50%] max-sm:object-[52%_44%] sm:object-[58%_48%] md:object-[64%_50%] lg:object-[66%_50%] xl:object-[68%_50%]"
        />
      </div>
      <div
        className="absolute inset-0 bg-[#0A0A0F]/40 max-sm:bg-[#0A0A0F]/52 md:max-lg:bg-[#0A0A0F]/38"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgb(10_10_15/0.96)_0%,rgb(10_10_15/0.78)_32%,rgb(10_10_15/0.32)_54%,transparent_72%)] max-sm:bg-[linear-gradient(to_right,rgb(10_10_15/0.94)_0%,rgb(10_10_15/0.82)_48%,rgb(10_10_15/0.4)_78%,transparent_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(10_10_15/0.2)_0%,transparent_14%,transparent_82%,rgb(10_10_15/0.6)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_55%_at_24%_42%,rgb(10_10_15/0.72),transparent_70%)] max-sm:bg-[radial-gradient(ellipse_110%_75%_at_12%_34%,rgb(10_10_15/0.88),transparent_72%)]"
        aria-hidden
      />
    </div>
  );
}

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
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden={alt === ""}
    >
      <Image
        src="/hero/veltstack-mobile.png"
        alt={alt}
        fill
        priority
        fetchPriority="high"
        quality={100}
        sizes="(max-width: 991px) 100vw, 0px"
        className="object-cover object-center lg:hidden"
      />
      <Image
        src="/hero/veltstack.png"
        alt={alt}
        fill
        priority
        fetchPriority="high"
        quality={100}
        sizes="(min-width: 992px) 100vw, 0px"
        className="hidden object-cover object-[58%_45%] lg:block"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgb(5_15_12/0.88)_0%,rgb(5_15_12/0.62)_32%,rgb(5_15_12/0.22)_58%,transparent_82%)] max-sm:bg-[linear-gradient(to_bottom,rgb(5_15_12/0.55)_0%,rgb(5_15_12/0.25)_35%,rgb(5_15_12/0.45)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(5_15_12/0.4)_0%,transparent_28%,transparent_68%,rgb(5_15_12/0.72)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgb(5_15_12/0.08),rgb(5_15_12/0.5))]"
        aria-hidden
      />
    </div>
  );
}

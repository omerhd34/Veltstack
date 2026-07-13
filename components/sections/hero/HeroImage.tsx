import { cn } from "@/lib/utils";

const HERO_SOURCES = {
  xl: "/hero/veltstack_xl.png",
  lg: "/hero/veltstack_lg.png",
  md: "/hero/veltstack_md.png",
  sm: "/hero/veltstack_sm.png",
} as const;

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
      <picture className="absolute inset-y-0 right-0 block h-full w-full md:left-[42%] md:w-auto lg:left-[40%] xl:left-[36%] 2xl:left-[32%]">
        <source
          media="(min-width: 1536px) and (min-height: 700px)"
          srcSet={HERO_SOURCES.xl}
        />
        <source
          media="(min-width: 1280px) and (min-height: 600px)"
          srcSet={HERO_SOURCES.lg}
        />
        <source
          media="(min-width: 1024px) and (max-height: 599px)"
          srcSet={HERO_SOURCES.md}
        />
        <source media="(min-width: 1024px)" srcSet={HERO_SOURCES.lg} />
        <source
          media="(min-width: 768px) and (min-height: 500px)"
          srcSet={HERO_SOURCES.md}
        />
        <source
          media="(min-width: 768px) and (max-height: 499px)"
          srcSet={HERO_SOURCES.sm}
        />
        <source media="(min-width: 480px)" srcSet={HERO_SOURCES.sm} />
        <img
          src={HERO_SOURCES.sm}
          alt={alt}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[72%_48%] max-sm:object-[70%_46%] md:object-[70%_50%] lg:object-[68%_50%] xl:object-[66%_50%] 2xl:object-[68%_50%]"
        />
      </picture>
      <div
        className="absolute inset-0 bg-[#0A0A0F]/50 max-sm:bg-[#0A0A0F]/55 md:bg-[#0A0A0F]/42 lg:bg-[#0A0A0F]/38 xl:bg-[#0A0A0F]/35 2xl:bg-[#0A0A0F]/35"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgb(10_10_15/0.97)_0%,rgb(10_10_15/0.88)_28%,rgb(10_10_15/0.55)_48%,rgb(10_10_15/0.2)_62%,transparent_78%)] max-md:bg-[linear-gradient(to_right,rgb(10_10_15/0.98)_0%,rgb(10_10_15/0.9)_42%,rgb(10_10_15/0.55)_70%,transparent_100%)] md:max-lg:bg-[linear-gradient(to_right,rgb(10_10_15/0.97)_0%,rgb(10_10_15/0.85)_32%,rgb(10_10_15/0.4)_55%,transparent_72%)] 2xl:bg-[linear-gradient(to_right,rgb(10_10_15/0.95)_0%,rgb(10_10_15/0.72)_30%,rgb(10_10_15/0.28)_52%,transparent_68%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(10_10_15/0.22)_0%,transparent_12%,transparent_86%,rgb(10_10_15/0.55)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_55%_55%_at_22%_42%,rgb(10_10_15/0.78),transparent_72%)] max-md:bg-[radial-gradient(ellipse_100%_70%_at_18%_36%,rgb(10_10_15/0.88),transparent_78%)] md:max-xl:bg-[radial-gradient(ellipse_70%_60%_at_20%_40%,rgb(10_10_15/0.82),transparent_74%)] 2xl:bg-[radial-gradient(ellipse_50%_55%_at_24%_42%,rgb(10_10_15/0.7),transparent_70%)]"
        aria-hidden
      />
    </div>
  );
}

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
      <picture className="absolute inset-y-0 right-0 block h-full w-full md:left-[36%] md:w-auto lg:left-[34%] xl:left-[32%]">
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
          className="h-full w-full object-cover object-[62%_50%] max-sm:object-[58%_48%] md:object-[64%_50%] lg:object-[66%_50%] xl:object-[68%_50%]"
        />
      </picture>
      <div
        className="absolute inset-0 bg-[#0A0A0F]/35 max-sm:bg-[#0A0A0F]/45 md:max-lg:bg-[#0A0A0F]/38"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgb(10_10_15/0.95)_0%,rgb(10_10_15/0.72)_30%,rgb(10_10_15/0.28)_52%,transparent_68%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(10_10_15/0.18)_0%,transparent_12%,transparent_86%,rgb(10_10_15/0.55)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_55%_at_24%_42%,rgb(10_10_15/0.7),transparent_70%)] max-md:bg-[radial-gradient(ellipse_90%_60%_at_20%_38%,rgb(10_10_15/0.75),transparent_80%)]"
        aria-hidden
      />
    </div>
  );
}

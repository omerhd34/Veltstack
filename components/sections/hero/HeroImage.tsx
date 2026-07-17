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
          className="h-full w-full object-cover object-[62%_50%] max-sm:object-[52%_44%] sm:object-[58%_48%] md:object-[64%_50%] lg:object-[66%_50%] xl:object-[68%_50%]"
        />
      </picture>
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

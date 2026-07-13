"use client";

import { CountUp } from "@/components/lightswind/count-up";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export interface WhoWeAreStat {
  target: number;
  suffix: string;
  label: string;
}

interface WhoWeAreStatsProps {
  stats: readonly WhoWeAreStat[];
}

function StatCard({
  target,
  suffix,
  label,
  active,
  index,
}: WhoWeAreStat & { active: boolean; index: number }) {
  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl border border-brand-accent/12 bg-white/70 px-4 py-4 shadow-[0_4px_20px_rgb(58_107_82/0.06)] backdrop-blur-sm transition-all duration-500 sm:px-5 sm:py-5 md:px-6",
        active ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
      )}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgb(58_107_82/0.08),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <CountUp
        value={target}
        suffix={suffix}
        duration={2.2}
        triggerOnView
        animationStyle="gentle"
        colorScheme="custom"
        customColor="#0A0A0F"
        className="relative justify-start text-2xl sm:text-3xl md:text-4xl"
        numberClassName="font-(family-name:--font-heading) font-bold"
      />
      <p className="relative mt-1.5 text-[0.6875rem] font-medium leading-snug text-muted-foreground sm:mt-2 sm:text-xs sm:leading-normal">
        {label}
      </p>
    </div>
  );
}

export function WhoWeAreStats({ stats }: WhoWeAreStatsProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.35, repeat: true });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement | null>}
      className="mt-8 grid w-full grid-cols-1 gap-3 border-t border-brand-accent/15 pt-8 sm:mt-10 sm:grid-cols-3 sm:gap-3 sm:pt-10 md:mt-12 md:gap-6"
      aria-live="polite"
    >
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          {...stat}
          active={isVisible}
          index={index}
        />
      ))}
    </div>
  );
}

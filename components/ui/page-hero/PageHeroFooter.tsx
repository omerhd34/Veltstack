import type { ReactNode } from "react";
import {
  HeroStatsCards,
  type HeroStat,
} from "@/components/ui/HeroStatsCards";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import { PageHeroScrollLink } from "./PageHeroScrollLink";
import { cn } from "@/lib/utils";

interface PageHeroFooterProps {
  scrollHref: string;
  scrollLabel: string;
  stats?: HeroStat[];
  borderAlways?: boolean;
  className?: string;
  children?: ReactNode;
}

export function PageHeroFooter({
  scrollHref,
  scrollLabel,
  stats,
  borderAlways = false,
  className,
  children,
}: PageHeroFooterProps) {
  return (
    <div
      className={cn(
        "mt-auto shrink-0 pt-4",
        borderAlways
          ? "border-t border-emerald-900/35 pt-4 sm:pt-6 lg:pt-8"
          : "lg:border-t lg:border-emerald-900/35 lg:pt-8",
        className,
      )}
    >
      <SectionScrollReveal direction="up" when="mount" delay={0.28}>
        {stats ? <HeroStatsCards stats={stats} /> : null}
        {children}
      </SectionScrollReveal>

      <PageHeroScrollLink
        href={scrollHref}
        label={scrollLabel}
        className={stats || children ? "mt-3 sm:mt-4 lg:mt-8" : undefined}
      />
    </div>
  );
}

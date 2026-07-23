import type { ReactNode } from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import { cn } from "@/lib/utils";

type BadgeVariant =
  | "emerald"
  | "emerald-soft"
  | "emerald-muted"
  | "emerald-label"
  | "accent"
  | "accent-card"
  | "accent-glass";

interface PageHeroCopyProps {
  badge?: string;
  title: string;
  subtitle: string;
  subtitleSecondary?: string;
  badgeVariant?: BadgeVariant;
  badgeAlwaysVisible?: boolean;
  accentAlwaysVisible?: boolean;
  secondaryMuted?: boolean;
  leading?: ReactNode;
  trailing?: ReactNode;
  className?: string;
}

export function PageHeroCopy({
  badge,
  title,
  subtitle,
  subtitleSecondary,
  badgeVariant,
  badgeAlwaysVisible = false,
  accentAlwaysVisible = false,
  secondaryMuted = false,
  leading,
  trailing,
  className,
}: PageHeroCopyProps) {
  return (
    <SectionScrollReveal
      direction="left"
      when="mount"
      className={cn("relative z-10 min-w-0", className)}
    >
      <div className="min-w-0">
        {leading}

        {badge ? (
          <SectionBadge
            variant={badgeVariant}
            className={cn(!badgeAlwaysVisible && "hidden sm:inline-flex")}
          >
            {badge}
          </SectionBadge>
        ) : null}

        <div
          aria-hidden
          className={cn(
            "bg-linear-to-r from-brand-accent to-transparent",
            accentAlwaysVisible
              ? "mt-7 h-px w-14"
              : "mt-6 hidden h-px w-12 lg:block",
          )}
        />

        <h1
          className={cn(
            "font-(family-name:--font-heading) text-[1.625rem] font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[3rem] 2xl:text-[3.25rem]",
            badgeAlwaysVisible || accentAlwaysVisible || !badge
              ? "mt-4 sm:mt-6"
              : "sm:mt-4 lg:mt-6",
          )}
        >
          {title}
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-[1.65] text-emerald-50/75 sm:mt-5 sm:max-w-3xl sm:text-base sm:leading-[1.8] lg:mt-6 lg:max-w-xl lg:text-lg lg:leading-[1.85]">
          {subtitle}
        </p>

        {subtitleSecondary ? (
          <p
            className={cn(
              "mt-3 max-w-2xl text-sm leading-[1.75] sm:max-w-3xl sm:text-[0.9375rem] sm:leading-[1.8] lg:max-w-xl",
              secondaryMuted ? "text-emerald-50/45" : "text-emerald-50/65",
            )}
          >
            {subtitleSecondary}
          </p>
        ) : null}

        {trailing}
      </div>
    </SectionScrollReveal>
  );
}

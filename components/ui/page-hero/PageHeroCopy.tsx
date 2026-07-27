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
            "font-(family-name:--font-heading) text-[33.75px] font-bold leading-[1.2] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl lg:leading-tight",
            badgeAlwaysVisible || accentAlwaysVisible || !badge
              ? "mt-4 sm:mt-6"
              : "mt-2 sm:mt-4 lg:mt-6",
          )}
        >
          {title}
        </h1>

        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-emerald-50/75 sm:mt-5 sm:max-w-3xl lg:mt-6 lg:max-w-xl">
          {subtitle}
        </p>

        {subtitleSecondary ? (
          <p
            className={cn(
              "mt-3 max-w-2xl text-lg leading-relaxed sm:max-w-3xl lg:max-w-xl",
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

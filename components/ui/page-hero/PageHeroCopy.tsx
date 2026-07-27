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
  badgeVariant?: BadgeVariant;
  badgeAlwaysVisible?: boolean;
  accentAlwaysVisible?: boolean;
  leading?: ReactNode;
  trailing?: ReactNode;
  className?: string;
}

export function PageHeroCopy({
  badge,
  title,
  subtitle,
  badgeVariant,
  badgeAlwaysVisible = false,
  accentAlwaysVisible = false,
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
            "font-(family-name:--font-heading) text-[28px] font-bold leading-[1.2] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl lg:leading-tight",
            badgeAlwaysVisible || accentAlwaysVisible || !badge
              ? "mt-4 sm:mt-6"
              : "mt-2 sm:mt-4 lg:mt-6",
          )}
        >
          {title}
        </h1>

        <p className="mt-3 max-w-2xl text-base leading-relaxed text-emerald-50/75 sm:mt-5 sm:max-w-3xl sm:text-lg lg:mt-6 lg:max-w-xl">
          {subtitle}
        </p>

        {trailing}
      </div>
    </SectionScrollReveal>
  );
}

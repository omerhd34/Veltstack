import type { ReactNode } from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import { cn } from "@/lib/utils";

type BadgeVariant =
  | "emerald"
  | "emerald-soft"
  | "emerald-muted"
  | "emerald-label"
  | "soft"
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
  align?: "left" | "center";
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
  align = "left",
  leading,
  trailing,
  className,
}: PageHeroCopyProps) {
  const centered = align === "center";

  return (
    <SectionScrollReveal
      direction={centered ? "up" : "left"}
      when="mount"
      className={cn(
        "relative z-10 min-w-0",
        centered && "mx-auto w-full max-w-3xl",
        className,
      )}
    >
      <div className={cn("min-w-0", centered && "flex flex-col items-center text-center")}>
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
            accentAlwaysVisible
              ? "mt-7 h-px w-14"
              : "mt-6 hidden h-px w-12 lg:block",
            centered
              ? "bg-linear-to-r from-transparent via-white/45 to-transparent"
              : "bg-linear-to-r from-white/45 to-transparent",
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

        <p
          className={cn(
            "mt-3 text-base leading-relaxed text-emerald-50/75 sm:mt-5 sm:text-lg lg:mt-6",
            centered
              ? "max-w-2xl sm:max-w-3xl"
              : "max-w-2xl sm:max-w-3xl lg:max-w-xl",
          )}
        >
          {subtitle}
        </p>

        {trailing}
      </div>
    </SectionScrollReveal>
  );
}

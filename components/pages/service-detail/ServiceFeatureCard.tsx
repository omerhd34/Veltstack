"use client";

import { useId } from "react";
import {
  LuArrowUpRight,
  LuChartLine,
  LuChevronDown,
  LuCloudUpload,
  LuLanguages,
  LuLayoutDashboard,
  LuSearch,
  LuShieldCheck,
  LuSmartphone,
  LuSparkles,
  LuSunMoon,
  LuZap,
} from "react-icons/lu";
import { cn } from "@/lib/utils";

export const featureIcons = [
  LuSearch,
  LuCloudUpload,
  LuSparkles,
  LuZap,
  LuSmartphone,
  LuLanguages,
  LuSunMoon,
  LuLayoutDashboard,
  LuShieldCheck,
  LuChartLine,
] as const;

interface ServiceFeatureCardProps {
  title: string;
  description: string;
  index: number;
  detailLabel: string;
  showFullDescription?: boolean;
  fullWidthDescription?: boolean;
  hideArrow?: boolean;
  collapsible?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function ServiceFeatureCard({
  title,
  description,
  index,
  detailLabel,
  showFullDescription = false,
  fullWidthDescription = false,
  hideArrow = false,
  collapsible = false,
  expanded = false,
  onToggle,
  className,
}: ServiceFeatureCardProps) {
  const Icon = featureIcons[index % featureIcons.length];
  const descriptionId = useId();
  const showDescription = !collapsible || expanded;

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-5 shadow-[0_2px_16px_rgb(0_0_0/0.04)] transition-all duration-300 hover:border-brand-accent/30 hover:shadow-[0_12px_32px_rgb(58_107_82/0.1)]",
        collapsible && "cursor-pointer",
        className,
      )}
      role={collapsible ? "button" : undefined}
      tabIndex={collapsible ? 0 : undefined}
      aria-expanded={collapsible ? expanded : undefined}
      aria-controls={collapsible ? descriptionId : undefined}
      onClick={collapsible ? onToggle : undefined}
      onKeyDown={
        collapsible
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onToggle?.();
              }
            }
          : undefined
      }
    >
      <div className="flex items-start gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent ring-1 ring-brand-accent/15">
          <Icon className="size-5" strokeWidth={1.75} aria-hidden />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-brand-accent/70">
            {String(index + 1).padStart(2, "0")} · {detailLabel}
          </p>
          <h3 className="mt-1 font-(family-name:--font-heading) text-base font-bold leading-snug text-[#0A0A0F]">
            {title}
          </h3>

          {!collapsible && !fullWidthDescription && showDescription && (
            <p
              id={descriptionId}
              className={cn(
                "mt-2 text-sm leading-[1.75] text-muted-foreground",
                !showFullDescription && "line-clamp-4",
              )}
            >
              {description}
            </p>
          )}
        </div>

        {collapsible ? (
          <LuChevronDown
            className={cn(
              "size-4 shrink-0 text-muted-foreground/50 transition-transform duration-300",
              expanded && "rotate-180 text-brand-accent",
            )}
            aria-hidden
          />
        ) : !hideArrow ? (
          <LuArrowUpRight
            className="size-4 shrink-0 text-muted-foreground/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-accent"
            aria-hidden
          />
        ) : null}
      </div>

      {(collapsible || fullWidthDescription) && showDescription && (
        <p
          id={descriptionId}
          className={cn(
            "mt-4 text-sm leading-[1.75] text-muted-foreground",
            collapsible &&
              "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-1 motion-safe:duration-200",
          )}
        >
          {description}
        </p>
      )}
    </article>
  );
}

interface FeatureShowcaseProps {
  title: string;
  description: string;
  index: number;
  total: number;
  detailLabel: string;
}

export function FeatureShowcase({
  title,
  description,
  index,
  total,
  detailLabel,
}: FeatureShowcaseProps) {
  const Icon = featureIcons[index % featureIcons.length];
  const slideNumber = String(index + 1).padStart(2, "0");
  const totalNumber = String(total).padStart(2, "0");

  return (
    <div className="relative flex h-full min-h-88 flex-col overflow-hidden rounded-[2rem] bg-linear-to-br from-[#071510] via-[#0f2a1e] to-[#0a1f17] px-8 pt-12 pb-0 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300 lg:px-12 lg:pt-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgb(58_107_82/0.22),transparent_52%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_38%,rgb(58_107_82/0.38),transparent_42%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <span
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-6 -translate-y-1/2 font-(family-name:--font-heading) text-[clamp(6rem,16vw,9rem)] font-bold leading-none text-white/5 select-none lg:left-12"
      >
        {slideNumber}
      </span>

      <div className="relative grid flex-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14">
        <div className="relative z-10 min-w-0">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-emerald-400/80">
            {detailLabel}
          </p>
          <h3 className="mt-3 font-(family-name:--font-heading) text-[1.75rem] font-bold leading-tight tracking-tight text-white lg:text-[2rem]">
            {title}
          </h3>
          <p className="mt-5 text-[0.9375rem] leading-[1.9] text-emerald-50/75 lg:text-base lg:leading-[1.85]">
            {description}
          </p>
        </div>

        <div className="relative mx-auto shrink-0 lg:mx-0">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 scale-125 rounded-full bg-emerald-400/20 blur-2xl"
          />
          <div className="relative flex size-20 items-center justify-center rounded-[1.35rem] bg-white/10 text-emerald-300 ring-1 ring-white/15 backdrop-blur-md lg:size-24 lg:rounded-3xl">
            <Icon className="size-8 lg:size-9" strokeWidth={1.5} aria-hidden />
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="relative z-10 mt-8 border-t border-white/10 lg:mt-10"
      >
        <div className="flex items-center justify-center gap-3 py-6 lg:py-7">
          <span className="text-xs font-semibold tabular-nums text-emerald-300/90">
            {slideNumber}
          </span>
          <span className="h-px w-12 bg-linear-to-r from-transparent via-emerald-400/40 to-transparent" />
          <span className="text-xs font-medium tabular-nums text-emerald-400/45">
            {totalNumber}
          </span>
        </div>
      </div>
    </div>
  );
}

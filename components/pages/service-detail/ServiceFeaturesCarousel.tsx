"use client";

import { useCallback, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { StardustIconButton } from "@/components/ui/StardustIconButton";
import { cn } from "@/lib/utils";
import { FeatureShowcase } from "./ServiceFeatureCard";

interface ServiceFeaturesCarouselLabels {
  prev: string;
  next: string;
}

interface ServiceFeaturesCarouselProps {
  features: { title: string; description: string }[];
  detailLabel: string;
  labels: ServiceFeaturesCarouselLabels;
  className?: string;
}

const navButtonClassName = cn(
  "shadow-[0_4px_16px_rgb(0,0,0,0.06)]",
  "hover:shadow-[0_8px_24px_rgb(58,107,82,0.12)]",
);

export function ServiceFeaturesCarousel({
  features,
  detailLabel,
  labels,
  className,
}: ServiceFeaturesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const count = features.length;

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || count <= 1) return;
      const wrapped = ((index % count) + count) % count;
      setIsAnimating(true);
      setActiveIndex(wrapped);
      window.setTimeout(() => setIsAnimating(false), 400);
    },
    [count, isAnimating],
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  return (
    <div className={cn("relative", className)}>
      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4">
        {count > 1 ? (
          <StardustIconButton
            type="button"
            tone="light"
            onClick={goPrev}
            aria-label={labels.prev}
            shellClassName="size-11 shrink-0"
            className={navButtonClassName}
          >
            <LuChevronLeft className="size-5" aria-hidden />
          </StardustIconButton>
        ) : (
          <span aria-hidden className="size-11 shrink-0" />
        )}

        <div
          className="flex w-full flex-wrap items-center justify-center gap-1.5"
          role="tablist"
          aria-label={detailLabel}
        >
          {features.map((feature, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={feature.title}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  if (!isActive) goTo(index);
                }}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-left transition-all duration-300",
                  isActive
                    ? "border-brand-accent bg-brand-accent text-white shadow-[0_6px_20px_rgb(58_107_82/0.2)]"
                    : "border-border/70 bg-white text-muted-foreground hover:border-brand-accent/35 hover:text-[#0A0A0F]",
                )}
              >
                <span
                  className={cn(
                    "font-(family-name:--font-heading) text-[0.6875rem] font-bold tabular-nums",
                    isActive
                      ? "text-emerald-100/80"
                      : "text-muted-foreground/45",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-(family-name:--font-heading) text-[0.8125rem] font-semibold whitespace-nowrap">
                  {feature.title}
                </span>
              </button>
            );
          })}
        </div>

        {count > 1 ? (
          <StardustIconButton
            type="button"
            tone="light"
            onClick={goNext}
            aria-label={labels.next}
            shellClassName="size-11 shrink-0"
            className={navButtonClassName}
          >
            <LuChevronRight className="size-5" aria-hidden />
          </StardustIconButton>
        ) : (
          <span aria-hidden className="size-11 shrink-0" />
        )}
      </div>

      <div className="relative mt-8 min-h-74">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={cn(
              "w-full transition-all duration-300 ease-out motion-reduce:transition-none",
              index === activeIndex
                ? "relative translate-y-0 opacity-100"
                : "pointer-events-none absolute inset-0 translate-y-2 opacity-0",
            )}
            aria-hidden={index !== activeIndex}
          >
            <FeatureShowcase
              title={feature.title}
              description={feature.description}
              index={index}
              total={count}
              detailLabel={detailLabel}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

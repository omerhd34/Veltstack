"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { BorderTrace } from "@/components/ui/BorderTrace";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";
import { cn } from "@/lib/utils";
import {
  LuChevronsDown,
  LuChevronLeft,
  LuChevronRight,
  LuCompass,
  LuFileText,
  LuGlobe,
  LuHeadset,
  LuLayers,
  LuMessageCircle,
  LuRocket,
  LuSend,
  LuShieldCheck,
  LuTrendingUp,
} from "react-icons/lu";

const approachIcons = [
  LuSend,
  LuCompass,
  LuFileText,
  LuRocket,
  LuLayers,
  LuShieldCheck,
  LuGlobe,
  LuTrendingUp,
  LuHeadset,
] as const;

const panelHeightClass = "lg:h-[calc(3.25rem*6+0.25rem*5+1.25rem+3rem)]";

export interface ApproachTimelineStep {
  step: string;
  title: string;
  desc: string;
  timing: string;
}

interface ApproachScrollTimelineProps {
  steps: ApproachTimelineStep[];
  contactCta: string;
  scrollMoreLabel: string;
  className?: string;
}

export function ApproachScrollTimeline({
  steps,
  contactCta,
  scrollMoreLabel,
  className,
}: ApproachScrollTimelineProps) {
  const baseId = useId();
  const listRef = useRef<HTMLOListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const active = steps[activeIndex] ?? steps[0];
  const ActiveIcon = approachIcons[activeIndex] ?? LuCompass;
  const year = active?.step.padStart(2, "0") ?? "01";

  const updateScrollHint = useCallback(() => {
    const list = listRef.current;
    if (!list) return;

    const remaining = list.scrollHeight - list.scrollTop - list.clientHeight;
    setCanScrollDown(remaining > 8);
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    updateScrollHint();
    list.addEventListener("scroll", updateScrollHint, { passive: true });
    window.addEventListener("resize", updateScrollHint);

    const observer = new ResizeObserver(updateScrollHint);
    observer.observe(list);

    return () => {
      list.removeEventListener("scroll", updateScrollHint);
      window.removeEventListener("resize", updateScrollHint);
      observer.disconnect();
    };
  }, [steps.length, updateScrollHint]);

  const goTo = useCallback(
    (index: number) => {
      const next = Math.max(0, Math.min(steps.length - 1, index));
      setActiveIndex(next);

      const list = listRef.current;
      const item = list?.querySelectorAll<HTMLElement>("li")[next];
      item?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    },
    [steps.length],
  );

  const scrollListDown = useCallback(() => {
    const list = listRef.current;
    if (!list) return;

    list.scrollBy({
      top: Math.max(list.clientHeight * 0.55, 120),
      behavior: "smooth",
    });
  }, []);

  if (!active) return null;

  return (
    <div
      className={cn(
        "grid items-stretch gap-6 lg:grid-cols-[minmax(16rem,20rem)_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[minmax(17rem,22rem)_minmax(0,1fr)]",
        className,
      )}
    >
      <nav
        aria-label="Süreç adımları"
        className={cn(
          "relative flex flex-col overflow-hidden rounded-2xl border border-brand-accent/15 bg-white/55 p-2 shadow-[0_8px_28px_rgb(58,107,82,0.06)] backdrop-blur-sm sm:p-2.5",
          panelHeightClass,
        )}
      >
        <ol
          ref={listRef}
          role="tablist"
          aria-orientation="vertical"
          className="flex min-h-0 max-h-none flex-1 flex-row gap-1 overflow-x-auto overscroll-x-contain pb-0.5 [-ms-overflow-style:none] scrollbar-none lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden lg:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {steps.map((item, index) => {
            const isActive = index === activeIndex;
            const isPast = index < activeIndex;
            const stepNo = item.step.padStart(2, "0");

            return (
              <li
                key={item.step}
                className="shrink-0 lg:w-full"
                role="presentation"
              >
                <button
                  type="button"
                  id={`${baseId}-tab-${index}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => goTo(index)}
                  className={cn(
                    "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-300 ease-out",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent",
                    isActive
                      ? "bg-brand-accent text-white shadow-[0_8px_20px_rgb(58,107,82,0.28)]"
                      : "text-[#0A0A0F]/80 hover:bg-brand-accent/8 hover:text-[#0A0A0F]",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold transition-colors duration-300",
                      isActive
                        ? "bg-white/20 text-white"
                        : isPast
                          ? "bg-brand-accent/15 text-brand-accent"
                          : "bg-brand-accent/8 text-brand-accent/70",
                    )}
                  >
                    {stepNo}
                  </span>
                  <span className="hidden min-w-0 flex-1 truncate text-sm font-semibold tracking-tight lg:block">
                    {item.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        {canScrollDown ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden lg:block">
            <div
              aria-hidden
              className="h-20 bg-linear-to-t from-[#F7FBF8] from-35% via-[#F7FBF8]/85 to-transparent"
            />
            <button
              type="button"
              onClick={scrollListDown}
              aria-label={scrollMoreLabel}
              className={cn(
                "pointer-events-auto absolute bottom-2.5 left-1/2 z-10 flex size-10 -translate-x-1/2 items-center justify-center",
                "rounded-full bg-brand-accent text-white",
                "shadow-[0_10px_24px_rgb(58,107,82,0.32)] ring-[3px] ring-white",
                "transition-transform duration-300 ease-out hover:scale-105 active:scale-95",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent",
              )}
            >
              <span className="relative flex h-5 w-5 items-center justify-center">
                <LuChevronsDown
                  aria-hidden
                  strokeWidth={2.5}
                  className="size-5 animate-bounce motion-reduce:animate-none"
                />
              </span>
            </button>
          </div>
        ) : null}
      </nav>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${activeIndex}`}
        className={cn(
          "border-trace-hover-fallback relative flex min-h-72 flex-col overflow-hidden rounded-2xl border-[3px] border-solid border-brand-accent/35 bg-white p-6 shadow-[0_2px_8px_rgb(0,0,0,0.04),0_16px_40px_rgb(58,107,82,0.08)] sm:min-h-80 sm:p-8 md:p-10",
          panelHeightClass,
        )}
      >
        <BorderTrace durationSec={1.4} />

        <span
          aria-hidden
          className="pointer-events-none absolute top-4 right-8 font-mono text-[7rem] font-bold leading-none tracking-tighter text-brand-accent/[0.07] sm:top-6 sm:right-10 sm:text-[8.5rem] md:top-8 md:right-12"
        >
          {year}
        </span>

        <div className="relative flex min-h-0 flex-1 flex-col">
          <div className="flex shrink-0 items-start gap-4 pr-16 sm:gap-5">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent ring-1 ring-brand-accent/20 sm:size-14">
              <ActiveIcon
                className="size-5 sm:size-6"
                strokeWidth={1.75}
                aria-hidden
              />
            </span>
            <div className="min-w-0 pt-0.5">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand-accent/75">
                {year} / {String(steps.length).padStart(2, "0")}
              </p>
              <h3 className="mt-1.5 font-(family-name:--font-heading) text-2xl font-bold leading-snug tracking-tight text-[#0A0A0F] sm:text-3xl">
                {active.title}
              </h3>
            </div>
          </div>

          <div className="relative mt-5 min-h-0 flex-1 overflow-y-auto sm:mt-6">
            <p className="max-w-2xl text-base leading-[1.75] text-foreground/65 sm:text-lg sm:leading-[1.8]">
              {active.desc}
            </p>
          </div>

          <div className="relative mt-5 flex shrink-0 items-center justify-between gap-4 sm:mt-6">
            <span className="inline-flex rounded-full border border-brand-accent/15 bg-brand-accent/6 px-3.5 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-brand-accent/85">
              {active.timing}
            </span>

            <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
              <PrimaryCtaLink
                href="/iletisim"
                size="sm"
                variant="accent"
                showArrow={false}
                leadingIcon={<LuMessageCircle className="size-4" aria-hidden />}
              >
                {contactCta}
              </PrimaryCtaLink>
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label={steps[activeIndex - 1]?.title ?? "Previous"}
                className={cn(
                  "flex size-10 items-center justify-center rounded-full border border-brand-accent/20 bg-white text-brand-accent transition-all duration-300",
                  "hover:border-brand-accent hover:bg-brand-accent hover:text-white",
                  "disabled:pointer-events-none disabled:opacity-35",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent",
                )}
              >
                <LuChevronLeft className="size-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                disabled={activeIndex === steps.length - 1}
                aria-label={steps[activeIndex + 1]?.title ?? "Next"}
                className={cn(
                  "flex size-10 items-center justify-center rounded-full border border-brand-accent/20 bg-white text-brand-accent transition-all duration-300",
                  "hover:border-brand-accent hover:bg-brand-accent hover:text-white",
                  "disabled:pointer-events-none disabled:opacity-35",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent",
                )}
              >
                <LuChevronRight className="size-5" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

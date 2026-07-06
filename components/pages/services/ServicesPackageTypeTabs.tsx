"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";
import { ServicesTabScrollFade } from "./ServicesTabScrollFade";

interface PackageTypeTab {
  id: string;
  label: string;
  icon: IconType;
}

interface ServicesPackageTypeTabsProps {
  tabs: PackageTypeTab[];
  active: string;
  onChange: (id: string) => void;
  className?: string;
  embedded?: boolean;
}

interface IndicatorStyle {
  left: number;
  width: number;
}

export function ServicesPackageTypeTabs({
  tabs,
  active,
  onChange,
  className,
  embedded = false,
}: ServicesPackageTypeTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [indicator, setIndicator] = useState<IndicatorStyle>({
    left: 0,
    width: 0,
  });

  const updateIndicator = useCallback(() => {
    const container = containerRef.current;
    const activeTab = tabRefs.current.get(active);

    if (!container || !activeTab) return;

    const containerRect = container.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();

    setIndicator({
      left: tabRect.left - containerRect.left + container.scrollLeft,
      width: tabRect.width,
    });
  }, [active]);

  useLayoutEffect(() => {
    updateIndicator();

    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(updateIndicator);
    observer.observe(container);
    tabs.forEach((tab) => {
      const el = tabRefs.current.get(tab.id);
      if (el) observer.observe(el);
    });

    container.addEventListener("scroll", updateIndicator, { passive: true });
    window.addEventListener("resize", updateIndicator);

    return () => {
      observer.disconnect();
      container.removeEventListener("scroll", updateIndicator);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [tabs, updateIndicator]);

  const tabList = (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-x-auto scroll-smooth p-1.5 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden",
        embedded
          ? "flex w-full justify-center bg-emerald-950/25 px-2 py-2 sm:px-3"
          : "rounded-2xl border border-emerald-900/40 bg-[#071510]/60 backdrop-blur-sm",
      )}
      role="tablist"
      aria-label="Package type"
    >
      <span
        aria-hidden
        className={cn(
          "absolute top-1.5 bottom-1.5 transition-[left,width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          embedded
            ? "rounded-full bg-white/10 ring-1 ring-white/10 shadow-[inset_0_1px_0_rgb(255_255_255/0.08)]"
            : "rounded-xl bg-brand-accent/15 ring-1 ring-brand-accent/30",
        )}
        style={{
          left: indicator.left,
          width: indicator.width,
        }}
      />

      <div className="relative mx-auto flex min-w-max items-center gap-0.5 sm:gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.id;

          return (
            <button
              key={tab.id}
              ref={(el) => {
                if (el) tabRefs.current.set(tab.id, el);
                else tabRefs.current.delete(tab.id);
              }}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(tab.id)}
              className={cn(
                "group relative z-10 flex shrink-0 items-center gap-1.5 px-3.5 py-2 text-xs font-medium tracking-tight transition-[color,transform] duration-300 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm",
                embedded ? "rounded-full" : "rounded-xl",
                isActive
                  ? embedded
                    ? "text-emerald-50"
                    : "text-emerald-50"
                  : "text-emerald-200/45 hover:text-emerald-100/75 active:scale-[0.98]",
              )}
            >
              <Icon
                className={cn(
                  "size-3.5 shrink-0 transition-colors duration-300 sm:size-4",
                  isActive
                    ? embedded
                      ? "text-brand-accent"
                      : "text-brand-accent"
                    : "text-emerald-400/35 group-hover:text-emerald-300/55",
                )}
                strokeWidth={isActive ? 2.25 : 1.75}
                aria-hidden
              />
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  if (embedded) {
    return (
      <ServicesTabScrollFade
        className={cn("w-full", className)}
        fadeFrom="#050f0c"
      >
        {tabList}
      </ServicesTabScrollFade>
    );
  }

  return <div className={cn("relative", className)}>{tabList}</div>;
}

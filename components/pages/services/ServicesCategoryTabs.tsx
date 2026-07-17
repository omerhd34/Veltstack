"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { categoryTabIcons, type PackageCategory } from "./packages-config";
import { ServicesTabScrollFade } from "./ServicesTabScrollFade";

interface TabItem {
  id: PackageCategory;
  label: string;
}

interface ServicesCategoryTabsProps {
  tabs: TabItem[];
  active: PackageCategory;
  onChange: (category: PackageCategory) => void;
  className?: string;
  embedded?: boolean;
}

interface IndicatorStyle {
  left: number;
  width: number;
}

export function ServicesCategoryTabs({
  tabs,
  active,
  onChange,
  className,
  embedded = false,
}: ServicesCategoryTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<PackageCategory, HTMLButtonElement>>(new Map());
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
        "relative max-w-full overflow-x-auto overscroll-x-contain scroll-smooth p-1.5 [-ms-overflow-style:none] scrollbar-none lg:overflow-visible [&::-webkit-scrollbar]:hidden",
        embedded && "px-2 py-2 sm:px-3",
        !embedded &&
          "rounded-[calc(1.75rem-1px)] bg-[#071510]/95 backdrop-blur-md",
      )}
      role="tablist"
    >
      {!embedded ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[calc(1.75rem-1px)] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgb(58_107_82/0.12),transparent)]"
        />
      ) : null}

      <span
        aria-hidden
        className="absolute top-1.5 bottom-1.5 rounded-full bg-linear-to-r from-brand-accent to-emerald-500 shadow-[0_4px_24px_rgb(58_107_82/0.45),inset_0_1px_0_rgb(255_255_255/0.12)] transition-[left,width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          left: indicator.left,
          width: indicator.width,
        }}
      />

      <div
        className={cn(
          "relative flex min-w-max items-center gap-0.5 sm:gap-1",
          embedded && "mx-auto justify-start lg:justify-center",
        )}
      >
        {tabs.map((tab) => {
          const Icon = categoryTabIcons[tab.id];
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
                "group relative z-10 flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2.5 text-xs font-semibold tracking-tight transition-[color,transform] duration-300 sm:px-4 sm:py-2.5 sm:text-sm",
                isActive
                  ? "text-white"
                  : "text-emerald-200/50 hover:text-emerald-100/90 active:scale-[0.98]",
              )}
            >
              <Icon
                className={cn(
                  "size-3.5 shrink-0 transition-all duration-300 sm:size-4",
                  isActive
                    ? "text-white drop-shadow-[0_0_8px_rgb(255_255_255/0.25)]"
                    : "text-emerald-400/40 group-hover:text-emerald-300/65",
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
      <ServicesTabScrollFade className={className}>
        {tabList}
      </ServicesTabScrollFade>
    );
  }

  return (
    <div
      className={cn(
        "relative rounded-[1.75rem] p-px shadow-[0_8px_40px_rgb(0_0_0/0.35)]",
        "bg-linear-to-r from-emerald-500/25 via-brand-accent/20 to-emerald-600/25",
        className,
      )}
    >
      <ServicesTabScrollFade>{tabList}</ServicesTabScrollFade>
    </div>
  );
}

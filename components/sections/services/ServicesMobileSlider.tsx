"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { StardustIconButton } from "@/components/ui/StardustIconButton";
import { ServiceCard } from "./ServiceCard";
import type { ServiceSlideItem } from "./ServicesCarousel";

interface ServicesMobileSliderProps {
  services: ServiceSlideItem[];
  className?: string;
}

function formatSlideNumber(value: number) {
  return String(value).padStart(2, "0");
}

function getPagerWindow(active: number, total: number, size = 5) {
  const half = Math.floor(size / 2);
  return Array.from({ length: Math.min(size, total) }, (_, offset) => {
    if (total <= size) return { slideIndex: offset, offset };
    const slideIndex = (active - half + offset + total) % total;
    return { slideIndex, offset };
  });
}

export function ServicesMobileSlider({
  services,
  className,
}: ServicesMobileSliderProps) {
  const t = useTranslations("home");
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = services.length;
  const pagerWindow = getPagerWindow(active, count);

  const syncActiveFromScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el || services.length === 0) return;
    const slideWidth = el.clientWidth;
    if (slideWidth <= 0) return;
    const next = Math.round(el.scrollLeft / slideWidth);
    setActive(Math.min(Math.max(next, 0), services.length - 1));
  }, [services.length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    syncActiveFromScroll();
    el.addEventListener("scroll", syncActiveFromScroll, { passive: true });
    window.addEventListener("resize", syncActiveFromScroll);
    return () => {
      el.removeEventListener("scroll", syncActiveFromScroll);
      window.removeEventListener("resize", syncActiveFromScroll);
    };
  }, [syncActiveFromScroll]);

  const goTo = useCallback(
    (index: number) => {
      const el = scrollerRef.current;
      if (!el || services.length === 0) return;
      const next =
        ((index % services.length) + services.length) % services.length;
      el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
      setActive(next);
    },
    [services.length],
  );

  return (
    <div className={cn("relative w-full", className)}>
      <div
        ref={scrollerRef}
        className="flex w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {services.map((service) => (
          <div
            key={service.slug}
            className="w-full shrink-0 snap-center px-0.5"
          >
            <ServiceCard
              variant="slide"
              numbered
              isActive
              index={service.index}
              slug={service.slug}
              href={service.href}
              title={service.title}
              description={service.description}
              tag={service.tag}
            />
          </div>
        ))}
      </div>

      {count > 1 ? (
        <div className="mt-5 flex items-center justify-center gap-3">
          <StardustIconButton
            type="button"
            tone="glass"
            className="shadow-lg"
            shellClassName="hidden size-11 sm:inline-flex"
            onClick={() => goTo(active - 1)}
            aria-label={t("servicesSliderPrev")}
          >
            <LuChevronLeft className="size-5" aria-hidden />
          </StardustIconButton>

          <div
            className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2 py-1.5 shadow-[0_4px_20px_rgb(0,0,0,0.12)] backdrop-blur-md"
            aria-live="polite"
          >
            {pagerWindow.map(({ slideIndex, offset }) => {
              const isActive = slideIndex === active;
              const distance = Math.abs(
                offset - Math.floor(pagerWindow.length / 2),
              );

              return (
                <button
                  key={`pager-${offset}-${slideIndex}`}
                  type="button"
                  onClick={() => goTo(slideIndex)}
                  aria-label={`${t("servicesSliderDot")} ${slideIndex + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "flex items-center justify-center rounded-full font-(family-name:--font-heading) transition-all duration-500 ease-out motion-reduce:transition-none",
                    isActive
                      ? "h-8 min-w-10 bg-brand-accent px-2.5 text-xs font-semibold tracking-[0.12em] text-white shadow-[0_6px_16px_rgb(58,107,82,0.28)]"
                      : cn(
                          "size-2 bg-white/25 hover:bg-white/45",
                          distance === 1 && "size-2.5",
                          distance === 2 && "size-1.5 opacity-70",
                        ),
                  )}
                >
                  {isActive ? (
                    formatSlideNumber(slideIndex + 1)
                  ) : (
                    <span className="sr-only">
                      {formatSlideNumber(slideIndex + 1)}
                    </span>
                  )}
                </button>
              );
            })}
            <span aria-hidden className="mx-1 h-3 w-px bg-white/25" />
            <span className="pr-1.5 font-(family-name:--font-heading) text-[11px] tracking-[0.14em] text-white/55">
              {formatSlideNumber(count)}
            </span>
          </div>

          <StardustIconButton
            type="button"
            tone="glass"
            className="shadow-lg"
            shellClassName="hidden size-11 sm:inline-flex"
            onClick={() => goTo(active + 1)}
            aria-label={t("servicesSliderNext")}
          >
            <LuChevronRight className="size-5" aria-hidden />
          </StardustIconButton>
        </div>
      ) : null}
    </div>
  );
}

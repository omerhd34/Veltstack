"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { CarouselPagination } from "@/components/ui/CarouselPagination";
import { StardustIconButton } from "@/components/ui/StardustIconButton";
import { ServiceCard } from "./ServiceCard";
import type { ServiceSlideItem } from "./ServicesCarousel";

interface ServicesMobileSliderProps {
  services: ServiceSlideItem[];
  className?: string;
}

export function ServicesMobileSlider({
  services,
  className,
}: ServicesMobileSliderProps) {
  const t = useTranslations("home");
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = services.length;

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
            shellClassName="hidden size-11 lg:inline-flex"
            onClick={() => goTo(active - 1)}
            aria-label={t("servicesSliderPrev")}
          >
            <LuChevronLeft className="size-5" aria-hidden />
          </StardustIconButton>

          <CarouselPagination
            activeIndex={active}
            total={count}
            onSelect={goTo}
            getItemLabel={(index) =>
              `${t("servicesSliderDot")} ${index + 1}`
            }
            theme="dark"
          />

          <StardustIconButton
            type="button"
            tone="glass"
            className="shadow-lg"
            shellClassName="hidden size-11 lg:inline-flex"
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

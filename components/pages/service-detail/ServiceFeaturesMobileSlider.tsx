"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { CarouselPagination } from "@/components/ui/CarouselPagination";
import { StardustIconButton } from "@/components/ui/StardustIconButton";
import { cn } from "@/lib/utils";
import { ServiceFeatureCard } from "./ServiceFeatureCard";

interface ServiceFeaturesMobileSliderProps {
  features: { title: string; description: string }[];
  detailLabel: string;
  labels: {
    prev: string;
    next: string;
  };
  className?: string;
}

const navButtonClassName = cn(
  "shadow-[0_4px_16px_rgb(0,0,0,0.06)]",
  "hover:shadow-[0_8px_24px_rgb(58,107,82,0.12)]",
);

export function ServiceFeaturesMobileSlider({
  features,
  detailLabel,
  labels,
  className,
}: ServiceFeaturesMobileSliderProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const count = features.length;

  const syncActiveFromScroll = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller || count === 0) return;

    const slideWidth = scroller.clientWidth;
    if (slideWidth <= 0) return;

    const nextIndex = Math.min(
      Math.max(Math.round(scroller.scrollLeft / slideWidth), 0),
      count - 1,
    );

    if (nextIndex !== activeIndex) {
      setExpandedIndex(null);
      setActiveIndex(nextIndex);
    }
  }, [activeIndex, count]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    syncActiveFromScroll();
    scroller.addEventListener("scroll", syncActiveFromScroll, {
      passive: true,
    });
    window.addEventListener("resize", syncActiveFromScroll);

    return () => {
      scroller.removeEventListener("scroll", syncActiveFromScroll);
      window.removeEventListener("resize", syncActiveFromScroll);
    };
  }, [syncActiveFromScroll]);

  const goTo = useCallback(
    (index: number) => {
      const scroller = scrollerRef.current;
      if (!scroller || count === 0) return;

      const nextIndex = ((index % count) + count) % count;
      scroller.scrollTo({
        left: nextIndex * scroller.clientWidth,
        behavior: "smooth",
      });
      setExpandedIndex(null);
      setActiveIndex(nextIndex);
    },
    [count],
  );

  return (
    <div className={cn("relative w-full min-w-0", className)}>
      <div
        ref={scrollerRef}
        className="flex w-full min-w-0 snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="w-full min-w-0 shrink-0 snap-start px-0.5"
          >
            <ServiceFeatureCard
              className="h-full md:hidden"
              title={feature.title}
              description={feature.description}
              index={index}
              detailLabel={detailLabel}
              showFullDescription
              collapsible
              expanded={expandedIndex === index}
              onToggle={() =>
                setExpandedIndex((current) =>
                  current === index ? null : index,
                )
              }
            />
            <ServiceFeatureCard
              className="hidden h-full md:block"
              title={feature.title}
              description={feature.description}
              index={index}
              detailLabel={detailLabel}
              showFullDescription
              fullWidthDescription
              hideArrow
            />
          </div>
        ))}
      </div>

      {count > 1 && (
        <div className="mt-6 flex items-center justify-center gap-3">
          <StardustIconButton
            type="button"
            tone="light"
            onClick={() => goTo(activeIndex - 1)}
            aria-label={labels.prev}
            shellClassName="hidden size-11 sm:inline-flex"
            className={navButtonClassName}
          >
            <LuChevronLeft className="size-5" aria-hidden />
          </StardustIconButton>

          <CarouselPagination
            activeIndex={activeIndex}
            total={count}
            onSelect={goTo}
            getItemLabel={(index) =>
              `${detailLabel} ${String(index + 1).padStart(2, "0")}`
            }
          />

          <StardustIconButton
            type="button"
            tone="light"
            onClick={() => goTo(activeIndex + 1)}
            aria-label={labels.next}
            shellClassName="hidden size-11 sm:inline-flex"
            className={navButtonClassName}
          >
            <LuChevronRight className="size-5" aria-hidden />
          </StardustIconButton>
        </div>
      )}
    </div>
  );
}

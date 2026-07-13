"use client";

import { useCallback, useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { StardustIconButton } from "@/components/ui/StardustIconButton";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "./TestimonialCard";

const navButtonClassName = cn(
  "shadow-[0_4px_16px_rgb(0,0,0,0.06)]",
  "hover:shadow-[0_8px_24px_rgb(58,107,82,0.12)]",
);

export interface TestimonialItem {
  clientName: string;
  companyName?: string;
  feedback: string;
  rating: number;
}

interface TestimonialCarouselLabels {
  prev: string;
  next: string;
  slide: string;
}

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
  labels: TestimonialCarouselLabels;
  className?: string;
}

function formatSlideNumber(value: number) {
  return String(value).padStart(2, "0");
}

function getPagerWindow(active: number, total: number, size = 5) {
  const half = Math.floor(size / 2);
  return Array.from({ length: size }, (_, offset) => {
    const slideIndex = (active - half + offset + total) % total;
    return { slideIndex, offset };
  });
}

export function TestimonialCarousel({
  testimonials,
  labels,
  className,
}: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const count = testimonials.length;
  const pagerWindow = getPagerWindow(index, count);

  const goTo = useCallback(
    (nextIndex: number) => {
      if (isAnimating || count <= 1) return;
      setIsAnimating(true);
      setIndex((nextIndex + count) % count);
      window.setTimeout(() => setIsAnimating(false), 600);
    },
    [count, isAnimating],
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (count <= 1) return;
    const timer = setInterval(() => {
      setIsAnimating(true);
      setIndex((current) => (current + 1) % count);
      window.setTimeout(() => setIsAnimating(false), 600);
    }, 15000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-6 select-none font-(family-name:--font-heading) text-7xl font-bold leading-none text-brand-accent/6 md:-right-4 md:-top-8 md:text-8xl"
      >
        {formatSlideNumber(index + 1)}
      </div>

      <div className="relative min-h-[320px] md:min-h-[340px]">
        {testimonials.map((testimonial, slideIndex) => (
          <div
            key={`${testimonial.clientName}-${slideIndex}`}
            className={cn(
              "w-full transition-all duration-500 ease-out motion-reduce:transition-none",
              slideIndex === index
                ? "relative translate-y-0 opacity-100"
                : "pointer-events-none absolute inset-0 translate-y-3 opacity-0",
            )}
            aria-hidden={slideIndex !== index}
          >
            <TestimonialCard {...testimonial} active={slideIndex === index} />
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <StardustIconButton
            type="button"
            tone="light"
            onClick={goPrev}
            aria-label={labels.prev}
            shellClassName="absolute top-1/2 left-0 z-10 size-11 -translate-y-1/2 md:-left-6"
            className={navButtonClassName}
          >
            <LuChevronLeft className="size-5" aria-hidden />
          </StardustIconButton>
          <StardustIconButton
            type="button"
            tone="light"
            onClick={goNext}
            aria-label={labels.next}
            shellClassName="absolute top-1/2 right-0 z-10 size-11 -translate-y-1/2 md:-right-6"
            className={navButtonClassName}
          >
            <LuChevronRight className="size-5" aria-hidden />
          </StardustIconButton>

          <div className="mt-10 flex items-center justify-center">
            <div className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-white/70 px-2 py-1.5 shadow-[0_4px_20px_rgb(0,0,0,0.04)] backdrop-blur-md">
              {pagerWindow.map(({ slideIndex, offset }) => {
                const isActive = slideIndex === index;
                const distance = Math.abs(offset - 2);

                return (
                  <button
                    key={`pager-${offset}-${slideIndex}`}
                    type="button"
                    onClick={() => goTo(slideIndex)}
                    aria-label={labels.slide.replace(
                      "{index}",
                      String(slideIndex + 1),
                    )}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "flex items-center justify-center rounded-full font-(family-name:--font-heading) transition-all duration-500 ease-out motion-reduce:transition-none",
                      isActive
                        ? "h-8 min-w-10 bg-brand-accent px-2.5 text-xs font-semibold tracking-[0.12em] text-white shadow-[0_6px_16px_rgb(58,107,82,0.28)]"
                        : cn(
                            "size-2 bg-brand-accent/20 hover:bg-brand-accent/40",
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
              <span aria-hidden className="mx-1 h-3 w-px bg-border/80" />
              <span className="pr-1.5 font-(family-name:--font-heading) text-[11px] tracking-[0.14em] text-muted-foreground">
                {formatSlideNumber(count)}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

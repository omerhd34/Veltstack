"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { CarouselPagination } from "@/components/ui/CarouselPagination";
import { StardustIconButton } from "@/components/ui/StardustIconButton";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "./TestimonialCard";

const navButtonClassName = cn(
  "shadow-[0_4px_16px_rgb(0,0,0,0.06)]",
  "hover:shadow-[0_8px_24px_rgb(58,107,82,0.12)]",
);

const SWIPE_THRESHOLD = 48;

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

export function TestimonialCarousel({
  testimonials,
  labels,
  className,
}: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const count = testimonials.length;
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragDelta = useRef(0);
  const dragIntent = useRef(false);

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
    const carousel = carouselRef.current;
    if (!carousel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 },
    );

    observer.observe(carousel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (count <= 1 || !isInView) return;
    const timer = setInterval(() => {
      setIsAnimating(true);
      setIndex((current) => (current + 1) % count);
      window.setTimeout(() => setIsAnimating(false), 600);
    }, 15000);
    return () => clearInterval(timer);
  }, [count, isInView]);

  const resetDrag = useCallback(() => {
    dragStartX.current = null;
    dragDelta.current = 0;
    dragIntent.current = false;
    setIsDragging(false);
  }, []);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (count <= 1 || e.button !== 0) return;
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
    dragIntent.current = false;
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartX.current == null) return;
    dragDelta.current = e.clientX - dragStartX.current;
    if (!dragIntent.current && Math.abs(dragDelta.current) > 10) {
      dragIntent.current = true;
      setIsDragging(true);
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartX.current == null) return;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    const delta = dragDelta.current;
    const swiped = dragIntent.current && Math.abs(delta) >= SWIPE_THRESHOLD;
    resetDrag();
    if (!swiped) return;
    if (delta < 0) goNext();
    else goPrev();
  };

  const onPointerCancel = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartX.current == null) return;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    resetDrag();
  };

  return (
    <div ref={carouselRef} className={cn("relative", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-6 select-none font-(family-name:--font-heading) text-7xl font-bold leading-none text-brand-accent/6 md:-right-4 md:-top-8 md:text-8xl"
      >
        {formatSlideNumber(index + 1)}
      </div>

      <div
        className={cn(
          "relative min-h-80 touch-pan-y select-none md:min-h-85",
          count > 1 && (isDragging ? "cursor-grabbing" : "cursor-grab"),
        )}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        {testimonials.map((testimonial, slideIndex) => (
          <div
            key={`${testimonial.clientName}-${slideIndex}`}
            className={cn(
              "w-full transition-all duration-300 ease-out motion-reduce:transition-none",
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
        <div className="mt-8 flex items-center justify-center gap-3 sm:mt-10">
          <StardustIconButton
            type="button"
            tone="light"
            onClick={goPrev}
            aria-label={labels.prev}
            shellClassName="hidden size-11 lg:inline-flex"
            className={navButtonClassName}
          >
            <LuChevronLeft className="size-5" aria-hidden />
          </StardustIconButton>

          <CarouselPagination
            activeIndex={index}
            total={count}
            onSelect={goTo}
            getItemLabel={(slideIndex) =>
              labels.slide.replace("{index}", String(slideIndex + 1))
            }
          />

          <StardustIconButton
            type="button"
            tone="light"
            onClick={goNext}
            aria-label={labels.next}
            shellClassName="hidden size-11 lg:inline-flex"
            className={navButtonClassName}
          >
            <LuChevronRight className="size-5" aria-hidden />
          </StardustIconButton>
        </div>
      )}
    </div>
  );
}

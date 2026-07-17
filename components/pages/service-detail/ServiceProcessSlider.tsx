"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { ProcessStep } from "@/components/sections/process/ProcessStep";
import { processStepIcons } from "@/components/sections/process/process-step-icons";
import { CarouselPagination } from "@/components/ui/CarouselPagination";
import { StardustIconButton } from "@/components/ui/StardustIconButton";
import { cn } from "@/lib/utils";

interface ServiceProcessSliderProps {
  steps: { title: string; description: string }[];
  labels: {
    prev: string;
    next: string;
    step: string;
  };
  className?: string;
}

export function ServiceProcessSlider({
  steps,
  labels,
  className,
}: ServiceProcessSliderProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = steps.length;

  const syncActiveFromScroll = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller || count === 0) return;

    const slides = Array.from(scroller.children) as HTMLElement[];
    const nextIndex = slides.reduce((closestIndex, slide, index) => {
      const currentDistance = Math.abs(
        slides[closestIndex].offsetLeft - scroller.scrollLeft,
      );
      const nextDistance = Math.abs(slide.offsetLeft - scroller.scrollLeft);
      return nextDistance < currentDistance ? index : closestIndex;
    }, 0);

    setActiveIndex(nextIndex);
  }, [count]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

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
      const slide = scroller.children[nextIndex] as HTMLElement | undefined;
      if (!slide) return;

      scroller.scrollTo({
        left: slide.offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(nextIndex);
    },
    [count],
  );

  return (
    <div className={cn("relative min-w-0", className)}>
      <div
        ref={scrollerRef}
        className="flex w-full min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-1 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {steps.map((step, index) => {
          const Icon = processStepIcons[index];
          if (!Icon) return null;

          return (
            <div
              key={step.title}
              className="w-full shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
            >
              <ProcessStep
                step={index + 1}
                title={step.title}
                description={step.description}
                icon={Icon}
                variant="dark"
              />
            </div>
          );
        })}
      </div>

      {count > 1 && (
        <div className="mt-7 flex items-center justify-center gap-3">
          <StardustIconButton
            type="button"
            tone="glass"
            onClick={() => goTo(activeIndex - 1)}
            aria-label={labels.prev}
            shellClassName="hidden size-11 sm:inline-flex"
          >
            <LuChevronLeft className="size-5" aria-hidden />
          </StardustIconButton>

          <CarouselPagination
            activeIndex={activeIndex}
            total={count}
            onSelect={goTo}
            getItemLabel={(index) => `${labels.step} ${index + 1}`}
            theme="dark"
          />

          <StardustIconButton
            type="button"
            tone="glass"
            onClick={() => goTo(activeIndex + 1)}
            aria-label={labels.next}
            shellClassName="hidden size-11 sm:inline-flex"
          >
            <LuChevronRight className="size-5" aria-hidden />
          </StardustIconButton>
        </div>
      )}
    </div>
  );
}

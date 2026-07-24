"use client";

import dynamic from "next/dynamic";
import { DeferredMount } from "@/components/ui/DeferredMount";
import type { TestimonialItem } from "./TestimonialCarousel";

const TestimonialCarousel = dynamic(
  () =>
    import("./TestimonialCarousel").then((mod) => ({
      default: mod.TestimonialCarousel,
    })),
  { ssr: false },
);

interface TestimonialCarouselLazyProps {
  testimonials: TestimonialItem[];
  labels: {
    prev: string;
    next: string;
    slide: string;
  };
  className?: string;
}

export function TestimonialCarouselLazy({
  testimonials,
  labels,
  className,
}: TestimonialCarouselLazyProps) {
  return (
    <DeferredMount
      className={className}
      fallback={
        <div
          className="min-h-80 w-full rounded-2xl bg-background/50"
          aria-hidden
        />
      }
    >
      <TestimonialCarousel testimonials={testimonials} labels={labels} />
    </DeferredMount>
  );
}

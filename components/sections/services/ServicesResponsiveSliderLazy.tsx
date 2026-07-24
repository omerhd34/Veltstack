"use client";

import dynamic from "next/dynamic";
import { DeferredMount } from "@/components/ui/DeferredMount";
import type { ServiceSlideItem } from "./ServicesCarousel";

const ServicesResponsiveSlider = dynamic(
  () =>
    import("./ServicesResponsiveSlider").then((mod) => ({
      default: mod.ServicesResponsiveSlider,
    })),
  { ssr: false },
);

interface ServicesResponsiveSliderLazyProps {
  services: ServiceSlideItem[];
  className?: string;
}

export function ServicesResponsiveSliderLazy({
  services,
  className,
}: ServicesResponsiveSliderLazyProps) {
  return (
    <DeferredMount
      className={className}
      fallback={
        <div className="min-h-96 w-full rounded-2xl bg-white/5" aria-hidden />
      }
    >
      <ServicesResponsiveSlider services={services} />
    </DeferredMount>
  );
}

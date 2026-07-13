"use client";

import { ServicesMobileSlider } from "./ServicesMobileSlider";
import { ServicesThreeDCarousel } from "./ServicesThreeDCarousel";
import type { ServiceSlideItem } from "./ServicesCarousel";

interface ServicesResponsiveSliderProps {
  services: ServiceSlideItem[];
  className?: string;
}

export function ServicesResponsiveSlider({
  services,
  className,
}: ServicesResponsiveSliderProps) {
  return (
    <>
      <ServicesMobileSlider
        className={`md:hidden ${className ?? ""}`}
        services={services}
      />
      <ServicesThreeDCarousel
        className={`hidden md:block ${className ?? ""}`}
        services={services}
      />
    </>
  );
}

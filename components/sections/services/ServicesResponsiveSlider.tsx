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
        className={`lg:hidden ${className ?? ""}`}
        services={services}
      />
      <ServicesThreeDCarousel
        className={`hidden lg:block ${className ?? ""}`}
        services={services}
      />
    </>
  );
}

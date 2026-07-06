/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import BeamCircle from "@/components/lightswind/beam-circle";
import { useIsMobile } from "@/components/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { getTechCategoriesForOrbit, type TechCategoryKey } from "./tech-items";
import { buildTechOrbitItems } from "./build-tech-orbit-items";

interface TechBeamCircleProps {
  className?: string;
  selectedOrbitId?: number | null;
  onOrbitSelect?: (orbitId: number | null) => void;
}

const categoryMessageKeys: Record<TechCategoryKey, string> = {
  frontend: "techCategoryFrontend",
  backend: "techCategoryBackend",
  database: "techCategoryDatabase",
  mobile: "techCategoryMobile",
  hosting: "techCategoryHosting",
  seo: "techCategorySeo",
};

export function TechBeamCircle({
  className,
  selectedOrbitId = null,
  onOrbitSelect,
}: TechBeamCircleProps) {
  const t = useTranslations("about");
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [fittedSize, setFittedSize] = useState<number | null>(null);

  const targetCircleSize = isMobile ? 480 : 720;
  const maxBeamCircleOutset = Math.ceil(((isMobile ? 28 : 36) + 8) / 2 + 20);
  const circleSize = fittedSize ?? targetCircleSize;
  const sizeScale = circleSize / targetCircleSize;
  const iconSize = Math.max(20, Math.round((isMobile ? 28 : 36) * sizeScale));
  const centerLogoSize = Math.max(
    20,
    Math.round((isMobile ? 28 : 38) * sizeScale),
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateSize = () => {
      const width = container.clientWidth;
      const nextSize = Math.min(
        targetCircleSize,
        Math.max(320, width - maxBeamCircleOutset * 2),
      );

      setFittedSize((current) => (current === nextSize ? current : nextSize));
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(container);

    return () => observer.disconnect();
  }, [targetCircleSize, maxBeamCircleOutset]);

  const orbits = useMemo(() => {
    const categories = getTechCategoriesForOrbit();
    const baseOrbits = buildTechOrbitItems(iconSize, circleSize);

    return baseOrbits.map((orbit, index) => ({
      ...orbit,
      label: t(categoryMessageKeys[categories[index]!.key]),
    }));
  }, [circleSize, iconSize, t]);

  if (!mounted) {
    return (
      <div
        ref={containerRef}
        className={cn("w-full", className)}
        style={{ minHeight: targetCircleSize + maxBeamCircleOutset * 2 }}
        aria-hidden
      />
    );
  }

  return (
    <div ref={containerRef} className={cn("w-full", className)}>
      <BeamCircle
        size={circleSize}
        orbits={orbits}
        selectedOrbitId={selectedOrbitId}
        onOrbitSelect={onOrbitSelect}
        centerIcon={
          <Image
            src="/images/favicons/favicon-512.png"
            alt=""
            width={centerLogoSize}
            height={centerLogoSize}
            className="object-contain"
            aria-hidden
          />
        }
      />
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";
import { DeferredMount } from "@/components/ui/DeferredMount";
import { cn } from "@/lib/utils";

const TechBeamCircle = dynamic(
  () =>
    import("./TechBeamCircle").then((mod) => ({
      default: mod.TechBeamCircle,
    })),
  { ssr: false },
);

interface TechBeamCircleLazyProps {
  className?: string;
  selectedOrbitId?: number | null;
  onOrbitSelect?: (orbitId: number | null) => void;
}

export function TechBeamCircleLazy({
  className,
  selectedOrbitId,
  onOrbitSelect,
}: TechBeamCircleLazyProps) {
  return (
    <DeferredMount
      fallback={
        <div
          className={cn(
            "mx-auto aspect-square w-full max-w-2xl rounded-full bg-white/5",
            className,
          )}
          aria-hidden
        />
      }
    >
      <TechBeamCircle
        className={className}
        selectedOrbitId={selectedOrbitId}
        onOrbitSelect={onOrbitSelect}
      />
    </DeferredMount>
  );
}

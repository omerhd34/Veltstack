"use client";

import dynamic from "next/dynamic";
import { DeferredMount } from "@/components/ui/DeferredMount";
import type { ApproachTimelineStep } from "./ApproachScrollTimeline";

const ApproachScrollTimeline = dynamic(
  () =>
    import("./ApproachScrollTimeline").then((mod) => ({
      default: mod.ApproachScrollTimeline,
    })),
  { ssr: false },
);

interface ApproachScrollTimelineLazyProps {
  steps: ApproachTimelineStep[];
  contactCta: string;
  scrollMoreLabel: string;
  className?: string;
}

export function ApproachScrollTimelineLazy({
  steps,
  contactCta,
  scrollMoreLabel,
  className,
}: ApproachScrollTimelineLazyProps) {
  return (
    <DeferredMount
      className={className}
      fallback={
        <div
          className="min-h-80 w-full rounded-2xl bg-background/40 lg:min-h-112"
          aria-hidden
        />
      }
    >
      <ApproachScrollTimeline
        steps={steps}
        contactCta={contactCta}
        scrollMoreLabel={scrollMoreLabel}
      />
    </DeferredMount>
  );
}

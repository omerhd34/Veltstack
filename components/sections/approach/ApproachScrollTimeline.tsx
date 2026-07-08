"use client";

import { ScrollTimeline } from "@/components/lightswind/scroll-timeline";
import type { TimelineEvent } from "@/components/lightswind/scroll-timeline";
import {
  LuCompass,
  LuFileText,
  LuGlobe,
  LuHeadset,
  LuLayers,
  LuListChecks,
  LuMessageSquare,
  LuPalette,
  LuRocket,
  LuSend,
  LuShieldCheck,
  LuTrendingUp,
} from "react-icons/lu";

const approachIcons = [
  LuSend,
  LuMessageSquare,
  LuCompass,
  LuFileText,
  LuListChecks,
  LuRocket,
  LuPalette,
  LuLayers,
  LuShieldCheck,
  LuGlobe,
  LuTrendingUp,
  LuHeadset,
] as const;

export interface ApproachTimelineStep {
  step: string;
  title: string;
  desc: string;
  timing: string;
}

interface ApproachScrollTimelineProps {
  steps: ApproachTimelineStep[];
  className?: string;
}

export function ApproachScrollTimeline({
  steps,
  className,
}: ApproachScrollTimelineProps) {
  const events: TimelineEvent[] = steps.map((item, index) => {
    const Icon = approachIcons[index] ?? LuCompass;

    return {
      id: `approach-${item.step}`,
      year: item.step.padStart(2, "0"),
      title: item.title,
      subtitle: item.timing,
      description: item.desc,
      icon: (
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent ring-1 ring-brand-accent/20 transition-all duration-500 group-hover:scale-105 group-hover:bg-brand-accent group-hover:text-brand-accent-foreground group-hover:ring-brand-accent/50">
          <Icon className="size-4" strokeWidth={1.75} aria-hidden />
        </span>
      ),
    };
  });

  return (
    <ScrollTimeline
      events={events}
      className={className}
      cardAlignment="alternating"
      cardVariant="elevated"
      cardEffect="shadow"
      revealAnimation="slide"
      animationOrder="staggered"
      dateFormat="badge"
      progressIndicator
      parallaxIntensity={0}
      lineColor="bg-brand-accent/45"
      connectorStyle="line"
      progressLineWidth={3}
    />
  );
}

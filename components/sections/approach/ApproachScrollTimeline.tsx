"use client";

import {
  ScrollTimeline,
  type TimelineEvent,
} from "@/components/lightswind/scroll-timeline";
import { BorderTrace } from "@/components/ui/BorderTrace";
import {
  LuCompass,
  LuFileText,
  LuGlobe,
  LuHeadset,
  LuLayers,
  LuListChecks,
  LuMessageSquare,
  LuRocket,
  LuSearch,
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
  LuLayers,
  LuShieldCheck,
  LuGlobe,
  LuSearch,
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
    <>
      <div
        className={`${className ?? ""} -mx-4 overflow-x-auto overscroll-x-contain scroll-smooth px-4 pb-4 [-ms-overflow-style:none] scrollbar-none sm:hidden [&::-webkit-scrollbar]:hidden`}
      >
        <ol className="flex w-max min-w-full snap-x snap-mandatory gap-4">
          {events.map((event) => (
            <li
              key={event.id}
              className="group relative flex w-[82vw] max-w-88 shrink-0 snap-start scroll-ml-4 flex-col not-last:after:absolute not-last:after:top-1/2 not-last:after:left-full not-last:after:h-0.5 not-last:after:w-4 not-last:after:-translate-y-1/2 not-last:after:bg-brand-accent/45"
            >
              <article className="border-trace-hover-fallback relative flex h-full min-h-64 flex-col overflow-hidden rounded-2xl border-[3px] border-solid border-[#8aab99] bg-white p-5 shadow-[0_2px_8px_rgb(0,0,0,0.04),0_12px_32px_rgb(58,107,82,0.07)] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgb(58,107,82,0.14)]">
                <BorderTrace durationSec={2.5} />

                <span
                  aria-hidden
                  className="absolute top-4 right-4 font-mono text-3xl font-bold leading-none tracking-tighter text-brand-accent/18 transition-colors duration-500 group-hover:text-brand-accent/35"
                >
                  {event.year}
                </span>

                <div className="flex items-center gap-3 pr-12">
                  {event.icon}
                  <h3 className="font-(family-name:--font-heading) text-lg font-bold leading-snug tracking-tight text-[#0A0A0F]">
                    {event.title}
                  </h3>
                </div>

                <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.7] text-foreground/65">
                  {event.description}
                </p>

                {event.subtitle ? (
                  <span className="mt-4 inline-flex self-end rounded-full border border-brand-accent/15 bg-brand-accent/6 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-brand-accent/80">
                    {event.subtitle}
                  </span>
                ) : null}
              </article>
            </li>
          ))}
        </ol>
      </div>

      <ScrollTimeline
        events={events}
        className={`${className ?? ""} hidden sm:block`}
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
    </>
  );
}

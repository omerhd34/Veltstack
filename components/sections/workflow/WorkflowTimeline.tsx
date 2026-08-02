import type { IconType } from "react-icons";
import { LuClock } from "react-icons/lu";
import { BorderTrace } from "@/components/ui/BorderTrace";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { cn } from "@/lib/utils";

export interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
  timing: string;
}

interface WorkflowTimelineProps {
  badge: string;
  titleLead: string;
  titleAccent: string;
  subtitle: string;
  steps: WorkflowStep[];
  className?: string;
  sectionId?: string;
  badgeIcon?: IconType;
}

const slowTransition =
  "transition-all duration-300 ease-out motion-reduce:transition-none";

export function WorkflowTimeline({
  badge,
  titleLead,
  titleAccent,
  subtitle,
  steps,
  className,
  sectionId = "workflow-section-title",
  badgeIcon: BadgeIcon = LuClock,
}: WorkflowTimelineProps) {
  const showConnector = steps.length <= 4;

  return (
    <div className={className}>
      <div className="mx-auto max-w-3xl text-center">
        <SectionBadge variant="accent" className="justify-self-center">
          <BadgeIcon className="size-3.5 shrink-0" aria-hidden />
          {badge}
        </SectionBadge>

        <h2
          id={sectionId}
          className="mt-6 font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-foreground md:text-4xl"
        >
          {titleLead}
          <br />
          <span className="font-serif font-normal italic text-foreground/85">
            {titleAccent}
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {subtitle}
        </p>
      </div>

      <ol className="relative mt-14 lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-6">
        {showConnector ? (
          <div
            aria-hidden
            className="pointer-events-none absolute top-5 right-[calc((100%-4.5rem)/4-1.25rem)] left-5 hidden h-px bg-border lg:block"
          />
        ) : null}

        {steps.map((item, index) => {
          const isLast = index === steps.length - 1;

          return (
            <li
              key={item.step}
              className="group relative flex gap-4 lg:flex-col lg:gap-0"
            >
              {showConnector && !isLast ? (
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-10 bottom-0 left-5 w-px -translate-x-1/2 bg-border lg:hidden"
                />
              ) : null}

              <span
                aria-hidden
                className={cn(
                  "relative z-10 flex size-10 shrink-0 items-center justify-center overflow-visible rounded-full",
                  "border-trace-hover-fallback box-border border-[3px] border-solid border-transparent",
                  slowTransition,
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute -inset-0.75 rounded-full bg-background",
                    "group-hover:bg-brand-accent group-hover:shadow-[0_4px_14px_rgb(58_107_82/0.28)]",
                    slowTransition,
                  )}
                />
                <BorderTrace
                  loop
                  trigger="hover"
                  durationSec={1.4}
                  radius={20}
                />
                <span
                  className={cn(
                    "relative z-10 text-sm font-bold text-muted-foreground group-hover:text-white",
                    slowTransition,
                  )}
                >
                  {item.step}
                </span>
              </span>

              <div
                className={cn(
                  "flex min-w-0 flex-1 flex-col",
                  isLast ? "pb-0" : "pb-10",
                  "lg:mt-5 lg:pb-0",
                )}
              >
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
                <span className="mt-4 inline-flex w-fit rounded-full border border-border/70 bg-muted/30 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {item.timing}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

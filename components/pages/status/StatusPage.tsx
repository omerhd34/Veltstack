import type { ReactNode } from "react";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { cn } from "@/lib/utils";

interface StatusPageProps {
  code: string;
  badge: string;
  title: string;
  description: string;
  actions: ReactNode;
  className?: string;
}

export function StatusPage({
  code,
  badge,
  title,
  description,
  actions,
  className,
}: StatusPageProps) {
  return (
    <section
      className={cn(
        "relative flex w-full min-h-[calc(100dvh-4.5rem)] flex-1 flex-col items-center justify-center overflow-hidden py-16 sm:py-20",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(var(--brand-accent-rgb)/0.12),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/3 size-72 rounded-full bg-brand-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-8 size-64 rounded-full bg-brand-accent/8 blur-3xl"
      />

      <SiteContainer className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="font-(family-name:--font-heading) text-[clamp(4.5rem,14vw,7.5rem)] font-bold leading-none tracking-tight text-brand-accent/15 select-none"
            aria-hidden
          >
            {code}
          </p>

          <div className="-mt-6 sm:-mt-8">
            <SectionBadge variant="accent">{badge}</SectionBadge>
          </div>

          <h1 className="mt-5 font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-tight">
            {title}
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
            {description}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {actions}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

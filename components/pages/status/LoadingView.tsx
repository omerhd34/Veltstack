import Image from "next/image";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { cn } from "@/lib/utils";

interface LoadingViewProps {
  label?: string;
  ariaLabel?: string;
  fullScreen?: boolean;
  className?: string;
}

export function LoadingView({
  label,
  ariaLabel = "Loading",
  fullScreen = false,
  className,
}: LoadingViewProps) {
  return (
    <section
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={ariaLabel}
      className={cn(
        "relative flex w-full flex-1 flex-col items-center justify-center overflow-hidden py-16 sm:py-20",
        fullScreen ? "min-h-dvh" : "min-h-[calc(100dvh-4.5rem)]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(var(--brand-accent-rgb)/0.14),transparent_58%)]"
      />
      <div
        aria-hidden
        className="loading-ambient pointer-events-none absolute -left-28 top-1/4 size-80 rounded-full bg-brand-accent/12 blur-3xl"
      />
      <div
        aria-hidden
        className="loading-ambient-delayed pointer-events-none absolute -right-20 bottom-1/5 size-72 rounded-full bg-brand-accent/10 blur-3xl"
      />

      <SiteContainer className="relative">
        <div className="loading-content mx-auto flex max-w-sm flex-col items-center text-center">
          <div className="relative flex size-19 items-center justify-center sm:size-22">
            <span
              aria-hidden
              className="loading-ring absolute inset-0 rounded-full border border-brand-accent/25"
            />
            <span
              aria-hidden
              className="loading-ring-delayed absolute -inset-2 rounded-full border border-brand-accent/15"
            />
            <span
              aria-hidden
              className="absolute inset-2 rounded-full bg-brand-accent/8 backdrop-blur-[2px]"
            />
            <Image
              src="/icon.svg"
              alt=""
              width={40}
              height={40}
              priority
              unoptimized
              className="loading-favicon relative size-9 sm:size-10"
            />
          </div>

          <Image
            src="/images/logo.png"
            alt="Veltstack"
            width={240}
            height={47}
            priority
            className="loading-logo mt-8 h-7 w-auto min-[400px]:h-8 sm:h-9 md:h-10"
          />

          <div
            aria-hidden
            className="loading-track mt-9 h-0.5 w-40 overflow-hidden rounded-full bg-brand-accent/15 sm:w-48"
          >
            <span className="loading-bar block h-full w-1/2 rounded-full bg-linear-to-r from-transparent via-brand-accent to-transparent" />
          </div>

          {label ? (
            <p className="mt-5 text-sm font-medium tracking-wide text-muted-foreground">
              {label}
              <span className="loading-dots" aria-hidden>
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            </p>
          ) : null}

          <span className="sr-only">{ariaLabel}</span>
        </div>
      </SiteContainer>
    </section>
  );
}

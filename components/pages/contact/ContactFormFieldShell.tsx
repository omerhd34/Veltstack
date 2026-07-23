"use client";

import { BorderTrace } from "@/components/ui/BorderTrace";
import { cn } from "@/lib/utils";

interface ContactFormFieldShellProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  invalid?: boolean;
}

export function ContactFormFieldShell({
  children,
  className,
  active,
  invalid,
}: ContactFormFieldShellProps) {
  return (
    <div
      className={cn(
        "group relative overflow-visible rounded-xl",
        "box-border border-[3px] border-solid",
        invalid
          ? "border-destructive"
          : "border-trace-hover-fallback border-transparent",
        className,
      )}
      data-active={active ? "true" : undefined}
      data-invalid={invalid ? "true" : undefined}
    >
      {!invalid && (
        <BorderTrace
          loop
          trigger="focus"
          radius={12}
          durationSec={4}
          active={active}
        />
      )}
      {children}
    </div>
  );
}

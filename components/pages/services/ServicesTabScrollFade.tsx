import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ServicesTabScrollFadeProps {
  children: ReactNode;
  className?: string;
  fadeFrom?: string;
}

export function ServicesTabScrollFade({
  children,
  className,
  fadeFrom = "#071510",
}: ServicesTabScrollFadeProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-5 bg-linear-to-r to-transparent sm:w-8 lg:hidden"
        style={{
          backgroundImage: `linear-gradient(to right, ${fadeFrom}, transparent)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-5 bg-linear-to-l to-transparent sm:w-8 lg:hidden"
        style={{
          backgroundImage: `linear-gradient(to left, ${fadeFrom}, transparent)`,
        }}
      />
      {children}
    </div>
  );
}

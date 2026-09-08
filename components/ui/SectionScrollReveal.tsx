import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionScrollRevealDirection = "left" | "right" | "up";
type SectionScrollRevealTrigger = "content" | "wide" | "entry" | "peek";

interface SectionScrollRevealProps {
  children: ReactNode;
  direction?: SectionScrollRevealDirection;
  className?: string;
  delay?: number;
  trigger?: SectionScrollRevealTrigger;
  when?: "inView" | "mount";
}

export function SectionScrollReveal({
  children,
  direction = "left",
  className,
  delay = 0,
}: SectionScrollRevealProps) {
  return (
    <div
      className={cn(
        "section-scroll-reveal",
        `section-scroll-reveal--${direction}`,
        "is-visible",
        className,
      )}
      style={
        {
          "--reveal-delay": `${delay}s`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

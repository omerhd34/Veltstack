"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionScrollRevealDirection = "left" | "right" | "up";
type SectionScrollRevealTrigger = "content" | "wide" | "entry";

interface SectionScrollRevealProps {
  children: ReactNode;
  direction?: SectionScrollRevealDirection;
  className?: string;
  delay?: number;
  trigger?: SectionScrollRevealTrigger;
  when?: "inView" | "mount";
}

const OFFSET_X = 52;
const OFFSET_Y = 22;
const OFFSET_UP = 56;

const VIEWPORT: Record<
  SectionScrollRevealTrigger,
  { once: true; amount: number; margin: string }
> = {
  content: {
    once: true,
    amount: 0.45,
    margin: "-6% 0px -18% 0px",
  },
  wide: {
    once: true,
    amount: 0.22,
    margin: "-4% 0px -20% 0px",
  },
  entry: {
    once: true,
    amount: 0.08,
    margin: "0px 0px -35% 0px",
  },
};

export function SectionScrollReveal({
  children,
  direction = "left",
  className,
  delay = 0,
  trigger = "content",
  when = "inView",
}: SectionScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const initial =
    direction === "up"
      ? { opacity: 0, y: OFFSET_UP }
      : {
          opacity: 0,
          x: direction === "left" ? -OFFSET_X : OFFSET_X,
          y: OFFSET_Y,
        };
  const visible = { opacity: 1, x: 0, y: 0 };
  const transition = {
    duration: 0.95,
    delay,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  if (when === "mount") {
    return (
      <motion.div
        className={cn(className)}
        initial={initial}
        animate={visible}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      initial={initial}
      whileInView={visible}
      viewport={VIEWPORT[trigger]}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

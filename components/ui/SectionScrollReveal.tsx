"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const MOBILE_QUERY = "(max-width: 767px)";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return isMobile;
}

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

const OFFSET_X = "var(--reveal-offset-x)";
const OFFSET_X_NEGATIVE = "calc(var(--reveal-offset-x) * -1)";
const OFFSET_Y = "var(--reveal-offset-y)";
const OFFSET_UP = "var(--reveal-offset-up)";

const VIEWPORT: Record<
  SectionScrollRevealTrigger,
  { once: true; amount: number | "some"; margin: string }
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
  peek: {
    once: true,
    amount: "some",
    margin: "0px 0px 12% 0px",
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
  const isMobile = useIsMobile();
  const initial =
    direction === "up"
      ? { opacity: 0, y: OFFSET_UP }
      : {
          opacity: 0,
          x: direction === "left" ? OFFSET_X_NEGATIVE : OFFSET_X,
          y: OFFSET_Y,
        };
  const visible = { opacity: 1, x: "0px", y: "0px" };
  const transition = {
    duration: 0.95,
    delay,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  const motionClassName = cn(
    "[--reveal-offset-up:24px] [--reveal-offset-x:20px] [--reveal-offset-y:10px] md:[--reveal-offset-up:56px] md:[--reveal-offset-x:52px] md:[--reveal-offset-y:22px]",
    className,
  );

  if (prefersReducedMotion || isMobile) {
    return <div className={className}>{children}</div>;
  }

  if (when === "mount") {
    return (
      <motion.div
        className={motionClassName}
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
      className={motionClassName}
      initial={initial}
      whileInView={visible}
      viewport={VIEWPORT[trigger]}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

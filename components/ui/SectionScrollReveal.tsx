"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

const MOBILE_QUERY = "(max-width: 767px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

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

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(REDUCED_MOTION_QUERY);
    const update = () => setReduced(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return reduced;
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

const VIEWPORT: Record<
  SectionScrollRevealTrigger,
  { threshold: number; rootMargin: string }
> = {
  content: {
    threshold: 0.45,
    rootMargin: "-6% 0px -18% 0px",
  },
  wide: {
    threshold: 0.22,
    rootMargin: "-4% 0px -20% 0px",
  },
  entry: {
    threshold: 0.08,
    rootMargin: "0px 0px -35% 0px",
  },
  peek: {
    threshold: 0.01,
    rootMargin: "0px 0px 12% 0px",
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
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);
  const skipAnimation = prefersReducedMotion || isMobile;

  useEffect(() => {
    if (skipAnimation) return;

    if (when === "mount") {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const node = ref.current;
    if (!node) return;

    const { threshold, rootMargin } = VIEWPORT[trigger];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [skipAnimation, trigger, when]);

  if (skipAnimation) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "section-scroll-reveal",
        `section-scroll-reveal--${direction}`,
        visible && "is-visible",
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

"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ left: false, right: false });

  useEffect(() => {
    const scroller =
      wrapperRef.current?.querySelector<HTMLElement>('[role="tablist"]');
    if (!scroller) return;

    const updateEdges = () => {
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;

      setEdges({
        left: scroller.scrollLeft > 2,
        right: scroller.scrollLeft < maxScroll - 2,
      });
    };

    updateEdges();

    const observer = new ResizeObserver(updateEdges);
    observer.observe(scroller);
    scroller.addEventListener("scroll", updateEdges, { passive: true });

    return () => {
      observer.disconnect();
      scroller.removeEventListener("scroll", updateEdges);
    };
  }, [children]);

  return (
    <div ref={wrapperRef} className={cn("relative", className)}>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 z-20 w-6 bg-linear-to-r to-transparent opacity-0 transition-opacity duration-200 sm:w-10 lg:hidden",
          edges.left && "opacity-100",
        )}
        style={{
          backgroundImage: `linear-gradient(to right, ${fadeFrom}, transparent)`,
        }}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 z-20 w-6 bg-linear-to-l to-transparent opacity-0 transition-opacity duration-200 sm:w-10 lg:hidden",
          edges.right && "opacity-100",
        )}
        style={{
          backgroundImage: `linear-gradient(to left, ${fadeFrom}, transparent)`,
        }}
      />
      {children}
    </div>
  );
}

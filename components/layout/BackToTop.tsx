"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { PiArrowFatLinesUpFill } from "react-icons/pi";
import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface BackToTopProps {
  className?: string;
}

export function BackToTop({ className }: BackToTopProps) {
  const t = useTranslations("footer");
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-page-hero]");

    if (!hero) {
      const update = () => setVisible(window.scrollY > 48);
      update();
      window.addEventListener("scroll", update, { passive: true });
      return () => window.removeEventListener("scroll", update);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <div
      className={cn(
        "fixed left-3 bottom-3 z-50 print:hidden",
        "transition-[opacity,transform,visibility] duration-300 ease-out",
        visible
          ? "visible translate-y-0 opacity-100"
          : "invisible pointer-events-none translate-y-2 opacity-0",
        className,
      )}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label={t("backToTop")}
        tabIndex={visible ? 0 : -1}
        className={cn(
          "inline-flex size-12 items-center justify-center rounded-none",
          "border border-white/20 bg-[#0A0A0F]/80 text-white backdrop-blur-md",
          "shadow-[0_0_18px_rgb(0_0_0/0.18)]",
          "transition-transform duration-300 ease-out",
          "hover:scale-105",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
          "motion-reduce:transition-none motion-reduce:hover:scale-100",
        )}
      >
        <PiArrowFatLinesUpFill aria-hidden className="size-6" />
      </button>
    </div>
  );
}

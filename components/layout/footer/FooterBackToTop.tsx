"use client";

import { useTranslations } from "next-intl";
import { PiArrowFatLinesUpFill } from "react-icons/pi";
import { StardustShell } from "@/components/lightswind/stardust-button";
import {
  stardustContent,
  stardustFace,
  stardustGlassFace,
  stardustIcon,
} from "@/components/ui/interactive-hover";
import { cn } from "@/lib/utils";

interface FooterBackToTopProps {
  className?: string;
}

export function FooterBackToTop({ className }: FooterBackToTopProps) {
  const t = useTranslations("footer");

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
    <StardustShell
      className={cn("size-11 shrink-0", className)}
      faceClassName={cn(
        stardustGlassFace,
        "bg-background/8 group-hover/stardust:bg-background/14 group-focus-within/stardust:bg-background/14",
      )}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label={t("backToTop")}
        className={cn(
          stardustFace,
          "bg-transparent text-background/75 transition-colors duration-300",
          "hover:text-background focus-visible:outline-none",
          "disabled:pointer-events-none disabled:opacity-35",
        )}
      >
        <span className={stardustContent}>
          <PiArrowFatLinesUpFill
            aria-hidden
            className={cn(
              "size-4 transition-transform duration-300 ease-out",
              "group-hover/stardust:-translate-y-0.5",
              stardustIcon,
            )}
          />
        </span>
      </button>
    </StardustShell>
  );
}

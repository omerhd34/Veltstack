"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { PiArrowFatLinesUpFill } from "react-icons/pi";
import { StardustShell } from "@/components/lightswind/stardust-button";
import {
  stardustContent,
  stardustFace,
  stardustGlassFace,
  stardustIcon,
} from "@/components/ui/interactive-hover";
import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface BackToTopProps {
  className?: string;
}

function parseAlpha(raw: string | undefined) {
  if (raw === undefined) return 1;
  return raw.endsWith("%") ? Number(raw.slice(0, -1)) / 100 : Number(raw);
}

function parseCssRgb(
  color: string,
): { r: number; g: number; b: number; a: number } | null {
  const comma = color.match(
    /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/i,
  );
  if (comma) {
    return {
      r: Number(comma[1]),
      g: Number(comma[2]),
      b: Number(comma[3]),
      a: comma[4] === undefined ? 1 : Number(comma[4]),
    };
  }

  const space = color.match(
    /rgba?\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+%?))?\s*\)/i,
  );
  if (!space) return null;

  return {
    r: Number(space[1]),
    g: Number(space[2]),
    b: Number(space[3]),
    a: parseAlpha(space[4]),
  };
}

function relativeLuminance(r: number, g: number, b: number) {
  const toLinear = (channel: number) => {
    const s = channel / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };

  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function resolveColorLuminance(color: string): { l: number; a: number } | null {
  const rgb = parseCssRgb(color);
  if (rgb) {
    return { l: relativeLuminance(rgb.r, rgb.g, rgb.b), a: rgb.a };
  }

  const oklabLike = color.match(
    /okl(?:ch|ab)\(\s*([\d.]+%?)(?:[^/)]*)(?:\/\s*([\d.]+%?))?\s*\)/i,
  );
  if (oklabLike) {
    const lightnessRaw = oklabLike[1];
    const l = lightnessRaw.endsWith("%")
      ? Number(lightnessRaw.slice(0, -1)) / 100
      : Number(lightnessRaw);
    return { l, a: parseAlpha(oklabLike[2]) };
  }

  const lab = color.match(
    /lab\(\s*([\d.]+%?)(?:[^/)]*)(?:\/\s*([\d.]+%?))?\s*\)/i,
  );
  if (lab) {
    const lightnessRaw = lab[1];
    const l = lightnessRaw.endsWith("%")
      ? Number(lightnessRaw.slice(0, -1)) / 100
      : Number(lightnessRaw) / 100;
    return { l, a: parseAlpha(lab[2]) };
  }

  return null;
}

function resolveBackgroundLuminance(target: Element | null) {
  let current: Element | null = target;

  while (current && current !== document.documentElement) {
    const parsed = resolveColorLuminance(
      getComputedStyle(current).backgroundColor,
    );

    if (parsed && parsed.a >= 0.5) {
      return parsed.l;
    }

    current = current.parentElement;
  }

  const bodyBg = resolveColorLuminance(
    getComputedStyle(document.body).backgroundColor,
  );
  if (!bodyBg) return 1;
  return bodyBg.l;
}

export function BackToTop({ className }: BackToTopProps) {
  const t = useTranslations("footer");
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [onDark, setOnDark] = useState(false);

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

  useEffect(() => {
    let raf = 0;

    const sample = () => {
      const root = rootRef.current;
      if (!root) return;

      const { left, top, height } = root.getBoundingClientRect();
      const x = Math.max(0, left - 8);
      const y = top + height / 2;

      const prevVisibility = root.style.visibility;
      const prevPointerEvents = root.style.pointerEvents;
      root.style.visibility = "hidden";
      root.style.pointerEvents = "none";
      const under = document.elementFromPoint(x, y);
      root.style.visibility = prevVisibility;
      root.style.pointerEvents = prevPointerEvents;

      setOnDark(resolveBackgroundLuminance(under) < 0.45);
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(sample);
    };

    sample();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname, visible]);

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
      ref={rootRef}
      className={cn(
        "fixed top-1/2 right-3 z-50 -translate-y-1/2 transition-[opacity,visibility] duration-300",
        visible
          ? "visible opacity-100"
          : "invisible pointer-events-none opacity-0",
        className,
      )}
    >
      <StardustShell
        active
        beamBorderRadius={0}
        particleColor={onDark ? "#a8dfc4" : "#111111"}
        beamColorFrom={onDark ? "#3A6B52" : "#111111"}
        beamColorTo={onDark ? "#6ee7b7" : "#3f3f3f"}
        className={cn(
          "size-11 shrink-0 overflow-visible rounded-none",
          !onDark &&
            "shadow-[0_0_18px_rgb(0_0_0/0.14)] [&_.stardust-shell__border]:border-foreground/55 [&_.stardust-shell__border]:shadow-none",
        )}
        faceClassName={cn(
          stardustGlassFace,
          "rounded-none transition-[background-color] duration-300",
          onDark
            ? "bg-background/12 group-hover/stardust:bg-background/20 group-focus-within/stardust:bg-background/20"
            : "bg-foreground/8 group-hover/stardust:bg-foreground/14 group-focus-within/stardust:bg-foreground/14",
        )}
      >
        <button
          type="button"
          onClick={scrollToTop}
          aria-label={t("backToTop")}
          tabIndex={visible ? 0 : -1}
          className={cn(
            stardustFace,
            "rounded-none bg-transparent transition-colors duration-300",
            "focus-visible:outline-none",
            "disabled:pointer-events-none disabled:opacity-35",
            onDark
              ? "text-background hover:text-background"
              : "text-foreground hover:text-foreground",
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
    </div>
  );
}

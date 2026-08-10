"use client";

import type { ReactNode } from "react";
import { LuArrowRight } from "react-icons/lu";
import { SoftPrefetchLink } from "@/components/ui/SoftPrefetchLink";
import { StardustShell } from "@/components/lightswind/stardust-button";
import {
  stardustContent,
  stardustFace,
  stardustFaceOverlay,
  stardustFocus,
} from "@/components/ui/interactive-hover";
import { cn } from "@/lib/utils";

interface NavbarMegaMenuShellProps {
  allHref: string;
  allLabel: string;
  onNavigate: () => void;
  columns?: 2 | 3;
  children: ReactNode;
}

export function NavbarMegaMenuShell({
  allHref,
  allLabel,
  onNavigate,
  columns = 2,
  children,
}: NavbarMegaMenuShellProps) {
  return (
    <div className="mega-menu-shell relative overflow-hidden px-4 py-4 sm:px-5 sm:py-5">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-brand-accent/12 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-14 -left-10 size-32 rounded-full bg-brand-accent/8 blur-3xl"
      />
      <div
        className={cn(
          "relative grid gap-2",
          columns === 3 ? "grid-cols-3" : "grid-cols-2",
        )}
      >
        {children}
      </div>
      <div className="relative mt-3 border-t border-border/50 pt-3 group-data-[overlay=true]/header:border-white/20">
        <StardustShell
          className="w-full rounded-lg"
          faceClassName={cn("bg-foreground/92", stardustFaceOverlay)}
          beamBorderRadius={8}
          beamSize={40}
        >
          <SoftPrefetchLink
            href={allHref}
            onClick={onNavigate}
            className={cn(
              stardustFace,
              stardustFocus,
              "h-10 w-full rounded-lg bg-transparent px-3 text-sm font-medium text-background",
              "group-data-[overlay=true]/header:text-white",
            )}
          >
            <span className={cn(stardustContent, "gap-2")}>
              {allLabel}
              <LuArrowRight
                className="size-4 transition-transform duration-300 group-hover/stardust:translate-x-0.5"
                aria-hidden
              />
            </span>
          </SoftPrefetchLink>
        </StardustShell>
      </div>
    </div>
  );
}

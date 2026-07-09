"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { StardustShell } from "@/components/lightswind/stardust-button";
import {
  stardustContent,
  stardustFace,
  stardustGlassFace,
} from "@/components/ui/interactive-hover";
import { cn } from "@/lib/utils";

type StardustIconButtonTone = "glass" | "light";

interface StardustIconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  tone?: StardustIconButtonTone;
  shellClassName?: string;
  faceClassName?: string;
}

const toneFaceClasses: Record<StardustIconButtonTone, string> = {
  glass: stardustGlassFace,
  light:
    "bg-white/95 backdrop-blur-sm group-hover/stardust:bg-white group-focus-within/stardust:bg-white",
};

export function StardustIconButton({
  children,
  tone = "glass",
  className,
  shellClassName,
  faceClassName,
  type = "button",
  ...props
}: StardustIconButtonProps) {
  return (
    <StardustShell
      className={cn("size-10 shrink-0", shellClassName)}
      faceClassName={faceClassName ?? toneFaceClasses[tone]}
    >
      <button
        type={type}
        className={cn(
          stardustFace,
          "bg-transparent disabled:pointer-events-none disabled:opacity-35",
          tone === "glass" && "text-white",
          tone === "light" && "text-foreground/70 hover:text-brand-accent",
          className,
        )}
        {...props}
      >
        <span className={stardustContent}>{children}</span>
      </button>
    </StardustShell>
  );
}

"use client";

import { StardustShell } from "@/components/lightswind/stardust-button";
import { cn } from "@/lib/utils";

interface StardustOrbProps {
  className?: string;
  active?: boolean;
  faceClassName?: string;
}

export function StardustOrb({
  className,
  active,
  faceClassName = "bg-brand-accent/10",
}: StardustOrbProps) {
  return (
    <StardustShell
      active={active}
      interactive={false}
      beamSize={28}
      className={cn(
        "pointer-events-none absolute -right-6 -top-6 size-24",
        className,
      )}
      faceClassName={faceClassName}
      beamColorFrom="#3A6B52"
      beamColorTo="#a8dfc4"
    >
      <span aria-hidden className="block size-full" />
    </StardustShell>
  );
}

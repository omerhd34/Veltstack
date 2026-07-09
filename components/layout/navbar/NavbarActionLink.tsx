"use client";

import type { ComponentProps, ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { StardustShell } from "@/components/lightswind/stardust-button";
import {
  stardustContent,
  stardustFace,
  stardustFaceOverlay,
  stardustFocus,
} from "@/components/ui/interactive-hover";
import { cn } from "@/lib/utils";

interface NavbarActionLinkProps {
  href: ComponentProps<typeof Link>["href"];
  locale?: ComponentProps<typeof Link>["locale"];
  onClick?: () => void;
  className?: string;
  innerClassName?: string;
  contentClassName?: string;
  ariaLabel?: string;
  children: ReactNode;
}

export function NavbarActionLink({
  href,
  locale,
  onClick,
  className,
  innerClassName,
  contentClassName,
  ariaLabel,
  children,
}: NavbarActionLinkProps) {
  return (
    <StardustShell
      className={className}
      faceClassName={cn(
        "bg-foreground/92",
        stardustFaceOverlay,
      )}
    >
      <Link
        href={href}
        locale={locale}
        onClick={onClick}
        aria-label={ariaLabel}
        className={cn(
          stardustFace,
          stardustFocus,
          "bg-transparent text-background group-data-[overlay=true]/header:text-white",
          innerClassName,
        )}
      >
        <span className={cn(stardustContent, contentClassName)}>{children}</span>
      </Link>
    </StardustShell>
  );
}

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
  scroll?: ComponentProps<typeof Link>["scroll"];
  onClick?: () => void;
  className?: string;
  innerClassName?: string;
  contentClassName?: string;
  ariaLabel?: string;
  solid?: boolean;
  children: ReactNode;
}

export function NavbarActionLink({
  href,
  locale,
  scroll,
  onClick,
  className,
  innerClassName,
  contentClassName,
  ariaLabel,
  solid = false,
  children,
}: NavbarActionLinkProps) {
  return (
    <StardustShell
      className={className}
      faceClassName={cn("bg-foreground/92", !solid && stardustFaceOverlay)}
    >
      <Link
        href={href}
        locale={locale}
        scroll={scroll}
        onClick={onClick}
        aria-label={ariaLabel}
        className={cn(
          stardustFace,
          stardustFocus,
          "bg-transparent text-background",
          !solid && "group-data-[overlay=true]/header:text-white",
          innerClassName,
        )}
      >
        <span className={cn(stardustContent, contentClassName)}>
          {children}
        </span>
      </Link>
    </StardustShell>
  );
}

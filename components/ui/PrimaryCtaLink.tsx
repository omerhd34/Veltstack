"use client";

import { type ReactNode } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { StardustShell } from "@/components/lightswind/stardust-button";
import {
  stardustContent,
  stardustFace,
  stardustFocus,
  stardustGlassFace,
  stardustIcon,
} from "@/components/ui/interactive-hover";
import { cn } from "@/lib/utils";

type PrimaryCtaLinkSize = "sm" | "md" | "lg";
type PrimaryCtaLinkVariant = "default" | "accent" | "outline" | "glass";

interface PrimaryCtaLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  size?: PrimaryCtaLinkSize;
  variant?: PrimaryCtaLinkVariant;
  showArrow?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  onNavigate?: () => void;
}

const linkSizeClasses: Record<PrimaryCtaLinkSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-12 px-8 text-base",
};

const contentGapClasses: Record<PrimaryCtaLinkSize, string> = {
  sm: "gap-1.5",
  md: "gap-2",
  lg: "gap-2",
};

const arrowSizeClasses: Record<PrimaryCtaLinkSize, string> = {
  sm: "size-3.5",
  md: "size-4",
  lg: "size-4",
};

const variantFaceClasses: Record<PrimaryCtaLinkVariant, string> = {
  default: "bg-[#0A0A0F]/92",
  accent: "bg-brand-accent/88",
  outline: "bg-[#0A0A0F]/92",
  glass: stardustGlassFace,
};

export function PrimaryCtaLink({
  href,
  children,
  className,
  wrapperClassName,
  size = "lg",
  variant = "default",
  showArrow = true,
  leadingIcon,
  trailingIcon,
  onNavigate,
}: PrimaryCtaLinkProps) {
  return (
    <StardustShell
      className={wrapperClassName}
      faceClassName={variantFaceClasses[variant]}
    >
      <Link
        href={href}
        onClick={onNavigate}
        className={cn(
          stardustFace,
          stardustFocus,
          "bg-transparent whitespace-nowrap font-medium text-white",
          variant === "accent" && "font-semibold",
          linkSizeClasses[size],
          className,
        )}
      >
        <span className={cn(stardustContent, contentGapClasses[size])}>
          {leadingIcon ? (
            <span className={stardustIcon}>{leadingIcon}</span>
          ) : null}
          {children}
          {trailingIcon ? (
            <span className={stardustIcon}>{trailingIcon}</span>
          ) : null}
          {showArrow ? (
            <LuArrowUpRight
              className={cn(arrowSizeClasses[size], stardustIcon, "text-white")}
              aria-hidden
            />
          ) : null}
        </span>
      </Link>
    </StardustShell>
  );
}

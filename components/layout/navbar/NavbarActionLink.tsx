"use client";

import type { ComponentProps, ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { BorderTrace } from "@/components/ui/BorderTrace";
import { cn } from "@/lib/utils";

interface NavbarActionLinkProps {
  href: ComponentProps<typeof Link>["href"];
  locale?: ComponentProps<typeof Link>["locale"];
  onClick?: () => void;
  className?: string;
  innerClassName?: string;
  ariaLabel?: string;
  children: ReactNode;
}

export function NavbarActionLink({
  href,
  locale,
  onClick,
  className,
  innerClassName,
  ariaLabel,
  children,
}: NavbarActionLinkProps) {
  return (
    <Link
      href={href}
      locale={locale}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        "group relative inline-flex shrink-0 items-center justify-center rounded-full border border-solid border-transparent border-trace-hover-fallback",
        className,
      )}
    >
      <BorderTrace loop durationSec={2.5} trigger="hover" borderWidth={1} />
      <span
        className={cn(
          "relative flex h-full w-full items-center justify-center rounded-full bg-foreground text-background transition-[background-color,color] duration-300 group-data-[overlay=true]/header:bg-white/10 group-data-[overlay=true]/header:text-white",
          innerClassName,
        )}
      >
        {children}
      </span>
    </Link>
  );
}

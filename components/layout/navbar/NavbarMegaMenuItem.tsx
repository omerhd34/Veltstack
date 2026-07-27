"use client";

import type { IconType } from "react-icons";
import { LuArrowUpRight } from "react-icons/lu";
import { SoftPrefetchLink } from "@/components/ui/SoftPrefetchLink";
import { StardustShell } from "@/components/lightswind/stardust-button";
import { stardustFocus } from "@/components/ui/interactive-hover";
import { cn } from "@/lib/utils";

interface NavbarMegaMenuItemProps {
  href: string;
  title: string;
  icon: IconType;
  onNavigate?: () => void;
}

export function NavbarMegaMenuItem({
  href,
  title,
  icon: Icon,
  onNavigate,
}: NavbarMegaMenuItemProps) {
  return (
    <div className="mega-menu-card">
      <StardustShell
        className="h-full w-full rounded-xl"
        faceClassName={cn(
          "bg-card/80",
          "group-data-[overlay=true]/header:bg-white/10 group-data-[overlay=true]/header:backdrop-blur-sm",
          "group-data-[overlay=true]/header:group-hover/stardust:bg-white/16",
          "group-data-[overlay=true]/header:group-focus-within/stardust:bg-white/16",
        )}
        beamBorderRadius={12}
        beamSize={40}
      >
        <SoftPrefetchLink
          href={href}
          onClick={onNavigate}
          className={cn(
            "mega-menu-item group relative z-1 flex h-full w-full items-center gap-3 rounded-xl bg-transparent px-3.5 py-3 transition-all duration-300",
            "border border-border/50 shadow-[0_1px_2px_rgb(0_0_0/0.04)]",
            "hover:border-brand-accent/30",
            "group-data-[overlay=true]/header:border-white/20 group-data-[overlay=true]/header:shadow-none",
            "group-data-[overlay=true]/header:hover:border-white/35",
            stardustFocus,
            "group-data-[overlay=true]/header:focus-visible:ring-white/40 group-data-[overlay=true]/header:focus-visible:ring-offset-transparent",
          )}
        >
          <span
            className={cn(
              "flex size-9 shrink-0 items-center justify-center rounded-lg",
              "bg-brand-accent/10 text-brand-accent ring-1 ring-brand-accent/15",
              "transition-all duration-300 group-hover:bg-brand-accent group-hover:text-brand-accent-foreground group-hover:ring-brand-accent/40",
              "group-data-[overlay=true]/header:bg-white/15 group-data-[overlay=true]/header:text-white group-data-[overlay=true]/header:ring-white/25",
              "group-data-[overlay=true]/header:group-hover:bg-white group-data-[overlay=true]/header:group-hover:text-brand-accent",
            )}
          >
            <Icon className="size-4" strokeWidth={1.75} aria-hidden />
          </span>
          <span className="min-w-0 flex-1 font-(family-name:--font-heading) text-sm font-semibold leading-snug tracking-tight text-foreground transition-colors duration-300 group-hover:text-brand-accent group-data-[overlay=true]/header:text-white group-data-[overlay=true]/header:group-hover:text-white">
            <span className="line-clamp-2">{title}</span>
          </span>
          <LuArrowUpRight
            className="size-4 shrink-0 text-brand-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-data-[overlay=true]/header:text-white"
            aria-hidden
          />
        </SoftPrefetchLink>
      </StardustShell>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from "@/lib/utils";

export function navItemClass(
  active: boolean,
  variant: "desktop" | "mobile" | "mobile-nested" = "desktop",
) {
  if (variant === "desktop") {
    return cn(
      "group relative inline-flex h-10 items-center gap-1 rounded-t-lg border-b-2 border-transparent px-4 text-base font-semibold tracking-[-0.01em] transition-[color,background-color,border-color] duration-200 xl:max-[1300px]:px-3",
      active
        ? "border-brand-accent bg-brand-accent/10 text-brand-accent group-data-[overlay=true]/header:border-white group-data-[overlay=true]/header:bg-white/15 group-data-[overlay=true]/header:text-white"
        : "text-foreground/70 hover:border-brand-accent hover:bg-brand-accent/10 hover:text-brand-accent group-data-[overlay=true]/header:text-white/75 group-data-[overlay=true]/header:hover:border-white group-data-[overlay=true]/header:hover:bg-white/15 group-data-[overlay=true]/header:hover:text-white",
    );
  }

  const base = {
    mobile:
      "flex w-full items-center rounded-xl px-4 py-3 text-base font-medium transition-colors",
    "mobile-nested":
      "flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
  }[variant];

  return cn(
    base,
    active
      ? "bg-brand-accent/12 font-semibold text-brand-accent"
      : "text-foreground/80 hover:bg-muted/60 hover:text-foreground",
  );
}

export function navItemLabelClass(_active: boolean) {
  return "relative inline-flex items-center";
}

export function navItemCaretClass(
  active: boolean,
  variant: "desktop" | "mobile" = "desktop",
) {
  if (variant === "mobile") {
    return cn(
      "size-3.5 shrink-0 transition-opacity duration-200",
      active
        ? "text-foreground/80 opacity-100"
        : "text-foreground/55 opacity-100",
    );
  }

  return cn(
    "size-3.5 shrink-0 transition-[color,opacity] duration-200",
    active
      ? "opacity-100 text-brand-accent group-data-[overlay=true]/header:text-white"
      : "opacity-50 text-foreground/70 group-hover:opacity-100 group-hover:text-brand-accent group-data-[overlay=true]/header:text-white/60 group-data-[overlay=true]/header:group-hover:text-white",
  );
}

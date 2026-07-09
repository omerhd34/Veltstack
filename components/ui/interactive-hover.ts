import { cn } from "@/lib/utils";

export const stardustFace = cn(
  "relative z-1 inline-flex h-full w-full min-h-full items-center justify-center rounded-full bg-transparent",
);

export const stardustContent =
  "relative z-1 inline-flex items-center justify-center";

export const stardustIcon = cn(
  "inline-flex shrink-0",
  "[&_svg]:stroke-[2.25]",
);

export const stardustFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const stardustGlassFace = cn(
  "bg-white/10 backdrop-blur-sm",
  "group-hover/stardust:bg-white/16 group-focus-within/stardust:bg-white/16",
);

export const stardustFaceOverlay = cn(
  "group-data-[overlay=true]/header:bg-white/10 group-data-[overlay=true]/header:backdrop-blur-sm",
  "group-data-[overlay=true]/header:group-hover/stardust:bg-white/16",
  "group-data-[overlay=true]/header:group-focus-within/stardust:bg-white/16",
);

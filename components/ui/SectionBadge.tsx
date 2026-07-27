import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionBadgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-semibold",
  {
    variants: {
      variant: {
        emerald:
          "border-white/25 bg-white/8 text-[0.6875rem] uppercase tracking-[0.2em] text-white/90",
        "emerald-soft":
          "border-white/25 bg-white/8 text-xs uppercase tracking-[0.18em] text-white/90",
        "emerald-muted":
          "border-white/25 bg-white/8 text-[0.6875rem] tracking-[0.2em] text-white/90",
        "emerald-label":
          "border-white/25 bg-white/8 text-xs tracking-[0.18em] text-white/90",
        soft:
          "border-white/25 bg-white/8 text-[0.6875rem] uppercase tracking-[0.2em] text-white/90",
        accent:
          "border-brand-accent/30 bg-brand-accent/8 text-xs uppercase tracking-[0.18em] text-brand-accent",
        "accent-card":
          "border-brand-accent/25 bg-white text-xs uppercase tracking-[0.18em] text-brand-accent shadow-[0_2px_12px_rgb(58_107_82/0.08)]",
        "accent-glass":
          "border-brand-accent/30 bg-white/80 text-xs uppercase tracking-[0.18em] text-brand-accent backdrop-blur-sm",
      },
    },
    defaultVariants: {
      variant: "soft",
    },
  },
);

type SectionBadgeProps = ComponentProps<"span"> &
  VariantProps<typeof sectionBadgeVariants>;

export function SectionBadge({
  className,
  variant,
  ...props
}: SectionBadgeProps) {
  return (
    <span
      className={cn(sectionBadgeVariants({ variant }), className)}
      {...props}
    />
  );
}

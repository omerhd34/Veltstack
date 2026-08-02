import { cn } from "@/lib/utils";

const slowTransition =
  "transition-all duration-300 ease-in-out motion-reduce:transition-none";

interface CardIndexNumberProps {
  index: number;
  theme?: "light" | "dark";
  reveal?: "always" | "hover";
  className?: string;
}

export function CardIndexNumber({
  index,
  theme = "light",
  reveal = "always",
  className,
}: CardIndexNumberProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute right-5 top-5 font-mono text-3xl font-bold leading-none tracking-tight",
        slowTransition,
        theme === "light"
          ? reveal === "hover"
            ? "text-[#0A0A0F]/10 opacity-0 group-hover:opacity-100 group-hover:text-brand-accent/25"
            : "text-[#0A0A0F]/12 group-hover:text-brand-accent/25"
          : "text-white/20 group-hover:text-brand-accent",
        className,
      )}
    >
      {String(index).padStart(2, "0")}
    </span>
  );
}

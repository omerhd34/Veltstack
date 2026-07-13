import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type LogoVariant = "navbar" | "footer";

interface LogoProps {
  className?: string;
  variant?: LogoVariant;
  href?: string;
  ignoreOverlay?: boolean;
}

const textVariants: Record<LogoVariant, string> = {
  navbar:
    "font-(family-name:--font-logo) text-[1.75rem] leading-none tracking-[0.02em] text-foreground min-[400px]:text-[1.875rem] sm:text-[2.25rem] md:text-[2.5rem] xl:text-[2.625rem] 2xl:text-[2.75rem]",
  footer:
    "font-(family-name:--font-logo) text-xl tracking-[0.02em] sm:text-2xl",
};

export function Logo({
  className,
  variant = "navbar",
  href = "/",
  ignoreOverlay = false,
}: LogoProps) {
  const wrapperClassName = cn(
    "inline-flex origin-left select-none items-center gap-2 transition-transform duration-500 ease-out hover:scale-[1.04]",
    className,
  );

  return (
    <Link href={href} className={wrapperClassName}>
      <span
        className={cn(
          textVariants[variant],
          variant === "navbar" &&
            !ignoreOverlay &&
            "group-data-[overlay=true]/header:text-white",
        )}
      >
        Velt
        <span className="text-brand-accent">Stack</span>
      </span>
    </Link>
  );
}

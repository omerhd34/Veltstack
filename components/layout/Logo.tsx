import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type LogoVariant = "navbar" | "footer";

interface LogoProps {
  className?: string;
  variant?: LogoVariant;
  href?: string;
}

const textVariants: Record<LogoVariant, string> = {
  navbar:
    "font-(family-name:--font-logo) text-[2.125rem] leading-none tracking-[0.02em] text-foreground group-data-[overlay=true]/header:text-white sm:text-[2.75rem]",
  footer: "font-(family-name:--font-logo) text-lg tracking-[0.02em] sm:text-xl",
};

export function Logo({ className, variant = "navbar", href = "/" }: LogoProps) {
  const wrapperClassName = cn(
    "inline-flex origin-left select-none items-center gap-2 transition-transform duration-500 ease-out hover:scale-[1.04]",
    className,
  );

  return (
    <Link href={href} className={wrapperClassName}>
      <span className={textVariants[variant]}>
        Velt
        <span className="text-brand-accent">Stack</span>
      </span>
    </Link>
  );
}

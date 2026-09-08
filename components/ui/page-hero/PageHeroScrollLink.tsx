import { LuChevronDown } from "react-icons/lu";
import { cn } from "@/lib/utils";

interface PageHeroScrollLinkProps {
  href: string;
  label: string;
  className?: string;
}

export function PageHeroScrollLink({
  href,
  label,
  className,
}: PageHeroScrollLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "flex flex-col items-center gap-1.5 text-emerald-300/70 transition-colors hover:text-emerald-300",
        className,
      )}
    >
      <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em]">
        {label}
      </span>
      <LuChevronDown className="size-4 animate-bounce" aria-hidden />
    </a>
  );
}

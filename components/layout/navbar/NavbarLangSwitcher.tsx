"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface NavbarLangSwitcherProps {
  className?: string;
}

export function NavbarLangSwitcher({ className }: NavbarLangSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const tNav = useTranslations("nav");

  const nextLocale = locale === "tr" ? "en" : "tr";

  return (
    <Link
      href={pathname}
      locale={nextLocale}
      className={cn(
        "group relative inline-flex size-11 shrink-0 items-center justify-center rounded-full p-[2px]",
        className,
      )}
      aria-label={nextLocale === "en" ? tNav("switchToEn") : tNav("switchToTr")}
    >
      <span
        className="absolute inset-0 rounded-full bg-border opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-[spin_1.2s_linear_infinite] motion-reduce:group-hover:animate-none"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, var(--border-trace-stroke) 300deg, transparent 360deg)",
        }}
        aria-hidden
      />
      <span className="relative flex size-full items-center justify-center rounded-full border border-border/60 bg-foreground text-xs font-semibold uppercase tracking-wide text-background">
        {locale.toUpperCase()}
      </span>
    </Link>
  );
}

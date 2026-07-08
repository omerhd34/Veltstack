"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { NavbarActionLink } from "./NavbarActionLink";

interface NavbarLangSwitcherProps {
  className?: string;
}

export function NavbarLangSwitcher({ className }: NavbarLangSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const tNav = useTranslations("nav");

  const nextLocale = locale === "tr" ? "en" : "tr";

  return (
    <NavbarActionLink
      href={pathname}
      locale={nextLocale}
      className={cn("size-11", className)}
      innerClassName="text-xs font-semibold uppercase tracking-wide"
      ariaLabel={
        nextLocale === "en" ? tNav("switchToEn") : tNav("switchToTr")
      }
    >
      {locale.toUpperCase()}
    </NavbarActionLink>
  );
}

"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { saveLocaleSwitchScroll } from "@/lib/locale-scroll";
import { cn } from "@/lib/utils";
import { NavbarActionLink } from "./NavbarActionLink";

interface NavbarLangSwitcherProps {
  className?: string;
}

function LocaleFlag({ locale }: { locale: "tr" | "en" }) {
  return (
    <span className="inline-flex size-4 shrink-0 items-center justify-center overflow-hidden rounded-full">
      <Image
        src={`/images/${locale}.png`}
        alt=""
        width={16}
        height={16}
        className="block size-4 object-cover"
        aria-hidden
      />
    </span>
  );
}

export function NavbarLangSwitcher({ className }: NavbarLangSwitcherProps) {
  const locale = useLocale() as "tr" | "en";
  const pathname = usePathname();
  const tNav = useTranslations("nav");

  const nextLocale = locale === "tr" ? "en" : "tr";

  return (
    <NavbarActionLink
      href={pathname}
      locale={nextLocale}
      scroll={false}
      onClick={saveLocaleSwitchScroll}
      className={cn("h-11 w-auto min-w-11 px-4.5", className)}
      innerClassName="text-base font-semibold uppercase tracking-[-0.01em]"
      contentClassName="gap-2.5"
      ariaLabel={nextLocale === "en" ? tNav("switchToEn") : tNav("switchToTr")}
    >
      <LocaleFlag locale={locale} />
      {locale.toUpperCase()}
    </NavbarActionLink>
  );
}

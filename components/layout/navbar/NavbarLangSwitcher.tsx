"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { saveLocaleSwitchScroll } from "@/lib/locale-scroll";
import { cn } from "@/lib/utils";
import { NavbarActionLink } from "./NavbarActionLink";

interface NavbarLangSwitcherProps {
  className?: string;
  solid?: boolean;
  labelStyle?: "code" | "full";
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

export function NavbarLangSwitcher({
  className,
  solid = false,
  labelStyle = "code",
}: NavbarLangSwitcherProps) {
  const locale = useLocale() as "tr" | "en";
  const pathname = usePathname();
  const tNav = useTranslations("nav");

  const nextLocale = locale === "tr" ? "en" : "tr";
  const label =
    labelStyle === "full"
      ? locale === "tr"
        ? tNav("localeTr")
        : tNav("localeEn")
      : locale.toUpperCase();

  return (
    <NavbarActionLink
      href={pathname}
      locale={nextLocale}
      scroll={false}
      onClick={saveLocaleSwitchScroll}
      solid={solid}
      className={cn("h-11 w-auto min-w-11", className)}
      innerClassName={cn(
        "px-4 text-base font-semibold tracking-[-0.01em]",
        labelStyle === "code" && "uppercase",
      )}
      contentClassName="gap-2.5 justify-center"
      ariaLabel={nextLocale === "en" ? tNav("switchToEn") : tNav("switchToTr")}
    >
      <LocaleFlag locale={locale} />
      {label}
    </NavbarActionLink>
  );
}

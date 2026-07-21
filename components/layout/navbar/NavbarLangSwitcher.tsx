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

function LocaleFlag({
  locale,
  background = false,
}: {
  locale: "tr" | "en";
  background?: boolean;
}) {
  return (
    <span
      className={cn(
        "overflow-hidden",
        background
          ? "absolute inset-0 rounded-[inherit]"
          : "relative inline-flex size-6 shrink-0 rounded-full",
      )}
    >
      <Image
        src={`/images/${locale}.png`}
        alt=""
        fill={background}
        width={background ? undefined : 24}
        height={background ? undefined : 24}
        sizes={background ? "(min-width: 1200px) 40px, 100vw" : "24px"}
        className={background ? "object-cover" : "object-contain"}
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
  const fullLabel = locale === "tr" ? tNav("localeTr") : tNav("localeEn");

  return (
    <NavbarActionLink
      href={pathname}
      locale={nextLocale}
      scroll={false}
      onClick={saveLocaleSwitchScroll}
      solid={solid}
      className={cn(
        labelStyle === "full" ? "h-11 w-auto" : "h-10 w-10",
        className,
      )}
      innerClassName={cn(
        "relative overflow-hidden",
        labelStyle === "full" ? "px-4 text-base font-semibold" : "p-0",
      )}
      contentClassName={cn(
        labelStyle === "full"
          ? "gap-2.5 justify-center"
          : "absolute inset-0 overflow-hidden rounded-[inherit]",
      )}
      ariaLabel={nextLocale === "en" ? tNav("switchToEn") : tNav("switchToTr")}
    >
      <LocaleFlag locale={locale} background={labelStyle === "code"} />
      {labelStyle === "full" && fullLabel}
    </NavbarActionLink>
  );
}

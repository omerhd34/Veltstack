"use client";

import { LuMessageCircle } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { NavbarActionLink } from "./NavbarActionLink";

interface NavbarCtaProps {
  className?: string;
  onNavigate?: () => void;
}

export function NavbarCta({ className, onNavigate }: NavbarCtaProps) {
  const tNav = useTranslations("nav");

  return (
    <NavbarActionLink
      href="/iletisim"
      onClick={onNavigate}
      className={cn("h-11", className)}
      innerClassName="gap-2 px-4 text-xs font-semibold tracking-wide"
    >
      <LuMessageCircle className="size-4 shrink-0" aria-hidden />
      {tNav("cta")}
    </NavbarActionLink>
  );
}

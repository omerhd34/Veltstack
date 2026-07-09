"use client";

import { LuMessageCircle } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { stardustIcon } from "@/components/ui/interactive-hover";
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
      innerClassName="px-4 text-base font-semibold tracking-[-0.01em]"
      contentClassName="gap-2.5"
    >
      <span className={stardustIcon}>
        <LuMessageCircle className="size-4 shrink-0" aria-hidden />
      </span>
      {tNav("cta")}
    </NavbarActionLink>
  );
}

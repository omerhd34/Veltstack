"use client";

import { useEffect } from "react";
import { LuGithub, LuLinkedin, LuMail, LuPhone, LuX } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";
import { useUiStore } from "@/store/uiSlice";
import { Button } from "@/components/ui/shadcn";
import { cn } from "@/lib/utils";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarCta } from "./NavbarCta";
import { NavbarLangSwitcher } from "./NavbarLangSwitcher";
import { Logo } from "@/components/layout/Logo";

interface NavbarMobileMenuProps {
  className?: string;
}

export function NavbarMobileMenu({ className }: NavbarMobileMenuProps) {
  const mobileMenuOpen = useUiStore((state) => state.mobileMenuOpen);
  const setMobileMenuOpen = useUiStore((state) => state.setMobileMenuOpen);

  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-100 overflow-hidden xl:hidden",
        mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none",
        className,
      )}
      aria-hidden={!mobileMenuOpen}
      inert={!mobileMenuOpen ? true : undefined}
    >
      <div
        className={cn(
          "absolute inset-0 bg-foreground/25 backdrop-blur-sm transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100" : "opacity-0",
        )}
        onClick={closeMenu}
      />
      <div
        className={cn(
          "absolute top-0 right-0 flex h-dvh w-[calc(100%-2rem)] max-w-96 flex-col overflow-hidden bg-[#EDF6F1] shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menü"
      >
        <div className="flex h-18 shrink-0 items-center justify-between border-b border-brand-accent/15 px-4 sm:px-5">
          <Logo variant="navbar" ignoreOverlay />
          <Button
            variant="ghost"
            size="icon-sm"
            type="button"
            className="size-11 justify-end rounded-full [&_svg:not([class*='size-'])]:size-5"
            onClick={closeMenu}
            aria-label="Menüyü kapat"
          >
            <LuX className="size-5" />
          </Button>
        </div>
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="scrollbar-thin min-h-0 flex-1 overflow-y-auto px-3 py-5 [scrollbar-color:color-mix(in_oklab,var(--color-brand-accent)_55%,transparent)_transparent] sm:px-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-brand-accent/55 [&::-webkit-scrollbar-track]:bg-transparent">
            <NavbarLinks
              orientation="vertical"
              className="[&_a]:text-sm [&_button]:mr-2 [&_button]:justify-end"
              onNavigate={closeMenu}
            />
          </div>
          <div className="flex shrink-0 flex-col gap-3 border-t border-brand-accent/15 p-4">
            <div className="grid grid-cols-5 gap-2">
              <Link
                href="tel:+905078492903"
                aria-label="Telefon"
                className="flex h-12 items-center justify-center rounded-full border border-brand-accent/15 bg-white/40 text-brand-accent transition-colors hover:border-brand-accent hover:bg-brand-accent hover:text-white"
              >
                <LuPhone className="size-4.5" aria-hidden />
              </Link>
              <Link
                href="https://wa.me/905078492903"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-12 items-center justify-center rounded-full border border-brand-accent/15 bg-white/40 text-brand-accent transition-colors hover:border-brand-accent hover:bg-brand-accent hover:text-white"
              >
                <FaWhatsapp className="size-4.5" aria-hidden />
              </Link>
              <Link
                href="mailto:veltstack@outlook.com"
                aria-label="E-posta"
                className="flex h-12 items-center justify-center rounded-full border border-brand-accent/15 bg-white/40 text-brand-accent transition-colors hover:border-brand-accent hover:bg-brand-accent hover:text-white"
              >
                <LuMail className="size-4.5" aria-hidden />
              </Link>
              <Link
                href="https://www.linkedin.com/in/omerhd1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 items-center justify-center rounded-full border border-brand-accent/15 bg-white/40 text-brand-accent transition-colors hover:border-brand-accent hover:bg-brand-accent hover:text-white"
              >
                <LuLinkedin className="size-4.5" aria-hidden />
              </Link>
              <Link
                href="https://github.com/omerhd34"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 items-center justify-center rounded-full border border-brand-accent/15 bg-white/40 text-brand-accent transition-colors hover:border-brand-accent hover:bg-brand-accent hover:text-white"
              >
                <LuGithub className="size-4.5" aria-hidden />
              </Link>
            </div>
            <NavbarLangSwitcher
              solid
              labelStyle="full"
              className="h-12 w-full **:text-sm"
            />
            <NavbarCta
              solid
              className="h-12 w-full **:text-sm"
              onNavigate={closeMenu}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

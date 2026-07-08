"use client";

import { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { usePathname } from "@/i18n/navigation";
import { useUiStore } from "@/store/uiSlice";
import { Button } from "@/components/ui/shadcn";
import { Logo } from "@/components/layout/Logo";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { cn } from "@/lib/utils";
import { NavbarDesktopLinks } from "./NavbarDesktopLinks";
import { NavbarMobileMenu } from "./NavbarMobileMenu";
import { NavbarLangSwitcher } from "./NavbarLangSwitcher";
import { NavbarCta } from "./NavbarCta";
import { NavbarServicesMegaMenuPanel } from "./NavbarServicesMegaMenuPanel";
import { NavbarProjectsMegaMenuPanel } from "./NavbarProjectsMegaMenuPanel";
import { NavbarBlogMegaMenuPanel } from "./NavbarBlogMegaMenuPanel";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuOpen = useUiStore((state) => state.mobileMenuOpen);
  const setMobileMenuOpen = useUiStore((state) => state.setMobileMenuOpen);
  const servicesMenuOpen = useUiStore((state) => state.servicesMenuOpen);
  const projectsMenuOpen = useUiStore((state) => state.projectsMenuOpen);
  const blogMenuOpen = useUiStore((state) => state.blogMenuOpen);
  const openServicesMenu = useUiStore((state) => state.openServicesMenu);
  const scheduleCloseServicesMenu = useUiStore(
    (state) => state.scheduleCloseServicesMenu,
  );
  const openProjectsMenu = useUiStore((state) => state.openProjectsMenu);
  const scheduleCloseProjectsMenu = useUiStore(
    (state) => state.scheduleCloseProjectsMenu,
  );
  const openBlogMenu = useUiStore((state) => state.openBlogMenu);
  const scheduleCloseBlogMenu = useUiStore(
    (state) => state.scheduleCloseBlogMenu,
  );

  const megaMenuOpen = servicesMenuOpen || projectsMenuOpen || blogMenuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overlay = isHome && !scrolled && !megaMenuOpen;

  return (
    <header
      data-overlay={overlay ? "true" : undefined}
      className={cn(
        "group/header top-0 z-50 w-full transition-[background-color,box-shadow,border-color] duration-300",
        isHome ? "fixed" : "sticky border-b",
        overlay
          ? "border-b-0 bg-transparent shadow-none"
          : cn(
              "border-b bg-background",
              scrolled || megaMenuOpen
                ? "border-border shadow-md"
                : "border-border/40 shadow-none",
            ),
        className,
      )}
    >
      <SiteContainer className="relative flex min-h-18 items-center justify-between gap-4">
        <Logo variant="navbar" className="shrink-0" />

        <NavbarDesktopLinks className="absolute left-1/2 hidden -translate-x-1/2 lg:flex" />

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <NavbarLangSwitcher />
          <NavbarCta className="hidden md:inline-flex" />
          <Button
            variant="outline"
            size="icon-sm"
            type="button"
            className={cn(
              "rounded-full lg:hidden",
              overlay &&
                "border-white/40 bg-white/10 text-white hover:bg-white/15 hover:text-white",
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileMenuOpen}
          >
            <LuMenu />
          </Button>
        </div>
      </SiteContainer>

      <div
        data-state={servicesMenuOpen ? "open" : "closed"}
        className="navbar-mega-menu-panel absolute inset-x-0 top-full z-50 isolate overflow-hidden border-t border-border bg-background shadow-md data-[state=open]:overflow-visible"
        onMouseEnter={openServicesMenu}
        onMouseLeave={scheduleCloseServicesMenu}
        aria-hidden={!servicesMenuOpen}
      >
        <NavbarServicesMegaMenuPanel />
      </div>

      <div
        data-state={projectsMenuOpen ? "open" : "closed"}
        className="navbar-mega-menu-panel absolute inset-x-0 top-full z-50 isolate overflow-hidden border-t border-border bg-background shadow-md data-[state=open]:overflow-visible"
        onMouseEnter={openProjectsMenu}
        onMouseLeave={scheduleCloseProjectsMenu}
        aria-hidden={!projectsMenuOpen}
      >
        <NavbarProjectsMegaMenuPanel />
      </div>

      <div
        data-state={blogMenuOpen ? "open" : "closed"}
        className="navbar-mega-menu-panel absolute inset-x-0 top-full z-50 isolate overflow-hidden border-t border-border bg-background shadow-md data-[state=open]:overflow-visible"
        onMouseEnter={openBlogMenu}
        onMouseLeave={scheduleCloseBlogMenu}
        aria-hidden={!blogMenuOpen}
      >
        <NavbarBlogMegaMenuPanel />
      </div>

      <NavbarMobileMenu />
    </header>
  );
}

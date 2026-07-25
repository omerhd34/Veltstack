/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
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
import { NavbarFaqMegaMenuPanel } from "./NavbarFaqMegaMenuPanel";
import { isHeroOverlayPath } from "./navbar-overlay";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const heroOverlayPage = isHeroOverlayPath(pathname);
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hasPageHero, setHasPageHero] = useState(heroOverlayPage);
  const mobileMenuOpen = useUiStore((state) => state.mobileMenuOpen);
  const setMobileMenuOpen = useUiStore((state) => state.setMobileMenuOpen);
  const servicesMenuOpen = useUiStore((state) => state.servicesMenuOpen);
  const projectsMenuOpen = useUiStore((state) => state.projectsMenuOpen);
  const blogMenuOpen = useUiStore((state) => state.blogMenuOpen);
  const faqMenuOpen = useUiStore((state) => state.faqMenuOpen);
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
  const openFaqMenu = useUiStore((state) => state.openFaqMenu);
  const scheduleCloseFaqMenu = useUiStore(
    (state) => state.scheduleCloseFaqMenu,
  );

  const megaMenuOpen =
    servicesMenuOpen || projectsMenuOpen || blogMenuOpen || faqMenuOpen;

  useLayoutEffect(() => {
    if (!heroOverlayPage) {
      setHasPageHero(false);
      const updateScrolled = () => setScrolled(window.scrollY > 48);
      updateScrolled();
      window.addEventListener("scroll", updateScrolled, { passive: true });
      return () => window.removeEventListener("scroll", updateScrolled);
    }

    const hero = document.querySelector<HTMLElement>("[data-page-hero]");
    if (!hero) {
      setHasPageHero(false);
      setScrolled(true);
      return;
    }

    setHasPageHero(true);
    setScrolled(false);

    const headerHeight = headerRef.current?.offsetHeight ?? 72;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `-${headerHeight + 1}px 0px 0px 0px`,
      },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  const overlay = heroOverlayPage && hasPageHero && !scrolled;
  const fixedOverlayNav = heroOverlayPage && hasPageHero;

  const megaMenuPanelClass = cn(
    "navbar-mega-menu-panel absolute left-1/2 top-full z-50 isolate mt-2 w-[min(calc(100%-1.5rem),50rem)] -translate-x-1/2 overflow-hidden rounded-2xl backdrop-blur-xl data-[state=open]:overflow-visible",
    overlay && "navbar-mega-menu-panel--overlay",
  );

  return (
    <header
      ref={headerRef}
      data-overlay={overlay ? "true" : undefined}
      className={cn(
        "group/header top-0 z-50 w-full transition-[background-color,box-shadow,border-color] duration-300",
        fixedOverlayNav ? "fixed" : "sticky border-b",
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
      <SiteContainer className="relative flex min-h-18 items-center justify-between gap-3 sm:gap-4">
        <Logo variant="navbar" className="shrink-0" />

        <NavbarDesktopLinks className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 xl:flex" />

        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3">
          <NavbarLangSwitcher className="hidden xl:inline-flex" />
          <NavbarCta className="hidden md:inline-flex" />
          <Button
            variant="ghost"
            size="icon"
            type="button"
            className={cn(
              "size-11 justify-end rounded-none border-0 bg-transparent shadow-none hover:bg-transparent xl:hidden [&_svg:not([class*='size-'])]:size-6",
              overlay && "text-white hover:text-white",
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileMenuOpen}
          >
            <RiMenu3Line />
          </Button>
        </div>
      </SiteContainer>

      <div
        data-state={servicesMenuOpen ? "open" : "closed"}
        className={megaMenuPanelClass}
        onMouseEnter={openServicesMenu}
        onMouseLeave={scheduleCloseServicesMenu}
        aria-hidden={!servicesMenuOpen}
        inert={!servicesMenuOpen ? true : undefined}
      >
        <NavbarServicesMegaMenuPanel />
      </div>

      <div
        data-state={projectsMenuOpen ? "open" : "closed"}
        className={megaMenuPanelClass}
        onMouseEnter={openProjectsMenu}
        onMouseLeave={scheduleCloseProjectsMenu}
        aria-hidden={!projectsMenuOpen}
        inert={!projectsMenuOpen ? true : undefined}
      >
        <NavbarProjectsMegaMenuPanel />
      </div>

      <div
        data-state={blogMenuOpen ? "open" : "closed"}
        className={megaMenuPanelClass}
        onMouseEnter={openBlogMenu}
        onMouseLeave={scheduleCloseBlogMenu}
        aria-hidden={!blogMenuOpen}
        inert={!blogMenuOpen ? true : undefined}
      >
        <NavbarBlogMegaMenuPanel />
      </div>

      <div
        data-state={faqMenuOpen ? "open" : "closed"}
        className={megaMenuPanelClass}
        onMouseEnter={openFaqMenu}
        onMouseLeave={scheduleCloseFaqMenu}
        aria-hidden={!faqMenuOpen}
        inert={!faqMenuOpen ? true : undefined}
      >
        <NavbarFaqMegaMenuPanel />
      </div>

      <NavbarMobileMenu />
    </header>
  );
}

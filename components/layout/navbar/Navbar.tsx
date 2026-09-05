/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
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
import { isHeroOverlayPath } from "./navbar-overlay";

const NavbarServicesMegaMenuPanel = dynamic(() =>
  import("./NavbarServicesMegaMenuPanel").then(
    (mod) => mod.NavbarServicesMegaMenuPanel,
  ),
);
const NavbarProjectsMegaMenuPanel = dynamic(() =>
  import("./NavbarProjectsMegaMenuPanel").then(
    (mod) => mod.NavbarProjectsMegaMenuPanel,
  ),
);
const NavbarBlogMegaMenuPanel = dynamic(() =>
  import("./NavbarBlogMegaMenuPanel").then(
    (mod) => mod.NavbarBlogMegaMenuPanel,
  ),
);
const NavbarFaqMegaMenuPanel = dynamic(() =>
  import("./NavbarFaqMegaMenuPanel").then((mod) => mod.NavbarFaqMegaMenuPanel),
);

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const heroOverlayPage = isHeroOverlayPath(pathname);
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

  const [showDesktopNav, setShowDesktopNav] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const megaMenuOpen =
    servicesMenuOpen || projectsMenuOpen || blogMenuOpen || faqMenuOpen;

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1200px)");
    const sync = () => {
      const isDesktop = desktopQuery.matches;
      setShowDesktopNav(isDesktop);
      setShowMobileNav(!isDesktop);
    };
    sync();
    desktopQuery.addEventListener("change", sync);
    return () => desktopQuery.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!heroOverlayPage) {
      setHasPageHero(false);
      const updateScrolled = () => setScrolled(window.scrollY > 48);
      updateScrolled();
      window.addEventListener("scroll", updateScrolled, { passive: true });
      return () => window.removeEventListener("scroll", updateScrolled);
    }

    let cancelled = false;
    let io: IntersectionObserver | null = null;

    const bindHero = (hero: HTMLElement) => {
      if (cancelled) return;
      setHasPageHero(true);
      setScrolled(false);

      io = new IntersectionObserver(
        ([entry]) => {
          setScrolled(!entry.isIntersecting);
        },
        {
          root: null,
          threshold: 0,
          rootMargin: "-73px 0px 0px 0px",
        },
      );
      io.observe(hero);
    };

    setHasPageHero(true);
    setScrolled(true);

    const hero = document.querySelector<HTMLElement>("[data-page-hero]");
    if (hero) {
      bindHero(hero);
      return () => {
        cancelled = true;
        io?.disconnect();
      };
    }

    const mo = new MutationObserver(() => {
      const el = document.querySelector<HTMLElement>("[data-page-hero]");
      if (!el) return;
      mo.disconnect();
      bindHero(el);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelled = true;
      mo.disconnect();
      io?.disconnect();
    };
  }, [pathname, heroOverlayPage]);

  const overlay = heroOverlayPage && hasPageHero && !scrolled;
  const fixedOverlayNav = heroOverlayPage && hasPageHero;

  const megaMenuPanelClass = cn(
    "navbar-mega-menu-panel absolute left-1/2 top-full z-50 isolate mt-2 w-[min(calc(100%-1.5rem),50rem)] -translate-x-1/2 overflow-hidden rounded-2xl backdrop-blur-xl data-[state=open]:overflow-visible",
    overlay && "navbar-mega-menu-panel--overlay",
  );

  return (
    <header
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

      {showDesktopNav && servicesMenuOpen ? (
        <div
          data-state="open"
          className={megaMenuPanelClass}
          onMouseEnter={openServicesMenu}
          onMouseLeave={scheduleCloseServicesMenu}
        >
          <NavbarServicesMegaMenuPanel />
        </div>
      ) : null}

      {showDesktopNav && projectsMenuOpen ? (
        <div
          data-state="open"
          className={megaMenuPanelClass}
          onMouseEnter={openProjectsMenu}
          onMouseLeave={scheduleCloseProjectsMenu}
        >
          <NavbarProjectsMegaMenuPanel />
        </div>
      ) : null}

      {showDesktopNav && blogMenuOpen ? (
        <div
          data-state="open"
          className={megaMenuPanelClass}
          onMouseEnter={openBlogMenu}
          onMouseLeave={scheduleCloseBlogMenu}
        >
          <NavbarBlogMegaMenuPanel />
        </div>
      ) : null}

      {showDesktopNav && faqMenuOpen ? (
        <div
          data-state="open"
          className={megaMenuPanelClass}
          onMouseEnter={openFaqMenu}
          onMouseLeave={scheduleCloseFaqMenu}
        >
          <NavbarFaqMegaMenuPanel />
        </div>
      ) : null}

      {showMobileNav || mobileMenuOpen ? <NavbarMobileMenu /> : null}
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
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
import { NavbarServicesMegaMenuPanel } from "./NavbarServicesMegaMenuPanel";
import { NavbarProjectsMegaMenuPanel } from "./NavbarProjectsMegaMenuPanel";
import { NavbarBlogMegaMenuPanel } from "./NavbarBlogMegaMenuPanel";
import { NavbarFaqMegaMenuPanel } from "./NavbarFaqMegaMenuPanel";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const heroOverlayPage = isHeroOverlayPath(pathname);
  const [scrollNav, setScrollNav] = useState({ pathname, scrolled: false });
  if (scrollNav.pathname !== pathname) {
    setScrollNav({ pathname, scrolled: false });
  }
  const scrolled = scrollNav.scrolled;
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
    const measure = () => {
      if (!heroOverlayPage) {
        const next = window.scrollY > 48;
        setScrollNav((state) =>
          state.pathname === pathname && state.scrolled === next
            ? state
            : { pathname, scrolled: next },
        );
        return;
      }

      const hero = document.querySelector<HTMLElement>("[data-page-hero]");
      if (!hero) return;

      const next = hero.getBoundingClientRect().bottom <= 72;
      setScrollNav((state) =>
        state.pathname === pathname && state.scrolled === next
          ? state
          : { pathname, scrolled: next },
      );
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [pathname, heroOverlayPage]);

  const overlay = heroOverlayPage && !scrolled;
  const fixedOverlayNav = heroOverlayPage;

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

      {showDesktopNav ? (
        <>
          <div
            data-state={servicesMenuOpen ? "open" : "closed"}
            className={megaMenuPanelClass}
            onMouseEnter={openServicesMenu}
            onMouseLeave={scheduleCloseServicesMenu}
          >
            <NavbarServicesMegaMenuPanel />
          </div>
          <div
            data-state={projectsMenuOpen ? "open" : "closed"}
            className={megaMenuPanelClass}
            onMouseEnter={openProjectsMenu}
            onMouseLeave={scheduleCloseProjectsMenu}
          >
            <NavbarProjectsMegaMenuPanel />
          </div>
          <div
            data-state={blogMenuOpen ? "open" : "closed"}
            className={megaMenuPanelClass}
            onMouseEnter={openBlogMenu}
            onMouseLeave={scheduleCloseBlogMenu}
          >
            <NavbarBlogMegaMenuPanel />
          </div>
          <div
            data-state={faqMenuOpen ? "open" : "closed"}
            className={megaMenuPanelClass}
            onMouseEnter={openFaqMenu}
            onMouseLeave={scheduleCloseFaqMenu}
          >
            <NavbarFaqMegaMenuPanel />
          </div>
        </>
      ) : null}

      {showMobileNav || mobileMenuOpen ? <NavbarMobileMenu /> : null}
    </header>
  );
}

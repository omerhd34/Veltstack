"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/store/uiSlice";
import { NavCaretIcon } from "./NavCaretIcon";
import { navItemClass, navItemLabelClass } from "./nav-link-styles";

interface NavbarDesktopLinksProps {
  className?: string;
}

export function NavbarDesktopLinks({ className }: NavbarDesktopLinksProps) {
  const tNav = useTranslations("nav");
  const pathname = usePathname();
  const servicesMenuOpen = useUiStore((state) => state.servicesMenuOpen);
  const projectsMenuOpen = useUiStore((state) => state.projectsMenuOpen);
  const blogMenuOpen = useUiStore((state) => state.blogMenuOpen);
  const faqMenuOpen = useUiStore((state) => state.faqMenuOpen);
  const setServicesMenuOpen = useUiStore((state) => state.setServicesMenuOpen);
  const setProjectsMenuOpen = useUiStore((state) => state.setProjectsMenuOpen);
  const setBlogMenuOpen = useUiStore((state) => state.setBlogMenuOpen);
  const setFaqMenuOpen = useUiStore((state) => state.setFaqMenuOpen);
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

  const trailingLinks = [
    { href: "/hakkimizda", label: tNav("about") },
    { href: "/iletisim", label: tNav("contact") },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const servicesActive =
    servicesMenuOpen ||
    pathname === "/hizmetler" ||
    pathname.startsWith("/hizmetler/");

  const projectsActive =
    projectsMenuOpen ||
    pathname === "/projeler" ||
    pathname.startsWith("/projeler/");

  const blogActive =
    blogMenuOpen ||
    pathname === "/makaleler" ||
    pathname.startsWith("/makaleler/");

  const faqActive =
    faqMenuOpen || pathname === "/sss" || pathname.startsWith("/sss/");

  useEffect(() => {
    setServicesMenuOpen(false);
    setProjectsMenuOpen(false);
    setBlogMenuOpen(false);
    setFaqMenuOpen(false);
  }, [
    pathname,
    setServicesMenuOpen,
    setProjectsMenuOpen,
    setBlogMenuOpen,
    setFaqMenuOpen,
  ]);

  return (
    <nav
      className={cn("items-center gap-1 xl:gap-1.5", className)}
      aria-label="Ana navigasyon"
    >
      <div
        className="relative h-full"
        onMouseEnter={openServicesMenu}
        onMouseLeave={scheduleCloseServicesMenu}
        onFocusCapture={openServicesMenu}
      >
        <Link
          href="/hizmetler"
          aria-expanded={servicesMenuOpen}
          aria-haspopup="true"
          className={navItemClass(servicesActive)}
        >
          <span className={navItemLabelClass(servicesActive)}>
            {tNav("services")}
          </span>
          <NavCaretIcon open={servicesMenuOpen} active={servicesActive} />
        </Link>
      </div>

      <div
        className="relative h-full"
        onMouseEnter={openProjectsMenu}
        onMouseLeave={scheduleCloseProjectsMenu}
        onFocusCapture={openProjectsMenu}
      >
        <Link
          href="/projeler"
          aria-expanded={projectsMenuOpen}
          aria-haspopup="true"
          className={navItemClass(projectsActive)}
        >
          <span className={navItemLabelClass(projectsActive)}>
            {tNav("projects")}
          </span>
          <NavCaretIcon open={projectsMenuOpen} active={projectsActive} />
        </Link>
      </div>

      <div
        className="relative h-full"
        onMouseEnter={openBlogMenu}
        onMouseLeave={scheduleCloseBlogMenu}
        onFocusCapture={openBlogMenu}
      >
        <Link
          href="/makaleler"
          aria-expanded={blogMenuOpen}
          aria-haspopup="true"
          className={navItemClass(blogActive)}
        >
          <span className={navItemLabelClass(blogActive)}>{tNav("blog")}</span>
          <NavCaretIcon open={blogMenuOpen} active={blogActive} />
        </Link>
      </div>

      <div
        className="relative h-full"
        onMouseEnter={openFaqMenu}
        onMouseLeave={scheduleCloseFaqMenu}
        onFocusCapture={openFaqMenu}
      >
        <Link
          href="/sss"
          aria-expanded={faqMenuOpen}
          aria-haspopup="true"
          className={navItemClass(faqActive)}
        >
          <span className={navItemLabelClass(faqActive)}>{tNav("faq")}</span>
          <NavCaretIcon open={faqMenuOpen} active={faqActive} />
        </Link>
      </div>

      {trailingLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={navItemClass(isActive(link.href))}
        >
          <span className={navItemLabelClass(isActive(link.href))}>
            {link.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}

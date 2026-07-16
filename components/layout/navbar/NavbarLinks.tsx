"use client";

import { useState } from "react";
import type { IconType } from "react-icons";
import { NavCaretIcon } from "./NavCaretIcon";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn, isExternalHref } from "@/lib/utils";
import { getNavBlogPosts } from "@/components/pages/blog/blog-data";
import { getFooterBlogCategoryIcon } from "@/components/layout/footer/footer-config";
import { serviceItems } from "@/components/sections/services/service-items";
import { projectItems } from "@/components/sections/projects/project-items";
import type { NavServiceKey } from "./nav-services";
import type { NavProjectKey } from "./nav-projects";
import { navItemClass } from "./nav-link-styles";

function MobileNavIcon({ icon: Icon }: { icon: IconType }) {
  return (
    <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-brand-accent/10 text-brand-accent ring-1 ring-brand-accent/15">
      <Icon className="size-3.5" strokeWidth={1.75} aria-hidden />
    </span>
  );
}

interface NavbarLinksProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
}

export function NavbarLinks({
  className,
  orientation = "horizontal",
  onNavigate,
}: NavbarLinksProps) {
  const tNav = useTranslations("nav");
  const locale = useLocale() as "tr" | "en";
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const navBlogPosts = getNavBlogPosts(locale);

  const serviceLabels: Record<NavServiceKey, string> = {
    serviceWeb: tNav("serviceWeb"),
    serviceRefresh: tNav("serviceRefresh"),
    serviceApp: tNav("serviceApp"),
    serviceSeo: tNav("serviceSeo"),
    serviceAudit: tNav("serviceAudit"),
    serviceMaintenance: tNav("serviceMaintenance"),
  };

  const projectLabels: Record<NavProjectKey, string> = {
    projectIqfinans: tNav("projectIqfinans"),
    projectYazici: tNav("projectYazici"),
    projectFablessi: tNav("projectFablessi"),
    projectUzmanPsikolog: tNav("projectUzmanPsikolog"),
    projectPortfolio: tNav("projectPortfolio"),
    projectOnlinemuhasebe: tNav("projectOnlinemuhasebe"),
  };

  const links = [
    { href: "/hakkimizda", label: tNav("about") },
    { href: "/iletisim", label: tNav("contact") },
  ];

  const isVertical = orientation === "vertical";

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const servicesActive =
    pathname === "/hizmetler" || pathname.startsWith("/hizmetler/");
  const projectsActive =
    pathname === "/projeler" || pathname.startsWith("/projeler/");
  const faqActive = pathname === "/sss" || pathname.startsWith("/sss/");
  const blogActive = pathname === "/blog" || pathname.startsWith("/blog/");

  if (!isVertical) {
    return null;
  }

  return (
    <nav className={className} aria-label="Ana navigasyon">
      <ul className="flex w-full flex-col gap-1.5">
        <li>
          <div className="flex items-center gap-1">
            <Link
              href="/hizmetler"
              onClick={onNavigate}
              className={cn(navItemClass(servicesActive, "mobile"), "flex-1")}
            >
              {tNav("services")}
            </Link>
            <button
              type="button"
              onClick={() => setServicesOpen((open) => !open)}
              className="flex size-11 shrink-0 items-center justify-center rounded-xl text-foreground/70 transition-colors hover:bg-brand-accent/10 hover:text-foreground"
              aria-expanded={servicesOpen}
              aria-label={tNav("services")}
            >
              <NavCaretIcon
                open={servicesOpen}
                variant="mobile"
                className="size-4"
              />
            </button>
          </div>
          {servicesOpen && (
            <ul className="mt-1.5 ml-2 flex flex-col gap-1 border-l-2 border-border/80 pl-3">
              {serviceItems.map((item) => {
                const navKey = item.navDescKey.replace(
                  /Desc$/,
                  "",
                ) as NavServiceKey;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className={cn(
                        navItemClass(isActive(item.href), "mobile-nested"),
                        "gap-2.5",
                      )}
                    >
                      <MobileNavIcon icon={item.icon} />
                      {serviceLabels[navKey]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </li>

        <li>
          <div className="flex items-center gap-1">
            <Link
              href="/projeler"
              onClick={onNavigate}
              className={cn(navItemClass(projectsActive, "mobile"), "flex-1")}
            >
              {tNav("projects")}
            </Link>
            <button
              type="button"
              onClick={() => setProjectsOpen((open) => !open)}
              className="flex size-11 shrink-0 items-center justify-center rounded-xl text-foreground/70 transition-colors hover:bg-brand-accent/10 hover:text-foreground"
              aria-expanded={projectsOpen}
              aria-label={tNav("projects")}
            >
              <NavCaretIcon
                open={projectsOpen}
                variant="mobile"
                className="size-4"
              />
            </button>
          </div>
          {projectsOpen && (
            <ul className="mt-1.5 ml-2 flex flex-col gap-1 border-l-2 border-border/80 pl-3">
              {projectItems.map((item) => {
                const navKey = item.navDescKey.replace(
                  /Desc$/,
                  "",
                ) as NavProjectKey;
                const className = cn(
                  navItemClass(
                    isExternalHref(item.href) ? false : isActive(item.href),
                    "mobile-nested",
                  ),
                  "gap-2.5",
                );
                const content = (
                  <>
                    <MobileNavIcon icon={item.icon} />
                    {projectLabels[navKey]}
                  </>
                );

                return (
                  <li key={item.href}>
                    {isExternalHref(item.href) ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onNavigate}
                        className={className}
                      >
                        {content}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onNavigate}
                        className={className}
                      >
                        {content}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </li>

        <li>
          <div className="flex items-center gap-1">
            <Link
              href="/blog"
              onClick={onNavigate}
              className={cn(navItemClass(blogActive, "mobile"), "flex-1")}
            >
              {tNav("blog")}
            </Link>
            <button
              type="button"
              onClick={() => setBlogOpen((open) => !open)}
              className="flex size-11 shrink-0 items-center justify-center rounded-xl text-foreground/70 transition-colors hover:bg-brand-accent/10 hover:text-foreground"
              aria-expanded={blogOpen}
              aria-label={tNav("blog")}
            >
              <NavCaretIcon
                open={blogOpen}
                variant="mobile"
                className="size-4"
              />
            </button>
          </div>
          {blogOpen && (
            <ul className="mt-1.5 ml-2 flex flex-col gap-1 border-l-2 border-border/80 pl-3">
              {navBlogPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    onClick={onNavigate}
                    className={cn(
                      navItemClass(
                        isActive(`/blog/${post.slug}`),
                        "mobile-nested",
                      ),
                      "gap-2.5",
                    )}
                  >
                    <MobileNavIcon
                      icon={getFooterBlogCategoryIcon(post.category)}
                    />
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <Link
            href="/sss"
            onClick={onNavigate}
            className={navItemClass(faqActive, "mobile")}
          >
            {tNav("faqMobile")}
          </Link>
        </li>

        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onNavigate}
              className={navItemClass(isActive(link.href), "mobile")}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

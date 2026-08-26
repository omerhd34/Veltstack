"use client";

import { useState, type ReactNode } from "react";
import type { IconType } from "react-icons";
import { NavCaretIcon } from "./NavCaretIcon";
import { useLocale, useTranslations } from "next-intl";
import { SoftPrefetchLink } from "@/components/ui/SoftPrefetchLink";
import { usePathname } from "@/i18n/navigation";
import { cn, isExternalHref } from "@/lib/utils";
import { getNavBlogPosts } from "@/components/pages/blog/blog-data";
import { getFooterBlogCategoryIcon } from "@/components/layout/footer/footer-config";
import { serviceItems } from "@/components/sections/services/service-items";
import { projectItems } from "@/components/sections/projects/project-items";
import {
  hasProjectHref,
} from "@/components/sections/projects/project-items";
import type { NavServiceKey } from "./nav-services";
import type { NavProjectKey } from "./nav-projects";
import { navItemClass } from "./nav-link-styles";

function MobileNavIcon({ icon: Icon }: { icon: IconType }) {
  return (
    <span className="flex size-7 shrink-0 items-center justify-center rounded-[10px] bg-brand-accent/10 text-brand-accent ring-1 ring-brand-accent/15">
      <Icon className="size-3.5" strokeWidth={1.75} aria-hidden />
    </span>
  );
}

function MobileNavTreeItem({
  isLast,
  children,
}: {
  isLast: boolean;
  children: ReactNode;
}) {
  return (
    <li className="mobile-nav-tree-item">
      <span className="mobile-nav-tree-guide" aria-hidden>
        <span
          className={cn(
            "mobile-nav-tree-stem",
            isLast && "mobile-nav-tree-stem--end",
          )}
        />
        <svg
          className="mobile-nav-tree-elbow"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 0C1 6 1 9 9 9H14"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </span>
      {children}
    </li>
  );
}

const mobileNestedListClass = "mobile-nav-tree";

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
  const [openSection, setOpenSection] = useState<
    "services" | "projects" | "blog" | null
  >(null);

  const toggleSection = (section: "services" | "projects" | "blog") => {
    setOpenSection((current) => (current === section ? null : section));
  };

  const servicesOpen = openSection === "services";
  const projectsOpen = openSection === "projects";
  const blogOpen = openSection === "blog";
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
    projectGardossi: tNav("projectGardossi"),
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
          <div
            className={cn(
              "flex items-center gap-1 rounded-xl",
              servicesActive && "bg-brand-accent/12",
            )}
          >
            <SoftPrefetchLink
              href="/hizmetler"
              onClick={onNavigate}
              className={cn(
                navItemClass(servicesActive, "mobile"),
                "flex-1",
                servicesActive && "bg-transparent",
              )}
            >
              {tNav("services")}
            </SoftPrefetchLink>
            <button
              type="button"
              onClick={() => toggleSection("services")}
              className="flex size-11 shrink-0 appearance-none items-center justify-center border-0 bg-transparent p-0 text-foreground/70 shadow-none outline-none ring-0 transition-colors hover:text-foreground focus:outline-none focus-visible:outline-none focus-visible:ring-0"
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
            <ul className={mobileNestedListClass}>
              {serviceItems.map((item, index) => {
                const navKey = item.navDescKey.replace(
                  /Desc$/,
                  "",
                ) as NavServiceKey;
                return (
                  <MobileNavTreeItem
                    key={item.href}
                    isLast={index === serviceItems.length - 1}
                  >
                    <SoftPrefetchLink
                      href={item.href}
                      onClick={onNavigate}
                      className={cn(
                        navItemClass(isActive(item.href), "mobile-nested"),
                        "gap-2.5",
                      )}
                    >
                      <MobileNavIcon icon={item.icon} />
                      {serviceLabels[navKey]}
                    </SoftPrefetchLink>
                  </MobileNavTreeItem>
                );
              })}
            </ul>
          )}
        </li>

        <li>
          <div
            className={cn(
              "flex items-center gap-1 rounded-xl",
              projectsActive && "bg-brand-accent/12",
            )}
          >
            <SoftPrefetchLink
              href="/projeler"
              onClick={onNavigate}
              className={cn(
                navItemClass(projectsActive, "mobile"),
                "flex-1",
                projectsActive && "bg-transparent",
              )}
            >
              {tNav("projects")}
            </SoftPrefetchLink>
            <button
              type="button"
              onClick={() => toggleSection("projects")}
              className="flex size-11 shrink-0 appearance-none items-center justify-center border-0 bg-transparent p-0 text-foreground/70 shadow-none outline-none ring-0 transition-colors hover:text-foreground focus:outline-none focus-visible:outline-none focus-visible:ring-0"
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
            <ul className={mobileNestedListClass}>
              {projectItems.filter(hasProjectHref).map((item, index, list) => {
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
                  <MobileNavTreeItem
                    key={item.href}
                    isLast={index === list.length - 1}
                  >
                    <SoftPrefetchLink
                      href={item.href}
                      {...(isExternalHref(item.href)
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      onClick={onNavigate}
                      className={className}
                    >
                      {content}
                    </SoftPrefetchLink>
                  </MobileNavTreeItem>
                );
              })}
            </ul>
          )}
        </li>

        <li>
          <div
            className={cn(
              "flex items-center gap-1 rounded-xl",
              blogActive && "bg-brand-accent/12",
            )}
          >
            <SoftPrefetchLink
              href="/blog"
              onClick={onNavigate}
              className={cn(
                navItemClass(blogActive, "mobile"),
                "flex-1",
                blogActive && "bg-transparent",
              )}
            >
              {tNav("blog")}
            </SoftPrefetchLink>
            <button
              type="button"
              onClick={() => toggleSection("blog")}
              className="flex size-11 shrink-0 appearance-none items-center justify-center border-0 bg-transparent p-0 text-foreground/70 shadow-none outline-none ring-0 transition-colors hover:text-foreground focus:outline-none focus-visible:outline-none focus-visible:ring-0"
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
            <ul className={mobileNestedListClass}>
              {navBlogPosts.map((post, index) => (
                <MobileNavTreeItem
                  key={post.slug}
                  isLast={index === navBlogPosts.length - 1}
                >
                  <SoftPrefetchLink
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
                  </SoftPrefetchLink>
                </MobileNavTreeItem>
              ))}
            </ul>
          )}
        </li>

        <li>
          <SoftPrefetchLink
            href="/sss"
            onClick={onNavigate}
            className={navItemClass(faqActive, "mobile")}
          >
            {tNav("faqMobile")}
          </SoftPrefetchLink>
        </li>

        {links.map((link) => (
          <li key={link.href}>
            <SoftPrefetchLink
              href={link.href}
              onClick={onNavigate}
              className={navItemClass(isActive(link.href), "mobile")}
            >
              {link.label}
            </SoftPrefetchLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

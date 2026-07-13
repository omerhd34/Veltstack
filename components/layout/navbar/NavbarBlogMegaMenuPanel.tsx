"use client";

import { useLocale, useTranslations } from "next-intl";
import { getNavBlogPosts } from "@/components/pages/blog/blog-data";
import { getFooterBlogCategoryIcon } from "@/components/layout/footer/footer-config";
import { useUiStore } from "@/store/uiSlice";
import { NavbarMegaMenuItem } from "./NavbarMegaMenuItem";
import { NavbarMegaMenuShell } from "./NavbarMegaMenuShell";

export function NavbarBlogMegaMenuPanel() {
  const locale = useLocale() as "tr" | "en";
  const tNav = useTranslations("nav");
  const setBlogMenuOpen = useUiStore((state) => state.setBlogMenuOpen);
  const posts = getNavBlogPosts(locale);

  const closeMenu = () => setBlogMenuOpen(false);

  return (
    <NavbarMegaMenuShell
      allHref="/blog#blog-grid"
      allLabel={tNav("blogAll")}
      onNavigate={closeMenu}
    >
      {posts.map((post) => (
        <NavbarMegaMenuItem
          key={post.slug}
          href={`/blog/${post.slug}`}
          title={post.title}
          icon={getFooterBlogCategoryIcon(post.category)}
          onNavigate={closeMenu}
        />
      ))}
    </NavbarMegaMenuShell>
  );
}

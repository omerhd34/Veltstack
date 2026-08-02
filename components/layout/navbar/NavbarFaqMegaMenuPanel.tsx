"use client";

import type { MouseEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getNavFaqItems } from "@/components/pages/faq/faq-data";
import { usePathname } from "@/i18n/navigation";
import { useUiStore } from "@/store/uiSlice";
import { NavbarMegaMenuItem } from "./NavbarMegaMenuItem";
import { NavbarMegaMenuShell } from "./NavbarMegaMenuShell";

export function NavbarFaqMegaMenuPanel() {
  const locale = useLocale() as "tr" | "en";
  const pathname = usePathname();
  const tNav = useTranslations("nav");
  const setFaqMenuOpen = useUiStore((state) => state.setFaqMenuOpen);
  const items = getNavFaqItems(locale);

  const closeMenu = () => setFaqMenuOpen(false);

  const navigateToFaq = (slug: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    closeMenu();

    // Aynı sayfada Next.js Link hashchange tetiklemediği için manuel yönet
    if (pathname !== "/sss") return;

    event.preventDefault();
    const nextHash = `#${slug}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, "", `${window.location.pathname}${nextHash}`);
    }
    window.dispatchEvent(new Event("hashchange"));
  };

  return (
    <NavbarMegaMenuShell
      allHref="/sss"
      allLabel={tNav("faqAll")}
      onNavigate={closeMenu}
    >
      {items.map((item) => (
        <NavbarMegaMenuItem
          key={item.slug}
          href={`/sss#${item.slug}`}
          title={item.question}
          icon={item.icon}
          onNavigate={navigateToFaq(item.slug)}
        />
      ))}
    </NavbarMegaMenuShell>
  );
}

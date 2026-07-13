"use client";

import { useLocale, useTranslations } from "next-intl";
import { LuCircleHelp } from "react-icons/lu";
import { getNavFaqItems } from "@/components/pages/faq/faq-data";
import { useUiStore } from "@/store/uiSlice";
import { NavbarMegaMenuItem } from "./NavbarMegaMenuItem";
import { NavbarMegaMenuShell } from "./NavbarMegaMenuShell";

export function NavbarFaqMegaMenuPanel() {
  const locale = useLocale() as "tr" | "en";
  const tNav = useTranslations("nav");
  const setFaqMenuOpen = useUiStore((state) => state.setFaqMenuOpen);
  const items = getNavFaqItems(locale);

  const closeMenu = () => setFaqMenuOpen(false);

  return (
    <NavbarMegaMenuShell
      allHref="/sss#faq-content"
      allLabel={tNav("faqAll")}
      onNavigate={closeMenu}
    >
      {items.map((item) => (
        <NavbarMegaMenuItem
          key={item.slug}
          href={`/sss#${item.slug}`}
          title={item.question}
          icon={LuCircleHelp}
          onNavigate={closeMenu}
        />
      ))}
    </NavbarMegaMenuShell>
  );
}

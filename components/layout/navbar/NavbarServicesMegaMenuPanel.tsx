"use client";

import { useTranslations } from "next-intl";
import { serviceItems } from "@/components/sections/services/service-items";
import { useUiStore } from "@/store/uiSlice";
import { NavbarMegaMenuItem } from "./NavbarMegaMenuItem";
import { NavbarMegaMenuShell } from "./NavbarMegaMenuShell";

export function NavbarServicesMegaMenuPanel() {
  const tHome = useTranslations("home");
  const tNav = useTranslations("nav");
  const setServicesMenuOpen = useUiStore((state) => state.setServicesMenuOpen);

  const closeMenu = () => setServicesMenuOpen(false);

  return (
    <NavbarMegaMenuShell
      allHref="/hizmetlerimiz"
      allLabel={tNav("servicesAll")}
      onNavigate={closeMenu}
    >
      {serviceItems.map((item) => (
        <NavbarMegaMenuItem
          key={item.href}
          href={item.href}
          title={tHome(item.titleKey)}
          icon={item.icon}
          onNavigate={closeMenu}
        />
      ))}
    </NavbarMegaMenuShell>
  );
}

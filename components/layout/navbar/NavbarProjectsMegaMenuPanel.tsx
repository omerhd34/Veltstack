"use client";

import { useTranslations } from "next-intl";
import { projectItems } from "@/components/sections/projects/project-items";
import { useUiStore } from "@/store/uiSlice";
import { NavbarMegaMenuItem } from "./NavbarMegaMenuItem";
import { NavbarMegaMenuShell } from "./NavbarMegaMenuShell";

export function NavbarProjectsMegaMenuPanel() {
  const tHome = useTranslations("home");
  const tNav = useTranslations("nav");
  const setProjectsMenuOpen = useUiStore((state) => state.setProjectsMenuOpen);

  const closeMenu = () => setProjectsMenuOpen(false);

  return (
    <NavbarMegaMenuShell
      allHref="/projeler#projects-showcase"
      allLabel={tNav("projectsAll")}
      onNavigate={closeMenu}
    >
      {projectItems.map((project) => (
        <NavbarMegaMenuItem
          key={project.href}
          href={project.href}
          title={tHome(project.titleKey)}
          icon={project.icon}
          onNavigate={closeMenu}
        />
      ))}
    </NavbarMegaMenuShell>
  );
}

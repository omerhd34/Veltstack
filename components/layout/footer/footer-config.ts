import type { NavProjectKey } from "@/components/layout/navbar/nav-projects";
import type { NavServiceKey } from "@/components/layout/navbar/nav-services";
import { serviceItems } from "@/components/sections/services/service-items";
import { projectItems } from "@/components/sections/projects/project-items";
import type { IconType } from "react-icons";
import {
  LuCircleHelp,
  LuCode,
  LuCookie,
  LuFileText,
  LuGlobe,
  LuMail,
  LuNewspaper,
  LuScale,
  LuSearch,
  LuShieldCheck,
  LuShoppingCart,
  LuSmartphone,
  LuUsers,
  LuWrench,
  LuFolderKanban,
} from "react-icons/lu";

export const footerServiceItems = serviceItems.map((service) => ({
  href: service.href,
  navKey: service.navDescKey.replace(/Desc$/, "") as NavServiceKey,
  icon: service.icon,
}));

export const footerProjectItems = projectItems.map((project) => ({
  href: project.href,
  navKey: project.navDescKey.replace(/Desc$/, "") as NavProjectKey,
  icon: project.icon,
}));

const footerBlogCategoryIcons: Record<string, IconType> = {
  "Web Geliştirme": LuCode,
  "Web Development": LuCode,
  Mobil: LuSmartphone,
  Mobile: LuSmartphone,
  SEO: LuSearch,
  "E-Ticaret": LuShoppingCart,
  "E-Commerce": LuShoppingCart,
  "Araçlar & İpuçları": LuWrench,
  "Tools & Tips": LuWrench,
  "Hosting & Domain": LuGlobe,
};

export function getFooterBlogCategoryIcon(category: string): IconType {
  return footerBlogCategoryIcons[category] ?? LuCode;
}

export const footerCorporateItems = [
  { href: "/hakkimizda", labelKey: "about", icon: LuUsers },
  { href: "/projelerimiz", labelKey: "projects", icon: LuFolderKanban },
  { href: "/sss", labelKey: "faq", icon: LuCircleHelp },
  { href: "/blog", labelKey: "blog", icon: LuNewspaper },
  { href: "/iletisim", labelKey: "contact", icon: LuMail },
] as const;

export type FooterCorporateLabelKey =
  (typeof footerCorporateItems)[number]["labelKey"];

export const footerLegalItems = [
  { href: "/gizlilik-politikasi", labelKey: "privacy", icon: LuShieldCheck },
  { href: "/kullanim-sartlari", labelKey: "terms", icon: LuFileText },
  { href: "/cerez-politikasi", labelKey: "cookies", icon: LuCookie },
  { href: "/kvkk-aydinlatma-metni", labelKey: "kvkk", icon: LuScale },
] as const;

export type FooterLegalLabelKey = (typeof footerLegalItems)[number]["labelKey"];

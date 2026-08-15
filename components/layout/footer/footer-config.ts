import type { NavProjectKey } from "@/components/layout/navbar/nav-projects";
import type { NavServiceKey } from "@/components/layout/navbar/nav-services";
import { serviceItems } from "@/components/sections/services/service-items";
import { projectItems } from "@/components/sections/projects/project-items";
import type { IconType } from "react-icons";
import {
  LuBot,
  LuCircleHelp,
  LuCode,
  LuCookie,
  LuFileText,
  LuFolderKanban,
  LuGlobe,
  LuHouse,
  LuLayoutTemplate,
  LuMail,
  LuNewspaper,
  LuScale,
  LuSearch,
  LuShieldCheck,
  LuShoppingCart,
  LuSmartphone,
  LuUsers,
  LuWrench,
} from "react-icons/lu";

export const footerServiceItems = [
  "web-sitesi-gelistirme",
  "uygulama-gelistirme",
  "seo-hizmetleri",
  "web-sitesi-yenileme",
  "teknik-denetim",
  "bakim-ve-destek",
].map((slug) => {
  const service = serviceItems.find((item) => item.slug === slug)!;
  return {
    href: service.href,
    navKey: service.navDescKey.replace(/Desc$/, "") as NavServiceKey,
    icon: service.icon,
  };
});

export const footerProjectItems = projectItems.map((project) => ({
  href: project.href,
  navKey: project.navDescKey.replace(/Desc$/, "") as NavProjectKey,
  icon: project.icon,
}));

const footerBlogCategoryIcons: Record<string, IconType> = {
  "Web Yapımı": LuCode,
  "Web Building": LuCode,
  "Yapay Zeka": LuBot,
  "Artificial Intelligence": LuBot,
  "Özel Yazılım": LuLayoutTemplate,
  "Custom Software": LuLayoutTemplate,
  Mobil: LuSmartphone,
  Mobile: LuSmartphone,
  SEO: LuSearch,
  "SEO & GEO": LuSearch,
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
  { href: "/", labelKey: "home", icon: LuHouse },
  { href: "/hakkimizda", labelKey: "about", icon: LuUsers },
  { href: "/projeler", labelKey: "projects", icon: LuFolderKanban },
  { href: "/blog", labelKey: "blog", icon: LuNewspaper },
  { href: "/sss", labelKey: "faq", icon: LuCircleHelp },
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

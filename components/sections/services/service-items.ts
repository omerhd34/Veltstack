import type { IconType } from "react-icons";
import { LuGlobe, LuRefreshCw, LuSmartphone } from "react-icons/lu";

export const serviceSlugs = [
  "web-sitesi-gelistirme",
  "uygulama-gelistirme",
  "web-sitesi-yenileme",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export interface ServiceItemConfig {
  slug: ServiceSlug;
  href: string;
  titleKey: string;
  descKey: string;
  navDescKey: string;
  tagKey: string;
  icon: IconType;
}

export const serviceItems: ServiceItemConfig[] = [
  {
    slug: "web-sitesi-gelistirme",
    href: "/hizmetler/web-sitesi-gelistirme",
    titleKey: "servicesWebTitle",
    descKey: "servicesWebDesc",
    navDescKey: "serviceWebDesc",
    tagKey: "servicesWebTag",
    icon: LuGlobe,
  },
  {
    slug: "uygulama-gelistirme",
    href: "/hizmetler/uygulama-gelistirme",
    titleKey: "servicesAppTitle",
    descKey: "servicesAppDesc",
    navDescKey: "serviceAppDesc",
    tagKey: "servicesAppTag",
    icon: LuSmartphone,
  },
  {
    slug: "web-sitesi-yenileme",
    href: "/hizmetler/web-sitesi-yenileme",
    titleKey: "servicesRefreshTitle",
    descKey: "servicesRefreshDesc",
    navDescKey: "serviceRefreshDesc",
    tagKey: "servicesRefreshTag",
    icon: LuRefreshCw,
  },
];

export function isServiceSlug(slug: string): slug is ServiceSlug {
  return serviceSlugs.includes(slug as ServiceSlug);
}

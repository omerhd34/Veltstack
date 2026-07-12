import type { IconType } from "react-icons";
import {
  LuClipboardCheck,
  LuGlobe,
  LuLifeBuoy,
  LuRefreshCw,
  LuSearch,
  LuSmartphone,
} from "react-icons/lu";

export const serviceSlugs = [
  "web-sitesi-gelistirme",
  "web-sitesi-yenileme",
  "uygulama-gelistirme",
  "teknik-denetim",
  "seo-hizmetleri",
  "bakim-ve-destek",
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
    href: "/hizmetlerimiz/web-sitesi-gelistirme",
    titleKey: "servicesWebTitle",
    descKey: "servicesWebDesc",
    navDescKey: "serviceWebDesc",
    tagKey: "servicesWebTag",
    icon: LuGlobe,
  },
  {
    slug: "web-sitesi-yenileme",
    href: "/hizmetlerimiz/web-sitesi-yenileme",
    titleKey: "servicesRefreshTitle",
    descKey: "servicesRefreshDesc",
    navDescKey: "serviceRefreshDesc",
    tagKey: "servicesRefreshTag",
    icon: LuRefreshCw,
  },
  {
    slug: "uygulama-gelistirme",
    href: "/hizmetlerimiz/uygulama-gelistirme",
    titleKey: "servicesAppTitle",
    descKey: "servicesAppDesc",
    navDescKey: "serviceAppDesc",
    tagKey: "servicesAppTag",
    icon: LuSmartphone,
  },
  {
    slug: "teknik-denetim",
    href: "/hizmetlerimiz/teknik-denetim",
    titleKey: "servicesAuditTitle",
    descKey: "servicesAuditDesc",
    navDescKey: "serviceAuditDesc",
    tagKey: "servicesAuditTag",
    icon: LuClipboardCheck,
  },
  {
    slug: "seo-hizmetleri",
    href: "/hizmetlerimiz/seo-hizmetleri",
    titleKey: "servicesSeoTitle",
    descKey: "servicesSeoDesc",
    navDescKey: "serviceSeoDesc",
    tagKey: "servicesSeoTag",
    icon: LuSearch,
  },
  {
    slug: "bakim-ve-destek",
    href: "/hizmetlerimiz/bakim-ve-destek",
    titleKey: "servicesMaintenanceTitle",
    descKey: "servicesMaintenanceDesc",
    navDescKey: "serviceMaintenanceDesc",
    tagKey: "servicesMaintenanceTag",
    icon: LuLifeBuoy,
  },
];

export function isServiceSlug(slug: string): slug is ServiceSlug {
  return serviceSlugs.includes(slug as ServiceSlug);
}

import type { PackageCategory } from "@/components/pages/services/packages-config";
import type { ServiceSlug } from "@/components/sections/services/service-items";
import {
  flattenTechCategories,
  uygulamaGelistirmeTechCategories,
  webSitesiTechCategories,
} from "./service-tech-categories";

export const servicePackageCategories: Record<ServiceSlug, PackageCategory> = {
  "web-sitesi-gelistirme": "web",
  "web-sitesi-yenileme": "refresh",
  "uygulama-gelistirme": "app",
};

export const serviceHeroStats: Record<
  ServiceSlug,
  { delivery: string; support: string; tiers: string; revisions: string }
> = {
  "web-sitesi-gelistirme": {
    delivery: "14-84",
    support: "15-45",
    tiers: "3",
    revisions: "2-10",
  },
  "web-sitesi-yenileme": {
    delivery: "7-49",
    support: "15-45",
    tiers: "3",
    revisions: "2-8",
  },
  "uygulama-gelistirme": {
    delivery: "21-120",
    support: "15-45",
    tiers: "3",
    revisions: "2-8",
  },
};

export const serviceTechStacks: Record<ServiceSlug, string[]> = {
  "web-sitesi-gelistirme": flattenTechCategories(webSitesiTechCategories),
  "web-sitesi-yenileme": flattenTechCategories(webSitesiTechCategories),
  "uygulama-gelistirme": flattenTechCategories(uygulamaGelistirmeTechCategories),
};

import type { IconType } from "react-icons";
import {
  LuBuilding2,
  LuCalendarCheck,
  LuClipboardCheck,
  LuContact,
  LuGlobe,
  LuGraduationCap,
  LuHouse,
  LuLayoutTemplate,
  LuPackage,
  LuRefreshCw,
  LuSearch,
  LuShoppingCart,
  LuSmartphone,
  LuWrench,
} from "react-icons/lu";

export const packageCategories = [
  "web",
  "app",
  "refresh",
  "seo",
  "audit",
  "maintenance",
] as const;
export type PackageCategory = (typeof packageCategories)[number];

export const categoriesWithPackageComparison = [
  "web",
  "app",
  "refresh",
] as const satisfies readonly PackageCategory[];

export const categoryTabIcons: Record<PackageCategory, IconType> = {
  web: LuGlobe,
  refresh: LuRefreshCw,
  app: LuSmartphone,
  seo: LuSearch,
  audit: LuClipboardCheck,
  maintenance: LuWrench,
};

export const webPackageSlugs = [
  "onePage",
  "portfolio",
  "corporate",
  "ecommerce",
  "catalog",
  "listing",
  "booking",
  "education",
] as const;
export const refreshPackageSlugs = [
  "onePage",
  "portfolio",
  "corporate",
  "ecommerce",
  "catalog",
  "listing",
  "booking",
  "education",
] as const;
export const appPackageSlugs = ["portfolio", "corporate", "ecommerce"] as const;
export const auditPackageSlugs = ["auditServices"] as const;
export const seoPackageSlugs = ["seoServices"] as const;
export const maintenancePackageSlugs = ["maintenanceServices"] as const;

export type WebPackageSlug = (typeof webPackageSlugs)[number];
export type RefreshPackageSlug = (typeof refreshPackageSlugs)[number];
export type AppPackageSlug = (typeof appPackageSlugs)[number];
export type AuditPackageSlug = (typeof auditPackageSlugs)[number];
export type SeoPackageSlug = (typeof seoPackageSlugs)[number];
export type MaintenancePackageSlug = (typeof maintenancePackageSlugs)[number];

export type PackageTier = "temel" | "standart" | "pro";

export const webPackageIcons: Record<WebPackageSlug, IconType> = {
  portfolio: LuContact,
  corporate: LuBuilding2,
  ecommerce: LuShoppingCart,
  onePage: LuLayoutTemplate,
  catalog: LuPackage,
  listing: LuHouse,
  booking: LuCalendarCheck,
  education: LuGraduationCap,
};

export const appPackageIcons: Record<AppPackageSlug, IconType> = {
  portfolio: LuContact,
  corporate: LuBuilding2,
  ecommerce: LuShoppingCart,
};

export const refreshPackageIcons: Record<RefreshPackageSlug, IconType> = {
  onePage: LuLayoutTemplate,
  portfolio: LuContact,
  corporate: LuBuilding2,
  ecommerce: LuShoppingCart,
  catalog: LuPackage,
  listing: LuHouse,
  booking: LuCalendarCheck,
  education: LuGraduationCap,
};

export const auditPackageIcons: Record<AuditPackageSlug, IconType> = {
  auditServices: LuClipboardCheck,
};

export const seoPackageIcons: Record<SeoPackageSlug, IconType> = {
  seoServices: LuSearch,
};

export const maintenancePackageIcons: Record<MaintenancePackageSlug, IconType> =
  {
    maintenanceServices: LuWrench,
  };

export const categoryPackageSlugs: Record<PackageCategory, readonly string[]> =
  {
    web: webPackageSlugs,
    refresh: refreshPackageSlugs,
    app: appPackageSlugs,
    seo: seoPackageSlugs,
    audit: auditPackageSlugs,
    maintenance: maintenancePackageSlugs,
  };

export const categoryIcons: Record<
  PackageCategory,
  Record<string, IconType>
> = {
  web: webPackageIcons,
  refresh: refreshPackageIcons,
  app: appPackageIcons,
  seo: seoPackageIcons,
  audit: auditPackageIcons,
  maintenance: maintenancePackageIcons,
};

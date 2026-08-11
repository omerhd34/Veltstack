import type { IconType } from "react-icons";
import {
  LuBuilding2,
  LuClipboardCheck,
  LuContact,
  LuGlobe,
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

export const categoryTabIcons: Record<PackageCategory, IconType> = {
  web: LuGlobe,
  refresh: LuRefreshCw,
  app: LuSmartphone,
  seo: LuSearch,
  audit: LuClipboardCheck,
  maintenance: LuWrench,
};

export const webPackageSlugs = ["portfolio", "corporate", "ecommerce"] as const;
export const refreshPackageSlugs = webPackageSlugs;
export const auditPackageSlugs = ["auditServices"] as const;
export const seoPackageSlugs = ["seoServices"] as const;
export const maintenancePackageSlugs = ["maintenanceServices"] as const;

export type WebPackageSlug = (typeof webPackageSlugs)[number];
export type RefreshPackageSlug = (typeof refreshPackageSlugs)[number];
export type AuditPackageSlug = (typeof auditPackageSlugs)[number];
export type SeoPackageSlug = (typeof seoPackageSlugs)[number];
export type MaintenancePackageSlug = (typeof maintenancePackageSlugs)[number];

export type PackageTier = "temel" | "standart" | "pro";

export const webPackageIcons: Record<WebPackageSlug, IconType> = {
  portfolio: LuContact,
  corporate: LuBuilding2,
  ecommerce: LuShoppingCart,
};

export const appPackageIcons: Record<WebPackageSlug, IconType> = {
  portfolio: LuContact,
  corporate: LuBuilding2,
  ecommerce: LuShoppingCart,
};

export const refreshPackageIcons: Record<RefreshPackageSlug, IconType> = {
  portfolio: LuContact,
  corporate: LuBuilding2,
  ecommerce: LuShoppingCart,
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
    app: webPackageSlugs,
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

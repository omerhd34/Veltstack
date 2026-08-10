import type { IconType } from "react-icons";
import {
  LuBuilding2,
  LuContact,
  LuGlobe,
  LuRefreshCw,
  LuShoppingCart,
  LuSmartphone,
} from "react-icons/lu";

export const packageCategories = ["web", "app", "refresh"] as const;
export type PackageCategory = (typeof packageCategories)[number];

export const categoryTabIcons: Record<PackageCategory, IconType> = {
  web: LuGlobe,
  refresh: LuRefreshCw,
  app: LuSmartphone,
};

export const webPackageSlugs = ["portfolio", "corporate", "ecommerce"] as const;
export const refreshPackageSlugs = webPackageSlugs;

export type WebPackageSlug = (typeof webPackageSlugs)[number];
export type RefreshPackageSlug = (typeof refreshPackageSlugs)[number];

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

export const categoryPackageSlugs: Record<PackageCategory, readonly string[]> =
  {
    web: webPackageSlugs,
    refresh: refreshPackageSlugs,
    app: webPackageSlugs,
  };

export const categoryIcons: Record<
  PackageCategory,
  Record<string, IconType>
> = {
  web: webPackageIcons,
  refresh: refreshPackageIcons,
  app: appPackageIcons,
};

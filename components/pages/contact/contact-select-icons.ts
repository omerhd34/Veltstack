import { servicePackageCategories } from "@/components/pages/service-detail/service-detail-config";
import { categoryIcons } from "@/components/pages/services/packages-config";
import {
  isServiceSlug,
  serviceItems,
} from "@/components/sections/services/service-items";
import type { IconType } from "react-icons";
import { LuCircleHelp } from "react-icons/lu";

const serviceIconBySlug = Object.fromEntries(
  serviceItems.map((item) => [item.slug, item.icon]),
) as Record<string, IconType>;

export function getContactServiceIcon(value: string): IconType | undefined {
  if (value === "diger") return LuCircleHelp;
  return serviceIconBySlug[value];
}

export function getContactPackageIcon(
  serviceValue: string,
  packageValue: string,
): IconType | undefined {
  if (packageValue === "belirsiz") return LuCircleHelp;
  if (!isServiceSlug(serviceValue)) return undefined;

  const category = servicePackageCategories[serviceValue];
  const icons = categoryIcons[category];
  return icons[packageValue as keyof typeof icons];
}

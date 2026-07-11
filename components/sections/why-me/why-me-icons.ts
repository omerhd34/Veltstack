import type { IconType } from "react-icons";
import {
  LuChartLine,
  LuContact,
  LuHeadset,
  LuLayers,
  LuListChecks,
  LuRocket,
} from "react-icons/lu";
import { whyMeItems, type WhyMeIconKey } from "./why-me-items";

export const whyMeIcons: Record<WhyMeIconKey, IconType> = {
  contact: LuContact,
  rocket: LuRocket,
  headset: LuHeadset,
  layers: LuLayers,
  chart: LuChartLine,
  checklist: LuListChecks,
};

export const whyMeIconByTitleKey = Object.fromEntries(
  whyMeItems.map((item) => [item.titleKey, whyMeIcons[item.iconKey]]),
) as Record<string, IconType>;

export function getWhyMeIcon(iconKey: WhyMeIconKey) {
  return whyMeIcons[iconKey];
}

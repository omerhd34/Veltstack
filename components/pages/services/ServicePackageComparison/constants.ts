import type { PackageTier } from "../packages-config";
import type { ComparisonLabels } from "./types";

export const tierOrder: PackageTier[] = ["temel", "standart", "pro"];

export const tierLabelKey: Record<PackageTier, keyof ComparisonLabels> = {
  temel: "tierTemel",
  standart: "tierStandart",
  pro: "tierPro",
};

export const COLS =
  "grid grid-cols-[minmax(14rem,1.65fr)_repeat(3,minmax(7.5rem,1fr))]";

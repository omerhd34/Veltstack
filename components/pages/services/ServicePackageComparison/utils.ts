import type { PackageFeatureMatrixItem } from "../package-accordion";
import type { PackageTier } from "../packages-config";
import type {
  PackageCardWithTiers,
  PackageFeatureGroup,
} from "../ServicePackageCard";
import { tierOrder } from "./constants";
import type { ComparisonLabels } from "./types";

export function buildInclusionCells(
  included: Record<PackageTier, boolean>,
): { key: string; included: boolean; span: number; tiers: PackageTier[] }[] {
  const cells: {
    key: string;
    included: boolean;
    span: number;
    tiers: PackageTier[];
  }[] = [];

  let index = 0;
  while (index < tierOrder.length) {
    const value = included[tierOrder[index]];
    let end = index + 1;
    while (end < tierOrder.length && included[tierOrder[end]] === value) {
      end += 1;
    }
    const tiers = tierOrder.slice(index, end);
    cells.push({
      key: `${value ? "in" : "out"}-${tiers.join("-")}`,
      included: value,
      span: tiers.length,
      tiers,
    });
    index = end;
  }

  return cells;
}

function inclusionPatternKey(included: Record<PackageTier, boolean>) {
  return tierOrder.map((tier) => (included[tier] ? "1" : "0")).join("");
}

export function groupFeaturesByInclusion(
  features: PackageFeatureMatrixItem[],
) {
  const grouped: PackageFeatureMatrixItem[][] = [];

  for (const feature of features) {
    if (feature.values) {
      grouped.push([feature]);
      continue;
    }

    const key = inclusionPatternKey(feature.included);
    const last = grouped[grouped.length - 1];
    if (
      last &&
      !last[0].values &&
      inclusionPatternKey(last[0].included) === key
    ) {
      last.push(feature);
    } else {
      grouped.push([feature]);
    }
  }

  return grouped;
}

export function collectTierGroups(
  data: PackageCardWithTiers,
): PackageFeatureGroup[] {
  const byLabel = new Map<string, PackageFeatureGroup>();
  for (const tierKey of tierOrder) {
    for (const group of data.tiers[tierKey].featureGroups ?? []) {
      if (!byLabel.has(group.label)) {
        byLabel.set(group.label, { label: group.label, items: [] });
      }
    }
  }
  return [...byLabel.values()];
}

export function buildDeliveryMatrixItem(
  data: PackageCardWithTiers,
  labels: ComparisonLabels,
): PackageFeatureMatrixItem | null {
  if (!tierOrder.some((tier) => Boolean(data.tiers[tier].deliveryDays))) {
    return null;
  }

  const values = {} as Record<PackageTier, string | null>;
  const included = {} as Record<PackageTier, boolean>;
  for (const tier of tierOrder) {
    const value = data.tiers[tier].deliveryDays || null;
    values[tier] = value;
    included[tier] = Boolean(value);
  }

  return {
    text: labels.statDelivery,
    included,
    values,
  };
}

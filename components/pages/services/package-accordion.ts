import type { PackageTier } from "./packages-config";
import type {
  PackageCardData,
  PackageFeatureGroup,
  PackageTierData,
} from "./ServicePackageCard";

const tierOrder: PackageTier[] = ["temel", "standart", "pro"];

export interface PackageFeatureItem {
  text: string;
  included: boolean;
}

const exclusiveItemPatterns: RegExp[] = [
  /^\d+\s*(g[üu]n|days?)\b/i,
  /dil[\s\S]*deste(ğ|g)i/i,
  /language[\s\S]*support/i,
];

function matchExclusivePattern(text: string): RegExp | undefined {
  return exclusiveItemPatterns.find((pattern) => pattern.test(text));
}

export function buildFeatureGroupComparison(
  tiers: Record<PackageTier, PackageTierData>,
  groupLabel: string,
  activeTier: PackageTier,
): PackageFeatureItem[] {
  const ordered: string[] = [];
  const seen = new Set<string>();
  const minTierIndex = new Map<string, number>();

  tierOrder.forEach((tierKey, tierIndex) => {
    const group = tiers[tierKey].featureGroups?.find(
      (entry) => entry.label === groupLabel,
    );
    for (const item of group?.items ?? []) {
      if (!seen.has(item)) {
        seen.add(item);
        ordered.push(item);
        minTierIndex.set(item, tierIndex);
      }
    }
  });

  const activeItems = new Set(
    tiers[activeTier].featureGroups?.find((entry) => entry.label === groupLabel)
      ?.items ?? [],
  );

  const activeItemByPattern = new Map<RegExp, string>();
  for (const item of ordered) {
    if (!activeItems.has(item)) continue;
    const pattern = matchExclusivePattern(item);
    if (pattern && !activeItemByPattern.has(pattern)) {
      activeItemByPattern.set(pattern, item);
    }
  }

  const filtered = ordered.filter((item) => {
    const pattern = matchExclusivePattern(item);
    if (!pattern) return true;
    return activeItemByPattern.get(pattern) === item;
  });

  const activeTierIndex = tierOrder.indexOf(activeTier);
  return filtered.map((text) => ({
    text,
    included: (minTierIndex.get(text) ?? activeTierIndex) <= activeTierIndex,
  }));
}

export const compactAccordionQuery = "(max-width: 1023px)";
export const desktopGridQuery = "(min-width: 1024px)";
export const packageAccordionDurationMs = 500;

export function collectFeatureGroupLabels(
  packages: PackageCardData[],
  tier: PackageTier,
): string[] {
  const labels: string[] = [];

  for (const pkg of packages) {
    for (const group of pkg.tiers[tier].featureGroups ?? []) {
      if (!labels.includes(group.label)) {
        labels.push(group.label);
      }
    }
  }

  return labels;
}

export function collectCommonFeatureGroupLabels(
  packages: PackageCardData[],
  tier: PackageTier,
): string[] {
  return collectFeatureGroupLabels(packages, tier).filter((label) =>
    packages.every((pkg) =>
      (pkg.tiers[tier].featureGroups ?? []).some(
        (group) => group.label === label,
      ),
    ),
  );
}

export function sortFeatureGroupsForDisplay(
  groups: PackageFeatureGroup[],
  commonLabels: string[],
  deliveryGroupLabel: string,
): PackageFeatureGroup[] {
  const commonSet = new Set(commonLabels);
  const groupByLabel = new Map(groups.map((group) => [group.label, group]));

  const orderedCommon = [...commonLabels];
  const deliveryIndex = orderedCommon.indexOf(deliveryGroupLabel);
  if (deliveryIndex >= 0 && deliveryIndex !== orderedCommon.length - 1) {
    orderedCommon.splice(deliveryIndex, 1);
    orderedCommon.push(deliveryGroupLabel);
  }

  const common = orderedCommon
    .map((label) => groupByLabel.get(label))
    .filter((group): group is PackageFeatureGroup => !!group);
  const rest = groups.filter((group) => !commonSet.has(group.label));

  return [...common, ...rest];
}

export function getDefaultOpenGroups(
  packages: PackageCardData[],
  tier: PackageTier,
  isCompact: boolean,
) {
  const labels = collectFeatureGroupLabels(packages, tier);
  if (isCompact || !labels.length) {
    return new Set<string>();
  }
  return new Set(labels);
}

import type { PackageTier } from "./packages-config";
import type {
  PackageCardData,
  PackageFeatureGroup,
} from "./ServicePackageCard";

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

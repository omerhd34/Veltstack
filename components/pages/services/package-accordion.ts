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
  value?: string | null;
}

const exclusiveItemPatterns: RegExp[] = [/^\d+\s*(g[üu]n|days?)\b/i];

const languagesGroupNeedles = [
  "içerik",
  "content",
  "özellik",
  "feature",
  "tasarım",
  "design",
  "redesign",
];

function normalizeGroupLabel(label: string): string {
  return label.toLocaleLowerCase("tr-TR");
}

export function findLanguagesGroupLabel(
  groups: { label: string }[],
): string | null {
  for (const needle of languagesGroupNeedles) {
    const match = groups.find((group) =>
      normalizeGroupLabel(group.label).includes(needle),
    );
    if (match) return match.label;
  }
  return null;
}

export function buildLanguageFeatureItem(
  tiers: Record<PackageTier, PackageTierData>,
  activeTier: PackageTier,
  label: string,
): PackageFeatureItem | null {
  if (!tierOrder.some((tier) => Boolean(tiers[tier].languages))) {
    return null;
  }

  const value = tiers[activeTier].languages || null;
  return {
    text: label,
    included: Boolean(value),
    value,
  };
}

export function buildLanguageMatrixItem(
  tiers: Record<PackageTier, PackageTierData>,
  label: string,
): PackageFeatureMatrixItem | null {
  if (!tierOrder.some((tier) => Boolean(tiers[tier].languages))) {
    return null;
  }

  const included = {} as Record<PackageTier, boolean>;
  const values = {} as Record<PackageTier, string | null>;

  for (const tier of tierOrder) {
    const value = tiers[tier].languages || null;
    values[tier] = value;
    included[tier] = Boolean(value);
  }

  return { text: label, included, values };
}

export function findSupportGroupLabel(
  groups: { label: string }[],
  deliveryGroupLabel: string,
): string | null {
  const supportMatch = groups.find(
    (group) =>
      group.label !== deliveryGroupLabel && /destek|support/i.test(group.label),
  );
  if (supportMatch) return supportMatch.label;

  const exact = groups.find((group) => group.label === deliveryGroupLabel);
  if (exact) return exact.label;

  return (
    groups.find((group) => /destek|support|technical/i.test(group.label))
      ?.label ?? null
  );
}

export function buildSupportFeatureItem(
  tiers: Record<PackageTier, PackageTierData>,
  activeTier: PackageTier,
  label: string,
): PackageFeatureItem | null {
  if (!tierOrder.some((tier) => Boolean(tiers[tier].supportDays))) {
    return null;
  }

  const value = tiers[activeTier].supportDays || null;
  return {
    text: label,
    included: Boolean(value),
    value,
  };
}

export function buildSupportMatrixItem(
  tiers: Record<PackageTier, PackageTierData>,
  label: string,
): PackageFeatureMatrixItem | null {
  if (!tierOrder.some((tier) => Boolean(tiers[tier].supportDays))) {
    return null;
  }

  const included = {} as Record<PackageTier, boolean>;
  const values = {} as Record<PackageTier, string | null>;

  for (const tier of tierOrder) {
    const value = tiers[tier].supportDays || null;
    values[tier] = value;
    included[tier] = Boolean(value);
  }

  return { text: label, included, values };
}

function getRevisionValue(tier: PackageTierData): string | null {
  return tier.revisions ?? null;
}

function getPagesValue(tier: PackageTierData): string | null {
  return tier.pages ?? null;
}

function prefersPagesAsRevision(
  tiers: Record<PackageTier, PackageTierData>,
): boolean {
  return (
    !tierOrder.some((tier) => Boolean(tiers[tier].revisions)) &&
    tierOrder.some((tier) => Boolean(tiers[tier].pages))
  );
}

export function buildRevisionFeatureItem(
  tiers: Record<PackageTier, PackageTierData>,
  activeTier: PackageTier,
  label: string,
): PackageFeatureItem | null {
  const read = prefersPagesAsRevision(tiers) ? getPagesValue : getRevisionValue;

  if (!tierOrder.some((tier) => Boolean(read(tiers[tier])))) {
    return null;
  }

  const value = read(tiers[activeTier]);
  return {
    text: label,
    included: Boolean(value),
    value,
  };
}

export function buildRevisionMatrixItem(
  tiers: Record<PackageTier, PackageTierData>,
  label: string,
): PackageFeatureMatrixItem | null {
  const read = prefersPagesAsRevision(tiers) ? getPagesValue : getRevisionValue;

  if (!tierOrder.some((tier) => Boolean(read(tiers[tier])))) {
    return null;
  }

  const included = {} as Record<PackageTier, boolean>;
  const values = {} as Record<PackageTier, string | null>;

  for (const tier of tierOrder) {
    const value = read(tiers[tier]);
    values[tier] = value;
    included[tier] = Boolean(value);
  }

  return { text: label, included, values };
}

export function buildPagesMatrixItem(
  tiers: Record<PackageTier, PackageTierData>,
  label: string,
): PackageFeatureMatrixItem | null {
  const hasPages = tierOrder.some((tier) => Boolean(tiers[tier].pages));
  const hasRevisions = tierOrder.some((tier) => Boolean(tiers[tier].revisions));
  if (!hasPages || !hasRevisions) return null;

  const included = {} as Record<PackageTier, boolean>;
  const values = {} as Record<PackageTier, string | null>;

  for (const tier of tierOrder) {
    const value = getPagesValue(tiers[tier]);
    values[tier] = value;
    included[tier] = Boolean(value);
  }

  return { text: label, included, values };
}

export function buildPagesFeatureItem(
  tiers: Record<PackageTier, PackageTierData>,
  activeTier: PackageTier,
  label: string,
): PackageFeatureItem | null {
  const hasPages = tierOrder.some((tier) => Boolean(tiers[tier].pages));
  const hasRevisions = tierOrder.some((tier) => Boolean(tiers[tier].revisions));
  if (!hasPages || !hasRevisions) return null;

  const value = getPagesValue(tiers[activeTier]);
  return {
    text: label,
    included: Boolean(value),
    value,
  };
}

function matchExclusivePattern(text: string): RegExp | undefined {
  return exclusiveItemPatterns.find((pattern) => pattern.test(text));
}

function getDisplayOrderIndex(item: string, ordered: string[]): number {
  const pattern = matchExclusivePattern(item);
  if (!pattern) {
    return ordered.indexOf(item);
  }

  const anchorIndex = ordered.findIndex(
    (candidate) => matchExclusivePattern(candidate) === pattern,
  );
  return anchorIndex >= 0 ? anchorIndex : ordered.indexOf(item);
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
    const activeMatch = activeItemByPattern.get(pattern);
    if (activeMatch) return activeMatch === item;
    const lowestVariant = ordered.find(
      (candidate) => matchExclusivePattern(candidate) === pattern,
    );
    return lowestVariant === item;
  });

  const activeTierIndex = tierOrder.indexOf(activeTier);
  const sorted = [...filtered].sort(
    (a, b) =>
      getDisplayOrderIndex(a, ordered) - getDisplayOrderIndex(b, ordered),
  );

  return sorted.map((text) => ({
    text,
    included: (minTierIndex.get(text) ?? activeTierIndex) <= activeTierIndex,
  }));
}

export interface PackageFeatureMatrixItem {
  text: string;
  included: Record<PackageTier, boolean>;
  values?: Record<PackageTier, string | null>;
}

export function buildFeatureGroupMatrix(
  tiers: Record<PackageTier, PackageTierData>,
  groupLabel: string,
): PackageFeatureMatrixItem[] {
  const ordered: string[] = [];
  const seen = new Set<string>();
  const exactTiers = new Map<string, Set<PackageTier>>();
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
      const set = exactTiers.get(item) ?? new Set();
      set.add(tierKey);
      exactTiers.set(item, set);
    }
  });

  return ordered.map((text) => {
    const pattern = matchExclusivePattern(text);
    const included = {} as Record<PackageTier, boolean>;

    tierOrder.forEach((tierKey, tierIndex) => {
      included[tierKey] = pattern
        ? (exactTiers.get(text)?.has(tierKey) ?? false)
        : (minTierIndex.get(text) ?? 0) <= tierIndex;
    });

    return { text, included };
  });
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

  const supportLabels = commonLabels.filter(
    (label) => label !== deliveryGroupLabel && /destek|support/i.test(label),
  );
  const orderedCommon = commonLabels.filter(
    (label) => label !== deliveryGroupLabel && !supportLabels.includes(label),
  );
  if (commonLabels.includes(deliveryGroupLabel)) {
    orderedCommon.push(deliveryGroupLabel);
  }
  orderedCommon.push(...supportLabels);

  const common = orderedCommon
    .map((label) => groupByLabel.get(label))
    .filter((group): group is PackageFeatureGroup => !!group);
  const rest = groups.filter((group) => !commonSet.has(group.label));

  return [...common, ...rest];
}

export function getDefaultOpenGroups(
  packages: PackageCardData[],
  tier: PackageTier,
) {
  const labels = collectFeatureGroupLabels(packages, tier);
  if (!labels.length) {
    return new Set<string>();
  }
  return new Set([labels[0]]);
}

export function collectAllTierGroupLabels(pkg: PackageCardData): string[] {
  const labels: string[] = [];

  for (const tierKey of tierOrder) {
    for (const group of pkg.tiers[tierKey].featureGroups ?? []) {
      if (!labels.includes(group.label)) {
        labels.push(group.label);
      }
    }
  }

  return labels;
}

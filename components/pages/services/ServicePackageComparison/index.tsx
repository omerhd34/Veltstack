"use client";

import {
  buildFeatureGroupMatrix,
  buildLanguageMatrixItem,
  buildPagesMatrixItem,
  buildRevisionMatrixItem,
  buildSupportMatrixItem,
  collectAllTierGroupLabels,
  findLanguagesGroupLabel,
  findSupportGroupLabel,
  sortFeatureGroupsForDisplay,
} from "../package-accordion";
import type { PackageTier } from "../packages-config";
import { cn } from "@/lib/utils";
import { COLS, tierLabelKey, tierOrder } from "./constants";
import { ComparisonCorner } from "./ComparisonCorner";
import { ComparisonGroup } from "./ComparisonGroup";
import { ComparisonQuoteCta } from "./ComparisonQuoteCta";
import type { ServicePackageComparisonProps } from "./types";
import { buildDeliveryMatrixItem, collectTierGroups } from "./utils";

export type { ComparisonLabels } from "./types";
export type { ServicePackageComparisonProps } from "./types";

export function ServicePackageComparison({
  data,
  labels,
  categoryLabel,
  openGroups,
  onToggleGroup,
  className,
}: ServicePackageComparisonProps) {
  const allLabels = collectAllTierGroupLabels(data);
  const deliveryRow = buildDeliveryMatrixItem(data, labels);
  const pagesRow = buildPagesMatrixItem(data.tiers, labels.statPages);
  const languageRow = buildLanguageMatrixItem(data.tiers, labels.statLanguages);
  const revisionRow = labels.hideMiddleStat
    ? null
    : buildRevisionMatrixItem(data.tiers, labels.statRevision);
  const supportRow = buildSupportMatrixItem(data.tiers, labels.statSupport);
  const sortedGroups = sortFeatureGroupsForDisplay(
    collectTierGroups(data),
    allLabels,
    labels.deliveryGroupLabel,
  );
  const hasDeliveryGroup = sortedGroups.some(
    (group) => group.label === labels.deliveryGroupLabel,
  );
  const languagesGroupLabel = findLanguagesGroupLabel(sortedGroups);
  const supportGroupLabel = findSupportGroupLabel(
    sortedGroups,
    labels.deliveryGroupLabel,
  );

  const groups = sortedGroups
    .map((group, index) => ({
      ...group,
      features: [
        ...(index === 0 && pagesRow ? [pagesRow] : []),
        ...(index === 0 && !hasDeliveryGroup && deliveryRow
          ? [deliveryRow]
          : []),
        ...(group.label === labels.deliveryGroupLabel && deliveryRow
          ? [deliveryRow]
          : []),
        ...(languageRow && group.label === languagesGroupLabel
          ? [languageRow]
          : []),
        ...(group.label === supportGroupLabel
          ? [
              ...(revisionRow ? [revisionRow] : []),
              ...(supportRow ? [supportRow] : []),
            ]
          : []),
        ...buildFeatureGroupMatrix(data.tiers, group.label),
      ],
    }))
    .filter((group) => group.features.length);

  const tierNames: Record<PackageTier, string> = {
    temel: labels.tierTemel,
    standart: labels.tierStandart,
    pro: labels.tierPro,
  };

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-emerald-900/45 bg-[#0b1812] text-white shadow-[0_12px_48px_rgb(0_0_0/0.18)]",
        className,
      )}
    >
      <div className="overflow-x-auto">
        <div className="min-w-3xl">
          <div
            className={cn(
              COLS,
              "border-b border-emerald-900/40 bg-[#071510]/80",
            )}
          >
            <ComparisonCorner
              categoryLabel={categoryLabel}
              packageTitle={data.title}
            />

            {tierOrder.map((tierKey) => (
              <div
                key={tierKey}
                className="flex items-center justify-center border-l border-emerald-900/35 px-2 py-5 text-center sm:px-3"
              >
                <p className="font-(family-name:--font-heading) text-base font-bold tracking-tight text-white sm:text-lg">
                  {labels[tierLabelKey[tierKey]]}
                </p>
              </div>
            ))}
          </div>

          {groups.map((group) => (
            <ComparisonGroup
              key={group.label}
              label={group.label}
              features={group.features}
              isOpen={openGroups.has(group.label)}
              onToggle={() => onToggleGroup(group.label)}
              tierNames={tierNames}
              includedLabel={labels.featureIncluded}
              notIncludedLabel={labels.featureNotIncluded}
            />
          ))}
        </div>
      </div>

      <ComparisonQuoteCta label={labels.getQuote} />
    </div>
  );
}

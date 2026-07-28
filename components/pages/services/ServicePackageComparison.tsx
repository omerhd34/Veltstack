"use client";

import {
  LuChevronDown,
  LuCircleCheck,
  LuCircleX,
  LuMessageCircle,
} from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { StardustShell } from "@/components/lightswind/stardust-button";
import {
  stardustContent,
  stardustFace,
  stardustFocus,
  stardustIcon,
} from "@/components/ui/interactive-hover";
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
  type PackageFeatureMatrixItem,
} from "./package-accordion";
import type { PackageTier } from "./packages-config";
import type {
  PackageCardData,
  PackageFeatureGroup,
} from "./ServicePackageCard";
import { cn } from "@/lib/utils";

interface ComparisonLabels {
  tierTemel: string;
  tierStandart: string;
  tierPro: string;
  statDelivery: string;
  statRevision: string;
  statSupport: string;
  statLanguages: string;
  statPages: string;
  getQuote: string;
  deliveryGroupLabel: string;
  hideMiddleStat?: boolean;
}

interface ServicePackageComparisonProps {
  data: PackageCardData;
  labels: ComparisonLabels;
  categoryLabel: string;
  openGroups: Set<string>;
  onToggleGroup: (label: string) => void;
  className?: string;
}

const tierOrder: PackageTier[] = ["temel", "standart", "pro"];

const tierLabelKey: Record<PackageTier, keyof ComparisonLabels> = {
  temel: "tierTemel",
  standart: "tierStandart",
  pro: "tierPro",
};

const COLS = "grid grid-cols-[minmax(11rem,1.2fr)_repeat(3,minmax(8rem,1fr))]";

function buildInclusionCells(
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

function groupFeaturesByInclusion(features: PackageFeatureMatrixItem[]) {
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

function collectTierGroups(data: PackageCardData): PackageFeatureGroup[] {
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

function ComparisonCorner({
  categoryLabel,
  packageTitle,
}: {
  categoryLabel: string;
  packageTitle: string;
}) {
  return (
    <div className="relative min-h-20 overflow-hidden sm:min-h-24">
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          className="stroke-emerald-700/60"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <p className="absolute top-2.5 right-2.5 max-w-[70%] text-right font-(family-name:--font-heading) text-xs font-bold uppercase tracking-[0.12em] text-emerald-400/70 sm:top-3 sm:right-3 sm:text-sm">
        {categoryLabel}
      </p>
      <p className="absolute bottom-2.5 left-2.5 max-w-[70%] text-left font-(family-name:--font-heading) text-sm font-semibold leading-snug text-emerald-50/95 sm:bottom-3 sm:left-3 sm:text-base">
        {packageTitle}
      </p>
    </div>
  );
}

function buildDeliveryMatrixItem(
  data: PackageCardData,
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

function ValueCells({
  values,
  tierNames,
}: {
  values: Record<PackageTier, string | null>;
  tierNames: Record<PackageTier, string>;
}) {
  return tierOrder.map((tierKey) => {
    const value = values[tierKey];
    return (
      <span
        key={tierKey}
        className="flex items-center justify-center self-stretch border-l border-emerald-900/25 px-1"
        aria-label={`${tierNames[tierKey]}: ${value ?? "✗"}`}
      >
        {value ? (
          <span className="font-(family-name:--font-heading) text-sm font-bold text-brand-accent sm:text-base">
            {value}
          </span>
        ) : (
          <LuCircleX
            className="size-3.5 text-red-400/70"
            strokeWidth={2.5}
            aria-hidden
          />
        )}
      </span>
    );
  });
}

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

          {groups.map((group) => {
            const isOpen = openGroups.has(group.label);
            const panelId = `compare-${group.label}-panel`;
            const { features } = group;

            return (
              <div
                key={group.label}
                className="border-b border-emerald-900/35 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => onToggleGroup(group.label)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="relative flex w-full items-center justify-center px-4 py-3.5 transition-colors hover:bg-emerald-950/35 sm:px-5"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[0.6rem] font-bold uppercase tracking-[0.14em] text-emerald-400/50">
                    {group.label}
                  </span>
                  <LuChevronDown
                    className={cn(
                      "relative z-10 ml-auto size-3.5 shrink-0 text-emerald-400/40 transition-transform duration-500 ease-in-out",
                      isOpen && "rotate-180",
                    )}
                    strokeWidth={2.5}
                    aria-hidden
                  />
                </button>

                <div
                  id={panelId}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-500 ease-in-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className="pb-1">
                      {groupFeaturesByInclusion(features).map(
                        (featureGroup) => {
                          const valuedFeature = featureGroup[0].values
                            ? featureGroup[0]
                            : null;
                          const inclusionCells = valuedFeature
                            ? null
                            : buildInclusionCells(featureGroup[0].included);
                          const isMultiRow = featureGroup.length > 1;

                          return (
                            <li
                              key={featureGroup
                                .map((feature) => feature.text)
                                .join("|")}
                              className={cn(
                                COLS,
                                "items-stretch border-t border-emerald-900/20",
                              )}
                            >
                              <div className="min-w-0">
                                {featureGroup.map((feature, index) => (
                                  <p
                                    key={feature.text}
                                    className={cn(
                                      "px-4 py-2.5 text-[0.8125rem] leading-snug text-emerald-50/85 sm:px-5",
                                      index > 0 &&
                                        "border-t border-emerald-900/20",
                                    )}
                                  >
                                    {feature.text}
                                  </p>
                                ))}
                              </div>
                              {valuedFeature?.values ? (
                                <ValueCells
                                  values={valuedFeature.values}
                                  tierNames={tierNames}
                                />
                              ) : (
                                inclusionCells?.map((cell) => {
                                  const isMulti = isMultiRow || cell.span > 1;
                                  const iconClass = cn(
                                    isMulti ? "size-5 sm:size-6" : "size-3.5",
                                    cell.included
                                      ? "text-brand-accent"
                                      : "text-red-400/70",
                                  );

                                  return (
                                    <span
                                      key={cell.key}
                                      className={cn(
                                        "flex items-center justify-center self-stretch border-l border-emerald-900/25 px-1",
                                        cell.span === 2 && "col-span-2",
                                        cell.span === 3 && "col-span-3",
                                      )}
                                      aria-label={`${cell.tiers.map((tier) => tierNames[tier]).join(", ")}: ${cell.included ? "✓" : "✗"}`}
                                    >
                                      {cell.included ? (
                                        <LuCircleCheck
                                          className={iconClass}
                                          strokeWidth={isMulti ? 2.25 : 2.5}
                                          aria-hidden
                                        />
                                      ) : (
                                        <LuCircleX
                                          className={iconClass}
                                          strokeWidth={isMulti ? 2.25 : 2.5}
                                          aria-hidden
                                        />
                                      )}
                                    </span>
                                  );
                                })
                              )}
                            </li>
                          );
                        },
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center border-t border-emerald-900/40 p-5 sm:p-6">
        <StardustShell
          className="w-full max-w-md"
          faceClassName="bg-brand-accent/88"
        >
          <Link
            href="/iletisim"
            className={cn(
              stardustFace,
              stardustFocus,
              "h-12 w-full bg-transparent text-sm font-semibold text-white",
            )}
          >
            <span className={cn(stardustContent, "gap-2")}>
              <span className={stardustIcon}>
                <LuMessageCircle className="size-4" aria-hidden />
              </span>
              {labels.getQuote}
            </span>
          </Link>
        </StardustShell>
      </div>
    </div>
  );
}

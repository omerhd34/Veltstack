"use client";

import { useLayoutEffect, useRef, useState } from "react";
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
  collectAllTierGroupLabels,
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

const COLS =
  "grid grid-cols-[minmax(11rem,1.35fr)_repeat(3,minmax(6.5rem,1fr))]";

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
    const key = inclusionPatternKey(feature.included);
    const last = grouped[grouped.length - 1];
    if (last && inclusionPatternKey(last[0].included) === key) {
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
  const ref = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(45);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width > 0 && height > 0) {
        setAngle((Math.atan(height / width) * 180) / Math.PI);
      }
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative min-h-34 overflow-hidden sm:min-h-38">
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

      <div
        className="absolute top-1/2 left-1/2 w-[125%]"
        style={{
          transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        }}
      >
        <p className="absolute bottom-full left-1/2 mb-3 w-48 -translate-x-1/2 text-center font-(family-name:--font-heading) text-xs font-bold uppercase tracking-[0.12em] text-emerald-400/70 sm:mb-3.5 sm:w-56 sm:text-sm">
          {categoryLabel}
        </p>
        <p className="absolute top-full left-1/2 mt-3 w-48 -translate-x-1/2 text-center font-(family-name:--font-heading) text-sm font-semibold leading-snug text-emerald-50/95 sm:mt-3.5 sm:w-56 sm:text-base">
          {packageTitle}
        </p>
      </div>
    </div>
  );
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
  const groups = sortFeatureGroupsForDisplay(
    collectTierGroups(data),
    allLabels,
    labels.deliveryGroupLabel,
  )
    .map((group) => ({
      ...group,
      features: buildFeatureGroupMatrix(data.tiers, group.label),
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
        <div className="min-w-2xl">
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

            {tierOrder.map((tierKey) => {
              const tier = data.tiers[tierKey];
              const middleStat = tier.pages ?? tier.revisions;

              return (
                <div
                  key={tierKey}
                  className="flex flex-col border-l border-emerald-900/35 px-3 py-5 text-center sm:px-4"
                >
                  <p className="font-(family-name:--font-heading) text-base font-bold tracking-tight text-white sm:text-lg">
                    {labels[tierLabelKey[tierKey]]}
                  </p>

                  <div
                    className={cn(
                      "mt-4 grid gap-2",
                      labels.hideMiddleStat ? "grid-cols-1" : "grid-cols-2",
                    )}
                  >
                    <div className="rounded-lg border border-emerald-900/40 bg-[#0b1812]/70 px-1.5 py-2.5">
                      <p className="text-[0.55rem] font-bold uppercase tracking-wider text-emerald-400/55">
                        {labels.statDelivery.split(" (")[0]}
                      </p>
                      <p className="mt-1 font-(family-name:--font-heading) text-sm font-bold text-white sm:text-base">
                        {tier.deliveryDays}
                      </p>
                    </div>
                    {!labels.hideMiddleStat && middleStat ? (
                      <div className="rounded-lg border border-emerald-900/40 bg-[#0b1812]/70 px-1.5 py-2.5">
                        <p className="text-[0.55rem] font-bold uppercase tracking-wider text-emerald-400/55">
                          {labels.statRevision}
                        </p>
                        <p className="mt-1 font-(family-name:--font-heading) text-sm font-bold text-white sm:text-base">
                          {middleStat}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
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
                          const inclusionCells = buildInclusionCells(
                            featureGroup[0].included,
                          );
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
                              {inclusionCells.map((cell) => {
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
                              })}
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

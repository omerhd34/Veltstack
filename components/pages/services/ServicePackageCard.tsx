"use client";

import type { IconType } from "react-icons";
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
  buildFeatureGroupComparison,
  sortFeatureGroupsForDisplay,
} from "./package-accordion";
import type { PackageTier } from "./packages-config";
import { cn } from "@/lib/utils";

export interface PackageFeatureGroup {
  label: string;
  items: string[];
}

export interface PackageTierData {
  deliveryDays: string;
  revisions?: string;
  pages?: string;
  scope: string;
  features?: string[];
  featureGroups?: PackageFeatureGroup[];
}

export interface PackageCardData {
  title: string;
  description: string;
  introP2?: string;
  tiers: Record<PackageTier, PackageTierData>;
}

interface PackageCardLabels {
  tierTemel: string;
  tierStandart: string;
  tierPro: string;
  statDelivery: string;
  statDeliveryUnit: string;
  statRevision: string;
  statScope: string;
  getQuote: string;
  deliveryGroupLabel: string;
  hideMiddleStat?: boolean;
}

interface ServicePackageCardProps {
  icon: IconType;
  data: PackageCardData;
  labels: PackageCardLabels;
  activeTier: PackageTier;
  onTierChange?: (tier: PackageTier) => void;
  openGroups: Set<string>;
  onToggleGroup: (label: string) => void;
  commonGroupLabels?: string[];
  variant?: "default" | "tier-column";
  className?: string;
}

const tierOrder: PackageTier[] = ["temel", "standart", "pro"];

const tierLabels: Record<PackageTier, keyof PackageCardLabels> = {
  temel: "tierTemel",
  standart: "tierStandart",
  pro: "tierPro",
};

export function ServicePackageCard({
  icon: Icon,
  data,
  labels,
  activeTier,
  onTierChange,
  openGroups,
  onToggleGroup,
  commonGroupLabels = [],
  variant = "default",
  className,
}: ServicePackageCardProps) {
  const tier = data.tiers[activeTier];
  const isPro = activeTier === "pro";
  const isTierColumn = variant === "tier-column";
  const featureGroups = sortFeatureGroupsForDisplay(
    tier.featureGroups ?? [],
    commonGroupLabels,
    labels.deliveryGroupLabel,
  );

  const renderFeatureGroup = (
    group: PackageFeatureGroup,
    groupIndex: number,
  ) => {
    const isOpen = openGroups.has(group.label);
    const panelId = `${activeTier}-${group.label}-panel`;

    return (
      <div
        key={`${activeTier}-${group.label}`}
        data-package-group={groupIndex}
        data-package-group-label={group.label}
        className={cn(
          "border-b border-emerald-900/35 transition-[min-height] duration-500 ease-in-out",
        )}
      >
        <button
          type="button"
          onClick={() => onToggleGroup(group.label)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full shrink-0 items-center justify-between gap-3 px-2 py-3.5 text-left transition-colors hover:text-emerald-100"
        >
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-emerald-400/50">
            {group.label}
          </span>
          <LuChevronDown
            className={cn(
              "size-3.5 shrink-0 text-emerald-400/40 transition-transform duration-500 ease-in-out",
              isOpen && "rotate-180",
            )}
            strokeWidth={2.5}
            aria-hidden
          />
        </button>
        <div
          id={panelId}
          data-package-group-panel
          className={cn(
            "grid transition-[grid-template-rows,opacity] duration-500 ease-in-out",
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden" data-package-group-content>
            <ul className="flex flex-col gap-2.5 px-2 pb-3.5">
              {buildFeatureGroupComparison(
                data.tiers,
                group.label,
                activeTier,
              ).map((feature) => (
                <li
                  key={`${activeTier}-${group.label}-${feature.text}`}
                  className="flex items-start justify-between gap-3 text-[0.8125rem] leading-snug"
                >
                  <span
                    className={cn(
                      "min-w-0 flex-1",
                      feature.included
                        ? "text-emerald-50/85"
                        : "text-emerald-50/40",
                    )}
                  >
                    {feature.text}
                  </span>
                  {feature.included ? (
                    <LuCircleCheck
                      className="mt-0.5 size-3.5 shrink-0 text-brand-accent"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                  ) : (
                    <LuCircleX
                      className="mt-0.5 size-3.5 shrink-0 text-red-400"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <article
      data-package-card
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border bg-[#0b1812] text-white transition-all duration-500",
        isTierColumn ? "h-auto" : "h-full",
        isPro
          ? "border-brand-accent/40 shadow-[0_0_48px_rgb(58_107_82/0.12)]"
          : "border-emerald-900/45 hover:border-emerald-700/50 hover:shadow-[0_8px_40px_rgb(0_0_0/0.35)]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-brand-accent/6 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {isTierColumn ? (
        <div className="border-b border-emerald-900/35 px-5 py-5 text-center">
          <p className="font-(family-name:--font-heading) text-lg font-bold tracking-tight text-white">
            {labels[tierLabels[activeTier]]}
          </p>
        </div>
      ) : (
        <>
          <div className="relative border-b border-emerald-900/35 p-6">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent shadow-[0_4px_20px_rgb(58_107_82/0.35)]">
                <Icon className="size-5 text-white" strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <h3 className="font-(family-name:--font-heading) text-lg font-bold leading-snug tracking-tight">
                  {data.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-emerald-50/55">
                  {data.description}
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-emerald-900/35 px-4 py-4">
            <div className="flex rounded-xl border border-emerald-900/50 bg-[#071510]/80 p-1">
              {tierOrder.map((tierKey) => (
                <button
                  key={tierKey}
                  type="button"
                  onClick={() => onTierChange?.(tierKey)}
                  className={cn(
                    "flex-1 rounded-lg px-2 py-2 text-center text-xs font-semibold transition-all duration-300",
                    activeTier === tierKey
                      ? "bg-brand-accent text-white shadow-sm"
                      : "text-emerald-200/55 hover:text-emerald-100",
                  )}
                >
                  {labels[tierLabels[tierKey]]}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      <div
        className={cn(
          "grid gap-1.5 border-b border-emerald-900/35 px-3 py-5 sm:gap-2 sm:px-4",
          labels.hideMiddleStat ? "grid-cols-2" : "grid-cols-3",
        )}
      >
        {[
          {
            label: labels.statDelivery,
            value: tier.deliveryDays,
          },
          ...(labels.hideMiddleStat
            ? []
            : [
                {
                  label: labels.statRevision,
                  value: tier.pages ?? tier.revisions,
                },
              ]),
          { label: labels.statScope, value: tier.scope },
        ].map((stat) => (
          <div
            key={stat.label}
            className="min-w-0 rounded-xl border border-emerald-900/40 bg-[#071510]/60 px-1.5 py-3 text-center sm:px-2"
          >
            <p className="text-[0.55rem] font-bold uppercase tracking-wider text-emerald-400/55 sm:text-[0.6rem]">
              {stat.label}
            </p>
            <p className="mt-1.5 wrap-break-word font-(family-name:--font-heading) text-base font-bold text-white sm:text-lg">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div
        className={cn(
          "relative flex flex-col px-3 py-2 sm:px-4",
          !isTierColumn && "min-h-0 flex-1",
        )}
      >
        {featureGroups.length ? (
          <div
            className={cn("flex flex-col", !isTierColumn && "min-h-0 flex-1")}
          >
            {featureGroups.map((group, groupIndex) =>
              renderFeatureGroup(group, groupIndex),
            )}
          </div>
        ) : null}
        {!featureGroups.length && tier.features ? (
          <ul className="flex flex-col gap-2.5 px-2 py-3.5">
            {tier.features.map((feature) => (
              <li
                key={`${activeTier}-${feature}`}
                className="flex items-start justify-between gap-3 text-[0.8125rem] leading-snug text-emerald-50/85"
              >
                <span className="min-w-0 flex-1">{feature}</span>
                <LuCircleCheck
                  className="mt-0.5 size-3.5 shrink-0 text-brand-accent"
                  strokeWidth={2.5}
                  aria-hidden
                />
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className={cn("p-5 pt-0", !isTierColumn && "mt-auto")}>
        <StardustShell className="w-full" faceClassName="bg-brand-accent/88">
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
    </article>
  );
}

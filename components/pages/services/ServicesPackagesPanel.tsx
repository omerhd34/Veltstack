"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  categoryIcons,
  categoryPackageSlugs,
  type PackageCategory,
  type PackageTier,
} from "./packages-config";
import {
  collectAllTierGroupLabels,
  collectCommonFeatureGroupLabels,
  getDefaultOpenGroups,
} from "./package-accordion";
import { ServicesCategoryTabs } from "./ServicesCategoryTabs";
import { ServicesPackageTypeTabs } from "./ServicesPackageTypeTabs";
import { ServicesPackagesIntro } from "./ServicesPackagesIntro";
import { ServicePackageCard, type PackageCardData } from "./ServicePackageCard";
import { usePackageGroupHeightSync } from "./usePackageGroupHeightSync";

interface PackagesIntro {
  title: string;
  p1: string;
  p2: string;
}

interface PackagesPanelLabels {
  tabs: { id: PackageCategory; label: string }[];
  tierTemel: string;
  tierStandart: string;
  tierPro: string;
  statDelivery: string;
  statDeliverySetup: string;
  statDeliveryStart: string;
  statDeliveryAudit: string;
  statDeliveryUnit: string;
  statRevision: string;
  statMonthlyRequests: string;
  statPages: string;
  statScreens: string;
  statKeywords: string;
  statProjects: string;
  getQuote: string;
  deliveryGroupLabel: string;
}

interface CategoryPackages {
  web: Record<string, PackageCardData>;
  refresh: Record<string, PackageCardData>;
  app: Record<string, PackageCardData>;
  seo: Record<string, PackageCardData>;
  audit: Record<string, PackageCardData>;
  maintenance: Record<string, PackageCardData>;
}

interface CategoryIntros {
  web: PackagesIntro;
  refresh: PackagesIntro;
  app: PackagesIntro;
  seo: PackagesIntro;
  audit: PackagesIntro;
  maintenance: PackagesIntro;
}

interface ServicesPackagesPanelProps {
  labels: PackagesPanelLabels;
  intros: CategoryIntros;
  packages: CategoryPackages;
  lockedCategory?: PackageCategory;
  className?: string;
}

const tierOrder: PackageTier[] = ["temel", "standart", "pro"];

const deliveryLabelKey: Record<PackageCategory, keyof PackagesPanelLabels> = {
  web: "statDelivery",
  refresh: "statDelivery",
  app: "statDelivery",
  seo: "statDeliveryStart",
  audit: "statDeliveryAudit",
  maintenance: "statDeliverySetup",
};

const scopeLabelKey: Record<PackageCategory, keyof PackagesPanelLabels> = {
  web: "statPages",
  refresh: "statPages",
  app: "statScreens",
  seo: "statKeywords",
  audit: "statProjects",
  maintenance: "statProjects",
};

const revisionLabelKey: Record<PackageCategory, keyof PackagesPanelLabels> = {
  web: "statRevision",
  refresh: "statRevision",
  app: "statRevision",
  seo: "statPages",
  audit: "statPages",
  maintenance: "statMonthlyRequests",
};

export function ServicesPackagesPanel({
  labels,
  intros,
  packages,
  lockedCategory,
  className,
}: ServicesPackagesPanelProps) {
  const [category, setCategory] = useState<PackageCategory>(
    lockedCategory ?? "web",
  );
  const activeCategory = lockedCategory ?? category;
  const slugs = categoryPackageSlugs[activeCategory];
  const [activePackageSlug, setActivePackageSlug] = useState(slugs[0]);
  const [activeTier, setActiveTier] = useState<PackageTier>("standart");
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());
  const gridRef = useRef<HTMLDivElement>(null);

  const useTierComparison = true;
  const resolvedPackageSlug = slugs.includes(activePackageSlug)
    ? activePackageSlug
    : slugs[0];

  const intro = intros[activeCategory];
  const categoryPackages = packages[activeCategory];
  const icons = categoryIcons[activeCategory];
  const scopeKey = scopeLabelKey[activeCategory];
  const revisionKey = revisionLabelKey[activeCategory];
  const deliveryKey = deliveryLabelKey[activeCategory];

  const selectedPackage = categoryPackages[resolvedPackageSlug];

  const packageTypeTabs = useMemo(
    () =>
      slugs.map((slug) => ({
        id: slug,
        label: categoryPackages[slug].title,
        icon: icons[slug],
      })),
    [categoryPackages, icons, slugs],
  );

  const visiblePackages = useMemo(() => {
    if (useTierComparison) {
      return tierOrder.map(() => selectedPackage);
    }
    return slugs.map((slug) => categoryPackages[slug]);
  }, [categoryPackages, selectedPackage, slugs, useTierComparison]);

  const handleCategoryChange = (newCategory: PackageCategory) => {
    setCategory(newCategory);
    setActivePackageSlug(categoryPackageSlugs[newCategory][0]);
  };

  const commonGroupLabels = useMemo(() => {
    if (useTierComparison) {
      return collectAllTierGroupLabels(selectedPackage);
    }
    return collectCommonFeatureGroupLabels(visiblePackages, activeTier);
  }, [activeTier, selectedPackage, useTierComparison, visiblePackages]);

  useLayoutEffect(() => {
    if (useTierComparison) {
      const labels = collectAllTierGroupLabels(selectedPackage);
      setOpenGroups(!labels.length ? new Set() : new Set([labels[0]]));
      return;
    }

    setOpenGroups(getDefaultOpenGroups(visiblePackages, activeTier));
  }, [
    activeTier,
    activeCategory,
    selectedPackage,
    useTierComparison,
    visiblePackages,
  ]);

  const openGroupsKey = [...openGroups].sort().join("\0");

  usePackageGroupHeightSync(
    gridRef,
    [
      activeCategory,
      resolvedPackageSlug,
      useTierComparison ? "compare" : activeTier,
    ],
    openGroupsKey,
  );

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  const cardLabels = {
    tierTemel: labels.tierTemel,
    tierStandart: labels.tierStandart,
    tierPro: labels.tierPro,
    statDelivery: labels[deliveryKey] as string,
    statDeliveryUnit: labels.statDeliveryUnit,
    statRevision: labels[revisionKey] as string,
    statScope: labels[scopeKey] as string,
    getQuote: labels.getQuote,
    deliveryGroupLabel: labels.deliveryGroupLabel,
    hideMiddleStat: activeCategory === "audit",
  };

  const showCategoryTabs = !lockedCategory;
  const showPackageTypeTabs = slugs.length > 1;
  const displayIntro = showPackageTypeTabs
    ? {
        title: intro.title,
        p1: selectedPackage.description,
        p2: selectedPackage.introP2 ?? intro.p2,
      }
    : intro;
  const showUnifiedNav =
    (showCategoryTabs && showPackageTypeTabs) ||
    (!showCategoryTabs && showPackageTypeTabs);

  return (
    <div className={`min-w-0 ${className ?? ""}`}>
      {showCategoryTabs && !showPackageTypeTabs ? (
        <ServicesCategoryTabs
          tabs={labels.tabs}
          active={activeCategory}
          onChange={handleCategoryChange}
          className="mx-auto w-fit max-w-full"
        />
      ) : null}

      {showUnifiedNav ? (
        <div className="relative mx-auto w-fit max-w-full rounded-[1.75rem] p-px bg-linear-to-r from-emerald-500/30 via-brand-accent/25 to-emerald-600/30 shadow-[0_12px_48px_rgb(0_0_0/0.12),0_4px_16px_rgb(58_107_82/0.08)]">
          <div className="relative overflow-hidden rounded-[calc(1.75rem-1px)] bg-[#071510]/97 backdrop-blur-xl">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgb(58_107_82/0.14),transparent_55%)]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03)_0%,transparent_40%)]"
            />

            {showCategoryTabs ? (
              <ServicesCategoryTabs
                embedded
                tabs={labels.tabs}
                active={activeCategory}
                onChange={handleCategoryChange}
              />
            ) : null}

            {showCategoryTabs && showPackageTypeTabs ? (
              <div
                aria-hidden
                className="mx-4 h-px bg-linear-to-r from-transparent via-emerald-700/40 to-transparent"
              />
            ) : null}

            {showPackageTypeTabs ? (
              <ServicesPackageTypeTabs
                embedded
                tabs={packageTypeTabs}
                active={resolvedPackageSlug}
                onChange={setActivePackageSlug}
              />
            ) : null}
          </div>
        </div>
      ) : null}

      <ServicesPackagesIntro
        className={
          lockedCategory
            ? useTierComparison
              ? "mt-6 md:mt-8"
              : "mt-0"
            : useTierComparison
              ? "mt-10 md:mt-12"
              : "mt-12 md:mt-14"
        }
        variant={lockedCategory ? "compact" : "full"}
        title={displayIntro.title}
        p1={displayIntro.p1}
        p2={displayIntro.p2}
      />

      <div
        ref={gridRef}
        key={`${activeCategory}-${resolvedPackageSlug}-${useTierComparison ? "compare" : activeTier}`}
        className={`${
          lockedCategory ? "mt-8 md:mt-10" : "mt-10 md:mt-12"
        } grid gap-6 lg:gap-5 xl:gap-6 lg:grid-cols-3 ${
          useTierComparison ? "items-start" : "items-stretch"
        }`}
      >
        {useTierComparison
          ? tierOrder.map((tierKey) => (
              <ServicePackageCard
                key={`${activeCategory}-${resolvedPackageSlug}-${tierKey}`}
                icon={icons[resolvedPackageSlug]}
                data={selectedPackage}
                labels={cardLabels}
                activeTier={tierKey}
                openGroups={openGroups}
                onToggleGroup={toggleGroup}
                commonGroupLabels={collectCommonFeatureGroupLabels(
                  [selectedPackage],
                  tierKey,
                )}
                variant="tier-column"
              />
            ))
          : slugs.map((slug) => (
              <ServicePackageCard
                key={`${activeCategory}-${slug}`}
                icon={icons[slug]}
                data={categoryPackages[slug]}
                labels={cardLabels}
                activeTier={activeTier}
                onTierChange={setActiveTier}
                openGroups={openGroups}
                onToggleGroup={toggleGroup}
                commonGroupLabels={commonGroupLabels}
              />
            ))}
      </div>
    </div>
  );
}

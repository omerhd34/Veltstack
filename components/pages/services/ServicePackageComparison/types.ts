import type { PackageCardData } from "../ServicePackageCard";

export interface ComparisonLabels {
  tierTemel: string;
  tierStandart: string;
  tierPro: string;
  statDelivery: string;
  statRevision: string;
  statSupport: string;
  statLanguages: string;
  statPages: string;
  statPrice: string;
  pricingGroupLabel: string;
  getQuote: string;
  deliveryGroupLabel: string;
  featureIncluded: string;
  featureNotIncluded: string;
  hideMiddleStat?: boolean;
}

export interface ServicePackageComparisonProps {
  data: PackageCardData;
  labels: ComparisonLabels;
  categoryLabel: string;
  openGroups: Set<string>;
  onToggleGroup: (label: string) => void;
  className?: string;
}

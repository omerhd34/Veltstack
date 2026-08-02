import { LuCircleX } from "react-icons/lu";
import type { PackageTier } from "../packages-config";
import { tierOrder } from "./constants";

export function ComparisonValueCells({
  values,
  tierNames,
  notIncludedLabel,
}: {
  values: Record<PackageTier, string | null>;
  tierNames: Record<PackageTier, string>;
  notIncludedLabel: string;
}) {
  return tierOrder.map((tierKey) => {
    const value = values[tierKey];
    return (
      <span
        key={tierKey}
        className="flex items-center justify-center self-stretch border-l border-emerald-900/25 px-1"
        aria-label={`${tierNames[tierKey]}: ${value ?? notIncludedLabel}`}
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

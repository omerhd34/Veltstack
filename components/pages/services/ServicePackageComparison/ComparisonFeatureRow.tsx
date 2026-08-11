import type { PackageFeatureMatrixItem } from "../package-accordion";
import type { PackageTier } from "../packages-config";
import { cn } from "@/lib/utils";
import { InclusionIcon } from "../InclusionIcon";
import { COLS } from "./constants";
import { ComparisonValueCells } from "./ComparisonValueCells";
import { buildInclusionCells } from "./utils";

export function ComparisonFeatureRow({
  featureGroup,
  tierNames,
  includedLabel,
  notIncludedLabel,
}: {
  featureGroup: PackageFeatureMatrixItem[];
  tierNames: Record<PackageTier, string>;
  includedLabel: string;
  notIncludedLabel: string;
}) {
  const valuedFeature = featureGroup[0].values ? featureGroup[0] : null;
  const inclusionCells = valuedFeature
    ? null
    : buildInclusionCells(featureGroup[0].included);
  const isMulti =
    featureGroup.length > 1 ||
    (inclusionCells?.some((c) => c.span > 1) ?? false);

  return (
    <li
      className={cn(COLS, "items-stretch border-t border-emerald-900/20")}
    >
      <div className="min-w-0">
        {featureGroup.map((feature, index) => (
          <p
            key={feature.text}
            className={cn(
              "px-4 py-2.5 text-[0.8125rem] leading-snug text-emerald-50/85 sm:px-5",
              index > 0 && "border-t border-emerald-900/20",
            )}
          >
            {feature.text}
          </p>
        ))}
      </div>
      {valuedFeature?.values ? (
        <ComparisonValueCells
          values={valuedFeature.values}
          tierNames={tierNames}
          notIncludedLabel={notIncludedLabel}
        />
      ) : (
        inclusionCells?.map((cell) => (
          <span
            key={cell.key}
            className={cn(
              "flex items-center justify-center self-stretch border-l border-emerald-900/25 px-1",
              cell.span === 2 && "col-span-2",
              cell.span === 3 && "col-span-3",
            )}
            aria-label={`${cell.tiers.map((tier) => tierNames[tier]).join(", ")}: ${cell.included ? includedLabel : notIncludedLabel}`}
          >
            <InclusionIcon
              included={cell.included}
              size={isMulti ? "md" : "sm"}
            />
          </span>
        ))
      )}
    </li>
  );
}

import { LuChevronDown } from "react-icons/lu";
import type { PackageFeatureMatrixItem } from "../package-accordion";
import type { PackageTier } from "../packages-config";
import { cn } from "@/lib/utils";
import { ComparisonFeatureRow } from "./ComparisonFeatureRow";
import { groupFeaturesByInclusion } from "./utils";

export function ComparisonGroup({
  label,
  features,
  isOpen,
  onToggle,
  tierNames,
  includedLabel,
  notIncludedLabel,
}: {
  label: string;
  features: PackageFeatureMatrixItem[];
  isOpen: boolean;
  onToggle: () => void;
  tierNames: Record<PackageTier, string>;
  includedLabel: string;
  notIncludedLabel: string;
}) {
  const panelId = `compare-${label}-panel`;

  return (
    <div className="border-b border-emerald-900/35 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="relative flex w-full items-center justify-center px-4 py-3.5 transition-colors hover:bg-emerald-950/35 sm:px-5"
      >
        <span className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[0.6rem] font-bold uppercase tracking-[0.14em] text-emerald-400/50">
          {label}
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
            {groupFeaturesByInclusion(features).map((featureGroup) => (
              <ComparisonFeatureRow
                key={featureGroup.map((feature) => feature.text).join("|")}
                featureGroup={featureGroup}
                tierNames={tierNames}
                includedLabel={includedLabel}
                notIncludedLabel={notIncludedLabel}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

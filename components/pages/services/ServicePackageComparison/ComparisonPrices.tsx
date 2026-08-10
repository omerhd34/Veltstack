import { LuChevronDown } from "react-icons/lu";
import type { PackageTier } from "../packages-config";
import type { PackageTierData } from "../ServicePackageCard";
import { cn } from "@/lib/utils";
import { COLS, tierOrder } from "./constants";

export function ComparisonPrices({
  tiers,
  groupLabel,
  priceLabel,
  isOpen,
  onToggle,
}: {
  tiers: Record<PackageTier, PackageTierData>;
  groupLabel: string;
  priceLabel: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  if (!tierOrder.some((tier) => Boolean(tiers[tier].price))) {
    return null;
  }

  const panelId = `compare-${groupLabel}-panel`;

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
          {groupLabel}
        </span>
        <LuChevronDown
          className={cn(
            "relative z-10 ml-auto size-3.5 shrink-0 text-emerald-400/40 transition-transform duration-300 ease-in-out",
            isOpen && "rotate-180",
          )}
          strokeWidth={2.5}
          aria-hidden
        />
      </button>

      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className={cn(COLS, "bg-[#071510]/55")}>
            <div className="flex items-center px-3 py-5 sm:px-4">
              <p className="font-(family-name:--font-heading) text-sm font-semibold leading-snug text-emerald-50/95 sm:text-base">
                {priceLabel}
              </p>
            </div>
            {tierOrder.map((tierKey) => (
              <div
                key={tierKey}
                className="flex items-center justify-center border-l border-emerald-900/35 px-2 py-5 text-center sm:px-3"
              >
                <p className="font-(family-name:--font-heading) text-base font-bold tracking-tight text-emerald-100 sm:text-lg">
                  {tiers[tierKey].price ?? "—"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

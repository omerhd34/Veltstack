"use client";

import type { IconType } from "react-icons";
import {
  LuCloud,
  LuCode,
  LuDatabase,
  LuServer,
  LuSmartphone,
  LuTrendingUp,
} from "react-icons/lu";
import { cn } from "@/lib/utils";
import type { TechCategoryKey } from "./tech-items";

export interface TechCategoryOption {
  key: TechCategoryKey;
  label: string;
  orbitId: number;
  itemCount: number;
}

interface TechCategoryButtonsProps {
  categories: TechCategoryOption[];
  selectedOrbitId: number | null;
  onSelect: (orbitId: number | null) => void;
  className?: string;
}

const categoryIcons: Record<TechCategoryKey, IconType> = {
  frontend: LuCode,
  backend: LuServer,
  database: LuDatabase,
  mobile: LuSmartphone,
  hosting: LuCloud,
  seo: LuTrendingUp,
};

export function TechCategoryButtons({
  categories,
  selectedOrbitId,
  onSelect,
  className,
}: TechCategoryButtonsProps) {
  const topRow = categories.slice(0, 3);
  const bottomRow = categories.slice(3);

  const renderButton = (category: TechCategoryOption) => {
    const isSelected = selectedOrbitId === category.orbitId;
    const Icon = categoryIcons[category.key];

    return (
      <button
        key={category.key}
        type="button"
        role="tab"
        aria-selected={isSelected}
        aria-label={`${category.label}, ${category.itemCount} teknoloji`}
        onClick={() => onSelect(isSelected ? null : category.orbitId)}
        className={cn(
          "group relative flex w-full items-center gap-2 overflow-hidden rounded-xl border px-2.5 py-2.5 text-left transition-all duration-300 sm:gap-2.5 sm:px-3",
          isSelected
            ? "border-[#00D4AA]/55 bg-[#00D4AA]/10 text-[#00D4AA] shadow-[0_0_28px_rgb(0_212_170/0.22),inset_0_1px_0_rgb(255_255_255/0.06)]"
            : "border-emerald-900/40 bg-[#0a1612]/55 text-white/70 backdrop-blur-sm hover:border-[#00D4AA]/30 hover:bg-[#0c1e18]/75 hover:text-white/90 hover:shadow-[0_0_20px_rgb(0_212_170/0.08)]",
        )}
      >
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent to-transparent transition-opacity duration-300",
            isSelected
              ? "via-[#00D4AA]/70 opacity-100"
              : "via-white/10 opacity-0 group-hover:opacity-100 group-hover:via-[#00D4AA]/35",
          )}
        />

        <span
          className={cn(
            "flex size-7 shrink-0 items-center justify-center rounded-lg ring-1 transition-all duration-300 sm:size-8",
            isSelected
              ? "bg-[#00D4AA]/18 text-[#00D4AA] ring-[#00D4AA]/35 shadow-[0_0_16px_rgb(0_212_170/0.2)]"
              : "bg-white/5 text-white/45 ring-white/10 group-hover:bg-[#00D4AA]/8 group-hover:text-[#00D4AA]/85 group-hover:ring-[#00D4AA]/25",
          )}
        >
          <Icon className="size-3.5 sm:size-4" strokeWidth={1.75} />
        </span>

        <span className="min-w-0 flex-1 text-[0.65rem] font-medium leading-snug sm:text-[0.7rem]">
          {category.label}
        </span>

        <span
          aria-hidden
          className={cn(
            "flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full px-1 text-[0.55rem] font-bold tabular-nums transition-all duration-300",
            isSelected
              ? "bg-[#00D4AA]/25 text-[#00D4AA] ring-1 ring-[#00D4AA]/40"
              : "bg-white/5 text-white/25 ring-1 ring-white/8 group-hover:text-white/45",
          )}
        >
          {category.itemCount}
        </span>
      </button>
    );
  };

  return (
    <div
      className={cn("mt-8 flex w-full max-w-2xl flex-col gap-2.5", className)}
      role="tablist"
      aria-label="Teknoloji kategorileri"
    >
      <div className="grid grid-cols-3 gap-2.5">{topRow.map(renderButton)}</div>
      <div className="grid grid-cols-3 gap-2.5">
        {bottomRow.map(renderButton)}
      </div>
    </div>
  );
}

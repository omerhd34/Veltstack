import { Inbox, Search } from "lucide-react";
import { Button } from "@/components/ui/shadcn/button";
import { FilterSelect } from "./FilterSelect";
import type { StatusFilter } from "./types";
import {
  BUDGET_OPTIONS,
  inputClassName,
  SERVICE_OPTIONS,
  STATUS_OPTIONS,
  TIER_OPTIONS,
} from "./utils";

interface MessagesToolbarProps {
  filteredCount: number;
  unreadCount: number;
  query: string;
  status: StatusFilter;
  service: string;
  serviceTier: string;
  budget: string;
  hasActiveFilters: boolean;
  onQueryChange: (value: string) => void;
  onStatusChange: (value: StatusFilter) => void;
  onServiceChange: (value: string) => void;
  onServiceTierChange: (value: string) => void;
  onBudgetChange: (value: string) => void;
  onClearFilters: () => void;
}

export function MessagesToolbar({
  filteredCount,
  unreadCount,
  query,
  status,
  service,
  serviceTier,
  budget,
  hasActiveFilters,
  onQueryChange,
  onStatusChange,
  onServiceChange,
  onServiceTierChange,
  onBudgetChange,
  onClearFilters,
}: MessagesToolbarProps) {
  return (
    <div className="relative z-20 mb-5 rounded-2xl border border-border/60 bg-white/90 shadow-[0_1px_2px_rgb(0_0_0/0.04),0_8px_24px_rgb(58_107_82/0.04)] backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3 rounded-t-2xl border-b border-border/50 bg-linear-to-r from-brand-accent/6 via-transparent to-transparent px-4 py-3.5 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
            <Inbox className="size-4" />
          </div>
          <p className="text-sm font-semibold text-foreground">Gelen kutusu</p>
        </div>

        <p className="flex shrink-0 items-center gap-2 text-xs sm:text-sm">
          <span className="rounded-full bg-white/80 px-2.5 py-1 font-medium text-foreground shadow-sm ring-1 ring-border/60">
            {filteredCount} mesaj
          </span>
          {unreadCount > 0 ? (
            <span className="rounded-full bg-brand-accent px-2.5 py-1 font-semibold text-white shadow-sm shadow-brand-accent/20">
              {unreadCount} okunmamış
            </span>
          ) : (
            <span className="rounded-full bg-white/80 px-2.5 py-1 text-muted-foreground ring-1 ring-border/60">
              Hepsi okundu
            </span>
          )}
        </p>
      </div>

      <div className="p-4 sm:p-5">
        <div className="grid gap-2.5 md:grid-cols-2 xl:grid-cols-5">
          <label className="relative block md:col-span-2 xl:col-span-1">
            <span className="sr-only">Ara</span>
            <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="İsim veya mesaj ara…"
              className={inputClassName}
            />
          </label>

          <FilterSelect
            label="Durum"
            value={status}
            options={STATUS_OPTIONS}
            onChange={(next) => onStatusChange(next as StatusFilter)}
          />

          <FilterSelect
            label="Hizmet"
            value={service}
            options={SERVICE_OPTIONS}
            onChange={onServiceChange}
          />

          <FilterSelect
            label="Kademe"
            value={serviceTier}
            options={TIER_OPTIONS}
            onChange={onServiceTierChange}
          />

          <FilterSelect
            label="Bütçe"
            value={budget}
            options={BUDGET_OPTIONS}
            onChange={onBudgetChange}
          />
        </div>

        {hasActiveFilters ? (
          <div className="mt-3.5 flex justify-end">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-8 rounded-lg text-muted-foreground hover:text-foreground"
              onClick={onClearFilters}
            >
              Filtreleri temizle
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

import { ArrowDown, ArrowUp, ArrowUpDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { MessageTableRow } from "./MessageTableRow";
import type { AdminMessageItem, SortDirection, SortKey } from "./types";
import { SORT_COLUMNS } from "./utils";

interface MessagesTableProps {
  messages: AdminMessageItem[];
  selectedId: string | null;
  sortKey: SortKey;
  sortDirection: SortDirection;
  onToggleSort: (key: SortKey) => void;
  onOpenMessage: (id: string) => void;
}

export function MessagesTable({
  messages,
  selectedId,
  sortKey,
  sortDirection,
  onToggleSort,
  onOpenMessage,
}: MessagesTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-[0_1px_2px_rgb(0_0_0/0.04),0_8px_24px_rgb(58_107_82/0.04)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-275 border-collapse text-left">
          <thead>
            <tr className="border-b border-border/60 bg-[#F7F9F8]">
              {SORT_COLUMNS.map((column) => {
                const isActive = sortKey === column.key;
                const SortIcon = !isActive
                  ? ArrowUpDown
                  : sortDirection === "asc"
                    ? ArrowUp
                    : ArrowDown;

                return (
                  <th
                    key={column.key}
                    className={cn(
                      "px-4 py-3 font-medium first:pl-5 last:pr-5 sm:px-5",
                      column.className,
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => onToggleSort(column.key)}
                      aria-label={`${column.label} sütununa göre sırala`}
                      className={cn(
                        "inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.06em] text-muted-foreground transition-colors hover:text-foreground",
                        isActive && "text-brand-accent",
                      )}
                    >
                      {column.label}
                      <SortIcon
                        className={cn(
                          "size-3 opacity-40",
                          isActive && "opacity-100",
                        )}
                      />
                    </button>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-5 py-20 text-center">
                  <div className="mx-auto flex max-w-xs flex-col items-center">
                    <div className="mb-3 flex size-12 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                      <Search className="size-5" />
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      Sonuç bulunamadı
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Filtreleri değiştirip tekrar deneyin.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              messages.map((message) => (
                <MessageTableRow
                  key={message.id}
                  message={message}
                  isSelected={selectedId === message.id}
                  onOpen={onOpenMessage}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

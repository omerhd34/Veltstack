import { resolveContactLabels } from "@/lib/contact-labels";
import { cn } from "@/lib/utils";
import type { AdminMessageItem } from "./types";
import { formatDetailDate, formatTableDate, getInitials } from "./utils";

interface MessageTableRowProps {
  message: AdminMessageItem;
  isSelected: boolean;
  onOpen: (id: string) => void;
}

export function MessageTableRow({
  message,
  isSelected,
  onOpen,
}: MessageTableRowProps) {
  const labels = resolveContactLabels({
    service: message.service ?? "",
    servicePackage: message.servicePackage ?? "",
    serviceTier: message.serviceTier ?? "",
    budget: message.budget ?? "",
  });

  return (
    <tr
      role="button"
      tabIndex={0}
      onClick={() => onOpen(message.id)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(message.id);
        }
      }}
      className={cn(
        "group cursor-pointer border-b border-border/40 align-middle transition-colors last:border-b-0",
        "hover:bg-[#F7F9F8]",
        !message.isRead && "bg-brand-accent/4",
        isSelected && "bg-brand-accent/8 hover:bg-brand-accent/8",
      )}
    >
      <td className="px-4 py-3.5 first:pl-5 sm:px-5 sm:py-4">
        {!message.isRead ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-accent/12 px-2.5 py-1 text-[11px] font-semibold text-brand-accent">
            <span className="size-1.5 rounded-full bg-brand-accent" />
            Yeni
          </span>
        ) : (
          <span className="text-[11px] font-medium text-muted-foreground/80">
            Okundu
          </span>
        )}
      </td>
      <td className="px-4 py-3.5 sm:px-5 sm:py-4">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className={cn(
              "flex size-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold tracking-wide",
              !message.isRead
                ? "bg-brand-accent text-white"
                : "bg-muted text-muted-foreground",
            )}
            aria-hidden
          >
            {getInitials(message.name)}
          </span>
          <div className="min-w-0">
            <p
              className={cn(
                "truncate text-sm text-foreground",
                !message.isRead ? "font-semibold" : "font-medium",
              )}
            >
              {message.name}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {message.email}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3.5 text-sm text-foreground/85 sm:px-5 sm:py-4">
        <span className="line-clamp-1">{labels.service || "—"}</span>
      </td>
      <td className="px-4 py-3.5 text-sm text-foreground/75 sm:px-5 sm:py-4">
        <span className="line-clamp-1">{labels.servicePackage || "—"}</span>
      </td>
      <td className="px-4 py-3.5 sm:px-5 sm:py-4">
        {labels.serviceTier ? (
          <span className="inline-flex rounded-lg bg-muted/80 px-2 py-0.5 text-xs font-medium text-foreground/80">
            {labels.serviceTier}
          </span>
        ) : (
          <span className="text-sm text-muted-foreground">—</span>
        )}
      </td>
      <td className="px-4 py-3.5 text-sm whitespace-nowrap text-foreground/80 sm:px-5 sm:py-4">
        {labels.budget || "—"}
      </td>
      <td className="max-w-70 px-4 py-3.5 sm:px-5 sm:py-4">
        {message.content ? (
          <p className="line-clamp-1 break-all text-sm text-muted-foreground group-hover:text-foreground/70">
            {message.content}
          </p>
        ) : (
          <span className="text-sm text-muted-foreground">—</span>
        )}
      </td>
      <td className="px-4 py-3.5 last:pr-5 sm:px-5 sm:py-4">
        <time
          dateTime={message.createdAt}
          className="text-xs whitespace-nowrap text-muted-foreground tabular-nums"
          title={formatDetailDate(message.createdAt)}
        >
          {formatTableDate(message.createdAt)}
        </time>
      </td>
    </tr>
  );
}

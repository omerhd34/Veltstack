import { cn } from "@/lib/utils";

interface CarouselPaginationProps {
  activeIndex: number;
  total: number;
  onSelect?: (index: number) => void;
  getItemLabel?: (index: number) => string;
  theme?: "light" | "dark";
  className?: string;
  dataCarouselControl?: boolean;
}

function formatNumber(value: number) {
  return String(value).padStart(2, "0");
}

function getPagerWindow(activeIndex: number, total: number, size = 5) {
  const length = Math.min(size, total);
  const half = Math.floor(length / 2);

  return Array.from({ length }, (_, offset) => ({
    index:
      total <= size ? offset : (activeIndex - half + offset + total) % total,
    offset,
  }));
}

export function CarouselPagination({
  activeIndex,
  total,
  onSelect,
  getItemLabel = (index) => `Slide ${index + 1}`,
  theme = "light",
  className,
  dataCarouselControl = false,
}: CarouselPaginationProps) {
  const items = getPagerWindow(activeIndex, total);
  const isDark = theme === "dark";

  if (total <= 1) return null;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0 rounded-full border px-1 py-0.5 backdrop-blur-md lg:gap-0.5 lg:px-1.5 lg:py-1",
        isDark
          ? "border-white/15 bg-white/10 shadow-[0_4px_20px_rgb(0,0,0,0.12)]"
          : "border-border/60 bg-white/70 shadow-[0_4px_20px_rgb(0,0,0,0.04)]",
        className,
      )}
      aria-live="polite"
    >
      {items.map(({ index, offset }) => {
        const isActive = index === activeIndex;
        const distance = Math.abs(offset - Math.floor(items.length / 2));
        const content = isActive ? (
          formatNumber(index + 1)
        ) : (
          <span className="sr-only">{formatNumber(index + 1)}</span>
        );
        const itemClassName = cn(
          "flex items-center justify-center rounded-full font-(family-name:--font-heading) transition-all duration-500 ease-out motion-reduce:transition-none",
          isActive
            ? "h-8 min-w-8 bg-brand-accent px-2 text-[10px] font-semibold tracking-[0.12em] text-white shadow-[0_6px_16px_rgb(58,107,82,0.28)] lg:h-11 lg:min-w-11 lg:px-2.5 lg:text-xs"
            : cn(
                "size-8 lg:size-11",
                isDark ? "hover:bg-white/10" : "hover:bg-brand-accent/10",
              ),
        );
        const dotClassName = cn(
          "rounded-full",
          isDark ? "bg-white/35" : "bg-brand-accent/35",
          distance === 0 && "size-2 lg:size-2.5",
          distance === 1 && "size-1.5 lg:size-2",
          distance >= 2 && "size-1 lg:size-1.5 opacity-70",
        );

        return onSelect ? (
          <button
            key={`${offset}-${index}`}
            type="button"
            data-carousel-control={dataCarouselControl ? true : undefined}
            onClick={() => onSelect(index)}
            aria-label={getItemLabel(index)}
            aria-current={isActive ? "true" : undefined}
            className={itemClassName}
          >
            {isActive ? content : <span aria-hidden className={dotClassName} />}
          </button>
        ) : (
          <span
            key={`${offset}-${index}`}
            aria-hidden={!isActive}
            className={itemClassName}
          >
            {isActive ? content : <span className={dotClassName} />}
          </span>
        );
      })}

      <span
        aria-hidden
        className={cn(
          "mx-0.5 h-2.5 w-px lg:mx-1 lg:h-3",
          isDark ? "bg-white/25" : "bg-border/80",
        )}
      />
      <span
        className={cn(
          "pr-1 font-(family-name:--font-heading) text-[10px] tracking-[0.14em] lg:pr-1.5 lg:text-[11px]",
          isDark ? "text-white/70" : "text-foreground/65",
        )}
      >
        {formatNumber(total)}
      </span>
    </div>
  );
}

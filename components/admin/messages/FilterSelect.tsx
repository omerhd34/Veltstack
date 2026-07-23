"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FilterSelectOption = {
  value: string;
  label: string;
};

interface FilterSelectProps {
  label: string;
  value: string;
  options: readonly FilterSelectOption[];
  onChange: (value: string) => void;
  className?: string;
}

export function FilterSelect({
  label,
  value,
  options,
  onChange,
  className,
}: FilterSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const buttonId = useId();
  const selectedLabel =
    options.find((option) => option.value === value)?.label ??
    options[0]?.label;

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <span className="sr-only" id={buttonId}>
        {label}
      </span>
      <button
        type="button"
        aria-labelledby={buttonId}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex h-10 w-full items-center justify-between gap-2 rounded-xl border border-border/80 bg-[#F8FAF9] px-3.5 text-sm text-foreground outline-none transition",
          "hover:border-border hover:bg-white",
          "focus-visible:border-brand-accent focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-brand-accent/15",
          open && "border-brand-accent bg-white ring-2 ring-brand-accent/15",
        )}
      >
        <span className="truncate text-left">{selectedLabel}</span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180 text-brand-accent",
          )}
          aria-hidden
        />
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label={label}
          className={cn(
            "absolute z-50 mt-1.5 max-h-64 w-full overflow-auto rounded-xl border border-border/60 bg-white py-1.5",
            "shadow-[0_12px_32px_rgb(15_23_20/0.12)]",
            "motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-150",
            "[scrollbar-color:var(--brand-accent)_rgb(var(--brand-accent-rgb)/0.1)] scrollbar-thin",
            "[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-brand-accent/10",
            "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-brand-accent",
          )}
        >
          {options.map((option) => {
            const isSelected = value === option.value;

            return (
              <li key={option.value} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-left text-sm transition-colors",
                    isSelected
                      ? "bg-brand-accent/10 font-medium text-brand-accent"
                      : "text-foreground hover:bg-[#F7F9F8]",
                  )}
                >
                  <span className="leading-snug">{option.label}</span>
                  {isSelected ? (
                    <Check className="size-4 shrink-0" strokeWidth={2.5} />
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

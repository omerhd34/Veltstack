"use client";

import { useEffect, useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { cn } from "@/lib/utils";

export interface FaqItem {
  slug: string;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const openFromHash = () => {
      const slug = window.location.hash.replace(/^#/, "");
      if (!slug) return;

      const index = items.findIndex((item) => item.slug === slug);
      if (index === -1) return;

      setOpenIndex(index);
      window.requestAnimationFrame(() => {
        document.getElementById(slug)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [items]);

  return (
    <div className={cn("flex flex-col gap-3 sm:gap-3.5", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={item.slug}
            id={item.slug}
            className={cn(
              "group relative overflow-hidden rounded-2xl border bg-white shadow-[0_2px_16px_rgb(0_0_0/0.04)] transition-all duration-300 dark:bg-card",
              isOpen
                ? "border-brand-accent/35 shadow-[0_12px_40px_rgb(58_107_82/0.1)]"
                : "border-border/60 hover:border-brand-accent/20 hover:shadow-[0_8px_28px_rgb(58_107_82/0.07)]",
            )}
          >
            <div
              aria-hidden
              className={cn(
                "pointer-events-none absolute inset-y-0 left-0 w-1 bg-linear-to-b from-brand-accent to-brand-accent/40 transition-opacity duration-300",
                isOpen ? "opacity-100" : "opacity-0",
              )}
            />
            <div
              aria-hidden
              className={cn(
                "pointer-events-none absolute inset-0 bg-linear-to-br from-brand-accent/6 via-transparent to-transparent transition-opacity duration-300",
                isOpen ? "opacity-100" : "opacity-0",
              )}
            />

            <button
              type="button"
              id={`faq-trigger-${item.slug}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.slug}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="relative flex w-full items-center gap-4 px-5 py-5 text-left sm:gap-5 sm:px-6 sm:py-5"
            >
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-xl text-[0.6875rem] font-bold tabular-nums transition-colors duration-300 sm:size-9 sm:text-xs",
                  isOpen
                    ? "bg-brand-accent text-white shadow-[0_4px_14px_rgb(58_107_82/0.28)]"
                    : "bg-brand-accent/10 text-brand-accent ring-1 ring-brand-accent/15 group-hover:bg-brand-accent/15",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0 flex-1">
                <span className="font-(family-name:--font-heading) text-sm font-semibold leading-snug text-foreground sm:text-[0.9375rem]">
                  {item.question}
                </span>
              </span>

              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:size-9",
                  isOpen
                    ? "border-brand-accent/25 bg-brand-accent/10 text-brand-accent"
                    : "border-border/70 bg-muted/30 text-muted-foreground group-hover:border-brand-accent/20 group-hover:text-brand-accent",
                )}
              >
                <LuChevronDown
                  className={cn(
                    "size-4 transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden
                />
              </span>
            </button>

            <div
              id={`faq-panel-${item.slug}`}
              role="region"
              aria-labelledby={`faq-trigger-${item.slug}`}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="relative border-t border-brand-accent/10 px-5 pb-5 pt-4 text-sm leading-[1.85] text-muted-foreground sm:px-6 sm:pb-6 sm:pl-19">
                  {item.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

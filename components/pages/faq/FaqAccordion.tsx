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
    <div
      className={cn(
        "divide-y divide-border/60 rounded-2xl border border-border/60 bg-card/40",
        className,
      )}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.slug} id={item.slug} className="scroll-mt-28">
            <button
              type="button"
              id={`faq-trigger-${item.slug}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.slug}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-muted/30 sm:px-6"
            >
              <span className="font-(family-name:--font-heading) text-sm font-semibold leading-snug text-foreground sm:text-base">
                {item.question}
              </span>
              <LuChevronDown
                className={cn(
                  "mt-0.5 size-5 shrink-0 text-brand-accent transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
                aria-hidden
              />
            </button>
            <div
              id={`faq-panel-${item.slug}`}
              role="region"
              aria-labelledby={`faq-trigger-${item.slug}`}
              className={cn(
                "grid transition-[grid-template-rows] duration-200 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-[1.85] text-foreground/75 sm:px-6 sm:pb-6">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

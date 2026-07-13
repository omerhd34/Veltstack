import type { IconType } from "react-icons";
import {
  LuCircleHelp,
  LuHeadphones,
  LuLayers,
  LuReceipt,
} from "react-icons/lu";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import { cn } from "@/lib/utils";
import { FaqAccordion, type FaqItem } from "./FaqAccordion";

const categoryIcons: IconType[] = [
  LuCircleHelp,
  LuLayers,
  LuReceipt,
  LuHeadphones,
];

interface FaqCategorySectionProps {
  title: string;
  items: FaqItem[];
  index: number;
  questionCountLabel: string;
  className?: string;
}

export function FaqCategorySection({
  title,
  items,
  index,
  questionCountLabel,
  className,
}: FaqCategorySectionProps) {
  const Icon = categoryIcons[index % categoryIcons.length];

  return (
    <div className={cn("scroll-mt-28", className)}>
      <SectionScrollReveal direction="left" trigger="entry">
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent ring-1 ring-brand-accent/15 sm:size-14">
            <Icon className="size-5 sm:size-[1.35rem]" strokeWidth={1.75} aria-hidden />
          </div>
          <div className="min-w-0 pt-0.5">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h2 className="font-(family-name:--font-heading) text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                {title}
              </h2>
              <span className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/8 px-2.5 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-brand-accent">
                {questionCountLabel}
              </span>
            </div>
            <div
              aria-hidden
              className="mt-3 h-px w-12 bg-linear-to-r from-brand-accent/70 to-transparent"
            />
          </div>
        </div>
      </SectionScrollReveal>

      <SectionScrollReveal direction="right" delay={0.12} trigger="entry">
        <FaqAccordion items={items} className="mt-6 sm:mt-7" />
      </SectionScrollReveal>
    </div>
  );
}

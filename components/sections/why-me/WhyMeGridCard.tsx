"use client";

import { useState } from "react";
import { StardustOrb } from "@/components/ui/StardustOrb";
import { cn } from "@/lib/utils";
import { getWhyMeIcon } from "./why-me-icons";
import type { WhyMeIconKey } from "./why-me-items";

interface WhyMeGridCardProps {
  title: string;
  description: string;
  iconKey: WhyMeIconKey;
  index: number;
}

export function WhyMeGridCard({
  title,
  description,
  iconKey,
  index,
}: WhyMeGridCardProps) {
  const [hovered, setHovered] = useState(false);
  const Icon = getWhyMeIcon(iconKey);

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-7",
        "transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/30 hover:shadow-[0_16px_40px_rgb(58_107_82/0.08)]",
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <StardustOrb active={hovered} />

      <div className="relative flex size-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
        <Icon className="size-5" strokeWidth={1.75} aria-hidden />
      </div>

      <h3 className="relative mt-5 font-(family-name:--font-heading) text-lg font-bold tracking-tight">
        {title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <span
        aria-hidden
        className="absolute bottom-4 right-5 font-(family-name:--font-heading) text-4xl font-bold text-brand-accent/8"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </article>
  );
}

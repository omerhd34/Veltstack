import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FooterColumnProps {
  title: string;
  className?: string;
  children: ReactNode;
}

export function FooterColumn({ title, className, children }: FooterColumnProps) {
  return (
    <div className={cn("min-w-0", className)}>
      <div className="text-left">
        <h3 className="mb-5 text-base font-semibold tracking-wide text-background sm:text-lg">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}

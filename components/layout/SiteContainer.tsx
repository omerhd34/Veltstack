import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SiteContainerProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function SiteContainer({ id, className, children }: SiteContainerProps) {
  return (
    <div id={id} className={cn("mx-auto w-full max-w-site", className)}>
      {children}
    </div>
  );
}

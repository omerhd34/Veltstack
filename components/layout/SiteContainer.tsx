import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SiteContainerProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function SiteContainer({ id, className, children }: SiteContainerProps) {
  return (
    <div
      id={id}
      className={cn(
        "mx-auto w-full max-w-site px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

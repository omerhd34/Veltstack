import { cn } from "@/lib/utils";

interface PageScrollAnchorProps {
  id: string;
  className?: string;
}

export function PageScrollAnchor({ id, className }: PageScrollAnchorProps) {
  return (
    <div id={id} aria-hidden className={cn("h-0 scroll-mt-18", className)} />
  );
}

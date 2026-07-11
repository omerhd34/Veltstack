import { LuWorkflow } from "react-icons/lu";

interface ServicesMarqueeItemProps {
  label: string;
}

export function ServicesMarqueeItem({ label }: ServicesMarqueeItemProps) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 px-6">
      <span className="inline-flex size-4 shrink-0 items-center justify-center md:size-4.5">
        <LuWorkflow aria-hidden className="size-full" />
      </span>
      <span className="inline-flex items-center font-(family-name:--font-heading) text-lg font-bold leading-none tracking-wide md:text-xl">
        {label}
      </span>
    </div>
  );
}

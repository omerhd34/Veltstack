import { LuCircleCheck, LuLayers } from "react-icons/lu";
import { cn } from "@/lib/utils";

interface PackageCommonFeaturesProps {
  title: string;
  items: string[];
  className?: string;
}

export function PackageCommonFeatures({
  title,
  items,
  className,
}: PackageCommonFeaturesProps) {
  if (!items.length) return null;

  return (
    <div
      className={cn(
        "relative rounded-2xl p-px shadow-[0_8px_40px_rgb(0_0_0/0.28)]",
        "bg-linear-to-r from-emerald-500/25 via-brand-accent/20 to-emerald-600/25",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-[#0b1812] px-4 py-5 sm:px-6 sm:py-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[radial-gradient(ellipse_75%_70%_at_50%_-15%,rgb(58_107_82/0.2),transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-brand-accent/30 to-transparent"
        />

        <div className="relative flex flex-col gap-5 md:flex-row md:items-stretch md:gap-0">
          <div className="flex items-center gap-3 md:max-w-54 md:shrink-0 md:flex-col md:items-start md:justify-center md:border-r md:border-emerald-900/35 md:pr-6 lg:max-w-60 lg:pr-8">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/15 shadow-[0_4px_20px_rgb(58_107_82/0.2)] ring-1 ring-brand-accent/25">
              <LuLayers
                className="size-4 text-brand-accent"
                strokeWidth={2}
                aria-hidden
              />
            </span>
            <p className="font-(family-name:--font-heading) text-sm font-bold leading-snug tracking-tight text-emerald-50/90 sm:text-[0.9375rem]">
              {title}
            </p>
          </div>

          <ul className="grid flex-1 gap-2 sm:grid-cols-2 md:pl-6 lg:grid-cols-3 lg:gap-2.5 lg:pl-8">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-xl border border-emerald-900/40 bg-[#071510]/55 px-3 py-2.5 transition-colors duration-300 hover:border-emerald-800/55 hover:bg-[#071510]/80"
              >
                <LuCircleCheck
                  className="mt-0.5 size-3.5 shrink-0 text-brand-accent"
                  strokeWidth={2.5}
                  aria-hidden
                />
                <span className="text-[0.8125rem] leading-snug text-emerald-50/75">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

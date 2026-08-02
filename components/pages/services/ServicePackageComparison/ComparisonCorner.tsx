export function ComparisonCorner({
  categoryLabel,
  packageTitle,
}: {
  categoryLabel: string;
  packageTitle: string;
}) {
  return (
    <div className="relative min-h-20 overflow-hidden sm:min-h-24">
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          className="stroke-emerald-700/60"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <p className="absolute top-2.5 right-2.5 max-w-[70%] text-right font-(family-name:--font-heading) text-xs font-bold uppercase tracking-[0.12em] text-emerald-400/70 sm:top-3 sm:right-3 sm:text-sm">
        {categoryLabel}
      </p>
      <p className="absolute bottom-2.5 left-2.5 max-w-[70%] text-left font-(family-name:--font-heading) text-sm font-semibold leading-snug text-emerald-50/95 sm:bottom-3 sm:left-3 sm:text-base">
        {packageTitle}
      </p>
    </div>
  );
}

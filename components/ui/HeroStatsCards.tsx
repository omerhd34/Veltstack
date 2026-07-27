"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

export interface HeroStat {
  value: string;
  label: string;
  labelShort?: string;
  hint?: string;
}

interface HeroStatsCardsProps {
  stats: HeroStat[];
}

const HINT_QUERY = "(min-width: 992px) and (hover: hover)";

function StatCard({
  value,
  label,
  labelShort,
}: Pick<HeroStat, "value" | "label" | "labelShort">) {
  return (
    <div className="w-full cursor-default rounded-xl border border-emerald-900/30 bg-[#0a1612]/45 px-4 py-3.5 text-left transition-colors hover:border-emerald-700/45 hover:bg-[#0d1c17]/55 sm:px-5 sm:py-4">
      <p className="font-(family-name:--font-heading) text-xl font-bold tracking-tight text-white sm:text-2xl 2xl:text-[1.75rem]">
        {value}
      </p>
      <p className="mt-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-emerald-300/45 sm:mt-1.5 sm:text-[0.6875rem] sm:tracking-[0.16em]">
        {labelShort ? (
          <>
            <span className="sm:hidden">{labelShort}</span>
            <span className="hidden sm:inline">{label}</span>
          </>
        ) : (
          label
        )}
      </p>
    </div>
  );
}

function StatHint({
  label,
  hint,
  children,
}: {
  label: string;
  hint: string;
  children: ReactNode;
}) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const enabledRef = useRef(false);
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    const mq = window.matchMedia(HINT_QUERY);
    const sync = () => {
      enabledRef.current = mq.matches;
      if (!mq.matches) setOpen(false);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const show = () => {
    if (!enabledRef.current || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setCoords({ top: rect.top, left: rect.left, width: rect.width });
    setOpen(true);
  };

  return (
    <>
      <div
        ref={triggerRef}
        className="w-full"
        onMouseEnter={show}
        onMouseLeave={() => setOpen(false)}
      >
        {children}
      </div>
      {open
        ? createPortal(
            <div
              role="tooltip"
              style={{
                position: "fixed",
                top: coords.top - 8,
                left: coords.left,
                width: coords.width,
                transform: "translateY(-100%)",
              }}
              className="z-50 rounded-xl border border-emerald-900/50 bg-[#0a1612] p-4 text-emerald-50 shadow-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300/70">
                {label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-emerald-50/75">
                {hint}
              </p>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

export function HeroStatsCards({ stats }: HeroStatsCardsProps) {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4 2xl:gap-4">
      {stats.map((stat) => {
        const card = (
          <StatCard
            value={stat.value}
            label={stat.label}
            labelShort={stat.labelShort}
          />
        );

        return (
          <div key={stat.label} className="block w-full">
            {stat.hint ? (
              <StatHint label={stat.label} hint={stat.hint}>
                {card}
              </StatHint>
            ) : (
              card
            )}
          </div>
        );
      })}
    </div>
  );
}

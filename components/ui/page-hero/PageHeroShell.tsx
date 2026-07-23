import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeroShellProps {
  children: ReactNode;
  className?: string;
  showGrid?: boolean;
  showBottomHairline?: boolean;
  glow?: "default" | "rich" | "legal";
}

export function PageHeroShell({
  children,
  className,
  showGrid = false,
  showBottomHairline = false,
  glow = "default",
}: PageHeroShellProps) {
  const radialOpacity =
    glow === "legal" ? "0.2" : glow === "rich" ? "0.18" : "0.14";

  return (
    <section
      data-page-hero
      className={cn(
        "relative flex min-h-dvh flex-col bg-[#050f0c] pt-18 text-white",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 0%, rgb(58 107 82 / ${radialOpacity}), transparent)`,
          }}
        />
        {showGrid ? (
          <div
            className={cn(
              "absolute inset-0 bg-size-[56px_56px]",
              glow === "legal"
                ? "bg-[linear-gradient(rgb(58_107_82/0.045)_1px,transparent_1px),linear-gradient(90deg,rgb(58_107_82/0.045)_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_70%_at_40%_35%,black,transparent)]"
                : "bg-[linear-gradient(rgb(58_107_82/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(58_107_82/0.04)_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_70%_at_50%_40%,black,transparent)]",
            )}
          />
        ) : null}
        {glow === "legal" ? (
          <>
            <div className="absolute top-16 right-[12%] size-85 rounded-full bg-emerald-600/8 blur-[110px]" />
            <div className="absolute -left-24 bottom-0 size-75 rounded-full bg-emerald-800/6 blur-[100px]" />
          </>
        ) : (
          <>
            <div className="absolute -right-20 top-20 size-105 rounded-full bg-emerald-600/6 blur-[120px] 2xl:-right-24 2xl:size-120" />
            <div className="absolute -left-20 bottom-20 size-90 rounded-full bg-emerald-800/5 blur-[100px]" />
          </>
        )}
      </div>

      {children}

      {showBottomHairline ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-emerald-500/20 to-transparent"
        />
      ) : null}
    </section>
  );
}

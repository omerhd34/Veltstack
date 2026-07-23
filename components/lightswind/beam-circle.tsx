"use client";

import React, { useCallback, useMemo, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export type OrbitIconConfig = {
  icon: React.ReactNode;
  label?: string;
  href?: string;
  angleOffset?: number;
  emphasis?: boolean;
  iconSize?: number;
};

export type OrbitConfig = {
  id: number;
  radiusFactor: number;
  speed: number;
  icons: OrbitIconConfig[];
  iconSize: number;
  label?: string;
  orbitColor?: string;
  orbitThickness?: number;
};

export type BeamCircleProps = {
  size?: number;
  orbits: OrbitConfig[];
  centerIcon?: React.ReactNode;
  className?: string;
  selectedOrbitId?: number | null;
  onOrbitSelect?: (orbitId: number | null) => void;
};

function getOrbitPosition(
  halfSize: number,
  orbitRadius: number,
  angleDeg: number,
) {
  const angleRad = (angleDeg * Math.PI) / 180;
  const top = halfSize + orbitRadius * Math.sin(angleRad);
  const left = halfSize + orbitRadius * Math.cos(angleRad);

  return {
    top: Math.round(top * 1000) / 1000,
    left: Math.round(left * 1000) / 1000,
  };
}

function findOrbitIdAtPoint(
  orbits: OrbitConfig[],
  size: number,
  clientX: number,
  clientY: number,
  rect: DOMRect,
): number | null {
  const halfSize = size / 2;
  const cx = rect.left + halfSize;
  const cy = rect.top + halfSize;
  const dx = clientX - cx;
  const dy = clientY - cy;
  const distance = Math.hypot(dx, dy);
  const hitSlop = 26;

  let bestId: number | null = null;
  let bestDelta = Infinity;

  for (const orbit of orbits) {
    const orbitRadius = (size * orbit.radiusFactor) / 2;
    const delta = Math.abs(distance - orbitRadius);
    if (delta <= hitSlop && delta < bestDelta) {
      bestDelta = delta;
      bestId = orbit.id;
    }
  }

  return bestId;
}

function OrbitRing({
  orbit,
  size,
  halfSize,
  isPaused,
  isSelected,
  hoveredIconKey,
  onIconPointerEnter,
  onIconPointerLeave,
}: {
  orbit: OrbitConfig;
  size: number;
  halfSize: number;
  isPaused: boolean;
  isSelected: boolean;
  hoveredIconKey: string | null;
  onIconPointerEnter: (orbitId: number, iconKey: string) => void;
  onIconPointerLeave: (orbitId: number) => void;
}) {
  const rotation = useMotionValue(0);
  const counterRotation = useTransform(rotation, (value) => -value);
  const orbitDiameter = size * orbit.radiusFactor;
  const orbitRadius = orbitDiameter / 2;
  const ringStagger = orbit.icons.length > 0 ? 360 / orbit.icons.length / 2 : 0;

  useAnimationFrame((_, delta) => {
    if (isPaused) return;
    const degreesPerMs = 360 / (orbit.speed * 1000);
    rotation.set((rotation.get() + delta * degreesPerMs) % 360);
  });

  return (
    <>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute z-15 rounded-full border border-dashed transition-all duration-200",
          isSelected
            ? "border-[#00D4AA] bg-[#00D4AA]/10 shadow-[0_0_24px_rgb(0_212_170/0.2)]"
            : "",
        )}
        style={{
          width: orbitDiameter,
          height: orbitDiameter,
          top: halfSize - orbitRadius,
          left: halfSize - orbitRadius,
          borderColor: isSelected ? undefined : orbit.orbitColor,
          borderWidth: isSelected ? 2 : orbit.orbitThickness || 1,
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 z-20"
        style={{ width: size, height: size, rotate: rotation }}
      >
        {orbit.icons.map((orbitIcon, iconIndex) => {
          const angleDeg =
            orbitIcon.angleOffset ??
            ringStagger + (360 / orbit.icons.length) * iconIndex;
          const { top, left } = getOrbitPosition(
            halfSize,
            orbitRadius,
            angleDeg,
          );
          const iconPixelSize = orbitIcon.iconSize ?? orbit.iconSize;
          const iconKey = `${orbit.id}-${iconIndex}`;
          const isHovered = hoveredIconKey === iconKey;

          return (
            <div
              key={iconIndex}
              className={cn(
                "pointer-events-auto absolute",
                isHovered ? "z-100" : "z-20",
              )}
              style={{
                top,
                left,
                transform: "translate(-50%, -50%)",
              }}
              onPointerEnter={() => onIconPointerEnter(orbit.id, iconKey)}
              onPointerLeave={() => onIconPointerLeave(orbit.id)}
              onPointerDown={(event) => event.stopPropagation()}
            >
              <motion.div
                className="relative"
                style={{
                  width: iconPixelSize,
                  height: iconPixelSize,
                  rotate: counterRotation,
                }}
              >
                {isHovered && orbitIcon.label ? (
                  <span
                    role="tooltip"
                    className="pointer-events-none absolute bottom-full left-1/2 z-110 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-emerald-950 px-2.5 py-1 text-xs font-semibold text-emerald-50 shadow-lg ring-1 ring-emerald-700/60"
                  >
                    {orbitIcon.label}
                  </span>
                ) : null}
                {orbitIcon.href ? (
                  <Link
                    href={orbitIcon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "grid size-full cursor-pointer place-content-center rounded-full border-0 p-0 no-underline transition-transform duration-200 hover:scale-110",
                      orbitIcon.emphasis
                        ? "bg-linear-to-br from-[#00D4AA]/20 via-white to-white ring-[2.5px] ring-[#00D4AA] shadow-[0_0_0_4px_rgb(0_212_170/0.18),0_0_28px_rgb(0_212_170/0.55)]"
                        : "bg-white/90 opacity-75 shadow-sm ring-1 ring-white/15",
                    )}
                    aria-label={orbitIcon.label}
                  >
                    <div
                      className="flex shrink-0 items-center justify-center leading-none [&_img]:max-h-full [&_img]:max-w-full [&_img]:object-contain [&_svg]:h-[1em] [&_svg]:w-[1em]"
                      style={{
                        fontSize:
                          iconPixelSize * (orbitIcon.emphasis ? 0.58 : 0.5),
                      }}
                    >
                      {orbitIcon.icon}
                    </div>
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={cn(
                      "grid size-full cursor-default place-content-center rounded-full border-0 p-0",
                      orbitIcon.emphasis
                        ? "bg-linear-to-br from-[#00D4AA]/20 via-white to-white ring-[2.5px] ring-[#00D4AA] shadow-[0_0_0_4px_rgb(0_212_170/0.18),0_0_28px_rgb(0_212_170/0.55)]"
                        : "bg-white/90 opacity-75 shadow-sm ring-1 ring-white/15",
                    )}
                    aria-label={orbitIcon.label}
                  >
                    <div
                      className="flex shrink-0 items-center justify-center leading-none [&_img]:max-h-full [&_img]:max-w-full [&_img]:object-contain [&_svg]:h-[1em] [&_svg]:w-[1em]"
                      style={{
                        fontSize:
                          iconPixelSize * (orbitIcon.emphasis ? 0.58 : 0.5),
                      }}
                    >
                      {orbitIcon.icon}
                    </div>
                  </button>
                )}
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
}

const BeamCircle: React.FC<BeamCircleProps> = ({
  size = 300,
  orbits,
  centerIcon,
  className,
  selectedOrbitId = null,
  onOrbitSelect,
}) => {
  const halfSize = size / 2;
  const iconBleed = useMemo(() => {
    let maxIconSize = 0;

    for (const orbit of orbits) {
      for (const icon of orbit.icons) {
        maxIconSize = Math.max(maxIconSize, icon.iconSize ?? orbit.iconSize);
      }
    }

    return Math.ceil(maxIconSize / 2 + 20);
  }, [orbits]);
  const [hoveredIconKey, setHoveredIconKey] = useState<string | null>(null);
  const [pausedRings, setPausedRings] = useState<Set<number>>(() => new Set());

  const handleRingPointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!onOrbitSelect) return;

      const orbitId = findOrbitIdAtPoint(
        orbits,
        size,
        event.clientX,
        event.clientY,
        event.currentTarget.getBoundingClientRect(),
      );

      if (orbitId === null) return;

      onOrbitSelect(selectedOrbitId === orbitId ? null : orbitId);
    },
    [onOrbitSelect, orbits, selectedOrbitId, size],
  );

  const handleIconPointerEnter = useCallback(
    (orbitId: number, iconKey: string) => {
      setPausedRings((current) => new Set(current).add(orbitId));
      setHoveredIconKey(iconKey);
    },
    [],
  );

  const handleIconPointerLeave = useCallback((orbitId: number) => {
    setPausedRings((current) => {
      if (!current.has(orbitId)) return current;
      const next = new Set(current);
      next.delete(orbitId);
      return next;
    });
    setHoveredIconKey(null);
  }, []);

  const CenterIcon = useMemo(
    () => (
      <motion.div
        className="pointer-events-auto grid place-content-center rounded-full bg-transparent shadow-[0_0_28px_rgb(0_212_170/0.45)] ring-2 ring-[#00D4AA]/40"
        style={{ width: halfSize * 0.2, height: halfSize * 0.2 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        {centerIcon}
      </motion.div>
    ),
    [halfSize, centerIcon],
  );

  return (
    <div
      className={cn("flex flex-col items-center bg-transparent", className)}
      style={{ padding: iconBleed }}
    >
      <div
        className="relative mx-auto shrink-0 overflow-visible"
        style={{ width: size, height: size }}
      >
        {onOrbitSelect ? (
          <div
            className="absolute inset-0 z-10 cursor-pointer"
            onPointerDown={handleRingPointerDown}
            aria-hidden
          />
        ) : null}

        {orbits.map((orbit) => {
          const isSelected = selectedOrbitId === orbit.id;
          const isPaused = pausedRings.has(orbit.id) || isSelected;

          return (
            <OrbitRing
              key={orbit.id}
              orbit={orbit}
              size={size}
              halfSize={halfSize}
              isPaused={isPaused}
              isSelected={isSelected}
              hoveredIconKey={hoveredIconKey}
              onIconPointerEnter={handleIconPointerEnter}
              onIconPointerLeave={handleIconPointerLeave}
            />
          );
        })}

        <div className="pointer-events-none absolute inset-0 z-30 grid place-content-center">
          {CenterIcon}
        </div>
      </div>
    </div>
  );
};

export default BeamCircle;

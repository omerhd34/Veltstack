/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type ReactNode,
} from "react";
import { BorderBeam } from "@/components/lightswind/border-beam";
import { cn } from "@/lib/utils";

interface StardustShellProps {
  children: ReactNode;
  className?: string;
  faceClassName?: string;
  particleColor?: string;
  beamColorFrom?: string;
  beamColorTo?: string;
  active?: boolean;
  interactive?: boolean;
  hoverResetToken?: unknown;
  beamSize?: number;
  beamBorderRadius?: number;
}

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  twinkle: number;
};

export function StardustShell({
  children,
  className,
  faceClassName,
  particleColor = "#a8dfc4",
  beamColorFrom = "#3A6B52",
  beamColorTo = "#6ee7b7",
  active,
  interactive = true,
  hoverResetToken,
  beamSize = 48,
  beamBorderRadius = 9999,
}: StardustShellProps) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number | null>(null);
  const hoveringRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const startLoopRef = useRef<() => void>(() => {});
  const [hovered, setHovered] = useState(false);
  const isControlled = active !== undefined;
  const isEffectActive = isControlled ? active : hovered;
  const setHoveredState = useCallback(
    (next: boolean) => {
      if (isControlled) return;
      hoveringRef.current = next;
      setHovered(next);
    },
    [isControlled],
  );

  useEffect(() => {
    if (!isControlled) return;
    hoveringRef.current = Boolean(isEffectActive);
    setHovered(false);
  }, [isControlled, isEffectActive]);

  useEffect(() => {
    if (isControlled || hoverResetToken === undefined) return;
    setHoveredState(false);
  }, [hoverResetToken, isControlled, setHoveredState]);

  const spawnParticle = useCallback(
    (width: number, height: number): Particle => {
      return {
        x: Math.random() * width,
        y: height + Math.random() * 10,
        vx: (Math.random() - 0.5) * 0.55,
        vy: -(Math.random() * 1.35 + 0.45),
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.55 + 0.35,
        twinkle: Math.random() * Math.PI * 2,
      };
    },
    [],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const root = rootRef.current;
    if (!canvas || !root) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReducedMotion = () => {
      reducedMotionRef.current = motionQuery.matches;
    };
    syncReducedMotion();

    const stopLoop = () => {
      if (frameRef.current != null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    const clearCanvas = () => {
      const rect = root.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
    };

    const resize = () => {
      const rect = root.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const tick = () => {
      frameRef.current = null;

      if (reducedMotionRef.current || document.hidden) {
        clearCanvas();
        particlesRef.current = [];
        return;
      }

      const rect = root.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      if (hoveringRef.current) {
        const maxParticles = Math.min(88, Math.floor((width * height) / 120));

        if (
          particlesRef.current.length < maxParticles &&
          Math.random() < 0.78
        ) {
          particlesRef.current.push(spawnParticle(width, height));
        }
      }

      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.twinkle += 0.1;

        if (particle.y < -8 || particle.x < -8 || particle.x > width + 8) {
          return false;
        }

        const twinkleAlpha =
          particle.alpha * (0.45 + 0.55 * Math.sin(particle.twinkle));

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 2.4, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = twinkleAlpha * 0.24;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = twinkleAlpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        return true;
      });

      if (hoveringRef.current || particlesRef.current.length > 0) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        clearCanvas();
      }
    };

    const startLoop = () => {
      if (frameRef.current != null) return;
      if (reducedMotionRef.current || document.hidden) return;
      if (!hoveringRef.current && particlesRef.current.length === 0) return;
      frameRef.current = requestAnimationFrame(tick);
    };
    startLoopRef.current = startLoop;

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(root);

    const onVisibility = () => {
      if (document.hidden) {
        stopLoop();
        clearCanvas();
        particlesRef.current = [];
        return;
      }
      startLoop();
    };

    const onMotionChange = () => {
      syncReducedMotion();
      if (reducedMotionRef.current) {
        stopLoop();
        clearCanvas();
        particlesRef.current = [];
        return;
      }
      startLoop();
    };

    document.addEventListener("visibilitychange", onVisibility);
    motionQuery.addEventListener("change", onMotionChange);
    startLoop();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      motionQuery.removeEventListener("change", onMotionChange);
      stopLoop();
      particlesRef.current = [];
      startLoopRef.current = () => {};
    };
  }, [particleColor, spawnParticle]);

  useEffect(() => {
    hoveringRef.current = Boolean(isEffectActive);
    if (isEffectActive) {
      startLoopRef.current();
      return;
    }
    if (particlesRef.current.length === 0) {
      const canvas = canvasRef.current;
      const root = rootRef.current;
      if (canvas && root) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const rect = root.getBoundingClientRect();
          ctx.clearRect(0, 0, rect.width, rect.height);
        }
      }
    } else {
      startLoopRef.current();
    }
  }, [isEffectActive]);

  const handleBlur = (event: FocusEvent<HTMLSpanElement>) => {
    if (!interactive || isControlled) return;
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setHoveredState(false);
    }
  };

  return (
    <span
      ref={rootRef}
      className={cn(
        "stardust-shell group/stardust relative inline-flex h-full rounded-full",
        interactive &&
          "transition-transform duration-400 ease-out hover:scale-[1.03] focus-within:scale-[1.03] active:scale-[0.98] motion-reduce:scale-100",
        isEffectActive &&
          "shadow-[0_0_28px_rgb(58_107_82/0.38),0_0_2px_rgb(167_243_208/0.65)]",
        isEffectActive && "stardust-shell--active",
        className,
      )}
      onMouseEnter={
        interactive && !isControlled ? () => setHoveredState(true) : undefined
      }
      onMouseLeave={
        interactive && !isControlled ? () => setHoveredState(false) : undefined
      }
      onPointerLeave={
        interactive && !isControlled ? () => setHoveredState(false) : undefined
      }
      onFocusCapture={
        interactive && !isControlled ? () => setHoveredState(true) : undefined
      }
      onBlurCapture={interactive && !isControlled ? handleBlur : undefined}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
      >
        <span
          className={cn(
            "stardust-shell__face absolute inset-0 rounded-[inherit] transition-[background-color,filter] duration-300",
            "group-hover/stardust:brightness-110 group-focus-within/stardust:brightness-110",
            faceClassName,
          )}
        />
        <canvas
          ref={canvasRef}
          className={cn(
            "absolute inset-0 rounded-[inherit] motion-reduce:hidden",
            isEffectActive ? "opacity-100" : "opacity-0",
            "transition-opacity duration-300",
          )}
        />
      </span>

      <span
        aria-hidden
        className={cn(
          "stardust-shell__border pointer-events-none absolute inset-0 z-2 rounded-[inherit] transition-[box-shadow,opacity] duration-300",
          isEffectActive
            ? "opacity-100 shadow-[inset_0_0_0_2px_rgb(167_243_208/0.8),inset_0_0_18px_rgb(110_231_183/0.16)]"
            : "opacity-0 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.1)]",
        )}
      />

      {isEffectActive ? (
        <BorderBeam
          size={beamSize}
          duration={2.8}
          colorFrom={beamColorFrom}
          colorTo={beamColorTo}
          borderThickness={2}
          opacity={1}
          glowIntensity={1.6}
          beamBorderRadius={beamBorderRadius}
          className="z-3 rounded-[inherit] motion-reduce:hidden"
        />
      ) : null}

      <span className="relative z-4 inline-flex h-full w-full rounded-[inherit]">
        {children}
      </span>
    </span>
  );
}

export const StardustButton = StardustShell;

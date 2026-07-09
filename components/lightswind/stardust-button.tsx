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
  beamSize?: number;
}

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  twinkle: number;
  idle?: boolean;
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
  beamSize = 48,
}: StardustShellProps) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number | null>(null);
  const hoveringRef = useRef(false);
  const [hovered, setHovered] = useState(false);
  const isControlled = active !== undefined;
  const isEffectActive = isControlled ? active : hovered;
  const setHoveredState = useCallback((next: boolean) => {
    if (isControlled) return;
    hoveringRef.current = next;
    setHovered(next);
    if (!next) {
      particlesRef.current = particlesRef.current.filter(
        (particle) => particle.idle,
      );
    }
  }, [isControlled]);

  useEffect(() => {
    if (!isControlled) return;
    hoveringRef.current = isEffectActive;
    if (!isEffectActive) {
      particlesRef.current = particlesRef.current.filter(
        (particle) => particle.idle,
      );
    }
  }, [isControlled, isEffectActive]);

  const spawnParticle = useCallback(
    (width: number, height: number, idle = false): Particle => {
      return {
        x: Math.random() * width,
        y: idle ? Math.random() * height : height + Math.random() * 10,
        vx: idle ? (Math.random() - 0.5) * 0.08 : (Math.random() - 0.5) * 0.55,
        vy: idle
          ? (Math.random() - 0.5) * 0.08
          : -(Math.random() * 1.35 + 0.45),
        radius: idle ? Math.random() * 1.15 + 0.35 : Math.random() * 1.5 + 0.5,
        alpha: idle ? Math.random() * 0.38 + 0.2 : Math.random() * 0.55 + 0.35,
        twinkle: Math.random() * Math.PI * 2,
        idle,
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

    const resize = () => {
      const rect = root.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const width = rect.width;
      const height = rect.height;
      const idleParticles = particlesRef.current.filter(
        (particle) => particle.idle,
      );
      particlesRef.current = idleParticles;

      const targetIdleCount = Math.min(
        32,
        Math.max(14, Math.floor((width * height) / 700)),
      );

      while (particlesRef.current.length < targetIdleCount) {
        particlesRef.current.push(spawnParticle(width, height, true));
      }
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(root);

    const tick = () => {
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
        particle.twinkle += particle.idle ? 0.04 : 0.1;

        if (particle.idle) {
          if (particle.x < 0) particle.x = width;
          if (particle.x > width) particle.x = 0;
          if (particle.y < 0) particle.y = height;
          if (particle.y > height) particle.y = 0;
        } else if (
          particle.y < -8 ||
          particle.x < -8 ||
          particle.x > width + 8
        ) {
          return false;
        }

        const twinkleAlpha =
          particle.alpha * (0.45 + 0.55 * Math.sin(particle.twinkle));

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.radius * (particle.idle ? 1.6 : 2.4),
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = twinkleAlpha * (particle.idle ? 0.22 : 0.24);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.idle ? "#d1fae5" : particleColor;
        ctx.globalAlpha = twinkleAlpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        return true;
      });

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      observer.disconnect();
      if (frameRef.current != null) cancelAnimationFrame(frameRef.current);
      particlesRef.current = [];
    };
  }, [particleColor, spawnParticle]);

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
        "stardust-shell group/stardust relative inline-flex h-full overflow-hidden rounded-full",
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
      onFocusCapture={
        interactive && !isControlled ? () => setHoveredState(true) : undefined
      }
      onBlurCapture={interactive && !isControlled ? handleBlur : undefined}
    >
      <span
        aria-hidden
        className={cn(
          "stardust-shell__face pointer-events-none absolute inset-0 z-0 rounded-[inherit] transition-[background-color,filter] duration-300",
          "group-hover/stardust:brightness-110 group-focus-within/stardust:brightness-110",
          faceClassName,
        )}
      />

      <canvas
        ref={canvasRef}
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 z-1 rounded-[inherit] motion-reduce:hidden",
          isEffectActive ? "opacity-100" : "opacity-60",
          "transition-opacity duration-500",
        )}
      />

      <span
        aria-hidden
        className={cn(
          "stardust-shell__border pointer-events-none absolute inset-0 z-2 rounded-[inherit] transition-all duration-300",
          isEffectActive
            ? "border-2 border-emerald-200/80 opacity-100 shadow-[inset_0_0_18px_rgb(110_231_183/0.16)]"
            : "border border-white/10 opacity-0",
        )}
      />

      <BorderBeam
        size={beamSize}
        duration={2.8}
        colorFrom={beamColorFrom}
        colorTo={beamColorTo}
        borderThickness={2}
        opacity={isEffectActive ? 1 : 0}
        glowIntensity={isEffectActive ? 1.6 : 0}
        beamBorderRadius={9999}
        className={cn(
          "z-3 rounded-[inherit] motion-reduce:hidden transition-opacity duration-300",
          isEffectActive ? "opacity-100" : "opacity-0",
        )}
      />

      <span className="relative z-4 inline-flex h-full w-full rounded-[inherit]">
        {children}
      </span>
    </span>
  );
}

export const StardustButton = StardustShell;

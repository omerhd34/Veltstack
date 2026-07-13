"use client";

import {
  useRef,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { StardustIconButton } from "@/components/ui/StardustIconButton";
import { cn } from "@/lib/utils";

export interface ThreeDCarouselItem {
  id: number | string;
}

interface ThreeDCarouselLabels {
  prev: string;
  next: string;
  dot: string;
  region?: string;
}

interface ThreeDCarouselRenderContext {
  isActive: boolean;
  onActivate: () => void;
  activateLabel: string;
}

interface ThreeDCarouselProps<T extends ThreeDCarouselItem> {
  items: T[];
  renderItem: (
    item: T,
    index: number,
    context: ThreeDCarouselRenderContext,
  ) => ReactNode;
  getSlideLabel?: (item: T) => string;
  formatSlideAnnouncement?: (
    label: string,
    current: number,
    total: number,
  ) => string;
  formatActivateLabel?: (label: string) => string;
  autoRotate?: boolean;
  rotateInterval?: number;
  theme?: "dark" | "light";
  className?: string;
  viewportClassName?: string;
  labels?: ThreeDCarouselLabels;
}

function formatSlideNumber(value: number) {
  return String(value).padStart(2, "0");
}

function getPagerWindow(active: number, total: number, size = 5) {
  const half = Math.floor(size / 2);
  return Array.from({ length: Math.min(size, total) }, (_, offset) => {
    if (total <= size) return { slideIndex: offset, offset };
    const slideIndex = (active - half + offset + total) % total;
    return { slideIndex, offset };
  });
}

function ThreeDCarousel<T extends ThreeDCarouselItem>({
  items,
  renderItem,
  getSlideLabel,
  formatSlideAnnouncement,
  formatActivateLabel,
  autoRotate = true,
  rotateInterval = 5000,
  theme = "dark",
  className,
  viewportClassName,
  labels = {
    prev: "Previous",
    next: "Next",
    dot: "Slide",
  },
}: ThreeDCarouselProps<T>) {
  const [active, setActive] = useState(0);
  const [rotateEpoch, setRotateEpoch] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const minSwipeDistance = 50;
  const dragStartX = useRef<number | null>(null);
  const dragEndX = useRef<number | null>(null);
  const dragIntentRef = useRef(false);
  const suppressClickRef = useRef(false);
  const pagerWindow = getPagerWindow(active, items.length);

  const selectSlide = useCallback((index: number) => {
    setActive(index);
    setRotateEpoch((epoch) => epoch + 1);
  }, []);

  const goPrev = useCallback(() => {
    selectSlide((active - 1 + items.length) % items.length);
  }, [active, items.length, selectSlide]);

  const goNext = useCallback(() => {
    selectSlide((active + 1) % items.length);
  }, [active, items.length, selectSlide]);

  useEffect(() => {
    if (!autoRotate || !isInView || isHovering || items.length <= 1) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [
    isInView,
    isHovering,
    autoRotate,
    rotateInterval,
    items.length,
    rotateEpoch,
  ]);

  useEffect(() => {
    const node = carouselRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const resetDrag = useCallback(() => {
    dragStartX.current = null;
    dragEndX.current = null;
    dragIntentRef.current = false;
    setIsDragging(false);
  }, []);

  const finishDrag = useCallback(
    (clientX: number) => {
      if (dragStartX.current == null) return;

      const distance = dragStartX.current - clientX;
      if (distance > minSwipeDistance) {
        suppressClickRef.current = true;
        goNext();
      } else if (distance < -minSwipeDistance) {
        suppressClickRef.current = true;
        goPrev();
      }

      resetDrag();
    },
    [goNext, goPrev, resetDrag],
  );

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (items.length <= 1 || e.button !== 0) return;
    if ((e.target as HTMLElement).closest("[data-carousel-control]")) return;

    dragStartX.current = e.clientX;
    dragEndX.current = e.clientX;
    dragIntentRef.current = false;
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartX.current == null) return;

    dragEndX.current = e.clientX;
    const delta = Math.abs(e.clientX - dragStartX.current);
    if (!dragIntentRef.current && delta > 10) {
      dragIntentRef.current = true;
      setIsDragging(true);
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartX.current == null) return;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    if (dragIntentRef.current) {
      finishDrag(dragEndX.current ?? e.clientX);
      return;
    }

    resetDrag();
  };

  const onPointerCancel = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartX.current == null) return;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    resetDrag();
  };

  const onClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!suppressClickRef.current) return;
    e.preventDefault();
    e.stopPropagation();
    suppressClickRef.current = false;
  };

  const slideDragProps =
    items.length > 1
      ? {
          onPointerDown,
          onPointerMove,
          onPointerUp,
          onPointerCancel,
          onClickCapture,
        }
      : {};

  const getCardAnimationClass = (index: number) => {
    const base =
      "absolute top-1/2 w-[min(88%,20.5rem)] -translate-y-1/2 transition-all duration-500 ease-out sm:w-[min(70%,24rem)] md:w-1/2";

    if (index === active) {
      return cn(base, "left-1/2 z-20 -translate-x-1/2 scale-100 opacity-100");
    }
    if (index === (active + 1) % items.length) {
      return cn(
        base,
        "right-0 z-10 origin-right translate-x-[18%] scale-[0.9] opacity-45 sm:translate-x-0 sm:scale-[0.94] sm:opacity-100",
      );
    }
    if (index === (active - 1 + items.length) % items.length) {
      return cn(
        base,
        "left-0 z-10 origin-left -translate-x-[18%] scale-[0.9] opacity-45 sm:translate-x-0 sm:scale-[0.94] sm:opacity-100",
      );
    }
    return cn(
      base,
      "left-1/2 z-0 -translate-x-1/2 scale-90 opacity-0 pointer-events-none",
    );
  };

  if (items.length === 0) return null;

  const isLight = theme === "light";
  const navButtonClass = isLight ? "shadow-sm" : "shadow-lg";
  const pagerShellClass = isLight
    ? "border-border/60 bg-white/70 shadow-[0_4px_20px_rgb(0,0,0,0.04)]"
    : "border-white/15 bg-white/10 shadow-[0_4px_20px_rgb(0,0,0,0.12)]";
  const pagerDotClass = isLight ? "bg-brand-accent/20 hover:bg-brand-accent/40" : "bg-white/25 hover:bg-white/45";
  const pagerDividerClass = isLight ? "bg-border/80" : "bg-white/25";
  const pagerTotalClass = isLight ? "text-muted-foreground" : "text-white/55";

  const activeItem = items[active];
  const slideLabel = getSlideLabel?.(activeItem) ?? String(active + 1);
  const slideAnnouncement =
    formatSlideAnnouncement?.(slideLabel, active + 1, items.length) ??
    `${slideLabel}, ${active + 1} / ${items.length}`;

  return (
    <section
      className={cn("mx-auto w-full", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={labels.region}
    >
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {slideAnnouncement}
      </p>
      <div
        className={cn(
          "grid items-center",
          items.length > 1
            ? "grid-cols-1 gap-3 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:gap-4 md:gap-5"
            : "grid-cols-1",
        )}
      >
        {items.length > 1 ? (
          <StardustIconButton
            type="button"
            data-carousel-control
            tone={isLight ? "light" : "glass"}
            className={navButtonClass}
            shellClassName="mx-auto hidden size-11 sm:inline-flex"
            onClick={goPrev}
            aria-label={labels.prev}
          >
            <LuChevronLeft className="size-5" aria-hidden />
          </StardustIconButton>
        ) : null}

        <div
          className={cn(
            "relative h-[min(380px,58vh)] min-h-[300px] min-w-0 overflow-hidden sm:h-[420px] md:h-[440px] md:min-h-[340px]",
            viewportClassName,
          )}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          ref={carouselRef}
        >
          <div className="pointer-events-none absolute inset-0">
            {items.map((item, index) => {
              const isActive = index === active;
              const isFullyHidden =
                index !== active &&
                index !== (active + 1) % items.length &&
                index !== (active - 1 + items.length) % items.length;
              const itemLabel = getSlideLabel?.(item) ?? String(index + 1);
              const activateLabel =
                formatActivateLabel?.(itemLabel) ?? `Show slide ${index + 1}`;

              return (
                <div
                  key={item.id}
                  className={cn(
                    getCardAnimationClass(index),
                    isFullyHidden
                      ? "pointer-events-none"
                      : cn(
                          "pointer-events-auto",
                          items.length > 1 &&
                            cn(
                              "touch-pan-y select-none",
                              isDragging ? "cursor-grabbing" : "cursor-grab",
                            ),
                        ),
                  )}
                  aria-hidden={isFullyHidden || !isActive || undefined}
                  {...(!isFullyHidden ? slideDragProps : {})}
                >
                  {renderItem(item, index, {
                    isActive,
                    onActivate: () => selectSlide(index),
                    activateLabel,
                  })}
                </div>
              );
            })}
          </div>

          {items.length > 1 ? (
            <div className="absolute inset-x-0 bottom-2 z-30 flex items-center justify-center sm:bottom-4">
              <div
                className={cn(
                  "inline-flex items-center gap-1 rounded-full border px-2 py-1.5 backdrop-blur-md",
                  pagerShellClass,
                )}
              >
                {pagerWindow.map(({ slideIndex, offset }) => {
                  const isActive = slideIndex === active;
                  const distance = Math.abs(
                    offset - Math.floor(pagerWindow.length / 2),
                  );

                  return (
                    <button
                      key={`pager-${offset}-${slideIndex}`}
                      type="button"
                      data-carousel-control
                      onClick={() => selectSlide(slideIndex)}
                      aria-label={`${labels.dot} ${slideIndex + 1}`}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "flex items-center justify-center rounded-full font-(family-name:--font-heading) transition-all duration-500 ease-out motion-reduce:transition-none",
                        isActive
                          ? "h-8 min-w-10 bg-brand-accent px-2.5 text-xs font-semibold tracking-[0.12em] text-white shadow-[0_6px_16px_rgb(58,107,82,0.28)]"
                          : cn(
                              "size-2",
                              pagerDotClass,
                              distance === 1 && "size-2.5",
                              distance === 2 && "size-1.5 opacity-70",
                            ),
                      )}
                    >
                      {isActive ? (
                        formatSlideNumber(slideIndex + 1)
                      ) : (
                        <span className="sr-only">
                          {formatSlideNumber(slideIndex + 1)}
                        </span>
                      )}
                    </button>
                  );
                })}
                <span
                  aria-hidden
                  className={cn("mx-1 h-3 w-px", pagerDividerClass)}
                />
                <span
                  className={cn(
                    "pr-1.5 font-(family-name:--font-heading) text-[11px] tracking-[0.14em]",
                    pagerTotalClass,
                  )}
                >
                  {formatSlideNumber(items.length)}
                </span>
              </div>
            </div>
          ) : null}
        </div>

        {items.length > 1 ? (
          <StardustIconButton
            type="button"
            data-carousel-control
            tone={isLight ? "light" : "glass"}
            className={navButtonClass}
            shellClassName="mx-auto hidden size-11 sm:inline-flex"
            onClick={goNext}
            aria-label={labels.next}
          >
            <LuChevronRight className="size-5" aria-hidden />
          </StardustIconButton>
        ) : null}
      </div>
    </section>
  );
}

export default ThreeDCarousel;

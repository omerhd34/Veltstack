"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  forwardRef,
  useCallback,
  type ReactNode,
} from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useDragScroll } from "@/components/hooks/use-drag-scroll";
import { CarouselPagination } from "@/components/ui/CarouselPagination";
import { StardustIconButton } from "@/components/ui/StardustIconButton";
import { cn } from "@/lib/utils";

function getVisibleColumnCount(columnsPerView: 1 | 2 | 3): number {
  if (columnsPerView === 1) return 1;
  if (typeof window === "undefined") return 1;

  const isMd = window.matchMedia("(min-width: 768px)").matches;
  const isAbove1440 = window.matchMedia("(min-width: 1441px)").matches;

  if (!isMd) return 1;
  if (columnsPerView === 2) return 2;
  return isAbove1440 ? 3 : 2;
}

export interface FeatureItem {
  id?: string;
  title: string;
  description: string;
  image?: string;
  tag?: string;
  href?: string;
  index?: number;
  coverGradient?: string;
}

export interface ScrollCarouselNavLabels {
  prev: string;
  next: string;
}

export interface ScrollCarouselProps {
  features: FeatureItem[];
  className?: string;
  /** @deprecated Unused — kept for call-site compatibility. */
  maxScrollHeight?: number;
  /** @deprecated Unused — second row / pin mode removed. */
  hideSecondRow?: boolean;
  containerClassName?: string;
  cardClassName?: string;
  progressBarClassName?: string;
  renderFeature?: (feature: FeatureItem, index: number) => ReactNode;
  /** @deprecated Always drag/snap; pin mode removed. */
  interactionMode?: "scroll-pin" | "drag";
  navLabels?: ScrollCarouselNavLabels;
  alignStart?: boolean;
  columnsPerView?: 1 | 2 | 3;
  viewportClassName?: string;
  loop?: boolean;
  progressStyle?: "bar" | "pages" | "pagination" | "none";
  navPlacement?: "inline" | "outside" | "bottom";
  showNavigation?: boolean;
}

export const ScrollCarousel = forwardRef<HTMLDivElement, ScrollCarouselProps>(
  (
    {
      features,
      className,
      containerClassName,
      cardClassName,
      progressBarClassName,
      renderFeature,
      navLabels = { prev: "Previous", next: "Next" },
      alignStart = false,
      columnsPerView = 1,
      viewportClassName,
      loop = false,
      progressStyle = "bar",
      navPlacement = "inline",
      showNavigation = true,
    },
    ref,
  ) => {
    const viewportRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<HTMLDivElement[]>([]);
    const [isLgViewport, setIsLgViewport] = useState(false);
    const [dragProgress, setDragProgress] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const [pageIndicator, setPageIndicator] = useState({
      current: 1,
      total: 1,
    });

    const { handleClickCapture } = useDragScroll(viewportRef, {
      enabled: true,
      disableOnDesktop: true,
    });

    useEffect(() => {
      const checkViewport = () => {
        setIsLgViewport(window.matchMedia("(min-width: 1024px)").matches);
      };

      checkViewport();
      window.addEventListener("resize", checkViewport);
      return () => window.removeEventListener("resize", checkViewport);
    }, []);

    const updateScrollIndicator = useCallback(() => {
      const viewport = viewportRef.current;
      const firstCard = cardRefs.current[0];
      const track = scrollContainerRef.current;
      if (!viewport) return;

      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      const progress = maxScroll > 0 ? viewport.scrollLeft / maxScroll : 0;
      setDragProgress(progress);

      if (!firstCard) {
        setPageIndicator({ current: 1, total: 1 });
        return;
      }

      const gap = track
        ? Number.parseFloat(getComputedStyle(track).gap) || 32
        : 32;
      const pageSize = getVisibleColumnCount(columnsPerView);
      const totalPages = Math.max(1, Math.ceil(features.length / pageSize));
      const pageStep = (firstCard.offsetWidth + gap) * pageSize;
      const edgeThreshold = 8;
      let currentPage = 1;
      if (pageStep > 0) {
        if (maxScroll > 0 && viewport.scrollLeft >= maxScroll - edgeThreshold) {
          currentPage = totalPages;
        } else {
          currentPage = Math.min(
            totalPages,
            Math.max(1, Math.round(viewport.scrollLeft / pageStep) + 1),
          );
        }
      }

      setPageIndicator({ current: currentPage, total: totalPages });
    }, [columnsPerView, features.length]);

    useEffect(() => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      updateScrollIndicator();

      viewport.addEventListener("scroll", updateScrollIndicator, {
        passive: true,
      });
      window.addEventListener("resize", updateScrollIndicator);

      return () => {
        viewport.removeEventListener("scroll", updateScrollIndicator);
        window.removeEventListener("resize", updateScrollIndicator);
      };
    }, [updateScrollIndicator, features.length, slideWidth]);

    useLayoutEffect(() => {
      if (columnsPerView === 1) {
        setSlideWidth(0);
        return;
      }

      const measureSlideWidth = () => {
        const viewport = viewportRef.current;
        const track = scrollContainerRef.current;
        if (!viewport) return;

        const gap = track
          ? Number.parseFloat(getComputedStyle(track).gap) || 32
          : 32;
        const visibleColumns = getVisibleColumnCount(columnsPerView);
        const nextWidth = Math.floor(
          (viewport.clientWidth - gap * (visibleColumns - 1)) / visibleColumns,
        );

        setSlideWidth(nextWidth > 0 ? nextWidth : 0);
      };

      measureSlideWidth();

      const viewport = viewportRef.current;
      if (!viewport) return;

      const observer = new ResizeObserver(measureSlideWidth);
      observer.observe(viewport);
      window.addEventListener("resize", measureSlideWidth);

      return () => {
        observer.disconnect();
        window.removeEventListener("resize", measureSlideWidth);
      };
    }, [columnsPerView, features.length]);

    const scrollByCard = useCallback(
      (direction: -1 | 1) => {
        const viewport = viewportRef.current;
        const firstCard = cardRefs.current[0];
        const track = scrollContainerRef.current;
        if (!viewport || !firstCard) return;

        const gap = track
          ? Number.parseFloat(getComputedStyle(track).gap) || 32
          : 32;
        const pageSize = getVisibleColumnCount(columnsPerView);
        const step = (firstCard.offsetWidth + gap) * pageSize;
        const maxScroll = viewport.scrollWidth - viewport.clientWidth;
        const edgeThreshold = 8;

        if (loop && maxScroll > 0) {
          if (
            direction === 1 &&
            viewport.scrollLeft >= maxScroll - edgeThreshold
          ) {
            viewport.scrollTo({ left: 0, behavior: "smooth" });
            return;
          }

          if (direction === -1 && viewport.scrollLeft <= edgeThreshold) {
            viewport.scrollTo({ left: maxScroll, behavior: "smooth" });
            return;
          }
        }

        viewport.scrollBy({ left: direction * step, behavior: "smooth" });
      },
      [columnsPerView, loop],
    );

    const scrollToPage = useCallback(
      (pageIndex: number) => {
        const viewport = viewportRef.current;
        const firstCard = cardRefs.current[0];
        const track = scrollContainerRef.current;
        if (!viewport || !firstCard) return;

        const gap = track
          ? Number.parseFloat(getComputedStyle(track).gap) || 32
          : 32;
        const pageSize = getVisibleColumnCount(columnsPerView);
        const pageStep = (firstCard.offsetWidth + gap) * pageSize;
        const maxScroll = viewport.scrollWidth - viewport.clientWidth;

        viewport.scrollTo({
          left: Math.min(pageIndex * pageStep, maxScroll),
          behavior: "smooth",
        });
      },
      [columnsPerView],
    );

    const navOutside = navPlacement === "outside";
    const navBottom = navPlacement === "bottom";
    const navButtonShellClass = "hidden size-0 lg:inline-flex";
    const navButtonClass = "shadow-lg";

    return (
      <div
        className={cn(
          "relative overflow-visible bg-transparent text-foreground",
          className,
        )}
        ref={ref}
      >
        <div
          className={cn(
            "relative z-10 flex flex-col gap-0 overflow-visible py-4 md:py-6",
            containerClassName,
          )}
        >
          <div
            className={cn(
              "w-full",
              navOutside
                ? "flex items-center justify-center gap-3 px-4 md:gap-4"
                : "relative",
            )}
          >
            {navOutside && showNavigation ? (
              <StardustIconButton
                type="button"
                tone="glass"
                onClick={() => scrollByCard(-1)}
                aria-label={navLabels.prev}
                className={navButtonClass}
                shellClassName={navButtonShellClass}
              >
                <LuChevronLeft className="size-5" aria-hidden />
              </StardustIconButton>
            ) : null}

            <div
              className={cn(
                navOutside
                  ? "min-w-0 w-full max-w-site"
                  : "mx-auto w-full max-w-site",
              )}
            >
              <div
                className={cn(
                  !navOutside &&
                    !navBottom &&
                    "flex items-center gap-3 md:gap-4",
                )}
              >
                {!navOutside && !navBottom && showNavigation ? (
                  <StardustIconButton
                    type="button"
                    tone="glass"
                    onClick={() => scrollByCard(-1)}
                    aria-label={navLabels.prev}
                    className={navButtonClass}
                    shellClassName={navButtonShellClass}
                  >
                    <LuChevronLeft className="size-5" aria-hidden />
                  </StardustIconButton>
                ) : null}

                <div
                  ref={viewportRef}
                  onClickCapture={handleClickCapture}
                  className={cn(
                    "overflow-x-auto overflow-y-visible pt-2",
                    "scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
                    !isLgViewport && "cursor-grab",
                    "snap-x snap-mandatory",
                    navOutside ||
                      navBottom ||
                      !(alignStart && columnsPerView === 1)
                      ? "w-full px-0"
                      : "min-w-0 flex-1 pl-[max(1rem,calc((100%-var(--site-max-width,80rem))/2))] pr-4 md:pr-6",
                    !navOutside && !navBottom && "min-w-0 flex-1",
                    viewportClassName,
                  )}
                >
                  <div
                    ref={scrollContainerRef}
                    className={cn(
                      "flex w-max flex-row items-stretch gap-6 md:gap-8",
                      columnsPerView > 1 && slideWidth === 0 && "invisible",
                    )}
                  >
                    {features.map((feature, index) => (
                      <div
                        key={feature.id ?? `row-1-${index}`}
                        ref={(el: HTMLDivElement | null) => {
                          if (el) cardRefs.current[index] = el;
                        }}
                        className={cn(
                          "feature-card relative z-10 h-full shrink-0 snap-start snap-always transition-all duration-300 ease-in-out",
                          "hover:z-20 focus-within:z-20",
                          columnsPerView > 1
                            ? null
                            : cn(
                                "w-[min(92vw,480px)] sm:w-[min(88vw,480px)]",
                                alignStart ? "snap-start" : "snap-center",
                              ),
                          cardClassName,
                        )}
                        style={
                          columnsPerView > 1 && slideWidth > 0
                            ? { width: slideWidth, flexBasis: slideWidth }
                            : undefined
                        }
                      >
                        {renderFeature ? (
                          renderFeature(feature, index)
                        ) : (
                          <div
                            className={cn(
                              "relative my-4 flex h-full min-h-[min(520px,70vh)] items-center justify-center rounded-3xl border p-4 backdrop-blur-lg transition-all duration-300 lg:p-8",
                              "text-black dark:text-white",
                              "group-hover:scale-105 centered:scale-105",
                            )}
                          >
                            {feature.image ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={feature.image}
                                alt=""
                                className="absolute inset-0 z-[-1] h-full w-full rounded-3xl object-cover"
                              />
                            ) : null}
                            <div className="absolute inset-x-0 bottom-4 z-10 w-full px-4">
                              <div className="flex h-full translate-y-4 flex-col justify-end text-center opacity-100 transition-all duration-300 ease-out">
                                <h3 className="mb-0 text-2xl font-bold text-white transition-all duration-300">
                                  {feature.title}
                                </h3>
                                <p className="mb-4 text-xs text-white opacity-60">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 rounded-2xl transition-all duration-300 group-hover:bg-black/5 group-hover:blur-md dark:group-hover:bg-white/5 centered:bg-black/5 dark:centered:bg-white/5" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {!navOutside && !navBottom && showNavigation ? (
                  <StardustIconButton
                    type="button"
                    tone="glass"
                    onClick={() => scrollByCard(1)}
                    aria-label={navLabels.next}
                    className={navButtonClass}
                    shellClassName={navButtonShellClass}
                  >
                    <LuChevronRight className="size-5" aria-hidden />
                  </StardustIconButton>
                ) : null}
              </div>
            </div>

            {navOutside && showNavigation ? (
              <StardustIconButton
                type="button"
                tone="glass"
                onClick={() => scrollByCard(1)}
                aria-label={navLabels.next}
                className={navButtonClass}
                shellClassName={navButtonShellClass}
              >
                <LuChevronRight className="size-5" aria-hidden />
              </StardustIconButton>
            ) : null}
          </div>

          {features.length > 1 && progressStyle !== "none" ? (
            progressStyle === "pagination" ? (
              <div className="mt-4 flex items-center justify-center gap-3 md:mt-5">
                {navBottom && showNavigation ? (
                  <StardustIconButton
                    type="button"
                    tone="glass"
                    onClick={() => scrollByCard(-1)}
                    aria-label={navLabels.prev}
                    className={navButtonClass}
                    shellClassName="hidden size-11 shrink-0 lg:inline-flex"
                  >
                    <LuChevronLeft className="size-5" aria-hidden />
                  </StardustIconButton>
                ) : null}

                <CarouselPagination
                  activeIndex={pageIndicator.current - 1}
                  total={pageIndicator.total}
                  onSelect={scrollToPage}
                  theme="dark"
                />

                {navBottom && showNavigation ? (
                  <StardustIconButton
                    type="button"
                    tone="glass"
                    onClick={() => scrollByCard(1)}
                    aria-label={navLabels.next}
                    className={navButtonClass}
                    shellClassName="hidden size-11 shrink-0 lg:inline-flex"
                  >
                    <LuChevronRight className="size-5" aria-hidden />
                  </StardustIconButton>
                ) : null}
              </div>
            ) : progressStyle === "pages" ? (
              <p
                className="mt-4 text-center text-sm font-medium tabular-nums tracking-wide text-white/45 md:mt-5"
                aria-live="polite"
                aria-atomic="true"
              >
                {pageIndicator.current} / {pageIndicator.total}
              </p>
            ) : (
              <div
                className={cn(
                  "mx-auto mt-4 h-1.5 w-48 overflow-hidden rounded-full md:mt-5",
                  progressBarClassName ?? "bg-white/20",
                )}
              >
                <div
                  className="h-full rounded-full transition-all duration-150"
                  style={{ width: `${dragProgress * 100}%` }}
                >
                  <div className="animated-water h-full w-full" />
                </div>
              </div>
            )
          ) : null}
        </div>
      </div>
    );
  },
);

ScrollCarousel.displayName = "ScrollCarousel";

export default ScrollCarousel;

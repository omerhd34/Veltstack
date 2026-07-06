"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type MouseEvent as ReactMouseEvent,
  type RefObject,
} from "react";

const DRAG_THRESHOLD_PX = 6;

interface UseDragScrollOptions {
  enabled?: boolean;
  disableOnDesktop?: boolean;
}

function isLgViewport() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

export function useDragScroll(
  viewportRef: RefObject<HTMLElement | null>,
  { enabled = true, disableOnDesktop = false }: UseDragScrollOptions = {},
) {
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const didDragRef = useRef(false);

  const consumeDrag = useCallback(() => {
    const dragged = didDragRef.current;
    didDragRef.current = false;
    return dragged;
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !enabled) return;

    const onMouseDown = (event: MouseEvent) => {
      if (event.button !== 0) return;
      if (disableOnDesktop && isLgViewport()) return;

      isDraggingRef.current = true;
      didDragRef.current = false;
      startXRef.current = event.pageX;
      scrollLeftRef.current = viewport.scrollLeft;
      viewport.style.scrollSnapType = "none";
      viewport.style.cursor = "grabbing";
      viewport.style.userSelect = "none";
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!isDraggingRef.current) return;

      event.preventDefault();
      const delta = event.pageX - startXRef.current;

      if (Math.abs(delta) > DRAG_THRESHOLD_PX) {
        didDragRef.current = true;
      }

      viewport.scrollLeft = scrollLeftRef.current - delta;
    };

    const endDrag = () => {
      if (!isDraggingRef.current) return;

      isDraggingRef.current = false;
      viewport.style.removeProperty("scroll-snap-type");
      viewport.style.removeProperty("cursor");
      viewport.style.removeProperty("user-select");
    };

    viewport.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", endDrag);

    return () => {
      viewport.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", endDrag);
      endDrag();
    };
  }, [disableOnDesktop, enabled, viewportRef]);

  const handleClickCapture = useCallback(
    (event: ReactMouseEvent) => {
      if (!consumeDrag()) return;
      event.preventDefault();
      event.stopPropagation();
    },
    [consumeDrag],
  );

  return { handleClickCapture, didDragRef };
}

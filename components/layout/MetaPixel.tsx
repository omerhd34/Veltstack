"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

type FbqFn = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  loaded: boolean;
  version: string;
  push: FbqFn;
};

declare global {
  interface Window {
    fbq?: FbqFn;
    _fbq?: FbqFn;
  }
}

function loadMetaPixel(pixelId: string) {
  if (window.fbq) return;

  const fbq = ((...args: unknown[]) => {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
      return;
    }
    fbq.queue.push(args);
  }) as FbqFn;

  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.push = fbq;
  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  fbq("init", pixelId);
  fbq("track", "PageView");
}

export function MetaPixel() {
  const pathname = usePathname();
  const loadedRef = useRef(false);
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (!META_PIXEL_ID) return;

    const enable = () => {
      if (loadedRef.current || !META_PIXEL_ID) return;
      loadedRef.current = true;
      loadMetaPixel(META_PIXEL_ID);
    };

    const gestures = ["pointerdown", "keydown", "touchstart"] as const;
    for (const event of gestures) {
      window.addEventListener(event, enable, { once: true, passive: true });
    }

    return () => {
      for (const event of gestures) {
        window.removeEventListener(event, enable);
      }
    };
  }, []);

  useEffect(() => {
    if (!META_PIXEL_ID) return;
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname]);

  if (!META_PIXEL_ID) return null;

  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height={1}
        width={1}
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}

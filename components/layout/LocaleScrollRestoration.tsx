"use client";

import { useLayoutEffect } from "react";
import { consumeLocaleSwitchScroll } from "@/lib/locale-scroll";

export function LocaleScrollRestoration() {
  useLayoutEffect(() => {
    const y = consumeLocaleSwitchScroll();
    if (y === null) return;

    const restore = () => {
      window.scrollTo({ top: y, left: 0, behavior: "auto" });
    };

    restore();
    requestAnimationFrame(restore);

    const timeoutId = window.setTimeout(restore, 0);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return null;
}

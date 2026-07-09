"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "@/i18n/navigation";
import {
  clearLocaleSwitchScroll,
  resolveLocaleSwitchScroll,
} from "@/lib/locale-scroll";

export function LocaleScrollRestoration() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const savedY = resolveLocaleSwitchScroll();
    const isLocaleSwitch = savedY !== null;

    const applyScroll = () => {
      if (isLocaleSwitch) {
        window.scrollTo({ top: savedY, left: 0, behavior: "auto" });
        return;
      }

      if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    };

    applyScroll();

    const rafId = requestAnimationFrame(applyScroll);
    const timeoutId = window.setTimeout(() => {
      applyScroll();
      if (isLocaleSwitch) {
        clearLocaleSwitchScroll();
      }
    }, 0);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}

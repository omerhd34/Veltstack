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

    const scrollToHash = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return false;
      const el = document.getElementById(id);
      if (!el) return false;

      const header = document.querySelector("header");
      const headerHeight = header?.getBoundingClientRect().height ?? 72;
      const gap = 16;
      const top =
        window.scrollY + el.getBoundingClientRect().top - headerHeight - gap;

      window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "smooth" });
      return true;
    };

    const applyScroll = () => {
      if (isLocaleSwitch) {
        window.scrollTo({ top: savedY, left: 0, behavior: "auto" });
        return;
      }

      if (scrollToHash()) return;

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    applyScroll();

    const rafId = requestAnimationFrame(applyScroll);
    const timeoutId = window.setTimeout(() => {
      applyScroll();
      if (isLocaleSwitch) {
        clearLocaleSwitchScroll();
      }
    }, 0);
    // FAQ accordion açıldıktan sonra yüksekliği netleşince yeniden hizala
    const hashRetryId = window.setTimeout(applyScroll, 320);

    const onHashChange = () => {
      scrollToHash();
      window.setTimeout(scrollToHash, 320);
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
      window.clearTimeout(hashRetryId);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  return null;
}

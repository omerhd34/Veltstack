"use client";

import { useEffect } from "react";
import { usePathname } from "@/i18n/navigation";
import {
  clearLocaleSwitchScroll,
  resolveLocaleSwitchScroll,
} from "@/lib/locale-scroll";

export function LocaleScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const savedY = resolveLocaleSwitchScroll();
    const isLocaleSwitch = savedY !== null;
    const hash = window.location.hash.replace(/^#/, "");

    if (!isLocaleSwitch && !hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const scrollToHash = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return false;
      const el = document.getElementById(id);
      if (!el) return false;

      const top = el.getBoundingClientRect().top + window.scrollY - 88;

      window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "smooth" });
      return true;
    };

    const applyScroll = () => {
      if (isLocaleSwitch) {
        window.scrollTo({ top: savedY, left: 0, behavior: "auto" });
        return;
      }

      scrollToHash();
    };

    applyScroll();

    const rafId = requestAnimationFrame(applyScroll);
    const timeoutId = window.setTimeout(() => {
      applyScroll();
      if (isLocaleSwitch) {
        clearLocaleSwitchScroll();
      }
    }, 0);
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

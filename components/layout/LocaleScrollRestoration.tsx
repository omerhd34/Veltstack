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
    if (savedY !== null) {
      const apply = () => {
        window.scrollTo({ top: savedY, left: 0, behavior: "auto" });
      };
      apply();
      const rafId = requestAnimationFrame(apply);
      const timeoutId = window.setTimeout(() => {
        apply();
        clearLocaleSwitchScroll();
      }, 0);
      return () => {
        cancelAnimationFrame(rafId);
        window.clearTimeout(timeoutId);
      };
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

    if (!window.location.hash) return;

    scrollToHash();
    const rafId = requestAnimationFrame(scrollToHash);
    const timeoutId = window.setTimeout(scrollToHash, 100);
    const onHashChange = () => {
      scrollToHash();
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  return null;
}

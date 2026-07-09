export const LOCALE_SWITCH_SCROLL_KEY = "veltstack:locale-switch-scroll";

export function saveLocaleSwitchScroll() {
  try {
    sessionStorage.setItem(LOCALE_SWITCH_SCROLL_KEY, String(window.scrollY));
  } catch {
    // sessionStorage unavailable
  }
}

export function consumeLocaleSwitchScroll(): number | null {
  try {
    const raw = sessionStorage.getItem(LOCALE_SWITCH_SCROLL_KEY);
    sessionStorage.removeItem(LOCALE_SWITCH_SCROLL_KEY);
    if (raw === null) return null;

    const y = Number(raw);
    return Number.isFinite(y) && y >= 0 ? y : null;
  } catch {
    return null;
  }
}

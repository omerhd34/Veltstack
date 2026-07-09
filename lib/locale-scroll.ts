export const LOCALE_SWITCH_SCROLL_KEY = "veltstack:locale-switch-scroll";

let pendingLocaleScrollY: number | null = null;

function parseScrollY(raw: string | null): number | null {
  if (raw === null) return null;

  const y = Number(raw);
  return Number.isFinite(y) && y >= 0 ? y : null;
}

export function saveLocaleSwitchScroll() {
  pendingLocaleScrollY = window.scrollY;

  try {
    sessionStorage.setItem(
      LOCALE_SWITCH_SCROLL_KEY,
      String(pendingLocaleScrollY),
    );
  } catch {
    // sessionStorage unavailable
  }
}

export function resolveLocaleSwitchScroll(): number | null {
  if (pendingLocaleScrollY !== null) {
    return pendingLocaleScrollY;
  }

  try {
    return parseScrollY(sessionStorage.getItem(LOCALE_SWITCH_SCROLL_KEY));
  } catch {
    return null;
  }
}

export function clearLocaleSwitchScroll() {
  pendingLocaleScrollY = null;

  try {
    sessionStorage.removeItem(LOCALE_SWITCH_SCROLL_KEY);
  } catch {
    // sessionStorage unavailable
  }
}

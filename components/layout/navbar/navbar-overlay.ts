const HERO_OVERLAY_PATHS = [
  /^\/hizmetler(?:\/|$)/,
  /^\/projeler(?:\/|$)/,
  /^\/makaleler(?:\/|$)/,
  /^\/sss$/,
  /^\/hakkimizda$/,
] as const;

export function isHeroOverlayPath(pathname: string): boolean {
  return (
    pathname === "/" ||
    HERO_OVERLAY_PATHS.some((pattern) => pattern.test(pathname))
  );
}

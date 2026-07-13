const HERO_OVERLAY_PATHS = [
  /^\/hizmetler(?:\/|$)/,
  /^\/projeler(?:\/|$)/,
  /^\/makaleler(?:\/|$)/,
  /^\/sss$/,
  /^\/hakkimizda$/,
  /^\/gizlilik-politikasi$/,
  /^\/kullanim-sartlari$/,
  /^\/cerez-politikasi$/,
  /^\/kvkk-aydinlatma-metni$/,
] as const;

export function isHeroOverlayPath(pathname: string): boolean {
  return (
    pathname === "/" ||
    HERO_OVERLAY_PATHS.some((pattern) => pattern.test(pathname))
  );
}

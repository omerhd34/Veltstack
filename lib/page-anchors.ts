export const pageAnchors = {
  servicesPackages: "hizmet-paketleri",
  approach: "yaklasim",
  serviceFeatures: "hizmet-ozellikleri",
  blogGrid: "blog-listesi",
  aboutStory: "hakkimda-hikaye",
  projectsShowcase: "projeler-vitrini",
  projectOverview: "proje-ozeti",
  faqContent: "sss-icerik",
  blogArticle: "blog-yazi",
} as const;

export type PageAnchorKey = keyof typeof pageAnchors;

export function pageAnchorId(key: PageAnchorKey): string {
  return pageAnchors[key];
}

export function pageAnchorHref(key: PageAnchorKey): string {
  return `#${pageAnchorId(key)}`;
}

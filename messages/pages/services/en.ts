import { servicesPackagesEn } from "./packages-en";

export const servicesPageEn = {
  heroBadge: "Digital Services",
  heroTitle: "Clear packages, clear scope",
  heroSubtitle:
    "Every project type comes in three tiers: Startup, Professional and Premium. Scope is defined upfront—browse website, app, digital refresh, SEO, technical audit and maintenance packages to find the fit for your project.", 
  heroImageAlt:
    "Modular interface illustration representing interconnected digital services",
  scrollLabel: "View packages",
  ctaBadge: "Free Consultation",
  ctaTitle: "Need help choosing a package?",
  ctaTitleLead: "Need help",
  ctaTitleAccent: "choosing a package?",
  ctaSubtitle:
    "In a free call we'll discuss your project, recommend the right tier, and get back to you within 24 hours.",
  ctaPoint1: "Free discovery call",
  ctaPoint2: "Tailored package recommendation",
  ctaPoint3: "Clear scope and pricing",
  ctaButton: "Schedule a Call",
  stats: [
    {
      value: "3-112",
      label: "Delivery (Days)",
      labelShort: "Delivery",
      hint: "Estimated delivery range across all service categories. A clear timeline is shared once scope is defined.",
    },
    {
      value: "15-45",
      label: "Support (Days)",
      labelShort: "Support",
      hint: "Post-launch support window for technical assistance, revisions and minor updates.",
    },
    {
      value: "6",
      label: "Service Types",
      labelShort: "Services",
      hint: "Six service categories including website, app, digital refresh, SEO, technical audit and maintenance.",
    },
    {
      value: "14",
      label: "Ready Packages",
      labelShort: "Packages",
      hint: "Total ready-made packages across all categories, each targeting different scope and scale.",
    },
  ],
  ...servicesPackagesEn,
} as const;

import { servicesPackagesEn } from "./packages-en";

export const servicesPageEn = {
  heroBadge: "Digital Services",
  heroTitle: "Clear packages, clear scope",
  heroSubtitle:
    "Every project type comes in three tiers: Startup, Professional and Premium. Scope, delivery and revisions are defined upfront, large projects scale without limits.",
  heroSubtitleSecondary:
    "Browse the packages below and switch between website, app, redesign, SEO, technical audit and maintenance tabs to find the scope that fits your project.",
  heroImageAlt: "Modular interface illustration representing interconnected digital services",
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
      hint: "Estimated delivery range across all service categories. A clear timeline is shared once scope is defined.",
    },
    {
      value: "15-45",
      label: "Support Period (Days)",
      hint: "Post-launch support window for technical assistance, revisions and minor updates.",
    },
    {
      value: "6",
      label: "Service Types",
      hint: "Six service categories including website, app, redesign, SEO, technical audit and maintenance.",
    },
    {
      value: "14",
      label: "Ready Packages",
      hint: "Total ready-made packages across all categories, each targeting different scope and scale.",
    },
  ],
  ...servicesPackagesEn,
} as const;

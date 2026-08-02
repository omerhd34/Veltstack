// ---------------------------------------------------------------------------
// Shared feature groups — refresh packages
// ---------------------------------------------------------------------------

const commonRedesignItems = [
  "Fluid responsive design for mobile, tablet and desktop",
  "SSL / HTTPS and security configuration",
  "Fast loading and Core Web Vitals optimization",
] as const;

const standartDesignExtras = [
  "Dark / light mode support",
  "Smooth page transitions and micro-interactions",
] as const;

const commonDeliveryTemel = ["Go-live and DNS transition support"] as const;

const commonDeliveryStandart = [
  "Source code and project file delivery",
  "Go-live and migration support",
] as const;

const commonDeliveryPro = [
  "Source code and project file delivery",
  "Go-live and migration support",
] as const;

const seoMigrationStandartItems = [
  "Meta, Open Graph and schema data preservation",
  "Advanced 301 redirect map",
  "Google Search Console transition tracking",
  "Sitemap and robots.txt update",
] as const;

const seoMigrationProItems = [
  ...seoMigrationStandartItems,
  "Comprehensive technical SEO and indexing optimization",
  "Google Analytics 4 and conversion tracking",
] as const;

const REFRESH_GROUP_ANALYSIS = "Analysis & Planning";
const REFRESH_GROUP_DESIGN = "Design & Redesign";
const REFRESH_GROUP_SEO = "SEO & Migration Protection";
const REFRESH_GROUP_DELIVERY = "Launch & Delivery";

// ---------------------------------------------------------------------------
// Portfolio / Promotional
// ---------------------------------------------------------------------------

const portfolioAnalysis = [
  "Current site performance, SEO and content analysis",
  "Content inventory and migration plan",
  "URL structure and 301 redirect strategy",
] as const;

const portfolioDesignTemel = [
  ...commonRedesignItems,
  "Safe migration of existing content",
  "Image compression and cache optimization",
] as const;

const portfolioDesignStandart = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Brand-aligned interface refresh",
  "Comprehensive UX and performance review",
  "Core Web Vitals improvements",
] as const;

const portfolioDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Migration to a Next.js-based modern stack",
  "Custom design and animations",
  "Scalable infrastructure for high traffic",
  "Dynamic content management panel",
] as const;

const portfolioSeoTemel = ["301 redirect setup"] as const;

const portfolioDeliveryProExtras = [
  "User guide and short admin training",
] as const;

// ---------------------------------------------------------------------------
// Corporate
// ---------------------------------------------------------------------------

const corporateAnalysis = [
  "Technical, SEO and security audit of the current site",
  "Content and page structure analysis",
  "Migration timeline and risk plan",
] as const;

const corporateDesignTemel = [
  ...commonRedesignItems,
  "Brand-aligned corporate UI refresh",
  "Content migration",
  "Baseline performance and security updates",
] as const;

const corporateDesignStandart = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Information architecture restructuring",
  "Premium UI components",
  "Accessibility (WCAG) improvements",
  "Mobile navigation and content experience optimization",
  "Form and integration updates",
  "Privacy-compliant cookie notice",
] as const;

const corporateDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Scalable infrastructure for high traffic",
  "Advanced CMS and content management",
  "Support for up to 5 languages and multi-department structure",
  "API and third-party integrations",
  "CDN and cache optimization",
  "Comprehensive security audit and hardening",
  "Form and integration updates",
  "Privacy-compliant cookie notice",
] as const;

const corporateSeoTemel = ["301 redirect setup"] as const;

const corporateSeoStandart = [...seoMigrationStandartItems] as const;

const corporateSeoPro = [...seoMigrationProItems] as const;

const corporateDeliveryProExtras = [
  "Backup and restore plan",
  "Team training and documentation",
] as const;

// ---------------------------------------------------------------------------
// Ecommerce
// ---------------------------------------------------------------------------

const ecommerceAnalysis = [
  "Store performance and conversion analysis",
  "Product and category migration plan",
  "Payment, order and shipping flow review",
] as const;

const ecommerceDesignTemel = [
  ...commonRedesignItems,
  "Modern ecommerce interface",
  "Product and category migration",
  "Baseline payment integration update",
  "Mobile shopping experience improvements",
] as const;

const ecommerceDesignStandart = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Advanced product filtering and search",
  "Cart and checkout flow optimization",
  "Stock and variant management update",
  "Shipping integration and delivery options update",
  "Abandoned cart reminder infrastructure",
] as const;

const ecommerceDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Migration to a scalable modern stack",
  "Support for up to 5 languages and multi-currency",
  "Advanced campaign and promotion module",
  "ERP, accounting and invoicing integration readiness",
  "PCI-DSS compliant payment gateway infrastructure",
  "Advanced security and fraud protection",
  "Real-time stock synchronization",
  "Abandoned cart reminder infrastructure",
] as const;

const ecommerceSeoTemel = ["Product URL and meta preservation plan"] as const;

const ecommerceSeoStandart = [
  "Product URL and meta preservation plan",
  "Product, Offer and Breadcrumb schema configuration",
  "Google Analytics 4 and conversion tracking re-setup",
] as const;

const ecommerceSeoPro = [
  ...ecommerceSeoStandart,
  "High-traffic and campaign-period SEO optimization",
] as const;

const ecommerceDeliveryTemel = ["Go-live and test-order verification"] as const;

const ecommerceDeliveryProExtras = [
  "Store management training and documentation",
] as const;

export const refreshPackagesEn = {
  portfolio: {
    title: "Portfolio / Promotional",
    description:
      "Refresh your promotional site with modern design, fast infrastructure and SEO protection—without losing your content.",
    introP2:
      "Startup, Professional and Premium tiers clarify redesign scope. We plan a conversion-focused migration while protecting your search rankings.",
    tiers: {
      temel: {
        deliveryDays: "7-14",
        revisions: "2",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...portfolioAnalysis],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...portfolioDesignTemel],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...portfolioSeoTemel],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
            items: [...commonDeliveryTemel],
          },
        ],
      },
      standart: {
        deliveryDays: "14-21",
        revisions: "4",
        supportDays: "30",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...portfolioAnalysis],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...portfolioDesignStandart],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...seoMigrationStandartItems],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
            items: [...commonDeliveryStandart],
          },
        ],
      },
      pro: {
        deliveryDays: "21-30",
        revisions: "6",
        supportDays: "45",
        languages: "Unlimited",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...portfolioAnalysis],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...portfolioDesignPro],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...seoMigrationProItems],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
            items: [...commonDeliveryPro, ...portfolioDeliveryProExtras],
          },
        ],
      },
    },
  },

  corporate: {
    title: "Corporate",
    description:
      "Refresh your corporate site with updated design, secure infrastructure and a planned migration—while protecting brand trust and organic visibility.",
    introP2:
      "Startup, Professional and Premium tiers clarify redesign scope. We migrate existing content and integrations with minimal downtime.",
    tiers: {
      temel: {
        deliveryDays: "10-18",
        revisions: "2",
        supportDays: "15",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...corporateAnalysis],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...corporateDesignTemel],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...corporateSeoTemel],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
            items: [...commonDeliveryTemel],
          },
        ],
      },
      standart: {
        deliveryDays: "18-28",
        revisions: "4",
        supportDays: "30",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...corporateAnalysis],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...corporateDesignStandart],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...corporateSeoStandart],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
            items: [...commonDeliveryStandart],
          },
        ],
      },
      pro: {
        deliveryDays: "28-42",
        revisions: "6",
        supportDays: "45",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...corporateAnalysis],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...corporateDesignPro],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...corporateSeoPro],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
            items: [...commonDeliveryPro, ...corporateDeliveryProExtras],
          },
        ],
      },
    },
  },

  ecommerce: {
    title: "Ecommerce",
    description:
      "Refresh your store with modern infrastructure, smoother checkout and SEO protection—without risking product data or rankings.",
    introP2:
      "Startup, Professional and Premium tiers clarify redesign scope. We protect catalog data and organic visibility while moving to a conversion-focused storefront.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "2",
        supportDays: "15",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...ecommerceAnalysis],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...ecommerceDesignTemel],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...ecommerceSeoTemel],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
            items: [...ecommerceDeliveryTemel],
          },
        ],
      },
      standart: {
        deliveryDays: "21-35",
        revisions: "4",
        supportDays: "30",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...ecommerceAnalysis],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...ecommerceDesignStandart],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...ecommerceSeoStandart],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
            items: [...commonDeliveryStandart],
          },
        ],
      },
      pro: {
        deliveryDays: "35-49",
        revisions: "6",
        supportDays: "45",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...ecommerceAnalysis],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...ecommerceDesignPro],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...ecommerceSeoPro],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
            items: [...commonDeliveryPro, ...ecommerceDeliveryProExtras],
          },
        ],
      },
    },
  },
} as const;

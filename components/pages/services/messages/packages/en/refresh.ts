// ---------------------------------------------------------------------------
// Shared feature groups — redesign packages
// ---------------------------------------------------------------------------

const commonRedesignItems = [
  "Mobile, Tablet and Desktop Responsive Interface",
  "SSL, HTTPS and Security Configuration",
  "Fast Load Times and SEO-Friendly Performance Optimization",
] as const;

const standartDesignExtras = [
  "Dark / Light Mode Support",
  "Smooth Page Transitions and Micro-interactions",
] as const;

const commonDeliveryTemel = [
  "Go-live and DNS Transition Support",
  "15 Days Technical Support",
] as const;

const commonDeliveryStandart = [
  "Source Code and Project Files Delivery",
  "Go-live and Migration Support",
  "30 Days Technical Support",
] as const;

const commonDeliveryPro = [
  "Source Code and Project Files Delivery",
  "Go-live and Migration Support",
  "45 Days Technical Support",
] as const;

const seoMigrationStandartItems = [
  "Meta, Open Graph and Schema Data Preservation",
  "Advanced Redirect Map",
  "Search Console Transition Tracking",
  "Sitemap and robots.txt Update",
] as const;

const seoMigrationProItems = [
  ...seoMigrationStandartItems,
  "Comprehensive Technical SEO and Indexing Optimization",
  "Google Analytics 4 and Conversion Tracking",
] as const;

const REFRESH_GROUP_ANALYSIS = "Analysis & Planning";
const REFRESH_GROUP_DESIGN = "Design & Redesign";
const REFRESH_GROUP_SEO = "SEO & Migration Protection";
const REFRESH_GROUP_DELIVERY = "Delivery & Support";

// ---------------------------------------------------------------------------
// Portfolio / Promotional
// ---------------------------------------------------------------------------

const portfolioAnalysisTemel = [
  "Current site performance, SEO and content audit",
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
  "Brand-aligned interface redesign",
  "Comprehensive UX and performance audit",
  "Core Web Vitals improvement",
] as const;

const portfolioDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Migration to Modern Next.js Infrastructure",
  "Custom Design and Animations",
  "Scalable Infrastructure for High Traffic",
] as const;

const portfolioSeoTemel = ["301 redirect setup"] as const;

const portfolioSeoProExtras = [
  "Dynamic Content Management Panel",
  "Up to 5 Languages Support",
] as const;

const portfolioDeliveryProExtras = [
  "User Guide and Short Management Training",
] as const;

// ---------------------------------------------------------------------------
// Corporate
// ---------------------------------------------------------------------------

const corporateAnalysisTemel = [
  "Current site technical, SEO and security audit",
  "Content and page structure analysis",
  "Transition timeline and risk plan",
] as const;

const corporateDesignTemel = [
  ...commonRedesignItems,
  "Corporate identity-aligned interface refresh",
  "Content migration",
  "Basic performance and security update",
] as const;

const corporateDesignStandart = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Information architecture restructuring",
  "Premium UI components",
  "Accessibility (WCAG) improvements",
  "Mobile navigation and content experience optimization",
] as const;

const corporateDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Scalable Infrastructure for High Traffic",
  "Advanced CMS and Content Management",
  "Up to 5 Languages and Multi-department Structure",
  "API and Third-party Integrations",
] as const;

const corporateSeoStandart = [
  "Modern framework migration",
  ...seoMigrationStandartItems,
  "Form and integration update",
] as const;

const corporateSeoPro = [
  "Comprehensive security audit and improvement",
  "CDN and cache optimization",
  "GDPR Compliant Cookie Notice",
  "Backup and restore plan",
] as const;

const corporateDeliveryProExtras = ["Team Training and Documentation"] as const;

// ---------------------------------------------------------------------------
// Ecommerce
// ---------------------------------------------------------------------------

const ecommerceAnalysisTemel = [
  "Current store performance and conversion analysis",
  "Product and category migration plan",
  "Payment, order and shipping flow audit",
] as const;

const ecommerceDesignTemel = [
  ...commonRedesignItems,
  "Modern ecommerce interface",
  "Product and category migration",
  "Basic payment integration update",
  "Mobile shopping experience improvement",
] as const;

const ecommerceDesignStandart = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Advanced product filtering and search",
  "Cart and checkout flow optimization",
  "Stock and variant management update",
  "Shipping integration and delivery options refresh",
] as const;

const ecommerceDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Migration to Scalable Modern Infrastructure",
  "Up to 5 Languages and Multi-currency Support",
  "Advanced Campaign and Promotion Module",
  "ERP, Accounting and Invoice Integration Readiness",
] as const;

const ecommerceSeoStandart = [
  "Product URL and meta protection plan",
  "Product, Offer and Breadcrumb Schema Configuration",
  "Google Analytics 4 and conversion tracking reconfiguration",
  "Abandoned Cart Infrastructure",
] as const;

const ecommerceSeoPro = [
  "High-traffic and campaign period optimization",
  "PCI-DSS Compliant Virtual POS Integration Infrastructure",
  "Advanced security and fraud protection",
  "Real-time stock synchronization",
] as const;

const ecommerceDeliveryTemel = [
  "Go-live and Test Order Verification",
  "15 Days Technical Support",
] as const;

const ecommerceDeliveryProExtras = [
  "Store Management Training and Documentation",
] as const;

export const refreshPackagesEn = {
  portfolio: {
    title: "Portfolio / Promotional Site Redesign",
    description:
      "Renew your promotional site with modern design, fast infrastructure and SEO protection — build a stronger digital presence without losing your content.",
    introP2:
      "Startup, Professional and Premium tiers define the scope of your promotional site redesign. We plan a performance and conversion-focused migration while protecting your SEO rankings.",
    tiers: {
      temel: {
        deliveryDays: "7-14",
        revisions: "2",
        scope: "1-8",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...portfolioAnalysisTemel],
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
        scope: "1-15",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [],
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
        scope: "∞",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...portfolioDesignPro],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...seoMigrationProItems, ...portfolioSeoProExtras],
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
    title: "Corporate Site Redesign",
    description:
      "Renew your corporate website with current design, secure infrastructure and a planned transition — protect your brand trust and organic visibility.",
    introP2:
      "Startup, Professional and Premium tiers define the scope of your corporate site redesign. We preserve your existing content and integrations for a seamless transition.",
    tiers: {
      temel: {
        deliveryDays: "10-18",
        revisions: "2",
        scope: "1-15",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...corporateAnalysisTemel],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...corporateDesignTemel],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [],
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
        scope: "1-30",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [],
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
        scope: "∞",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [],
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
    title: "Ecommerce Site Redesign",
    description:
      "Renew your ecommerce site with modern infrastructure, smooth checkout and SEO protection — move to a conversion-focused store without risking product data or rankings.",
    introP2:
      "Startup, Professional and Premium tiers define the scope of your ecommerce store redesign. We protect your product data and organic visibility while moving to a conversion-focused store.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "2",
        scope: "1-20",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...ecommerceAnalysisTemel],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...ecommerceDesignTemel],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [],
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
        scope: "1-40",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [],
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
        scope: "∞",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [],
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

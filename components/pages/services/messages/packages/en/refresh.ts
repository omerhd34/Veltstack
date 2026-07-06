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

export const refreshPackagesEn = {
  portfolio: {
    title: "Portfolio / Promotional Site Redesign",
    description:
      "Renew your promotional site with modern design, fast infrastructure and SEO protection — build a stronger digital presence without losing your content.",
    tiers: {
      temel: {
        deliveryDays: "7-14",
        revisions: "2",
        scope: "1-8",
        featureGroups: [
          {
            label: "Analysis & Planning",
            items: [
              "Current site performance, SEO and content audit",
              "Content inventory and migration plan",
              "URL structure and 301 redirect strategy",
            ],
          },
          {
            label: "Redesign & Migration",
            items: [
              ...commonRedesignItems,
              "Safe migration of existing content",
              "Image compression and cache optimization",
              "301 redirect setup",
            ],
          },
          {
            label: "Delivery & Support",
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
            label: "Design & UX",
            items: [
              ...commonRedesignItems,
              ...standartDesignExtras,
              "Brand-aligned interface redesign",
              "Comprehensive UX and performance audit",
              "Core Web Vitals improvement",
            ],
          },
          {
            label: "SEO & Migration Protection",
            items: [...seoMigrationStandartItems],
          },
          {
            label: "Delivery & Support",
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
            label: "Full Redesign",
            items: [
              ...commonRedesignItems,
              ...standartDesignExtras,
              "Migration to Modern Next.js Infrastructure",
              "Custom Design and Animations",
              "Scalable Infrastructure for High Traffic",
            ],
          },
          {
            label: "SEO & Content Management",
            items: [
              ...seoMigrationProItems,
              "Dynamic Content Management Panel",
              "Up to 5 Languages Support",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              ...commonDeliveryPro,
              "User Guide and Short Management Training",
            ],
          },
        ],
      },
    },
  },
  corporate: {
    title: "Corporate Site Redesign",
    description:
      "Renew your corporate website with current design, secure infrastructure and a planned transition — protect your brand trust and organic visibility.",
    tiers: {
      temel: {
        deliveryDays: "10-18",
        revisions: "2",
        scope: "1-15",
        featureGroups: [
          {
            label: "Analysis & Planning",
            items: [
              "Current site technical, SEO and security audit",
              "Content and page structure analysis",
              "Transition timeline and risk plan",
            ],
          },
          {
            label: "Redesign & Migration",
            items: [
              ...commonRedesignItems,
              "Corporate identity-aligned interface refresh",
              "Content migration",
              "Basic performance and security update",
            ],
          },
          {
            label: "Delivery & Support",
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
            label: "Design & UX",
            items: [
              ...commonRedesignItems,
              ...standartDesignExtras,
              "Information architecture restructuring",
              "Premium UI components",
              "Accessibility (WCAG) improvements",
              "Mobile navigation and content experience optimization",
            ],
          },
          {
            label: "Infrastructure & SEO",
            items: [
              "Modern framework migration",
              ...seoMigrationStandartItems,
              "Form and integration update",
            ],
          },
          {
            label: "Delivery & Support",
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
            label: "Corporate Infrastructure Redesign",
            items: [
              ...commonRedesignItems,
              ...standartDesignExtras,
              "Scalable Infrastructure for High Traffic",
              "Advanced CMS and Content Management",
              "Up to 5 Languages and Multi-department Structure",
              "API and Third-party Integrations",
            ],
          },
          {
            label: "Security & Performance",
            items: [
              "Comprehensive security audit and improvement",
              "CDN and cache optimization",
              "GDPR Compliant Cookie Notice",
              "Backup and restore plan",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              ...commonDeliveryPro,
              "Team Training and Documentation",
            ],
          },
        ],
      },
    },
  },
  ecommerce: {
    title: "Ecommerce Site Redesign",
    description:
      "Renew your ecommerce site with modern infrastructure, smooth checkout and SEO protection — move to a conversion-focused store without risking product data or rankings.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "2",
        scope: "1-20",
        featureGroups: [
          {
            label: "Analysis & Planning",
            items: [
              "Current store performance and conversion analysis",
              "Product and category migration plan",
              "Payment, order and shipping flow audit",
            ],
          },
          {
            label: "Redesign & Migration",
            items: [
              ...commonRedesignItems,
              "Modern ecommerce interface",
              "Product and category migration",
              "Basic payment integration update",
              "Mobile shopping experience improvement",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              "Go-live and Test Order Verification",
              ...commonDeliveryTemel.slice(1),
            ],
          },
        ],
      },
      standart: {
        deliveryDays: "21-35",
        revisions: "4",
        scope: "1-40",
        featureGroups: [
          {
            label: "Store Redesign",
            items: [
              ...commonRedesignItems,
              ...standartDesignExtras,
              "Advanced product filtering and search",
              "Cart and checkout flow optimization",
              "Stock and variant management update",
              "Shipping integration and delivery options refresh",
            ],
          },
          {
            label: "SEO & Marketing",
            items: [
              "Product URL and meta protection plan",
              "Product, Offer and Breadcrumb Schema Configuration",
              "Google Analytics 4 and conversion tracking reconfiguration",
              "Abandoned Cart Infrastructure",
            ],
          },
          {
            label: "Delivery & Support",
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
            label: "Enterprise Store Infrastructure",
            items: [
              ...commonRedesignItems,
              ...standartDesignExtras,
              "Migration to Scalable Modern Infrastructure",
              "Up to 5 Languages and Multi-currency Support",
              "Advanced Campaign and Promotion Module",
              "ERP, Accounting and Invoice Integration Readiness",
            ],
          },
          {
            label: "Performance & Security",
            items: [
              "High-traffic and campaign period optimization",
              "PCI-DSS Compliant Virtual POS Integration Infrastructure",
              "Advanced security and fraud protection",
              "Real-time stock synchronization",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              ...commonDeliveryPro,
              "Store Management Training and Documentation",
            ],
          },
        ],
      },
    },
  },
} as const;

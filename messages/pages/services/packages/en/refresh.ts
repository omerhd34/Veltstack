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

const proDeliveryExtras = [
  "Preview environment testing and planned go-live",
] as const;

const commonDeliveryPro = [
  ...commonDeliveryStandart,
  ...proDeliveryExtras,
] as const;

const commonSupportStandartItems = [
  "Post-migration technical support",
] as const;

const proSupportExtras = [
  "User guide and short admin training",
  "Priority technical support",
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
  "Google Ads conversion tracking and tag setup",
  "Meta Pixel and conversion events (Facebook / Instagram)",
] as const;

const REFRESH_GROUP_ANALYSIS = "Analysis & Planning";
const REFRESH_GROUP_DESIGN = "Design & Redesign";
const REFRESH_GROUP_SEO = "SEO & Migration Protection";
const REFRESH_GROUP_DELIVERY = "Launch & Delivery";
const REFRESH_GROUP_SUPPORT = "Technical Support";

// ---------------------------------------------------------------------------
// Portfolio / Personal
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

const portfolioSeoTemel = [
  "301 redirect setup",
  "Existing meta title and description preservation plan",
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
  "Multi-language and multi-department structure",
  "API and third-party integrations",
  "CDN and cache optimization",
  "Comprehensive security audit and hardening",
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
  "Multi-language and multi-currency support",
  "Advanced campaign and promotion module",
  "ERP, accounting and invoicing integration readiness",
  "PCI-DSS compliant payment gateway infrastructure",
  "Advanced security and fraud protection",
  "Real-time stock synchronization",
] as const;

const ecommerceSeoTemel = [
  "Product URL and meta preservation plan",
  "301 redirect setup",
] as const;

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

// ---------------------------------------------------------------------------
// One-Page
// ---------------------------------------------------------------------------

const onePageAnalysis = [
  "Current landing page performance and conversion analysis",
  "Section / CTA inventory and migration plan",
  "URL and 301 redirect strategy",
] as const;

const onePageDesignTemel = [
  ...commonRedesignItems,
  "Safe migration of one-page content",
  "Image compression and cache optimization",
] as const;

const onePageDesignStandart = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Conversion-focused section and CTA refresh",
  "Video background / embedded demo support",
  "Core Web Vitals improvements",
] as const;

const onePageDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Migration to a Next.js-based modern stack",
  "Custom design and animations",
  "Live chat integration",
  "Preferred hosting (Vercel, Ixirhost, AWS, etc.)",
] as const;

// ---------------------------------------------------------------------------
// Catalog / B2B
// ---------------------------------------------------------------------------

const catalogAnalysis = [
  "Current catalog structure and quote-flow analysis",
  "Product / service and category migration plan",
  "Dealer / B2B access and pricing visibility review",
] as const;

const catalogDesignTemel = [
  ...commonRedesignItems,
  "Catalog listing and detail page refresh",
  "Product / service data migration",
  "Quote form update",
] as const;

const catalogDesignStandart = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Advanced filter and search refresh",
  "Preferred payment provider (iyzico, PayTR…)",
  "Quote tracking and B2B pricing view improvements",
] as const;

const catalogDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Migration to a scalable modern stack",
  "Dealer-specific pricing / stock views",
  "Preferred hosting (Vercel, Ixirhost, AWS, etc.)",
  "CRM-ready quote workflow",
] as const;

// ---------------------------------------------------------------------------
// Listings / Real Estate
// ---------------------------------------------------------------------------

const listingAnalysis = [
  "Current listing structure and search experience analysis",
  "Listing, photo and attribute migration plan",
  "Agent / office structure and authorization review",
] as const;

const listingDesignTemel = [
  ...commonRedesignItems,
  "Listing index and detail page refresh",
  "Safe migration of listing data",
  "Inquiry / contact form update",
] as const;

const listingDesignStandart = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Map and advanced filter refresh",
  "Favorites / compare experience improvements",
  "Agent profile page updates",
] as const;

const listingDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Migration to a scalable modern stack",
  "Member-panel listing management refresh",
  "Preferred hosting (Vercel, Ixirhost, AWS, etc.)",
  "Featured listings and multi-agent authorization",
] as const;

// ---------------------------------------------------------------------------
// Booking
// ---------------------------------------------------------------------------

const bookingAnalysis = [
  "Current booking and calendar flow analysis",
  "Service / resource and availability migration plan",
  "Payment and notification process review",
] as const;

const bookingDesignTemel = [
  ...commonRedesignItems,
  "Booking page refresh",
  "Calendar and availability migration",
  "Booking notification updates",
] as const;

const bookingDesignStandart = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Online payment booking confirmation refresh",
  "Preferred payment provider (iyzico, PayTR…)",
  "Capacity and cancellation rule updates",
] as const;

const bookingDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Migration to a scalable modern stack",
  "Multi-branch / resource calendar refresh",
  "Preferred hosting (Vercel, Ixirhost, AWS, etc.)",
  "Automated reminders and deposit / refund flow",
] as const;

// ---------------------------------------------------------------------------
// Education / Courses
// ---------------------------------------------------------------------------

const educationAnalysis = [
  "Current course structure and enrollment flow analysis",
  "Course, curriculum and student data migration plan",
  "Payment and content-access process review",
] as const;

const educationDesignTemel = [
  ...commonRedesignItems,
  "Course listing and detail page refresh",
  "Course / program data migration",
  "Enrollment / application form update",
] as const;

const educationDesignStandart = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Student membership and enrollment flow refresh",
  "Preferred payment provider (iyzico, PayTR…)",
  "Lesson material access updates",
] as const;

const educationDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Migration to a scalable modern stack",
  "Video lesson and content-protection refresh",
  "Preferred hosting (Vercel, Ixirhost, AWS, etc.)",
  "Certificate / quiz and instructor panel improvements",
] as const;

const makeRefreshTiers = ({
  analysis,
  designTemel,
  designStandart,
  designPro,
  seoTemel,
  deliveryTemel = commonDeliveryTemel,
  deliveryStandart = commonDeliveryStandart,
  deliveryPro = commonDeliveryPro,
  deliveryDays,
}: {
  analysis: readonly string[];
  designTemel: readonly string[];
  designStandart: readonly string[];
  designPro: readonly string[];
  seoTemel: readonly string[];
  deliveryTemel?: readonly string[];
  deliveryStandart?: readonly string[];
  deliveryPro?: readonly string[];
  deliveryDays: { temel: string; standart: string; pro: string };
}) =>
  ({
    temel: {
      deliveryDays: deliveryDays.temel,
      revisions: "2",
      supportDays: "15",
      languages: "1",
      featureGroups: [
        { label: REFRESH_GROUP_ANALYSIS, items: [...analysis] },
        { label: REFRESH_GROUP_DESIGN, items: [...designTemel] },
        { label: REFRESH_GROUP_SEO, items: [...seoTemel] },
        { label: REFRESH_GROUP_DELIVERY, items: [...deliveryTemel] },
        { label: REFRESH_GROUP_SUPPORT, items: [] },
      ],
    },
    standart: {
      deliveryDays: deliveryDays.standart,
      revisions: "4",
      supportDays: "30",
      languages: "1-5",
      featureGroups: [
        { label: REFRESH_GROUP_ANALYSIS, items: [...analysis] },
        { label: REFRESH_GROUP_DESIGN, items: [...designStandart] },
        { label: REFRESH_GROUP_SEO, items: [...seoMigrationStandartItems] },
        { label: REFRESH_GROUP_DELIVERY, items: [...deliveryStandart] },
        {
          label: REFRESH_GROUP_SUPPORT,
          items: [...commonSupportStandartItems],
        },
      ],
    },
    pro: {
      deliveryDays: deliveryDays.pro,
      revisions: "6",
      supportDays: "45",
      languages: "Unlimited",
      featureGroups: [
        { label: REFRESH_GROUP_ANALYSIS, items: [...analysis] },
        { label: REFRESH_GROUP_DESIGN, items: [...designPro] },
        { label: REFRESH_GROUP_SEO, items: [...seoMigrationProItems] },
        { label: REFRESH_GROUP_DELIVERY, items: [...deliveryPro] },
        {
          label: REFRESH_GROUP_SUPPORT,
          items: [...commonSupportStandartItems, ...proSupportExtras],
        },
      ],
    },
  }) as const;

export const refreshPackagesEn = {
  onePage: {
    title: "One-Page",
    description:
      "Refresh your landing page with modern design, fast infrastructure and SEO protection—moving to a conversion-focused one-page experience.",
    introP2:
      "Startup, Professional and Premium tiers clarify redesign scope. We plan a migration that can go live quickly while protecting your search rankings.",
    tiers: makeRefreshTiers({
      analysis: onePageAnalysis,
      designTemel: onePageDesignTemel,
      designStandart: onePageDesignStandart,
      designPro: onePageDesignPro,
      seoTemel: portfolioSeoTemel,
      deliveryDays: { temel: "5-10", standart: "10-14", pro: "14-21" },
    }),
  },

  portfolio: {
    title: "Portfolio / Personal",
    description:
      "Refresh your promotional site with modern design, fast infrastructure and SEO protection—without losing your content.",
    introP2:
      "Startup, Professional and Premium tiers clarify redesign scope. On the Premium tier, you can scale without language limits. We plan a conversion-focused migration while protecting your search rankings.",
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
          { label: REFRESH_GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "14-21",
        revisions: "4",
        supportDays: "30",
        languages: "1-5",
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
          {
            label: REFRESH_GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
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
            items: [...commonDeliveryPro],
          },
          {
            label: REFRESH_GROUP_SUPPORT,
            items: [...commonSupportStandartItems, ...proSupportExtras],
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
      "Startup, Professional and Premium tiers clarify redesign scope. On the Premium tier, you can scale without language limits. We migrate existing content and integrations with minimal downtime.",
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
      "Startup, Professional and Premium tiers clarify redesign scope. On the Premium tier, you can scale without language limits. We protect catalog data and organic visibility while moving to a conversion-focused storefront.",
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

  catalog: {
    title: "Catalog / B2B",
    description:
      "Refresh your catalog or B2B storefront with a modern UI, quote flow and SEO protection—without losing product data.",
    introP2:
      "Startup, Professional and Premium tiers clarify redesign scope. On the Premium tier, dealer pricing and CRM readiness help you scale.",
    tiers: makeRefreshTiers({
      analysis: catalogAnalysis,
      designTemel: catalogDesignTemel,
      designStandart: catalogDesignStandart,
      designPro: catalogDesignPro,
      seoTemel: portfolioSeoTemel,
      deliveryDays: { temel: "10-18", standart: "18-28", pro: "28-42" },
    }),
  },

  listing: {
    title: "Listings / Real Estate",
    description:
      "Refresh your listings or real-estate site with modern search, galleries and inquiry flows—while protecting existing listings and organic visibility.",
    introP2:
      "Startup, Professional and Premium tiers clarify redesign scope. On the Premium tier, member panels and multi-agent management help you grow.",
    tiers: makeRefreshTiers({
      analysis: listingAnalysis,
      designTemel: listingDesignTemel,
      designStandart: listingDesignStandart,
      designPro: listingDesignPro,
      seoTemel: portfolioSeoTemel,
      deliveryDays: { temel: "10-18", standart: "18-28", pro: "28-42" },
    }),
  },

  booking: {
    title: "Booking",
    description:
      "Refresh your booking system with modern calendar, payment and notification flows—without losing existing appointment data.",
    introP2:
      "Startup, Professional and Premium tiers clarify redesign scope. On the Premium tier, multi-branch setups and automated reminders help you scale.",
    tiers: makeRefreshTiers({
      analysis: bookingAnalysis,
      designTemel: bookingDesignTemel,
      designStandart: bookingDesignStandart,
      designPro: bookingDesignPro,
      seoTemel: portfolioSeoTemel,
      deliveryDays: { temel: "10-18", standart: "18-28", pro: "28-42" },
    }),
  },

  education: {
    title: "Education / Courses",
    description:
      "Refresh your course or training platform with modern enrollment, content and payment experiences—while protecting student and course data.",
    introP2:
      "Startup, Professional and Premium tiers clarify redesign scope. On the Premium tier, video lessons and instructor panels help you grow.",
    tiers: makeRefreshTiers({
      analysis: educationAnalysis,
      designTemel: educationDesignTemel,
      designStandart: educationDesignStandart,
      designPro: educationDesignPro,
      seoTemel: portfolioSeoTemel,
      deliveryDays: { temel: "10-18", standart: "18-28", pro: "28-42" },
    }),
  },
} as const;

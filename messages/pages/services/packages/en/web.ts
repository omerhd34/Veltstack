// ---------------------------------------------------------------------------
// Shared feature groups
// ---------------------------------------------------------------------------

const commonDesignItems = [
  "Responsive design for mobile, tablet and desktop",
  "HTTPS and baseline security configuration",
  "Fast loading and Core Web Vitals optimization",
  "Accessible, modern and readable UI",
] as const;

const standartDesignExtras = [
  "Smooth page transitions and micro-interactions",
] as const;

const proDesignExtras = [
  "Custom design details and advanced animations",
  "Scalable infrastructure ready for high traffic",
] as const;

const standartPanelExtras = ["Dark / light mode support"] as const;

const portfolioPanelExtras = [
  "Project and portfolio gallery management",
  "Service and skills showcase management",
  "Client testimonials and reference management",
  "Blog post creation and editing",
  "Image upload and media library",
  "No-code text editing (rich editor)",
  "Draft save and publish workflow",
  "Page title and description editing from the panel",
] as const;

const corporatePanelExtras = [
  "Reference and project gallery management",
  "Team and department page management",
  "FAQ management",
  "Blog post creation and editing",
  "Image upload and media library",
  "No-code text editing (rich editor)",
  "Draft save and publish workflow",
  "Page title and description editing from the panel",
] as const;

const commonDeliveryItems = [
  "Source code and project file delivery",
  "Go-live deployment support",
  "Domain, www and redirect configuration",
  "Hosting setup and launch guide",
  "Performance target verification (Google PageSpeed)",
] as const;

const freeDomainHosting = ["1 year free domain and hosting"] as const;

const standartDeliveryItems = [
  ...freeDomainHosting,
  ...commonDeliveryItems,
] as const;

const proDeliveryExtras = [
  "Staging environment setup and controlled go-live",
] as const;

const proDeliveryItems = [
  ...freeDomainHosting,
  ...commonDeliveryItems,
  ...proDeliveryExtras,
] as const;

const commonSupportStandartItems = [
  "User guide and short admin training",
] as const;

const proSupportExtras = ["Priority technical support"] as const;

const GROUP_DEV = "Design & Infrastructure";
const GROUP_PANEL = "Content & Admin";
const GROUP_LAUNCH = "Launch & Delivery";
const GROUP_SUPPORT = "Technical Support";
const GROUP_STORE = "Store & Payment";

const commonSeoItems = ["Sitemap and robots.txt configuration"] as const;

const commonIntegrationItems = [
  "Privacy-compliant cookie notice and privacy page (KVKK/GDPR)",
  "Contact form, map and quick-reach links",
] as const;

const tierSeoTemelItems = [
  ...commonSeoItems,
  ...commonIntegrationItems,
] as const;

const tierSeoStandartItems = [
  ...commonSeoItems,
  ...commonIntegrationItems,
  "Meta, Open Graph and social preview optimization",
  "Search visibility tracking (Google Search Console)",
  "Visitor and traffic measurement (Google Analytics 4)",
] as const;

const tierSeoProItems = [
  ...tierSeoStandartItems,
  "Technical SEO improvements for better search visibility",
  "Organization, BreadcrumbList and rich-result schema",
  "Conversion tracking (forms, clicks, CTAs)",
  "Live chat or WhatsApp integration",
  "CRM / email marketing tool integration",
] as const;

const ecommerceStoreCommonItems = [
  "Product listing and detail pages",
  "Cart and checkout flow",
  "Shipping carrier integration",
  "Automated order email notifications",
  "Distance sales agreement and legal pages",
  "Order tracking panel",
  "Bank transfer / EFT payment option",
] as const;

const ecommerceStoreStandartExtras = [
  "Virtual POS integration (iyzico, PayTR and similar)",
  "Membership, login and profile pages",
  "Favorites / wishlist",
  "Product reviews, ratings and photo feedback",
] as const;

const ecommerceStoreProExtras = [
  "Guest checkout (shop without an account)",
  "Multi-carrier shipping integration",
  "Abandoned cart reminder emails",
  "Cross-sell and product recommendations",
  "Invoicing and e-archive integration readiness",
] as const;

const ecommercePanelCommonItems = [
  "Product, category and order management",
  "Basic stock tracking",
] as const;

const ecommercePanelStandartExtras = [
  "Store management panel",
  "Customer and stock management",
  "Product options, tags and variants",
  "Low-stock alerts",
  "Coupon and campaign management",
] as const;

const ecommercePanelProExtras = [
  "Dynamic variant and pricing management",
  "Bulk product import / export (Excel / CSV)",
  "Multi-currency support (₺, $, € ...)",
  "Blog and content marketing module",
  "SMS and marketing tool integration",
] as const;

export const webPackagesEn = {
  portfolio: {
    title: "Portfolio / Promotional",
    description:
      "Present your personal brand or business with a modern website that builds trust. Showcase your portfolio, services and story in a clear, compelling digital storefront.",
    introP2:
      "Startup, Professional and Premium tiers adapt to promotional projects of different scales. We clarify scope around your needs and build a structure that can grow with you. If none of the packages fit, feel free to get in touch.",
    tiers: {
      temel: {
        deliveryDays: "10-14",
        revisions: "3",
        supportDays: "15",
        pages: "1-10",
        languages: "1",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems],
          },
          { label: "SEO & Integration", items: [...tierSeoTemelItems] },
          { label: GROUP_PANEL, items: [] },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "21-30",
        revisions: "5",
        supportDays: "30",
        pages: "1-50",
        languages: "1-5",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems, ...standartDesignExtras],
          },
          { label: "SEO & Integration", items: [...tierSeoStandartItems] },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...portfolioPanelExtras],
          },
          {
            label: GROUP_LAUNCH,
            items: [...standartDeliveryItems],
          },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
          },
        ],
      },
      pro: {
        deliveryDays: "30-45",
        revisions: "7",
        supportDays: "45",
        pages: "Unlimited",
        languages: "Unlimited",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              ...commonDesignItems,
              ...standartDesignExtras,
              ...proDesignExtras,
            ],
          },
          { label: "SEO & Integration", items: [...tierSeoProItems] },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...portfolioPanelExtras],
          },
          {
            label: GROUP_LAUNCH,
            items: [...proDeliveryItems],
          },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems, ...proSupportExtras],
          },
        ],
      },
    },
  },

  corporate: {
    title: "Corporate",
    description:
      "A trustworthy corporate website aligned with your brand identity and built to win customers. Present your services, team and contact channels in a professional structure.",
    introP2:
      "Startup, Professional and Premium tiers adapt to corporate web projects of different scales. On the Premium tier, you can grow without page limits. If none of the packages fit, feel free to get in touch.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "3",
        supportDays: "15",
        pages: "1-10",
        languages: "1",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems],
          },
          { label: "SEO & Integration", items: [...tierSeoTemelItems] },
          { label: GROUP_PANEL, items: [] },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "28-42",
        revisions: "5",
        supportDays: "30",
        pages: "1-50",
        languages: "1-5",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems, ...standartDesignExtras],
          },
          { label: "SEO & Integration", items: [...tierSeoStandartItems] },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...corporatePanelExtras],
          },
          {
            label: GROUP_LAUNCH,
            items: [...standartDeliveryItems],
          },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
          },
        ],
      },
      pro: {
        deliveryDays: "42-60",
        revisions: "8",
        supportDays: "45",
        pages: "Unlimited",
        languages: "Unlimited",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              ...commonDesignItems,
              ...standartDesignExtras,
              ...proDesignExtras,
            ],
          },
          { label: "SEO & Integration", items: [...tierSeoProItems] },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...corporatePanelExtras],
          },
          {
            label: GROUP_LAUNCH,
            items: [...proDeliveryItems],
          },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems, ...proSupportExtras],
          },
        ],
      },
    },
  },

  ecommerce: {
    title: "Ecommerce",
    description:
      "A modern ecommerce solution with secure payments so you can start selling online fast. Manage products, orders and the customer experience from a single scalable storefront.",
    introP2:
      "Startup, Professional and Premium tiers scale with different product catalogs and order volumes. On the Premium tier, you can scale without product or category limits. If none of the packages fit, feel free to get in touch.",
    tiers: {
      temel: {
        deliveryDays: "21-30",
        revisions: "3",
        supportDays: "15",
        pages: "1-10",
        languages: "1",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems],
          },
          { label: "SEO & Integration", items: [...tierSeoTemelItems] },
          {
            label: GROUP_STORE,
            items: [...ecommerceStoreCommonItems],
          },
          {
            label: GROUP_PANEL,
            items: [...ecommercePanelCommonItems],
          },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "42-56",
        revisions: "5",
        supportDays: "30",
        pages: "1-50",
        languages: "1-5",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems, ...standartDesignExtras],
          },
          { label: "SEO & Integration", items: [...tierSeoStandartItems] },
          {
            label: GROUP_STORE,
            items: [
              ...ecommerceStoreCommonItems,
              ...ecommerceStoreStandartExtras,
            ],
          },
          {
            label: GROUP_PANEL,
            items: [
              ...standartPanelExtras,
              ...ecommercePanelCommonItems,
              ...ecommercePanelStandartExtras,
            ],
          },
          {
            label: GROUP_LAUNCH,
            items: [...standartDeliveryItems],
          },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
          },
        ],
      },
      pro: {
        deliveryDays: "56-84",
        revisions: "10",
        supportDays: "45",
        pages: "Unlimited",
        languages: "Unlimited",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              ...commonDesignItems,
              ...standartDesignExtras,
              ...proDesignExtras,
            ],
          },
          { label: "SEO & Integration", items: [...tierSeoProItems] },
          {
            label: GROUP_STORE,
            items: [
              ...ecommerceStoreCommonItems,
              ...ecommerceStoreStandartExtras,
              ...ecommerceStoreProExtras,
            ],
          },
          {
            label: GROUP_PANEL,
            items: [
              ...standartPanelExtras,
              ...ecommercePanelCommonItems,
              ...ecommercePanelStandartExtras,
              ...ecommercePanelProExtras,
            ],
          },
          {
            label: GROUP_LAUNCH,
            items: [...proDeliveryItems],
          },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems, ...proSupportExtras],
          },
        ],
      },
    },
  },
} as const;

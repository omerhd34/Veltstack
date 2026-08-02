// ---------------------------------------------------------------------------
// Shared feature groups
// ---------------------------------------------------------------------------

const commonDesignItems = [
  "Fluid responsive design for mobile, tablet and desktop",
  "SSL / HTTPS and baseline security configuration",
  "Fast loading and Core Web Vitals optimization",
  "Accessible, modern UI and typography",
] as const;

const commonSeoItems = ["Sitemap and robots.txt configuration"] as const;

const commonIntegrationItems = [
  "Privacy-compliant cookie notice and privacy page (KVKK/GDPR)",
  "Contact form, map and quick-reach links",
] as const;

const commonDeliveryItems = [
  "Source code and project file delivery",
  "Go-live deployment support",
  "Domain, www and redirect configuration",
  "Hosting setup and launch guide",
  "Performance Guarantee (PageSpeed)",
] as const;

const commonSupportStandartItems = [
  "User guide and short admin training",
] as const;

const GROUP_LAUNCH = "Launch & Delivery";
const GROUP_SUPPORT = "Technical Support";

const tierSeoTemelItems = [
  ...commonSeoItems,
  ...commonIntegrationItems,
] as const;

const tierSeoStandartItems = [
  ...commonSeoItems,
  "Meta, Open Graph and baseline schema optimization",
  ...commonIntegrationItems,
  "Google Search Console setup",
  "Google Analytics 4 integration",
] as const;

const tierSeoProItems = [
  ...tierSeoStandartItems,
  "Comprehensive technical SEO and indexing optimization",
  "Organization, BreadcrumbList and rich-result schema",
  "Conversion tracking (forms, clicks, CTAs)",
  "Live chat or WhatsApp integration",
  "CRM / email marketing tool connection",
] as const;

export const webPackagesEn = {
  portfolio: {
    title: "Portfolio / Promotional",
    description:
      "Present your personal brand or business with a modern website that builds trust. Showcase your portfolio, services and story in a clear, compelling digital storefront.",
    introP2:
      "Startup, Professional and Premium tiers adapt to promotional projects of different scales. I clarify scope around your needs and build a structure that can grow with you. If none of the packages fit, feel free to get in touch.",
    tiers: {
      temel: {
        deliveryDays: "10-14",
        revisions: "3",
        supportDays: "15",
        pages: "0-10",
        languages: "1",
        featureGroups: [
          {
            label: "Development & Infrastructure",
            items: [...commonDesignItems],
          },
          { label: "SEO & Integration", items: [...tierSeoTemelItems] },
          {
            label: "Content & Panel",
            items: [
              "Services and project showcase sections",
              "Contact and call-to-action areas",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "21-30",
        revisions: "5",
        supportDays: "30",
        pages: "10-50",
        languages: "1-5",
        featureGroups: [
          {
            label: "Development & Infrastructure",
            items: [
              ...commonDesignItems,
              "Dark / light mode support",
              "Smooth page transitions and micro-interactions",
            ],
          },
          { label: "SEO & Integration", items: [...tierSeoStandartItems] },
          {
            label: "Content & Panel",
            items: [
              "Services and project showcase sections",
              "Contact and call-to-action areas",
              "Editable portfolio / project gallery",
              "References and client testimonial areas",
              "Content management panel",
            ],
          },
          {
            label: GROUP_LAUNCH,
            items: [...commonDeliveryItems],
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
            label: "Development & Infrastructure",
            items: [
              ...commonDesignItems,
              "Dark / light mode support",
              "Pixel-perfect Figma-to-code UI implementation",
              "Smooth page transitions and micro-interactions",
              "Scalable infrastructure for high traffic",
            ],
          },
          { label: "SEO & Integration", items: [...tierSeoProItems] },
          {
            label: "Content & Panel",
            items: [
              "Services and project showcase sections",
              "Contact and call-to-action areas",
              "Editable portfolio / project gallery",
              "References and client testimonial areas",
              "Content management panel",
              "Blog and article publishing module",
              "Project filtering and category management",
            ],
          },
          {
            label: GROUP_LAUNCH,
            items: [...commonDeliveryItems],
          },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
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
      "Startup, Professional and Premium tiers adapt to corporate web projects of different scales. On Premium, you can grow without page limits. If none of the packages fit, feel free to get in touch.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "3",
        supportDays: "15",
        pages: "0-10",
        languages: "1",
        featureGroups: [
          {
            label: "Development & Infrastructure",
            items: [...commonDesignItems],
          },
          { label: "SEO & Integration", items: [...tierSeoTemelItems] },
          {
            label: "Content & Panel",
            items: [
              "Services, about and contact pages",
              "Forms routed to corporate email",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "28-42",
        revisions: "5",
        supportDays: "30",
        pages: "10-50",
        languages: "1-5",
        featureGroups: [
          {
            label: "Development & Infrastructure",
            items: [
              ...commonDesignItems,
              "Dark / light mode support",
              "Smooth page transitions and micro-interactions",
            ],
          },
          { label: "SEO & Integration", items: [...tierSeoStandartItems] },
          {
            label: "Content & Panel",
            items: [
              "Services, about and contact pages",
              "Forms routed to corporate email",
              "Content management panel",
              "Blog, news and announcement publishing",
              "Team and staff profile pages",
              "References and success stories",
              "Media / press kit and document area",
            ],
          },
          {
            label: GROUP_LAUNCH,
            items: [...commonDeliveryItems],
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
            label: "Development & Infrastructure",
            items: [
              ...commonDesignItems,
              "Dark / light mode support",
              "Pixel-perfect corporate Figma-to-code UI",
              "Smooth page transitions and micro-interactions",
              "Scalable infrastructure for high traffic",
            ],
          },
          { label: "SEO & Integration", items: [...tierSeoProItems] },
          {
            label: "Content & Panel",
            items: [
              "Services, about and contact pages",
              "Forms routed to corporate email",
              "Content management panel",
              "Blog, news and announcement publishing",
              "Team and staff profile pages",
              "References and success stories",
              "Media / press kit and document area",
              "Career / job posting module and application form",
              "Event and announcement calendar",
              "Video gallery and media management",
            ],
          },
          {
            label: GROUP_LAUNCH,
            items: [...commonDeliveryItems],
          },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
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
      "Startup, Professional and Premium tiers scale with different product catalogs and order volumes. On Premium, you can scale without product or category limits. If none of the packages fit, feel free to get in touch.",
    tiers: {
      temel: {
        deliveryDays: "21-30",
        revisions: "3",
        supportDays: "15",
        pages: "0-10",
        languages: "1",
        featureGroups: [
          {
            label: "Development & Infrastructure",
            items: [...commonDesignItems],
          },
          { label: "SEO & Integration", items: [...tierSeoTemelItems] },
          {
            label: "Store & Payment",
            items: [
              "Product listing and detail pages",
              "Category management",
              "Cart and checkout flow",
              "Single payment gateway integration",
              "Basic stock tracking",
              "Single shipping carrier integration",
            ],
          },
          {
            label: "Content & Panel",
            items: ["Product, category and order management"],
          },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "42-56",
        revisions: "5",
        supportDays: "30",
        pages: "10-50",
        languages: "1-5",
        featureGroups: [
          {
            label: "Development & Infrastructure",
            items: [
              ...commonDesignItems,
              "Dark / light mode support",
              "Smooth page transitions and micro-interactions",
            ],
          },
          { label: "SEO & Integration", items: [...tierSeoStandartItems] },
          {
            label: "Store & Payment",
            items: [
              "Product listing and detail pages",
              "Category management",
              "Cart and checkout flow",
              "Single payment gateway integration",
              "Basic stock tracking",
              "Single shipping carrier integration",
              "Automated order email notifications",
              "Distance sales agreement and legal pages",
              "Advanced product, tag and variant management",
              "Low-stock alerts",
              "Membership, login and profile pages",
              "Order tracking panel",
              "Coupon and campaign management",
              "Favorites / wishlist",
            ],
          },
          {
            label: "Content & Panel",
            items: [
              "Product, category and order management",
              "Store management panel",
              "Customer and stock management",
            ],
          },
          {
            label: GROUP_LAUNCH,
            items: [...commonDeliveryItems],
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
            label: "Development & Infrastructure",
            items: [
              ...commonDesignItems,
              "Dark / light mode support",
              "Pixel-perfect ecommerce Figma-to-code UI",
              "Smooth page transitions and micro-interactions",
              "Scalable infrastructure for high traffic",
            ],
          },
          { label: "SEO & Integration", items: [...tierSeoProItems] },
          {
            label: "Store & Payment",
            items: [
              "Product listing and detail pages",
              "Category management",
              "Cart and checkout flow",
              "Single payment gateway integration",
              "Basic stock tracking",
              "Single shipping carrier integration",
              "Automated order email notifications",
              "Distance sales agreement and legal pages",
              "Advanced product, tag and variant management",
              "Low-stock alerts",
              "Membership, login and profile pages",
              "Order tracking panel",
              "Coupon and campaign management",
              "Favorites / wishlist",
              "Multiple payments: gateway and bank transfer / EFT",
              "Multi-carrier shipping and logistics integration",
              "Dynamic variant and pricing management",
              "Abandoned cart reminder emails",
              "Product reviews, ratings and photo feedback",
              "Cross-sell and product recommendations",
              "Bulk product import / export (Excel / CSV)",
              "Invoicing and e-archive integration readiness",
            ],
          },
          {
            label: "Content & Panel",
            items: [
              "Product, category and order management",
              "Store management panel",
              "Customer and stock management",
              "Multi-currency support",
              "Blog and content marketing module",
              "CRM, SMS and marketing tool integration",
            ],
          },
          {
            label: GROUP_LAUNCH,
            items: [...commonDeliveryItems],
          },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
          },
        ],
      },
    },
  },
} as const;

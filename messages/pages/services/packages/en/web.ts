const commonDesignItems = [
  "Responsive development",
  "Cross-browser compatibility testing",
  "SSL certificate and security setup",
  "Fast load times and SEO-friendly performance optimization",
] as const;

const commonSeoItems = ["Sitemap and robots.txt setup"] as const;

const commonIntegrationItems = [
  "Privacy-compliant cookie policy module (KVKK/GDPR)",
  "Contact form, Google Maps and quick contact links",
] as const;

const commonDeliveryItems = [
  "Source code delivery",
  "Live deployment support",
  "Hosting setup guide",
] as const;

const tierSeoTemelItems = [
  ...commonSeoItems,
  ...commonIntegrationItems,
] as const;

const tierSeoStandartItems = [
  ...commonSeoItems,
  "Meta, Open Graph and schema markup optimization",
  ...commonIntegrationItems,
  "Google Search Console setup and verification",
  "Google Analytics 4 (GA4) integration",
  "Social media links and sharing areas",
  "Domain, www/non-www and redirect configuration",
] as const;

const tierSeoProItems = [
  ...commonSeoItems,
  "Meta, Open Graph and schema markup optimization",
  "Comprehensive technical SEO and indexing optimization",
  "Organization, BreadcrumbList and similar schema structures",
  ...commonIntegrationItems,
  "Google Search Console setup and verification",
  "Google Analytics 4 (GA4) integration",
  "Social media links and sharing areas",
  "Domain, www/non-www and redirect configuration",
  "Conversion tracking (forms, clicks, CTAs)",
  "Live support and quick contact integration",
  "CRM and email marketing tool integration (Mailchimp, etc.)",
  "Third-party API integration readiness",
] as const;

export const webPackagesEn = {
  portfolio: {
    title: "Portfolio / Promotional Website",
    description:
      "Fast, modern promotional site that highlights your personal brand or business.",
    introP2:
      "Startup, Professional and Premium tiers adapt to promotional projects of different scales. I define scope around your needs and build a structure that can grow with you. If you are unsure which package to choose, feel free to get in touch.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "3",
        scope: "1-5",
        featureGroups: [
          {
            label: "Building & Design",
            items: [...commonDesignItems],
          },
          {
            label: "SEO & Integration",
            items: [...tierSeoTemelItems],
          },
          {
            label: "Content & Panel",
            items: [],
          },
          {
            label: "Delivery & Support",
            items: [...commonDeliveryItems, "15 days technical support"],
          },
        ],
      },
      standart: {
        deliveryDays: "21-30",
        revisions: "5",
        scope: "1-10",
        featureGroups: [
          {
            label: "Building & Design",
            items: [
              ...commonDesignItems,
              "Dark / Light mode support",
              "Smooth page transitions and micro-interactions",
            ],
          },
          {
            label: "SEO & Integration",
            items: [...tierSeoStandartItems],
          },
          {
            label: "Content & Panel",
            items: [
              "Services / project gallery section",
              "References and client testimonials section",
              "Basic portfolio management panel (CMS)",
              "Second language support infrastructure",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              ...commonDeliveryItems,
              "30 days technical support",
              "User guide training and documentation",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "30-45",
        revisions: "7",
        scope: "∞",
        featureGroups: [
          {
            label: "Building & Design",
            items: [
              ...commonDesignItems,
              "Dark / Light mode support",
              "Pixel-perfect Figma-to-code implementation",
              "Smooth page transitions and micro-interactions",
              "Scalable infrastructure for high traffic",
            ],
          },
          {
            label: "SEO & Integration",
            items: [...tierSeoProItems],
          },
          {
            label: "Content & Panel",
            items: [
              "Services / project gallery section",
              "References and client testimonials section",
              "Dynamic portfolio management panel (full CMS)",
              "Blog / article module",
              "Project filtering and dynamic category system",
              "Support for up to 5 languages",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              ...commonDeliveryItems,
              "45 days technical support",
              "User guide training and documentation",
            ],
          },
        ],
      },
    },
  },
  corporate: {
    title: "Corporate Website",
    description:
      "Trustworthy, high-performance web solution aligned with your brand identity.",
    introP2:
      "Startup, Professional and Premium tiers adapt to corporate web projects of different scales. On Premium, you can grow without page limits. If you are unsure which package to choose, feel free to get in touch.",
    tiers: {
      temel: {
        deliveryDays: "21-28",
        revisions: "3",
        scope: "1-10",
        featureGroups: [
          {
            label: "Building & Design",
            items: [...commonDesignItems],
          },
          {
            label: "SEO & Integration",
            items: [...tierSeoTemelItems],
          },
          {
            label: "Content & Panel",
            items: [],
          },
          {
            label: "Delivery & Support",
            items: [...commonDeliveryItems, "15 days technical support"],
          },
        ],
      },
      standart: {
        deliveryDays: "28-42",
        revisions: "5",
        scope: "1-25",
        featureGroups: [
          {
            label: "Building & Design",
            items: [
              ...commonDesignItems,
              "Dark / Light mode support",
              "Smooth page transitions and micro-interactions",
            ],
          },
          {
            label: "SEO & Integration",
            items: [...tierSeoStandartItems],
          },
          {
            label: "Content & Panel",
            items: [
              "CMS content management panel",
              "Corporate email and form routing",
              "Blog, news and announcement module",
              "Team / staff profile page",
              "Services and references section",
              "Media and press kit page",
              "Second language support",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              ...commonDeliveryItems,
              "30 days technical support",
              "User guide training and documentation",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "42-60",
        revisions: "8",
        scope: "∞",
        featureGroups: [
          {
            label: "Building & Design",
            items: [
              ...commonDesignItems,
              "Dark / Light mode support",
              "Pixel-perfect corporate Figma-to-code implementation",
              "Smooth page transitions and micro-interactions",
              "Scalable infrastructure for high traffic",
            ],
          },
          {
            label: "SEO & Integration",
            items: [...tierSeoProItems],
          },
          {
            label: "Content & Panel",
            items: [
              "Full CMS and blog infrastructure",
              "Corporate email and form routing",
              "Team / staff profile page",
              "Services and references section",
              "Career / job posting module and application form",
              "Event and announcement calendar",
              "Corporate document download section",
              "Video gallery and media management",
              "Support for up to 5 languages",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              ...commonDeliveryItems,
              "45 days technical support",
              "User guide training and documentation",
            ],
          },
        ],
      },
    },
  },
  ecommerce: {
    title: "Ecommerce Website",
    description:
      "Scalable infrastructure with secure payments, product management and order tracking.",
    introP2:
      "Startup, Professional and Premium tiers scale with different product catalogs and order volumes. On Premium, you can scale without product or category limits. If you are unsure which package to choose, feel free to get in touch.",
    tiers: {
      temel: {
        deliveryDays: "28-42",
        revisions: "3",
        scope: "1-15",
        featureGroups: [
          {
            label: "Building & Design",
            items: [
              ...commonDesignItems,
              "SSL certificate and payment security infrastructure",
            ],
          },
          {
            label: "SEO & Integration",
            items: [...tierSeoTemelItems],
          },
          {
            label: "Store & Payment",
            items: [
              "Product listing and detail pages",
              "Category and subcategory management",
              "Cart and standard checkout flow",
              "Single payment gateway integration (PayTR, etc.)",
              "Basic stock tracking infrastructure",
              "Basic shipping carrier integration",
            ],
          },
          {
            label: "Content & Panel",
            items: ["Product, category and order management"],
          },
          {
            label: "Delivery & Support",
            items: [...commonDeliveryItems, "15 days technical support"],
          },
        ],
      },
      standart: {
        deliveryDays: "42-56",
        revisions: "5",
        scope: "1-35",
        featureGroups: [
          {
            label: "Building & Design",
            items: [
              ...commonDesignItems,
              "Dark / Light mode support",
              "Smooth page transitions and micro-interactions",
            ],
          },
          {
            label: "SEO & Integration",
            items: [...tierSeoStandartItems],
          },
          {
            label: "Store & Payment",
            items: [
              "Automated email order notifications",
              "Distance sales agreement and legal page infrastructure",
              "Advanced product, category and tag management",
              "Cart and checkout flow management",
              "Payment method integration",
              "Advanced stock tracking and low-stock alerts",
              "Membership, login, password reset and profile pages",
              "Order tracking and user history panel",
              "Coupon, discount and campaign management module",
              "Add to favorites / wishlist",
              "Product variant support (color, size, dimensions, etc.)",
            ],
          },
          {
            label: "Content & Panel",
            items: [
              "Store admin dashboard",
              "Product, order, customer and stock management",
              "Second language support",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              ...commonDeliveryItems,
              "30 days technical support",
              "User guide training and documentation",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "56-84",
        revisions: "10",
        scope: "∞",
        featureGroups: [
          {
            label: "Building & Design",
            items: [
              ...commonDesignItems,
              "Dark / Light mode support",
              "Pixel-perfect ecommerce Figma-to-code implementation",
              "Smooth page transitions and micro-interactions",
              "Scalable infrastructure for high traffic",
            ],
          },
          {
            label: "SEO & Integration",
            items: [...tierSeoProItems],
          },
          {
            label: "Store & Payment",
            items: [
              "Automated email order notifications",
              "Distance sales agreement and legal page infrastructure",
              "Advanced product, category and tag management",
              "Cart and checkout flow management",
              "Multiple payment methods (credit card, bank transfer/EFT)",
              "Advanced stock tracking and low-stock alerts",
              "Membership, login, password reset and profile pages",
              "Order tracking and user history panel",
              "Coupon, discount and campaign management module",
              "Add to favorites / wishlist",
              "Shipping and logistics integration (Yurtiçi, MNG, etc.)",
              "Dynamic variant and pricing management",
              "Abandoned cart reminder emails",
              "Product reviews, photo ratings and scoring system",
              "Cross-sell and recommended products algorithm",
              "Bulk product import / export (Excel/CSV integration)",
              "Invoicing and pre-accounting / e-archive integration infrastructure",
            ],
          },
          {
            label: "Content & Panel",
            items: [
              "Full ecommerce management panel (advanced CMS)",
              "Product, order, customer and stock management",
              "Support for up to 5 languages",
              "Multi-currency support",
              "Blog / content marketing module",
              "SMS and marketing tools connection (Mailchimp, etc.)",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              ...commonDeliveryItems,
              "45 days technical support and bug fixes",
              "Comprehensive store management and user guide",
            ],
          },
        ],
      },
    },
  },
} as const;

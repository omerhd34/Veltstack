const commonDesignItems = [
  "Mobile-compatible (responsive) development",
  "Cross-browser compatibility testing",
  "SSL certificate and security setup",
] as const;

const commonSeoItems = [
  "Sitemap and robots.txt setup",
  "Privacy-compliant cookie policy module (KVKK/GDPR)",
] as const;

const commonDeliveryItems = [
  "Source code delivery",
  "Live deployment support",
  "Hosting setup guide",
] as const;

export const webPackagesEn = {
  portfolio: {
    title: "Portfolio / Promotional Website",
    description:
      "Fast, modern promotional site that highlights your personal brand or business.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "3",
        scope: "1-5",
        featureGroups: [
          {
            label: "Development & Design",
            items: [
              ...commonDesignItems,
              "Fast load times and SEO-friendly performance optimization",
            ],
          },
          {
            label: "SEO & Integration",
            items: [
              ...commonSeoItems,
              "Basic SEO configuration",
              "Google Analytics 4 (GA4) setup",
              "Google Search Console setup",
              "Contact form and Google Maps integration",
            ],
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
            label: "Development & Design",
            items: [
              ...commonDesignItems,
              "Fast load times and SEO-friendly performance optimization",
            ],
          },
          {
            label: "SEO & Integration",
            items: [
              ...commonSeoItems,
              "Advanced SEO (meta, OG, schema markup)",
              "Google Search Console connection",
              "Contact form and Google Maps integration",
              "Social media quick contact and sharing",
              "Domain routing and www/non-www setup",
            ],
          },
          {
            label: "Content & Panel",
            items: [
              "Dark / Light mode support",
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
            label: "Development & Design",
            items: [
              ...commonDesignItems,
              "Custom-built, high-speed infrastructure",
              "Pixel-perfect Figma-to-code implementation",
              "Custom animation and interaction design",
            ],
          },
          {
            label: "SEO & Analytics",
            items: [
              ...commonSeoItems,
              "Comprehensive technical SEO optimization",
              "Google Analytics and Search Console integration",
              "Conversion tracking (forms, clicks, CTAs)",
              "Contact form and Google Maps integration",
              "Open Graph and Twitter Card configuration",
            ],
          },
          {
            label: "Content & Panel",
            items: [
              "Dark / Light mode support",
              "Dynamic portfolio management panel (full CMS)",
              "Blog / article module",
              "Multilingual support",
              "Project filtering and dynamic category system",
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
    tiers: {
      temel: {
        deliveryDays: "21-28",
        revisions: "3",
        scope: "1-10",
        featureGroups: [
          {
            label: "Development & Design",
            items: [
              ...commonDesignItems,
              "Mobile-compatible development aligned with corporate identity",
              "Fast load times and SEO-friendly performance optimization",
            ],
          },
          {
            label: "SEO & Integration",
            items: [
              ...commonSeoItems,
              "Basic SEO configuration",
              "Google Analytics 4 (GA4) setup",
              "Google Search Console setup",
              "Contact form and Google Maps integration",
              "Corporate email routing guide",
            ],
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
            label: "Development & Design",
            items: [
              ...commonDesignItems,
              "Fast load times and SEO-friendly performance optimization",
            ],
          },
          {
            label: "SEO & Integration",
            items: [
              ...commonSeoItems,
              "Advanced SEO (meta, OG, schema markup)",
              "Google Search Console connection",
              "Contact form and Google Maps integration",
              "Corporate email routing",
              "WhatsApp and live support button",
              "Social media integration",
            ],
          },
          {
            label: "Content & Panel",
            items: [
              "Dark / Light mode support",
              "CMS content management panel",
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
            label: "Development & Design",
            items: [
              ...commonDesignItems,
              "Pixel-perfect corporate Figma-to-code implementation",
              "Custom-built, high-speed infrastructure",
              "Custom animation and interaction design",
            ],
          },
          {
            label: "SEO & Analytics",
            items: [
              ...commonSeoItems,
              "Comprehensive technical SEO optimization",
              "Google Analytics integration",
              "Conversion and form tracking",
              "Google Search Console setup",
              "Schema markup (Organization, BreadcrumbList, etc.)",
            ],
          },
          {
            label: "Content & Panel",
            items: [
              "Dark / Light mode support",
              "Full CMS and blog infrastructure",
              "Multilingual support",
              "Career / job posting module and application form",
              "Event and announcement calendar",
              "Corporate document download section",
              "Video gallery and media management",
            ],
          },
          {
            label: "Integration",
            items: [
              "Live support / advanced WhatsApp integration",
              "CRM and email marketing integration",
              "Third-party API integration readiness",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              ...commonDeliveryItems,
              "45 days technical support",
              "User guide training and documentation",
              "Comprehensive user manual documentation",
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
    tiers: {
      temel: {
        deliveryDays: "28-42",
        revisions: "3",
        scope: "1-15",
        featureGroups: [
          {
            label: "Development & Design",
            items: [
              ...commonDesignItems,
              "Fast load times and SEO-friendly performance optimization",
              "SSL certificate and payment security infrastructure",
            ],
          },
          {
            label: "SEO & Integration",
            items: [
              ...commonSeoItems,
              "Basic ecommerce SEO configuration",
              "Google Analytics 4 (GA4) setup",
              "Google Search Console setup",
              "Contact form and Google Maps integration",
              "Privacy, Distance Sales Agreement and cookie module (KVKK/GDPR)",
            ],
          },
          {
            label: "Content & Panel",
            items: [
              "Product listing and detail pages",
              "Category and subcategory management",
              "Cart and standard checkout flow",
              "Single payment gateway integration (PayTR, etc.)",
              "Basic stock tracking infrastructure",
              "Basic store admin dashboard",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              ...commonDeliveryItems,
              "15 days technical support",
            ],
          },
        ],
      },
      standart: {
        deliveryDays: "42-56",
        revisions: "5",
        scope: "1-35",
        featureGroups: [
          {
            label: "Development & Design",
            items: [
              ...commonDesignItems,
              "Fast load times and SEO-friendly performance optimization",
            ],
          },
          {
            label: "SEO & Integration",
            items: [
              ...commonSeoItems,
              "Advanced SEO (meta, OG, product schema markup)",
              "Google Search Console and Analytics connection",
              "Contact form and Google Maps integration",
              "WhatsApp quick order and support integration",
              "Automated email order notifications",
              "Privacy and legal agreement infrastructure (KVKK/GDPR)",
              "Second language support",
            ],
          },
          {
            label: "Store & Payment",
            items: [
              "Advanced product, category and tag management",
              "Multiple payment methods (credit card, bank transfer/EFT)",
              "Membership, login, password reset and profile pages",
              "Order tracking and user history panel",
              "Coupon, discount and campaign management module",
              "Add to favorites / wishlist",
              "Product variant support (color, size, dimensions, etc.)",
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
            label: "Development & Design",
            items: [
              ...commonDesignItems,
              "Pixel-perfect ecommerce Figma-to-code implementation",
              "Custom-built, high-speed scalable infrastructure",
            ],
          },
          {
            label: "SEO & Analytics",
            items: [
              ...commonSeoItems,
              "Comprehensive technical ecommerce SEO optimization",
              "Google Analytics 4 (GA4) ecommerce conversion reporting",
              "Google Merchant Center / Shopping integration infrastructure",
              "Conversion, form and cart tracking",
              "Advanced Product, Review and Offer schema markup",
              "Google Search Console setup",
            ],
          },
          {
            label: "Store & Payment",
            items: [
              "Advanced product, category and tag management",
              "Multiple payment methods (credit card, bank transfer/EFT)",
              "Membership, login, password reset and profile pages",
              "Order tracking and user history panel",
              "Coupon, discount and campaign management module",
              "Add to favorites / wishlist",
              "Dynamic variant and pricing management",
              "Shipping and logistics integration (Yurtiçi, MNG, etc.)",
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
              "Dark / Light mode support",
              "Full ecommerce management panel (advanced CMS)",
              "Multilingual and multi-currency support",
              "Blog / content marketing module",
              "CRM, SMS and marketing tools connection (Mailchimp, etc.)",
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

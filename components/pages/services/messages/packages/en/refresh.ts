export const refreshPackagesEn = {
  portfolio: {
    title: "Portfolio / Promotional Site Redesign",
    description:
      "Renew your promotional site with modern design, fast infrastructure and SEO protection.",
    tiers: {
      temel: {
        deliveryDays: "7-14",
        revisions: "2",
        scope: "1-8",
        featureGroups: [
          {
            label: "Analysis & Planning",
            items: [
              "Current site performance and SEO analysis",
              "Content inventory and migration plan",
              "URL structure and redirect strategy",
            ],
          },
          {
            label: "Redesign & Migration",
            items: [
              "Mobile-friendly modern interface",
              "Safe migration of existing content",
              "Basic performance optimization",
              "301 redirect setup",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              "Go-live and DNS transition support",
              "15 days technical support",
            ],
          },
        ],
      },
      standart: {
        deliveryDays: "14-21",
        revisions: "4",
        scope: "1-15",
        featureGroups: [
          {
            label: "Analysis & Design",
            items: [
              "Comprehensive UX and performance audit",
              "Brand-aligned interface redesign",
              "Page transition animations",
              "Core Web Vitals improvement",
            ],
          },
          {
            label: "SEO & Migration",
            items: [
              "Meta and schema data preservation",
              "Advanced redirect map",
              "Search Console transition tracking",
              "Sitemap update",
            ],
          },
          {
            label: "Delivery & Support",
            items: ["Source code delivery", "30 days technical support"],
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
              "Migration to modern Next.js infrastructure",
              "Custom design and animations",
              "Dark / Light mode support",
              "90+ PageSpeed score target",
            ],
          },
          {
            label: "SEO & CMS",
            items: [
              "Comprehensive SEO protection and strengthening",
              "Dynamic content management panel",
              "Multilingual infrastructure",
              "Analytics and conversion tracking",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              "Source code delivery",
              "45 days technical support",
              "User guide training",
            ],
          },
        ],
      },
    },
  },
  corporate: {
    title: "Corporate Site Redesign",
    description:
      "Renew your corporate website with current design, fast infrastructure and secure transition.",
    tiers: {
      temel: {
        deliveryDays: "10-18",
        revisions: "2",
        scope: "1-15",
        featureGroups: [
          {
            label: "Analysis & Planning",
            items: [
              "Current site technical and SEO audit",
              "Content and page structure analysis",
              "Transition timeline and risk plan",
            ],
          },
          {
            label: "Redesign",
            items: [
              "Corporate identity-aligned interface refresh",
              "Content migration",
              "Basic performance improvement",
              "SSL and security update",
            ],
          },
          {
            label: "Delivery & Support",
            items: ["Go-live support", "15 days technical support"],
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
              "Information architecture restructuring",
              "Premium UI components",
              "Accessibility improvements",
              "Mobile experience optimization",
            ],
          },
          {
            label: "Infrastructure & SEO",
            items: [
              "Modern framework migration",
              "SEO ranking protection plan",
              "Form and integration update",
              "Analytics reconfiguration",
            ],
          },
          {
            label: "Delivery & Support",
            items: ["Source code delivery", "30 days technical support"],
          },
        ],
      },
      pro: {
        deliveryDays: "28-42",
        revisions: "6",
        scope: "∞",
        featureGroups: [
          {
            label: "Corporate Redesign",
            items: [
              "Custom-built high-speed infrastructure",
              "Multilingual and multi-department structure",
              "Advanced CMS and content management",
              "API and third-party integrations",
            ],
          },
          {
            label: "Security & Performance",
            items: [
              "Comprehensive security audit and improvement",
              "CDN and cache optimization",
              "GDPR compliant cookie module",
              "Backup and restore plan",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              "Source code delivery",
              "45 days technical support",
              "Team training and documentation",
            ],
          },
        ],
      },
    },
  },
  ecommerce: {
    title: "Ecommerce Site Redesign",
    description:
      "Renew your ecommerce site with modern infrastructure, fast checkout flows and SEO protection.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "2",
        scope: "1-20",
        featureGroups: [
          {
            label: "Analysis & Planning",
            items: [
              "Current store performance analysis",
              "Product and category migration plan",
              "Payment and order flow audit",
            ],
          },
          {
            label: "Redesign",
            items: [
              "Modern ecommerce interface",
              "Product and category migration",
              "Basic payment integration update",
              "Mobile shopping experience improvement",
            ],
          },
          {
            label: "Delivery & Support",
            items: ["Go-live and test order", "15 days technical support"],
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
              "Advanced product filtering and search",
              "Cart and checkout flow optimization",
              "Stock and variant management update",
              "Shipping integration refresh",
            ],
          },
          {
            label: "SEO & Marketing",
            items: [
              "Product URL and meta protection plan",
              "Ecommerce schema markup",
              "Conversion tracking reconfiguration",
              "Abandoned cart infrastructure",
            ],
          },
          {
            label: "Delivery & Support",
            items: ["Source code delivery", "30 days technical support"],
          },
        ],
      },
      pro: {
        deliveryDays: "35-49",
        revisions: "6",
        scope: "∞",
        featureGroups: [
          {
            label: "Enterprise Ecommerce Redesign",
            items: [
              "Migration to scalable modern infrastructure",
              "Multilingual and multi-currency support",
              "Advanced campaign and promo module",
              "ERP / accounting integration",
            ],
          },
          {
            label: "Performance & Security",
            items: [
              "High-traffic optimization",
              "PCI-DSS compliant virtual POS integration infrastructure",
              "Advanced security and fraud protection",
              "Real-time stock synchronization",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              "Source code delivery",
              "45 days technical support",
              "Store management training",
            ],
          },
        ],
      },
    },
  },
} as const;

const commonDesignTemelItems = [
  "Cross-platform iOS and Android build",
  "Brand-aligned UI/UX",
  "Splash screen and app icon",
  "Basic page transitions and navigation",
  "Fast launch and performance optimization",
] as const;

const commonDeliveryBase = [
  "Source code and project file delivery",
  "App Store and Play Store publishing support",
  "Store listing screenshots and descriptions",
  "Technical Support",
] as const;

const commonSecurityTemelItems = [
  "SSL communication and data encryption",
  "Privacy consent screen (KVKK/GDPR)",
] as const;

const portfolioFeaturesTemel = [
  "About, services and portfolio gallery",
  "Contact form and quick-access buttons",
  "Gallery and video content support",
  "References and client testimonials",
] as const;

const portfolioFeaturesStandart = [
  ...portfolioFeaturesTemel,
  "Push notification infrastructure",
  "Offline usage and caching",
] as const;

const portfolioFeaturesPro = [
  ...portfolioFeaturesTemel,
  "Push notification infrastructure",
  "Offline usage and caching",
  "Advanced push and announcement management",
  "CMS connection for dynamic content",
  "Deep link and content sharing",
] as const;

const corporateFeaturesTemel = [
  "Announcement, news and content screens",
  "Services, corporate info and contact pages",
  "User login and contact forms",
  "Corporate support channels (phone, email, live chat)",
  "Gallery and video content support",
  "PDF and document viewing",
] as const;

const corporateFeaturesStandart = [
  ...corporateFeaturesTemel,
  "Grouped push notification system",
  "User roles and permissions",
  "Offline content viewing and sync",
] as const;

const corporateFeaturesPro = [
  ...corporateFeaturesTemel,
  "Grouped push notification system",
  "User roles and permissions",
  "Offline content viewing and sync",
  "Rich-media announcements",
  "Advanced role-based access control",
  "Survey and feedback module",
] as const;

const ecommerceStoreTemel = [
  "Category and product listing",
  "Product detail, gallery and zoom",
  "Product search and basic filtering",
  "Stock status and price display",
  "Cart, checkout and order tracking",
  "Guest checkout and member login",
  "Order status notifications",
  "Delivery and shipping cost display",
] as const;

const ecommerceStoreStandart = [
  ...ecommerceStoreTemel,
  "Favorites and order history",
  "Saved address management",
  "Multiple payments (card, bank transfer)",
] as const;

const ecommerceStorePro = [
  ...ecommerceStoreTemel,
  "Favorites and order history",
  "Saved address management",
  "Multiple payments (card, bank transfer)",
  "Advanced stock and dynamic variant management",
  "Product reviews and star ratings",
  "Multi-currency support",
] as const;

export const appPackagesEn = {
  portfolio: {
    title: "Portfolio / Promotional",
    description:
      "A trusted iOS and Android app that introduces your brand in one tap. Bring your portfolio, services and contact channels to users’ pockets.",
    introP2:
      "Startup, Professional and Premium tiers adapt to promotional apps of different scales. We build once for iOS and Android—from store publishing to integrations.",
    tiers: {
      temel: {
        deliveryDays: "21-30",
        revisions: "3",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          {
            label: "Development & Infrastructure",
            items: [...commonDesignTemelItems],
          },
          {
            label: "Features & Functions",
            items: [...portfolioFeaturesTemel],
          },
          {
            label: "Integration & Security",
            items: [
              "REST API connection",
              "Map and location display",
              "Firebase Analytics setup",
              ...commonSecurityTemelItems,
            ],
          },
          {
            label: "Support",
            items: [...commonDeliveryBase, "Basic user guide"],
          },
        ],
      },
      standart: {
        deliveryDays: "30-45",
        revisions: "5",
        supportDays: "30",
        languages: "1-5",
        featureGroups: [
          {
            label: "Development & Infrastructure",
            items: [
              ...commonDesignTemelItems,
              "Premium UI components",
              "Dark / light mode support",
              "Advanced device and screen compatibility testing",
            ],
          },
          {
            label: "Features & Functions",
            items: [...portfolioFeaturesStandart],
          },
          {
            label: "Integration & Security",
            items: [
              "Advanced REST API integration",
              "Social sharing integration",
              "Map and location display",
              "Firebase Analytics setup",
              ...commonSecurityTemelItems,
            ],
          },
          {
            label: "Support",
            items: [
              ...commonDeliveryBase,
              "User guide and short admin training",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "45-60",
        revisions: "7",
        supportDays: "45",
        languages: "∞",
        featureGroups: [
          {
            label: "Development & Infrastructure",
            items: [
              ...commonDesignTemelItems,
              "Dark / light mode support",
              "Pixel-perfect Figma-to-code UI",
              "Advanced animations and micro-interactions",
              "Scalable high-performance infrastructure",
            ],
          },
          {
            label: "Features & Functions",
            items: [...portfolioFeaturesPro],
          },
          {
            label: "Integration & Security",
            items: [
              "Custom API and third-party integrations",
              "Firebase and GA4 analytics setup",
              "KVKK / GDPR compliant security stack",
            ],
          },
          {
            label: "Support",
            items: [
              ...commonDeliveryBase,
              "Comprehensive training and documentation",
            ],
          },
        ],
      },
    },
  },
  corporate: {
    title: "Corporate",
    description:
      "A reliable corporate mobile experience for employees or customers. Deliver content, communication and workflows in a consistent iOS and Android interface.",
    introP2:
      "Startup, Professional and Premium tiers adapt to corporate mobile projects of different scales. We build once for iOS and Android.",
    tiers: {
      temel: {
        deliveryDays: "28-42",
        revisions: "3",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          {
            label: "Development & Infrastructure",
            items: [
              "Brand-aligned iOS / Android UI",
              "Brand-aligned UI/UX",
              "Splash screen and app icon",
              "Performance and device optimization",
            ],
          },
          {
            label: "Features & Functions",
            items: [...corporateFeaturesTemel],
          },
          {
            label: "Integration & Security",
            items: [
              "Firebase Analytics setup",
              "Data encryption",
              ...commonSecurityTemelItems,
            ],
          },
          {
            label: "Support",
            items: [...commonDeliveryBase, "Basic user guide"],
          },
        ],
      },
      standart: {
        deliveryDays: "42-56",
        revisions: "5",
        supportDays: "30",
        languages: "1-5",
        featureGroups: [
          {
            label: "Development & Infrastructure",
            items: [
              "Custom corporate iOS / Android UI",
              "Premium components and modern interface",
              "Dark / light mode support",
              "Advanced performance and battery optimization",
            ],
          },
          {
            label: "Features & Functions",
            items: [...corporateFeaturesStandart],
          },
          {
            label: "Integration & Security",
            items: [
              "Analytics and crash tracking (Crashlytics)",
              "API integration with existing company systems",
              "KVKK-compliant data processing",
            ],
          },
          {
            label: "Support",
            items: [
              ...commonDeliveryBase.slice(0, 2),
              "App Store and Play Store organization account setup",
              ...commonDeliveryBase.slice(2),
              "User guide and short admin training",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "56-84",
        revisions: "8",
        supportDays: "45",
        languages: "∞",
        featureGroups: [
          {
            label: "Development & Infrastructure",
            items: [
              "High-performance custom corporate stack",
              "Pixel-perfect corporate Figma-to-code UI",
              "Tablet optimization",
              "Dark / light mode support",
            ],
          },
          {
            label: "Features & Functions",
            items: [...corporateFeaturesPro],
          },
          {
            label: "Integration & Security",
            items: [
              "CRM / ERP integration",
              "Biometric login (Face ID, fingerprint)",
              "KVKK / GDPR compliant security stack",
            ],
          },
          {
            label: "Support",
            items: [
              ...commonDeliveryBase,
              "Corporate user guide and comprehensive training",
            ],
          },
        ],
      },
    },
  },
  ecommerce: {
    title: "Ecommerce",
    description:
      "A store-ready ecommerce app with payments, catalog and order management. Bring your cart flow and customer journey to mobile with a smooth, trustworthy experience.",
    introP2:
      "Startup, Professional and Premium tiers scale with different catalogs and order volumes. If you are unsure which package to choose, feel free to get in touch.",
    tiers: {
      temel: {
        deliveryDays: "42-56",
        revisions: "3",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          {
            label: "Development & Infrastructure",
            items: [
              "Ecommerce-focused iOS / Android UI",
              "Brand-aligned UI/UX",
              "Splash screen and app icon",
              "Fast product image loading optimization",
            ],
          },
          {
            label: "Store & Functions",
            items: [...ecommerceStoreTemel],
          },
          {
            label: "Marketing & Security",
            items: [
              "Single payment gateway integration",
              "SSL data security and API communication",
              "Distance sales agreement and privacy module",
              "Firebase Analytics setup",
            ],
          },
          {
            label: "Support",
            items: [...commonDeliveryBase, "Basic store user guide"],
          },
        ],
      },
      standart: {
        deliveryDays: "56-77",
        revisions: "5",
        supportDays: "30",
        languages: "1-5",
        featureGroups: [
          {
            label: "Development & Infrastructure",
            items: [
              "Premium ecommerce iOS / Android UI",
              "Advanced filtering and infinite scroll",
              "Dark / light mode support",
              "Smooth category transitions and animations",
            ],
          },
          {
            label: "Store & Functions",
            items: [...ecommerceStoreStandart],
          },
          {
            label: "Marketing & Security",
            items: [
              "Order and campaign push notifications",
              "Coupon and cart discount support",
              "Privacy and legal consent infrastructure",
            ],
          },
          {
            label: "Support",
            items: [
              ...commonDeliveryBase,
              "User guide and short admin training",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "84-120",
        revisions: "8",
        supportDays: "45",
        languages: "∞",
        featureGroups: [
          {
            label: "Development & Infrastructure",
            items: [
              "Native-feel high-performance custom stack",
              "Pixel-perfect ecommerce Figma-to-code UI",
              "Custom cart and checkout animations",
              "Dark / light mode support",
            ],
          },
          {
            label: "Store & Functions",
            items: [...ecommerceStorePro],
          },
          {
            label: "Marketing & Security",
            items: [
              "Abandoned cart and personalized notifications",
              "GA4 / Firebase ecommerce conversion analytics",
              "Shipping, logistics and Apple / Google Pay integration",
            ],
          },
          {
            label: "Support",
            items: [
              ...commonDeliveryBase,
              "Comprehensive store management training",
            ],
          },
        ],
      },
    },
  },
} as const;

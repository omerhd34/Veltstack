const GROUP_DEV = "Development & Infrastructure";
const GROUP_FEATURES = "Features & Functions";
const GROUP_STORE = "Store & Payment";
const GROUP_INTEGRATION = "Integrations";
const GROUP_SECURITY = "Security & Analytics";
const GROUP_LAUNCH = "Launch & Delivery";
const GROUP_SUPPORT = "Technical Support";

const commonDesignTemelItems = [
  "Cross-platform iOS and Android build",
  "Brand-aligned UI/UX",
  "Splash screen and app icon",
  "Basic page transitions and navigation",
  "Fast launch and performance optimization",
] as const;

const commonLaunchItems = [
  "Source code and project file delivery",
  "App Store and Play Store publishing support",
  "Store listing screenshots and descriptions",
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
  "Coupon and cart discount support",
  "Order and campaign push notifications",
] as const;

const ecommerceStorePro = [
  ...ecommerceStoreTemel,
  "Favorites and order history",
  "Saved address management",
  "Multiple payments (card, bank transfer)",
  "Coupon and cart discount support",
  "Order and campaign push notifications",
  "Advanced stock and dynamic variant management",
  "Product reviews and star ratings",
  "Multi-currency support",
  "Abandoned cart and personalized notifications",
] as const;

export const appPackagesEn = {
  portfolio: {
    title: "Portfolio / Promotional",
    description:
      "A trusted iOS and Android app that introduces your brand in one tap. Bring your portfolio, services and contact channels to users’ pockets.",
    introP2:
      "Startup, Professional and Advanced tiers adapt to promotional apps of different scales. We build once for iOS and Android—from store publishing to integrations.",
    tiers: {
      temel: {
        deliveryDays: "21-30",
        revisions: "3",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          { label: GROUP_DEV, items: [...commonDesignTemelItems] },
          { label: GROUP_FEATURES, items: [...portfolioFeaturesTemel] },
          {
            label: GROUP_INTEGRATION,
            items: ["REST API connection", "Map and location display"],
          },
          {
            label: GROUP_SECURITY,
            items: ["Firebase Analytics setup", ...commonSecurityTemelItems],
          },
          { label: GROUP_LAUNCH, items: [...commonLaunchItems] },
          { label: GROUP_SUPPORT, items: ["Basic user guide"] },
        ],
      },
      standart: {
        deliveryDays: "30-45",
        revisions: "5",
        supportDays: "30",
        languages: "1-5",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              ...commonDesignTemelItems,
              "Premium UI components",
              "Dark / light mode support",
              "Advanced device and screen compatibility testing",
            ],
          },
          { label: GROUP_FEATURES, items: [...portfolioFeaturesStandart] },
          {
            label: GROUP_INTEGRATION,
            items: [
              "Advanced REST API integration",
              "Social sharing integration",
              "Map and location display",
            ],
          },
          {
            label: GROUP_SECURITY,
            items: ["Firebase Analytics setup", ...commonSecurityTemelItems],
          },
          { label: GROUP_LAUNCH, items: [...commonLaunchItems] },
          {
            label: GROUP_SUPPORT,
            items: ["User guide and short admin training"],
          },
        ],
      },
      pro: {
        deliveryDays: "45-60",
        revisions: "7",
        supportDays: "45",
        languages: "Unlimited",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              ...commonDesignTemelItems,
              "Dark / light mode support",
              "Pixel-perfect Figma-to-code UI",
              "Advanced animations and micro-interactions",
              "Scalable high-performance infrastructure",
            ],
          },
          { label: GROUP_FEATURES, items: [...portfolioFeaturesPro] },
          {
            label: GROUP_INTEGRATION,
            items: ["Custom API and third-party integrations"],
          },
          {
            label: GROUP_SECURITY,
            items: [
              "Firebase and GA4 analytics setup",
              "KVKK / GDPR compliant security stack",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonLaunchItems] },
          {
            label: GROUP_SUPPORT,
            items: ["Comprehensive training and documentation"],
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
      "Startup, Professional and Advanced tiers adapt to corporate mobile projects of different scales. We build once for iOS and Android.",
    tiers: {
      temel: {
        deliveryDays: "28-42",
        revisions: "3",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              "Brand-aligned iOS / Android UI",
              "Brand-aligned UI/UX",
              "Splash screen and app icon",
              "Performance and device optimization",
            ],
          },
          { label: GROUP_FEATURES, items: [...corporateFeaturesTemel] },
          {
            label: GROUP_SECURITY,
            items: [
              "Firebase Analytics setup",
              "Data encryption",
              ...commonSecurityTemelItems,
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonLaunchItems] },
          { label: GROUP_SUPPORT, items: ["Basic user guide"] },
        ],
      },
      standart: {
        deliveryDays: "42-56",
        revisions: "5",
        supportDays: "30",
        languages: "1-5",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              "Custom corporate iOS / Android UI",
              "Premium components and modern interface",
              "Dark / light mode support",
              "Advanced performance and battery optimization",
            ],
          },
          { label: GROUP_FEATURES, items: [...corporateFeaturesStandart] },
          {
            label: GROUP_INTEGRATION,
            items: ["API integration with existing company systems"],
          },
          {
            label: GROUP_SECURITY,
            items: [
              "Analytics and crash tracking (Crashlytics)",
              "KVKK-compliant data processing",
            ],
          },
          {
            label: GROUP_LAUNCH,
            items: [
              ...commonLaunchItems.slice(0, 2),
              "App Store and Play Store organization account setup",
              ...commonLaunchItems.slice(2),
            ],
          },
          {
            label: GROUP_SUPPORT,
            items: ["User guide and short admin training"],
          },
        ],
      },
      pro: {
        deliveryDays: "56-84",
        revisions: "8",
        supportDays: "45",
        languages: "Unlimited",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              "High-performance custom corporate stack",
              "Pixel-perfect corporate Figma-to-code UI",
              "Tablet optimization",
              "Dark / light mode support",
            ],
          },
          { label: GROUP_FEATURES, items: [...corporateFeaturesPro] },
          { label: GROUP_INTEGRATION, items: ["CRM / ERP integration"] },
          {
            label: GROUP_SECURITY,
            items: [
              "Biometric login (Face ID, fingerprint)",
              "KVKK / GDPR compliant security stack",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonLaunchItems] },
          {
            label: GROUP_SUPPORT,
            items: ["Corporate user guide and comprehensive training"],
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
      "Startup, Professional and Advanced tiers scale with different catalogs and order volumes. If you are unsure which package to choose, feel free to get in touch.",
    tiers: {
      temel: {
        deliveryDays: "42-56",
        revisions: "3",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              "Ecommerce-focused iOS / Android UI",
              "Brand-aligned UI/UX",
              "Splash screen and app icon",
              "Fast product image loading optimization",
            ],
          },
          { label: GROUP_STORE, items: [...ecommerceStoreTemel] },
          {
            label: GROUP_INTEGRATION,
            items: ["Single payment gateway integration"],
          },
          {
            label: GROUP_SECURITY,
            items: [
              "SSL data security and API communication",
              "Distance sales agreement and privacy module",
              "Firebase Analytics setup",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonLaunchItems] },
          { label: GROUP_SUPPORT, items: ["Basic store user guide"] },
        ],
      },
      standart: {
        deliveryDays: "56-77",
        revisions: "5",
        supportDays: "30",
        languages: "1-5",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              "Premium ecommerce iOS / Android UI",
              "Advanced filtering and infinite scroll",
              "Dark / light mode support",
              "Smooth category transitions and animations",
            ],
          },
          { label: GROUP_STORE, items: [...ecommerceStoreStandart] },
          {
            label: GROUP_INTEGRATION,
            items: ["Single payment gateway integration"],
          },
          {
            label: GROUP_SECURITY,
            items: [
              "SSL data security and API communication",
              "Privacy and legal consent infrastructure",
              "Firebase Analytics setup",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonLaunchItems] },
          {
            label: GROUP_SUPPORT,
            items: ["User guide and short admin training"],
          },
        ],
      },
      pro: {
        deliveryDays: "84-120",
        revisions: "8",
        supportDays: "45",
        languages: "Unlimited",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              "Native-feel high-performance custom stack",
              "Pixel-perfect ecommerce Figma-to-code UI",
              "Custom cart and checkout animations",
              "Dark / light mode support",
            ],
          },
          { label: GROUP_STORE, items: [...ecommerceStorePro] },
          {
            label: GROUP_INTEGRATION,
            items: [
              "Single payment gateway integration",
              "Shipping, logistics and Apple / Google Pay integration",
            ],
          },
          {
            label: GROUP_SECURITY,
            items: [
              "SSL data security and API communication",
              "Privacy and legal consent infrastructure",
              "GA4 / Firebase ecommerce conversion analytics",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonLaunchItems] },
          {
            label: GROUP_SUPPORT,
            items: ["Comprehensive store management training"],
          },
        ],
      },
    },
  },
} as const;

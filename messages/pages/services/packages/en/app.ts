const commonDesignItems = [
  "Cross-platform iOS and Android build",
  "Brand-aligned UI/UX",
  "Splash screen and app icon",
  "Basic page transitions and navigation",
  "Fast launch and performance optimization",
] as const;

const standartDesignExtras = [
  "Dark / light mode support",
  "Premium UI components",
  "Compatibility across all phones and tablets",
] as const;

const commonDeliveryItems = ["Source code and project file delivery"] as const;

const standartDeliveryItems = [
  ...commonDeliveryItems,
  "iOS or Android publishing support",
] as const;

const proDeliveryItems = [
  ...commonDeliveryItems,
  "iOS and Android publishing support",
] as const;

const commonSupportStandartItems = [
  "User guide and short admin training",
] as const;

const GROUP_DEV = "Design & Infrastructure";
const GROUP_FEATURES = "Content & Features";
const GROUP_INTEGRATION = "Integration & Security";
const GROUP_LAUNCH = "Launch & Delivery";
const GROUP_SUPPORT = "Technical Support";
const GROUP_STORE = "Store & Payment";

const commonSecurityItems = [
  "Privacy consent screen (KVKK/GDPR)",
] as const;

const tierIntegrationTemelItems = [
  "Basic usage analytics",
  ...commonSecurityItems,
] as const;

const tierIntegrationStandartItems = [
  ...tierIntegrationTemelItems,
  "Social sharing integration",
] as const;

const tierIntegrationProItems = [
  ...tierIntegrationStandartItems,
  "Custom API and third-party integrations",
  "Advanced analytics and conversion tracking",
  "KVKK / GDPR compliant security stack",
] as const;

const portfolioFeaturesCommon = [
  "About, services and portfolio gallery",
  "Contact form and quick-access buttons",
  "References and client testimonials",
] as const;

const portfolioFeaturesStandartExtras = [
  "Push notification infrastructure",
  "Offline usage and caching",
] as const;

const portfolioFeaturesProExtras = [
  "Advanced push and announcement management",
  "CMS connection for dynamic content",
  "Deep link and content sharing",
] as const;

const corporateFeaturesCommon = [
  "Announcement, news and content screens",
  "Services, corporate info and contact pages",
  "User login and contact forms",
  "Corporate support channels (phone, email, live chat)",
  "Gallery and video content support",
  "PDF and document viewing",
] as const;

const corporateFeaturesStandartExtras = [
  "Grouped push notification system",
  "User roles and permissions",
  "Offline content viewing and sync",
] as const;

const corporateFeaturesProExtras = [
  "Rich-media announcements",
  "Advanced role-based access control",
  "Survey and feedback module",
] as const;

const corporateIntegrationTemelItems = [
  "Basic usage analytics",
  ...commonSecurityItems,
] as const;

const corporateIntegrationStandartItems = [
  ...corporateIntegrationTemelItems,
  "App crash and error tracking",
  "API integration with existing company systems",
] as const;

const corporateIntegrationProItems = [
  ...corporateIntegrationStandartItems,
  "CRM / ERP integration",
  "Biometric login (Face ID, fingerprint)",
  "KVKK / GDPR compliant security stack",
] as const;

const ecommerceStoreCommonItems = [
  "Category and product listing",
  "Product detail, gallery and zoom",
  "Product search and basic filtering",
  "Stock status and price display",
  "Cart, checkout and order tracking",
  "Guest checkout and member login",
  "Order status notifications",
  "Delivery and shipping cost display",
] as const;

const ecommerceStoreStandartExtras = [
  "Favorites and order history",
  "Saved address management",
  "Multiple payments (card, bank transfer)",
] as const;

const ecommerceStoreProExtras = [
  "Advanced stock and dynamic variant management",
  "Product reviews and star ratings",
  "Multi-currency support",
] as const;

const ecommerceIntegrationTemelItems = [
  "Single payment gateway integration",
  "Basic usage analytics",
  "Distance sales agreement module",
  ...commonSecurityItems,
] as const;

const ecommerceIntegrationStandartItems = [
  ...ecommerceIntegrationTemelItems,
  "Order and campaign push notifications",
  "Coupon and cart discount support",
] as const;

const ecommerceIntegrationProItems = [
  ...ecommerceIntegrationStandartItems,
  "Abandoned cart and personalized notifications",
  "Advanced ecommerce conversion analytics",
  "Shipping, logistics and Apple / Google Pay integration",
] as const;

export const appPackagesEn = {
  portfolio: {
    title: "Portfolio / Promotional",
    description:
      "A trusted iOS and Android app that introduces your brand in one tap. Bring your portfolio, services and contact channels to users’ pockets.",
    introP2:
      "Startup, Professional and Premium tiers adapt to promotional apps of different scales. We build once for iOS and Android—from store publishing to integrations. If none of the packages fit, feel free to get in touch.",
    tiers: {
      temel: {
        deliveryDays: "21-30",
        revisions: "3",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          { label: GROUP_DEV, items: [...commonDesignItems] },
          { label: GROUP_FEATURES, items: [...portfolioFeaturesCommon] },
          {
            label: GROUP_INTEGRATION,
            items: [...tierIntegrationTemelItems],
          },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
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
            items: [...commonDesignItems, ...standartDesignExtras],
          },
          {
            label: GROUP_FEATURES,
            items: [
              ...portfolioFeaturesCommon,
              ...portfolioFeaturesStandartExtras,
            ],
          },
          {
            label: GROUP_INTEGRATION,
            items: [...tierIntegrationStandartItems],
          },
          { label: GROUP_LAUNCH, items: [...standartDeliveryItems] },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
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
              ...commonDesignItems,
              ...standartDesignExtras,
              "Design-accurate custom UI",
              "Advanced animations and micro-interactions",
              "High-performance, growth-ready infrastructure",
            ],
          },
          {
            label: GROUP_FEATURES,
            items: [
              ...portfolioFeaturesCommon,
              ...portfolioFeaturesStandartExtras,
              ...portfolioFeaturesProExtras,
            ],
          },
          {
            label: GROUP_INTEGRATION,
            items: [...tierIntegrationProItems],
          },
          { label: GROUP_LAUNCH, items: [...proDeliveryItems] },
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
      "A reliable corporate mobile experience for employees or customers. Deliver content, communication and workflows in a consistent iOS and Android interface.",
    introP2:
      "Startup, Professional and Premium tiers adapt to corporate mobile projects of different scales. We build once for iOS and Android. If none of the packages fit, feel free to get in touch.",
    tiers: {
      temel: {
        deliveryDays: "28-42",
        revisions: "3",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          { label: GROUP_DEV, items: [...commonDesignItems] },
          { label: GROUP_FEATURES, items: [...corporateFeaturesCommon] },
          {
            label: GROUP_INTEGRATION,
            items: [...corporateIntegrationTemelItems],
          },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
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
            items: [...commonDesignItems, ...standartDesignExtras],
          },
          {
            label: GROUP_FEATURES,
            items: [
              ...corporateFeaturesCommon,
              ...corporateFeaturesStandartExtras,
            ],
          },
          {
            label: GROUP_INTEGRATION,
            items: [...corporateIntegrationStandartItems],
          },
          { label: GROUP_LAUNCH, items: [...standartDeliveryItems] },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
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
              ...commonDesignItems,
              ...standartDesignExtras,
              "Design-accurate corporate UI",
              "Tablet optimization",
              "High-performance, growth-ready infrastructure",
            ],
          },
          {
            label: GROUP_FEATURES,
            items: [
              ...corporateFeaturesCommon,
              ...corporateFeaturesStandartExtras,
              ...corporateFeaturesProExtras,
            ],
          },
          {
            label: GROUP_INTEGRATION,
            items: [...corporateIntegrationProItems],
          },
          { label: GROUP_LAUNCH, items: [...proDeliveryItems] },
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
      "A store-ready ecommerce app with payments, catalog and order management. Bring your cart flow and customer journey to mobile with a smooth, trustworthy experience.",
    introP2:
      "Startup, Professional and Premium tiers scale with different catalogs and order volumes. We build once for iOS and Android. If none of the packages fit, feel free to get in touch.",
    tiers: {
      temel: {
        deliveryDays: "42-56",
        revisions: "3",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          { label: GROUP_DEV, items: [...commonDesignItems] },
          { label: GROUP_STORE, items: [...ecommerceStoreCommonItems] },
          {
            label: GROUP_INTEGRATION,
            items: [...ecommerceIntegrationTemelItems],
          },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
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
              ...commonDesignItems,
              ...standartDesignExtras,
              "Advanced filtering and infinite scroll",
            ],
          },
          {
            label: GROUP_STORE,
            items: [
              ...ecommerceStoreCommonItems,
              ...ecommerceStoreStandartExtras,
            ],
          },
          {
            label: GROUP_INTEGRATION,
            items: [...ecommerceIntegrationStandartItems],
          },
          { label: GROUP_LAUNCH, items: [...standartDeliveryItems] },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
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
              ...commonDesignItems,
              ...standartDesignExtras,
              "Design-accurate ecommerce UI",
              "Custom cart and checkout animations",
              "High-performance, growth-ready infrastructure",
            ],
          },
          {
            label: GROUP_STORE,
            items: [
              ...ecommerceStoreCommonItems,
              ...ecommerceStoreStandartExtras,
              ...ecommerceStoreProExtras,
            ],
          },
          {
            label: GROUP_INTEGRATION,
            items: [...ecommerceIntegrationProItems],
          },
          { label: GROUP_LAUNCH, items: [...proDeliveryItems] },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
          },
        ],
      },
    },
  },
} as const;

// ---------------------------------------------------------------------------
// Shared feature groups
// ---------------------------------------------------------------------------

const commonDesignTemelItems = [
  "Cross-Platform iOS and Android Building",
  "Basic UI/UX and Brand Color Adaptation",
  "Splash Screen and App Icon Design",
  "Basic Page Transitions and Navigation",
  "Fast Launch and Performance Optimization",
] as const;

const commonDeliveryTemelItems = [
  "Source Code and Project File Delivery",
  "Basic App Store and Play Store Publishing Support",
  "Store Listing Screenshots and Description Support",
  "Basic User Guide",
  "15 Days Technical Support",
] as const;

const commonDeliveryStandartItems = [
  "Source Code and Project File Delivery",
  "Basic App Store and Play Store Publishing Support",
  "Store Listing Screenshots and Description Support",
  "User Guide and Short Admin Training",
  "30 Days Technical Support",
] as const;

const commonDeliveryProItems = [
  "Source Code and Project File Delivery",
  "Basic App Store and Play Store Publishing Support",
  "Store Listing Screenshots and Description Support",
  "Comprehensive Training and Documentation",
  "45 Days Technical Support",
] as const;

const commonSecurityTemelItems = [
  "SSL Communication and Standard Data Security",
  "Privacy Policy Consent Screen (KVKK/GDPR)",
] as const;

// ---------------------------------------------------------------------------
// Portfolio / promotional app — tier-based features
// ---------------------------------------------------------------------------

const portfolioFeaturesTemelItems = [
  "About, Services and Portfolio Gallery Screens",
  "Contact Form and Quick Access Buttons (Phone, WhatsApp, Email)",
  "Gallery and Video Content Support",
  "Social Media Profile Links",
  "References and Client Testimonials Section",
] as const;

const portfolioFeaturesStandartItems = [
  ...portfolioFeaturesTemelItems,
  "Push Notification Infrastructure",
  "Basic Offline Usage and Caching",
  "Up to 2 Languages Support",
] as const;

const portfolioFeaturesProItems = [
  ...portfolioFeaturesTemelItems,
  "Push Notification Infrastructure",
  "Basic Offline Usage and Caching",
  "Advanced Push Notification and Announcement Management",
  "CMS Panel Connection for Dynamic Content",
  "Deep Link and Content Sharing Support",
  "Up to 5 Languages Support",
] as const;

const portfolioIntegrationTemelItems = [
  "Basic REST API Connection",
  "Map and Location Display",
  "Basic Firebase Analytics Setup",
  ...commonSecurityTemelItems,
] as const;

const portfolioIntegrationStandartItems = [
  "Advanced REST API Integration",
  "Social Media Sharing Integration",
  "Map and Location Display",
  "Basic Firebase Analytics Setup",
  ...commonSecurityTemelItems,
] as const;

// ---------------------------------------------------------------------------
// Corporate app — tier-based features
// ---------------------------------------------------------------------------

const corporateFeaturesTemelItems = [
  "Announcement, News and Static Content Screens",
  "Services, Corporate Info and Contact Pages",
  "Basic User Login and Contact Forms",
  "Corporate Communication and Support Channels (Phone, Email, Live Chat)",
  "Gallery and Video Content Support",
  "PDF and Document Viewing Module",
] as const;

const corporateFeaturesStandartItems = [
  ...corporateFeaturesTemelItems,
  "Grouped Push Notification System",
  "User Roles and Authorization",
  "Offline Content Viewing and Synchronization",
  "Up to 2 Languages Support",
] as const;

const corporateFeaturesProItems = [
  ...corporateFeaturesTemelItems,
  "Grouped Push Notification System",
  "User Roles and Authorization",
  "Offline Content Viewing and Synchronization",
  "Rich Media Interactive Announcements",
  "Advanced Role-Based Authorization and Intranet Sync",
  "Survey, Feedback and Satisfaction Module",
  "Up to 5 Languages Support",
] as const;

// ---------------------------------------------------------------------------
// Ecommerce app — tier-based features
// ---------------------------------------------------------------------------

const ecommerceStoreTemelItems = [
  "Category and Product Listing Screens",
  "Product Detail, Image Gallery and Zoom",
  "Product Search and Basic Filtering",
  "Stock Status and Price Display",
  "Cart, Basic Checkout and Order Tracking Flow",
  "Guest Checkout and Basic User Registration / Login",
  "Order Status Notification Screen",
  "Delivery and Shipping Cost Display",
] as const;

const ecommerceStoreStandartItems = [
  ...ecommerceStoreTemelItems,
  "Favorites and Detailed Order History",
  "Saved Address and Delivery Information Management",
  "Secure Multi-Payment Flow (Credit Card, Bank Transfer)",
  "Up to 2 Languages Support",
] as const;

const ecommerceStoreProItems = [
  ...ecommerceStoreTemelItems,
  "Favorites and Detailed Order History",
  "Saved Address and Delivery Information Management",
  "Secure Multi-Payment Flow (Credit Card, Bank Transfer)",
  "Advanced Stock and Dynamic Variant Management",
  "Product Reviews and Star Rating System",
  "Unlimited Languages and Multi-Currency Support",
] as const;

export const appPackagesEn = {
  portfolio: {
    title: "Promotional / Portfolio App",
    description:
      "Trust-building iOS and Android app that puts your brand one tap away.",
    introP2:
      "Startup, Professional and Premium tiers adapt to promotional apps of different scales. We build for iOS and Android in a single project — from store launch to integrations.",
    tiers: {
      temel: {
        deliveryDays: "21-30",
        revisions: "3",
        featureGroups: [
          {
            label: "Building & Design",
            items: [...commonDesignTemelItems],
          },
          {
            label: "Features & Functions",
            items: [...portfolioFeaturesTemelItems],
          },
          {
            label: "Integration & Security",
            items: [...portfolioIntegrationTemelItems],
          },
          {
            label: "Delivery & Support",
            items: [...commonDeliveryTemelItems],
          },
        ],
      },
      standart: {
        deliveryDays: "30-45",
        revisions: "5",
        featureGroups: [
          {
            label: "Building & Design",
            items: [
              ...commonDesignTemelItems,
              "Premium UI Components and Modern Interface",
              "Dark / Light Mode Support",
              "Advanced Compatibility and Device Testing Across Screen Sizes",
            ],
          },
          {
            label: "Features & Functions",
            items: [...portfolioFeaturesStandartItems],
          },
          {
            label: "Integration & Security",
            items: [...portfolioIntegrationStandartItems],
          },
          {
            label: "Delivery & Support",
            items: [...commonDeliveryStandartItems],
          },
        ],
      },
      pro: {
        deliveryDays: "45-60",
        revisions: "7",
        featureGroups: [
          {
            label: "Building & Design",
            items: [
              "Scalable High-Speed Custom Infrastructure",
              "Pixel-Perfect Figma-to-Code Implementation",
              "Advanced Animations and Micro-Interactions",
              "Dark / Light Mode Support",
            ],
          },
          {
            label: "Features & Functions",
            items: [...portfolioFeaturesProItems],
          },
          {
            label: "Integration & Security",
            items: [
              "Custom API and Third-Party Integrations",
              "Firebase and GA4 Analytics Setup",
              "Full KVKK and GDPR Compliant Security Infrastructure",
            ],
          },
          {
            label: "Delivery & Support",
            items: [...commonDeliveryProItems],
          },
        ],
      },
    },
  },
  corporate: {
    title: "Corporate Mobile App",
    description:
      "Reliable corporate mobile experience for your employees or customers.",
    introP2:
      "Startup, Professional and Premium tiers adapt to corporate mobile projects of different scales. We build for iOS and Android in a single project.",
    tiers: {
      temel: {
        deliveryDays: "28-42",
        revisions: "3",
        featureGroups: [
          {
            label: "Building & Design",
            items: [
              "Corporate-Branded iOS / Android Interface",
              "Basic UI/UX and Brand Color Adaptation",
              "Splash Screen and App Icon Design",
              "Standard Performance and Device Optimization",
            ],
          },
          {
            label: "Features & Functions",
            items: [...corporateFeaturesTemelItems],
          },
          {
            label: "Integration & Security",
            items: [
              "Basic Firebase Analytics Setup",
              "Standard Data Encryption",
              ...commonSecurityTemelItems,
            ],
          },
          {
            label: "Delivery & Support",
            items: [...commonDeliveryTemelItems],
          },
        ],
      },
      standart: {
        deliveryDays: "42-56",
        revisions: "5",
        featureGroups: [
          {
            label: "Building & Design",
            items: [
              "Custom Corporate iOS / Android Interface Design",
              "Premium Components and Modern Interface",
              "Dark / Light Mode Support",
              "Advanced Performance and Battery Optimization",
            ],
          },
          {
            label: "Features & Functions",
            items: [...corporateFeaturesStandartItems],
          },
          {
            label: "Integration & Security",
            items: [
              "Advanced Analytics and Error Tracking (Crashlytics)",
              "API Integration with Existing Company Systems",
              "KVKK Compliant Data Processing Module",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              ...commonDeliveryStandartItems.slice(0, 2),
              "App Store and Play Store Company Account Setup",
              ...commonDeliveryStandartItems.slice(2),
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "56-84",
        revisions: "8",
        featureGroups: [
          {
            label: "Building & Design",
            items: [
              "High-Speed Custom Corporate Infrastructure",
              "Pixel-Perfect Corporate Figma-to-Code Implementation",
              "Custom Optimization for Tablets",
              "Dark / Light Mode Support",
            ],
          },
          {
            label: "Features & Functions",
            items: [...corporateFeaturesProItems],
          },
          {
            label: "Integration & Security",
            items: [
              "Third-Party System Integrations (CRM, ERP)",
              "Biometric Login (Face ID, Fingerprint)",
              "Full KVKK and GDPR Compliant Security Infrastructure",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              ...commonDeliveryProItems.slice(0, 3),
              "Corporate User Manual and Comprehensive Training",
              "45 Days Technical Support",
            ],
          },
        ],
      },
    },
  },
  ecommerce: {
    title: "Ecommerce Mobile App",
    description:
      "Store-ready ecommerce app with payments, products and order management.",
    introP2:
      "Startup, Professional and Premium tiers scale with different catalogs and order volumes. If you are unsure which package to choose, feel free to get in touch.",
    tiers: {
      temel: {
        deliveryDays: "42-56",
        revisions: "3",
        featureGroups: [
          {
            label: "Building & Design",
            items: [
              "Ecommerce-Focused iOS / Android Interface",
              "Basic UI/UX and Brand Color Adaptation",
              "Splash Screen and App Icon Design",
              "Fast Product Image Loading Optimization",
            ],
          },
          {
            label: "Store & Functions",
            items: [...ecommerceStoreTemelItems],
          },
          {
            label: "Marketing & Security",
            items: [
              "Single Virtual POS / Payment Gateway Integration",
              "SSL Data Security and Standard API Communication",
              "Distance Sales Agreement and Privacy Policy Module (KVKK/GDPR)",
              "Basic Firebase Analytics Setup",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              ...commonDeliveryTemelItems.slice(0, 3),
              "Basic Store User Guide",
              "15 Days Technical Support",
            ],
          },
        ],
      },
      standart: {
        deliveryDays: "56-77",
        revisions: "5",
        featureGroups: [
          {
            label: "Building & Design",
            items: [
              "Premium Ecommerce iOS / Android Interface",
              "Advanced Filtering and Infinite Scroll",
              "Dark / Light Mode Support",
              "Smooth Category Transitions and Animations",
            ],
          },
          {
            label: "Store & Functions",
            items: [...ecommerceStoreStandartItems],
          },
          {
            label: "Marketing & Security",
            items: [
              "Push Notifications for Orders and Campaigns",
              "Coupon, Cart Discount and Campaign Support",
              "Advanced Legal Consent Infrastructure (KVKK/GDPR)",
            ],
          },
          {
            label: "Delivery & Support",
            items: [...commonDeliveryStandartItems],
          },
        ],
      },
      pro: {
        deliveryDays: "84-120",
        revisions: "8",
        featureGroups: [
          {
            label: "Building & Design",
            items: [
              "Native-Feel High-Speed Custom Infrastructure",
              "Pixel-Perfect Ecommerce Figma-to-Code Implementation",
              "Custom Cart and Checkout Page Animations",
              "Dark / Light Mode Support",
            ],
          },
          {
            label: "Store & Functions",
            items: [...ecommerceStoreProItems],
          },
          {
            label: "Marketing & Security",
            items: [
              "Abandoned Cart and Personalized Push Notifications",
              "GA4 / Firebase Ecommerce Conversion Analytics",
              "Shipping, Logistics and Apple / Google Pay Integration",
            ],
          },
          {
            label: "Delivery & Support",
            items: [
              ...commonDeliveryProItems.slice(0, 3),
              "Comprehensive Store Management Training",
              "45 Days Technical Support",
            ],
          },
        ],
      },
    },
  },
} as const;

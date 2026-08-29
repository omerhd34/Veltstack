const commonDesignItems = [
  "Responsive design for mobile, tablet and desktop",
  "HTTPS and baseline security configuration",
  "Fast loading and Core Web Vitals optimization",
  "Accessible, modern and readable UI",
] as const;

const standartDesignExtras = [
  "Smooth page transitions and micro-interactions",
  "Preferred database of your choice",
  "Video background / embedded demo",
] as const;

const preferredPaymentExtras = [
  "Preferred payment provider (iyzico, PayTR…)",
] as const;

const proDesignExtras = [
  "Custom design details and advanced animations",
  "Scalable infrastructure ready for high traffic",
  "Preferred hosting (Vercel, AWS, etc.)",
  "Live chat",
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
  "Open Graph and social preview optimization",
  "Search visibility tracking (Google Search Console)",
  "Visitor and traffic measurement (Google Analytics 4)",
] as const;

const tierSeoProItems = [
  ...tierSeoStandartItems,
  "Technical SEO improvements for better search visibility",
  "Organization, BreadcrumbList and rich-result schema",
  "Conversion tracking (forms, clicks, CTAs)",
  "Google Ads conversion tracking and tag setup",
  "Meta Pixel and conversion events (Facebook / Instagram)",
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
  ...preferredPaymentExtras,
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

const GROUP_CATALOG = "Catalog & Quotes";
const GROUP_LISTING = "Listings & Search";
const GROUP_BOOKING = "Booking & Calendar";
const GROUP_COURSE = "Courses & Learning";

const onePagePanelExtras = [
  "Section content editing from the panel",
  "CTA and contact form management",
  "Image upload and media library",
  "No-code text editing (rich editor)",
  "Page title and description editing from the panel",
] as const;

const catalogCommonItems = [
  "Product / service catalog listing and detail pages",
  "Category and filtering structure",
  "Quote / inquiry request form",
  "PDF or catalog download area",
] as const;

const catalogStandartExtras = [
  ...preferredPaymentExtras,
  "Advanced search and multi-filters",
  "Quote request tracking from the panel",
  "Price list or B2B pricing display",
  "Member / dealer login (basic access control)",
] as const;

const catalogProExtras = [
  "Dealer-specific pricing and stock views",
  "Bulk catalog import / export (Excel)",
  "Quote-to-order readiness",
  "CRM-ready quote workflow",
] as const;

const catalogPanelExtras = [
  "Product / service and category management",
  "Quote request management",
  "Image upload and media library",
  "No-code text editing (rich editor)",
  "Draft save and publish workflow",
  "Page title and description editing from the panel",
] as const;

const listingCommonItems = [
  "Listing index and detail pages",
  "Location, price and feature filters",
  "Listing photo gallery",
  "Contact / appointment request form",
] as const;

const listingStandartExtras = [
  "Map-based listing display",
  "Favorites and compare listings",
  "Advanced search (area, rooms, price range, etc.)",
  "Agent / advisor profile pages",
] as const;

const listingProExtras = [
  "Member panel to add and edit listings",
  "Featured / showcase listing management",
  "Multi-agent agency authorization",
  "Listing expiry and renewal automation",
] as const;

const listingPanelExtras = [
  "Listing, category and attribute management",
  "Agent / office information management",
  "Image upload and media library",
  "No-code text editing (rich editor)",
  "Draft save and publish workflow",
  "Page title and description editing from the panel",
] as const;

const bookingCommonItems = [
  "Service / room / table booking pages",
  "Availability calendar and time selection",
  "Booking request form",
  "Email booking notifications",
] as const;

const bookingStandartExtras = [
  ...preferredPaymentExtras,
  "Online payment for booking confirmation",
  "Capacity and availability management",
  "Cancellation / change rules",
  "Calendar sync (Google Calendar)",
] as const;

const bookingProExtras = [
  "Multi-branch / venue management",
  "Staff or resource-based calendars",
  "Automated reminder SMS / email",
  "Deposit, prepayment and refund flow",
] as const;

const bookingPanelExtras = [
  "Booking and calendar management",
  "Service / resource definitions",
  "Image upload and media library",
  "No-code text editing (rich editor)",
  "Draft save and publish workflow",
  "Page title and description editing from the panel",
] as const;

const educationCommonItems = [
  "Course / training listing and detail pages",
  "Curriculum and lesson showcase",
  "Enrollment / application form",
  "Instructor and program showcase areas",
] as const;

const educationStandartExtras = [
  ...preferredPaymentExtras,
  "Student membership and login",
  "Online payment for course enrollment",
  "Lesson material / file downloads",
  "Basic progress tracking",
] as const;

const educationProExtras = [
  "Video lesson player and content protection",
  "Certificate generation readiness",
  "Quiz / assignment module",
  "Instructor panel and student management",
] as const;

const educationPanelExtras = [
  "Course, lesson and enrollment management",
  "Instructor and program management",
  "Image upload and media library",
  "No-code text editing (rich editor)",
  "Draft save and publish workflow",
  "Page title and description editing from the panel",
] as const;

export const webPackagesEn = {
  onePage: {
    title: "One-Page",
    description:
      "A fast landing page that presents your brand, offer and contact path on a single screen. Ideal for campaigns, product launches or a focused personal showcase.",
    introP2:
      "We present your brand and offer in one scroll, then lead visitors to a single action: form, WhatsApp or booking. Startup is a fast, focused page; Professional adds editable content and analytics; Premium covers animation, extra languages and ad conversion tracking. If you are not sure which fits, get in touch.",
    tiers: {
      temel: {
        deliveryDays: "7-10",
        revisions: "2",
        supportDays: "15",
        pages: "1",
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
        deliveryDays: "10-14",
        revisions: "4",
        supportDays: "30",
        pages: "1",
        languages: "1-2",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems, ...standartDesignExtras],
          },
          { label: "SEO & Integration", items: [...tierSeoStandartItems] },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...onePagePanelExtras],
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
        deliveryDays: "14-21",
        revisions: "6",
        supportDays: "45",
        pages: "1-3",
        languages: "1-5",
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
            items: [...standartPanelExtras, ...onePagePanelExtras],
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

  portfolio: {
    title: "Portfolio / Personal",
    description:
      "Present your personal brand or business with a modern website that builds trust. Showcase your portfolio, services and story in a clear, compelling digital storefront.",
    introP2:
      "We present your work, services and story in a storefront that builds trust, then lead visitors to get in touch. Startup is a focused portfolio site; Professional adds a project gallery, blog and admin panel; Premium covers unlimited pages, extra languages and conversion tracking. If you are not sure which fits, get in touch.",
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
      "We present your services, team and contact channels in a corporate structure built for trust and enquiry. Startup is a core company site; Professional adds team, FAQ, blog and an admin panel; Premium covers unlimited pages, extra languages and ad conversion tracking. If you are not sure which fits, get in touch.",
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
      "We set up product, cart and checkout in one flow, then make orders manageable from the panel. Startup is a core store with bank transfer; Professional adds membership, coupons and iyzico / PayTR; Premium covers guest checkout, multi-currency and cart reminders. If you are not sure which fits, get in touch.",
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

  catalog: {
    title: "Catalog / B2B",
    description:
      "A digital catalog built for wholesale and B2B sales. Speed up buyer decisions with quote requests, filtering and a dealer-focused storefront.",
    introP2:
      "We present products and services in a quote-led catalogue that speeds up the buying decision. Startup includes lists, filters and a quote form; Professional adds B2B pricing and dealer login; Premium covers custom pricing, bulk upload and quote-to-order. If you are not sure which fits, get in touch.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "3",
        supportDays: "15",
        pages: "1-15",
        languages: "1",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems],
          },
          { label: "SEO & Integration", items: [...tierSeoTemelItems] },
          { label: GROUP_CATALOG, items: [...catalogCommonItems] },
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
            label: GROUP_CATALOG,
            items: [...catalogCommonItems, ...catalogStandartExtras],
          },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...catalogPanelExtras],
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
            label: GROUP_CATALOG,
            items: [
              ...catalogCommonItems,
              ...catalogStandartExtras,
              ...catalogProExtras,
            ],
          },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...catalogPanelExtras],
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

  listing: {
    title: "Listings / Real Estate",
    description:
      "Present real estate, vehicle or service listings in a searchable, filterable structure. Guide prospects to contact quickly with detail pages, galleries and inquiry forms.",
    introP2:
      "We present listings in a searchable, filterable structure and move prospects into contact quickly. Startup includes lists, galleries and enquiry forms; Professional adds maps, favourites and comparison; Premium covers a member panel and multi-agent management. If you are not sure which fits, get in touch.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "3",
        supportDays: "15",
        pages: "1-20",
        languages: "1",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems],
          },
          { label: "SEO & Integration", items: [...tierSeoTemelItems] },
          { label: GROUP_LISTING, items: [...listingCommonItems] },
          { label: GROUP_PANEL, items: [] },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "28-42",
        revisions: "5",
        supportDays: "30",
        pages: "1-80",
        languages: "1-5",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems, ...standartDesignExtras],
          },
          { label: "SEO & Integration", items: [...tierSeoStandartItems] },
          {
            label: GROUP_LISTING,
            items: [...listingCommonItems, ...listingStandartExtras],
          },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...listingPanelExtras],
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
        deliveryDays: "42-70",
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
            label: GROUP_LISTING,
            items: [
              ...listingCommonItems,
              ...listingStandartExtras,
              ...listingProExtras,
            ],
          },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...listingPanelExtras],
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

  booking: {
    title: "Booking",
    description:
      "Take appointments, room, table or service reservations online. Keep operations tidy with calendars, availability and notifications in a customer-friendly flow.",
    introP2:
      "We connect appointment, room, table or service bookings to a calendar and automate notifications. Startup includes request forms and email alerts; Professional adds online payment and availability; Premium covers multi-branch, reminders and deposits. If you are not sure which fits, get in touch.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "3",
        supportDays: "15",
        pages: "1-15",
        languages: "1",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems],
          },
          { label: "SEO & Integration", items: [...tierSeoTemelItems] },
          { label: GROUP_BOOKING, items: [...bookingCommonItems] },
          { label: GROUP_PANEL, items: [] },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "28-42",
        revisions: "5",
        supportDays: "30",
        pages: "1-40",
        languages: "1-5",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems, ...standartDesignExtras],
          },
          { label: "SEO & Integration", items: [...tierSeoStandartItems] },
          {
            label: GROUP_BOOKING,
            items: [...bookingCommonItems, ...bookingStandartExtras],
          },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...bookingPanelExtras],
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
        deliveryDays: "42-70",
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
            label: GROUP_BOOKING,
            items: [
              ...bookingCommonItems,
              ...bookingStandartExtras,
              ...bookingProExtras,
            ],
          },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...bookingPanelExtras],
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

  education: {
    title: "Education / Courses",
    description:
      "Make your courses and training programs enrollable or sellable online. Bring curriculum showcase, registration flow and the student experience under one roof.",
    introP2:
      "We put your courses on a storefront and bring enrolment and the student experience under one roof. Startup includes lists, curriculum and application forms; Professional adds membership, payment and progress tracking; Premium covers video lessons, certificates and an instructor panel. If you are not sure which fits, get in touch.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "3",
        supportDays: "15",
        pages: "1-15",
        languages: "1",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems],
          },
          { label: "SEO & Integration", items: [...tierSeoTemelItems] },
          { label: GROUP_COURSE, items: [...educationCommonItems] },
          { label: GROUP_PANEL, items: [] },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "28-45",
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
            label: GROUP_COURSE,
            items: [...educationCommonItems, ...educationStandartExtras],
          },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...educationPanelExtras],
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
        deliveryDays: "45-75",
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
            label: GROUP_COURSE,
            items: [
              ...educationCommonItems,
              ...educationStandartExtras,
              ...educationProExtras,
            ],
          },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...educationPanelExtras],
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

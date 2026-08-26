export const contactEn = {
  formBadge: "Get a Quote",
  formTitle: "Clear needs, clear roadmap",
  formDescription:
    "Share your goal, timeline, and any existing setup in a few lines. We'll respond with the best approach and a clear roadmap.",

  fieldName: "Full Name",
  fieldNamePlaceholder: "Your first and last name",
  fieldEmail: "Email",
  fieldEmailPlaceholder: "example@company.com",
  fieldPhone: "Phone",
  fieldPhonePlaceholder: "5XX XXX XX XX",
  fieldPhoneCountryLabel: "Country code",
  fieldService: "Service Type",
  fieldServicePlaceholder: "Select a service.",
  fieldPackage: "Package Selection",
  fieldPackagePlaceholder: "Select a package.",
  fieldTier: "Tier",
  fieldTierPlaceholder: "Select a tier.",
  fieldBudget: "Budget Range",
  fieldBudgetPlaceholder: "Select a budget.",
  fieldMessage: "Your Message",
  fieldMessagePlaceholder:
    "Describe your project, expectations, and any technical requirements…",

  serviceOptions: [
    { value: "web-sitesi-gelistirme", label: "Website Building" },
    { value: "dijital-yenileme", label: "Digital Refresh" },
    { value: "uygulama-gelistirme", label: "App Building" },
    { value: "seo-hizmetleri", label: "SEO Services" },
    { value: "teknik-denetim", label: "Technical Audit" },
    { value: "bakim-ve-destek", label: "Maintenance & Support" },
    { value: "diger", label: "Other / Unspecified" },
  ],

  tierOptions: [
    { value: "temel", label: "Startup" },
    { value: "standart", label: "Professional" },
    { value: "pro", label: "Premium" },
    { value: "belirsiz", label: "Unspecified" },
  ],

  servicePackages: {
    "web-sitesi-gelistirme": [
      { value: "onePage", label: "One-Page Website" },
      { value: "portfolio", label: "Portfolio / Personal Website" },
      { value: "corporate", label: "Corporate Website" },
      { value: "ecommerce", label: "E-Commerce Website" },
      { value: "catalog", label: "Catalog / B2B Website" },
      { value: "listing", label: "Listings / Real Estate Website" },
      { value: "booking", label: "Booking Website" },
      { value: "education", label: "Education / Course Website" },
    ],
    "dijital-yenileme": [
      { value: "onePage", label: "One-Page Site Redesign" },
      { value: "portfolio", label: "Portfolio / Personal Site Redesign" },
      { value: "corporate", label: "Corporate Website Redesign" },
      { value: "ecommerce", label: "E-Commerce Website Redesign" },
      { value: "catalog", label: "Catalog / B2B Site Redesign" },
      { value: "listing", label: "Listings / Real Estate Site Redesign" },
      { value: "booking", label: "Booking Site Redesign" },
      { value: "education", label: "Education / Course Site Redesign" },
    ],
    "uygulama-gelistirme": [
      { value: "portfolio", label: "Portfolio / Personal App" },
      { value: "corporate", label: "Corporate Mobile App" },
      { value: "ecommerce", label: "E-Commerce Mobile App" },
    ],
    "seo-hizmetleri": [
      { value: "seoServices", label: "Digital Marketing & SEO" },
    ],
    "teknik-denetim": [
      { value: "auditServices", label: "Technical Audit Services" },
    ],
    "bakim-ve-destek": [
      { value: "maintenanceServices", label: "Maintenance & Support Services" },
    ],
  },

  budgetOptions: [
    { value: "0k-25k", label: "$0 - $750" },
    { value: "25k-50k", label: "$750 - $1,500" },
    { value: "50k-75k", label: "$1,500 - $2,200" },
    { value: "75k-100k", label: "$2,200 - $3,000" },
    { value: "100k-150k", label: "$3,000 - $4,500" },
    { value: "150k-200k", label: "$4,500 - $6,000" },
    { value: "200k-250k", label: "$6,000 - $7,500" },
    { value: "250k+", label: "$7,500+" },
    { value: "belirsiz", label: "Unspecified" },
  ],

  submitButton: "Send and Get a Quote",
  submitting: "Sending…",

  successTitle: "Your message has been sent!",
  successMessage:
    "Our expert team will get back to you as soon as possible, usually within 24 hours with a customized roadmap. Thank you!",
  successButtonBack: "Send another message",

  errorMessage:
    "Something went wrong. Please try again or send an email directly.",

  infoBadge: "Contact Channels",
  infoTitle: "Reach out on your preferred channel.",

  contactItems: [
    { label: "Phone", value: "+90 507 849 29 03", href: "tel:+905078492903" },
    {
      label: "WhatsApp",
      href: "https://wa.me/905078492903",
      value: "+90 507 849 29 03",
    },
    {
      label: "Email",
      value: "veltstack@outlook.com",
      href: "mailto:veltstack@outlook.com",
    },
    {
      label: "Ömer Halis Demir | Portfolio",
      value: "omerhalisdemir.com.tr",
      href: "https://www.omerhalisdemir.com.tr/",
    },
    {
      label: "LinkedIn",
      value: "ömer-halis-demir-7a9b79169",
      href: "https://www.linkedin.com/in/%C3%B6mer-halis-demir-7a9b79169",
    },
  ],
} as const;

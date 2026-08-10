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
    { value: "web-sitesi-gelistirme", label: "Website Development" },
    { value: "uygulama-gelistirme", label: "App Development" },
    { value: "web-sitesi-yenileme", label: "Website & App Refresh" },
    { value: "diger", label: "Other / Unspecified" },
  ],

  tierOptions: [
    { value: "temel", label: "Startup" },
    { value: "standart", label: "Professional" },
    { value: "pro", label: "Advanced" },
    { value: "belirsiz", label: "Unspecified" },
  ],

  servicePackages: {
    "web-sitesi-gelistirme": [
      { value: "portfolio", label: "Portfolio / Showcase Website" },
      { value: "corporate", label: "Corporate Website" },
      { value: "ecommerce", label: "E-Commerce Website" },
    ],
    "web-sitesi-yenileme": [
      { value: "portfolio", label: "Portfolio / Showcase Site Redesign" },
      { value: "corporate", label: "Corporate Website Redesign" },
      { value: "ecommerce", label: "E-Commerce Website Redesign" },
    ],
    "uygulama-gelistirme": [
      { value: "portfolio", label: "Showcase / Portfolio App" },
      { value: "corporate", label: "Corporate Mobile App" },
      { value: "ecommerce", label: "E-Commerce Mobile App" },
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
    {
      label: "GitHub",
      value: "omerhd34",
      href: "https://github.com/omerhd34",
    },
  ],
} as const;

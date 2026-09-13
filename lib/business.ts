export const BUSINESS_EMAIL = "veltstack@outlook.com";
export const BUSINESS_PHONE_DISPLAY = "+90 507 849 29 03";
export const BUSINESS_PHONE_TEL = "+905078492903";
export const BUSINESS_PHONE_SCHEMA = "+90-507-849-29-03";

export const BUSINESS_ADDRESS_LOCALITY = "Çekmeköy";
export const BUSINESS_ADDRESS_REGION = "İstanbul";
export const BUSINESS_ADDRESS_COUNTRY = "TR";
export const BUSINESS_ADDRESS_TEXT_TR = "Çekmeköy, İstanbul, Türkiye";
export const BUSINESS_ADDRESS_TEXT_EN = "Çekmeköy, Istanbul, Turkey";

export const BUSINESS_HOURS_TR = "Pazartesi-Cumartesi 09:00-19:00";
export const BUSINESS_HOURS_EN = "Monday-Saturday 09:00-19:00";

export const BUSINESS_OPENING_HOURS = {
  dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ] as const,
  opens: "09:00",
  closes: "19:00",
};

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Çekmeköy İstanbul");

export const BUSINESS_SAME_AS = [
  "https://www.linkedin.com/in/omerhd1/",
  "https://github.com/omerhd34",
  "https://www.omerhalisdemir.com.tr/",
  GOOGLE_MAPS_URL,
] as const;

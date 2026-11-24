export const BUSINESS_EMAIL = "veltstack@outlook.com";

export const BUSINESS_PHONE_DISPLAY = "+90 537 799 74 39";
export const BUSINESS_PHONE_TEL = "+905377997439";
export const BUSINESS_PHONE_SCHEMA = "+90-537-799-74-39";
export const BUSINESS_WHATSAPP_NUMBER = BUSINESS_PHONE_TEL.replace(/\D/g, "");

export function whatsAppHref(prefilledText?: string): string {
  const params = new URLSearchParams({
    phone: BUSINESS_WHATSAPP_NUMBER,
    type: "phone_number",
    app_absent: "0",
  });
  const text = prefilledText?.trim();
  if (text) {
    params.set("text", text);
  }
  return `https://api.whatsapp.com/send/?${params.toString()}`;
}

export const BUSINESS_ADDRESS_REGION = "İstanbul";
export const BUSINESS_ADDRESS_COUNTRY = "TR";
export const BUSINESS_ADDRESS_TEXT_TR = "İstanbul, Türkiye";
export const BUSINESS_ADDRESS_TEXT_EN = "İstanbul, Türkiye";

export type BusinessHoursLine = {
  days: string;
  hours: string;
};

export const BUSINESS_HOURS_LINES_TR: BusinessHoursLine[] = [
  { days: "Pazartesi-Perşembe", hours: "09:00 - 19:00" },
  { days: "Cuma", hours: "09:00 - 12:00 & 13:00 - 19:00" },
  { days: "Cumartesi", hours: "09:00 - 17:00" },
];

export const BUSINESS_HOURS_LINES_EN: BusinessHoursLine[] = [
  { days: "Monday-Thursday", hours: "09:00 - 19:00" },
  { days: "Friday", hours: "09:00 - 12:00 & 13:00 - 19:00" },
  { days: "Saturday", hours: "09:00 - 17:00" },
];

const formatBusinessHours = (lines: BusinessHoursLine[]) =>
  lines.map((line) => `${line.days} ${line.hours}`).join("\n");

export const BUSINESS_HOURS_TR = formatBusinessHours(BUSINESS_HOURS_LINES_TR);
export const BUSINESS_HOURS_EN = formatBusinessHours(BUSINESS_HOURS_LINES_EN);

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
  encodeURIComponent("İstanbul");

export const BUSINESS_SAME_AS = [
  "https://www.linkedin.com/in/omerhd1/",
  "https://www.instagram.com/veltstack/",
  "https://www.omerhalisdemir.com.tr/",
  GOOGLE_MAPS_URL,
] as const;

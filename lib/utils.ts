import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toLatinUppercase(
  value: string,
  locale: "tr" | "en" = "en",
): string {
  return value.toLocaleUpperCase(locale === "tr" ? "tr-TR" : "en-US");
}

export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function truncateToSentences(text: string, maxSentences = 2): string {
  const parts = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  if (parts.length <= maxSentences) return text.trim();
  return parts.slice(0, maxSentences).join(" ").trim();
}

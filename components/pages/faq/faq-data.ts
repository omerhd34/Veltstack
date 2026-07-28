import type { IconType } from "react-icons";
import {
  LuCircleHelp,
  LuClock,
  LuCreditCard,
  LuLifeBuoy,
  LuTag,
  LuUsers,
  LuWorkflow,
} from "react-icons/lu";
import { faqEn } from "@/messages/pages/faq/en";
import { faqTr } from "@/messages/pages/faq/tr";

export interface FaqNavItem {
  slug: string;
  question: string;
  answer: string;
  icon: IconType;
}

const NAV_FAQ_SLUGS = [
  "odeme-nasil-yapilir",
  "yayin-sonrasi-destek",
  "fiyatlar-sabit-mi",
  "projelerde-kim-calisyor",
  "proje-sureci",
  "teslim-suresi",
] as const;

const NAV_FAQ_ICONS: Record<(typeof NAV_FAQ_SLUGS)[number], IconType> = {
  "odeme-nasil-yapilir": LuCreditCard,
  "yayin-sonrasi-destek": LuLifeBuoy,
  "fiyatlar-sabit-mi": LuTag,
  "projelerde-kim-calisyor": LuUsers,
  "proje-sureci": LuWorkflow,
  "teslim-suresi": LuClock,
};

const faqByLocale = {
  tr: faqTr,
  en: faqEn,
} as const;

function getAllFaqItems(locale: "tr" | "en"): Omit<FaqNavItem, "icon">[] {
  return faqByLocale[locale].categories.flatMap((category) =>
    category.items.map((item) => ({
      slug: item.slug,
      question: item.question,
      answer: item.answer,
    })),
  );
}

export function getNavFaqItems(locale: "tr" | "en"): FaqNavItem[] {
  const items = getAllFaqItems(locale);

  return NAV_FAQ_SLUGS.flatMap((slug) => {
    const item = items.find((entry) => entry.slug === slug);
    return item ? [{ ...item, icon: NAV_FAQ_ICONS[slug] ?? LuCircleHelp }] : [];
  });
}

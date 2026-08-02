import { contactTr } from "@/messages/pages/iletisim/tr";
import { resolveContactLabels } from "@/lib/contact-labels";
import type { AdminMessageItem, SortDirection, SortKey } from "./types";

export const PAGE_SIZE = 10;

export const SORT_COLUMNS: {
  key: SortKey;
  label: string;
  className?: string;
}[] = [
  { key: "status", label: "DURUM", className: "w-[60px] max-w-[60px]" },
  { key: "name", label: "KİŞİ", className: "w-[120px] max-w-[120px]" },
  { key: "service", label: "HİZMET", className: "w-[100px] max-w-[100px]" },
  {
    key: "servicePackage",
    label: "PAKET",
    className: "w-[120px] max-w-[120px]",
  },
  { key: "serviceTier", label: "KADEME", className: "w-[80px] max-w-[80px]" },
  { key: "budget", label: "BÜTÇE", className: "w-[100px] max-w-[100px]" },
  { key: "content", label: "MESAJ", className: "w-[120px] max-w-[120px]" },
  { key: "createdAt", label: "TARİH", className: "w-[60px] max-w-[60px]" },
];

export const inputClassName =
  "h-10 w-full rounded-xl border border-border/80 bg-[#F8FAF9] py-2 pr-3 pl-10 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/80 hover:border-border hover:bg-white focus:border-brand-accent focus:bg-white focus:ring-2 focus:ring-brand-accent/15 [&::-webkit-search-cancel-button]:cursor-pointer";

export const STATUS_OPTIONS = [
  { value: "all", label: "Tüm durumlar" },
  { value: "unread", label: "Yeni" },
  { value: "read", label: "Okundu" },
] as const;

export const SERVICE_OPTIONS = [
  { value: "all", label: "Tüm hizmetler" },
  ...contactTr.serviceOptions,
] as const;

export const TIER_OPTIONS = [
  { value: "all", label: "Tüm kademeler" },
  ...contactTr.tierOptions,
] as const;

export const BUDGET_OPTIONS = [
  { value: "all", label: "Tüm bütçeler" },
  ...contactTr.budgetOptions,
] as const;

const TIER_ORDER = Object.fromEntries(
  contactTr.tierOptions.map((option, index) => [option.value, index]),
) as Record<string, number>;

const BUDGET_ORDER = Object.fromEntries(
  contactTr.budgetOptions.map((option, index) => [option.value, index]),
) as Record<string, number>;

function compareText(a: string, b: string) {
  return a.localeCompare(b, "tr-TR", { sensitivity: "base" });
}

function getSortValue(message: AdminMessageItem, key: SortKey) {
  const labels = resolveContactLabels({
    service: message.service ?? "",
    servicePackage: message.servicePackage ?? "",
    serviceTier: message.serviceTier ?? "",
    budget: message.budget ?? "",
  });

  switch (key) {
    case "status":
      return message.isRead ? 1 : 0;
    case "name":
      return message.name;
    case "service":
      return labels.service;
    case "servicePackage":
      return labels.servicePackage;
    case "serviceTier":
      return TIER_ORDER[message.serviceTier ?? ""] ?? Number.MAX_SAFE_INTEGER;
    case "budget":
      return BUDGET_ORDER[message.budget ?? ""] ?? Number.MAX_SAFE_INTEGER;
    case "content":
      return message.content;
    case "createdAt":
      return new Date(message.createdAt).getTime();
  }
}

export function compareMessages(
  a: AdminMessageItem,
  b: AdminMessageItem,
  key: SortKey,
  direction: SortDirection,
) {
  if (key !== "status" && a.isRead !== b.isRead) {
    return a.isRead ? 1 : -1;
  }

  const left = getSortValue(a, key);
  const right = getSortValue(b, key);
  const factor = direction === "asc" ? 1 : -1;

  if (typeof left === "number" && typeof right === "number") {
    return (left - right) * factor;
  }

  return compareText(String(left), String(right)) * factor;
}

export function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1)
    return parts[0].slice(0, 2).toLocaleUpperCase("tr-TR");
  return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toLocaleUpperCase(
    "tr-TR",
  );
}

export function formatTableDate(iso: string) {
  const date = new Date(iso);
  const now = new Date();
  const sameDay =
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate();

  if (sameDay) {
    return date.toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const sameYear = date.getFullYear() === now.getFullYear();
  return date.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "short",
    ...(sameYear ? {} : { year: "numeric" }),
  });
}

export function formatDetailDate(iso: string) {
  return new Date(iso).toLocaleString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function normalize(value: string) {
  return value.trim().toLocaleLowerCase("tr-TR");
}

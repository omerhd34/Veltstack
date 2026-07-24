import type { Metadata } from "next";
import { StaticNotFoundFallback } from "@/components/pages/status/StaticStatusFallback";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  robots: { index: false, follow: false },
};

export default function RootNotFoundPage() {
  return <StaticNotFoundFallback />;
}

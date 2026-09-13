import type { Metadata } from "next";
import { NotFoundView } from "@/components/pages/status";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function LocaleNotFoundPage() {
  return <NotFoundView />;
}

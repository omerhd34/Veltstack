import type { Metadata } from "next";
import { AdminProviders } from "@/components/admin/AdminProviders";

export const metadata: Metadata = {
  title: {
    default: "Admin",
    template: "%s | Veltstack Admin",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminProviders>{children}</AdminProviders>;
}

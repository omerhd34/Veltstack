"use client";

import { SessionProvider } from "next-auth/react";

export function AdminProviders({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider basePath="/api/admin/auth">{children}</SessionProvider>
  );
}

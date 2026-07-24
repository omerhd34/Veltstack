"use client";

import { StaticErrorFallback } from "@/components/pages/status/StaticStatusFallback";
import "./globals.css";

interface GlobalErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalErrorPage({ reset }: GlobalErrorPageProps) {
  return (
    <html lang="tr" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <main className="flex flex-1 flex-col">
          <StaticErrorFallback reset={reset} />
        </main>
      </body>
    </html>
  );
}

"use client";

import { ErrorView } from "@/components/pages/status";

interface LocaleErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function LocaleErrorPage({ reset }: LocaleErrorPageProps) {
  return <ErrorView reset={reset} />;
}

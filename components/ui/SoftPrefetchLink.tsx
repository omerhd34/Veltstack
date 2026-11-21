"use client";

import { type ComponentProps } from "react";
import { Link } from "@/i18n/navigation";

type SoftPrefetchLinkProps = ComponentProps<typeof Link>;

export function SoftPrefetchLink(props: SoftPrefetchLinkProps) {
  return <Link {...props} />;
}

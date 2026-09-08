"use client";

import {
  useCallback,
  type ComponentProps,
  type FocusEvent,
  type MouseEvent,
} from "react";
import { Link, useRouter } from "@/i18n/navigation";
import { isExternalHref } from "@/lib/utils";

type SoftPrefetchLinkProps = ComponentProps<typeof Link>;

export function SoftPrefetchLink({
  href,
  prefetch = false,
  onMouseEnter,
  onFocus,
  ...props
}: SoftPrefetchLinkProps) {
  const router = useRouter();

  const warm = useCallback(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (typeof href !== "string" || isExternalHref(href)) return;
    router.prefetch(href);
  }, [href, router]);

  return (
    <Link
      href={href}
      {...props}
      prefetch={prefetch}
      onMouseEnter={(event: MouseEvent<HTMLAnchorElement>) => {
        warm();
        onMouseEnter?.(event);
      }}
      onFocus={(event: FocusEvent<HTMLAnchorElement>) => {
        warm();
        onFocus?.(event);
      }}
    />
  );
}

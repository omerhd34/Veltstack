import { createElement, type ComponentProps } from "react";
import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

const navigation = createNavigation(routing);

export const { redirect, usePathname, useRouter, getPathname } = navigation;

export function Link(props: ComponentProps<typeof navigation.Link>) {
  return createElement(navigation.Link, { ...props, prefetch: false });
}

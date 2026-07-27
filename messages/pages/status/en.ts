export const statusEn = {
  notFound: {
    code: "404",
    badge: "Page not found",
    title: "The page you’re looking for isn’t here.",
    description:
      "The link may be outdated or the address may be mistyped. You can continue from the home page or get in touch.",
    homeCta: "Back to home",
    contactCta: "Contact us",
  },
  error: {
    code: "500",
    badge: "Something went wrong",
    title: "An unexpected error occurred.",
    description:
      "Something went wrong while loading this page. You can try again or return to the home page.",
    retryCta: "Try again",
    homeCta: "Back to home",
  },
  loading: {
    label: "Loading",
    aria: "Loading page",
  },
} as const;

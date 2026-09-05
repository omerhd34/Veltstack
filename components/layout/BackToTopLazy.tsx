"use client";

import dynamic from "next/dynamic";

export const BackToTopLazy = dynamic(
  () => import("./BackToTop").then((mod) => mod.BackToTop),
  { ssr: false },
);

import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    inlineCss: true,
    optimizePackageImports: [
      "react-icons",
      "react-icons/lu",
      "react-icons/si",
      "react-icons/fa6",
      "react-icons/ri",
      "react-icons/gr",
      "react-icons/tb",
      "lucide-react",
      "framer-motion",
    ],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 65, 75, 90, 100],
  },
};

export default withNextIntl(nextConfig);

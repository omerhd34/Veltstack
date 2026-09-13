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
      "react-icons/pi",
      "react-icons/ri",
      "react-icons/gr",
      "react-icons/tb",
      "lucide-react",
      "framer-motion",
      "radix-ui",
    ],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 65, 75, 90, 100],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/hero/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);

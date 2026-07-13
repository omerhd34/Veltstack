import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/hizmetler/web-sitesi",
        destination: "/hizmetler/web-sitesi-gelistirme",
        permanent: true,
      },
      {
        source: "/en/hizmetler/web-sitesi",
        destination: "/en/hizmetler/web-sitesi-gelistirme",
        permanent: true,
      },
      {
        source: "/hizmetler/uygulama",
        destination: "/hizmetler/uygulama-gelistirme",
        permanent: true,
      },
      {
        source: "/en/hizmetler/uygulama",
        destination: "/en/hizmetler/uygulama-gelistirme",
        permanent: true,
      },
      {
        source: "/hizmetler",
        destination: "/hizmetler",
        permanent: true,
      },
      {
        source: "/hizmetler/:path*",
        destination: "/hizmetler/:path*",
        permanent: true,
      },
      {
        source: "/en/hizmetler",
        destination: "/en/hizmetler",
        permanent: true,
      },
      {
        source: "/en/hizmetler/:path*",
        destination: "/en/hizmetler/:path*",
        permanent: true,
      },
      {
        source: "/projeler",
        destination: "/projeler",
        permanent: true,
      },
      {
        source: "/projeler/:path*",
        destination: "/projeler/:path*",
        permanent: true,
      },
      {
        source: "/en/projeler",
        destination: "/en/projeler",
        permanent: true,
      },
      {
        source: "/en/projeler/:path*",
        destination: "/en/projeler/:path*",
        permanent: true,
      },
      {
        source: "/hizmetler/web-sitesi",
        destination: "/hizmetler/web-sitesi-gelistirme",
        permanent: true,
      },
      {
        source: "/en/hizmetler/web-sitesi",
        destination: "/en/hizmetler/web-sitesi-gelistirme",
        permanent: true,
      },
      {
        source: "/hizmetler/uygulama",
        destination: "/hizmetler/uygulama-gelistirme",
        permanent: true,
      },
      {
        source: "/en/hizmetler/uygulama",
        destination: "/en/hizmetler/uygulama-gelistirme",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);

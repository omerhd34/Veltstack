import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/hizmetler/web-sitesi",
        destination: "/hizmetlerimiz/web-sitesi-gelistirme",
        permanent: true,
      },
      {
        source: "/en/hizmetler/web-sitesi",
        destination: "/en/hizmetlerimiz/web-sitesi-gelistirme",
        permanent: true,
      },
      {
        source: "/hizmetler/uygulama",
        destination: "/hizmetlerimiz/uygulama-gelistirme",
        permanent: true,
      },
      {
        source: "/en/hizmetler/uygulama",
        destination: "/en/hizmetlerimiz/uygulama-gelistirme",
        permanent: true,
      },
      {
        source: "/hizmetler",
        destination: "/hizmetlerimiz",
        permanent: true,
      },
      {
        source: "/hizmetler/:path*",
        destination: "/hizmetlerimiz/:path*",
        permanent: true,
      },
      {
        source: "/en/hizmetler",
        destination: "/en/hizmetlerimiz",
        permanent: true,
      },
      {
        source: "/en/hizmetler/:path*",
        destination: "/en/hizmetlerimiz/:path*",
        permanent: true,
      },
      {
        source: "/projeler",
        destination: "/projelerimiz",
        permanent: true,
      },
      {
        source: "/projeler/:path*",
        destination: "/projelerimiz/:path*",
        permanent: true,
      },
      {
        source: "/en/projeler",
        destination: "/en/projelerimiz",
        permanent: true,
      },
      {
        source: "/en/projeler/:path*",
        destination: "/en/projelerimiz/:path*",
        permanent: true,
      },
      {
        source: "/hizmetlerimiz/web-sitesi",
        destination: "/hizmetlerimiz/web-sitesi-gelistirme",
        permanent: true,
      },
      {
        source: "/en/hizmetlerimiz/web-sitesi",
        destination: "/en/hizmetlerimiz/web-sitesi-gelistirme",
        permanent: true,
      },
      {
        source: "/hizmetlerimiz/uygulama",
        destination: "/hizmetlerimiz/uygulama-gelistirme",
        permanent: true,
      },
      {
        source: "/en/hizmetlerimiz/uygulama",
        destination: "/en/hizmetlerimiz/uygulama-gelistirme",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);

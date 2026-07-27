import { SITE_DOMAIN, SITE_NAME, SITE_URL } from "@/lib/seo";

interface LocalBusinessSchemaProps {
  className?: string;
}

export function LocalBusinessSchema({ className }: LocalBusinessSchemaProps) {
  const homeUrl = `${SITE_URL}/`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: SITE_DOMAIN,
        url: homeUrl,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/logo.png`,
        },
        image: `${SITE_URL}/hero/veltstack.png`,
        description:
          "Kurumsal web sitesi, e-ticaret, mobil uygulama ve SEO hizmetleri.",
        email: "veltstack@outlook.com",
        telephone: "+90-507-849-29-03",
        founder: {
          "@type": "Person",
          name: "Ömer Halis Demir",
          url: "https://www.omerhalisdemir.com.tr/",
        },
        sameAs: [
          "https://www.linkedin.com/in/omerhd1/",
          "https://github.com/omerhd34",
          "https://www.omerhalisdemir.com.tr/",
        ],
        areaServed: "TR",
        knowsLanguage: ["tr", "en"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: homeUrl,
        name: SITE_NAME,
        alternateName: [SITE_DOMAIN],
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: ["tr-TR", "en-US"],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#localbusiness`,
        name: SITE_NAME,
        url: homeUrl,
        image: `${SITE_URL}/hero/veltstack.png`,
        description:
          "Kurumsal web sitesi, e-ticaret, mobil uygulama ve SEO hizmetleri.",
        telephone: "+90-507-849-29-03",
        email: "veltstack@outlook.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressCountry: "TR",
        },
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      className={className}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

import { SITE_NAME, SITE_URL } from "@/lib/seo";
import {
  BUSINESS_ADDRESS_COUNTRY,
  BUSINESS_ADDRESS_REGION,
  BUSINESS_EMAIL,
  BUSINESS_OPENING_HOURS,
  BUSINESS_PHONE_SCHEMA,
  BUSINESS_SAME_AS,
  GOOGLE_MAPS_URL,
} from "@/lib/business";

interface LocalBusinessSchemaProps {
  className?: string;
}

export function LocalBusinessSchema({ className }: LocalBusinessSchemaProps) {
  const homeUrl = `${SITE_URL}/`;
  const postalAddress = {
    "@type": "PostalAddress",
    addressRegion: BUSINESS_ADDRESS_REGION,
    addressCountry: BUSINESS_ADDRESS_COUNTRY,
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: SITE_NAME,
        url: homeUrl,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/logo.png`,
        },
        image: `${SITE_URL}/hero/veltstack.png`,
        description:
          "Kurumsal web sitesi, e-ticaret, mobil uygulama ve SEO hizmetleri.",
        email: BUSINESS_EMAIL,
        telephone: BUSINESS_PHONE_SCHEMA,
        address: postalAddress,
        founder: {
          "@type": "Person",
          name: "Ömer Halis Demir",
          url: "https://www.omerhalisdemir.com.tr/",
        },
        sameAs: [...BUSINESS_SAME_AS],
        areaServed: [
          { "@type": "Country", name: "Türkiye" },
          { "@type": "City", name: "İstanbul" },
        ],
        knowsLanguage: ["tr", "en"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: homeUrl,
        name: SITE_NAME,
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
        telephone: BUSINESS_PHONE_SCHEMA,
        email: BUSINESS_EMAIL,
        priceRange: "$$",
        currenciesAccepted: "TRY",
        address: postalAddress,
        hasMap: GOOGLE_MAPS_URL,
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [...BUSINESS_OPENING_HOURS.dayOfWeek],
          opens: BUSINESS_OPENING_HOURS.opens,
          closes: BUSINESS_OPENING_HOURS.closes,
        },
        areaServed: [
          { "@type": "Country", name: "Türkiye" },
          { "@type": "City", name: "İstanbul" },
        ],
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

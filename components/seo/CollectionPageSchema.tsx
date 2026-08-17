import { SITE_NAME, SITE_URL } from "@/lib/seo";

interface CollectionPageItem {
  name: string;
  url: string;
  position: number;
}

interface CollectionPageSchemaProps {
  name: string;
  description: string;
  url: string;
  inLanguage: string;
  items: CollectionPageItem[];
}

export function CollectionPageSchema({
  name,
  description,
  url,
  inLanguage,
  items,
}: CollectionPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    inLanguage,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item) => ({
        "@type": "ListItem",
        position: item.position,
        name: item.name,
        url: item.url,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

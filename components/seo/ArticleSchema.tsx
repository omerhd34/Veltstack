interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  imageUrl?: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  imageUrl,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    image: imageUrl,
    author: {
      "@type": "Person",
      name: "Ömer Halis Demir",
      url: "https://www.omerhalisdemir.com.tr/",
    },
    publisher: {
      "@type": "Organization",
      name: "Veltstack",
      url: "https://www.veltstack.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.veltstack.com/images/logo.png",
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

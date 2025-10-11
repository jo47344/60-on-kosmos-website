interface ArticleSchemaProps {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  author?: string
  image?: string
  url: string
}

export function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  author = "60 on Kosmos Guesthouse",
  image = "https://60onkosmos.co.za/images/exterior-building.png",
  url,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author,
      url: "https://60onkosmos.co.za",
    },
    publisher: {
      "@type": "Organization",
      name: "60 on Kosmos Guesthouse",
      logo: {
        "@type": "ImageObject",
        url: "https://60onkosmos.co.za/images/60-kosmos-elegant-logo.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://60onkosmos.co.za${url}`,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

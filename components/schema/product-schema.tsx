interface ProductSchemaProps {
  name: string
  description: string
  image: string
  price: string
  currency?: string
}

export function ProductSchema({ name, description, image, price, currency = "ZAR" }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    description: description,
    image: `https://60onkosmos.co.za${image}`,
    brand: {
      "@type": "Organization",
      name: "60 on Kosmos Guesthouse",
    },
    offers: {
      "@type": "Offer",
      price: price,
      priceCurrency: currency,
      availability: "https://schema.org/InStock",
      url: "https://60onkosmos.co.za/book-now",
      priceValidUntil: "2025-12-31",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "15",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

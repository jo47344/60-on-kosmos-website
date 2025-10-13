interface RoomSchemaProps {
  rooms: Array<{
    name: string
    price: number
    description: string
    image: string
    features: string[]
  }>
}

export function RoomSchema({ rooms }: RoomSchemaProps) {
  const roomSchemas = rooms.map((room) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: room.name,
    description: room.description,
    image: `https://60onkosmos.co.za${room.image}`,
    brand: {
      "@type": "Organization",
      name: "60 on Kosmos",
    },
    offers: {
      "@type": "Offer",
      price: room.price,
      priceCurrency: "ZAR",
      availability: "https://schema.org/InStock",
      url: "https://60onkosmos.co.za/rooms",
      priceValidUntil: "2025-12-31",
      seller: {
        "@type": "Organization",
        name: "60 on Kosmos",
      },
    },
    category: "Hotel Room",
    amenityFeature: room.features.map((feature) => ({
      "@type": "LocationFeatureSpecification",
      name: feature,
      value: true,
    })),
  }))

  return (
    <>
      {roomSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  )
}

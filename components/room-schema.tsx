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
    image: `https://www.60onkosmos.co.za${room.image}`,
    brand: {
      "@id": "https://www.60onkosmos.co.za/#lodgingbusiness",
    },
    offers: {
      "@type": "Offer",
      price: room.price,
      priceCurrency: "ZAR",
      availability: "https://schema.org/InStock",
      url: "https://www.60onkosmos.co.za/rooms",
      priceValidUntil: "2025-12-31",
      seller: {
        "@id": "https://www.60onkosmos.co.za/#lodgingbusiness",
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

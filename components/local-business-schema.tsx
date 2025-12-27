export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "Hostel"],
    name: "60 on Kosmos",
    description:
      "Contractor accommodation in Bellville South. Competitive monthly rates. Secure parking, kitchen, WiFi. Near Tygerberg Hospital.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "60 Kosmos Street",
      addressLocality: "Bellville South",
      addressRegion: "Western Cape",
      postalCode: "7530",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-33.9352",
      longitude: "18.6492",
    },
    telephone: "+27745245703",
    email: "info@60onkosmos.co.za",
    url: "https://www.60onkosmos.co.za",
    priceRange: "From R530",
    starRating: {
      "@type": "Rating",
      ratingValue: "4.8",
      bestRating: "5",
      reviewCount: "25",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "24/7 Security", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kitchen Facilities", value: true },
    ],
    checkinTime: "14:00",
    checkoutTime: "10:00",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

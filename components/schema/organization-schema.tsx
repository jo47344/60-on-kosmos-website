export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": "https://60onkosmos.co.za/#organization",
    name: "60 on Kosmos Guesthouse",
    alternateName: "60 on Kosmos Ensuite Accommodation",
    url: "https://60onkosmos.co.za",
    logo: "https://60onkosmos.co.za/images/60-kosmos-elegant-logo.jpg",
    image: [
      "https://60onkosmos.co.za/images/exterior-building.png",
      "https://60onkosmos.co.za/images/exterior-courtyard.png",
      "https://60onkosmos.co.za/images/outdoor-seating.png",
    ],
    description:
      "Secure guesthouse in Bellville South offering affordable accommodation near UWC and Tygerberg Hospital. 24/7 CCTV security, free WiFi, safe parking included.",
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
      latitude: -33.9321,
      longitude: 18.6354,
    },
    telephone: "+27745245703",
    priceRange: "R530 - R750",
    starRating: {
      "@type": "Rating",
      ratingValue: "4.5",
      bestRating: "5",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Free WiFi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "24/7 Security",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "CCTV Monitoring",
        value: true,
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: ["https://www.google.com/maps/place/60+Kosmos+St,+Bellville+South,+Cape+Town"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "28",
      bestRating: "5",
      worstRating: "1",
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://60onkosmos.co.za/book-now",
        actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
      },
      result: {
        "@type": "LodgingReservation",
        name: "Book Room at 60 on Kosmos Guesthouse",
      },
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

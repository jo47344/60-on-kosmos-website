export function StructuredData() {
  const lodgingBusinessData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "60 on Kosmos",
    alternateName: "60 on Kosmos Guesthouse Bellville South",
    description:
      "Affordable ensuite accommodation in Bellville South, Cape Town. Close to UWC, Tygerberg Hospital, and CPUT. Secure parking, free WiFi, and contractor-friendly.",
    url: "https://60onkosmos.co.za",
    telephone: "+27745245703",
    email: "info@60onkosmos.co.za",
    priceRange: "ZAR 530-750",
    currenciesAccepted: "ZAR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
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
      latitude: -33.9123456,
      longitude: 18.6234567,
    },
    image: [
      "https://60onkosmos.co.za/images/exterior-building.png",
      "https://60onkosmos.co.za/images/double-room.png",
      "https://60onkosmos.co.za/images/twin-room-yellow.png",
    ],
    sameAs: [
      "https://www.facebook.com/60-On-Kosmos-61571946294679/",
      "https://www.airbnb.com/rooms/1332667439996159511",
      "https://www.booking.com/hotel/za/60-on-kosmos-cape-town.html",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Free parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free WiFi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Air conditioning",
        value: true,
      },
    ],
    starRating: {
      "@type": "Rating",
      ratingValue: "4",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "25",
      bestRating: "5",
      worstRating: "1",
    },
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://60onkosmos.co.za",
    name: "60 on Kosmos Bellville South",
    description: "Affordable guesthouse accommodation in Bellville South, Cape Town",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://60onkosmos.co.za/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "60 on Kosmos",
    url: "https://60onkosmos.co.za",
    logo: "https://60onkosmos.co.za/images/60-on-kosmos-logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+27745245703",
      contactType: "Customer Service",
      areaServed: "ZA",
      availableLanguage: ["English", "Afrikaans"],
    },
    sameAs: [
      "https://www.facebook.com/60-On-Kosmos-61571946294679/",
      "https://www.airbnb.com/rooms/1332667439996159511",
      "https://www.booking.com/hotel/za/60-on-kosmos-cape-town.html",
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingBusinessData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
    </>
  )
}

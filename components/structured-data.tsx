export function StructuredData() {
  const lodgingBusinessData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": "https://60onkosmos.co.za/#lodgingbusiness",
    name: "60 on Kosmos",
    alternateName: "60 on Kosmos Guesthouse Bellville South",
    description:
      "Self-catering ensuite accommodation in Bellville South, Cape Town. Perfect for contractors, young professionals, and students. Close to UWC and Tygerberg Hospital. Secure parking, free WiFi, weekly cleaning included.",
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
      latitude: -33.9444,
      longitude: 18.6464,
    },
    image: [
      "https://60onkosmos.co.za/images/exterior-building.png",
      "https://60onkosmos.co.za/images/double-room.png",
      "https://60onkosmos.co.za/images/twin-room-yellow.png",
      "https://60onkosmos.co.za/images/deluxe-twin-navy.jpg",
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
    checkinTime: "14:00",
    checkoutTime: "10:00",
    petsAllowed: false,
    smokingAllowed: false,
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
        name: "24/7 CCTV Security",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Ensuite bathrooms",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Weekly cleaning service",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Self-catering",
        value: true,
      },
    ],
    starRating: {
      "@type": "Rating",
      ratingValue: 4,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.8,
      reviewCount: 25,
      bestRating: 5,
      worstRating: 1,
    },
    audience: {
      "@type": "PeopleAudience",
      suggestedMinAge: 18,
      audienceType: "Young professionals, contractors, students",
    },
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://60onkosmos.co.za/#website",
    url: "https://60onkosmos.co.za",
    name: "60 on Kosmos Bellville South",
    description:
      "Self-catering guesthouse accommodation in Bellville South, Cape Town. Perfect for young professionals and contractors.",
    publisher: {
      "@id": "https://60onkosmos.co.za/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://60onkosmos.co.za/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-ZA",
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://60onkosmos.co.za/#organization",
    name: "60 on Kosmos",
    alternateName: "60 on Kosmos Guesthouse Bellville South",
    url: "https://60onkosmos.co.za",
    logo: {
      "@type": "ImageObject",
      "@id": "https://60onkosmos.co.za/#logo",
      url: "https://60onkosmos.co.za/images/60-on-kosmos-logo.png",
      width: 280,
      height: 80,
      caption: "60 on Kosmos",
    },
    image: {
      "@id": "https://60onkosmos.co.za/#logo",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+27745245703",
      contactType: "Customer Service",
      areaServed: "ZA",
      availableLanguage: ["English", "Afrikaans"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "60 Kosmos Street",
      addressLocality: "Bellville South",
      addressRegion: "Western Cape",
      postalCode: "7530",
      addressCountry: "ZA",
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

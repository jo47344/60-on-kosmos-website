export function StructuredData() {
  const lodgingBusinessData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "60 on Kosmos – Ensuite Accommodation Bellville South",
    url: "https://60onkosmos.co.za/",
    telephone: "+27 74 524 5703",
    priceRange: "R500–R800",
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
      latitude: "-33.9123456",
      longitude: "18.6234567",
    },
    sameAs: [
      "https://www.facebook.com/60-On-Kosmos-61571946294679/",
      "https://www.airbnb.com/rooms/1332667439996159511",
      "https://www.booking.com/hotel/za/60-on-kosmos-cape-town.html",
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Secure parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "CCTV", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Ensuite bathrooms", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bar fridge in rooms", value: true },
      { "@type": "LocationFeatureSpecification", name: "Welcome refreshments", value: true },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Room Types",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Standard Twin Room",
          priceSpecification: { "@type": "UnitPriceSpecification", priceCurrency: "ZAR", price: "530" },
          itemOffered: {
            "@type": "HotelRoom",
            name: "Standard Twin",
            bed: "2 single beds",
            occupancy: { "@type": "QuantitativeValue", maxValue: 2 },
          },
        },
        {
          "@type": "Offer",
          name: "Deluxe Twin Room",
          priceSpecification: { "@type": "UnitPriceSpecification", priceCurrency: "ZAR", price: "580" },
          itemOffered: {
            "@type": "HotelRoom",
            name: "Deluxe Twin",
            bed: "2 single beds",
            occupancy: { "@type": "QuantitativeValue", maxValue: 2 },
          },
        },
        {
          "@type": "Offer",
          name: "Double Room",
          priceSpecification: { "@type": "UnitPriceSpecification", priceCurrency: "ZAR", price: "620" },
          itemOffered: {
            "@type": "HotelRoom",
            name: "Double",
            bed: "1 double bed",
            occupancy: { "@type": "QuantitativeValue", maxValue: 2 },
          },
        },
        {
          "@type": "Offer",
          name: "Triple Room",
          priceSpecification: { "@type": "UnitPriceSpecification", priceCurrency: "ZAR", price: "720" },
          itemOffered: {
            "@type": "HotelRoom",
            name: "Triple",
            bed: "3 single beds",
            occupancy: { "@type": "QuantitativeValue", maxValue: 3 },
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "25",
      bestRating: "5",
      worstRating: "1",
    },
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is there parking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, secure on-site parking behind locked gates with CCTV.",
        },
      },
      {
        "@type": "Question",
        name: "Do you allow contractors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We welcome contractors and offer weekly/monthly rates on request.",
        },
      },
      {
        "@type": "Question",
        name: "How close are you to UWC/CPUT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We're within a short drive of UWC and CPUT Bellville campuses.",
        },
      },
      {
        "@type": "Question",
        name: "What's included in the room?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Private ensuite bathroom, WiFi, bar fridge, clean linen, and welcome refreshments.",
        },
      },
    ],
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://60onkosmos.co.za/",
    name: "60 on Kosmos Bellville South",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://60onkosmos.co.za/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingBusinessData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }} />
    </>
  )
}

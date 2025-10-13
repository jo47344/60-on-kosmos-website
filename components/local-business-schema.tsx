export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": "https://60onkosmos.co.za/#lodgingbusiness",
    name: "60 on Kosmos Ensuite Accommodation",
    alternateName: "60 on Kosmos Guesthouse Bellville South",
    description:
      "Affordable ensuite accommodation in Bellville South, Cape Town. Secure parking, free WiFi, 24/7 CCTV. Perfect for contractors, students, and families visiting UWC and Tygerberg Hospital.",
    url: "https://60onkosmos.co.za",
    telephone: "+27745245703",
    email: "info@60onkosmos.co.za",
    priceRange: "R530-R750",
    currenciesAccepted: "ZAR",
    paymentAccepted: "Cash, Bank Transfer, Card",
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
      latitude: -33.9347,
      longitude: 18.6489,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    image: [
      "https://60onkosmos.co.za/images/exterior-building.png",
      "https://60onkosmos.co.za/images/sage-double-room.png",
      "https://60onkosmos.co.za/images/twin-room-yellow.png",
      "https://60onkosmos.co.za/images/triple-room-full.jpg",
    ],
    logo: "https://60onkosmos.co.za/images/60-on-kosmos-logo.png",
    sameAs: [
      "https://www.facebook.com/60-On-Kosmos-61571946294679/",
      "https://www.airbnb.com/rooms/1332667439996159511",
      "https://www.booking.com/hotel/za/60-on-kosmos-cape-town.html",
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Secure Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "24/7 CCTV Security", value: true },
      { "@type": "LocationFeatureSpecification", name: "Ensuite Bathrooms", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bar Fridge", value: true },
      { "@type": "LocationFeatureSpecification", name: "Welcome Refreshments", value: true },
      { "@type": "LocationFeatureSpecification", name: "Clean Linen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Outdoor Seating Area", value: true },
    ],
    checkinTime: "14:00:00",
    checkoutTime: "10:00:00",
    petsAllowed: false,
    starRating: {
      "@type": "Rating",
      ratingValue: "4.8",
      bestRating: "5",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "25",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Accommodation at 60 on Kosmos",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "HotelRoom",
            name: "Standard Twin Room",
            description: "Comfortable twin room with ensuite bathroom, free WiFi, and bar fridge",
            bed: {
              "@type": "BedDetails",
              numberOfBeds: 2,
              typeOfBed: "Single",
            },
            occupancy: {
              "@type": "QuantitativeValue",
              minValue: 1,
              maxValue: 2,
            },
          },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "530",
            priceCurrency: "ZAR",
            unitText: "per night",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "HotelRoom",
            name: "Deluxe Twin Room",
            description: "Upgraded twin room with premium bedding and modern navy blue decor",
            bed: {
              "@type": "BedDetails",
              numberOfBeds: 2,
              typeOfBed: "Single",
            },
            occupancy: {
              "@type": "QuantitativeValue",
              minValue: 1,
              maxValue: 2,
            },
          },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "580",
            priceCurrency: "ZAR",
            unitText: "per night",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "HotelRoom",
            name: "Double Room",
            description: "Spacious double room with ensuite bathroom and modern sage green decor",
            bed: {
              "@type": "BedDetails",
              numberOfBeds: 1,
              typeOfBed: "Double",
            },
            occupancy: {
              "@type": "QuantitativeValue",
              minValue: 1,
              maxValue: 2,
            },
          },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "620",
            priceCurrency: "ZAR",
            unitText: "per night",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "HotelRoom",
            name: "Triple Room",
            description: "Large family room with three single beds, workspace, and kettle",
            bed: {
              "@type": "BedDetails",
              numberOfBeds: 3,
              typeOfBed: "Single",
            },
            occupancy: {
              "@type": "QuantitativeValue",
              minValue: 1,
              maxValue: 3,
            },
          },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "750",
            priceCurrency: "ZAR",
            unitText: "per night",
          },
        },
      ],
    },
    areaServed: [
      {
        "@type": "City",
        name: "Bellville South",
        containedIn: {
          "@type": "City",
          name: "Cape Town",
        },
      },
      {
        "@type": "Place",
        name: "University of the Western Cape (UWC)",
        geo: {
          "@type": "GeoCoordinates",
          latitude: -33.9346,
          longitude: 18.6289,
        },
      },
      {
        "@type": "Place",
        name: "Tygerberg Hospital",
        geo: {
          "@type": "GeoCoordinates",
          latitude: -33.8725,
          longitude: 18.6349,
        },
      },
    ],
    knowsAbout: [
      "Contractor Accommodation Bellville South",
      "Student Accommodation near UWC",
      "Budget Accommodation Cape Town",
      "Monthly Accommodation Bellville",
      "Ensuite Rooms Bellville South",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

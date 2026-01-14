export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "LocalBusiness"],
    "@id": "https://60onkosmos.co.za/#business",
    name: "60 on Kosmos Guesthouse",
    alternateName: ["60 on Kosmos", "60 on Kosmos Contractor Accommodation", "60 on Kosmos Bellville South"],
    description:
      "Contractor accommodation in Bellville South, Cape Town. Near Sacks Circle, Mill Park industrial areas. Weekly cleaning, secure parking, free WiFi. Monthly rates from R530/night. Ideal for construction workers, apprentices at John Thompson and Northlink College.",
    url: "https://60onkosmos.co.za",
    telephone: "+27219485752",
    email: "info@60onkosmos.co.za",
    priceRange: "R530-R750",
    currenciesAccepted: "ZAR",
    paymentAccepted: "EFT, Bank Transfer, Cash",
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
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -33.9347,
        longitude: 18.6489,
      },
      geoRadius: "15000",
    },
    containedInPlace: [
      {
        "@type": "Place",
        name: "Bellville South Industrial Area",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bellville South",
          addressRegion: "Western Cape",
          addressCountry: "ZA",
        },
      },
    ],
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
      "https://www.facebook.com/60onkosmos",
      "https://www.airbnb.com/rooms/1332667439996159511",
      "https://www.booking.com/hotel/za/60-on-kosmos-cape-town.html",
      "https://g.page/60onkosmos",
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Secure Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "24/7 CCTV Security", value: true },
      { "@type": "LocationFeatureSpecification", name: "Ensuite Bathrooms", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bar Fridge (select rooms)", value: true },
      { "@type": "LocationFeatureSpecification", name: "Weekly Cleaning Service", value: true },
      { "@type": "LocationFeatureSpecification", name: "Communal Kitchenette", value: true },
      { "@type": "LocationFeatureSpecification", name: "Outdoor Seating Area", value: true },
    ],
    checkinTime: "14:00",
    checkoutTime: "10:00",
    petsAllowed: false,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "25",
      bestRating: "5",
      worstRating: "1",
    },
    makesOffer: [
      {
        "@type": "Offer",
        name: "Contractor Monthly Accommodation",
        description: "Monthly accommodation for construction workers and contractors near Sacks Circle and Mill Park",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "530",
          priceCurrency: "ZAR",
          unitText: "per night",
        },
      },
      {
        "@type": "Offer",
        name: "Apprentice Accommodation",
        description: "Accommodation for apprentices attending courses at John Thompson and Northlink College",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "530",
          priceCurrency: "ZAR",
          unitText: "per night",
        },
      },
      {
        "@type": "Offer",
        name: "Weekly Worker Accommodation",
        description: "Weekly stays for industrial workers in Bellville South area",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "530",
          priceCurrency: "ZAR",
          unitText: "per night",
        },
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Room Types at 60 on Kosmos",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "HotelRoom",
            name: "Standard Room",
            description: "Budget-friendly twin room with ensuite bathroom. Access to communal kitchenette.",
            bed: { "@type": "BedDetails", numberOfBeds: 2, typeOfBed: "Single" },
            occupancy: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2 },
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
            name: "Standard Plus Room",
            description: "Twin room with private bar fridge and ensuite bathroom.",
            bed: { "@type": "BedDetails", numberOfBeds: 2, typeOfBed: "Single" },
            occupancy: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2 },
            amenityFeature: [{ "@type": "LocationFeatureSpecification", name: "Bar Fridge", value: true }],
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
            description:
              "Spacious double room with bar fridge, microwave, and ensuite bathroom. Ideal for managers and supervisors.",
            bed: { "@type": "BedDetails", numberOfBeds: 1, typeOfBed: "Double" },
            occupancy: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2 },
            amenityFeature: [
              { "@type": "LocationFeatureSpecification", name: "Bar Fridge", value: true },
              { "@type": "LocationFeatureSpecification", name: "Microwave", value: true },
            ],
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
            name: "Triple Suite",
            description:
              "Large room with three single beds and bar fridge. Best value for 3-person crews at R250 per person.",
            bed: { "@type": "BedDetails", numberOfBeds: 3, typeOfBed: "Single" },
            occupancy: { "@type": "QuantitativeValue", minValue: 1, maxValue: 3 },
            amenityFeature: [{ "@type": "LocationFeatureSpecification", name: "Bar Fridge", value: true }],
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
    isAccessibleForFree: false,
    publicAccess: true,
    slogan: "Your Home Away From Home in Bellville South",
    keywords: [
      "contractor accommodation Bellville",
      "construction worker housing Cape Town",
      "monthly accommodation Bellville South",
      "apprentice accommodation near John Thompson",
      "Sacks Circle accommodation",
      "Mill Park guesthouse",
      "industrial area accommodation Cape Town",
      "weekly accommodation Bellville",
    ],
  }

  const nearbyPlaces = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Nearby Industrial Areas and Training Facilities",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Place",
          name: "Sacks Circle Industrial Area",
          description: "Major industrial hub - 2km from 60 on Kosmos",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Place",
          name: "Mill Park Industrial Area",
          description: "Industrial park - 3km from 60 on Kosmos",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Place",
          name: "John Thompson Training Centre",
          description: "Boilermaker and welding courses - 5km from 60 on Kosmos",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Place",
          name: "Northlink College Bellville",
          description: "Technical college - 4km from 60 on Kosmos",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Place",
          name: "Tygerberg Hospital",
          description: "Major hospital - 8km from 60 on Kosmos",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(nearbyPlaces) }} />
    </>
  )
}

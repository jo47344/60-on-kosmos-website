export function StructuredData() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.60onkosmos.co.za/#website",
    url: "https://www.60onkosmos.co.za",
    name: "60 on Kosmos Bellville South",
    description:
      "Self-catering guesthouse accommodation in Bellville South, Cape Town. Perfect for young professionals and contractors.",
    publisher: {
      "@id": "https://www.60onkosmos.co.za/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.60onkosmos.co.za/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-ZA",
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.60onkosmos.co.za/#organization",
    name: "60 on Kosmos",
    alternateName: "60 on Kosmos Guesthouse Bellville South",
    url: "https://www.60onkosmos.co.za",
    logo: {
      "@type": "ImageObject",
      "@id": "https://www.60onkosmos.co.za/#logo",
      url: "https://www.60onkosmos.co.za/images/60-on-kosmos-logo.png",
      width: 280,
      height: 80,
      caption: "60 on Kosmos",
    },
    image: {
      "@id": "https://www.60onkosmos.co.za/#logo",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
    </>
  )
}

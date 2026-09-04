// The single LodgingBusiness entity (components/local-business-schema.tsx,
// @id https://www.60onkosmos.co.za/#lodgingbusiness) already carries the
// business's name, address, logo, and social links. This component only
// declares the WebSite entity and points its publisher at that same
// LodgingBusiness @id, rather than declaring a second, separate
// Organization entity with its own (and previously inconsistent) NAP data.
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
      "@id": "https://www.60onkosmos.co.za/#lodgingbusiness",
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

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }} />
}

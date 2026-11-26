import { business } from "@/lib/site-facts"

// Link the contractor service to the existing business entity rather than
// creating a second Organization with a different name or contact details.
export function AccommodationServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.60onkosmos.co.za/contractor-accommodation#service",
    name: "Contractor and project team accommodation at 60 on Kosmos",
    serviceType: "Self-catering accommodation for contractors and project teams",
    description: "Adults-only accommodation in four private ensuite rooms in Bellville South, Cape Town. Shared kitchenette, WiFi, gated parking, weekly cleaning and company invoices. Weekly rates from 7 nights and monthly rates from 28 nights; availability and booking terms require written confirmation.",
    url: "https://www.60onkosmos.co.za/contractor-accommodation",
    provider: { "@id": "https://www.60onkosmos.co.za/#lodgingbusiness" },
    areaServed: {
      "@type": "Place",
      name: "Bellville South and Cape Town's northern suburbs",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://www.60onkosmos.co.za/contact",
      servicePhone: { "@type": "ContactPoint", telephone: business.phoneIntl },
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

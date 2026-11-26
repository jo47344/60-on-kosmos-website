import type { Metadata } from "next"
import { business } from "@/lib/site-facts"

// Explicit titles also apply to the homepage, where the layout's template
// does not apply. Keep search and social previews aligned for each page.
export function createPageMetadata({ path, title, description }: {
  path: string
  title: string
  description: string
}): Metadata {
  const fullTitle = `${title} | ${business.name}`
  const url = `https://www.60onkosmos.co.za${path || "/"}`
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_ZA",
      siteName: business.name,
      title: fullTitle,
      description,
      url,
      images: [{
        url: "https://www.60onkosmos.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "60 on Kosmos ensuite accommodation in Bellville South, Cape Town",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["https://www.60onkosmos.co.za/og-image.jpg"],
    },
  }
}

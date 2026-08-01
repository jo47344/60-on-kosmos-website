import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Book & Contact | 60 on Kosmos",
  description: "Book accommodation or get in touch. Call 074 524 5703 or WhatsApp. Located at 60 Kosmos Street, Bellville South, Cape Town.",
  keywords:
    "Contact guesthouse Bellville South, book accommodation Cape Town, 074 524 5703, 60 Kosmos Street Bellville South, WhatsApp booking, near UWC accommodation contact",
  alternates: { canonical: "https://www.60onkosmos.co.za/contact" },
  openGraph: {
    title: "Book & Contact | 60 on Kosmos",
    description: "Book accommodation or get in touch. Call 074 524 5703 or WhatsApp. Located at 60 Kosmos Street, Bellville South, Cape Town.",
    url: "https://www.60onkosmos.co.za/contact",
    type: "website",
    images: [
      {
        url: "https://www.60onkosmos.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "60 on Kosmos Contact",
      },
    ],
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}

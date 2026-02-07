import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact & Book - 60 on Kosmos Guesthouse Bellville South | Call 074 524 5703",
  description:
    "Contact 60 on Kosmos guesthouse Bellville South. Call 074 524 5703 or WhatsApp to book. Located at 60 Kosmos Street, Bellville South. Check-in 2PM. Near UWC, Tygerberg Hospital.",
  keywords:
    "Contact guesthouse Bellville South, book accommodation Cape Town, 074 524 5703, 60 Kosmos Street Bellville South, WhatsApp booking, near UWC accommodation contact",
  alternates: { canonical: "https://60onkosmos.co.za/contact" },
  openGraph: {
    title: "Contact & Book - 60 on Kosmos Guesthouse Bellville South",
    description: "Call 074 524 5703 or WhatsApp to book your stay at 60 Kosmos Street, Bellville South",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}

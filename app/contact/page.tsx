import { createPageMetadata } from "@/lib/page-metadata"
import ContactPageClient from "./ContactPageClient"

export const metadata = createPageMetadata({
  path: "/contact",
  title: "Contact & Book in Bellville South",
  description: "Contact 60 on Kosmos at 60 Kosmos Street, Bellville South, Cape Town. Call or WhatsApp 074 524 5703 for room availability, company quotes and bookings.",
})

export default function ContactPage() {
  return <ContactPageClient />
}

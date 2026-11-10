import type { Metadata } from "next"
import BookNowClientPage from "./BookNowClientPage"
import { rooms } from "@/lib/site-facts"

const fromPrice = Math.min(...rooms.map((room) => room.price))

export const metadata: Metadata = {
  title: `Book Direct | Rooms from R${fromPrice}/night`,
  description:
    `Book direct at 60 on Kosmos, Bellville South. Private ensuite rooms from R${fromPrice}/night with secure parking and WiFi. Book on WhatsApp or send a request; we usually reply the same day.`,
  keywords:
    "book guesthouse Bellville South, online booking Cape Town, 60 on Kosmos booking, guesthouse reservation, contractor accommodation booking, UWC student accommodation booking",
  alternates: { canonical: "https://www.60onkosmos.co.za/book-now" },
  openGraph: {
    title: `Book Direct | Rooms from R${fromPrice}/night`,
    description:
      `Book direct at 60 on Kosmos, Bellville South. Private ensuite rooms from R${fromPrice}/night with secure parking and WiFi. Book on WhatsApp or send a request; we usually reply the same day.`,
    url: "https://www.60onkosmos.co.za/book-now",
    type: "website",
    images: [
      {
        url: "https://www.60onkosmos.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Book at 60 on Kosmos",
      },
    ],
  },
}

export default function BookNowPage() {
  return <BookNowClientPage />
}

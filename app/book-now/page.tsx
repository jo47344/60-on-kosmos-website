import type { Metadata } from "next"
import BookNowClientPage from "./BookNowClientPage"

export const metadata: Metadata = {
  title: "Book Your Stay - 60 on Kosmos Guesthouse",
  description:
    "Book your comfortable and secure stay at 60 on Kosmos Guesthouse in Bellville South, Cape Town. Easy online booking for contractors, students, and families.",
  keywords:
    "book guesthouse Bellville South, online booking Cape Town, 60 on Kosmos booking, guesthouse reservation, contractor accommodation booking, UWC student accommodation booking",
  alternates: { canonical: "https://60onkosmos.co.za/book-now" },
}

export default function BookNowPage() {
  return <BookNowClientPage />
}

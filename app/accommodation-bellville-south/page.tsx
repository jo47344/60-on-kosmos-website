import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Accommodation in Bellville South",
  description:
    "60 on Kosmos is a 4-room, private-ensuite, self-catering guesthouse on Kosmos Street, Bellville South.",
  alternates: { canonical: "https://www.60onkosmos.co.za/accommodation-bellville-south" },
  openGraph: {
    title: "Accommodation in Bellville South",
    description:
      "60 on Kosmos is a 4-room, private-ensuite, self-catering guesthouse on Kosmos Street, Bellville South.",
    url: "https://www.60onkosmos.co.za/accommodation-bellville-south",
    type: "website",
    images: [
      {
        url: "https://www.60onkosmos.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "60 on Kosmos Accommodation Bellville South",
      },
    ],
  },
}

const included = [
  "Private ensuite room",
  "Self-catering kitchen access",
  "Free WiFi",
  "Secure parking",
  "Weekly servicing",
  "No lease, one-month minimum on long stays",
]

const rates = [
  { room: "Standard Twin", price: "R580/night" },
  { room: "Deluxe Twin", price: "R620/night" },
  { room: "Double", price: "R650/night" },
  { room: "Triple", price: "R800/night" },
  { room: "Long-stay rate", price: "R464/night", note: "(one-month minimum)" },
]

const rateIncludes = "Private ensuite room, self-catering kitchen access, free WiFi, secure parking, weekly servicing"

const locationPoints = ["5 min to UWC", "5 min to CPUT Bellville campus", "10 min to Tyger Valley", "15 min to Cape Town International Airport"]

export default function AccommodationBellvilleSouthPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gray-900 py-14 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/exterior-building.png"
            alt="60 on Kosmos guesthouse exterior in Bellville South"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Accommodation in Bellville South
          </h1>
          <p className="text-base sm:text-lg text-gray-300 text-pretty">
            60 on Kosmos is a 4-room, private-ensuite, self-catering guesthouse on Kosmos Street, Bellville South.
            We&apos;re not a B&amp;B and we&apos;re not a shared-room lodge — every guest gets their own ensuite room
            and access to a self-catering kitchen.
          </p>
        </div>
      </section>

      {/* What's actually included */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What&apos;s actually included</h2>
          <ul className="space-y-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Rates */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Rates</h2>
          <div className="overflow-hidden rounded-lg border bg-white">
            <table className="w-full text-left">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold">Room</th>
                  <th className="px-4 py-3 text-sm font-semibold">Rate</th>
                  <th className="px-4 py-3 text-sm font-semibold hidden sm:table-cell">Includes</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((rate, idx) => (
                  <tr key={rate.room} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{rate.room}</td>
                    <td className="px-4 py-3 text-sm text-sage-700 font-semibold">
                      {rate.price} {rate.note && <span className="text-gray-500 font-normal">{rate.note}</span>}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 hidden sm:table-cell">{rateIncludes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4 sm:hidden">
            All rates include: {rateIncludes}.
          </p>
        </div>
      </section>

      {/* Currently hosting */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Currently hosting</h2>
          <div className="bg-sage-50 border-l-4 border-sage-600 rounded-lg p-6">
            <p className="text-gray-800 text-pretty">
              Right now we&apos;re hosting a crew from CJL Spraybooth on a week-by-week basis for the Komati
              project — that&apos;s the kind of stay we&apos;re built for: people who need a real bed, a proper
              kitchen, and quiet after a long day on site, not a hotel room they&apos;re paying for and barely using.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Location</h2>
          <ul className="space-y-3">
            {locationPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-base sm:text-lg">
            <Link href="/check-availability">Check availability</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

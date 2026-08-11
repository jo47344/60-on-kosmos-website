import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Extended-Stay Accommodation for Corporate Teams",
  description:
    "Private ensuite, self-catering, one invoice a month — no lease, no long-term commitment. Monthly rate R464/night, one-month minimum.",
  alternates: { canonical: "https://www.60onkosmos.co.za/corporate" },
  openGraph: {
    title: "Extended-Stay Accommodation for Corporate Teams",
    description:
      "Private ensuite, self-catering, one invoice a month — no lease, no long-term commitment. Monthly rate R464/night, one-month minimum.",
    url: "https://www.60onkosmos.co.za/corporate",
    type: "website",
    images: [
      {
        url: "https://www.60onkosmos.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "60 on Kosmos Corporate Accommodation",
      },
    ],
  },
}

const rateIncludes = "private ensuite, self-catering, invoiced monthly, rooms serviced weekly"

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gray-900 py-14 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/exterior-building.png"
            alt="60 on Kosmos guesthouse exterior for corporate accommodation"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Extended-stay accommodation for corporate teams
          </h1>
          <p className="text-base sm:text-lg text-gray-300 text-pretty">
            Private ensuite, self-catering, one invoice a month — no lease, no long-term commitment. Built for
            teams that need to put people up in Cape Town for weeks or months at a time, not a hotel bill that
            adds up fast.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">How it works</h2>
          <div className="rounded-lg border bg-gray-50 p-6 space-y-2">
            <p className="text-gray-900 font-semibold">
              Monthly rate: R464/night, one-month minimum ({rateIncludes})
            </p>
            <p className="text-gray-700">Invoiced directly, no lease required.</p>
            <p className="text-gray-700">Rooms serviced weekly.</p>
          </div>
        </div>
      </section>

      {/* Corporate clients placeholder */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Corporate clients</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white">
            <p className="text-gray-500 font-medium">
              [PLACEHOLDER — Joann to add corporate client logos/quotes here: Origan, Project Up, OJ Plant Hire,
              Impendulo]
            </p>
          </div>
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

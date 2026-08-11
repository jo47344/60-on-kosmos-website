import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Accommodation for Contractors and Project Crews",
  description:
    "Private-ensuite, self-catering accommodation with secure parking, built for people working, not people on holiday. Book by the day or the week.",
  alternates: { canonical: "https://www.60onkosmos.co.za/contractors" },
  openGraph: {
    title: "Accommodation for Contractors and Project Crews",
    description:
      "Private-ensuite, self-catering accommodation with secure parking, built for people working, not people on holiday. Book by the day or the week.",
    url: "https://www.60onkosmos.co.za/contractors",
    type: "website",
    images: [
      {
        url: "https://www.60onkosmos.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "60 on Kosmos Contractor Accommodation",
      },
    ],
  },
}

const rateIncludes = "private ensuite, self-catering, secure parking"

export default function ContractorsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gray-900 py-14 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/exterior-building.png"
            alt="60 on Kosmos guesthouse exterior for contractor accommodation"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Accommodation for contractors and project crews
          </h1>
          <p className="text-base sm:text-lg text-gray-300 text-pretty">
            If you&apos;re managing a crew on a Cape Town project, you already know what a bad billet costs you — a
            bad night&apos;s sleep shows up on site the next day. 60 on Kosmos is private-ensuite, self-catering,
            with secure parking, built for people working, not people on holiday.
          </p>
        </div>
      </section>

      {/* Week-to-week, no lease */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Week-to-week, no lease</h2>
          <p className="text-gray-700 text-pretty mb-4">
            Book by the day or the week. No lease, no minimum beyond one month for long stays.
          </p>
          <div className="rounded-lg border bg-gray-50 p-6">
            <p className="text-gray-900 font-semibold">
              Daily rates: R580–R800/night ({rateIncludes})
            </p>
            <p className="text-gray-900 font-semibold mt-2">
              Long-stay rate: R464/night ({rateIncludes})
            </p>
          </div>
        </div>
      </section>

      {/* Real example */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-l-4 border-sage-600 rounded-lg p-6 shadow-sm">
            <p className="text-gray-800 text-pretty">
              We&apos;re currently hosting a spray booth crew week-by-week on an active project.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-base sm:text-lg w-full sm:w-auto">
              <Link href="/check-availability">Check availability</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-base sm:text-lg w-full sm:w-auto"
            >
              <a href="https://wa.me/27745245703" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp 074 524 5703
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, MapPin, Users, Briefcase, GraduationCap, Plane, ChevronDown } from "lucide-react"
import { FAQSchema } from "@/components/faq-schema"
import { capacity, facilities, rooms, stayTerms } from "@/lib/site-facts"

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

const nearbyAreas = [
  "Sacks Circle Industrial Area — around 2km",
  "Mill Park Industrial Area — around 3km",
  "Stikland Industrial — around 5km",
  "Parow Industria — around 6km",
  "Northlink College Bellville (technical college) — around 4km",
  "John Thompson Training Centre (boilermaker & welding courses) — around 5km",
]

const faqs = [
  {
    question: "Is 60 on Kosmos in a gated community?",
    answer:
      "No — 60 on Kosmos is an independent guesthouse on Kosmos Street, Bellville South, not inside a gated residential estate. The property itself has gated parking, with CCTV and ADT armed response.",
  },
  {
    question: "How many people can you accommodate?",
    answer:
      "We have 4 private ensuite rooms, suitable for individuals, couples or small teams of up to 8 guests in total. Tell us your group size and we'll confirm the best room combination.",
  },
  {
    question: "How far is 60 on Kosmos from UWC and CPUT?",
    answer:
      "Approximately 5–8 minutes from UWC and approximately 5–8 minutes from the CPUT Bellville campus by car, subject to traffic.",
  },
  {
    question: "Do you accept walk-in payments or cash?",
    answer: "We accept EFT payment only — we don't take cash. Banking details are provided on your quotation.",
  },
  {
    question: "Can you invoice a company directly?",
    answer: "Yes, invoices are provided on request for company and contractor bookings.",
  },
]

export default function AccommodationBellvilleSouthPage() {
  return (
    <div className="min-h-screen bg-white">
      <FAQSchema faqs={faqs} />
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

      {/* Who this suits */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Who stays in Bellville South</h2>
          <p className="text-gray-700 mb-6">
            Bellville South is a working, industrial-adjacent suburb rather than a tourist area, which is exactly
            why guests choose it:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <Briefcase className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Contractors &amp; project teams</p>
                <p className="text-sm text-gray-600">Working the surrounding industrial areas on short or multi-week contracts.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <Users className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Working professionals</p>
                <p className="text-sm text-gray-600">On assignment in Cape Town and wanting a self-catering alternative to a hotel.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <GraduationCap className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Visiting students &amp; staff</p>
                <p className="text-sm text-gray-600">Short or medium stays near UWC and CPUT — exchange visits, graduations, family visits.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <Plane className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Airport-adjacent stays</p>
                <p className="text-sm text-gray-600">A base with airport access without the cost of staying right at the runway.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's actually included */}
      <section className="py-12 sm:py-16 bg-gray-50">
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

      {/* Room options */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Room options</h2>
          <p className="text-gray-600 mb-6">
            {capacity.roomCount} private ensuite rooms in total, suitable for individuals, couples, or small teams of
            up to {capacity.maxGuests} guests when booking multiple rooms.
          </p>
          <div className="overflow-hidden rounded-lg border bg-white">
            <table className="w-full text-left">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold">Room</th>
                  <th className="px-4 py-3 text-sm font-semibold">Nightly</th>
                  <th className="px-4 py-3 text-sm font-semibold hidden sm:table-cell">Weekly</th>
                  <th className="px-4 py-3 text-sm font-semibold hidden sm:table-cell">Monthly (28+ nights)</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room, idx) => (
                  <tr key={room.name} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{room.name}</td>
                    <td className="px-4 py-3 text-sm text-sage-700 font-semibold">R{room.price}/night</td>
                    <td className="px-4 py-3 text-sm text-gray-600 hidden sm:table-cell">R{room.weeklyPrice}/night</td>
                    <td className="px-4 py-3 text-sm text-gray-600 hidden sm:table-cell">R{room.monthlyPrice}/night</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Weekly and monthly rates reduce the nightly cost for longer stays. Final rates depend on room
            allocation, availability and length of stay — contact us for a current quote.
          </p>
        </div>
      </section>

      {/* Nearby work & study areas */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Nearby work &amp; study areas</h2>
          <ul className="space-y-3 mb-6">
            {nearbyAreas.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link href="/accommodation-near-uwc" className="text-sage-600 underline hover:no-underline">
              Accommodation near UWC (approx. 5–8 minutes by car)
            </Link>
            <Link href="/accommodation-near-cput" className="text-sage-600 underline hover:no-underline">
              Accommodation near CPUT Bellville campus (approx. 5–8 minutes by car)
            </Link>
            <Link href="/contractor-accommodation-stikland" className="text-sage-600 underline hover:no-underline">
              Contractor accommodation near Stikland Industrial
            </Link>
            <Link href="/contractor-accommodation-airport-industria" className="text-sage-600 underline hover:no-underline">
              Contractor accommodation near Airport Industria (approx. 25–30 minutes)
            </Link>
          </div>
        </div>
      </section>

      {/* Long stays & company bookings */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Room-sharing, long stays &amp; company bookings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">Small teams &amp; room-sharing</h3>
                <p className="text-gray-600 text-sm">
                  Booking for more than one person? Tell us your team size and dates and we&apos;ll confirm the best
                  combination across our {capacity.roomCount} rooms, up to {capacity.maxGuests} guests in total.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">Long-stay arrangements</h3>
                <p className="text-gray-600 text-sm">
                  Stays of {stayTerms.monthlyRateMinNights}+ nights qualify for our monthly rate, with no lease
                  required — a practical option for multi-week contracts or postings.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">Company invoicing</h3>
                <p className="text-gray-600 text-sm">
                  Invoices are provided on request for company and contractor bookings. {stayTerms.payment}.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">Security &amp; parking</h3>
                <p className="text-gray-600 text-sm">{facilities[1]}, with {facilities[2].toLowerCase()}.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="flex items-start justify-between cursor-pointer list-none">
                      <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                      <ChevronDown className="w-5 h-5 text-sage-600 flex-shrink-0 transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-10 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-center text-sm">
            <Link href="/contractor-accommodation" className="text-sage-600 hover:text-sage-700 font-medium">
              All contractor accommodation locations
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contractor-accommodation-northern-suburbs" className="text-sage-600 hover:text-sage-700">
              Northern Suburbs guide
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/rooms" className="text-sage-600 hover:text-sage-700">
              Rooms &amp; rates
            </Link>
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

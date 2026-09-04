import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, ArrowLeft, Phone, GraduationCap, CheckCircle, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Short- and Medium-Term Accommodation for International Students Visiting UWC and CPUT",
  description:
    "A practical guide to short- and medium-term guest accommodation for international students visiting UWC or CPUT for an exchange, research stay, or short programme — not a full academic-year residence.",
  keywords:
    "international student accommodation uwc cput, exchange student housing cape town, short term accommodation uwc, visiting student accommodation bellville",
  alternates: { canonical: "https://www.60onkosmos.co.za/blog/international-student-housing-uwc" },
}

export default function InternationalStudentHousingPage() {
  return (
    <article className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-sage-600 hover:text-sage-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            INTERNATIONAL STUDENTS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Short- and Medium-Term Accommodation for International Students Visiting UWC and CPUT
          </h1>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>9 January 2025</span>
            <span className="mx-2">•</span>
            <span>7 min read</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/twin-room-yellow.png"
            alt="International student accommodation near UWC and CPUT Bellville"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6 font-medium">
            60 on Kosmos has previously hosted international students visiting UWC and CPUT for exchange programmes
            and research stays of two to three months. This guide covers who this suits, and — just as
            importantly — who it doesn&apos;t.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-blue-900 font-bold mb-2">This is not a campus residence</p>
                <p className="text-blue-800">
                  60 on Kosmos is an independent guesthouse — not a UWC or CPUT campus residence, and not an
                  NSFAS-accredited student property. It suits exchange, research and short-programme visitors who
                  need a private, self-catering room for a defined period, not a full academic-year placement.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Who this suits</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "International visiting students staying for several weeks or months",
              "Exchange and research students at UWC or CPUT",
              "Students on short university programmes",
              "Visitors attending graduations, seminars, conferences or training",
              "Visiting lecturers and staff",
              "Parents and family visiting students",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 bg-gray-50 rounded-lg p-4 border">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What&apos;s included</h2>

          <p className="text-gray-700 mb-6">
            Rooms are private and ensuite, with WiFi, secure gated parking, weekly cleaning, and access to a communal
            self-catering kitchenette. See our dedicated pages for current rates and full detail:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h4 className="font-bold text-lg mb-2">Accommodation Near UWC</h4>
              <p className="text-sm text-gray-600 mb-4">
                Approximately 5–8 minutes from UWC by car, subject to traffic.
              </p>
              <Link href="/accommodation-near-uwc" className="text-sage-600 underline font-medium">
                View the UWC page
              </Link>
            </Card>
            <Card className="p-6">
              <h4 className="font-bold text-lg mb-2">Accommodation Near CPUT</h4>
              <p className="text-sm text-gray-600 mb-4">
                Approximately 5–8 minutes from the CPUT Bellville campus by car, subject to traffic.
              </p>
              <Link href="/accommodation-near-cput" className="text-sage-600 underline font-medium">
                View the CPUT page
              </Link>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Choosing a stay length</h2>

          <p className="text-gray-700 mb-4">
            Nightly and weekly rates apply for shorter visits. For an exchange semester or a research stay of 28
            nights or more, our monthly rate applies — see{" "}
            <Link href="/monthly-accommodation" className="text-sage-600 underline">
              monthly accommodation
            </Link>{" "}
            for current pricing and terms.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Getting from the airport</h2>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h4 className="font-bold mb-3">Cape Town International Airport → Bellville South</h4>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Distance:</strong> approximately 16km
              </li>
              <li>
                <strong>Options:</strong> a metered ride-hailing app (e.g. Uber or Bolt) or a pre-arranged transfer.
                Confirm current pricing directly with the provider before you travel.
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Before you arrive</h2>

          <div className="space-y-3 mb-8">
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" readOnly />
              <span className="text-gray-700">Confirm your accommodation dates and length of stay with us before you fly</span>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" readOnly />
              <span className="text-gray-700">Check your study permit and visa requirements with the relevant authorities</span>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" readOnly />
              <span className="text-gray-700">Arrange medical/travel insurance for the duration of your stay</span>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" readOnly />
              <span className="text-gray-700">Confirm your arrival time with us so we can plan check-in</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 mt-12 text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Visiting UWC or CPUT?</h2>
          <p className="text-lg mb-6 opacity-90">
            Send us your dates and we&apos;ll confirm availability and rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <a
                href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20an%20international%20student%20visiting%20UWC%20or%20CPUT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp Us
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-700 bg-transparent"
            >
              <Link href="/rooms">View Rooms &amp; Prices</Link>
            </Button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/accommodation-near-uwc" className="block hover:opacity-80">
              <Card className="p-4">
                <h4 className="font-bold mb-2">Accommodation Near UWC</h4>
                <p className="text-sm text-gray-600">Guest accommodation near UWC for visiting students and staff</p>
              </Card>
            </Link>
            <Link href="/accommodation-near-cput" className="block hover:opacity-80">
              <Card className="p-4">
                <h4 className="font-bold mb-2">Accommodation Near CPUT</h4>
                <p className="text-sm text-gray-600">Guest accommodation near the CPUT Bellville campus</p>
              </Card>
            </Link>
            <Link href="/monthly-accommodation" className="block hover:opacity-80">
              <Card className="p-4">
                <h4 className="font-bold mb-2">Monthly Accommodation</h4>
                <p className="text-sm text-gray-600">Rates for stays of 28 nights or more</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Wifi,
  Car,
  Utensils,
  Shield,
  CheckCircle2,
  Users,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { FAQSchema } from "@/components/faq-schema"
import { capacity, facilities } from "@/lib/site-facts"

export const metadata: Metadata = {
  title: "Guesthouse Near Kuils River | 60 on Kosmos, Bellville South",
  description:
    "Guesthouse accommodation near Kuils River and surrounding industrial zones. 60 on Kosmos offers private ensuite rooms, secure parking, and flexible corporate terms for project teams.",
  alternates: {
    canonical: "https://www.60onkosmos.co.za/contractor-accommodation-kuils-river",
  },
  openGraph: {
    title: "Guesthouse Near Kuils River | 60 on Kosmos",
    description: "Guesthouse rooms near Kuils River. Private ensuite, secure parking, weekly cleaning, WiFi included.",
    url: "https://www.60onkosmos.co.za/contractor-accommodation-kuils-river",
    type: "website",
  },
}

const breadcrumbItems = [
  { name: "Home", url: "" },
  { name: "Contractor Accommodation", url: "/contractor-accommodation" },
  { name: "Kuils River", url: "/contractor-accommodation-kuils-river" },
]

const faqs = [
  {
    question: "How far is 60 on Kosmos from Kuils River?",
    answer:
      "60 on Kosmos is in Bellville South, roughly a 15–20 minute drive from Kuils River and the Blackheath Industrial Park area via the R300.",
  },
  {
    question: "Do you offer secure parking for contractor vehicles?",
    answer: "Yes — free gated parking with CCTV and ADT armed response, with space for bakkies and work vehicles.",
  },
  {
    question: "Can multiple team members stay together?",
    answer:
      "Yes. We have 4 private ensuite rooms, suitable for small teams of up to 8 guests in total. Tell us your team size and dates and we'll confirm the best room combination and a company rate.",
  },
  {
    question: "Is corporate invoicing available?",
    answer: "Yes, invoices are provided on request. We accept EFT payment only — we don't take cash.",
  },
  {
    question: "What are the check-in and cleaning arrangements?",
    answer:
      "Check-in is from 14:00 and check-out by 10:00, with weekly cleaning, fresh linen, and free WiFi included throughout your stay.",
  },
]

export default function KuilsRiverAccommodationPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={breadcrumbItems} />
      <Breadcrumbs items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/exterior-building.png"
            alt="60 on Kosmos accommodation near Kuils River"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>Kuils River &amp; Surrounds</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
              A Guesthouse Near Kuils River for Project Teams
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              60 on Kosmos is based in Bellville South, roughly a 15–20 minute drive from Kuils River and the
              Blackheath Industrial Park area via the R300. We provide private-ensuite accommodation for project
              teams, site crews, and working professionals, with company invoicing available on request.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg"
              >
                <Link href="/contractor-accommodation#company-enquiry">Get a Company Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg"
              >
                <a href="tel:+27745245703">
                  <Phone className="mr-2 h-5 w-5" />
                  074 524 5703
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Serving Kuils River and the Blackheath industrial belt</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              Kuils River and the neighbouring Blackheath Industrial Park, reached via the R300, are home to a mix
              of warehousing, manufacturing and logistics operations. Teams working this belt are often on shift
              schedules that don&apos;t line up with typical hotel check-in and meal times.
            </p>
            <p>
              60 on Kosmos in Bellville South is roughly a 15–20 minute drive via the R300 — close enough for
              consistent, predictable commutes without the cost of staying inside the industrial area itself.
            </p>
            <p>
              We regularly host small crews on maintenance and installation contracts around Kuils River — people
              who need a self-catering base with a proper kitchen and secure parking for tools and equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Who this is for</h2>
          <p className="text-gray-700 mb-6">This location suits contractors and technical teams working the Kuils River area, including:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Warehousing and logistics staff",
              "Manufacturing and engineering maintenance teams",
              "Installation and servicing contractors",
              "Site supervisors covering multiple sites in the R300 corridor",
              "Company staff on multi-week Kuils River assignments",
              "Small crews needing self-catering rather than a hotel",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 bg-white rounded-lg p-4 border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby work areas */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Nearby work areas</h2>
          <p className="text-gray-700 mb-6">60 on Kosmos is well positioned for teams working across the R300 industrial corridor, including:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Kuils River industrial and commercial premises",
              "Blackheath Industrial Park — around 10km via the R300",
              "Saxenburg Park 1, 2 and 3 industrial estates",
              "Stikland Industrial — a short drive back toward Bellville",
              "R300 corridor engineering and manufacturing sites",
              "Mill Park & Sacks Circle Industrial Areas, near Bellville South",
            ].map((area) => (
              <div key={area} className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4 text-sage-600 flex-shrink-0" />
                <span className="text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room-sharing, long-stay, invoicing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Small teams, long stays and company bookings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Users className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Room-sharing for small teams</h3>
                    <p className="text-gray-600 text-sm">
                      {capacity.roomCount} private ensuite rooms, suitable for small teams of up to {capacity.maxGuests}{" "}
                      guests in total. Tell us your team size and we&apos;ll confirm the best combination.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Weekly and monthly stays</h3>
                    <p className="text-gray-600 text-sm">
                      Weekly rates and a monthly rate for stays of 28 nights or more, suited to maintenance and
                      installation contracts that run longer than a week or two.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">What&apos;s Included in Every Room</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: Wifi, label: facilities[3] },
              { icon: Car, label: facilities[1] },
              { icon: Users, label: facilities[0] },
              { icon: Utensils, label: facilities[5] },
              { icon: CheckCircle2, label: facilities[4] },
              { icon: Shield, label: facilities[2] },
            ].map(({ icon: Icon, label }, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg border">
                <Icon className="w-6 h-6 text-sage-600 flex-shrink-0" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
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

      {/* CTA Section */}
      <section className="py-12 bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-lg mb-8 text-gray-100">
            Contact us for a custom quote tailored to your project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold"
            >
              <Link href="/contractor-accommodation#company-enquiry">Get a Company Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-sage-700 px-8 py-6 text-lg"
            >
              <a
                href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20accommodation%20near%20Kuils%20River"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-10 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-center text-sm">
            <Link href="/contractor-accommodation" className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium">
              <ArrowRight className="w-4 h-4 rotate-180" />
              All contractor accommodation locations
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contractor-accommodation-blackheath-saxenburg" className="text-sage-600 hover:text-sage-700">
              Blackheath & Saxenburg Park
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contractor-accommodation-stikland" className="text-sage-600 hover:text-sage-700">
              Stikland Industrial
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contractor-accommodation-northern-suburbs" className="text-sage-600 hover:text-sage-700">
              Northern Suburbs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

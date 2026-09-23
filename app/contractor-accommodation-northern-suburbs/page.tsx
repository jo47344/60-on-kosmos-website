import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Briefcase,
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
  title: "Guesthouse in the Northern Suburbs | 60 on Kosmos, Bellville",
  description:
    "Guesthouse accommodation in the northern suburbs. Located in Bellville South, 60 on Kosmos is ideal for project teams working across the northern suburbs. Secure private ensuite rooms, parking, and corporate invoicing.",
  alternates: {
    canonical: "https://www.60onkosmos.co.za/contractor-accommodation-northern-suburbs",
  },
  openGraph: {
    title: "Guesthouse in the Northern Suburbs | 60 on Kosmos",
    description: "Guesthouse rooms for project teams across the northern suburbs. Secure parking, weekly cleaning, WiFi included.",
    url: "https://www.60onkosmos.co.za/contractor-accommodation-northern-suburbs",
    type: "website",
  },
}

const breadcrumbItems = [
  { name: "Home", url: "" },
  { name: "Contractor Accommodation", url: "/contractor-accommodation" },
  { name: "Northern Suburbs", url: "/contractor-accommodation-northern-suburbs" },
]

const areaGuide = [
  {
    name: "Bellville South",
    href: "/contractor-accommodation",
    note: "Where 60 on Kosmos is based — Sacks Circle and Mill Park industrial areas are a few minutes away.",
  },
  {
    name: "Stikland Industrial",
    href: "/contractor-accommodation-stikland",
    note: "One of the closest industrial areas to the guesthouse, around 5km away.",
  },
  {
    name: "Kuils River & Blackheath Industrial",
    href: "/contractor-accommodation-kuils-river",
    note: "Around 15–20 minutes via the R300 — warehousing, manufacturing and logistics.",
  },
  {
    name: "Blackheath & Saxenburg Park",
    href: "/contractor-accommodation-blackheath-saxenburg",
    note: "The Saxenburg Park estates, part of the same R300 industrial belt as Kuils River.",
  },
  {
    name: "Airport Industria & Cape Town Airport",
    href: "/contractor-accommodation-airport-industria",
    note: "Around 25–30 minutes via the R300 and N2 — aviation, freight and logistics.",
  },
  {
    name: "Parow & N1 City",
    href: "/contractor-accommodation-n1-city-parow",
    note: "Commercial and retail precincts along the N1, including Parow Industria.",
  },
  {
    name: "Goodwood & GrandWest",
    href: "/contractor-accommodation-grandwest-goodwood",
    note: "The Goodwood commercial area and GrandWest precinct, off the N1.",
  },
  {
    name: "Century City",
    href: "/contractor-accommodation-century-city",
    note: "Around 20–25 minutes via the N1 — Canal Walk and corporate office parks.",
  },
  {
    name: "UWC & CPUT Bellville Campus",
    href: "/contractor-accommodation-uwc-cput-bellville",
    note: "For contractors and project teams working at or near the campuses.",
  },
]

const faqs = [
  {
    question: "Which northern suburbs area is right for my team?",
    answer:
      "It depends on your site. Stikland and the Bellville South industrial areas are closest to the guesthouse. Kuils River, Blackheath and Saxenburg Park are around 15–20 minutes via the R300. Airport Industria is around 25–30 minutes via the R300 and N2, and Century City is around 20–25 minutes via the N1. See the area guide above for a page specific to your work area.",
  },
  {
    question: "Do you cover teams working across more than one northern suburbs site?",
    answer:
      "Yes. 60 on Kosmos is centrally based in Bellville South, so it works as a single base for teams moving between multiple northern suburbs sites during a project.",
  },
  {
    question: "Is secure parking available for work vehicles?",
    answer: "Yes, gated parking with CCTV and ADT armed response, with space for bakkies and work vehicles.",
  },
  {
    question: "How many people can you accommodate?",
    answer:
      "We have 4 private ensuite rooms, suitable for small teams of up to 8 guests in total. Tell us your team size and we'll confirm the best room combination and a company rate.",
  },
  {
    question: "Do you provide invoices for corporate bookings?",
    answer: "Yes, on request, for contractors and companies needing documentation. We accept EFT payment only — we don't take cash.",
  },
]

export default function NorthernSuburbsAccommodationPage() {
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
            alt="60 on Kosmos guesthouse in Bellville South, central to the northern suburbs"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>Northern Suburbs</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
              A Northern Suburbs Guesthouse for Project Teams
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              60 on Kosmos is based in Bellville South, central to the Cape Town northern suburbs. Not sure which
              area page matches your site? Use the guide below to find the location closest to where your team is
              working.
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

      {/* Area guide - the hub content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Find your area</h2>
          <p className="text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            One guesthouse, several nearby work areas. Each link below goes to a page with area-specific detail —
            distance, who it suits, and what&apos;s nearby.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areaGuide.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="flex flex-col gap-1 bg-gray-50 hover:bg-sage-50 border border-gray-200 hover:border-sage-300 rounded-lg p-5 transition-colors"
              >
                <span className="flex items-center gap-2 font-semibold text-gray-900">
                  <MapPin className="w-4 h-4 text-sage-600 flex-shrink-0" />
                  {area.name}
                </span>
                <span className="text-sm text-gray-600">{area.note}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Who this is for</h2>
          <p className="text-gray-700 mb-6">
            This central Bellville South base suits project teams and working professionals across the northern
            suburbs, including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Contractors and technicians moving between multiple sites",
              "Project managers coordinating teams across different areas",
              "Company staff on multi-week or multi-site assignments",
              "Small crews wanting one consistent base for the whole project",
              "Teams needing a central point between Stikland, Kuils River, Parow and Century City",
              "Working professionals who want a self-catering alternative to a hotel",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 bg-white rounded-lg p-4 border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room-sharing, long-stay, invoicing */}
      <section className="py-16 bg-white">
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
                  <Briefcase className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Company invoicing, one base for the team</h3>
                    <p className="text-gray-600 text-sm">
                      Invoices provided on request, with weekly rates and a monthly rate for stays of 28 nights or
                      more — one point of contact whichever northern suburbs site your team is working.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 bg-gray-50">
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
      <section className="py-12 bg-white">
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
                href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20accommodation%20in%20the%20northern%20suburbs"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Back to Hub */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/contractor-accommodation"
            className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            View All Locations
          </Link>
        </div>
      </section>
    </div>
  )
}

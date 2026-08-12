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

export const metadata: Metadata = {
  title: "Accommodation Near Durbanville | 60 on Kosmos Guest House, Bellville South",
  description:
    "Guest house accommodation a short drive from Durbanville. Private ensuite rooms, secure parking, self-catering kitchens, and corporate invoicing for project teams, contractors, and visitors.",
  alternates: {
    canonical: "https://www.60onkosmos.co.za/accommodation-durbanville",
  },
  openGraph: {
    title: "Accommodation Near Durbanville | 60 on Kosmos",
    description: "Private ensuite guest house rooms close to Durbanville. Secure parking, weekly cleaning, WiFi included.",
    url: "https://www.60onkosmos.co.za/accommodation-durbanville",
    type: "website",
  },
}

const breadcrumbItems = [
  { name: "Home", url: "" },
  { name: "Accommodation Near Durbanville", url: "/accommodation-durbanville" },
]

const faqs = [
  {
    question: "How far is 60 on Kosmos from Durbanville?",
    answer:
      "We're a short drive from Durbanville, based in Bellville South, making us a convenient guest house option for visitors, contractors, and professionals in the area.",
  },
  {
    question: "Is secure parking included?",
    answer: "Yes, free gated parking with 24/7 CCTV surveillance is included for every room.",
  },
  {
    question: "Do you offer self-catering facilities?",
    answer:
      "Yes, all guests have access to our communal kitchen with a gas stove, microwave, air fryer, and kettle for preparing meals.",
  },
  {
    question: "Can you invoice companies or contractors?",
    answer: "Yes, invoices are provided on request for corporate and contractor bookings.",
  },
  {
    question: "What are your check-in and check-out times?",
    answer: "Check-in is from 14:00 and check-out is by 10:00. Weekly cleaning and free WiFi are included in every stay.",
  },
]

export default function DurbanvilleAccommodationPage() {
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
            alt="60 on Kosmos Guest House"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>Near Durbanville</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
              Guest House Accommodation Near Durbanville
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              60 on Kosmos is a guest house in Bellville South, a short drive from Durbanville and the surrounding wine
              route area. Private ensuite rooms, secure parking, and self-catering kitchens for visitors, project teams,
              and anyone needing a comfortable, affordable base near Durbanville.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg"
              >
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20accommodation%20near%20Durbanville.%20Please%20send%20me%20more%20info.">
                  Get a Quote on WhatsApp
                </a>
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

      {/* Why Choose Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Stay at 60 on Kosmos Near Durbanville?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Easy Reach of Durbanville</h3>
                    <p className="text-gray-600">
                      A short drive from Durbanville CBD and the wine route, with quick access via the N1 and M13.
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
                    <h3 className="font-bold mb-2">Corporate Invoicing</h3>
                    <p className="text-gray-600">
                      Invoices are provided on request for company bookings and project teams.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Users className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Flexible Stays</h3>
                    <p className="text-gray-600">
                      Nightly, weekly, and monthly rates with discounts for longer stays. Twin, double, and triple rooms
                      available.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Secure Gated Community</h3>
                    <p className="text-gray-600">
                      Gated parking, CCTV, and on-site management for complete peace of mind.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What&apos;s Included */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">What&apos;s Included in Every Room</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: Wifi, label: "Free WiFi" },
              { icon: Car, label: "Secure Parking" },
              { icon: Users, label: "Private Ensuite" },
              { icon: Utensils, label: "Self-Catering Kitchen" },
              { icon: CheckCircle2, label: "Weekly Cleaning" },
              { icon: Shield, label: "CCTV Surveillance" },
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
            Contact us for availability and rates near Durbanville.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold"
            >
              <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20accommodation%20near%20Durbanville.%20Please%20send%20me%20more%20info.">
                Get Quote on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-sage-700 px-8 py-6 text-lg"
            >
              <a href="/rooms">
                View Rooms &amp; Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
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
            Back to All Locations
          </Link>
        </div>
      </section>
    </div>
  )
}

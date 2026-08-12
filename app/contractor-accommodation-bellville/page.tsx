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
  title: "Guesthouse in Bellville | 60 on Kosmos",
  description:
    "Guesthouse accommodation in Bellville South. 60 on Kosmos offers private ensuite rooms for project teams, contractors, and professionals. Secure parking, corporate invoicing, and flexible terms.",
  alternates: {
    canonical: "https://www.60onkosmos.co.za/contractor-accommodation-bellville",
  },
  openGraph: {
    title: "Guesthouse in Bellville | 60 on Kosmos",
    description: "Guesthouse rooms in Bellville South. Secure parking, weekly cleaning, WiFi included. Corporate terms available.",
    url: "https://www.60onkosmos.co.za/contractor-accommodation-bellville",
    type: "website",
  },
}

const breadcrumbItems = [
  { name: "Home", url: "" },
  { name: "Contractor Accommodation", url: "/contractor-accommodation" },
  { name: "Bellville", url: "/contractor-accommodation-bellville" },
]

const faqs = [
  {
    question: "How close is 60 on Kosmos to TAC Business Park and Northlink College?",
    answer:
      "We're based in Bellville South, within easy reach of TAC Business Park, Northlink College, and the surrounding industrial areas — no long commute for local project teams.",
  },
  {
    question: "Is there secure parking for bakkies and work vehicles?",
    answer:
      "Yes. Parking is behind locked gates with 24/7 CCTV, one vehicle per room, and bakkies and work vehicles are welcome.",
  },
  {
    question: "Can you accommodate a full crew or work team?",
    answer:
      "Yes, we can arrange multiple rooms for larger teams. Our Triple Room sleeps 3 at R800/night (R267 per person), with discounted weekly and monthly rates for longer projects.",
  },
  {
    question: "Do you provide invoices for corporate or contractor bookings?",
    answer:
      "Yes, invoices are provided on request for companies and contractors who need booking documentation for expense claims.",
  },
  {
    question: "What are your check-in and check-out times?",
    answer:
      "Check-in is from 14:00 and check-out is by 10:00. Weekly cleaning with fresh linen is included in every stay, along with free WiFi and secure parking.",
  },
]

export default function BellvilleAccommodationPage() {
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
            alt="60 on Kosmos Contractor Accommodation"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>Bellville South</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
              A Guesthouse in Bellville for Project Teams
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Based right here in Bellville South, our guesthouse is the home base for project teams, site crews, and working
              professionals across the wider Bellville and northern suburbs area — close to TAC Business Park, Northlink
              College, and major industrial zones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg"
              >
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20project%20team%20accommodation.%20Please%20send%20me%20a%20quote.">
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
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose 60 on Kosmos in Bellville?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Central Location for Multiple Sites</h3>
                    <p className="text-gray-600">
                      From Bellville to Parow, Stikland, Goodwood, and beyond — all within quick reach. Your ideal project
                      base.
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
                      Invoices are provided on request for contractor and company bookings.
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
                    <h3 className="font-bold mb-2">All Room Types Available</h3>
                    <p className="text-gray-600">
                      Twin, triple, and family rooms. Fully customizable for teams of any size or project duration.
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
                      Gated parking, access control, and on-site management. Complete peace of mind.
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
            Contact us for a custom quote tailored to your project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold"
            >
              <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20project%20team%20accommodation.%20Please%20send%20me%20a%20quote.">
                Get Quote on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-sage-700 px-8 py-6 text-lg"
            >
              <a href="/contractor-accommodation">
                View All Locations
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

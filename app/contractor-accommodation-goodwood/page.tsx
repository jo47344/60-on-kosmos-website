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
  title: "Guesthouse Near Goodwood | 60 on Kosmos, Bellville South",
  description:
    "Guesthouse accommodation near Goodwood, just minutes away. 60 on Kosmos offers private ensuite rooms, secure parking, and flexible corporate terms for project teams.",
  alternates: {
    canonical: "https://www.60onkosmos.co.za/contractor-accommodation-goodwood",
  },
  openGraph: {
    title: "Guesthouse Near Goodwood | 60 on Kosmos",
    description: "Guesthouse rooms for project teams near Goodwood. Secure parking, weekly cleaning, WiFi included.",
    url: "https://www.60onkosmos.co.za/contractor-accommodation-goodwood",
    type: "website",
  },
}

const breadcrumbItems = [
  { name: "Home", url: "" },
  { name: "Contractor Accommodation", url: "/contractor-accommodation" },
  { name: "Goodwood", url: "/contractor-accommodation-goodwood" },
]

const faqs = [
  {
    question: "How far is 60 on Kosmos from Goodwood?",
    answer: "We're just a few minutes' drive from Goodwood and its surrounding industrial areas, based in Bellville South.",
  },
  {
    question: "Is parking secure for work vehicles?",
    answer: "Yes, we offer free gated parking with 24/7 CCTV. Bakkies and work vehicles are welcome, one per room.",
  },
  {
    question: "Can you host a full project team near Goodwood?",
    answer:
      "Yes, we regularly accommodate crews across multiple rooms, with corporate rates for weekly and monthly stays.",
  },
  {
    question: "Do you offer corporate invoicing?",
    answer: "Yes, invoices are provided on request for contractors and companies.",
  },
  {
    question: "What's included in the room rate?",
    answer:
      "Every room includes free WiFi, weekly cleaning, secure parking, and access to our communal self-catering kitchen. Check-in is from 14:00, check-out by 10:00.",
  },
]

export default function GoodwoodAccommodationPage() {
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
            sizes="100vw"
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>Goodwood and Surrounds</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
              A Guesthouse Near Goodwood for Project Teams
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Goodwood and surrounding industrial areas are just minutes from our guesthouse. We provide secure, professional
              accommodation for project teams, contractors, and working professionals — all with full corporate support.
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
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose 60 on Kosmos for Goodwood Teams?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Minutes from Goodwood Industrial</h3>
                    <p className="text-gray-600">
                      Close to all Goodwood sites and surrounding industrial parks. Short commute, better focus for your team.
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
                    <h3 className="font-bold mb-2">Professional Corporate Service</h3>
                    <p className="text-gray-600">
                      Invoices are provided on request, with dedicated account support for large teams and project companies.
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
                    <h3 className="font-bold mb-2">Customized Group Packages</h3>
                    <p className="text-gray-600">
                      From small crews to large shutdowns. We tailor accommodation, pricing, and logistics to your project.
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
                      Full CCTV, vehicle security, access control, and on-site management. Your team is safe and secure.
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

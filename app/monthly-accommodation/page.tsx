import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, DollarSign, Home, Wifi, Car, Utensils, Shield, Clock, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { FAQSchema } from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Monthly Accommodation in Bellville South | 60 on Kosmos",
  description:
    "Monthly accommodation in Bellville South for project teams. Furnished private-ensuite rooms with WiFi, secure gated parking, communal self-catering facilities and weekly housekeeping included. Invoices are provided on request.",
  alternates: {
    canonical: "https://www.60onkosmos.co.za/monthly-accommodation",
  },
  openGraph: {
    title: "Monthly Accommodation in Bellville South | 60 on Kosmos",
    description: "Monthly accommodation in Bellville South for project teams. Furnished private-ensuite rooms with WiFi, secure gated parking, communal self-catering facilities and weekly housekeeping included. Invoices are provided on request.",
    url: "https://www.60onkosmos.co.za/monthly-accommodation",
    type: "website",
    images: [
      {
        url: "https://www.60onkosmos.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Monthly Accommodation Bellville",
      },
    ],
  },
}

const breadcrumbItems = [
  { name: "Home", url: "" },
  { name: "Monthly Accommodation", url: "/monthly-accommodation" },
]

const faqs = [
  {
    question: "What's the minimum stay for monthly rates?",
    answer:
      "Monthly rates apply to stays of 28 nights or more. Stays of 7-27 nights qualify for our discounted weekly rate instead.",
  },
  {
    question: "How much is monthly accommodation?",
    answer:
      "Monthly rates start from R464/night for a Standard Twin Room, with the first month due in full before or on check-in and subsequent months due on the 1st of each calendar month.",
  },
  {
    question: "Is a security deposit required for monthly stays?",
    answer:
      "A refundable security deposit may apply to stays of seven nights or longer. The amount is confirmed on your quotation and refunded via EFT within 7 days of checkout, subject to inspection.",
  },
  {
    question: "What's included in the monthly rate?",
    answer:
      "Free WiFi, weekly cleaning with fresh linen, secure gated parking, and access to our communal self-catering kitchen — all included with no hidden extras.",
  },
  {
    question: "Can I get an invoice for my company?",
    answer:
      "Yes, invoices are provided on request, which is why we're a popular choice for contractors and companies covering staff accommodation.",
  },
]

export default function MonthlyAccommodationPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={breadcrumbItems} />
      <Breadcrumbs items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Monthly Accommodation in Bellville South</h1>
            <p className="text-xl text-gray-600 mb-8">
              Need monthly accommodation in Bellville South for a project team or work assignment? We offer furnished private-ensuite rooms with WiFi, secure gated parking, communal self-catering facilities and weekly housekeeping included. Invoices are provided on request, and multi-room quotations are available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700">
                <Link href="/book-now">Get Monthly Rates</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href="https://wa.me/27745245703?text=Hi%2060%20on%20Kosmos%2C%20I%27m%20enquiring%20about%20monthly%20accommodation%20%2828%2B%20nights%29.%20Number%20of%20people%3A%20%5Bnumber%5D%2C%20preferred%20start%20date%3A%20%5Bdate%5D%2C%20expected%20length%20of%20stay%3A%20%5Bnumber%20of%20months%5D.%20Please%20send%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp for Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">Discounted Rates</h3>
                </div>
                <p className="text-gray-600">Discounted rates available for 28+ night stays</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Home className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">Fully Furnished</h3>
                </div>
                <p className="text-gray-600">Move in ready, no setup needed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Utensils className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">Self-Catering</h3>
                </div>
                <p className="text-gray-600">Communal self-catering kitchenette included</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">Flexible Booking</h3>
                </div>
                <p className="text-gray-600">Month-to-month flexible arrangement</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included in Monthly Accommodation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Wifi className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Free WiFi</h3>
                <p className="text-gray-600">High-speed internet included in monthly rate</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Car className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Free Parking</h3>
                <p className="text-gray-600">Secure parking space for your vehicle</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Utensils className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Communal Self-Catering Kitchenette</h3>
                <p className="text-gray-600">Stove, fridge, microwave, cookware, and utensils</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">24/7 Security</h3>
                <p className="text-gray-600">Safe and secure accommodation</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Home className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Weekly Cleaning</h3>
                <p className="text-gray-600">Professional cleaning service included</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Calendar className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">No Long Lease</h3>
                <p className="text-gray-600">Flexible month-to-month terms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Rates Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Monthly Rates</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-sage-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Room Type</th>
                  <th className="border border-gray-200 px-4 py-3 text-right font-semibold">1–6 nights</th>
                  <th className="border border-gray-200 px-4 py-3 text-right font-semibold">7–27 nights</th>
                  <th className="border border-gray-200 px-4 py-3 text-right font-semibold">28+ nights</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium">Standard Twin</td>
                  <td className="border border-gray-200 px-4 py-3 text-right">R580</td>
                  <td className="border border-gray-200 px-4 py-3 text-right">R522</td>
                  <td className="border border-gray-200 px-4 py-3 text-right">R464</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium">Deluxe Twin</td>
                  <td className="border border-gray-200 px-4 py-3 text-right">R620</td>
                  <td className="border border-gray-200 px-4 py-3 text-right">R585</td>
                  <td className="border border-gray-200 px-4 py-3 text-right">R520</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium">Double</td>
                  <td className="border border-gray-200 px-4 py-3 text-right">R650</td>
                  <td className="border border-gray-200 px-4 py-3 text-right">R612</td>
                  <td className="border border-gray-200 px-4 py-3 text-right">R544</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium">Triple</td>
                  <td className="border border-gray-200 px-4 py-3 text-right">R800</td>
                  <td className="border border-gray-200 px-4 py-3 text-right">R756</td>
                  <td className="border border-gray-200 px-4 py-3 text-right">R672</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-600 text-sm mt-4 italic">Prices per night</p>
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-blue-800 text-sm">
              A refundable security deposit may apply to stays of seven nights or longer. The amount and refund conditions will be stated on your quotation.
            </p>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Contractors</h3>
                <p className="text-gray-600">Long-term project accommodation</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Students</h3>
                <p className="text-gray-600">Semester or academic year stays</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Professionals</h3>
                <p className="text-gray-600">Temporary work assignments</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">More Accommodation Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">
                  <Link href="/contractor-accommodation" className="text-sage-600 hover:text-sage-700">
                    Contractor Accommodation
                  </Link>
                </h3>
                <p className="text-gray-600">Special rates for contractors</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">
                  <Link href="/self-catering-rooms" className="text-sage-600 hover:text-sage-700">
                    Self-Catering Rooms
                  </Link>
                </h3>
                <p className="text-gray-600">Budget-friendly with kitchen facilities</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">
                  <Link href="/student-faq" className="text-sage-600 hover:text-sage-700">
                    Student Accommodation
                  </Link>
                </h3>
                <p className="text-gray-600">Near UWC and CPUT campuses</p>
              </CardContent>
            </Card>
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
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Monthly Accommodation?</h2>
          <p className="text-xl mb-8 text-sage-50">
            Get a custom quote for your long-term stay. Flexible terms and discounted rates available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/book-now">Request Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-sage-600"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

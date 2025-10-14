import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Briefcase, GraduationCap, Users, Phone, Calculator, FileText, Clock } from "lucide-react"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Monthly Accommodation Bellville South | Long-Term Discounts",
  description:
    "Discounted monthly rates for long stays. Ideal for contractors, students, or families relocating to Bellville South. Invoices provided.",
  keywords:
    "monthly accommodation Bellville, long-term stay Bellville South, monthly rates Cape Town, contractor monthly rates, student accommodation monthly",
  openGraph: {
    title: "Monthly Accommodation Bellville South | Long-Term Discounts",
    description: "Discounted monthly rates for contractors, students, and families in Bellville South.",
  },
}

export default function MonthlyAccommodationPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Monthly Accommodation Bellville", url: "/monthly-accommodation-bellville" },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen">
        {/* Breadcrumbs */}
        <div className="bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex text-sm text-gray-600">
              <Link href="/" className="hover:text-sage-600">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Monthly Accommodation Bellville</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center">
          <Image
            src="/images/exterior-building.png"
            alt="Monthly accommodation Bellville South with discounted long-term rates"
            fill
            className="object-cover brightness-50"
            priority
            sizes="100vw"
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Monthly Accommodation in Bellville South</h1>
            <p className="text-xl mb-6">
              Save with our discounted monthly rates! Perfect for contractors, students, and families relocating to Cape
              Town. Invoices provided for business expenses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a
                  href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20a%20monthly%20rate%20quote%20for%20Bellville%20South"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get Monthly Rate Quote
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-sage-600 hover:bg-sage-50">
                <a href="tel:+27745245703">Call 074 524 5703</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Monthly Accommodation in Bellville?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Better rates, less hassle, more flexibility than traditional rentals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Calculator className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Save Money</h3>
                <p className="text-sm text-gray-600">
                  Discounted rates for stays of 30+ days. Much cheaper than hotels!
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Invoices Provided</h3>
                <p className="text-sm text-gray-600">Perfect for contractors and companies needing documentation</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">No Long Leases</h3>
                <p className="text-sm text-gray-600">Flexible terms - no 12-month contracts or deposits required</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CheckCircle2 className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">All Inclusive</h3>
                <p className="text-sm text-gray-600">WiFi, parking, cleaning, and utilities included in monthly rate</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Perfect Monthly Accommodation For:</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <Briefcase className="w-16 h-16 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-center mb-3">Contractors & Workers</h3>
                <p className="text-gray-600 mb-4">
                  Working on projects in Bellville or Cape Town? Save with our monthly contractor rates.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Close to Bellville Industrial Area</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Detailed invoices for expenses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Secure parking for work vehicles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>WiFi for project updates</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                    <Link href="/contractor-accommodation-bellville">Contractor Rates</Link>
                  </Button>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <GraduationCap className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-center mb-3">Students</h3>
                <p className="text-gray-600 mb-4">
                  Studying at UWC? Our monthly rates are perfect for the academic year or semester.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Only 5km from UWC campus</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Quiet study environment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Free high-speed WiFi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Self-catering option available</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href="/near-uwc-bellville">Student Accommodation</Link>
                  </Button>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-center mb-3">Families & Relocators</h3>
                <p className="text-gray-600 mb-4">
                  Moving to Cape Town? Stay with us while house-hunting or settling in.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Flexible month-to-month terms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Safe, established neighborhood</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Close to schools and amenities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Triple rooms for families</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                    <Link href="/rooms">View Family Rooms</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/twin-room-yellow.png"
                  alt="Monthly accommodation room in Bellville South with ensuite bathroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Included in Your Monthly Rate?</h2>
                <p className="text-gray-600 mb-6">
                  Everything you need for a comfortable long-term stay in Bellville South:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Private Ensuite Room</strong>
                      <p className="text-gray-600">Your own bathroom and living space</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Free High-Speed WiFi</strong>
                      <p className="text-gray-600">Unlimited internet for work and streaming</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Secure Parking</strong>
                      <p className="text-gray-600">Free parking with 24/7 CCTV security</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Weekly Cleaning</strong>
                      <p className="text-gray-600">Fresh linen and towels every week</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Communal Kitchenette</strong>
                      <p className="text-gray-600">Gas stove, microwave, and air fryer access</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">All Utilities Included</strong>
                      <p className="text-gray-600">Electricity and water included in monthly rate</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Professional Invoicing</strong>
                      <p className="text-gray-600">Detailed invoices for business expenses</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-sage-50 border border-sage-200 rounded-lg">
                  <p className="text-sage-800 font-semibold">
                    💰 Contact us for personalized monthly rate quotes based on room type and length of stay
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Info */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                How Monthly Rates Work at 60 on Kosmos
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sage-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Contact Us for a Quote</h3>
                    <p className="text-gray-600">
                      WhatsApp or call us with your preferred room type and length of stay. We'll provide a discounted
                      monthly rate immediately.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sage-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Reserve Your Room</h3>
                    <p className="text-gray-600">
                      First month's payment secures your booking. We'll send you an invoice and banking details for EFT
                      payment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sage-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Move In & Settle</h3>
                    <p className="text-gray-600">
                      Check in from 2PM on your start date. Payment is due at the beginning of each month. Extend
                      month-to-month as needed.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-semibold text-lg mb-3">Payment Options</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                      <span>EFT/Bank Transfer (preferred method)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                      <span>Invoices emailed immediately after payment</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                      <span>Company bookings welcome</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Options */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Accommodation Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Extended Stay Hotel</h3>
                <p className="text-gray-600 mb-4">Flexible long-term accommodation for students and professionals</p>
                <Button asChild variant="outline" className="w-full border-sage-600 text-sage-600 bg-transparent">
                  <Link href="/extended-stay-hotel-bellville">Learn More</Link>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Self-Catering Accommodation</h3>
                <p className="text-gray-600 mb-4">Cook your own meals with communal kitchenette access</p>
                <Button asChild variant="outline" className="w-full border-sage-600 text-sage-600 bg-transparent">
                  <Link href="/self-catering-accommodation-bellville">Learn More</Link>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Contractor Accommodation</h3>
                <p className="text-gray-600 mb-4">Special rates for contractors working in Bellville area</p>
                <Button asChild variant="outline" className="w-full border-sage-600 text-sage-600 bg-transparent">
                  <Link href="/contractor-accommodation-bellville">Learn More</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-sage-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Monthly Rate Quote Today</h2>
            <p className="text-xl mb-8 opacity-90">Contact us now for discounted long-term rates in Bellville South</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-sage-600 hover:bg-gray-100">
                <a
                  href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20a%20monthly%20rate%20quote%20for%20Bellville%20South"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get Quote on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-sage-700 bg-transparent"
              >
                <a href="tel:+27745245703">Call 074 524 5703</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

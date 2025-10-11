import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, DollarSign, Shield, Wifi, Phone, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Monthly Accommodation Bellville South | Long-Term Rooms from R15,900/month",
  description:
    "Affordable monthly accommodation Bellville South from R15,900/month. Perfect for contractors, locum doctors, long-term workers. Ensuite rooms, WiFi, parking, CCTV. Flexible lease terms.",
  keywords:
    "monthly accommodation bellville south, long term rooms bellville south, extended stay bellville, monthly rental bellville south, contractor monthly rates cape town, long term guesthouse bellville",
}

export default function MonthlyAccommodationPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-sage-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Monthly Accommodation</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-sage-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-green-600 text-white px-6 py-2 rounded-full mb-4 font-bold">
                SAVE UP TO 40% ON MONTHLY RATES
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Monthly Accommodation Bellville South — Long-Term Rooms from R15,900/month
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Need accommodation for 1-6 months? Get massive discounts on long-term stays. Perfect for contractors,
                locum doctors, nurses, and workers on extended projects in Cape Town.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 font-semibold">
                  ✓ No lease. No deposits. No hidden fees. Pay monthly by bank transfer or cash.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <a
                    href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20monthly%20accommodation%20in%20Bellville%20South"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp for Monthly Quote
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent">
                  <a href="tel:+27745245703">📞 Call 074 524 5703</a>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/sage-double-room.png"
                alt="Monthly accommodation Bellville South - long term room rental with ensuite bathroom"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Rates Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Monthly Rates — Massive Savings</h2>
          <p className="text-center text-gray-600 mb-8">All rooms include WiFi, secure parking, and utilities</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-sage-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Standard Twin</h3>
                <div className="mb-4">
                  <div className="text-sm text-gray-500 line-through">Daily: R530 × 30 = R15,900</div>
                  <div className="text-3xl font-bold text-green-600">R13,500/month</div>
                  <div className="text-sm text-green-700 font-semibold">Save R2,400 (15%)</div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                    <span>Two single beds</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                    <span>Ensuite bathroom</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                    <span>Bar fridge, WiFi, parking</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                  <a
                    href="https://wa.me/27745245703?text=Hi%2C%20I%20want%20the%20Standard%20Twin%20monthly%20rate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Monthly
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-sage-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Deluxe Twin</h3>
                <div className="mb-4">
                  <div className="text-sm text-gray-500 line-through">Daily: R580 × 30 = R17,400</div>
                  <div className="text-3xl font-bold text-green-600">R14,500/month</div>
                  <div className="text-sm text-green-700 font-semibold">Save R2,900 (17%)</div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                    <span>Premium twin beds</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                    <span>Navy blue headboards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                    <span>Modern decor & finishes</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                  <a
                    href="https://wa.me/27745245703?text=Hi%2C%20I%20want%20the%20Deluxe%20Twin%20monthly%20rate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Monthly
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-sage-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Double Room</h3>
                <div className="mb-4">
                  <div className="text-sm text-gray-500 line-through">Daily: R620 × 30 = R18,600</div>
                  <div className="text-3xl font-bold text-green-600">R15,900/month</div>
                  <div className="text-sm text-green-700 font-semibold">Save R2,700 (14%)</div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                    <span>Comfortable double bed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                    <span>Ensuite bathroom</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                    <span>Perfect for solo contractors</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                  <a
                    href="https://wa.me/27745245703?text=Hi%2C%20I%20want%20the%20Double%20Room%20monthly%20rate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Monthly
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Need accommodation for 3-6 months?</h3>
            <p className="text-gray-700 mb-4">Get even bigger discounts! WhatsApp us for custom long-term rates.</p>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <a
                href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20accommodation%20for%203-6%20months"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Custom Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Monthly */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Monthly Accommodation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Save Money</h3>
              <p className="text-gray-600 text-sm">Up to 40% cheaper than daily rates. No booking fees.</p>
            </Card>
            <Card className="text-center p-6">
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Flexible Terms</h3>
              <p className="text-gray-600 text-sm">No long lease. Stay 1-6 months. Extend if needed.</p>
            </Card>
            <Card className="text-center p-6">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Everything Included</h3>
              <p className="text-gray-600 text-sm">WiFi, parking, utilities, cleaning—all in one price.</p>
            </Card>
            <Card className="text-center p-6">
              <Wifi className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Home Comforts</h3>
              <p className="text-gray-600 text-sm">Private room, kitchen access, laundry nearby.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Perfect For Long-Term Stays</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Contractors & Site Workers</h3>
              <p className="text-gray-600 text-sm">
                Working on a 2-3 month construction project in Bellville or Cape Town? Save money on accommodation and
                stay close to Sacks Circle industrial area.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Locum Doctors & Nurses</h3>
              <p className="text-gray-600 text-sm">
                On assignment at Tygerberg Hospital? Get affordable monthly rates just 8km away with secure parking for
                night shifts.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Relocating Professionals</h3>
              <p className="text-gray-600 text-sm">
                Moving to Cape Town for work? Stay with us while you look for permanent accommodation. No lease
                pressure.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Students & Interns</h3>
              <p className="text-gray-600 text-sm">
                Studying at UWC or CPUT for a semester? Monthly rates beat student res costs. Close to campus.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Remote Workers</h3>
              <p className="text-gray-600 text-sm">
                Working remotely from Cape Town? Get fast WiFi, quiet workspace, and affordable long-term rates.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Between Homes</h3>
              <p className="text-gray-600 text-sm">
                House sold but new one not ready? Need temporary accommodation while renovating? We've got you covered.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 italic mb-4">
              "Stayed for 3 months while working on a project in Bellville. Much cheaper than a hotel and the room was
              spotless. Felt safe parking my van overnight."
            </blockquote>
            <div className="font-semibold text-gray-900">– David M., Contractor</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Monthly Accommodation?</h2>
          <p className="text-xl mb-8 opacity-90">
            WhatsApp us now for availability and custom long-term rates. Move in this week!
          </p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            <a
              href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20monthly%20accommodation%20in%20Bellville%20South"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp for Monthly Quote
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

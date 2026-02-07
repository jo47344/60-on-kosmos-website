import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Wifi, Car, Phone, Clock, Home } from "lucide-react"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Serviced Accommodation in Bellville | 60 on Kosmos",
  description:
    "Weekly serviced rooms with fresh linen and flexible check-ins. Ideal for business or short stays near Tygerberg Hospital and Bellville Industrial.",
  keywords:
    "serviced accommodation Bellville, weekly rooms Bellville, business accommodation Bellville South, serviced guesthouse Cape Town, weekly cleaning service",
  alternates: { canonical: "https://60onkosmos.co.za/serviced-accommodation-bellville" },
  openGraph: {
    title: "Serviced Accommodation in Bellville | 60 on Kosmos",
    description: "Weekly serviced rooms with fresh linen and flexible check-ins near Tygerberg Hospital.",
  },
}

export default function ServicedAccommodationPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Serviced Accommodation Bellville", url: "/serviced-accommodation-bellville" },
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
              <span className="text-gray-900">Serviced Accommodation Bellville</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center">
          <Image
            src="/images/twin-room-yellow.png"
            alt="Serviced accommodation Bellville South with weekly cleaning and fresh linen"
            fill
            className="object-cover brightness-50"
            priority
            sizes="100vw"
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Serviced Accommodation in Bellville South</h1>
            <p className="text-xl mb-6">
              Weekly serviced rooms with fresh linen, flexible check-ins, and professional cleaning service. Perfect for
              business travelers and short stays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a
                  href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20serviced%20accommodation%20in%20Bellville%20South"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book Direct on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-sage-600 hover:bg-sage-50">
                <a href="tel:+27745245703">Call 074 524 5703</a>
              </Button>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included in Our Serviced Accommodation</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional weekly service for hassle-free stays in Bellville South
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Home className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Weekly Cleaning</h3>
                <p className="text-sm text-gray-600">Professional cleaning service every week with fresh linen</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Flexible Check-in</h3>
                <p className="text-sm text-gray-600">Check in from 2PM with late arrival options available</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Wifi className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Free WiFi</h3>
                <p className="text-sm text-gray-600">High-speed internet perfect for remote work</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Car className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Secure Parking</h3>
                <p className="text-sm text-gray-600">Free parking behind locked gates with CCTV</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Room Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Perfect for Business Travelers & Short Stays in Bellville
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Private Ensuite Bathroom</strong>
                      <p className="text-gray-600">No shared facilities - your own bathroom with shower</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Fresh Linen Weekly</strong>
                      <p className="text-gray-600">Clean sheets and towels provided every week</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Bar Fridge in Room</strong>
                      <p className="text-gray-600">Store your drinks and snacks conveniently</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Welcome Refreshments</strong>
                      <p className="text-gray-600">Tea, coffee, rusks, and milk included</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">24/7 Security</strong>
                      <p className="text-gray-600">CCTV monitoring and secure access for peace of mind</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700">
                    <Link href="/rooms">View Available Rooms</Link>
                  </Button>
                </div>
              </div>

              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/deluxe-twin-navy.jpg"
                  alt="Serviced twin room in Bellville South with fresh linen and weekly cleaning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Location Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Prime Location in Bellville South</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Perfect for Business Travelers</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Close to Bellville Industrial Area</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>8km from Tygerberg Hospital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Easy N1 highway access to Cape Town CBD</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Near major business hubs</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Convenient Amenities Nearby</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>SPAR Kasselsvlei Centre - 2km (groceries, pharmacy)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Restaurants and takeaways nearby</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Bellville Station - 6km (train access)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Public transport routes available</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Accommodation Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Contractor Accommodation</h3>
                <p className="text-gray-600 mb-4">
                  Long-term stays for contractors working in Bellville Industrial Area
                </p>
                <Button asChild variant="outline" className="w-full border-sage-600 text-sage-600 bg-transparent">
                  <Link href="/contractor-accommodation-bellville">Learn More</Link>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Monthly Accommodation</h3>
                <p className="text-gray-600 mb-4">Discounted rates for stays of 30 days or longer in Bellville</p>
                <Button asChild variant="outline" className="w-full border-sage-600 text-sage-600 bg-transparent">
                  <Link href="/monthly-accommodation-bellville">Learn More</Link>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Self-Catering Accommodation</h3>
                <p className="text-gray-600 mb-4">Access to shared kitchenette for preparing your own meals</p>
                <Button asChild variant="outline" className="w-full border-sage-600 text-sage-600 bg-transparent">
                  <Link href="/self-catering-accommodation-bellville">Learn More</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-sage-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Serviced Accommodation?</h2>
            <p className="text-xl mb-8 opacity-90">Contact us directly on WhatsApp for rates and availability</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-sage-600 hover:bg-gray-100">
                <a
                  href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20serviced%20accommodation%20in%20Bellville%20South"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book Direct on WhatsApp
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

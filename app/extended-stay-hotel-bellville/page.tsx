import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, GraduationCap, Briefcase, Users, Phone } from "lucide-react"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Extended Stay Hotel in Bellville | Long-Term Rooms",
  description:
    "Affordable long-term rooms for students and professionals. Free Wi-Fi, parking, and flexible check-ins near Tygerberg Hospital and UWC.",
  keywords:
    "extended stay hotel Bellville, long-term accommodation Bellville South, student accommodation Bellville, professional lodging Cape Town",
  openGraph: {
    title: "Extended Stay Hotel in Bellville | Long-Term Rooms",
    description: "Affordable long-term rooms near UWC and Tygerberg Hospital with free WiFi and parking.",
  },
}

export default function ExtendedStayHotelPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Extended Stay Hotel Bellville", url: "/extended-stay-hotel-bellville" },
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
              <span className="text-gray-900">Extended Stay Hotel Bellville</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center">
          <Image
            src="/images/triple-room-full.jpg"
            alt="Extended stay hotel rooms in Bellville South for long-term accommodation"
            fill
            className="object-cover brightness-50"
            priority
            sizes="100vw"
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Extended Stay Hotel in Bellville South</h1>
            <p className="text-xl mb-6">
              Comfortable long-term accommodation for students, professionals, and families near UWC and Tygerberg
              Hospital. Monthly discounts available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a
                  href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20extended%20stay%20accommodation%20in%20Bellville%20South"
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

        {/* Who It's For */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect for Extended Stays in Bellville</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Whether you're studying, working, or relocating to Cape Town
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <GraduationCap className="w-16 h-16 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Students</h3>
                <p className="text-gray-600 mb-4">
                  Only 5km from UWC campus. Perfect for students needing affordable long-term accommodation during the
                  academic year.
                </p>
                <ul className="text-sm text-gray-600 text-left space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Free WiFi for online learning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Quiet study environment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Close to campus</span>
                  </li>
                </ul>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <Briefcase className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Young Professionals</h3>
                <p className="text-gray-600 mb-4">
                  Working in Bellville or Cape Town? Enjoy hassle-free accommodation with flexible terms and no
                  long-term leases.
                </p>
                <ul className="text-sm text-gray-600 text-left space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Weekly cleaning service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Secure parking included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Easy N1 access to work</span>
                  </li>
                </ul>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Families & Relocators</h3>
                <p className="text-gray-600 mb-4">
                  Relocating to Cape Town? Bridge the gap while house-hunting with our comfortable extended stay rooms.
                </p>
                <ul className="text-sm text-gray-600 text-left space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Flexible check-in dates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Safe neighborhood</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Monthly rate discounts</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Everything Included for Extended Stays in Bellville
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Private Ensuite Rooms</strong>
                      <p className="text-gray-600">Your own bathroom and living space for comfort and privacy</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Free High-Speed WiFi</strong>
                      <p className="text-gray-600">Perfect for remote work, online classes, or staying connected</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Weekly Cleaning Service</strong>
                      <p className="text-gray-600">Fresh linen and towels every week - no hassle</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Secure Parking</strong>
                      <p className="text-gray-600">Free parking behind locked gates with CCTV monitoring</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Self-Catering Option</strong>
                      <p className="text-gray-600">Access to communal kitchenette for preparing your own meals</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Flexible Terms</strong>
                      <p className="text-gray-600">No long-term leases required - stay as long as you need</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    💰 Monthly Rate Discounts Available - Contact us for long-term pricing
                  </p>
                </div>
              </div>

              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/deluxe-twin-navy.jpg"
                  alt="Extended stay hotel room in Bellville South with ensuite bathroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Convenient Location in Bellville South
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Close to Key Locations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>
                      <strong>5km to UWC</strong> - Perfect for students and university staff
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>
                      <strong>8km to Tygerberg Hospital</strong> - Ideal for medical professionals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>
                      <strong>Easy N1 Access</strong> - 20km to Cape Town CBD
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>
                      <strong>6km to Bellville Station</strong> - Public transport available
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Nearby Amenities</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>
                      <strong>SPAR Centre 2km</strong> - Groceries, pharmacy, banking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>
                      <strong>Restaurants & Takeaways</strong> - Multiple dining options nearby
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>
                      <strong>Safe Neighborhood</strong> - Established residential area
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>
                      <strong>Public Transport</strong> - Taxi routes and train access
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Options */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Accommodation Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Monthly Accommodation</h3>
                <p className="text-gray-600 mb-4">Get the best rates for stays of 30 days or longer</p>
                <Button asChild variant="outline" className="w-full border-sage-600 text-sage-600 bg-transparent">
                  <Link href="/monthly-accommodation-bellville">Learn More</Link>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Self-Catering Accommodation</h3>
                <p className="text-gray-600 mb-4">Cook your own meals with kitchenette access</p>
                <Button asChild variant="outline" className="w-full border-sage-600 text-sage-600 bg-transparent">
                  <Link href="/self-catering-accommodation-bellville">Learn More</Link>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Serviced Accommodation</h3>
                <p className="text-gray-600 mb-4">Weekly cleaning and linen service included</p>
                <Button asChild variant="outline" className="w-full border-sage-600 text-sage-600 bg-transparent">
                  <Link href="/serviced-accommodation-bellville">Learn More</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-sage-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Extended Stay?</h2>
            <p className="text-xl mb-8 opacity-90">Contact us for monthly rates and availability in Bellville South</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-sage-600 hover:bg-gray-100">
                <a
                  href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20extended%20stay%20accommodation%20in%20Bellville%20South"
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

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, UtensilsCrossed, Microwave, Coffee, Phone, Flame } from "lucide-react"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Self-Catering Accommodation Bellville | Kitchenette Access",
  description:
    "Ensuite rooms with shared kitchenette (bar fridge, kettle, two-plate stove, air fryer). Ideal for independent guests and families in Bellville South.",
  keywords:
    "self-catering accommodation Bellville, kitchenette accommodation Bellville South, self-catering guesthouse Cape Town, cook your own meals Bellville",
  alternates: { canonical: "https://60onkosmos.co.za/self-catering-accommodation-bellville" },
  openGraph: {
    title: "Self-Catering Accommodation Bellville | Kitchenette Access",
    description: "Ensuite rooms with shared kitchenette access for cooking your own meals in Bellville South.",
  },
}

export default function SelfCateringAccommodationPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Self-Catering Accommodation Bellville", url: "/self-catering-accommodation-bellville" },
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
              <span className="text-gray-900">Self-Catering Accommodation Bellville</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center">
          <Image
            src="/images/double-room.png"
            alt="Self-catering accommodation Bellville South with kitchenette access"
            fill
            className="object-cover brightness-50"
            priority
            sizes="100vw"
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Self-Catering Accommodation in Bellville South</h1>
            <p className="text-xl mb-6">
              Cook your own meals with access to our communal kitchenette. Perfect for independent travelers and
              families staying in Bellville.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a
                  href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20self-catering%20accommodation%20in%20Bellville%20South"
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

        {/* Kitchenette Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Communal Kitchenette Facilities</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Prepare your own meals with our fully equipped shared kitchen area
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Flame className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Gas Stove</h3>
                <p className="text-sm text-gray-600">Two-plate gas stove for cooking hot meals</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Microwave className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Microwave</h3>
                <p className="text-sm text-gray-600">Quickly heat up meals and beverages</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <UtensilsCrossed className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Air Fryer</h3>
                <p className="text-sm text-gray-600">Healthy cooking option for quick meals</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Coffee className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Basic Utensils</h3>
                <p className="text-sm text-gray-600">Pots, pans, plates, and cutlery provided</p>
              </Card>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/sage-double-room.png"
                  alt="Self-catering ensuite room in Bellville South with bar fridge"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Everything You Need for Self-Catering in Bellville
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Private Ensuite Room</strong>
                      <p className="text-gray-600">Your own bathroom and sleeping space</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Bar Fridge in Room</strong>
                      <p className="text-gray-600">Store your groceries and beverages privately</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Shared Kitchenette Access</strong>
                      <p className="text-gray-600">Gas stove, microwave, air fryer, and utensils</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">SPAR 2km Away</strong>
                      <p className="text-gray-600">Easy access to groceries and essentials</p>
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
                      <strong className="text-gray-900">Free WiFi & Parking</strong>
                      <p className="text-gray-600">Stay connected and park securely</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700">
                    <Link href="/rooms">View Available Rooms</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Self-Catering in Bellville South?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Save Money</h3>
                <p className="text-gray-600">
                  Cook your own meals and save on restaurant costs. Perfect for longer stays and budget-conscious
                  travelers.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Eat Healthy</h3>
                <p className="text-gray-600">
                  Prepare nutritious meals to your preference. Great for dietary restrictions or special meal plans.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Feel at Home</h3>
                <p className="text-gray-600">
                  Enjoy the comfort and flexibility of preparing meals on your schedule, just like at home.
                </p>
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
                <p className="text-gray-600 mb-4">Long-term stays with discounted monthly rates in Bellville South</p>
                <Button asChild variant="outline" className="w-full border-sage-600 text-sage-600 bg-transparent">
                  <Link href="/monthly-accommodation-bellville">Learn More</Link>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Extended Stay Hotel</h3>
                <p className="text-gray-600 mb-4">Perfect for students and professionals needing longer-term rooms</p>
                <Button asChild variant="outline" className="w-full border-sage-600 text-sage-600 bg-transparent">
                  <Link href="/extended-stay-hotel-bellville">Learn More</Link>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Serviced Accommodation</h3>
                <p className="text-gray-600 mb-4">Weekly cleaning service with fresh linen for hassle-free stays</p>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Book Self-Catering Accommodation?</h2>
            <p className="text-xl mb-8 opacity-90">Message us on WhatsApp for rates and availability</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-sage-600 hover:bg-gray-100">
                <a
                  href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20self-catering%20accommodation%20in%20Bellville%20South"
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

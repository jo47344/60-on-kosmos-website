import type { Metadata } from "next"
import Link from "next/link"
import { Utensils, DollarSign, Home, Wifi, Car, Shield, Coffee, Refrigerator, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { FAQSchema } from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Self-Catering Rooms | Budget",
  description:
    "Affordable self-catering rooms in Bellville South. Communal self-catering kitchenette, free WiFi, secure parking. Perfect for budget travelers, students, and long-term stays. Book direct.",
  alternates: {
    canonical: "https://www.60onkosmos.co.za/self-catering-rooms",
  },
}

const breadcrumbItems = [
  { name: "Home", url: "" },
  { name: "Self-Catering Rooms", url: "/self-catering-rooms" },
]

const faqs = [
  {
    question: "What cooking facilities are available?",
    answer:
      "Our communal kitchenette has a gas stove, microwave, air fryer, and kettle. Deluxe Twin, Double, and Triple rooms also include their own bar fridge.",
  },
  {
    question: "Is self-catering accommodation cheaper than full-board options?",
    answer:
      "Yes, self-catering rooms start from R580/night, with discounted weekly and monthly rates, making it a budget-friendly option compared to serviced hotels.",
  },
  {
    question: "Do I need to bring my own cookware?",
    answer:
      "No, basic cooking utensils are provided in the communal kitchen. There's also a SPAR supermarket 2km away for groceries.",
  },
  {
    question: "Is parking included?",
    answer: "Yes, free secure gated parking with 24/7 CCTV is included with every room.",
  },
  {
    question: "How often is the room cleaned?",
    answer: "We provide weekly cleaning, including fresh linen and towels, to help keep our self-catering rates affordable.",
  },
]

export default function SelfCateringRoomsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={breadcrumbItems} />
      <Breadcrumbs items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Utensils className="w-4 h-4" />
              <span>Budget-Friendly Self-Catering</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Self-Catering Rooms in Bellville</h1>
            <p className="text-xl text-gray-600 mb-8">
              Affordable accommodation with a communal self-catering kitchenette. Save money by cooking your own meals while enjoying
              comfortable, private rooms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700">
                <Link href="/book-now">Book Your Room</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20self-catering%20rooms">
                  WhatsApp Us
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
                  <h3 className="font-semibold text-lg">Save Money</h3>
                </div>
                <p className="text-gray-600">Cook your own meals and save</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Utensils className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">Self-Catering Kitchenette</h3>
                </div>
                <p className="text-gray-600">Communal cooking facilities included</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Home className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">Private Rooms</h3>
                </div>
                <p className="text-gray-600">Your own comfortable space</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Wifi className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">Free WiFi</h3>
                </div>
                <p className="text-gray-600">High-speed internet included</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kitchen Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Communal Self-Catering Kitchenette</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Refrigerator className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Communal Kitchenette</h3>
                <p className="text-gray-600">Shared cooking facilities for guest use</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Utensils className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">4-Plate Stove</h3>
                <p className="text-gray-600">Cook full meals with ease</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Coffee className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Microwave</h3>
                <p className="text-gray-600">Quick heating and reheating</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Utensils className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Cookware & Utensils</h3>
                <p className="text-gray-600">Pots, pans, plates, cutlery provided</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Home className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Dining Area</h3>
                <p className="text-gray-600">Table and chairs for comfortable dining</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Clean & Maintained</h3>
                <p className="text-gray-600">Weekly cleaning service included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Wifi className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Free WiFi</h3>
                <p className="text-gray-600">High-speed internet access</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Car className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Free Parking</h3>
                <p className="text-gray-600">Secure parking on premises</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">CCTV-Monitored Property</h3>
                <p className="text-gray-600">CCTV and ADT armed response, plus secure gated parking</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Home className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Weekly Cleaning</h3>
                <p className="text-gray-600">Professional cleaning service</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Utensils className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Kitchen Supplies</h3>
                <p className="text-gray-600">Dish soap, sponges, and basics</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Home className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Comfortable Beds</h3>
                <p className="text-gray-600">Quality mattresses and linen</p>
              </div>
            </div>
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
                  <Link href="/monthly-accommodation" className="text-sage-600 hover:text-sage-700">
                    Monthly Accommodation
                  </Link>
                </h3>
                <p className="text-gray-600">Discounted rates for long-term stays</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Book Self-Catering Accommodation?</h2>
          <p className="text-xl mb-8 text-sage-50">
            Save money and enjoy the flexibility of cooking your own meals. Book your self-catering room today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/book-now">Book Now</Link>
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

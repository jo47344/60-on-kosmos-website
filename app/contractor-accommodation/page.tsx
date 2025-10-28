import type { Metadata } from "next"
import Link from "next/link"
import { Briefcase, DollarSign, Calendar, Wifi, Car, Utensils, Shield, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contractor Accommodation Bellville | Long-Term Rates for Construction Workers",
  description:
    "Affordable contractor accommodation in Bellville South. Special monthly rates, self-catering rooms, free WiFi and parking. Perfect for construction workers and project teams. Book direct.",
  alternates: {
    canonical: "https://60onkosmos.co.za/contractor-accommodation",
  },
}

export default function ContractorAccommodationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              <span>Contractor Accommodation Specialist</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contractor Accommodation in Bellville</h1>
            <p className="text-xl text-gray-600 mb-8">
              Affordable long-term accommodation for contractors and construction workers. Special monthly rates,
              self-catering facilities, and all amenities included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700">
                <Link href="/book-now">Get Contractor Rates</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20contractor%20accommodation%20rates">
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
                  <h3 className="font-semibold text-lg">Special Rates</h3>
                </div>
                <p className="text-gray-600">Discounted monthly contractor rates</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">Flexible Terms</h3>
                </div>
                <p className="text-gray-600">Month-to-month, no long lease</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Utensils className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">Self-Catering</h3>
                </div>
                <p className="text-gray-600">Full kitchen facilities included</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Car className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">Free Parking</h3>
                </div>
                <p className="text-gray-600">Secure parking for work vehicles</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Contractors Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Contractors Choose 60 on Kosmos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <DollarSign className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Affordable Monthly Rates</h3>
                <p className="text-gray-600">Up to 30% off nightly rates for long-term stays</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Utensils className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Self-Catering Kitchens</h3>
                <p className="text-gray-600">Save money by cooking your own meals</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Wifi className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Free WiFi</h3>
                <p className="text-gray-600">Stay connected with family and work</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Car className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Secure Parking</h3>
                <p className="text-gray-600">Safe parking for work vehicles and tools</p>
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
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <Briefcase className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Construction Workers</h3>
                <p className="text-gray-600">Long-term project accommodation</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Briefcase className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Project Teams</h3>
                <p className="text-gray-600">Multiple rooms for your crew</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Briefcase className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Tradespeople</h3>
                <p className="text-gray-600">Electricians, plumbers, carpenters</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Briefcase className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Site Managers</h3>
                <p className="text-gray-600">Comfortable accommodation near sites</p>
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
                  <Link href="/monthly-accommodation" className="text-sage-600 hover:text-sage-700">
                    Monthly Accommodation
                  </Link>
                </h3>
                <p className="text-gray-600">Flexible long-term accommodation</p>
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
                  <Link href="/rooms" className="text-sage-600 hover:text-sage-700">
                    View All Rooms
                  </Link>
                </h3>
                <p className="text-gray-600">See our full range of accommodation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Contractor Accommodation?</h2>
          <p className="text-xl mb-8 text-sage-50">
            Get a custom quote for your project team. Special rates for long-term contractor stays.
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

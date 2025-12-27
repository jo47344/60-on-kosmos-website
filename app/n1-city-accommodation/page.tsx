import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, ShoppingBag, Briefcase, Car, Wifi, Home, Utensils, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "N1 City Accommodation Bellville | 10km to N1 City Mall",
  description:
    "Convenient accommodation near N1 City Mall. Just 10km away with easy highway access. Perfect for construction workers, contractors, and business travelers. Self-catering rooms with free WiFi and parking.",
  alternates: {
    canonical: "https://60onkosmos.co.za/n1-city-accommodation",
  },
}

export default function N1CityAccommodationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>10km to N1 City Mall</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Accommodation Near N1 City</h1>
            <p className="text-xl text-gray-600 mb-8">
              Convenient accommodation just 10km from N1 City Mall. Perfect for construction workers on N1 City
              projects, contractors, and business travelers. Easy highway access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700">
                <Link href="/book-now">Book Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20accommodation%20near%20N1%20City">
                  WhatsApp for Rates
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">10km to N1 City</h3>
                </div>
                <p className="text-gray-600">Easy access via N1 highway</p>
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
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">Contractor Rates</h3>
                </div>
                <p className="text-gray-600">Special rates for project teams</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Utensils className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">Self-Catering</h3>
                </div>
                <p className="text-gray-600">Full kitchen facilities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Our Location Works for N1 City Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Car className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Quick Commute</h3>
                <p className="text-gray-600">Just 15 minutes to N1 City via N1 highway - no traffic hassles</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Central Location</h3>
                <p className="text-gray-600">Easy access to surrounding construction sites and business areas</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ShoppingBag className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Shopping Nearby</h3>
                <p className="text-gray-600">Local shops and supermarkets within walking distance</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Wifi className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Free WiFi</h3>
                <p className="text-gray-600">Stay connected after work</p>
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
                <p className="text-gray-600">N1 City building projects</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Briefcase className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Contractors</h3>
                <p className="text-gray-600">Long-term project accommodation</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <ShoppingBag className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Retail Workers</h3>
                <p className="text-gray-600">Mall staff temporary housing</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Briefcase className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Business Travelers</h3>
                <p className="text-gray-600">Meetings at N1 City offices</p>
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
                  <Link href="/monthly-accommodation" className="text-sage-600 hover:text-sage-700">
                    Monthly Accommodation
                  </Link>
                </h3>
                <p className="text-gray-600">Best rates for long-term stays</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">
                  <Link href="/self-catering-rooms" className="text-sage-600 hover:text-sage-700">
                    Self-Catering Rooms
                  </Link>
                </h3>
                <p className="text-gray-600">Budget-friendly with kitchen</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Book Accommodation Near N1 City Today</h2>
          <p className="text-xl mb-8 text-sage-50">
            Convenient location for N1 City projects and businesses. Special contractor rates available.
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

import type { Metadata } from "next"
import Link from "next/link"
import { Plane, Clock, Car, MapPin, Wifi, Home, Shield, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Airport Accommodation Bellville | 15 Min to Cape Town Airport",
  description:
    "Convenient airport accommodation just 15 minutes from Cape Town International Airport. Perfect for early flights, layovers, and flight crew. Free parking, WiFi, and 24-hour access. Book direct.",
  alternates: {
    canonical: "https://60onkosmos.co.za/airport-accommodation",
  },
}

export default function AirportAccommodationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Plane className="w-4 h-4" />
              <span>15 Minutes to Cape Town Airport</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Airport Accommodation Bellville</h1>
            <p className="text-xl text-gray-600 mb-8">
              Convenient accommodation just 15 minutes from Cape Town International Airport. Perfect for early morning
              flights, late arrivals, layovers, and flight crew.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700">
                <Link href="/book-now">Book Airport Accommodation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20airport%20accommodation">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">15 Min to Airport</h3>
                </div>
                <p className="text-gray-600">Quick and easy access</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Car className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">Free Parking</h3>
                </div>
                <p className="text-gray-600">Secure parking included</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">24/7 Access</h3>
                </div>
                <p className="text-gray-600">Check in any time</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Wifi className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">Free WiFi</h3>
                </div>
                <p className="text-gray-600">Stay connected</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Airport Stays */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us for Airport Accommodation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <MapPin className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Perfect Location</h3>
                <p className="text-gray-600">Just 15 minutes from Cape Town International Airport via N1 highway</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">24-Hour Check-In</h3>
                <p className="text-gray-600">Arrive any time - perfect for late night or early morning flights</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Car className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Secure Parking</h3>
                <p className="text-gray-600">Free parking while you travel - leave your car safely with us</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Home className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Comfortable Rooms</h3>
                <p className="text-gray-600">Rest well before your flight in our clean, quiet rooms</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Utensils className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Self-Catering Option</h3>
                <p className="text-gray-600">Kitchen facilities available for longer stays</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Wifi className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Free WiFi</h3>
                <p className="text-gray-600">Check flight status and stay connected</p>
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
                <Plane className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Early Morning Flights</h3>
                <p className="text-gray-600">Stay close the night before</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Plane className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Late Arrivals</h3>
                <p className="text-gray-600">Quick rest after landing</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Clock className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Layovers</h3>
                <p className="text-gray-600">Comfortable stop between flights</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Plane className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Flight Crew</h3>
                <p className="text-gray-600">Convenient crew accommodation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Easy Directions from Airport</h2>
          <Card>
            <CardContent className="pt-6">
              <ol className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-semibold text-sage-600">1.</span>
                  <span>Exit Cape Town International Airport and follow signs to N1 highway</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-sage-600">2.</span>
                  <span>Take N1 North towards Paarl/Bellville</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-sage-600">3.</span>
                  <span>Take Exit 28 Bellville South/Stikland</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-sage-600">4.</span>
                  <span>Follow Kosmos Road - we're just 2 minutes from the highway</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-sage-600">5.</span>
                  <span>Total journey time: Approximately 15 minutes</span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">More Accommodation Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">
                  <Link href="/weekly-accommodation" className="text-sage-600 hover:text-sage-700">
                    Weekly Accommodation
                  </Link>
                </h3>
                <p className="text-gray-600">Discounted rates for week-long stays</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">
                  <Link href="/monthly-accommodation" className="text-sage-600 hover:text-sage-700">
                    Monthly Accommodation
                  </Link>
                </h3>
                <p className="text-gray-600">Best rates for extended stays</p>
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
          <h2 className="text-3xl font-bold mb-4">Book Your Airport Accommodation Today</h2>
          <p className="text-xl mb-8 text-sage-50">
            Convenient location, comfortable rooms, and flexible check-in times. Perfect for your airport stay.
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

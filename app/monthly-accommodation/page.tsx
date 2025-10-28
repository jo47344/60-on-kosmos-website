import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, DollarSign, Home, Wifi, Car, Utensils, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Monthly Accommodation Bellville | Long-Term Guesthouse Rentals Cape Town",
  description:
    "Affordable monthly accommodation in Bellville South. Self-catering rooms with discounted long-term rates. Perfect for contractors, students, and professionals. Book direct and save.",
  alternates: {
    canonical: "https://60onkosmos.co.za/monthly-accommodation",
  },
}

export default function MonthlyAccommodationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              <span>Long-Term Accommodation Specialist</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Monthly Accommodation in Bellville</h1>
            <p className="text-xl text-gray-600 mb-8">
              Affordable long-term accommodation with discounted monthly rates. Perfect for contractors, students,
              professionals, and extended stays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700">
                <Link href="/book-now">Get Monthly Rates</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20monthly%20accommodation%20rates">
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
                  <h3 className="font-semibold text-lg">Save Money</h3>
                </div>
                <p className="text-gray-600">Up to 30% off nightly rates</p>
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
                <p className="text-gray-600">Full kitchen facilities included</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">Flexible Terms</h3>
                </div>
                <p className="text-gray-600">1 month minimum, no long lease</p>
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
                <h3 className="font-semibold text-lg mb-2">Full Kitchen</h3>
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

      {/* Ideal For */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Relocating Families</h3>
                <p className="text-gray-600">While searching for permanent housing</p>
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
                  <Link href="/uwc-student-accommodation" className="text-sage-600 hover:text-sage-700">
                    Student Accommodation
                  </Link>
                </h3>
                <p className="text-gray-600">Near UWC and CPUT campuses</p>
              </CardContent>
            </Card>
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

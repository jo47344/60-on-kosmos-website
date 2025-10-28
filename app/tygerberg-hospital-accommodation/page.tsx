import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Clock, Utensils, Wifi, Car, Shield, Heart, Users, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Tygerberg Hospital Accommodation | Guesthouse Near Tygerberg Hospital Bellville",
  description:
    "Comfortable accommodation near Tygerberg Hospital. Perfect for medical staff, patients' families, and healthcare visitors. Self-catering rooms, free WiFi, secure parking. Book direct.",
  alternates: {
    canonical: "https://60onkosmos.co.za/tygerberg-hospital-accommodation",
  },
}

export default function TygerbergHospitalAccommodationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Healthcare Accommodation Specialist</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Accommodation Near Tygerberg Hospital</h1>
            <p className="text-xl text-gray-600 mb-8">
              Comfortable self-catering accommodation just 7.5km from Tygerberg Hospital. Perfect for medical staff,
              patients' families, and healthcare visitors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700">
                <Link href="/book-now">Book Your Room</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20accommodation%20near%20Tygerberg%20Hospital">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Distance & Location */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">7.5km to Hospital</h3>
                </div>
                <p className="text-gray-600">15-minute drive to Tygerberg Hospital</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">Flexible Stays</h3>
                </div>
                <p className="text-gray-600">Nightly, weekly, or monthly rates</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6 text-sage-600" />
                  <h3 className="font-semibold text-lg">Safe & Secure</h3>
                </div>
                <p className="text-gray-600">24/7 security, secure parking</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Healthcare Visitors Choose 60 on Kosmos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Utensils className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Self-Catering Kitchens</h3>
                <p className="text-gray-600">
                  Prepare meals at your convenience. Fully equipped kitchens in every unit.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Wifi className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Free High-Speed WiFi</h3>
                <p className="text-gray-600">Stay connected with family and work during your stay.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Car className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Free Secure Parking</h3>
                <p className="text-gray-600">Safe parking for your vehicle during hospital visits.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Quiet & Peaceful</h3>
                <p className="text-gray-600">Restful environment for recovery and relaxation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Home className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Private Rooms</h3>
                <p className="text-gray-600">Comfortable private accommodation with all amenities.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Flexible Booking</h3>
                <p className="text-gray-600">Book for as long as you need during treatment or recovery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Location Near Tygerberg Hospital</h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.8!2d18.6234!3d-33.9234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d1e1e1e1e1e%3A0x1e1e1e1e1e1e1e1e!2s60%20Kosmos%20Street%2C%20Bellville%20South!5e0!3m2!1sen!2sza!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="text-center mt-6">
            <Button asChild variant="outline" size="lg">
              <a
                href="https://maps.google.com/?q=60+Kosmos+Street+Bellville+South+7530"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions to 60 on Kosmos
              </a>
            </Button>
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
                <p className="text-gray-600">Discounted rates for extended stays</p>
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
                    UWC Accommodation
                  </Link>
                </h3>
                <p className="text-gray-600">Near UWC Medical School</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Accommodation?</h2>
          <p className="text-xl mb-8 text-sage-50">
            Secure your room near Tygerberg Hospital today. Comfortable, affordable, and convenient.
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

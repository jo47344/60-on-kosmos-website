import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Bed } from "lucide-react"

export const metadata: Metadata = {
  title: "Accommodation Near Tygerberg Hospital | 8km Away | Medical Staff Rates",
  description:
    "Clean, affordable rooms 8km from Tygerberg Hospital. Perfect for medical staff, patients' families, and locum doctors. Monthly rates available. WiFi, parking, 24/7 access.",
  keywords:
    "accommodation near tygerberg hospital, rooms near tygerberg, medical staff accommodation bellville, tygerberg hospital guest house, locum doctor accommodation cape town",
  alternates: { canonical: "https://60onkosmos.co.za/accommodation-near-tygerberg-hospital" },
}

export default function TygerbergHospitalPage() {
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
            <span className="text-gray-900">Near Tygerberg Hospital</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-sage-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-green-600 mb-4">
                <MapPin className="w-6 h-6" />
                <span className="font-semibold">8km from Tygerberg Hospital</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Accommodation Near Tygerberg Hospital — Clean, Safe, Affordable
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Medical staff, locum doctors, nurses, and patients' families choose us for convenient access to
                Tygerberg Hospital. Monthly rates for long-term stays.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 font-semibold">
                  ✓ Special rates for medical professionals & hospital staff
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <a
                    href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20accommodation%20near%20Tygerberg%20Hospital"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp for Medical Staff Rates
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
                alt="Clean room near Tygerberg Hospital Bellville for medical staff"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Medical Staff Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Medical Professionals Choose 60 on Kosmos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Flexible for Shift Work</h3>
              <p className="text-gray-600">24/7 access. Check-in anytime. We understand hospital schedules.</p>
            </Card>
            <Card className="text-center p-6">
              <Bed className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Quiet Rest</h3>
              <p className="text-gray-600">Peaceful neighborhood. Get proper rest between shifts.</p>
            </Card>
            <Card className="text-center p-6">
              <Phone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Monthly Rates</h3>
              <p className="text-gray-600">Locum doctors & long-term staff get special discounted rates.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting to Hospital */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Easy Access to Tygerberg Hospital</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">By Car</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>8km drive (10-15 minutes)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Free secure parking at guesthouse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Easy route via Voortrekker Road</span>
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">By Taxi/Uber</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>R50-70 taxi fare to hospital</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Uber/Bolt readily available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Public transport nearby</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Rooms for Medical Staff</h2>
          <p className="text-center text-gray-600 mb-8">All rooms include WiFi, parking, and 24/7 access</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/sage-double-room.png"
                  alt="Double room near Tygerberg Hospital"
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Double Room</h3>
                <p className="text-2xl font-bold text-green-600 mb-4">From R620/night</p>
                <p className="text-sm text-gray-600 mb-4">Perfect for locum doctors on short-term contracts</p>
                <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                  <Link href="/rooms">View All Rooms</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/twin-room-yellow.png"
                  alt="Twin room near Tygerberg Hospital"
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Twin Room</h3>
                <p className="text-2xl font-bold text-green-600 mb-4">From R530/night</p>
                <p className="text-sm text-gray-600 mb-4">Great for nursing staff sharing accommodation</p>
                <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                  <Link href="/rooms">View All Rooms</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/triple-room-full.jpg"
                  alt="Triple room near Tygerberg Hospital"
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Triple Room</h3>
                <p className="text-2xl font-bold text-green-600 mb-4">From R750/night</p>
                <p className="text-sm text-gray-600 mb-4">Ideal for families visiting patients</p>
                <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                  <Link href="/rooms">View All Rooms</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Stay Near Tygerberg Hospital</h2>
          <p className="text-xl mb-8 opacity-90">WhatsApp us now for medical staff rates and monthly discounts</p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <a
              href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20accommodation%20near%20Tygerberg%20Hospital"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp for Medical Staff Rates
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

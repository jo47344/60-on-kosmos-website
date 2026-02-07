import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Wifi, Coffee, Phone, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contractor Accommodation Bellville South (Sacks Circle) | Safe Parking & CCTV",
  description:
    "Crew-friendly ensuite rooms minutes from Sacks Circle. Secure yard, WiFi, bar fridges. Weekly/monthly rates on request — WhatsApp now.",
  keywords:
    "contractor accommodation bellville south, accommodation near sacks circle, workers accommodation bellville, crew rooms bellville south, contractor rates weekly bellville",
  alternates: { canonical: "https://60onkosmos.co.za/contractor-accommodation-bellville-south" },
  openGraph: {
    title: "Contractor Accommodation Bellville South | 60 on Kosmos",
    description: "Secure, affordable ensuite rooms for contractors near Sacks Circle with parking & WiFi",
  },
}

export default function ContractorAccommodationPage() {
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
            <span className="text-gray-900">Contractor Accommodation</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-sage-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Contractor Accommodation in Bellville South (Sacks Circle)
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Working in Sacks Circle or Bellville South Industria? Stay close, safe, and comfortable. Our private
                ensuite rooms include WiFi, secure parking behind locked gates, and bar fridges.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800 font-semibold">
                  ✓ Weekly and monthly rates available — WhatsApp us for a quote
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <a
                    href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20contractor%20accommodation%20in%20Bellville%20South"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp for Quote
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent">
                  <a href="tel:+27745245703">📞 Call +27 74 524 5703</a>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/exterior-courtyard.png"
                alt="Secure parking courtyard with CCTV at 60 on Kosmos contractor accommodation Bellville South"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Contractors Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Contractors Choose 60 on Kosmos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Secure Parking</h3>
              <p className="text-sm text-gray-600">
                Enclosed yard with CCTV. Park your work vehicle, van, or bakkie safely overnight.
              </p>
            </Card>
            <Card className="text-center p-6">
              <Wifi className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Free WiFi</h3>
              <p className="text-sm text-gray-600">Stay connected for work updates, video calls, and entertainment.</p>
            </Card>
            <Card className="text-center p-6">
              <Coffee className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Ensuite Rooms</h3>
              <p className="text-sm text-gray-600">Private bathroom, bar fridge, clean linen. No shared facilities.</p>
            </Card>
            <Card className="text-center p-6">
              <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Weekly/Monthly Rates</h3>
              <p className="text-sm text-gray-600">Flexible terms for long projects. Ask about crew discounts.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Perfect Location for Site Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Close to Industrial Areas</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Minutes from Sacks Circle industrial area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Quick access to Bellville South Industria</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Easy N1 highway access to Cape Town CBD</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Near construction and maintenance sites</span>
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Nearby Essentials</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>SPAR Kasselsvlei Centre (2km) — groceries, takeaways</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Hardware stores on Voortrekker Road</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Petrol stations and ATMs nearby</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Public transport routes to major work sites</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Rooms for Contractors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Contractor-Friendly Rooms</h2>
          <p className="text-center text-gray-600 mb-8">All rooms include ensuite bathroom, WiFi, and parking</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/twin-room-yellow.png"
                  alt="Standard twin room for contractors at 60 on Kosmos Bellville South with two single beds"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Standard Twin</h3>
                <p className="text-2xl font-bold text-green-600 mb-4">From R530/night</p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>✓ Two single beds</li>
                  <li>✓ Ensuite bathroom</li>
                  <li>✓ Bar fridge</li>
                  <li>✓ Free WiFi</li>
                </ul>
                <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                  <Link href="/rooms/standard-twin">View Details</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/deluxe-twin-navy.jpg"
                  alt="Deluxe twin room for contractors at 60 on Kosmos Bellville South with navy blue headboards and premium finishes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Deluxe Twin</h3>
                <p className="text-2xl font-bold text-green-600 mb-4">From R580/night</p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>✓ Two single beds</li>
                  <li>✓ Navy blue headboards</li>
                  <li>✓ Premium bedding</li>
                  <li>✓ Ensuite bathroom</li>
                  <li>✓ Modern decor</li>
                </ul>
                <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                  <Link href="/rooms/deluxe-twin">View Details</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/triple-room-full.jpg"
                  alt="Triple room for contractor crews at 60 on Kosmos Bellville South with three beds and workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Triple Room</h3>
                <p className="text-2xl font-bold text-green-600 mb-4">From R750/night</p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>✓ Three single beds</li>
                  <li>✓ Perfect for crews</li>
                  <li>✓ Ensuite bathroom</li>
                  <li>✓ Kettle & workspace</li>
                </ul>
                <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                  <Link href="/rooms">View All Rooms</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Crew's Accommodation?</h2>
          <p className="text-xl mb-8 opacity-90">
            WhatsApp us now for weekly/monthly rates and availability. We respond within minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-sage-600 hover:bg-gray-100">
              <a
                href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20contractor%20accommodation%20in%20Bellville%20South"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp for Quote
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-sage-700 bg-transparent"
            >
              <a href="tel:+27745245703">📞 Call +27 74 524 5703</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Contractor Accommodation Bellville South",
            description: "Secure ensuite rooms for contractors near Sacks Circle with parking, WiFi, and weekly rates",
            url: "https://60onkosmos.co.za/contractor-accommodation-bellville-south",
          }),
        }}
      />
    </div>
  )
}

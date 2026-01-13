import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Wifi, Car, Utensils, Shield, CheckCircle2, MapPin, Phone, Clock, Factory } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contractor Accommodation Stikland | From R530/Night | Near Stikland Industrial",
  description:
    "Affordable contractor accommodation near Stikland Industrial. Close to Beekman, Consol Glass & logistics companies. Standard R530, Plus R580, Double R620, Triple R750. Book now!",
  alternates: {
    canonical: "https://60onkosmos.co.za/contractor-accommodation-stikland",
  },
  keywords: [
    "contractor accommodation Stikland",
    "Stikland industrial accommodation",
    "worker housing Stikland",
    "Beekman Canopies accommodation",
    "Consol Glass contractor housing",
  ],
  openGraph: {
    title: "Contractor Accommodation Near Stikland Industrial | From R530/Night",
    description: "Minutes from Beekman, Consol Glass & Stikland logistics hub. Self-catering rooms for contractors.",
    url: "https://60onkosmos.co.za/contractor-accommodation-stikland",
    type: "website",
  },
}

export default function ContractorAccommodationStiklandPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "60 on Kosmos - Contractor Accommodation Near Stikland",
    description:
      "Affordable contractor accommodation near Stikland Industrial area, Beekman Canopies and Consol Glass.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "60 Kosmosdalweg",
      addressLocality: "Bellville South",
      addressRegion: "Western Cape",
      postalCode: "7530",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.9366,
      longitude: 18.6292,
    },
    telephone: "+27745245703",
    url: "https://60onkosmos.co.za/contractor-accommodation-stikland",
    priceRange: "R530 - R750",
    areaServed: {
      "@type": "Place",
      name: "Stikland Industrial",
    },
  }

  const nearbyEmployers = [
    { name: "Beekman Canopies", type: "Manufacturing", distance: "8 min" },
    { name: "Consol Glass", type: "Manufacturing", distance: "10 min" },
    { name: "Stikland Logistics Hub", type: "Warehousing", distance: "7 min" },
    { name: "Mill Park Industrial", type: "Industrial Park", distance: "5 min" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/exterior-building.png"
            alt="Contractor Accommodation Near Stikland Industrial"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Factory className="w-4 h-4" />
              <span>Near Stikland Industrial Hub</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Contractor Accommodation Near Stikland</h1>
            <p className="text-xl text-gray-300 mb-4">
              Minutes from Beekman Canopies, Consol Glass & major logistics companies.
              <br className="hidden md:block" />
              Self-catering rooms from R530/night.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg">
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20looking%20for%20contractor%20accommodation%20near%20Stikland">
                  WhatsApp Us
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg"
              >
                <a href="tel:+27745245703">
                  <Phone className="mr-2 h-5 w-5" />
                  074 524 5703
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-sage-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Weekly Cleaning</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Secure Parking</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Free WiFi</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Self-Catering</span>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Employers */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Close to Major Stikland Employers</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {nearbyEmployers.map((employer, index) => (
              <Card key={index} className="p-4 text-center">
                <h3 className="font-bold text-lg">{employer.name}</h3>
                <p className="text-gray-500 text-sm">{employer.type}</p>
                <p className="text-sage-600 font-bold mt-2">{employer.distance}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Room Options & Rates</h2>
          <p className="text-center text-gray-600 mb-12">All rooms include weekly cleaning, WiFi & secure parking</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Standard Room</h3>
                <p className="text-3xl font-bold text-sage-600">R530</p>
                <p className="text-gray-500 text-sm mb-4">/night</p>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> 2 Single Beds
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> Ensuite Bathroom
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> Communal Kitchen
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Standard Plus</h3>
                <p className="text-3xl font-bold text-sage-600">R580</p>
                <p className="text-gray-500 text-sm mb-4">/night</p>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> 2 Single Beds
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> Ensuite Bathroom
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> Private Bar Fridge
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden ring-2 ring-sage-600 shadow-xl">
              <div className="bg-sage-600 text-white text-center py-1 text-xs font-semibold">MOST POPULAR</div>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Double Room</h3>
                <p className="text-3xl font-bold text-sage-600">R620</p>
                <p className="text-gray-500 text-sm mb-4">/night</p>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> Double Bed
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> Bar Fridge + Microwave
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> Workspace Desk
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Triple Suite</h3>
                <p className="text-3xl font-bold text-sage-600">R750</p>
                <p className="text-gray-500 text-sm mb-4">/night</p>
                <p className="text-xs text-sage-700 font-semibold mb-2">Only R250 per person!</p>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> 3 Single Beds
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> Ensuite Bathroom
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> Bar Fridge
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Stikland Workers Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Car className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Secure Parking</h3>
                <p className="text-gray-600">Safe parking for work vehicles behind locked gates</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Utensils className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Self-Catering</h3>
                <p className="text-gray-600">Full kitchen to save on meal costs</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Wifi className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Free WiFi</h3>
                <p className="text-gray-600">Stay connected with family and colleagues</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">24/7 Security</h3>
                <p className="text-gray-600">CCTV monitoring for peace of mind</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Weekly Cleaning</h3>
                <p className="text-gray-600">Fresh linen and room cleaning included</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Quick Commute</h3>
                <p className="text-gray-600">Minutes to Stikland Industrial & N1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sage-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Working at Stikland? Book Your Stay</h2>
          <p className="text-sage-100 text-lg mb-8">Close to Beekman, Consol Glass and all major Stikland employers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-sage-700 hover:bg-gray-100 px-8 py-6 text-lg">
              <a href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20accommodation%20near%20Stikland%20Industrial">
                WhatsApp Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-sage-700 px-8 py-6 text-lg bg-transparent"
            >
              <Link href="/contractor-accommodation">View All Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold mb-6 text-center">Also Serving These Areas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contractor-accommodation" className="text-sage-600 hover:underline">
              Bellville South
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contractor-accommodation-parow" className="text-sage-600 hover:underline">
              Parow
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contractor-accommodation-goodwood" className="text-sage-600 hover:underline">
              Goodwood
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/n1-city-accommodation" className="text-sage-600 hover:underline">
              N1 City
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

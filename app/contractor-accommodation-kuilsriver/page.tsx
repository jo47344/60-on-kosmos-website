import type { Metadata } from "next"
import Link from "next/link"
import { Phone, MapPin, Wifi, Car, Clock, Wrench, Building2, Factory, Truck, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contractor Accommodation Kuilsriver | From R530/Night | 60 on Kosmos",
  description:
    "Affordable contractor accommodation near Kuilsriver & Blackheath Industrial Park. From R530/night. Weekly cleaning, WiFi, secure parking. 10 minutes to Power Construction, Mondi, Pep Distribution. Book now.",
  keywords: [
    "contractor accommodation Kuilsriver",
    "Kuilsriver worker housing",
    "Blackheath industrial accommodation",
    "construction crew lodging Kuilsriver",
    "monthly accommodation Kuilsriver",
    "Mondi contractor housing",
    "Power Construction accommodation",
    "affordable rooms Kuilsriver",
    "industrial worker accommodation Cape Town",
    "Pep distribution centre accommodation",
  ],
  alternates: {
    canonical: "https://60onkosmos.co.za/contractor-accommodation-kuilsriver",
  },
  openGraph: {
    title: "Contractor Accommodation Kuilsriver | From R530/Night",
    description:
      "Affordable contractor accommodation near Kuilsriver & Blackheath Industrial Park. Weekly cleaning, WiFi, parking included.",
    url: "https://60onkosmos.co.za/contractor-accommodation-kuilsriver",
    type: "website",
    images: [
      {
        url: "/images/exterior-building.png",
        width: 1200,
        height: 630,
        alt: "60 on Kosmos - Contractor Accommodation near Kuilsriver",
      },
    ],
  },
}

export default function ContractorAccommodationKuilsriverPage() {
  // LocalBusiness Schema for Kuilsriver
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "60 on Kosmos - Contractor Accommodation near Kuilsriver",
    description:
      "Affordable contractor and worker accommodation serving Kuilsriver and Blackheath Industrial areas. Weekly cleaning, WiFi, secure parking included.",
    url: "https://60onkosmos.co.za/contractor-accommodation-kuilsriver",
    telephone: "+27745245703",
    email: "60onkosmos@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "60 Kosmos Street",
      addressLocality: "Bellville South",
      addressRegion: "Western Cape",
      postalCode: "7530",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.9346,
      longitude: 18.6448,
    },
    areaServed: [
      { "@type": "City", name: "Kuilsriver" },
      { "@type": "City", name: "Blackheath" },
      { "@type": "City", name: "Bellville South" },
    ],
    priceRange: "R530 - R750 per night",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Secure Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Weekly Cleaning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Communal Kitchen", value: true },
    ],
    nearbyPlaces: [
      { "@type": "Place", name: "Power Construction Kuilsriver", description: "10 minutes drive" },
      { "@type": "Place", name: "Mondi Kuilsriver", description: "12 minutes drive" },
      { "@type": "Place", name: "Blackheath Industrial Park", description: "15 minutes drive" },
      { "@type": "Place", name: "Pep/Ackermans Distribution Centre", description: "12 minutes drive" },
    ],
  }

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How far is 60 on Kosmos from Kuilsriver Industrial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We're approximately 10km from Kuilsriver, about 10-15 minutes drive via the N1. Easy access to Power Construction, Mondi, and Blackheath Industrial Park.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer monthly rates for Kuilsriver contractors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer discounted monthly rates for contractors on projects in Kuilsriver and Blackheath. Contact us for a custom quote based on your team size and duration.",
        },
      },
      {
        "@type": "Question",
        name: "Is there parking for work vehicles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we have secure on-site parking suitable for bakkies and work vehicles. The parking area is gated and monitored.",
        },
      },
      {
        "@type": "Question",
        name: "What's included in the room rate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All rooms include WiFi, weekly cleaning, fresh linen, access to communal kitchen with gas stove, microwave, and air fryer. Secure parking is free.",
        },
      },
      {
        "@type": "Question",
        name: "Can distribution centre workers stay here?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We host workers from various distribution centres including those working at Pep, Ackermans, and other logistics operations in the Kuilsriver area.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get to Kuilsriver from 60 on Kosmos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Take Voortrekker Road to the N1 South, exit at Kuilsriver/Blackheath. The route is straightforward with minimal traffic outside peak hours.",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-[#1a2b3c] text-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-amber-400 mb-4">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium">10km from Kuilsriver Industrial</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Contractor Accommodation Near Kuilsriver</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Affordable weekly and monthly accommodation for contractors working in Kuilsriver, Blackheath Industrial
                Park, and surrounding areas. From R530/night with WiFi, parking, and weekly cleaning included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                  <Link href="tel:+27745245703">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: 074 524 5703
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="https://wa.me/27745245703?text=Hi,%20I%20need%20contractor%20accommodation%20near%20Kuilsriver">
                    WhatsApp Enquiry
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-gray-100 py-4 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Wifi className="h-4 w-4 text-amber-600" />
                <span>Free WiFi</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="h-4 w-4 text-amber-600" />
                <span>Secure Parking</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-600" />
                <span>Weekly Cleaning</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-amber-600" />
                <span>Contractor Friendly</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Worker Accommodation for Kuilsriver & Blackheath Projects
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  60 on Kosmos provides affordable, comfortable accommodation for contractors and workers on projects in
                  the Kuilsriver and Blackheath industrial areas. Located in Bellville South, we offer easy access via
                  the N1 highway to major employers including Power Construction, Mondi, Multi Homes Aluminium, and the
                  extensive Blackheath Industrial Park.
                </p>
                <p className="mb-4">
                  Our guesthouse is popular with construction crews, logistics workers, maintenance teams, and
                  installation technicians working on contracts throughout the Kuilsriver region. We understand shift
                  work and project-based schedules, offering flexible weekly and monthly rates to suit your needs.
                </p>
                <p>
                  Whether you're working at the Pep/Ackermans distribution facilities, doing maintenance at Mondi, or on
                  a construction project in Blackheath, we provide a clean, quiet base with all the essentials: WiFi for
                  evening communication, secure parking for your work vehicle, and a communal kitchen to prepare your
                  own meals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Distance Cards */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Distance to Kuilsriver Employers</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Power Construction", distance: "10km", time: "10 min", icon: Building2 },
                { name: "Mondi Kuilsriver", distance: "10km", time: "12 min", icon: Factory },
                { name: "Blackheath Industrial", distance: "12km", time: "15 min", icon: Factory },
                { name: "Pep Distribution", distance: "11km", time: "12 min", icon: Truck },
                { name: "Multi Homes Aluminium", distance: "10km", time: "10 min", icon: Wrench },
                { name: "BJ Magnets", distance: "10km", time: "11 min", icon: Wrench },
              ].map((location) => (
                <Card key={location.name} className="text-center">
                  <CardContent className="p-4">
                    <location.icon className="h-8 w-8 mx-auto mb-2 text-amber-600" />
                    <h3 className="font-semibold text-sm mb-1">{location.name}</h3>
                    <p className="text-xs text-gray-600">{location.distance}</p>
                    <p className="text-xs text-amber-600">{location.time} drive</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Room Types */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Room Options for Kuilsriver Contractors</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose the option that best fits your team's needs and budget
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  name: "Standard Room",
                  price: "R530",
                  features: ["2 Single Beds", "Communal Kitchen Access", "WiFi & Parking", "Weekly Cleaning"],
                  highlight: "Budget Friendly",
                },
                {
                  name: "Standard Plus",
                  price: "R580",
                  features: ["2 Single Beds", "Private Bar Fridge", "WiFi & Parking", "Weekly Cleaning"],
                  highlight: "Most Popular",
                },
                {
                  name: "Double Room",
                  price: "R620",
                  features: ["1 Double Bed", "Bar Fridge + Microwave", "WiFi & Parking", "Weekly Cleaning"],
                  highlight: "For Supervisors",
                },
                {
                  name: "Triple Suite",
                  price: "R750",
                  features: ["3 Single Beds", "Private Bar Fridge", "WiFi & Parking", "Weekly Cleaning"],
                  highlight: "R250 per person",
                },
              ].map((room, index) => (
                <Card key={room.name} className={`relative ${index === 1 ? "ring-2 ring-amber-500" : ""}`}>
                  {index === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="font-bold text-lg">{room.name}</h3>
                      <p className="text-3xl font-bold text-amber-600 mt-2">{room.price}</p>
                      <p className="text-sm text-gray-500">per night</p>
                      <p className="text-xs text-amber-700 mt-1">{room.highlight}</p>
                    </div>
                    <ul className="space-y-2">
                      {room.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <ChevronRight className="h-4 w-4 text-amber-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              Rates subject to change without notice. Weekly and monthly discounts available.
            </p>
          </div>
        </section>

        {/* Who Stays With Us */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Who Stays With Us from Kuilsriver</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Construction Crews",
                  desc: "Teams working on building projects in Kuilsriver and Blackheath",
                  icon: Building2,
                },
                {
                  title: "Logistics Workers",
                  desc: "Distribution centre staff at Pep, Ackermans, Marais Transport",
                  icon: Truck,
                },
                {
                  title: "Manufacturing Staff",
                  desc: "Workers at Mondi, Multi Homes Aluminium, BJ Magnets",
                  icon: Factory,
                },
                {
                  title: "Maintenance Teams",
                  desc: "Technicians on plant maintenance and installation contracts",
                  icon: Wrench,
                },
              ].map((item) => (
                <Card key={item.title}>
                  <CardContent className="p-6 text-center">
                    <item.icon className="h-10 w-10 mx-auto mb-4 text-amber-600" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "How far is 60 on Kosmos from Kuilsriver Industrial?",
                  a: "We're approximately 10km from Kuilsriver, about 10-15 minutes drive via the N1. Easy access to Power Construction, Mondi, and Blackheath Industrial Park.",
                },
                {
                  q: "Do you offer monthly rates for Kuilsriver contractors?",
                  a: "Yes, we offer discounted monthly rates for contractors on projects in Kuilsriver and Blackheath. Contact us for a custom quote based on your team size and duration.",
                },
                {
                  q: "Is there parking for work vehicles?",
                  a: "Yes, we have secure on-site parking suitable for bakkies and work vehicles. The parking area is gated and monitored.",
                },
                {
                  q: "What's included in the room rate?",
                  a: "All rooms include WiFi, weekly cleaning, fresh linen, access to communal kitchen with gas stove, microwave, and air fryer. Secure parking is free.",
                },
                {
                  q: "Can distribution centre workers stay here?",
                  a: "Absolutely. We host workers from various distribution centres including those working at Pep, Ackermans, and other logistics operations in the Kuilsriver area.",
                },
                {
                  q: "How do I get to Kuilsriver from 60 on Kosmos?",
                  a: "Take Voortrekker Road to the N1 South, exit at Kuilsriver/Blackheath. The route is straightforward with minimal traffic outside peak hours.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-[#1a2b3c] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Book Contractor Accommodation Near Kuilsriver</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Affordable rates from R530/night. Weekly and monthly discounts available for teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                <Link href="tel:+27745245703">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 074 524 5703
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="https://wa.me/27745245703?text=Hi,%20I%20need%20contractor%20accommodation%20near%20Kuilsriver">
                  WhatsApp Enquiry
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="font-semibold text-center mb-4">Other Contractor Locations We Serve</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/contractor-accommodation" className="text-amber-700 hover:underline">
                Bellville South
              </Link>
              <Link href="/contractor-accommodation-parow" className="text-amber-700 hover:underline">
                Parow Industria
              </Link>
              <Link href="/contractor-accommodation-stikland" className="text-amber-700 hover:underline">
                Stikland
              </Link>
              <Link href="/contractor-accommodation-goodwood" className="text-amber-700 hover:underline">
                Goodwood
              </Link>
              <Link href="/contractor-accommodation-northern-suburbs" className="text-amber-700 hover:underline">
                Northern Suburbs
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

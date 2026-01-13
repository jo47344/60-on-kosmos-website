import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Wifi, Car, Utensils, Shield, CheckCircle2, MapPin, Phone, Clock, Building2, Users, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contractor Accommodation Parow | From R530/Night | Near Coca-Cola, Parmalat, B Braun",
  description:
    "Affordable contractor accommodation near Parow Industria. Close to Coca-Cola Peninsula Beverages, Parmalat, B Braun, Avery Dennison. Self-catering rooms from R530/night. Weekly & monthly rates.",
  alternates: {
    canonical: "https://60onkosmos.co.za/contractor-accommodation-parow",
  },
  keywords: [
    "contractor accommodation Parow",
    "Parow industrial accommodation",
    "worker housing Parow",
    "monthly accommodation Parow",
    "construction crew accommodation Parow",
    "Parow East accommodation",
    "Epping contractor housing",
    "welder accommodation Parow",
    "electrician accommodation Cape Town",
    "artisan accommodation Parow",
    "budget accommodation Parow industrial",
    "self-catering Parow",
    "Coca-Cola accommodation",
    "Parmalat accommodation",
    "B Braun accommodation",
    "Avery Dennison accommodation",
    "Allcast Foundry accommodation",
  ],
  openGraph: {
    title: "Contractor Accommodation Near Parow Industria | From R530/Night",
    description: "Affordable contractor accommodation near major Parow Industria employers. From R530/night.",
    url: "https://60onkosmos.co.za/contractor-accommodation-parow",
    type: "website",
    images: [
      {
        url: "https://60onkosmos.co.za/images/exterior-building.png",
        width: 1200,
        height: 630,
        alt: "Contractor Accommodation Near Parow Industria",
      },
    ],
  },
}

export default function ContractorAccommodationParowPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": "https://60onkosmos.co.za/contractor-accommodation-parow#lodgingbusiness",
    name: "60 on Kosmos - Contractor Accommodation Near Parow Industria",
    alternateName: ["Parow Contractor Housing", "Parow Industrial Accommodation", "60 on Kosmos Parow"],
    description:
      "Affordable contractor accommodation near Parow Industria. Close to Coca-Cola Peninsula Beverages, Parmalat, B Braun, Avery Dennison, Allcast Foundry. Self-catering rooms from R530/night with weekly cleaning, secure parking and WiFi.",
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
    geoRadius: "15000",
    telephone: "+27745245703",
    url: "https://60onkosmos.co.za/contractor-accommodation-parow",
    priceRange: "R530 - R750",
    currenciesAccepted: "ZAR",
    paymentAccepted: "EFT, Bank Transfer",
    areaServed: [
      { "@type": "City", name: "Parow" },
      { "@type": "City", name: "Parow East" },
      { "@type": "City", name: "Parow North" },
      { "@type": "City", name: "Epping" },
      { "@type": "City", name: "Bellville" },
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Secure Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Weekly Cleaning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Self-Catering Kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "CCTV Security", value: true },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Standard Room",
        description: "Budget-friendly room with 2 single beds, ensuite bathroom, communal kitchen access",
        price: "530",
        priceCurrency: "ZAR",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Standard Plus Room",
        description: "Room with 2 single beds, ensuite bathroom, private bar fridge",
        price: "580",
        priceCurrency: "ZAR",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Double Room",
        description: "Manager's room with double bed, bar fridge, microwave, workspace desk",
        price: "620",
        priceCurrency: "ZAR",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Triple Suite",
        description: "Team room with 3 single beds, ensuite bathroom, bar fridge - only R250 per person",
        price: "750",
        priceCurrency: "ZAR",
        availability: "https://schema.org/InStock",
      },
    ],
    containedInPlace: {
      "@type": "Place",
      name: "Bellville South Industrial Area",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bellville South",
        addressRegion: "Western Cape",
        addressCountry: "ZA",
      },
    },
    nearbyPlaces: [
      { "@type": "Place", name: "Coca-Cola Peninsula Beverages", distance: "5km" },
      { "@type": "Place", name: "Parmalat", distance: "5km" },
      { "@type": "Place", name: "B Braun", distance: "6km" },
      { "@type": "Place", name: "Avery Dennison", distance: "5km" },
      { "@type": "Place", name: "Allcast Foundry", distance: "6km" },
      { "@type": "Place", name: "Sacks Circle Industrial", distance: "2km" },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How far is 60 on Kosmos from Parow Industria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "60 on Kosmos is approximately 5km from Parow Industria area, about 10-15 minutes drive via Voortrekker Road. We are also close to Coca-Cola Peninsula Beverages, Parmalat, B Braun, Avery Dennison, and Allcast Foundry.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cheapest contractor room near Parow Industria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our Standard Room is R530/night - the most affordable contractor accommodation near Parow Industria. It includes 2 single beds, ensuite bathroom, access to communal kitchen, weekly cleaning, secure parking and WiFi.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer monthly rates for Parow contractors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer discounted monthly rates for contractors on long-term projects in Parow, Epping and surrounding industrial areas. Contact us for a custom quote based on your team size and duration.",
        },
      },
      {
        "@type": "Question",
        name: "Is there parking for work vehicles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we have secure parking behind locked gates suitable for bakkies, vans and work vehicles. CCTV monitoring provides 24/7 security.",
        },
      },
      {
        "@type": "Question",
        name: "Can I cook my own meals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we have a communal kitchenette with gas stove, microwave, air fryer and basic utensils. Some rooms also have private bar fridges. This helps contractors save money on meals during long projects.",
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/exterior-building.png"
            alt="Contractor Accommodation Near Parow Industria Area"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>10-15 Minutes from Parow Industria</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Contractor Accommodation Near Parow Industria
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Affordable self-catering rooms for contractors working at Coca-Cola, Parmalat, B Braun, Avery Dennison and
              Parow Industria businesses. From R530/night with weekly cleaning, secure parking and WiFi.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Near: Coca-Cola Peninsula Beverages | Parmalat | B Braun | Avery Dennison | Allcast Foundry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg">
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20looking%20for%20contractor%20accommodation%20near%20Parow%20Industrial">
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

      {/* About Section - Adds word count and local relevance */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Accommodation for Parow Industria Workers
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                60 on Kosmos provides affordable accommodation for contractors and workers employed at businesses in
                Parow Industria. Located in Bellville South, we are approximately 10-15 minutes from major employers
                including Coca-Cola Peninsula Beverages, Parmalat, B Braun medical supplies, Avery Dennison, and Allcast
                Foundry.
              </p>
              <p>
                Parow Industria is one of Cape Town&apos;s largest industrial areas, home to food and beverage
                manufacturers, medical equipment companies, engineering firms, and logistics operations. Whether
                you&apos;re a maintenance contractor, installation technician, or part of a construction crew on a Parow
                project, our self-catering rooms offer comfortable, affordable accommodation.
              </p>
              <p>
                Our guesthouse provides weekly cleaning, secure parking for work vehicles, a communal kitchen with gas
                stove, microwave and air fryer, and free WiFi. For stays of 14+ nights, we offer discounted monthly
                rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Distance Highlight */}
      <section className="py-12 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Close to Major Parow Industria Employers</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-sage-600">10-15</p>
              <p className="text-xs text-gray-500">min drive</p>
              <p className="text-gray-600 text-sm font-medium mt-1">Coca-Cola Peninsula</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-sage-600">10-15</p>
              <p className="text-xs text-gray-500">min drive</p>
              <p className="text-gray-600 text-sm font-medium mt-1">Parmalat</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-sage-600">10-15</p>
              <p className="text-xs text-gray-500">min drive</p>
              <p className="text-gray-600 text-sm font-medium mt-1">B Braun Medical</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-sage-600">10-15</p>
              <p className="text-xs text-gray-500">min drive</p>
              <p className="text-gray-600 text-sm font-medium mt-1">Avery Dennison</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-sage-600">10-15</p>
              <p className="text-xs text-gray-500">min drive</p>
              <p className="text-gray-600 text-sm font-medium mt-1">Allcast Foundry</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-sage-600">3</p>
              <p className="text-xs text-gray-500">min drive</p>
              <p className="text-gray-600 text-sm font-medium mt-1">Sacks Circle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Who Stays With Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-sage-100 p-3 rounded-full">
                  <Wrench className="w-6 h-6 text-sage-600" />
                </div>
                <h3 className="text-lg font-bold">Tradespeople & Artisans</h3>
              </div>
              <p className="text-gray-600">
                Welders, electricians, plumbers, boilermakers and fitters working on industrial projects in Parow,
                Epping and surrounding areas. Many of our guests are completing apprenticeships or artisan training
                courses.
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-sage-100 p-3 rounded-full">
                  <Building2 className="w-6 h-6 text-sage-600" />
                </div>
                <h3 className="text-lg font-bold">Construction Crews</h3>
              </div>
              <p className="text-gray-600">
                Teams working on building projects, renovations and infrastructure in the Northern Suburbs. Our Triple
                Suite at R750/night (R250 per person) is perfect for 3-man crews needing affordable group accommodation.
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-sage-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-sage-600" />
                </div>
                <h3 className="text-lg font-bold">Project Managers</h3>
              </div>
              <p className="text-gray-600">
                Supervisors and managers overseeing projects in Parow Industria. Our Double Room at R620/night includes
                a workspace desk, bar fridge and microwave - perfect for admin work after hours.
              </p>
            </Card>
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
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> Communal Kitchen Access
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4">Best for: Budget-conscious workers</p>
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
                <p className="text-xs text-gray-500 mt-4">Best for: Skilled tradespeople</p>
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
                <p className="text-xs text-gray-500 mt-4">Best for: Managers & Supervisors</p>
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
                <p className="text-xs text-gray-500 mt-4">Best for: Work crews & teams</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">Rates subject to change without notice</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Parow Contractors Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Car className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Secure Parking</h3>
                <p className="text-gray-600">
                  Safe parking for bakkies, vans and work vehicles behind locked gates with CCTV monitoring
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Utensils className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Self-Catering Kitchen</h3>
                <p className="text-gray-600">
                  Gas stove, microwave, air fryer and utensils. Save money by cooking your own meals during long
                  projects
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Wifi className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Free WiFi</h3>
                <p className="text-gray-600">
                  Stay connected with family, stream entertainment and handle work communications
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">24/7 Security</h3>
                <p className="text-gray-600">
                  CCTV monitoring, secure perimeter and safe neighbourhood for peace of mind
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Weekly Cleaning</h3>
                <p className="text-gray-600">
                  Fresh linen and room cleaning once a week - no daily disturbances during work hours
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Easy Access</h3>
                <p className="text-gray-600">
                  Quick routes to Parow Industrial, Epping, N1 Highway and all Northern Suburbs industrial areas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Important for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">How far is 60 on Kosmos from Parow Industria?</h3>
              <p className="text-gray-600">
                We are approximately 5km from Parow Industria area, about 10-15 minutes drive via Voortrekker Road. We
                are also close to Coca-Cola Peninsula Beverages, Parmalat, B Braun, Avery Dennison, and Allcast Foundry.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">What is the cheapest contractor room near Parow Industria?</h3>
              <p className="text-gray-600">
                Our Standard Room is R530/night - the most affordable contractor accommodation near Parow Industria. It
                includes 2 single beds, ensuite bathroom, access to communal kitchen, weekly cleaning, secure parking
                and WiFi.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Do you offer monthly rates for Parow contractors?</h3>
              <p className="text-gray-600">
                Yes, we offer discounted rates for stays of 14 nights or longer. Contact us for a custom quote based on
                your team size and project duration.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Is there parking for work vehicles?</h3>
              <p className="text-gray-600">
                Yes, we have secure parking behind locked gates suitable for bakkies, vans and work vehicles. CCTV
                monitoring provides 24/7 security.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Can I cook my own meals?</h3>
              <p className="text-gray-600">
                Yes, we have a communal kitchenette with gas stove, microwave, air fryer and basic utensils. Some rooms
                also have private bar fridges. This helps contractors save money on meals during long projects.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">What trades do you typically accommodate?</h3>
              <p className="text-gray-600">
                We regularly host welders, electricians, plumbers, boilermakers, fitters, construction workers and
                project managers working on industrial and commercial projects throughout Parow, Epping and the Northern
                Suburbs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Working in Parow Industria? Book Your Stay Today</h2>
          <p className="text-sage-100 text-lg mb-8">
            Affordable contractor accommodation with everything you need. From R530/night.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-sage-700 hover:bg-gray-100 px-8 py-6 text-lg">
              <a href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20contractor%20accommodation%20near%20Parow%20Industrial">
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
          <h3 className="text-xl font-bold mb-6 text-center">Contractor Accommodation in Other Areas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contractor-accommodation" className="text-sage-600 hover:underline">
              Bellville South
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contractor-accommodation-bellville" className="text-sage-600 hover:underline">
              Bellville
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contractor-accommodation-stikland" className="text-sage-600 hover:underline">
              Stikland
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/n1-city-accommodation" className="text-sage-600 hover:underline">
              N1 City
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contractor-accommodation-goodwood" className="text-sage-600 hover:underline">
              Goodwood
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contractor-accommodation-northern-suburbs" className="text-sage-600 hover:underline">
              Northern Suburbs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

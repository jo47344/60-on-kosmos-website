import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Briefcase,
  Wifi,
  Car,
  Utensils,
  Shield,
  CheckCircle2,
  Users,
  Clock,
  MapPin,
  Phone,
  GraduationCap,
  Wrench,
  FileText,
  Calculator,
  Star,
  Quote,
  ShoppingCart,
  Building2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FAQSchema } from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Contractor Accommodation Bellville South | Monthly from R464/Night | Private Ensuite Rooms",
  description:
    "Affordable contractor accommodation in Bellville South with private ensuite rooms. Monthly rates from R464/night. Self-catering, secure parking for bakkies, WiFi, weekly cleaning. Near factories, TAC Business Park, Sacks Circle. Perfect for contractor crews, project teams & working professionals.",
  alternates: {
    canonical: "https://60onkosmos.co.za/contractor-accommodation",
  },
  keywords: [
    "contractor accommodation bellville south",
    "self catering contractor accommodation bellville",
    "weekly contractor accommodation bellville south",
    "project accommodation bellville south",
    "workers accommodation bellville south parking bakkies",
    "contractor accommodation near tac business park",
    "artisan trainee accommodation near northlink college",
    "boilermaker accommodation near john thompson bellville",
    "welding trainee accommodation bellville",
    "monthly contractor accommodation bellville self catering",
    "shutdown accommodation bellville south",
    "contractor teams accommodation bellville",
  ],
  openGraph: {
    title: "Contractor Accommodation Bellville South | Monthly from R464/Night",
    description:
      "Private ensuite rooms for contractors & project teams. Monthly rates from R464/night. Secure parking, weekly cleaning, WiFi included.",
    url: "https://60onkosmos.co.za/contractor-accommodation",
    type: "website",
  },
}

export default function ContractorAccommodationPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "60 on Kosmos - Contractor Accommodation Bellville South",
    description:
      "Affordable self-catering contractor accommodation in Bellville South. Weekly & monthly rates for construction workers, artisan trainees, welders, boilermakers. Secure parking for bakkies, WiFi included. Near Sacks Circle, Mill Park, TAC Business Park, John Thompson, Northlink College.",
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
      latitude: -33.9367,
      longitude: 18.6403,
    },
    telephone: "+27745245703",
    url: "https://60onkosmos.co.za/contractor-accommodation",
    priceRange: "R464 - R840",
    currenciesAccepted: "ZAR",
    paymentAccepted: "Cash, EFT, Bank Transfer",
    areaServed: [
      { "@type": "City", name: "Bellville South" },
      { "@type": "City", name: "Bellville" },
      { "@type": "City", name: "Stikland" },
      { "@type": "City", name: "Parow" },
      { "@type": "City", name: "Goodwood" },
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Secure Parking for Bakkies", value: true },
      { "@type": "LocationFeatureSpecification", name: "Self-Catering Kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Weekly Cleaning", value: true },
      { "@type": "LocationFeatureSpecification", name: "CCTV Security", value: true },
    ],
    nearbyPlaces: [
      { "@type": "Place", name: "Sacks Circle Industrial", description: "Walking distance" },
      { "@type": "Place", name: "Mill Park Industrial", description: "5 minutes" },
      { "@type": "Place", name: "TAC Business Park", description: "5 minutes" },
      { "@type": "Place", name: "John Thompson", description: "Boilermaker training" },
      { "@type": "Place", name: "Northlink College Bellville", description: "Welding courses" },
      { "@type": "Place", name: "Stikland Industrial", description: "10 minutes" },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Standard Twin Room",
        description: "Best for 2 contractors sharing. From R464/night on monthly stays.",
        price: "580",
        priceCurrency: "ZAR",
      },
      {
        "@type": "Offer",
        name: "Deluxe Twin Room",
        description: "Best for 2 professionals wanting extra comfort. From R520/night on monthly stays.",
        price: "650",
        priceCurrency: "ZAR",
      },
      {
        "@type": "Offer",
        name: "Double Room",
        description: "Best for solo professionals, couples, or site supervisors. From R544/night on monthly stays.",
        price: "680",
        priceCurrency: "ZAR",
      },
      {
        "@type": "Offer",
        name: "Triple Room",
        description: "Best value for 3-person crews. From R224 per person on monthly stays.",
        price: "840",
        priceCurrency: "ZAR",
      },
    ],
  }

  const roomTypes = [
    {
      name: "Standard Twin Room",
      tagline: "The Contractor Essential",
      price: "R580",
      weeklyPrice: "R522",
      monthlyPrice: "R464",
      perPerson: null,
      capacity: "1-2 People",
      layout: "2 Single Beds",
      bestFor: "2 contractors or professionals sharing",
      image: "/images/twin-room-yellow.png",
      features: [
        "2 comfortable single beds",
        "Private ensuite bathroom",
        "Free WiFi",
        "Communal kitchen access",
        "Weekly cleaning included",
        "Secure parking",
      ],
      pitch: "Clean, secure, and functional. Our most popular room for contractor teams.",
      highlight: false,
    },
    {
      name: "Deluxe Twin Room",
      tagline: "The Comfort Upgrade",
      price: "R650",
      weeklyPrice: "R585",
      monthlyPrice: "R520",
      perPerson: null,
      capacity: "1-2 People",
      layout: "2 Single Beds",
      bestFor: "2 professionals wanting extra comfort",
      image: "/images/deluxe-twin-navy.jpg",
      features: [
        "2 comfortable single beds",
        "Private ensuite bathroom",
        "Bar fridge",
        "Premium bedding",
        "Free WiFi",
        "Weekly cleaning included",
        "Secure parking",
      ],
      pitch: "Premium comfort with quality bedding and modern finishes.",
      highlight: false,
    },
    {
      name: "Double Room",
      tagline: "The Manager's Choice",
      price: "R680",
      weeklyPrice: "R612",
      monthlyPrice: "R544",
      perPerson: null,
      capacity: "1-2 People",
      layout: "1 Double Bed",
      bestFor: "Solo professionals, couples, or site supervisors",
      image: "/images/sage-double-room.png",
      features: [
        "Spacious double bed",
        "Private ensuite bathroom",
        "Bar fridge",
        "Free WiFi",
        "Premium bedding",
        "Weekly cleaning included",
        "Secure parking",
      ],
      pitch: "Extra space and privacy for project leads and supervisors.",
      highlight: true,
    },
    {
      name: "Triple Room",
      tagline: "Best Value for Crews",
      price: "R840",
      weeklyPrice: "R756",
      monthlyPrice: "R672",
      perPerson: "R224/person monthly",
      capacity: "3 People",
      layout: "3 Single Beds",
      bestFor: "3-person contractor crews",
      image: "/images/triple-room-full.jpg",
      features: [
        "3 comfortable single beds",
        "Private ensuite bathroom",
        "Kettle & cups",
        "Workspace area",
        "Free WiFi",
        "Weekly cleaning included",
        "Secure parking",
        "Best value per person",
      ],
      pitch: "Maximum savings for 3-person crews without compromising on comfort.",
      highlight: false,
    },
  ]

  const contractorFAQs = [
    {
      question: "How much does contractor accommodation cost in Bellville South?",
      answer: "Contractor accommodation at 60 on Kosmos starts from R530/night for a Standard Room (2 single beds), R580/night for Standard Plus with private fridge, R620/night for a Double Room with workspace, or R750/night for a Triple Suite (only R250 per person). Weekly and monthly discounts available.",
    },
    {
      question: "Is there secure parking for work vehicles and bakkies?",
      answer: "Yes, we have secure parking behind locked gates with 24/7 CCTV surveillance. Bakkies, work vehicles, and trailers are welcome. The parking area is well-lit and monitored.",
    },
    {
      question: "Do you accommodate apprentices and trainees on courses?",
      answer: "Yes, we regularly host apprentices from John Thompson boilermaker courses, Northlink College welding programmes, and other training facilities. Our Standard Room at R530/night is ideal for trainees on a budget.",
    },
    {
      question: "Can contractors cook their own meals?",
      answer: "Absolutely. All guests have access to self-catering facilities including a communal kitchen with stove, microwave, and large shared refrigerator. Standard Plus, Double, and Triple rooms include private bar fridges. Double rooms also have a microwave.",
    },
    {
      question: "How close is 60 on Kosmos to industrial areas?",
      answer: "We are walking distance from Sacks Circle Industrial, 5 minutes from Mill Park Industrial and TAC Business Park, and 10 minutes from Stikland Industrial. Major employers like Beekman Canopies and Consol Glass are nearby.",
    },
    {
      question: "What amenities are included in the room rate?",
      answer: "All rooms include free WiFi, weekly cleaning with fresh linen, secure parking, CCTV security, ensuite bathroom, and access to self-catering facilities. Electricity and water are included in the rate.",
    },
    {
      question: "Do you offer weekly or monthly rates for project stays?",
      answer: "Yes, we offer discounted rates for weekly and monthly project bookings. Contact us on WhatsApp at 074 524 5703 for a custom quote based on your project duration and team size.",
    },
    {
      question: "Can you accommodate work crews or teams?",
      answer: "Yes, our Triple Suite accommodates 3 people at only R250 per person per night - the best value for crews. We can also arrange multiple rooms for larger teams. Many contractors book several rooms for their crews on project assignments.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <FAQSchema faqs={contractorFAQs} />

      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/exterior-building.png"
            alt="60 on Kosmos Contractor Accommodation Bellville South"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              <span>Contractor & Apprentice Accommodation</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Bellville South Contractor Accommodation
              <br className="hidden md:block" />
              <span className="text-sage-400">with Private Ensuite Rooms</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Every room has its own private bathroom. No shared facilities.
              <br className="hidden md:block" />
              Nightly, weekly & monthly rates. Self-catering, secure parking for bakkies, WiFi.
            </p>
            <p className="text-base text-gray-400 mb-8">Near factories, TAC Business Park, Sacks Circle & Mill Park.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg">
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20contractor%20accommodation%20rates">
                  Get a Quote on WhatsApp
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
              <span>WiFi Included</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Self-Catering</span>
            </div>
          </div>
        </div>
      </section>

      {/* Group Booking CTA */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-sage-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Users className="w-4 h-4" />
                <span>For Project Managers</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Booking for a Crew or Team?</h2>
              <p className="text-gray-300 mb-6">
                Get a custom quote for your entire team. We offer discounted rates for multiple rooms and extended stays. 
                Company invoices provided for all bookings.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sage-400" />
                  <span className="text-sm">Multiple room discounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sage-400" />
                  <span className="text-sm">Professional invoices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sage-400" />
                  <span className="text-sm">Weekly/monthly rates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sage-400" />
                  <span className="text-sm">One contact for all rooms</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700">
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20a%20project%20manager%20and%20need%20to%20book%20accommodation%20for%20my%20team.%20Please%20send%20me%20a%20quote.">
                  <Building2 className="mr-2 h-5 w-5" />
                  Get Company Quote
                </a>
              </Button>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-sage-400" />
                Invoice & Payment Options
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Professional invoices</span>
                    <p className="text-gray-400 text-sm">For company expense claims</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">EFT payments accepted</span>
                    <p className="text-gray-400 text-sm">Direct bank transfer for corporate bookings</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Flexible payment terms</span>
                    <p className="text-gray-400 text-sm">Weekly or monthly billing available</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Receipts on request</span>
                    <p className="text-gray-400 text-sm">Digital or printed receipts for per diem claims</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Industry Section */}
      <section className="py-10 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 uppercase tracking-wider mb-6">Trusted by contractors from</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <Wrench className="w-7 h-7 text-gray-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Plumbing Contractors</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <Shield className="w-7 h-7 text-gray-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Sheetmetal Fabricators</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <Briefcase className="w-7 h-7 text-gray-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Consulting Firms</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <Car className="w-7 h-7 text-gray-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Logistics Teams</span>
            </div>
            <div className="flex flex-col items-center text-center col-span-2 md:col-span-1">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <Users className="w-7 h-7 text-gray-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Industrial Cleaning Crews</span>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">50+ contractor teams hosted from across South Africa</p>
        </div>
      </section>

      {/* Room Pricing Cards - Now shows 4 room types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Room Type</h2>
            <p className="text-lg text-gray-600">Four options to fit your team structure and budget</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roomTypes.map((room, index) => (
              <Card
                key={index}
                className={`overflow-hidden ${room.highlight ? "ring-2 ring-sage-600 shadow-xl" : "hover:shadow-lg"} transition-all`}
              >
                {room.highlight && (
                  <div className="bg-sage-600 text-white text-center py-2 text-sm font-semibold">MOST POPULAR</div>
                )}
                <div className="relative h-40">
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={`${room.name} - Contractor accommodation Bellville South`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="text-center mb-3">
                    <p className="text-xs text-sage-600 font-medium mb-1">{room.tagline}</p>
                    <h3 className="text-lg font-bold text-gray-900">{room.name}</h3>
                    <div className="mt-2">
                      <span className="text-2xl font-bold text-sage-600">{room.price}</span>
                      <span className="text-gray-600 text-sm">/night</span>
                    </div>
                    {room.perPerson && (
                      <p className="text-xs text-sage-700 font-semibold mt-1">Only {room.perPerson} per person!</p>
                    )}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-2 mb-3 text-xs">
                    <div className="grid grid-cols-1 gap-1">
                      <div>
                        <span className="text-gray-500">Capacity:</span> {room.capacity}
                      </div>
                      <div>
                        <span className="text-gray-500">Best for:</span>{" "}
                        <span className="font-medium">{room.bestFor}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-1 mb-4">
                    {room.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <CheckCircle2 className="w-3 h-3 mr-1 text-green-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="sm"
                    className={`w-full ${room.highlight ? "bg-sage-600 hover:bg-sage-700" : "bg-gray-900 hover:bg-gray-800"}`}
                  >
                    <a
                      href={`https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(room.name)}%20at%20${room.price}`}
                    >
                      Book Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Card Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Contractor Rates</h2>
            <p className="text-gray-600">All rooms include private ensuite bathroom, secure parking, WiFi, and weekly cleaning.</p>
          </div>

          {/* Full Pricing Table */}
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="text-left py-4 px-4">Room</th>
                  <th className="text-center py-4 px-4">Standard<br/><span className="text-xs text-gray-400 font-normal">1-6 nights</span></th>
                  <th className="text-center py-4 px-4">Weekly<br/><span className="text-xs text-gray-400 font-normal">7-27 nights</span></th>
                  <th className="text-center py-4 px-4 bg-green-800">Monthly<br/><span className="text-xs text-green-300 font-normal">28+ nights</span></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">
                    <span className="font-semibold">Standard Twin Room</span>
                    <p className="text-xs text-gray-500">Best for 2 contractors sharing</p>
                  </td>
                  <td className="text-center py-4 px-4 font-medium">R580</td>
                  <td className="text-center py-4 px-4 font-medium text-sage-600">R522</td>
                  <td className="text-center py-4 px-4 font-bold text-green-600 bg-green-50">R464</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">
                    <span className="font-semibold">Deluxe Twin Room</span>
                    <p className="text-xs text-gray-500">Best for 2 professionals wanting comfort</p>
                  </td>
                  <td className="text-center py-4 px-4 font-medium">R650</td>
                  <td className="text-center py-4 px-4 font-medium text-sage-600">R585</td>
                  <td className="text-center py-4 px-4 font-bold text-green-600 bg-green-50">R520</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">
                    <span className="font-semibold">Double Room</span>
                    <p className="text-xs text-gray-500">Best for solo professionals or site supervisors</p>
                  </td>
                  <td className="text-center py-4 px-4 font-medium">R680</td>
                  <td className="text-center py-4 px-4 font-medium text-sage-600">R612</td>
                  <td className="text-center py-4 px-4 font-bold text-green-600 bg-green-50">R544</td>
                </tr>
                <tr>
                  <td className="py-4 px-4">
                    <span className="font-semibold">Triple Room</span>
                    <p className="text-xs text-gray-500">Best value for 3-person crews</p>
                    <p className="text-xs text-green-600 font-medium">From R224/person on monthly</p>
                  </td>
                  <td className="text-center py-4 px-4 font-medium">R840</td>
                  <td className="text-center py-4 px-4 font-medium text-sage-600">R756</td>
                  <td className="text-center py-4 px-4 font-bold text-green-600 bg-green-50">R672</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Crew Booking Options */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Crew Booking Options</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-sage-600">2</p>
                <p className="text-sm text-gray-600">workers</p>
                <p className="text-xs text-gray-500 mt-1">Standard or Deluxe Twin</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-sage-600">3</p>
                <p className="text-sm text-gray-600">workers</p>
                <p className="text-xs text-gray-500 mt-1">Triple Room</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-sage-600">5</p>
                <p className="text-sm text-gray-600">workers</p>
                <p className="text-xs text-gray-500 mt-1">Triple + Double Room</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-sage-600">7+</p>
                <p className="text-sm text-gray-600">workers</p>
                <p className="text-xs text-gray-500 mt-1">Multi-room crew quote</p>
              </div>
            </div>
          </div>

          {/* Crew Discount */}
          <div className="bg-gray-900 text-white rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-5 h-5" />
              <h3 className="text-lg font-bold">Crew Discounts Available</h3>
            </div>
            <p className="text-gray-300 mb-4">Booking 2+ rooms? Get a custom quote for your team.</p>
            <Button asChild className="bg-sage-600 hover:bg-sage-700">
              <a href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20a%20quote%20for%20multiple%20rooms%20for%20my%20crew">
                Request Crew Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Perfectly Located for Training & Work</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Minutes from major training facilities and industrial areas
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Training Facilities */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-sage-600" />
                <h3 className="text-2xl font-bold">Training Facilities</h3>
              </div>
              <div className="space-y-4">
                <Card className="p-4">
                  <h4 className="font-bold text-lg">John Thompson</h4>
                  <p className="text-gray-600 text-sm">Boilermaker & welding courses, apprentice training</p>
                  <p className="text-sage-600 font-medium text-sm mt-1">Currently hosting apprentices!</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-bold text-lg">Northlink College Bellville</h4>
                  <p className="text-gray-600 text-sm">Welding (CBMT Phase 1-4), Engineering Fabrication courses</p>
                  <p className="text-gray-500 text-sm mt-1">Sackson Street Campus nearby</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-bold text-lg">PST Academy Brackenfell</h4>
                  <p className="text-gray-600 text-sm">5-day intensive welding courses (Arc, MIG, TIG)</p>
                </Card>
              </div>
            </div>

            {/* Industrial Areas */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-8 h-8 text-sage-600" />
                <h3 className="text-2xl font-bold">Industrial Areas</h3>
              </div>
              <div className="space-y-4">
                <Card className="p-4">
                  <h4 className="font-bold text-lg">Sacks Circle Industrial</h4>
                  <p className="text-gray-600 text-sm">Major industrial hub with manufacturing & logistics</p>
                  <p className="text-sage-600 font-medium text-sm mt-1">Walking distance!</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-bold text-lg">Mill Park Industrial</h4>
                  <p className="text-gray-600 text-sm">Industrial park with warehouses & workshops</p>
                  <p className="text-gray-500 text-sm mt-1">Minutes away</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-bold text-lg">Stikland Industrial</h4>
                  <p className="text-gray-600 text-sm">Beekman Canopies, Consol Glass, logistics companies</p>
                </Card>
              </div>
            </div>
          </div>

          <div className="bg-sage-50 rounded-xl p-6 text-center">
            <p className="text-lg text-gray-700">
              <span className="font-bold">Currently hosting:</span> Apprentices from John Thompson boilermaker courses
            </p>
            <p className="text-gray-600 mt-2">
              We understand the needs of workers on training programmes and project assignments.
            </p>
          </div>
        </div>
      </section>

      {/* Who Stays With Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Who Stays With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <GraduationCap className="w-10 h-10 mx-auto mb-3 text-sage-600" />
              <h3 className="text-lg font-bold mb-2">Apprentices</h3>
              <p className="text-gray-600 text-sm mb-3">
                Boilermaker, welder & engineering students on training courses
              </p>
              <p className="text-sage-600 font-semibold">From R530/night</p>
            </Card>
            <Card className="text-center p-6">
              <Users className="w-10 h-10 mx-auto mb-3 text-sage-600" />
              <h3 className="text-lg font-bold mb-2">Skilled Workers</h3>
              <p className="text-gray-600 text-sm mb-3">
                Tradesmen on short-term contracts needing comfortable lodging
              </p>
              <p className="text-sage-600 font-semibold">From R580/night</p>
            </Card>
            <Card className="text-center p-6 ring-2 ring-sage-600">
              <Briefcase className="w-10 h-10 mx-auto mb-3 text-sage-600" />
              <h3 className="text-lg font-bold mb-2">Managers</h3>
              <p className="text-gray-600 text-sm mb-3">Project leads and supervisors who need workspace and privacy</p>
              <p className="text-sage-600 font-semibold">From R620/night</p>
            </Card>
            <Card className="text-center p-6">
              <Users className="w-10 h-10 mx-auto mb-3 text-sage-600" />
              <h3 className="text-lg font-bold mb-2">Work Crews</h3>
              <p className="text-gray-600 text-sm mb-3">3-man teams maximizing savings at R250 per person</p>
              <p className="text-sage-600 font-semibold">R750/night total</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contractor Testimonials */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Long-Stay Guests Say</h2>
            <p className="text-gray-600">Real feedback from contractors, interns, and professionals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-sage-200 mb-2" />
              <p className="text-gray-700 mb-4">
                &quot;Been staying here for 3 months while working at Sacks Circle. Clean rooms, secure parking for my bakkie, and the owner is very accommodating. Best contractor accommodation I&apos;ve found in the area.&quot;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">William M.</p>
                <p className="text-sm text-gray-500">Plumbing Contractor, 3 months</p>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-sage-200 mb-2" />
              <p className="text-gray-700 mb-4">
                &quot;I stayed here for my F&apos;SATI internship at CPUT. The location was perfect for getting to campus, the room was comfortable, and the owner made me feel welcome in South Africa. Great value for a 3-month stay.&quot;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Antoine D.</p>
                <p className="text-sm text-gray-500">F&apos;SATI Intern from France, 3 months</p>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-sage-200 mb-2" />
              <p className="text-gray-700 mb-4">
                &quot;Came from Joburg for a 4-month practical at Tygerberg Hospital. Finding affordable accommodation was stressful until I found this place. Clean, safe, and much cheaper than hotels. The self-catering kitchen saved me money.&quot;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Thabo M.</p>
                <p className="text-sm text-gray-500">Medical Intern from Gauteng, 4 months</p>
              </div>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-sage-600 text-sage-600 bg-transparent">
              <Link href="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Weekly/Monthly Savings */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calculator className="w-12 h-12 text-sage-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Save More on Longer Stays</h2>
            <p className="text-gray-600">The longer your project, the more you save</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Weekly Stay (7 nights)</h3>
              <p className="text-3xl font-bold text-sage-600 mb-2">Save 10%</p>
              <p className="text-gray-600 text-sm mb-4">Standard Room from R3,339/week</p>
              <p className="text-xs text-gray-500">(Instead of R3,710)</p>
            </Card>
            <Card className="p-6 text-center ring-2 ring-sage-600">
              <div className="bg-sage-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">BEST VALUE</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Monthly Stay (30 nights)</h3>
              <p className="text-3xl font-bold text-sage-600 mb-2">Save 20%</p>
              <p className="text-gray-600 text-sm mb-4">Standard Room from R12,720/month</p>
              <p className="text-xs text-gray-500">(Instead of R15,900)</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Team Booking (3+ rooms)</h3>
              <p className="text-3xl font-bold text-sage-600 mb-2">Custom Rate</p>
              <p className="text-gray-600 text-sm mb-4">Additional discounts for crews</p>
              <p className="text-xs text-gray-500">Contact us for a quote</p>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700">
              <a href="https://wa.me/27745245703?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20weekly%2Fmonthly%20contractor%20stay">
                Get Your Discounted Rate
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Contractors Choose 60 on Kosmos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Car className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Secure Parking</h3>
                <p className="text-gray-600">Safe parking for work vehicles and tools behind locked gates with CCTV</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Utensils className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Self-Catering</h3>
                <p className="text-gray-600">Full kitchen facilities to save money by cooking your own meals</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Wifi className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Free WiFi</h3>
                <p className="text-gray-600">Stay connected with family and access online training materials</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">24/7 Security</h3>
                <p className="text-gray-600">CCTV monitoring for safe and secure accommodation</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Weekly Cleaning</h3>
                <p className="text-gray-600">Professional cleaning service and fresh linen included</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Prime Location</h3>
                <p className="text-gray-600">Near Sacks Circle, Mill Park & major training facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section - Updated with new locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Strategic Location</h2>
          <p className="text-gray-600 text-center mb-12">Near work sites, shopping, and with easy highway access</p>
          
          {/* Key Access Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card className="p-6 bg-sage-50 border-sage-200">
              <div className="flex items-center gap-3 mb-2">
                <ShoppingCart className="w-6 h-6 text-sage-600" />
                <h3 className="font-bold">Kasselsvlei Shopping Centre</h3>
              </div>
              <p className="text-sage-600 font-medium">2-minute drive</p>
              <p className="text-gray-600 text-sm mt-1">Spar supermarket, 24-hour laundromat, restaurants, pharmacy</p>
            </Card>
            <Card className="p-6 bg-sage-50 border-sage-200">
              <div className="flex items-center gap-3 mb-2">
                <Car className="w-6 h-6 text-sage-600" />
                <h3 className="font-bold">N1 Highway Access</h3>
              </div>
              <p className="text-sage-600 font-medium">5 minutes</p>
              <p className="text-gray-600 text-sm mt-1">Easy access to Cape Town CBD, universities, and work sites</p>
            </Card>
            <Card className="p-6 bg-sage-50 border-sage-200">
              <div className="flex items-center gap-3 mb-2">
                <Car className="w-6 h-6 text-sage-600" />
                <h3 className="font-bold">Uber Available</h3>
              </div>
              <p className="text-sage-600 font-medium">On-demand</p>
              <p className="text-gray-600 text-sm mt-1">Readily available and affordable for local trips</p>
            </Card>
          </div>

          {/* Work Sites */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <Card className="p-4">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-sage-600" />
              <h3 className="font-bold text-sm">Sacks Circle</h3>
              <p className="text-sage-600 text-sm">Walking distance</p>
            </Card>
            <Card className="p-4">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-sage-600" />
              <h3 className="font-bold text-sm">Mill Park</h3>
              <p className="text-sage-600 text-sm">2 min drive</p>
            </Card>
            <Card className="p-4">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-sage-600" />
              <h3 className="font-bold text-sm">John Thompson</h3>
              <p className="text-sage-600 text-sm">Nearby</p>
            </Card>
            <Card className="p-4">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-sage-600" />
              <h3 className="font-bold text-sm">Northlink College</h3>
              <p className="text-sage-600 text-sm">5 min drive</p>
            </Card>
            <Card className="p-4">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-sage-600" />
              <h3 className="font-bold text-sm">TAC Business Park</h3>
              <p className="text-sage-600 text-sm">5 min drive</p>
            </Card>
            <Card className="p-4">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-sage-600" />
              <h3 className="font-bold text-sm">Bellville CBD</h3>
              <p className="text-sage-600 text-sm">3km</p>
            </Card>
          </div>

          {/* Safety Note */}
          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm text-center">
              <strong>Safety tip:</strong> We recommend using transport (car or Uber) for shopping and services rather than walking. 
              Our property has 24/7 CCTV monitoring and secure parking inside the gates.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Contractor Accommodation FAQ</h2>
          <p className="text-gray-600 text-center mb-12">Common questions about staying at 60 on Kosmos</p>
          <div className="space-y-4">
            {contractorFAQs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Updated pricing */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8 text-sage-50">
            Standard R530 | Standard Plus R580 | Double R620 | Triple R750/night
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-6 text-lg">
              <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20contractor%20accommodation">
                WhatsApp for Quote
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-sage-700 px-8 py-6 text-lg bg-transparent"
            >
              <a href="tel:+27745245703">
                <Phone className="mr-2 h-5 w-5" />
                Call 074 524 5703
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contractor Checklist */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-8">What Contractors Get at 60 on Kosmos</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span>Secure parking for bakkies and work vehicles</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span>Self-catering kitchen to cook your own meals</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span>Free WiFi for video calls and online access</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span>Weekly cleaning with fresh linen included</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span>Professional invoices for company claims</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span>24/7 CCTV security and locked gates</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span>Flexible weekly and monthly rates</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span>Close to industrial areas and training centres</span>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-center mb-6">Contractor Accommodation by Area</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/contractor-accommodation-bellville" className="text-sage-600 hover:underline">
              Bellville
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/contractor-accommodation-bellville-south" className="text-sage-600 hover:underline">
              Bellville South
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/contractor-accommodation-goodwood" className="text-sage-600 hover:underline">
              Goodwood
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/contractor-accommodation-kuilsriver" className="text-sage-600 hover:underline">
              Kuilsriver
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/contractor-accommodation-northern-suburbs" className="text-sage-600 hover:underline">
              Northern Suburbs
            </Link>
          </div>
          <h3 className="text-xl font-bold text-center mb-6">More Options</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/monthly-accommodation" className="text-sage-600 hover:underline">
              Monthly Stays
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/weekly-accommodation" className="text-sage-600 hover:underline">
              Weekly Stays
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/rooms" className="text-sage-600 hover:underline">
              All Room Types
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/n1-city-accommodation" className="text-sage-600 hover:underline">
              N1 City Area
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

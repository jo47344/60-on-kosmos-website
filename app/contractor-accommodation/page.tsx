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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FAQSchema } from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Contractor Accommodation Bellville South | From R530/Night | Self-Catering with Parking",
  description:
    "Affordable contractor accommodation in Bellville South. Nightly, weekly & monthly rates for project-based stays. Self-catering, secure parking for bakkies, WiFi. Near factories, TAC Business Park, Sacks Circle. Perfect for artisan trainees, welders, boilermakers & work crews.",
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
    title: "Contractor Accommodation Bellville South | Weekly & Monthly Rates",
    description:
      "Self-catering rooms for contractors, work crews & artisan trainees. Secure parking, weekly cleaning, WiFi. From R530/night.",
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
    priceRange: "R530 - R750",
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
        name: "Standard Room",
        description: "Budget room for apprentices, no bar fridge, communal kitchen access",
        price: "530",
        priceCurrency: "ZAR",
      },
      {
        "@type": "Offer",
        name: "Standard Plus Room",
        description: "Room with private bar fridge for skilled workers",
        price: "580",
        priceCurrency: "ZAR",
      },
      {
        "@type": "Offer",
        name: "Double Room",
        description: "Manager room with bar fridge, microwave and workspace",
        price: "620",
        priceCurrency: "ZAR",
      },
      {
        "@type": "Offer",
        name: "Triple Suite",
        description: "Team room for 3 workers, best value at R250 per person",
        price: "750",
        priceCurrency: "ZAR",
      },
    ],
  }

  const roomTypes = [
    {
      name: "Standard Room",
      tagline: "The Budget Essential",
      price: "R530",
      perPerson: null,
      capacity: "1-2 People",
      layout: "2 Single Beds",
      bestFor: "Apprentices / Junior Staff",
      image: "/images/twin-room-yellow.png",
      features: [
        "2 comfortable single beds",
        "Ensuite bathroom",
        "Free WiFi",
        "Access to communal kitchenette",
        "Large shared refrigerator",
        "Weekly cleaning included",
        "Secure parking",
      ],
      pitch: "Our most affordable option. Clean, secure, and functional with full kitchen access.",
      highlight: false,
    },
    {
      name: "Standard Plus",
      tagline: "The Comfort Upgrade",
      price: "R580",
      perPerson: null,
      capacity: "1-2 People",
      layout: "2 Single Beds",
      bestFor: "Skilled Workers / Colleagues",
      image: "/images/twin-room-black.png",
      features: [
        "2 comfortable single beds",
        "Ensuite bathroom",
        "Private bar fridge",
        "Free WiFi",
        "Weekly cleaning included",
        "Secure parking",
      ],
      pitch: "All the essentials plus your own bar fridge for convenience.",
      highlight: false,
    },
    {
      name: "Double Room",
      tagline: "The Manager's Choice",
      price: "R620",
      perPerson: null,
      capacity: "1-2 People",
      layout: "1 Double Bed",
      bestFor: "Managers / Supervisors",
      image: "/images/sage-double-room.png",
      features: [
        "Spacious double bed",
        "Ensuite bathroom",
        "Private bar fridge",
        "Microwave in room",
        "Workspace desk",
        "Free WiFi",
        "Weekly cleaning included",
        "Secure parking",
      ],
      pitch: "Designed for project leads who need extra space, privacy, and in-room convenience.",
      highlight: true,
    },
    {
      name: "Triple Suite",
      tagline: "The Team Hub",
      price: "R750",
      perPerson: "R250",
      capacity: "3 People",
      layout: "3 Single Beds",
      bestFor: "Technical Teams / Crews",
      image: "/images/triple-room-full.jpg",
      features: [
        "3 comfortable single beds",
        "Ensuite bathroom",
        "Private bar fridge",
        "Kettle & cups",
        "Free WiFi",
        "Weekly cleaning included",
        "Secure parking",
        "Best value per person",
      ],
      pitch: "Maximum savings for 3-man crews without compromising on individual comfort.",
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
              Contractor Accommodation in Bellville South
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Affordable contractor accommodation for project-based stays.
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

      <section className="py-16 bg-white">
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
          <h2 className="text-3xl font-bold text-center mb-12">Strategic Location</h2>
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

      {/* Internal Links */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-center mb-6">More Accommodation Options</h3>
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

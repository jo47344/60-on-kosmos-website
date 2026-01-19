import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Wifi, Car, Utensils, Shield, CheckCircle2, MapPin, Phone, Clock, Factory, Users, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FAQSchema } from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Contractor Accommodation Kuilsriver | From R530/Night | Near Blackheath Industrial",
  description:
    "Affordable contractor accommodation near Kuilsriver and Blackheath Industrial. Self-catering rooms from R530/night. Weekly cleaning, secure parking, WiFi. Perfect for welders, electricians & construction crews.",
  alternates: {
    canonical: "https://60onkosmos.co.za/contractor-accommodation-kuilsriver",
  },
  keywords: [
    "contractor accommodation Kuilsriver",
    "Kuilsriver industrial accommodation",
    "Blackheath contractor housing",
    "worker housing Kuilsriver",
    "monthly accommodation Kuilsriver",
    "construction crew accommodation Kuilsriver",
    "welder accommodation Kuilsriver",
    "electrician accommodation Kuilsriver",
  ],
  openGraph: {
    title: "Contractor Accommodation Near Kuilsriver | From R530/Night",
    description: "15 minutes from Kuilsriver and Blackheath Industrial. Self-catering rooms for contractors and work crews.",
    url: "https://60onkosmos.co.za/contractor-accommodation-kuilsriver",
    type: "website",
  },
}

export default function ContractorAccommodationKuilsriverPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "60 on Kosmos - Contractor Accommodation Near Kuilsriver",
    description:
      "Affordable contractor accommodation near Kuilsriver and Blackheath Industrial areas. Self-catering rooms from R530/night with secure parking and WiFi.",
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
    url: "https://60onkosmos.co.za/contractor-accommodation-kuilsriver",
    priceRange: "R530 - R750",
    areaServed: [
      { "@type": "City", name: "Kuilsriver" },
      { "@type": "City", name: "Blackheath" },
      { "@type": "City", name: "Bellville" },
    ],
  }

  const faqs = [
    {
      question: "How far is 60 on Kosmos from Kuilsriver Industrial?",
      answer:
        "We are approximately 15 minutes drive from Kuilsriver and Blackheath Industrial areas via the N1 or R300. Easy access to major factories and warehouses in the area.",
    },
    {
      question: "How much does contractor accommodation cost near Kuilsriver?",
      answer:
        "Rooms start from R530/night for a Standard Room, R580 for Standard Plus with private fridge, R620 for a Double Room, or R750 for a Triple Suite (only R250 per person). Weekly and monthly discounts available.",
    },
    {
      question: "Is there secure parking for work vehicles?",
      answer:
        "Yes, we have secure parking behind locked gates with 24/7 CCTV. Bakkies, work vehicles, and trailers are welcome.",
    },
    {
      question: "Can contractors cook their own meals?",
      answer:
        "Yes, all guests have access to self-catering facilities. Standard Plus, Double, and Triple rooms include private bar fridges. There's also a communal kitchen with stove, microwave, and large shared refrigerator.",
    },
    {
      question: "Do you offer weekly or monthly rates?",
      answer:
        "Yes, we offer discounted rates for weekly and monthly bookings. Contact us on WhatsApp for a custom quote based on your stay duration.",
    },
    {
      question: "What amenities are included?",
      answer:
        "All rooms include free WiFi, weekly cleaning with fresh linen, secure parking, CCTV security, ensuite bathroom, and access to self-catering facilities.",
    },
  ]

  const roomTypes = [
    {
      name: "Standard Room",
      price: "R530",
      capacity: "1-2 People",
      bestFor: "Apprentices",
      image: "/images/twin-room-yellow.png",
      features: ["2 single beds", "Ensuite bathroom", "Communal kitchen access", "Free WiFi"],
    },
    {
      name: "Standard Plus",
      price: "R580",
      capacity: "1-2 People",
      bestFor: "Skilled Workers",
      image: "/images/twin-room-black.png",
      features: ["2 single beds", "Ensuite bathroom", "Private bar fridge", "Free WiFi"],
    },
    {
      name: "Double Room",
      price: "R620",
      capacity: "1-2 People",
      bestFor: "Managers",
      image: "/images/sage-double-room.png",
      features: ["Double bed", "Ensuite bathroom", "Bar fridge & microwave", "Workspace"],
      highlight: true,
    },
    {
      name: "Triple Suite",
      price: "R750",
      perPerson: "R250",
      capacity: "3 People",
      bestFor: "Crews",
      image: "/images/triple-room-full.jpg",
      features: ["3 single beds", "Ensuite bathroom", "Private bar fridge", "Best value"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/exterior-building.png"
            alt="Contractor Accommodation Near Kuilsriver"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Factory className="w-4 h-4" />
              <span>Near Kuilsriver & Blackheath Industrial</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Contractor Accommodation Near Kuilsriver
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Affordable self-catering rooms for contractors working in Kuilsriver and Blackheath Industrial areas.
            </p>
            <p className="text-base text-gray-400 mb-8">15 min drive via N1 or R300. Secure parking for bakkies.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg">
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20contractor%20accommodation%20near%20Kuilsriver">
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
              <Clock className="w-5 h-5" />
              <span>15 Min to Kuilsriver</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Car className="w-5 h-5" />
              <span>Secure Parking</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Wifi className="w-5 h-5" />
              <span>Free WiFi</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Utensils className="w-5 h-5" />
              <span>Self-Catering</span>
            </div>
          </div>
        </div>
      </section>

      {/* Room Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Room Options & Pricing</h2>
            <p className="text-lg text-gray-600">Four room types to suit your budget and team size</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roomTypes.map((room, index) => (
              <Card
                key={index}
                className={`overflow-hidden ${room.highlight ? "ring-2 ring-sage-600" : ""} hover:shadow-lg transition-all`}
              >
                {room.highlight && (
                  <div className="bg-sage-600 text-white text-center py-2 text-sm font-semibold">MOST POPULAR</div>
                )}
                <div className="relative h-40">
                  <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">{room.name}</h3>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-sage-600">{room.price}</span>
                    <span className="text-gray-600 text-sm">/night</span>
                  </div>
                  {room.perPerson && (
                    <p className="text-xs text-sage-700 font-semibold">Only {room.perPerson} per person!</p>
                  )}
                  <div className="text-sm text-gray-500 mt-2">
                    {room.capacity} | Best for: {room.bestFor}
                  </div>
                  <ul className="mt-3 space-y-1">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <CheckCircle2 className="w-3 h-3 mr-1 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="sm" className="w-full mt-4 bg-sage-600 hover:bg-sage-700">
                    <a
                      href={`https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(room.name)}%20for%20Kuilsriver%20work`}
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

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Perfectly Located for Kuilsriver Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <MapPin className="w-10 h-10 mx-auto mb-4 text-sage-600" />
              <h3 className="font-bold text-lg mb-2">Kuilsriver Industrial</h3>
              <p className="text-gray-600">15 min via N1/R300</p>
            </Card>
            <Card className="p-6 text-center">
              <MapPin className="w-10 h-10 mx-auto mb-4 text-sage-600" />
              <h3 className="font-bold text-lg mb-2">Blackheath Industrial</h3>
              <p className="text-gray-600">15 min drive</p>
            </Card>
            <Card className="p-6 text-center">
              <MapPin className="w-10 h-10 mx-auto mb-4 text-sage-600" />
              <h3 className="font-bold text-lg mb-2">Brackenfell Industrial</h3>
              <p className="text-gray-600">12 min drive</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Kuilsriver Contractor FAQ</h2>
          <p className="text-gray-600 text-center mb-12">Common questions about accommodation near Kuilsriver</p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Working in Kuilsriver?</h2>
          <p className="text-xl mb-8">Book your contractor accommodation today. From R530/night.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-6 text-lg">
              <a href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20accommodation%20for%20Kuilsriver%20work">
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
                074 524 5703
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-center mb-6">Other Contractor Locations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contractor-accommodation" className="text-sage-600 hover:underline">
              Bellville South
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/contractor-accommodation-parow" className="text-sage-600 hover:underline">
              Parow
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/contractor-accommodation-stikland" className="text-sage-600 hover:underline">
              Stikland
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/contractor-accommodation-goodwood" className="text-sage-600 hover:underline">
              Goodwood
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

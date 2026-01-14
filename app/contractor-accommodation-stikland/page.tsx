import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Wifi,
  Car,
  Utensils,
  Shield,
  CheckCircle2,
  MapPin,
  Phone,
  Clock,
  Factory,
  Users,
  Wrench,
  HardHat,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Contractor Accommodation Stikland | From R530/Night | Beekman, Consol Glass Workers",
  description:
    "Affordable contractor accommodation near Stikland Industrial. 8 min to Beekman Canopies, 10 min to Consol Glass. Self-catering rooms from R530/night. Weekly & monthly rates for workers.",
  alternates: {
    canonical: "https://60onkosmos.co.za/contractor-accommodation-stikland",
  },
  keywords: [
    "contractor accommodation Stikland",
    "Stikland industrial accommodation",
    "worker housing Stikland",
    "Beekman Canopies accommodation",
    "Consol Glass contractor housing",
    "Stikland logistics worker accommodation",
    "affordable rooms near Stikland",
    "monthly accommodation Stikland industrial",
    "construction crew housing Stikland",
    "factory worker accommodation Cape Town",
    "warehouse staff accommodation Bellville",
    "Mill Park industrial accommodation",
  ],
  openGraph: {
    title: "Contractor Accommodation Near Stikland Industrial | From R530/Night",
    description:
      "8 minutes from Beekman Canopies, 10 minutes from Consol Glass. Self-catering rooms for contractors, factory workers & logistics crews.",
    url: "https://60onkosmos.co.za/contractor-accommodation-stikland",
    type: "website",
    images: [
      {
        url: "https://60onkosmos.co.za/images/exterior-building.png",
        width: 1200,
        height: 630,
        alt: "60 on Kosmos Contractor Accommodation Near Stikland",
      },
    ],
  },
}

export default function ContractorAccommodationStiklandPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LodgingBusiness",
        "@id": "https://60onkosmos.co.za/#lodgingbusiness",
        name: "60 on Kosmos - Contractor Accommodation Near Stikland",
        alternateName: "Stikland Contractor Housing",
        description:
          "Affordable self-catering contractor accommodation near Stikland Industrial area. Close to Beekman Canopies, Consol Glass, and major logistics companies. Rooms from R530/night with weekly cleaning, WiFi, and secure parking.",
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
          latitude: -33.9366,
          longitude: 18.6292,
        },
        telephone: "+27745245703",
        url: "https://60onkosmos.co.za/contractor-accommodation-stikland",
        priceRange: "R530 - R750",
        currenciesAccepted: "ZAR",
        paymentAccepted: "EFT, Bank Transfer",
        areaServed: [
          { "@type": "Place", name: "Stikland Industrial" },
          { "@type": "Place", name: "Mill Park" },
          { "@type": "Place", name: "Bellville South" },
          { "@type": "Place", name: "Sacks Circle" },
        ],
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
          { "@type": "LocationFeatureSpecification", name: "Secure Parking", value: true },
          { "@type": "LocationFeatureSpecification", name: "Weekly Cleaning", value: true },
          { "@type": "LocationFeatureSpecification", name: "Self-Catering Kitchen", value: true },
          { "@type": "LocationFeatureSpecification", name: "CCTV Security", value: true },
        ],
        nearbyPlaces: [
          { "@type": "Place", name: "Beekman Canopies", description: "8 minutes drive" },
          { "@type": "Place", name: "Consol Glass", description: "10 minutes drive" },
          { "@type": "Place", name: "Stikland Logistics Hub", description: "7 minutes drive" },
          { "@type": "Place", name: "Mill Park Industrial", description: "5 minutes drive" },
          { "@type": "Place", name: "N1 Highway", description: "10 minutes drive" },
        ],
        makesOffer: [
          {
            "@type": "Offer",
            name: "Standard Room",
            description: "2 single beds, ensuite, communal kitchen access",
            price: "530",
            priceCurrency: "ZAR",
          },
          {
            "@type": "Offer",
            name: "Standard Plus Room",
            description: "2 single beds, ensuite, private bar fridge",
            price: "580",
            priceCurrency: "ZAR",
          },
          {
            "@type": "Offer",
            name: "Double Room",
            description: "Double bed, bar fridge, microwave, workspace",
            price: "620",
            priceCurrency: "ZAR",
          },
          {
            "@type": "Offer",
            name: "Triple Suite",
            description: "3 single beds, ensuite, bar fridge - best value for crews",
            price: "750",
            priceCurrency: "ZAR",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How far is 60 on Kosmos from Beekman Canopies?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "60 on Kosmos is approximately 8 minutes drive from Beekman Canopies in Stikland Industrial area.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer accommodation for Consol Glass workers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we regularly host workers from Consol Glass and other Stikland manufacturers. We're only 10 minutes away with easy N1 access.",
            },
          },
          {
            "@type": "Question",
            name: "Is there secure parking for work vehicles?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we have secure gated parking with CCTV monitoring, suitable for work vehicles and bakkies.",
            },
          },
          {
            "@type": "Question",
            name: "What are your monthly rates for factory workers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For stays of 14+ nights, we offer discounted rates starting from R500/night. Contact us for a custom quote based on your team size and duration.",
            },
          },
          {
            "@type": "Question",
            name: "Can logistics crews cook their own meals?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we have a fully equipped communal kitchen with gas stove, microwave, air fryer, and fridge. Standard Plus and Double rooms also include private bar fridges.",
            },
          },
          {
            "@type": "Question",
            name: "How do I book for a team of warehouse workers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "WhatsApp us on 074 524 5703 with your team size, preferred room types, and dates. We'll send you a quote and confirm availability immediately.",
            },
          },
        ],
      },
    ],
  }

  const nearbyEmployers = [
    { name: "Beekman Canopies", type: "Manufacturing", distance: "8 min drive", icon: Factory },
    { name: "Consol Glass", type: "Glass Manufacturing", distance: "10 min drive", icon: Factory },
    { name: "Stikland Logistics Hub", type: "Warehousing & Distribution", distance: "7 min drive", icon: Factory },
    { name: "Mill Park Industrial", type: "Mixed Industrial", distance: "5 min drive", icon: Factory },
    { name: "Sacks Circle", type: "Industrial Park", distance: "3 min drive", icon: Factory },
    { name: "N1 Highway Access", type: "Major Route", distance: "10 min drive", icon: MapPin },
  ]

  const workerTypes = [
    { title: "Factory Workers", description: "Consol Glass, Beekman & manufacturing staff", icon: Factory },
    { title: "Logistics Crews", description: "Warehouse staff, drivers & distribution teams", icon: Users },
    { title: "Maintenance Teams", description: "Industrial maintenance & repair contractors", icon: Wrench },
    { title: "Construction Workers", description: "Site crews on Stikland area projects", icon: HardHat },
  ]

  const faqs = [
    {
      question: "How far is 60 on Kosmos from Beekman Canopies?",
      answer:
        "We're approximately 8 minutes drive from Beekman Canopies via Voortrekker Road. Easy morning commute with minimal traffic at shift change times.",
    },
    {
      question: "Do you offer accommodation for Consol Glass workers?",
      answer:
        "Yes, we regularly host workers from Consol Glass and other Stikland manufacturers. We're only 10 minutes away with easy N1 access. Many factory workers choose us for the self-catering kitchen which saves on meal costs.",
    },
    {
      question: "Is there secure parking for work vehicles?",
      answer:
        "Absolutely. We have secure gated parking with CCTV monitoring, suitable for work vehicles, bakkies, and company cars. Your vehicle is safe behind locked gates overnight.",
    },
    {
      question: "What are your monthly rates for factory workers?",
      answer:
        "For stays of 14+ nights, we offer discounted rates starting from R500/night. The longer you stay, the better the rate. Contact us with your team size and duration for a custom quote.",
    },
    {
      question: "Can logistics crews cook their own meals?",
      answer:
        "Yes, we have a fully equipped communal kitchen with gas stove, microwave, air fryer, kettle, and shared fridge. Standard Plus, Double, and Triple rooms also include private bar fridges in-room.",
    },
    {
      question: "How do I book for a team of warehouse workers?",
      answer:
        "Simply WhatsApp us on 074 524 5703 with your team size, preferred room types, and dates. We'll check availability and send you a quote within the hour. No deposit needed for weekly bookings - just R50 to secure.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/exterior-building.png"
            alt="Contractor Accommodation Near Stikland Industrial - 60 on Kosmos"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Factory className="w-4 h-4" />
              <span>8 Min to Beekman | 10 Min to Consol Glass</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Contractor Accommodation Near Stikland Industrial
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Affordable self-catering rooms for factory workers, logistics crews & maintenance teams.
              <br className="hidden md:block" />
              From R530/night with weekly cleaning, WiFi & secure parking.
            </p>
            <p className="text-lg text-sage-300 mb-8">
              Close to Beekman Canopies, Consol Glass, Mill Park Industrial & Stikland Logistics Hub
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg">
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20looking%20for%20contractor%20accommodation%20near%20Stikland%20Industrial">
                  WhatsApp Us Now
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
              <span>Self-Catering Kitchen</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - adds word count */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Accommodation for Stikland Industrial Workers
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              60 on Kosmos provides affordable, comfortable accommodation for contractors and workers employed in the
              Stikland Industrial area. Located in Bellville South, we're ideally positioned just 8 minutes from Beekman
              Canopies and 10 minutes from Consol Glass - two of the largest employers in the region.
            </p>
            <p>
              Our self-catering guesthouse caters specifically to factory workers, logistics crews, maintenance teams,
              and construction contractors who need a clean, secure place to stay during their work assignments. Unlike
              hotels, we offer a communal kitchen where you can prepare your own meals, saving significant money on
              daily food costs.
            </p>
            <p>
              With easy access to the N1 highway, Mill Park Industrial, Sacks Circle, and the broader Stikland logistics
              hub, our location minimizes commute times so you can focus on your work. All rooms include weekly
              cleaning, fresh linen, free WiFi, and secure gated parking for your vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* Nearby Employers - 6 cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Close to Major Stikland Employers</h2>
          <p className="text-gray-600 text-center mb-8">Quick commute to all major industrial sites</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nearbyEmployers.map((employer, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-sage-100 p-3 rounded-lg">
                    <employer.icon className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{employer.name}</h3>
                    <p className="text-gray-500 text-sm">{employer.type}</p>
                    <p className="text-sage-600 font-semibold mt-1">{employer.distance}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Stays With Us */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Who Stays With Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workerTypes.map((worker, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="bg-sage-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <worker.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{worker.title}</h3>
                <p className="text-gray-600 text-sm">{worker.description}</p>
              </div>
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
                <p className="text-xs text-gray-500 mb-4">Budget-friendly option</p>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> 2 Single Beds
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> Ensuite Bathroom
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> Communal Kitchen Access
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Standard Plus</h3>
                <p className="text-3xl font-bold text-sage-600">R580</p>
                <p className="text-gray-500 text-sm mb-4">/night</p>
                <p className="text-xs text-gray-500 mb-4">With private bar fridge</p>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> 2 Single Beds
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> Ensuite Bathroom
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> Private Bar Fridge
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
                <p className="text-xs text-gray-500 mb-4">Supervisor's choice</p>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> Double Bed
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> Bar Fridge + Microwave
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> Workspace Desk
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Triple Suite</h3>
                <p className="text-3xl font-bold text-sage-600">R750</p>
                <p className="text-gray-500 text-sm mb-4">/night</p>
                <p className="text-xs text-sage-700 font-semibold mb-4">Only R250 per person!</p>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> 3 Single Beds
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> Ensuite Bathroom
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> Bar Fridge Included
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Monthly rates available for stays of 14+ nights. Contact us for custom quotes.
          </p>
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
                <p className="text-gray-600">
                  Safe parking for work vehicles and bakkies behind locked gates with CCTV monitoring
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Utensils className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Self-Catering Kitchen</h3>
                <p className="text-gray-600">Full kitchen with gas stove, microwave, air fryer to save on meal costs</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Wifi className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Free WiFi</h3>
                <p className="text-gray-600">Stay connected with family and send work reports back to the office</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">24/7 Security</h3>
                <p className="text-gray-600">CCTV cameras and secure perimeter for complete peace of mind</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Weekly Cleaning</h3>
                <p className="text-gray-600">
                  Fresh linen and room cleaning every week - focus on your work, not housekeeping
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Quick Commute</h3>
                <p className="text-gray-600">8 min to Beekman, 10 min to Consol, 10 min to N1 highway</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - critical for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center mb-8">Common questions from Stikland area workers</p>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sage-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Working in Stikland Industrial? Book Your Stay Today</h2>
          <p className="text-sage-100 text-lg mb-8">
            Close to Beekman Canopies, Consol Glass, Mill Park Industrial and the Stikland Logistics Hub.
            <br />
            Self-catering rooms from R530/night.
          </p>
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
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold mb-6 text-center">Also Serving Contractors In</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contractor-accommodation" className="text-sage-600 hover:underline">
              Bellville South
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contractor-accommodation-parow" className="text-sage-600 hover:underline">
              Parow Industrial
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contractor-accommodation-goodwood" className="text-sage-600 hover:underline">
              Goodwood
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contractor-accommodation-northern-suburbs" className="text-sage-600 hover:underline">
              Northern Suburbs
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

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
  FileText,
  Star,
  Quote,
  Building2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FAQSchema } from "@/components/faq-schema"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { CompanyEnquiryForm } from "@/components/company-enquiry-form"

export const metadata: Metadata = {
  title: "Contractor Accommodation Bellville South | 60 on Kosmos",
  description: "Accommodation for small contractor and project teams in Bellville South. Private ensuite rooms, secure parking, WiFi, weekly cleaning, flexible extensions and company invoices.",
  alternates: {
    canonical: "https://www.60onkosmos.co.za/contractor-accommodation",
  },
  keywords: [
    "contractor accommodation bellville",
    "guesthouse bellville south",
    "guesthouse near northern suburbs",
    "guesthouse near kuils river",
    "contractor accommodation bellville south",
    "project team accommodation cape town",
    "corporate accommodation bellville",
    "technician accommodation cape town",
    "long-stay contractor accommodation",
    "weekly contractor accommodation cape town",
    "monthly contractor accommodation cape town",
    "self catering contractor accommodation bellville",
    "project accommodation bellville south",
    "site supervisor accommodation bellville",
    "consulting and engineering staff accommodation",
    "contractor teams accommodation bellville",
  ],
  openGraph: {
    title: "Contractor Accommodation Bellville South | 60 on Kosmos",
    description: "Accommodation for small contractor and project teams in Bellville South. Private ensuite rooms, secure parking, WiFi, weekly cleaning, flexible extensions and company invoices.",
    url: "https://www.60onkosmos.co.za/contractor-accommodation",
    type: "website",
    images: [
      {
        url: "https://www.60onkosmos.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contractor Accommodation Bellville",
      },
    ],
  },
}

export default function ContractorAccommodationPage() {
  const serviceAreas = [
    { name: "Bellville South", href: "/accommodation-bellville-south" },
    { name: "Sacks Circle Industrial", href: "/contractor-accommodation" },
    { name: "Stikland Industrial", href: "/contractor-accommodation-stikland" },
    { name: "Blackheath & Saxenburg Park", href: "/contractor-accommodation-blackheath-saxenburg" },
    { name: "Airport Industria", href: "/contractor-accommodation-airport-industria" },
    { name: "Parow & N1 City", href: "/contractor-accommodation-n1-city-parow" },
    { name: "Goodwood & GrandWest", href: "/contractor-accommodation-grandwest-goodwood" },
    { name: "Century City", href: "/contractor-accommodation-century-city" },
    { name: "Cape Town Northern Suburbs", href: "/contractor-accommodation-northern-suburbs" },
  ]

  const roomTypes = [
    {
      name: "Standard Twin Room",
      tagline: "The Contractor Essential",
      price: "R580",
      weeklyPrice: "R522",
      monthlyPrice: "R464",
      capacity: "1-2 People",
      layout: "2 Single Beds",
      bestFor: "2 contractors or professionals sharing",
      image: "/images/standard-twin-room.jpg",
      features: [
        "2 comfortable single beds",
        "Private ensuite bathroom",
        "Free WiFi",
        "Communal kitchenette access",
        "Weekly cleaning included",
        "Secure parking",
      ],
      highlight: false,
    },
    {
      name: "Deluxe Twin Room",
      tagline: "The Comfort Upgrade",
      price: "R650",
      weeklyPrice: "R585",
      monthlyPrice: "R520",
      capacity: "1-2 People",
      layout: "2 Single Beds",
      bestFor: "2 professionals wanting extra comfort",
      image: "/images/deluxe-twin-room.jpg",
      features: [
        "2 comfortable single beds",
        "Private ensuite bathroom",
        "Bar fridge",
        "Premium bedding",
        "Free WiFi",
        "Weekly cleaning included",
        "Secure parking",
      ],
      highlight: false,
    },
    {
      name: "Double Room",
      tagline: "The Manager's Choice",
      price: "R680",
      weeklyPrice: "R612",
      monthlyPrice: "R544",
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
      highlight: true,
    },
    {
      name: "Triple Room",
      tagline: "Best Value for Crews",
      price: "R840",
      weeklyPrice: "R756",
      monthlyPrice: "R672",
      capacity: "3 People",
      layout: "3 Single Beds",
      bestFor: "3-person contractor crews",
      image: "/images/triple-room.jpg",
      features: [
        "3 comfortable single beds",
        "Private ensuite bathroom",
        "Kettle & cups",
        "Workspace area",
        "Free WiFi",
        "Weekly cleaning included",
        "Secure parking",
      ],
      highlight: false,
    },
  ]

  const contractorFAQs = [
    {
      question: "How much does contractor accommodation cost in Bellville South?",
      answer: "Contractor rates at 60 on Kosmos start from R580/night (Standard Twin, 1–6 nights). Weekly rates (7–27 nights) from R522/night. Monthly rates (28+ nights) from R464/night. Long-stay and multi-room rates are confirmed on quotation.",
    },
    {
      question: "Is there secure parking for work vehicles and bakkies?",
      answer: "Yes, we have secure gated parking with CCTV for bakkies and work vehicles. If you need to bring a trailer, please confirm with us before booking so we can check space is available.",
    },
    {
      question: "Can contractors cook their own meals?",
      answer: "Yes. All guests have access to a communal kitchenette for preparing light meals. Deluxe Twin, Double, and Triple rooms include private bar fridges; the Standard Twin does not.",
    },
    {
      question: "What amenities are included in the room rate?",
      answer: "All rooms include free WiFi, weekly cleaning with fresh linen, secure gated parking, CCTV, ensuite bathroom, and access to the communal kitchenette. Electricity and water are included for normal use.",
    },
    {
      question: "Can you accommodate work crews or teams?",
      answer: "Yes, our Triple Room accommodates 3 people, and we can arrange multiple rooms for larger teams — up to 8 guests in total. Many contractors book several rooms for their crews on project assignments. Tell us your team size for a company quote.",
    },
    {
      question: "Do you provide company invoices?",
      answer: "Yes, corporate invoicing is available, with payment terms confirmed on quotation.",
    },
  ]

  const breadcrumbItems = [
    { name: "Home", url: "" },
    { name: "Contractor Accommodation", url: "/contractor-accommodation" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <FAQSchema faqs={contractorFAQs} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Breadcrumbs items={breadcrumbItems} />

      {/* 1. Introduction and company-quote CTA */}
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
              <span>For Project Teams & Professionals</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
              Contractor & Project Team Accommodation in Bellville South
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 text-pretty max-w-3xl mx-auto">
              Practical accommodation for small contractor, technician, installer and project teams working across
              Cape Town&apos;s Northern Suburbs. Suitable for teams of up to 8 guests, with private ensuite rooms,
              WiFi, secure parking, weekly and monthly stay options and company invoicing.
            </p>
            <p className="text-white font-semibold mb-8 text-pretty max-w-2xl mx-auto">
              Send us your team size, dates and work location for a company quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg">
                <a href="#company-enquiry">Get a Company Quote</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg"
              >
                <a
                  href="https://wa.me/27745245703?text=Hi%2C%20I%27d%20like%20a%20company%20quote.%20Company%20name%3A%20%2C%20Number%20of%20guests%3A%20%2C%20Arrival%20date%3A%20%2C%20Departure%20date%3A%20%2C%20Work%20location%3A%20%2C%20Room-sharing%20requirements%3A%20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

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

      {/* 2. Benefits for project managers */}
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
                Get a custom quote for your entire team. We offer discounted rates for multiple rooms and extended
                stays. Invoices are provided on request.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sage-400" />
                  <span className="text-sm">Multiple room discounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sage-400" />
                  <span className="text-sm">Company invoices</span>
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
                <a href="#company-enquiry">
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
                    <span className="font-medium">Corporate invoicing available</span>
                    <p className="text-gray-400 text-sm">Payment terms confirmed on quotation</p>
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
                    <span className="font-medium">Receipts on request</span>
                    <p className="text-gray-400 text-sm">Digital or printed receipts for per diem claims</p>
                  </div>
                </li>
              </ul>
              <p className="text-gray-400 text-sm mt-4 pt-4 border-t border-gray-700">
                Flexible week-by-week billing — extend a stay or add a room as your project runs, invoiced to your
                company as you go. No lease or fixed term. A refundable security deposit may apply depending on the
                length and terms of the booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Room combinations and rates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Room Combination</h2>
            <p className="text-lg text-gray-600">Four room types, suitable for teams of up to 8 guests</p>
            <p className="text-sm text-gray-600 mt-4">A refundable security deposit may apply to stays of seven nights or longer. Terms on quotation.</p>
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

          <div className="mt-10 max-w-2xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              Long-stay and multi-room contractor rates are available on quotation — tell us your team size, dates
              and work location and we&apos;ll confirm the best room combination and company rate.
            </p>
            <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700">
              <a href="#company-enquiry">
                <Building2 className="mr-2 h-5 w-5" />
                Get Company Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Facilities included */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Facilities Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Car className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Secure Gated Parking</h3>
                <p className="text-gray-600">Parking for work vehicles behind locked gates with CCTV</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Utensils className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Self-Catering</h3>
                <p className="text-gray-600">Communal kitchenette for preparing light meals</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Wifi className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Free WiFi</h3>
                <p className="text-gray-600">Stay connected for calls, email and admin</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">CCTV & ADT Armed Response</h3>
                <p className="text-gray-600">CCTV monitoring and secure gated parking</p>
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
              <FileText className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Company Invoicing</h3>
                <p className="text-gray-600">Invoices provided on request for company claims</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Relevant work areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Work Areas We Regularly Serve</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            60 on Kosmos is based in Bellville South, close to these Cape Town Northern Suburbs work areas.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="flex items-center gap-2 bg-white hover:bg-sage-50 border border-gray-200 hover:border-sage-300 rounded-lg p-4 transition-colors"
              >
                <MapPin className="w-4 h-4 text-sage-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Verified reviews */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Verified Guest Reviews</h2>
            <p className="text-gray-600 mb-8">Real feedback from guests on trusted platforms</p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
              <Card className="p-6 border-sage-200 text-center">
                <p className="text-lg font-bold text-gray-900 mb-2">Booking.com Reviews</p>
                <Button asChild variant="outline" size="sm">
                  <a href="https://www.booking.com/hotel/za/60-on-kosmos-cape-town.html" target="_blank" rel="noopener noreferrer">
                    View our latest verified reviews
                  </a>
                </Button>
              </Card>
              <Card className="p-6 border-sage-200 text-center">
                <p className="text-lg font-bold text-gray-900 mb-2">Airbnb Reviews</p>
                <Button asChild variant="outline" size="sm">
                  <a href="https://www.airbnb.co.za/rooms/1055447623" target="_blank" rel="noopener noreferrer">
                    View our latest verified reviews
                  </a>
                </Button>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-sage-200 mb-2" />
              <p className="text-gray-700 mb-4 text-sm">
                &quot;They are very welcoming and caring. Comfortable place and nice environment, it was very clean.&quot;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-sm">Hlumisa</p>
                <p className="text-xs text-gray-500">Booking.com - South Africa</p>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-sage-200 mb-2" />
              <p className="text-gray-700 mb-4 text-sm">
                &quot;The welcoming note made me feel welcomed, the room was clean and the host was super friendly.&quot;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-sm">Taukobong</p>
                <p className="text-xs text-gray-500">Booking.com - South Africa</p>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-sage-200 mb-2" />
              <p className="text-gray-700 mb-4 text-sm">
                &quot;Enjoyed my stay at 60 on Kosmos. Very convenient, safe, and friendly staff. The rooms are very neat and clean.&quot;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-sm">Dineo S.</p>
                <p className="text-xs text-gray-500">Google review</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Short FAQ */}
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

      {/* 8. Enquiry form and final CTA */}
      <section id="company-enquiry" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need accommodation for your team?</h2>
            <p className="text-gray-600 text-pretty">
              Send us your team size, dates and work location. We&apos;ll confirm the best available room
              combination and company rate.
            </p>
          </div>
          <CompanyEnquiryForm />
        </div>
      </section>

      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8 text-sage-50">
            Standard Twin R580 | Deluxe Twin R650 | Double R680 | Triple R840/night
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
          <h3 className="text-xl font-bold text-center mb-6">Contractor Accommodation by Area</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/contractor-accommodation-grandwest-goodwood" className="text-sage-600 hover:underline">
              GrandWest & Goodwood
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/contractor-accommodation-n1-city-parow" className="text-sage-600 hover:underline">
              N1 City & Parow
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/contractor-accommodation-blackheath-saxenburg" className="text-sage-600 hover:underline">
              Blackheath & Saxenburg
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/contractor-accommodation-airport-industria" className="text-sage-600 hover:underline">
              Airport Industria
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/contractor-accommodation-century-city" className="text-sage-600 hover:underline">
              Century City
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/contractor-accommodation-uwc-cput-bellville" className="text-sage-600 hover:underline">
              UWC & CPUT Bellville
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/contractor-accommodation-kuils-river" className="text-sage-600 hover:underline">
              Kuilsriver
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/contractor-accommodation-northern-suburbs" className="text-sage-600 hover:underline">
              Northern Suburbs
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/accommodation-durbanville" className="text-sage-600 hover:underline">
              Durbanville
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/accommodation-brackenfell" className="text-sage-600 hover:underline">
              Brackenfell
            </Link>
          </div>
          <h3 className="text-xl font-bold text-center mb-6">More Options</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/monthly-accommodation" className="text-sage-600 hover:underline">
              Monthly Stays
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/rooms" className="text-sage-600 hover:underline">
              All Room Types
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

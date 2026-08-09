import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MapPin,
  Phone,
  Star,
  Wifi,
  Car,
  Shield,
  Coffee,
  CheckCircle2,
  Users,
  Briefcase,
  GraduationCap,
  ArrowRight,
} from "lucide-react"
import { TrustBadges } from "@/components/trust-badges"
import { LatestBlogPosts } from "@/components/latest-blog-posts"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "60 on Kosmos - Bellville Accommodation for Teams",
  description: "Flexible accommodation for project teams from R580/night. Private rooms, secure parking, WiFi, and monthly rates for stays of 28 nights or more.",
  alternates: {
    canonical: "https://www.60onkosmos.co.za/",
  },
  openGraph: {
    title: "60 on Kosmos - Bellville Accommodation for Teams",
    description: "Flexible accommodation for project teams from R580/night. Private rooms, secure parking, WiFi, and monthly rates for stays of 28 nights or more.",
    url: "https://www.60onkosmos.co.za/",
    type: "website",
    images: [
      {
        url: "https://www.60onkosmos.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "60 on Kosmos Guesthouse Bellville",
      },
    ],
  },
}

export default function HomePage() {
  const roomTypes = [
    {
      name: "Standard Twin Room",
      price: "From R580/night",
      image: "/images/standard-twin-room.jpg",
      bestFor: "Best for 2 contractors sharing",
      features: ["2 single beds", "Private ensuite", "Free WiFi", "Kitchen access"],
    },
    {
      name: "Deluxe Twin Room",
      price: "From R650/night",
      image: "/images/deluxe-twin-room.jpg",
      bestFor: "Best for professionals wanting extra comfort",
      features: ["2 single beds", "Private ensuite", "Bar fridge", "Premium linens"],
    },
    {
      name: "Double Room",
      price: "From R680/night",
      image: "/images/sage-double-room.png",
      bestFor: "Best for solo professionals or couples",
      features: ["Double bed", "Private ensuite", "Bar fridge", "Premium bedding"],
    },
    {
      name: "Triple Room",
      price: "From R840/night",
      image: "/images/triple-room.jpg",
      bestFor: "Best for 3-person crews",
      features: ["3 single beds", "Private ensuite", "From R224/person monthly", "Best value"],
    },
  ]

  return (
    <>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
          <Image
            src="/images/exterior-building.png"
            alt="60 on Kosmos Guesthouse Bellville South - Affordable accommodation near UWC and Tygerberg Hospital Cape Town"
            fill
            className="object-cover brightness-50"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 leading-tight">
              Private-Ensuite Accommodation for Project Teams
              <br />
              <span className="text-sage-300">In Bellville South, Cape Town</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 px-2">
              Flexible weekly and monthly accommodation for contractors, project teams and working professionals. Four private-ensuite rooms accommodate teams of up to nine people.
              <br className="hidden md:block" />
              WiFi, secure gated parking, and weekly housekeeping included. Invoices are provided on request.
            </p>
            <div className="flex flex-col gap-2 sm:gap-3 md:flex-row md:gap-4 justify-center items-center px-4 sm:px-0">
              <Button
                asChild
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white w-full sm:w-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg"
              >
                <a href="/book-now">Book Your Stay</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-sage-600 hover:bg-sage-50 w-full sm:w-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg"
              >
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20monthly%20rates">
                  WhatsApp for Monthly Rates
                </a>
              </Button>
            </div>
            <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2">
              <a href="https://www.booking.com/hotel/za/60-on-kosmos-cape-town.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sage-600 transition">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm sm:text-base lg:text-lg font-semibold">8.0/10 on Booking.com</span>
              </a>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadges />

        <section className="bg-gray-900 text-white py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-sage-600 p-3 rounded-full">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">Perfect for Project Teams</h2>
                  <p className="text-gray-300">Flexible terms, group discounts, and corporate billing available | Monthly rates for 28+ nights</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8">
                  <Link href="/contractor-accommodation">
                    For Teams & Contractors
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20looking%20for%20accommodation%20for%20my%20team">
                    WhatsApp Your Team
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-sage-600 text-white py-4 sm:py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-sm sm:text-base">Near N1 Highway</div>
                  <div className="text-xs sm:text-sm opacity-90">Easy site access</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-sm sm:text-base">Secure Gated Parking</div>
                  <div className="text-xs sm:text-sm opacity-90">CCTV surveillance included</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <Wifi className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-sm sm:text-base">Free High-Speed WiFi</div>
                  <div className="text-xs sm:text-sm opacity-90">Stay connected</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Rooms</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Clean, comfortable ensuite rooms with free WiFi, secure parking, and weekly cleaning included.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {roomTypes.map((room, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48 sm:h-52">
                    <Image
                      src={room.image || "/placeholder.svg"}
                      alt={`${room.name} - Accommodation Bellville South`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 33vw"
                      loading={index > 0 ? "lazy" : undefined}
                      quality={80}
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg sm:text-xl">{room.name}</CardTitle>
                    <CardDescription className="text-sm text-sage-600 font-medium">
                      {room.bestFor}
                    </CardDescription>
                    <div className="mt-2">
<span className="text-base font-semibold text-gray-900">{room.price}</span>
                <span className="text-sm text-green-600 ml-2">Monthly rates for 28+ nights</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                      <a href="/rooms">View Details</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 w-full sm:w-auto">
                <Link href="/rooms">View All Rooms</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Who Stays With Us?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                From construction crews to international students—we welcome project-based teams and working professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow ring-2 ring-sage-600">
                <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4">
                  <div className="bg-sage-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                  <Briefcase className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-sage-600" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Project Teams & Contractors</h3>
<p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
            Daily and weekly rates, plus monthly rates for stays of 28 nights or more. Group quotes are available, and check-in is from 14:00.
          </p>
                  <Button asChild className="bg-sage-600 hover:bg-sage-700 w-full">
                    <Link href="/contractor-accommodation">Team Rates</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4">
                  <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-sage-600" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">International Students</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    5km from UWC, 4.5km from CPUT. Visa support, payment plans, and flexible arrival times.
                  </p>
                  <Button asChild variant="outline" className="border-sage-600 text-sage-600 bg-transparent w-full">
                    <Link href="/rooms">Student Options</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4">
                  <Users className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-sage-600" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Medical & Wellness Professionals</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    8km from Tygerberg Hospital. Ideal for locums, training, and healthcare professionals.
                  </p>
                  <Button asChild variant="outline" className="border-sage-600 text-sage-600 bg-transparent w-full">
                    <Link href="/rooms">Healthcare Housing</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">What's Included</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Wifi className="w-7 h-7 sm:w-8 sm:h-8 text-sage-600" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Free WiFi</h3>
                <p className="text-gray-600 text-xs sm:text-sm">High-speed internet</p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Car className="w-7 h-7 sm:w-8 sm:h-8 text-sage-600" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Secure Parking</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Locked gates + CCTV</p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-sage-600" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Weekly Cleaning</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Fresh linen included</p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Coffee className="w-7 h-7 sm:w-8 sm:h-8 text-sage-600" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Self-Catering</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Kitchen facilities</p>
              </div>
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sage-600 text-sage-600 bg-transparent w-full sm:w-auto"
              >
                <Link href="/amenities">View All Amenities</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <LatestBlogPosts />

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Frequently Asked Questions</h2>
              <p className="text-base sm:text-lg text-gray-600">Quick answers to common questions about our accommodation</p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Can you accommodate teams of up to 9 people?</h3>
                <p className="text-gray-700 text-sm sm:text-base">Yes. Our four private-ensuite guest rooms can accommodate teams of up to nine people, depending on the required room-sharing arrangement. Multi-room and full guest-accommodation bookings are subject to availability.</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">How does invoicing work?</h3>
                <p className="text-gray-700 text-sm sm:text-base">One consolidated monthly invoice to your company, month-to-month flexible booking arrangement. A refundable security deposit may apply to extended stays.</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Is there parking for work vehicles?</h3>
                <p className="text-gray-700 text-sm sm:text-base">Yes, secure off-street parking with space for bakkies and trailers, plus CCTV and a live-in caretaker.</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Can the team cook?</h3>
                <p className="text-gray-700 text-sm sm:text-base">Yes, guests have kitchen access.</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">How fast can you confirm a booking?</h3>
                <p className="text-gray-700 text-sm sm:text-base">WhatsApp 074 524 5703 with dates and team size; quotes usually go out the same day.</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Do you have real guest reviews?</h3>
                <p className="text-gray-700 text-sm sm:text-base">Yes — 46 verified reviews at 8.0/10 &quot;Very Good&quot; on <a href="https://www.booking.com/hotel/za/60-on-kosmos-cape-town.html" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-700 font-semibold underline">Booking.com</a>, and Superhost status with a 4.65 rating on <a href="https://www.airbnb.co.za/rooms/1055447623" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-700 font-semibold underline">Airbnb</a>. Both link directly to the real listings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-sage-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready for Your Next Accommodation?</h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
              Daily rates from R580/night | Monthly rates for 28+ nights | Group discounts available
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-sage-600 hover:bg-gray-100 w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
              >
                <Link href="/book-now">Book Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-sage-700 w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg bg-transparent"
              >
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20looking%20for%20accommodation%20for%20myself%20or%20my%20team">Get in Touch</a>
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* FAQPage Schema (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can you take a crew of 8–10 workers for several months?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We're a four-room house designed for smaller skilled teams; long labour-crew deployments are usually better served by a rented house near site.",
                },
              },
              {
                "@type": "Question",
                name: "How does invoicing work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "One consolidated monthly invoice to your company, month-to-month flexible booking arrangement. A refundable security deposit may apply to extended stays.",
                },
              },
              {
                "@type": "Question",
                name: "Is there parking for work vehicles?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, secure off-street parking with space for bakkies and trailers, plus CCTV and a live-in caretaker.",
                },
              },
              {
                "@type": "Question",
                name: "Can the team cook?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, guests have kitchen access.",
                },
              },
              {
                "@type": "Question",
                name: "How fast can you confirm a booking?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "WhatsApp 074 524 5703 with dates and team size; quotes usually go out the same day.",
                },
              },
              {
                "@type": "Question",
                name: "Do you have real guest reviews?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — 46 verified reviews at 8.0/10 \"Very Good\" on Booking.com, and Superhost status with a 4.65 rating on Airbnb. Both link directly to the real listings.",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}

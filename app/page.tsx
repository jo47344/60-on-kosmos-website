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
import { StructuredData } from "@/components/structured-data"
import { TrustBadges } from "@/components/trust-badges"
import { LatestBlogPosts } from "@/components/latest-blog-posts"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "60 on Kosmos Guesthouse Bellville | Contractor Accommodation from R464/night",
  description:
    "Contractor accommodation in Bellville South with private ensuite rooms. Monthly rates from R464/night. Self-catering, secure parking, WiFi, weekly cleaning. Perfect for contractors, project teams, and working professionals.",
  alternates: {
    canonical: "https://60onkosmos.co.za",
  },
  openGraph: {
    title: "60 on Kosmos | Bellville South Contractor Accommodation with Private Ensuite Rooms",
    description: "Contractor accommodation with private ensuite rooms. Monthly rates from R464/night. Secure parking, WiFi, weekly cleaning.",
    url: "https://60onkosmos.co.za",
    type: "website",
  },
}

export default function HomePage() {
  const roomTypes = [
    {
      name: "Standard Twin Room",
      price: "From R580/night",
      monthlyPrice: "R464/night monthly",
      image: "/images/twin-room-yellow.png",
      bestFor: "Best for 2 contractors sharing",
      features: ["2 single beds", "Private ensuite", "Free WiFi", "Kitchen access"],
    },
    {
      name: "Double Room",
      price: "From R680/night",
      monthlyPrice: "R544/night monthly",
      image: "/images/sage-double-room.png",
      bestFor: "Best for solo professionals or couples",
      features: ["Double bed", "Private ensuite", "Bar fridge", "Premium bedding"],
    },
    {
      name: "Triple Room",
      price: "From R840/night",
      monthlyPrice: "R672/night monthly",
      image: "/images/triple-room-full.jpg",
      bestFor: "Best for 3-person crews",
      features: ["3 single beds", "Private ensuite", "From R224/person monthly", "Best value"],
    },
  ]

  return (
    <>
      <StructuredData />

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
              Bellville South Contractor Accommodation
              <br />
              <span className="text-sage-300">with Private Ensuite Rooms</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 px-2">
              Affordable self-catering accommodation for contractors, project teams, and working professionals.
              <br className="hidden md:block" />
              Secure parking, free WiFi, weekly cleaning, and monthly rates available.
            </p>
            <div className="flex flex-col gap-2 sm:gap-3 md:flex-row md:gap-4 justify-center items-center px-4 sm:px-0">
              <Button
                asChild
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white w-full sm:w-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg"
              >
                <a href="/rooms">View Rooms & Rates</a>
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
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm sm:text-base lg:text-lg font-semibold">4.8 Stars</span>
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
                  <Briefcase className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">Contractor Accommodation</h2>
                  <p className="text-gray-300">Monthly rates from R464/night | All rooms have private ensuite bathrooms</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8">
                  <Link href="/contractor-accommodation">
                    View Contractor Rates
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20monthly%20contractor%20rates">
                    WhatsApp for Monthly Rates
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
                  <div className="font-semibold text-sm sm:text-base">24/7 CCTV Security</div>
                  <div className="text-xs sm:text-sm opacity-90">Secure parking included</div>
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
                      <span className="text-sm text-green-600 ml-2">({room.monthlyPrice})</span>
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow ring-2 ring-sage-600">
                <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4">
                  <div className="bg-sage-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                  <Briefcase className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-sage-600" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Contractors & Workers</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Purpose-built for construction crews. Secure parking, self-catering, weekly cleaning.
                  </p>
                  <Button asChild className="bg-sage-600 hover:bg-sage-700 w-full">
                    <Link href="/contractor-accommodation">Contractor Rates</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4">
                  <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-sage-600" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Students</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    5km from UWC, 4.5km from CPUT. Perfect for visiting parents and short-term stays.
                  </p>
                  <Button asChild variant="outline" className="border-sage-600 text-sage-600 bg-transparent w-full">
                    <Link href="/near-uwc-bellville">Student Options</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4">
                  <Users className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-sage-600" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Medical Professionals</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    8km from Tygerberg Hospital. Ideal for locums, nursing students, and visitors.
                  </p>
                  <Button asChild variant="outline" className="border-sage-600 text-sage-600 bg-transparent w-full">
                    <Link href="/accommodation-near-tygerberg-hospital">Hospital Accommodation</Link>
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

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-sage-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Book?</h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
              Monthly rates from R464/night | Special crew pricing for 2+ rooms
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-sage-600 hover:bg-gray-100 w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
              >
                <Link href="/rooms">View Rooms & Rates</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-sage-700 w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg bg-transparent"
              >
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20monthly%20rates">WhatsApp for Monthly Rates</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

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
  title: "60 on Kosmos Guesthouse Bellville | Affordable Accommodation from R530",
  description:
    "Affordable guesthouse in Bellville South. Perfect for contractors, students, and professionals. Near UWC, CPUT, Tygerberg Hospital. Weekly cleaning, WiFi, secure parking. From R530/night.",
  alternates: {
    canonical: "https://60onkosmos.co.za",
  },
  openGraph: {
    title: "60 on Kosmos Guesthouse Bellville South | Affordable Accommodation from R530",
    description: "Affordable guesthouse in Bellville South near UWC, CPUT, Tygerberg Hospital. From R530/night.",
    url: "https://60onkosmos.co.za",
    type: "website",
  },
}

export default function HomePage() {
  const roomTypes = [
    {
      name: "Standard Twin Room",
      price: "From R530/night",
      image: "/images/twin-room-yellow.png",
      features: ["2 single beds", "Ensuite bathroom", "Free WiFi", "Communal kitchen access"],
    },
    {
      name: "Double Room",
      price: "From R620/night",
      image: "/images/sage-double-room.png",
      features: ["1 double bed", "Ensuite bathroom", "Bar fridge", "Microwave", "Free WiFi"],
    },
    {
      name: "Triple Room",
      price: "From R750/night",
      image: "/images/triple-room-full.jpg",
      features: ["3 single beds", "Ensuite bathroom", "Bar fridge", "R250 per person"],
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
              Welcome to 60 on Kosmos
              <br />
              <span className="text-sage-300">Guesthouse Bellville South</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 px-2">
              Affordable ensuite accommodation for contractors, students & professionals | From R530/night
            </p>
            <div className="flex flex-col gap-2 sm:gap-3 md:flex-row md:gap-4 justify-center items-center px-4 sm:px-0">
              <Button
                asChild
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white w-full sm:w-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg"
              >
                <a href="/book-now">Book Now</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-sage-600 hover:bg-sage-50 w-full sm:w-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg"
              >
                <a href="tel:+27745245703">
                  <Phone className="mr-2 h-5 w-5" />
                  074 524 5703
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
                  <p className="text-gray-300">Standard R530 | Standard Plus R580 | Double R620 | Triple R750/night</p>
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
                  <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20contractor%20accommodation">
                    WhatsApp Quote
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
                    <CardDescription className="text-base sm:text-lg font-semibold text-sage-600">
                      {room.price}
                    </CardDescription>
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
              Contractors: Standard R530 | Standard Plus R580 | Double R620 | Triple R750/night
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-sage-600 hover:bg-gray-100 w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
              >
                <Link href="/contractor-accommodation">Contractor Rates</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-sage-700 w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg bg-transparent"
              >
                <a href="tel:+27745245703">Call 074 524 5703</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

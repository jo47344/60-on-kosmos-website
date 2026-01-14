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
    title: "60 on Kosmos Guesthouse Bellville | Affordable Accommodation from R530",
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
      features: ["2 single beds", "Ensuite bathroom", "Free WiFi", "Tea & coffee"],
    },
    {
      name: "Double Room",
      price: "From R620/night",
      image: "/images/sage-double-room.png",
      features: ["1 double bed", "Ensuite bathroom", "Bar fridge", "Microwave", "Free WiFi"],
    },
    {
      name: "Deluxe Twin Room",
      price: "From R580/night",
      image: "/images/deluxe-twin-navy.jpg",
      features: ["2 single beds", "Navy headboards", "Ensuite bathroom", "Bar fridge", "Premium bedding"],
    },
    {
      name: "Triple Room",
      price: "From R750/night",
      image: "/images/triple-room-full.jpg",
      features: ["3 single beds", "Ensuite bathroom", "Bar fridge", "Kettle & cups", "Workspace area"],
    },
  ]

  return (
    <>
      <StructuredData />

      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
              Welcome to 60 on Kosmos
              <br />
              <span className="text-sage-300">Guesthouse Bellville South</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8">
              Affordable ensuite accommodation near UWC & Tygerberg Hospital | Secure parking | Free WiFi | From
              R530/night
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
              >
                <a href="/book-now">Book Now</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-sage-600 hover:bg-sage-50 w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
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
              <span className="text-sm sm:text-base lg:text-lg font-semibold">4.8 Stars • 25+ Reviews</span>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadges />

        {/* Quick Info Bar */}
        <section className="bg-sage-600 text-white py-4 sm:py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-sm sm:text-base">5km from UWC</div>
                  <div className="text-xs sm:text-sm opacity-90">8km from Tygerberg Hospital</div>
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
                  <div className="text-xs sm:text-sm opacity-90">Perfect for remote work & study</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Our Comfortable Ensuite Rooms in Bellville South
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our range of clean, comfortable rooms. All include ensuite bathrooms, free WiFi, secure
                parking, and welcome refreshments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {roomTypes.map((room, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48 sm:h-52">
                    <Image
                      src={room.image || "/placeholder.svg"}
                      alt={`${room.name} - Affordable accommodation Bellville South Cape Town`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading={index > 1 ? "lazy" : undefined}
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
                <Link href="/rooms">View All Rooms & Rates</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Perfect For</h2>
              <p className="text-base sm:text-lg text-gray-600">Who stays at 60 on Kosmos?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4">
                  <Briefcase className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-sage-600" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Contractors & Workers</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Monthly rates from R12,720. Professional environment, invoices provided, flexible terms.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-sage-600 text-sage-600 bg-transparent w-full sm:w-auto"
                  >
                    <Link href="/contractor-accommodation-bellville-south">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4">
                  <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-sage-600" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Students & Parents</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Only 5km from UWC. Student discounts available. Perfect for parents visiting during orientation or
                    graduation.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-sage-600 text-sage-600 bg-transparent w-full sm:w-auto"
                  >
                    <Link href="/near-uwc-bellville">UWC Accommodation</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4">
                  <Users className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-sage-600" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Medical Professionals</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    8km from Tygerberg Hospital. Perfect for locum doctors, nursing students, and hospital visitors.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-sage-600 text-sage-600 bg-transparent w-full sm:w-auto"
                  >
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                What's Included at 60 on Kosmos Bellville South
              </h2>
              <p className="text-base sm:text-lg text-gray-600">Everything you need for a comfortable stay</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Wifi className="w-7 h-7 sm:w-8 sm:h-8 text-sage-600" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Free WiFi</h3>
                <p className="text-gray-600 text-xs sm:text-sm">High-speed internet throughout</p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Car className="w-7 h-7 sm:w-8 sm:h-8 text-sage-600" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Secure Parking</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Behind locked gates with CCTV</p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-sage-600" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">24/7 Security</h3>
                <p className="text-gray-600 text-xs sm:text-sm">CCTV monitoring & on-site presence</p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Coffee className="w-7 h-7 sm:w-8 sm:h-8 text-sage-600" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Welcome Kit</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Tea, coffee, rusks & milk included</p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Book Your Stay?</h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
              Experience affordable, comfortable accommodation in Bellville South. Book direct for the best rates!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-sage-600 hover:bg-gray-100 w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
              >
                <a href="/book-now">Book Now</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-sage-700 w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg bg-transparent"
              >
                <a href="tel:+27745245703">Call 074 524 5703</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-sage-700 w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg bg-transparent"
              >
                <a href="https://wa.me/27745245703" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

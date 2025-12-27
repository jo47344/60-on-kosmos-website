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
        <section className="relative h-[600px] md:h-[700px] flex items-center justify-center">
          <Image
            src="/images/exterior-building.png"
            alt="60 on Kosmos Guesthouse Bellville South - Affordable accommodation near UWC and Tygerberg Hospital Cape Town"
            fill
            className="object-cover brightness-50"
            priority
            sizes="100vw"
          />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to 60 on Kosmos
              <br />
              <span className="text-sage-300">Guesthouse Bellville South</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Affordable ensuite accommodation near UWC & Tygerberg Hospital | Secure parking | Free WiFi | From
              R530/night
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg">
                <a href="/book-now">Book Now</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-sage-600 hover:bg-sage-50 px-8 py-6 text-lg"
              >
                <a href="tel:+27745245703">
                  <Phone className="mr-2 h-5 w-5" />
                  074 524 5703
                </a>
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.8 Stars • 25+ Reviews</span>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadges />

        {/* Quick Info Bar */}
        <section className="bg-sage-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-semibold">5km from UWC</div>
                  <div className="text-sm opacity-90">8km from Tygerberg Hospital</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Shield className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-semibold">24/7 CCTV Security</div>
                  <div className="text-sm opacity-90">Secure parking included</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Wifi className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-semibold">Free High-Speed WiFi</div>
                  <div className="text-sm opacity-90">Perfect for remote work & study</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Comfortable Ensuite Rooms in Bellville South
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our range of clean, comfortable rooms. All include ensuite bathrooms, free WiFi, secure
                parking, and welcome refreshments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {roomTypes.map((room, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={room.image || "/placeholder.svg"}
                      alt={`${room.name} - Affordable accommodation Bellville South Cape Town`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{room.name}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-sage-600">{room.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />
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

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700">
                <Link href="/rooms">View All Rooms & Rates</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perfect For</h2>
              <p className="text-lg text-gray-600">Who stays at 60 on Kosmos?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-8">
                  <Briefcase className="w-16 h-16 mx-auto mb-4 text-sage-600" />
                  <h3 className="text-xl font-bold mb-3">Contractors & Workers</h3>
                  <p className="text-gray-600 mb-4">
                    Monthly rates from R12,720. Professional environment, invoices provided, flexible terms.
                  </p>
                  <Button asChild variant="outline" className="border-sage-600 text-sage-600 bg-transparent">
                    <Link href="/contractor-accommodation-bellville-south">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-8">
                  <GraduationCap className="w-16 h-16 mx-auto mb-4 text-sage-600" />
                  <h3 className="text-xl font-bold mb-3">Students & Parents</h3>
                  <p className="text-gray-600 mb-4">
                    Only 5km from UWC. Student discounts available. Perfect for parents visiting during orientation or
                    graduation.
                  </p>
                  <Button asChild variant="outline" className="border-sage-600 text-sage-600 bg-transparent">
                    <Link href="/near-uwc-bellville">UWC Accommodation</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-8">
                  <Users className="w-16 h-16 mx-auto mb-4 text-sage-600" />
                  <h3 className="text-xl font-bold mb-3">Medical Professionals</h3>
                  <p className="text-gray-600 mb-4">
                    8km from Tygerberg Hospital. Perfect for locum doctors, nursing students, and hospital visitors.
                  </p>
                  <Button asChild variant="outline" className="border-sage-600 text-sage-600 bg-transparent">
                    <Link href="/accommodation-near-tygerberg-hospital">Hospital Accommodation</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What's Included at 60 on Kosmos Bellville South
              </h2>
              <p className="text-lg text-gray-600">Everything you need for a comfortable stay</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-sage-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Free WiFi</h3>
                <p className="text-gray-600 text-sm">High-speed internet throughout</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-sage-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Secure Parking</h3>
                <p className="text-gray-600 text-sm">Behind locked gates with CCTV</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-sage-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">24/7 Security</h3>
                <p className="text-gray-600 text-sm">CCTV monitoring & on-site presence</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-sage-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Welcome Kit</h3>
                <p className="text-gray-600 text-sm">Tea, coffee, rusks & milk included</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="border-sage-600 text-sage-600 bg-transparent">
                <Link href="/amenities">View All Amenities</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <LatestBlogPosts />

        {/* CTA Section */}
        <section className="py-16 bg-sage-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Stay?</h2>
            <p className="text-lg mb-8 opacity-90">
              Experience affordable, comfortable accommodation in Bellville South. Book direct for the best rates!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-6 text-lg">
                <a href="/book-now">Book Now</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-sage-700 px-8 py-6 text-lg bg-transparent"
              >
                <a href="tel:+27745245703">Call 074 524 5703</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-sage-700 px-8 py-6 text-lg bg-transparent"
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

import type { Metadata } from "next"
import { Shield, Wifi, Car, Coffee, Camera, Clock, MapPin, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Amenities & Services - 60 on Kosmos Guesthouse Bellville South | Secure Accommodation Cape Town",
  description:
    "24/7 CCTV security, free WiFi, safe parking, outdoor seating areas. Guesthouse Bellville South near UWC with all amenities included. On-site caretaker, welcome refreshments. Book 074 524 5703",
  keywords:
    "Guesthouse amenities Bellville South, secure accommodation Cape Town, CCTV security guesthouse, free WiFi accommodation Bellville, safe parking Cape Town, outdoor seating guesthouse",
  openGraph: {
    title: "Amenities & Services - 60 on Kosmos Guesthouse",
    description: "24/7 security, free WiFi, safe parking and outdoor areas at our Bellville South guesthouse",
  },
}

export default function AmenitiesPage() {
  const amenities = [
    {
      icon: Shield,
      title: "24/7 Security",
      description: "CCTV monitoring, secure gate access, and on-site caretaker for your peace of mind.",
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "High-speed internet connection throughout the property for work and leisure.",
    },
    {
      icon: Car,
      title: "Safe Parking",
      description: "Secure on-site parking behind locked gates. Your vehicle is protected.",
    },
    {
      icon: Coffee,
      title: "Welcome Refreshments",
      description: "Tea, coffee, milk pods, and rusks provided at check-in. Feel at home immediately.",
    },
    {
      icon: Camera,
      title: "CCTV Monitoring",
      description: "Comprehensive security camera system covering all common areas and entrances.",
    },
    {
      icon: Clock,
      title: "Flexible Check-in",
      description: "Check-in from 2:00 PM, check-out by 10:00 AM. Arrangements can be made for early/late access.",
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Close to public transport, SPAR Kasselsvlei Centre, UWC, and Tygerberg Hospital.",
    },
    {
      icon: Users,
      title: "On-site Caretaker",
      description: "Friendly, helpful caretaker available to assist with any needs during your stay.",
    },
  ]

  const roomFeatures = [
    "Bar fridge in every room",
    "Clean linen and towels",
    "Hot water 24/7",
    "Ensuite bathrooms",
    "Modern furnishings",
    "Weekly cleaning service",
    "Quiet environment",
    "Air circulation",
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Banner */}
        <div className="bg-green-600 text-white rounded-lg p-4 mb-8 text-center">
          <p className="text-lg font-semibold">
            📞 Questions? Call:{" "}
            <a href="tel:0745245703" className="underline hover:no-underline">
              074 524 5703
            </a>
          </p>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Amenities & Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide everything you need for a comfortable, safe, and convenient stay in Bellville South.
          </p>
        </div>

        {/* Main Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {amenities.map((amenity, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <amenity.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Outdoor Areas & Property Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Property & Outdoor Areas</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/outdoor-seating.png"
                alt="Outdoor dining area guesthouse Bellville South - guest relaxation space at affordable accommodation Cape Town near UWC with covered seating"
                fill
                className="object-cover professional-image loading-optimized"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Outdoor Dining Area</h3>
                <p className="text-sm">Covered seating area perfect for meals and relaxation</p>
              </div>
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/exterior-courtyard.png"
                alt="Secure parking courtyard 60 on Kosmos guesthouse Bellville South - safe vehicle storage Cape Town accommodation with high walls and CCTV"
                fill
                className="object-cover professional-image loading-optimized"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Secure Parking</h3>
                <p className="text-sm">Fully enclosed courtyard with paved parking areas</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Welcoming Entrance</h4>
              <p className="text-gray-600 text-sm">Beautiful wooden door with covered porch area</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Outdoor Relaxation</h4>
              <p className="text-gray-600 text-sm">Shaded seating areas for guests to unwind</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Maintained Grounds</h4>
              <p className="text-gray-600 text-sm">Clean, well-kept property with attention to detail</p>
            </div>
          </div>
        </div>

        {/* Room Features Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">In Every Room</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {roomFeatures.map((feature, index) => (
              <div key={index} className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Safety & Security Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety & Security</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Secure Access</h3>
                  <p className="text-gray-600">Controlled gate access with security protocols</p>
                </div>
              </div>
              <div className="flex items-start">
                <Camera className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">CCTV Coverage</h3>
                  <p className="text-gray-600">24/7 monitoring of all common areas</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">On-site Presence</h3>
                  <p className="text-gray-600">Caretaker available for assistance and security</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Convenience</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Great Location</h3>
                  <p className="text-gray-600">Close to transport, shops, and major institutions</p>
                </div>
              </div>
              <div className="flex items-start">
                <Car className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Easy Parking</h3>
                  <p className="text-gray-600">Secure on-site parking included</p>
                </div>
              </div>
              <div className="flex items-start">
                <Wifi className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Stay Connected</h3>
                  <p className="text-gray-600">Reliable WiFi for work and entertainment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            We understand what local travellers need. Whether you're a contractor working in the area, a student
            visiting UWC, or a family needing temporary accommodation, we provide the essentials: safety, cleanliness,
            and affordability without compromise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Local Knowledge</h3>
              <p className="text-gray-600">We know Bellville South and can help with directions and recommendations</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Fair Pricing</h3>
              <p className="text-gray-600">Honest, affordable rates with no hidden fees</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Personal Service</h3>
              <p className="text-gray-600">Friendly, helpful service that makes you feel welcome</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

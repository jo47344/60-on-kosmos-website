import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Coffee, Car, Shield, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Rooms & Rates - 60 on Kosmos Guesthouse Bellville South | Self-Catering Accommodation Cape Town",
  description:
    "Self-catering ensuite rooms from R530/night. Standard twin, double & deluxe rooms near UWC, Tygerberg Hospital. Free WiFi, CCTV security, parking, weekly cleaning. For young professionals & contractors. Book 074 524 5703",
  keywords:
    "Self-catering rooms Bellville South, professional accommodation Cape Town, rooms near UWC, ensuite accommodation Bellville, contractor rooms Cape Town, monthly accommodation Bellville",
  openGraph: {
    title: "Self-Catering Rooms & Rates - 60 on Kosmos Guesthouse Bellville South",
    description:
      "Self-catering ensuite rooms from R530/night near UWC and Tygerberg Hospital. Perfect for professionals.",
  },
}

export default function RoomsPage() {
  const rooms = [
    {
      id: 1,
      name: "Standard Twin Room",
      price: "From R530",
      image: "/images/twin-room-yellow.png",
      alt: "Standard twin room guesthouse Bellville South - self-catering accommodation Cape Town near UWC with ensuite bathroom and bar fridge",
      features: [
        "Two single beds",
        "Ensuite bathroom",
        "Free WiFi",
        "Clean linen and weekly cleaning",
        "Weekly cleaning service",
      ],
      description:
        "Perfect for contractors or young professionals. Clean, comfortable twin beds with modern ensuite bathroom.",
    },
    {
      id: 2,
      name: "Double Room",
      price: "From R620",
      image: "/images/sage-double-room.png",
      alt: "Double room guesthouse Bellville South - self-catering accommodation Cape Town near UWC and Tygerberg Hospital with ensuite bathroom",
      features: [
        "Double bed",
        "Ensuite bathroom",
        "Microwave",
        "Bar fridge",
        "Free WiFi",
        "Premium bedding",
        "Weekly cleaning service",
      ],
      description:
        "Ideal for professionals wanting extra space. Comfortable double bed with sage green accents and modern ensuite facilities.",
    },
    {
      id: 3,
      name: "Deluxe Twin Room",
      price: "From R580",
      image: "/images/deluxe-twin-navy.jpg",
      alt: "Deluxe twin room guesthouse Bellville South - premium contractor self-catering accommodation Cape Town with navy blue headboards",
      features: [
        "Two single beds",
        "Navy blue headboards",
        "Ensuite bathroom",
        "Premium bedding",
        "Bar fridge",
        "Modern decor",
        "Weekly cleaning service",
      ],
      description:
        "Our premium twin room with elegant navy blue headboards and quality bedding. Perfect for business travelers and contractors.",
    },
    {
      id: 4,
      name: "Triple Room",
      price: "From R750",
      image: "/images/triple-room-full.jpg",
      alt: "Triple room guesthouse Bellville South - self-catering accommodation Cape Town near UWC with three single beds and workspace",
      features: [
        "Three single beds",
        "Ensuite bathroom",
        "Bar fridge",
        "Kettle & cups",
        "Free WiFi",
        "Workspace area",
        "Weekly cleaning service",
      ],
      description:
        "Spacious room perfect for professionals sharing. Three comfortable single beds with modern ensuite bathroom, kettle, and workspace area.",
    },
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Banner */}
        <div className="bg-green-600 text-white rounded-lg p-4 mb-8 text-center">
          <p className="text-lg font-semibold">
            📞 Book Direct:{" "}
            <a href="tel:0745245703" className="underline hover:no-underline">
              074 524 5703
            </a>{" "}
            |
            <a
              href="https://wa.me/27745245703"
              className="ml-2 underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Now
            </a>{" "}
            | Ask About Monthly Rates
          </p>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Self-Catering Rooms & Rates</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            All rooms feature ensuite bathrooms, bar fridges, and free WiFi. Clean linen and welcome refreshments
            included. Weekly cleaning service. Check-in from 2:00 PM. Perfect for professionals 18+.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.alt}
                  fill
                  className="object-cover professional-image loading-optimized"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={room.id <= 2}
                />
                <Badge className="absolute top-4 left-4 bg-green-600">Available</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{room.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{room.price}</div>
                    <div className="text-sm text-gray-500">per night</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{room.description}</p>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-sm text-gray-900">Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {room.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <a href="https://wa.me/27745245703" target="_blank" rel="noopener noreferrer">
                      <Phone className="w-4 h-4 mr-2" />
                      WhatsApp Book
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <a href="tel:0745245703">📞 Call 074 524 5703</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Monthly Rates CTA */}
        <div className="bg-sage-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Looking for Monthly Accommodation?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer competitive monthly rates for contractors, young professionals, and long-term guests. Self-catering
            accommodation with weekly cleaning, WiFi, and secure parking included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700">
              <a href="tel:0745245703">Call for Monthly Rates</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-sage-600 text-sage-600 bg-transparent">
              <a href="https://wa.me/27745245703" target="_blank" rel="noopener noreferrer">
                WhatsApp for Quote
              </a>
            </Button>
          </div>
        </div>

        {/* Bathroom Showcase */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modern Ensuite Bathrooms</h2>
              <p className="text-gray-600 mb-6">
                Every room features a private, modern bathroom with hot water, quality fixtures, and clean towels.
                Weekly cleaning service maintains high standards of cleanliness.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                  Hot water 24/7
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                  Clean towels provided
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                  Modern fixtures
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                  Weekly cleaning service
                </li>
              </ul>
            </div>
            <div className="relative h-64 lg:h-80">
              <Image
                src="/images/bathroom.png"
                alt="Modern ensuite bathroom guesthouse Bellville South - clean self-catering accommodation Cape Town with hot water 24/7"
                fill
                className="object-cover rounded-lg professional-image"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Included Amenities */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Included with Every Room</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Wifi className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold">Free WiFi</h3>
            </div>
            <div className="text-center">
              <Coffee className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold">Welcome Kit</h3>
            </div>
            <div className="text-center">
              <Car className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold">Safe Parking</h3>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold">24/7 Security</h3>
            </div>
          </div>
        </div>

        {/* Self-Catering Info */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">ℹ️ Self-Catering Accommodation</h3>
          <p className="text-gray-700 mb-4">
            60 on Kosmos is a self-catering guesthouse. We do not provide meals or daily cleaning. Each room has a bar
            fridge for your convenience.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
              Weekly cleaning service included
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
              SPAR Kasselsvlei Centre 2km away for groceries
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
              Multiple restaurants and takeaways nearby
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
              Perfect for young professionals and contractors (18+)
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

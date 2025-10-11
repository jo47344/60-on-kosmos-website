import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Wifi, DollarSign, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Cheap Accommodation Bellville South from R530/night | Budget Rooms Cape Town",
  description:
    "Affordable budget accommodation Bellville South from R530/night. Clean ensuite rooms, free WiFi, secure parking. Best cheap guesthouse near UWC & Tygerberg Hospital. Book direct.",
  keywords:
    "cheap accommodation bellville south, budget rooms bellville south, affordable guesthouse cape town, cheap rooms near uwc, budget accommodation tygerberg, backpacker bellville",
}

export default function CheapAccommodationPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-sage-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Cheap Accommodation Bellville South</span>
          </nav>
        </div>
      </div>

      <section className="bg-sage-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-green-600 text-white px-6 py-2 rounded-full mb-4 font-bold">
              FROM R530/NIGHT - BEST RATES IN BELLVILLE SOUTH
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cheap Accommodation Bellville South — Clean, Safe, Affordable
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Budget-friendly rooms from R530/night. Don't pay hotel prices! Get clean ensuite accommodation with WiFi,
              parking & security included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a
                  href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20cheap%20accommodation%20in%20Bellville%20South"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp for Best Price
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent">
                <a href="tel:+27745245703">📞 Call 074 524 5703</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why We're the Best Value in Bellville South
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Cheapest Rates</h3>
              <p className="text-sm text-gray-600">From R530/night. Weekly & monthly discounts available</p>
            </Card>
            <Card className="text-center p-6">
              <Wifi className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Free WiFi</h3>
              <p className="text-sm text-gray-600">Fast internet included—no extra charges</p>
            </Card>
            <Card className="text-center p-6">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">24/7 Security</h3>
              <p className="text-sm text-gray-600">CCTV, secure parking, safe neighborhood</p>
            </Card>
            <Card className="text-center p-6">
              <Phone className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">No Booking Fees</h3>
              <p className="text-sm text-gray-600">Book direct—pay less than Airbnb/Booking.com</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Budget Rooms from R530/Night</h2>
          <p className="text-center text-gray-600 mb-8">All rooms include ensuite bathroom, WiFi & parking</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Standard Twin",
                price: "R530",
                image: "/images/twin-room-yellow.png",
                desc: "Cheapest option - perfect for backpackers & budget travelers",
              },
              {
                name: "Double Room",
                price: "R620",
                image: "/images/sage-double-room.png",
                desc: "Great value for couples or solo travelers wanting space",
              },
              {
                name: "Triple Room",
                price: "R750",
                image: "/images/triple-room-full.jpg",
                desc: "Best deal for groups - only R250 per person!",
              },
            ].map((room, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={`${room.name} cheap accommodation Bellville South`}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold">
                    {room.price}/night
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{room.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{room.desc}</p>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <a href="https://wa.me/27745245703" target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Book Direct & Save Money</h2>
          <p className="text-xl mb-8 opacity-90">
            No booking fees. No hidden charges. Just honest, cheap accommodation.
          </p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            <a
              href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20cheap%20accommodation%20in%20Bellville%20South"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp Now for Best Rate
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

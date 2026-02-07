import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Train, MapPin, Phone, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Accommodation Near Bellville Station | 6km Away | Easy Train Access",
  description:
    "Affordable rooms 6km from Bellville Train Station. Quick taxi/Uber to station. Perfect for commuters, rail travelers. Ensuite rooms from R530/night. Free WiFi & parking.",
  keywords:
    "accommodation near bellville station, rooms near bellville train station, bellville station accommodation, commuter accommodation bellville, metrorail accommodation cape town",
  alternates: { canonical: "https://60onkosmos.co.za/accommodation-near-bellville-station" },
}

export default function BellvilleStationPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-sage-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Near Bellville Station</span>
          </nav>
        </div>
      </div>

      <section className="bg-sage-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-green-600 mb-4">
                <Train className="w-6 h-6" />
                <span className="font-semibold">6km from Bellville Train Station</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Accommodation Near Bellville Station — Easy Rail & Taxi Access
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Need to be close to Bellville Train Station? Stay with us—only R50-70 taxi ride to the station. Perfect
                for daily commuters, business travelers, or anyone using Metrorail to Cape Town, Stellenbosch, or other
                destinations.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 font-semibold">✓ Quick 10-minute taxi ride to Bellville Station</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <a
                    href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20accommodation%20near%20Bellville%20Station"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp to Book
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent">
                  <a href="tel:+27745245703">📞 Call 074 524 5703</a>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/sage-double-room.png"
                alt="Comfortable room near Bellville Train Station with easy commuter access"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Perfect for Train Commuters & Travelers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Train className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Close to Station</h3>
              <p className="text-gray-600 text-sm">6km from Bellville Station. Quick R50-70 taxi ride.</p>
            </Card>
            <Card className="text-center p-6">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Flexible Check-in</h3>
              <p className="text-gray-600 text-sm">Early morning or late night arrivals welcome.</p>
            </Card>
            <Card className="text-center p-6">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Safe Parking</h3>
              <p className="text-gray-600 text-sm">Leave your car here while you take the train.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Getting to Bellville Station</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">By Taxi/Uber</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">🚗</span>
                  <span>
                    <strong>Distance:</strong> 6km (10 minutes)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">💰</span>
                  <span>
                    <strong>Cost:</strong> R50-70 one-way
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">📱</span>
                  <span>
                    <strong>Apps:</strong> Uber, Bolt always available
                  </span>
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Train Services From Bellville</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>🚂 Cape Town CBD (30 min)</li>
                <li>🚂 Stellenbosch (25 min)</li>
                <li>🚂 Paarl & Wellington</li>
                <li>🚂 Khayelitsha & Mitchells Plain</li>
                <li>🚂 Simon's Town (Southern Line)</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Rooms Near Bellville Station</h2>
          <p className="text-center text-gray-600 mb-8">All rooms include WiFi, parking & 24/7 access</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Twin Room",
                price: "R530",
                image: "/images/twin-room-yellow.png",
                desc: "Budget option for daily commuters",
              },
              {
                name: "Double Room",
                price: "R620",
                image: "/images/sage-double-room.png",
                desc: "Perfect for business travelers",
              },
              {
                name: "Triple Room",
                price: "R750",
                image: "/images/triple-room-full.jpg",
                desc: "Great for families traveling by train",
              },
            ].map((room, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={`${room.name} near Bellville Station`}
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

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Stay Near Bellville Station</h2>
          <p className="text-xl mb-8 opacity-90">WhatsApp us now for availability. Monthly rates for commuters!</p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <a
              href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20accommodation%20near%20Bellville%20Station"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp to Book
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Backpack, Wifi, MapPin, DollarSign, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Backpackers Bellville South from R530/night | Budget Travelers Accommodation",
  description:
    "Affordable backpacker accommodation Bellville South from R530/night. Private ensuite rooms, free WiFi, safe area. Close to Cape Town CBD & Table Mountain. Solo travelers welcome.",
  keywords:
    "backpackers bellville south, budget hostel bellville, cheap backpacker cape town, solo traveler accommodation bellville south, backpacker rooms cape town",
  alternates: { canonical: "https://60onkosmos.co.za/backpackers-bellville-south" },
}

export default function BackpackersPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-sage-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Backpackers Bellville South</span>
          </nav>
        </div>
      </div>

      <section className="bg-sage-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-green-600 mb-4">
                <Backpack className="w-6 h-6" />
                <span className="font-semibold">Budget Backpacker Accommodation</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Backpackers Bellville South — Private Rooms from R530/night
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Traveling solo or on a budget? Get your own private ensuite room (not a dorm!) with free WiFi, secure
                parking, and 24/7 access. Perfect base for exploring Cape Town, Table Mountain, and the Winelands.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 font-semibold">
                  🎒 Weekly rates available — save more when you stay longer!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <a
                    href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20backpacker%20accommodation%20in%20Bellville%20South"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp to Book
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent">
                  <Link href="/rooms">View Rooms & Prices</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/twin-room-yellow.png"
                alt="Private backpacker room Bellville South with two single beds and ensuite bathroom"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Backpackers Love 60 on Kosmos</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Cheapest Private Rooms</h3>
              <p className="text-sm text-gray-600">From R530/night for YOUR OWN room. No dorms!</p>
            </Card>
            <Card className="text-center p-6">
              <Wifi className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Fast Free WiFi</h3>
              <p className="text-sm text-gray-600">Upload pics, plan routes, video call home—unlimited data</p>
            </Card>
            <Card className="text-center p-6">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Easy Transport Links</h3>
              <p className="text-sm text-gray-600">Taxi rank 2km away. Quick access to Cape Town CBD</p>
            </Card>
            <Card className="text-center p-6">
              <Backpack className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Safe Neighborhood</h3>
              <p className="text-sm text-gray-600">CCTV, secure parking, 24/7 access. Store your bags safely</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Budget Rooms for Solo Travelers</h2>
          <p className="text-center text-gray-600 mb-8">All rooms have private ensuite bathroom & free WiFi</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/twin-room-yellow.png"
                  alt="Budget twin room backpackers Bellville South"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold">
                  R530/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Twin Room (Shared)</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Two beds—bring a friend or meet a fellow traveler. Cheapest option!
                </p>
                <ul className="space-y-1 text-sm text-gray-600 mb-4">
                  <li>✓ Two single beds</li>
                  <li>✓ Private ensuite bathroom</li>
                  <li>✓ Bar fridge</li>
                  <li>✓ Free WiFi</li>
                </ul>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <a href="https://wa.me/27745245703" target="_blank" rel="noopener noreferrer">
                    Book This Room
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/sage-double-room.png"
                  alt="Private double room backpackers Bellville South"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold">
                  R620/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Double Room (Solo)</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Perfect for solo travelers wanting privacy and space. Best value!
                </p>
                <ul className="space-y-1 text-sm text-gray-600 mb-4">
                  <li>✓ Comfortable double bed</li>
                  <li>✓ Private ensuite bathroom</li>
                  <li>✓ Bar fridge</li>
                  <li>✓ Free WiFi</li>
                </ul>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <a href="https://wa.me/27745245703" target="_blank" rel="noopener noreferrer">
                    Book This Room
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Cape Town from Bellville South</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Quick Access To:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                  <span>
                    <strong>Cape Town CBD:</strong> 30-45 min by taxi/bus
                  </span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                  <span>
                    <strong>Table Mountain:</strong> 45 min by taxi
                  </span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                  <span>
                    <strong>Stellenbosch Winelands:</strong> 30 min drive
                  </span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                  <span>
                    <strong>V&A Waterfront:</strong> 40 min by taxi
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Backpacker Tips:</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  🚕 <strong>Taxis:</strong> Use Uber/Bolt for cheap transport around Cape Town
                </li>
                <li>
                  🛒 <strong>SPAR 2km away:</strong> Buy groceries, snacks, and travel essentials
                </li>
                <li>
                  📍 <strong>Safe area:</strong> Quiet residential neighborhood, safe to walk during day
                </li>
                <li>
                  💰 <strong>ATMs nearby:</strong> Multiple banks and ATMs within walking distance
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Backpacker Room Today</h2>
          <p className="text-xl mb-8 opacity-90">WhatsApp us now—we respond fast! Last-minute bookings welcome.</p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            <a
              href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20backpacker%20accommodation%20in%20Bellville%20South"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp to Book Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

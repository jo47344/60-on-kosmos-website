import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Accommodation Near Durbanville | 60 on Kosmos Bellville South",
  description:
    "Need accommodation near Durbanville? 60 on Kosmos is 12km away via N1. More affordable than Durbanville with easy access to wine farms, business parks. From R530/night.",
  keywords:
    "accommodation near durbanville, durbanville accommodation, bellville south guesthouse, rooms near durbanville wine route, n1 accommodation",
  openGraph: {
    title: "Accommodation Near Durbanville | 60 on Kosmos",
    description: "Affordable accommodation 12km from Durbanville. Easy N1 access to wine farms and business parks.",
  },
}

export default function AccommodationDurbanvillePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.60onkosmos.co.za/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Accommodation Near Durbanville",
        item: "https://www.60onkosmos.co.za/accommodation-durbanville",
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex text-sm text-gray-600">
              <Link href="/" className="hover:text-[#7c9885]">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Accommodation Near Durbanville</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#7c9885] to-[#6d8876] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Accommodation Near Durbanville</h1>
              <p className="text-xl mb-8 leading-relaxed">
                Visiting Durbanville wine farms or working in the area? Stay at 60 on Kosmos - just 12km away via N1.
                More affordable than Durbanville accommodation with easy access to wine route, business parks, and
                Tygervalley.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20accommodation%20near%20Durbanville"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#7c9885] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Book Direct - WhatsApp
                </a>
                <Link
                  href="/rooms"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors border-2 border-white"
                >
                  View Rooms & Rates
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Distance & Transport */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📍 Just 12km from Durbanville via N1</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p className="font-semibold mb-2">By Car:</p>
                <ul className="space-y-1">
                  <li>• 15 minutes via N1 highway</li>
                  <li>• Easy access to Durbanville wine route</li>
                  <li>• 10 minutes to Tygervalley Centre</li>
                  <li>• Free secure parking at 60 on Kosmos</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Nearby Attractions:</p>
                <ul className="space-y-1">
                  <li>• Durbanville Wine Valley (15 min)</li>
                  <li>• Tygervalley Shopping Centre (10 min)</li>
                  <li>• Durbanville Golf Club (15 min)</li>
                  <li>• Durbanville Hills (18 min)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Stay in Bellville South */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Stay in Bellville South Instead of Durbanville?
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex gap-3">
                  <span className="text-2xl">💰</span>
                  <div>
                    <h3 className="font-bold mb-1">Much More Affordable</h3>
                    <p>
                      Save 30-40% compared to Durbanville accommodation. Durbanville is premium-priced - we offer better
                      value.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <h3 className="font-bold mb-1">Quick N1 Access</h3>
                    <p>15 minutes to Durbanville via highway. Perfect for wine farm visits or business meetings.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🏢</span>
                  <div>
                    <h3 className="font-bold mb-1">More Central</h3>
                    <p>Closer to UWC, Tygerberg Hospital, Cape Town CBD. Better for multi-destination trips.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🍷</span>
                  <div>
                    <h3 className="font-bold mb-1">Wine Route Access</h3>
                    <p>Still close enough for wine tasting trips. Designated driver? Stay with us and save.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/images/double-room.png"
                alt="Comfortable room at 60 on Kosmos - accommodation near Durbanville"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Nearby Durbanville Locations */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Distances to Key Durbanville Locations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3">Wine & Leisure</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Durbanville Wine Valley:</strong> 12km (15 min)
                  </li>
                  <li>
                    <strong>Durbanville Hills:</strong> 14km (18 min)
                  </li>
                  <li>
                    <strong>Altydgedacht Wine Estate:</strong> 13km (16 min)
                  </li>
                  <li>
                    <strong>Durbanville Golf Club:</strong> 12km (15 min)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">Business & Shopping</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Durbanville CBD:</strong> 12km (15 min)
                  </li>
                  <li>
                    <strong>Tygervalley Centre:</strong> 8km (10 min)
                  </li>
                  <li>
                    <strong>Durbanville Business Parks:</strong> 11-13km
                  </li>
                  <li>
                    <strong>N1 Highway:</strong> 3km (direct access)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Perfect For */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Perfect For</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-bold text-xl mb-3">Wine Route Visitors</h3>
                <p className="text-gray-700 mb-4">
                  Exploring Durbanville wine farms? Stay with us and save. Easy drive to all major estates.
                </p>
                <Link href="/rooms" className="text-[#7c9885] font-semibold hover:underline">
                  View Rooms →
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-bold text-xl mb-3">Business Travelers</h3>
                <p className="text-gray-700 mb-4">
                  Meetings in Durbanville business parks? Affordable rates with free WiFi and workspace.
                </p>
                <Link href="/rooms" className="text-[#7c9885] font-semibold hover:underline">
                  Business Rates →
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-bold text-xl mb-3">Event Attendees</h3>
                <p className="text-gray-700 mb-4">
                  Wedding or event in Durbanville? More affordable accommodation with easy access.
                </p>
                <Link href="/contact" className="text-[#7c9885] font-semibold hover:underline">
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#7c9885] to-[#6d8876] text-white rounded-lg shadow-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Book Your Stay Near Durbanville</h2>
            <p className="text-xl mb-8 opacity-90">WhatsApp us now for availability and best rates</p>
            <a
              href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20accommodation%20near%20Durbanville"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#7c9885] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg text-lg"
            >
              <Phone className="w-6 h-6" />
              WhatsApp: 074 524 5703
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

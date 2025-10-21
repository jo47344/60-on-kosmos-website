import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Accommodation Near Parow | 60 on Kosmos Bellville South",
  description:
    "Looking for accommodation near Parow? Stay at 60 on Kosmos in Bellville South - just 7km away via N1. Secure parking, free WiFi, affordable rates from R530/night.",
  keywords:
    "accommodation near parow, parow accommodation, bellville south guesthouse, rooms near parow industrial, n1 accommodation cape town",
  openGraph: {
    title: "Accommodation Near Parow | 60 on Kosmos",
    description: "Affordable accommodation just 7km from Parow via N1. Secure parking and free WiFi.",
  },
}

export default function AccommodationParowPage() {
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
        name: "Accommodation Near Parow",
        item: "https://www.60onkosmos.co.za/accommodation-parow",
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
              <span className="text-gray-900">Accommodation Near Parow</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#7c9885] to-[#6d8876] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Accommodation Near Parow</h1>
              <p className="text-xl mb-8 leading-relaxed">
                Working in Parow? Stay at 60 on Kosmos in Bellville South - just 7km away via the N1 highway. More
                affordable than Parow accommodation with easy access to Parow Industrial, Tygervalley, and the CBD.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20accommodation%20near%20Parow"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📍 Just 7km from Parow via N1</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p className="font-semibold mb-2">By Car:</p>
                <ul className="space-y-1">
                  <li>• 10-12 minutes via N1 highway</li>
                  <li>• Easy access to Parow Industrial</li>
                  <li>• 5 minutes to Tygervalley Centre</li>
                  <li>• Free secure parking at 60 on Kosmos</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">By Public Transport:</p>
                <ul className="space-y-1">
                  <li>• MyCiTi bus to Parow Station</li>
                  <li>• Golden Arrow buses along Voortrekker Road</li>
                  <li>• Taxi rank 2km away (R15-20 to Parow)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Stay in Bellville South */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Stay in Bellville South Instead of Parow?</h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex gap-3">
                  <span className="text-2xl">💰</span>
                  <div>
                    <h3 className="font-bold mb-1">More Affordable</h3>
                    <p>Save 20-30% compared to Parow accommodation. Same quality, better value.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <h3 className="font-bold mb-1">Easy N1 Access</h3>
                    <p>Quick highway access means you're in Parow in 10 minutes. No traffic stress.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🏢</span>
                  <div>
                    <h3 className="font-bold mb-1">Central Location</h3>
                    <p>Close to Parow, Tygervalley, UWC, Tygerberg Hospital, and Cape Town CBD.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <h3 className="font-bold mb-1">Safe & Secure</h3>
                    <p>24/7 CCTV, secure parking, on-site caretaker. Quiet residential area.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/images/exterior-building.png"
                alt="60 on Kosmos guesthouse exterior - accommodation near Parow"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Nearby Parow Locations */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Distances to Key Parow Locations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3">Business & Industrial</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Parow Industrial:</strong> 7km (10 min)
                  </li>
                  <li>
                    <strong>Tygervalley Centre:</strong> 5km (8 min)
                  </li>
                  <li>
                    <strong>Parow Centre:</strong> 7km (12 min)
                  </li>
                  <li>
                    <strong>Voortrekker Road businesses:</strong> 6-8km
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">Transport & Amenities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Parow Train Station:</strong> 7km
                  </li>
                  <li>
                    <strong>N1 Highway:</strong> 3km (direct access)
                  </li>
                  <li>
                    <strong>SPAR Kasselsvlei:</strong> 2km (walking distance)
                  </li>
                  <li>
                    <strong>Cape Town CBD:</strong> 18km (20 min via N1)
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
                <h3 className="font-bold text-xl mb-3">Contractors & Workers</h3>
                <p className="text-gray-700 mb-4">
                  Working on projects in Parow Industrial? Stay close with affordable monthly rates and all amenities
                  included.
                </p>
                <Link
                  href="/contractor-accommodation-bellville-south"
                  className="text-[#7c9885] font-semibold hover:underline"
                >
                  Contractor Rates →
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-bold text-xl mb-3">Business Travelers</h3>
                <p className="text-gray-700 mb-4">
                  Meetings in Parow or Tygervalley? Free WiFi, workspace in room, and easy highway access.
                </p>
                <Link href="/rooms" className="text-[#7c9885] font-semibold hover:underline">
                  View Rooms →
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-bold text-xl mb-3">Relocating Families</h3>
                <p className="text-gray-700 mb-4">
                  Moving to the Parow area? Flexible terms while you find permanent housing. Family-friendly.
                </p>
                <Link href="/monthly-accommodation-bellville" className="text-[#7c9885] font-semibold hover:underline">
                  Monthly Rates →
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#7c9885] to-[#6d8876] text-white rounded-lg shadow-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Book Your Stay Near Parow</h2>
            <p className="text-xl mb-8 opacity-90">WhatsApp us now for availability and best rates</p>
            <a
              href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20accommodation%20near%20Parow"
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

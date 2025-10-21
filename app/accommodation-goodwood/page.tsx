import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Accommodation Near Goodwood | 60 on Kosmos Bellville South",
  description:
    "Looking for accommodation near Goodwood? 60 on Kosmos is just 5km away. Close to Goodwood Industrial, N1 access, secure parking. Affordable rates from R530/night.",
  keywords:
    "accommodation near goodwood, goodwood accommodation, bellville south guesthouse, rooms near goodwood industrial, n1 accommodation cape town",
  openGraph: {
    title: "Accommodation Near Goodwood | 60 on Kosmos",
    description: "Affordable accommodation just 5km from Goodwood. Perfect for contractors and business travelers.",
  },
}

export default function AccommodationGoodwoodPage() {
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
        name: "Accommodation Near Goodwood",
        item: "https://www.60onkosmos.co.za/accommodation-goodwood",
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
              <span className="text-gray-900">Accommodation Near Goodwood</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#7c9885] to-[#6d8876] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Accommodation Near Goodwood</h1>
              <p className="text-xl mb-8 leading-relaxed">
                Working in Goodwood Industrial or visiting the area? Stay at 60 on Kosmos - just 5km away. More
                affordable than Goodwood accommodation with easy N1 access and secure parking.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20accommodation%20near%20Goodwood"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📍 Just 5km from Goodwood</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p className="font-semibold mb-2">By Car:</p>
                <ul className="space-y-1">
                  <li>• 8-10 minutes drive</li>
                  <li>• Easy access to Goodwood Industrial</li>
                  <li>• 3km to N1 highway</li>
                  <li>• Free secure parking at 60 on Kosmos</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">By Public Transport:</p>
                <ul className="space-y-1">
                  <li>• MyCiTi bus to Goodwood</li>
                  <li>• Golden Arrow buses along Voortrekker Road</li>
                  <li>• Taxi rank 2km away (R10-15 to Goodwood)</li>
                  <li>• Goodwood Train Station 5km</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Stay in Bellville South */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Stay in Bellville South Instead of Goodwood?
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex gap-3">
                  <span className="text-2xl">💰</span>
                  <div>
                    <h3 className="font-bold mb-1">Better Value</h3>
                    <p>More affordable than Goodwood accommodation. Same quality, lower prices, better amenities.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <h3 className="font-bold mb-1">Super Close</h3>
                    <p>Only 5km away - you're in Goodwood in under 10 minutes. Practically next door.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🏢</span>
                  <div>
                    <h3 className="font-bold mb-1">Quieter Location</h3>
                    <p>Residential area away from industrial noise. Better sleep, same easy access to work.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <h3 className="font-bold mb-1">Safe & Secure</h3>
                    <p>24/7 CCTV, secure parking, on-site caretaker. Peace of mind guaranteed.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/images/twin-room-yellow.png"
                alt="Twin room at 60 on Kosmos - accommodation near Goodwood"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Nearby Goodwood Locations */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Distances to Key Goodwood Locations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3">Business & Industrial</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Goodwood Industrial:</strong> 5km (8 min)
                  </li>
                  <li>
                    <strong>Goodwood CBD:</strong> 5km (10 min)
                  </li>
                  <li>
                    <strong>Voortrekker Road businesses:</strong> 4-6km
                  </li>
                  <li>
                    <strong>N1 Business Corridor:</strong> 3-5km
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">Transport & Amenities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Goodwood Train Station:</strong> 5km
                  </li>
                  <li>
                    <strong>N1 Highway:</strong> 3km (direct access)
                  </li>
                  <li>
                    <strong>Tygervalley Centre:</strong> 6km (10 min)
                  </li>
                  <li>
                    <strong>Cape Town CBD:</strong> 15km (18 min via N1)
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
                <h3 className="font-bold text-xl mb-3">Industrial Workers</h3>
                <p className="text-gray-700 mb-4">
                  Working in Goodwood Industrial? Stay close with affordable rates and all amenities included.
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
                  Meetings in Goodwood? Free WiFi, workspace, and easy access to N1 for other appointments.
                </p>
                <Link href="/rooms" className="text-[#7c9885] font-semibold hover:underline">
                  View Rooms →
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-bold text-xl mb-3">Short-Term Stays</h3>
                <p className="text-gray-700 mb-4">
                  Project work in Goodwood? Flexible booking from one night to several months.
                </p>
                <Link href="/monthly-accommodation-bellville" className="text-[#7c9885] font-semibold hover:underline">
                  Monthly Rates →
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#7c9885] to-[#6d8876] text-white rounded-lg shadow-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Book Your Stay Near Goodwood</h2>
            <p className="text-xl mb-8 opacity-90">WhatsApp us now for availability and best rates</p>
            <a
              href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20accommodation%20near%20Goodwood"
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

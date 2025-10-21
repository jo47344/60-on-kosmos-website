import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Northern Suburbs Accommodation Cape Town | 60 on Kosmos Bellville South",
  description:
    "Affordable accommodation in Cape Town Northern Suburbs. Central Bellville South location with easy access to UWC, Tygerberg Hospital, Parow, Durbanville, Goodwood. From R530/night.",
  keywords:
    "northern suburbs accommodation cape town, bellville south guesthouse, northern suburbs cape town, accommodation bellville, tygervalley accommodation",
  openGraph: {
    title: "Northern Suburbs Accommodation Cape Town | 60 on Kosmos",
    description:
      "Central Northern Suburbs location with easy access to all major areas. Affordable, secure, comfortable.",
  },
}

export default function NorthernSuburbsAccommodationPage() {
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
        name: "Northern Suburbs Accommodation",
        item: "https://www.60onkosmos.co.za/northern-suburbs-accommodation-cape-town",
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
              <span className="text-gray-900">Northern Suburbs Accommodation</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#7c9885] to-[#6d8876] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Northern Suburbs Accommodation Cape Town</h1>
              <p className="text-xl mb-8 leading-relaxed">
                Looking for accommodation in Cape Town's Northern Suburbs? 60 on Kosmos in Bellville South offers the
                perfect central location with easy access to UWC, Tygerberg Hospital, Parow, Durbanville, Goodwood, and
                Cape Town CBD.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20Northern%20Suburbs%20accommodation"
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

        {/* Why Bellville South is Perfect */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 Bellville South: The Heart of the Northern Suburbs
            </h2>
            <p className="text-gray-700 text-lg">
              Bellville South is perfectly positioned in the center of Cape Town's Northern Suburbs. Whether you're
              visiting UWC, working at Tygerberg Hospital, exploring Durbanville wine farms, or doing business in Parow,
              you're never more than 15 minutes away.
            </p>
          </div>

          {/* Distance Map */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Distances to Major Northern Suburbs Areas</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow p-4">
                  <h3 className="font-bold text-lg mb-2">Education & Healthcare</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>UWC (University of Western Cape):</strong> 5km (10 min)
                    </li>
                    <li>
                      <strong>Tygerberg Hospital:</strong> 8km (12 min)
                    </li>
                    <li>
                      <strong>CPUT Bellville Campus:</strong> 7km (12 min)
                    </li>
                    <li>
                      <strong>Stellenbosch University (Tygerberg):</strong> 9km (15 min)
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                  <h3 className="font-bold text-lg mb-2">Business & Shopping</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Tygervalley Shopping Centre:</strong> 6km (10 min)
                    </li>
                    <li>
                      <strong>Parow Industrial:</strong> 7km (10 min)
                    </li>
                    <li>
                      <strong>Goodwood Industrial:</strong> 5km (8 min)
                    </li>
                    <li>
                      <strong>Durbanville CBD:</strong> 12km (15 min)
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                  <h3 className="font-bold text-lg mb-2">Transport & Connectivity</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>N1 Highway:</strong> 3km (direct access)
                    </li>
                    <li>
                      <strong>Bellville Train Station:</strong> 4km
                    </li>
                    <li>
                      <strong>Cape Town CBD:</strong> 18km (20 min via N1)
                    </li>
                    <li>
                      <strong>Cape Town International Airport:</strong> 22km (25 min)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/images/exterior-courtyard.png"
                alt="60 on Kosmos courtyard - Northern Suburbs accommodation Cape Town"
                width={600}
                height={400}
                className="rounded-lg shadow-lg mb-6"
              />
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-bold text-xl mb-4">Why Choose Bellville South?</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex gap-2">
                    <span>✓</span>
                    <span>
                      <strong>Central location</strong> - Easy access to all Northern Suburbs areas
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span>✓</span>
                    <span>
                      <strong>More affordable</strong> - Better value than Durbanville, Parow, or Tygervalley
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span>✓</span>
                    <span>
                      <strong>N1 access</strong> - Quick highway connections to everywhere
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span>✓</span>
                    <span>
                      <strong>Safe & quiet</strong> - Residential area with 24/7 security
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span>✓</span>
                    <span>
                      <strong>Local amenities</strong> - SPAR, restaurants, and shops within 2km
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Perfect For */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Perfect Northern Suburbs Accommodation For
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-bold text-xl mb-3">Students & Parents</h3>
                <p className="text-gray-700 mb-4">
                  Close to UWC, CPUT, and Stellenbosch Tygerberg campus. Perfect for orientation, visits, or temporary
                  housing.
                </p>
                <Link href="/near-uwc-bellville" className="text-[#7c9885] font-semibold hover:underline">
                  Student Accommodation →
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-bold text-xl mb-3">Medical Professionals</h3>
                <p className="text-gray-700 mb-4">
                  Ideal for Tygerberg Hospital staff, locum doctors, nursing students, and medical conference attendees.
                </p>
                <Link
                  href="/accommodation-near-tygerberg-hospital"
                  className="text-[#7c9885] font-semibold hover:underline"
                >
                  Medical Staff Rates →
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-bold text-xl mb-3">Business & Contractors</h3>
                <p className="text-gray-700 mb-4">
                  Working in Parow, Goodwood, or Durbanville? Central location with monthly rates available.
                </p>
                <Link
                  href="/contractor-accommodation-bellville-south"
                  className="text-[#7c9885] font-semibold hover:underline"
                >
                  Contractor Rates →
                </Link>
              </div>
            </div>
          </div>

          {/* Explore Specific Areas */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Explore Accommodation Near Specific Areas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/near-uwc-bellville"
                className="bg-[#7c9885]/10 hover:bg-[#7c9885]/20 rounded-lg p-4 transition-colors"
              >
                <h3 className="font-bold mb-2">Near UWC</h3>
                <p className="text-sm text-gray-600">5km from campus</p>
              </Link>
              <Link
                href="/accommodation-near-tygerberg-hospital"
                className="bg-[#7c9885]/10 hover:bg-[#7c9885]/20 rounded-lg p-4 transition-colors"
              >
                <h3 className="font-bold mb-2">Near Tygerberg Hospital</h3>
                <p className="text-sm text-gray-600">8km from hospital</p>
              </Link>
              <Link
                href="/accommodation-parow"
                className="bg-[#7c9885]/10 hover:bg-[#7c9885]/20 rounded-lg p-4 transition-colors"
              >
                <h3 className="font-bold mb-2">Near Parow</h3>
                <p className="text-sm text-gray-600">7km from Parow</p>
              </Link>
              <Link
                href="/accommodation-durbanville"
                className="bg-[#7c9885]/10 hover:bg-[#7c9885]/20 rounded-lg p-4 transition-colors"
              >
                <h3 className="font-bold mb-2">Near Durbanville</h3>
                <p className="text-sm text-gray-600">12km from Durbanville</p>
              </Link>
              <Link
                href="/accommodation-goodwood"
                className="bg-[#7c9885]/10 hover:bg-[#7c9885]/20 rounded-lg p-4 transition-colors"
              >
                <h3 className="font-bold mb-2">Near Goodwood</h3>
                <p className="text-sm text-gray-600">5km from Goodwood</p>
              </Link>
              <Link
                href="/accommodation-near-bellville-station"
                className="bg-[#7c9885]/10 hover:bg-[#7c9885]/20 rounded-lg p-4 transition-colors"
              >
                <h3 className="font-bold mb-2">Near Bellville Station</h3>
                <p className="text-sm text-gray-600">4km from station</p>
              </Link>
              <Link
                href="/serviced-accommodation-bellville"
                className="bg-[#7c9885]/10 hover:bg-[#7c9885]/20 rounded-lg p-4 transition-colors"
              >
                <h3 className="font-bold mb-2">Serviced Accommodation</h3>
                <p className="text-sm text-gray-600">Weekly cleaning included</p>
              </Link>
              <Link
                href="/monthly-accommodation-bellville"
                className="bg-[#7c9885]/10 hover:bg-[#7c9885]/20 rounded-lg p-4 transition-colors"
              >
                <h3 className="font-bold mb-2">Monthly Accommodation</h3>
                <p className="text-sm text-gray-600">Long-term discounts</p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#7c9885] to-[#6d8876] text-white rounded-lg shadow-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Book Your Northern Suburbs Accommodation</h2>
            <p className="text-xl mb-8 opacity-90">Central location, affordable rates, secure and comfortable</p>
            <a
              href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20Northern%20Suburbs%20accommodation"
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

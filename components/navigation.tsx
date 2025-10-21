"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [whyUsOpen, setWhyUsOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)

  return (
    <nav className="bg-[#7c9885] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <Image
              src="/images/60-on-kosmos-logo.png"
              alt="60 on Kosmos Guesthouse Logo"
              width={60}
              height={60}
              className="h-14 w-auto"
              priority
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-tight">60 on Kosmos</span>
              <span className="text-xs opacity-90">Bellville South</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/rooms"
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium"
            >
              Rooms
            </Link>
            <Link
              href="/amenities"
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium"
            >
              Amenities
            </Link>

            {/* Why Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => setWhyUsOpen(!whyUsOpen)}
                className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium flex items-center gap-1"
              >
                Why Us
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${whyUsOpen ? "rotate-180" : ""}`} />
              </button>

              {whyUsOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setWhyUsOpen(false)} />
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      href="/why-choose-60-on-kosmos"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setWhyUsOpen(false)}
                    >
                      <span className="font-medium">Why Choose Us</span>
                    </Link>
                    <Link
                      href="/guesthouse-vs-hotel-bellville"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setWhyUsOpen(false)}
                    >
                      <span className="font-medium">vs Hotels</span>
                    </Link>
                    <Link
                      href="/guesthouse-vs-airbnb-bellville"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setWhyUsOpen(false)}
                    >
                      <span className="font-medium">vs Airbnb</span>
                    </Link>
                  </div>
                </>
              )}
            </div>

            {/* Locations Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium flex items-center gap-1"
              >
                Locations
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${locationsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {locationsOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setLocationsOpen(false)} />
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      href="/northern-suburbs-accommodation-cape-town"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setLocationsOpen(false)}
                    >
                      <span className="font-medium">Northern Suburbs</span>
                    </Link>
                    <Link
                      href="/near-uwc-bellville"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setLocationsOpen(false)}
                    >
                      <span className="font-medium">Near UWC</span>
                    </Link>
                    <Link
                      href="/accommodation-parow"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setLocationsOpen(false)}
                    >
                      <span className="font-medium">Near Parow</span>
                    </Link>
                    <Link
                      href="/accommodation-durbanville"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setLocationsOpen(false)}
                    >
                      <span className="font-medium">Near Durbanville</span>
                    </Link>
                    <Link
                      href="/accommodation-goodwood"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setLocationsOpen(false)}
                    >
                      <span className="font-medium">Near Goodwood</span>
                    </Link>
                  </div>
                </>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium flex items-center gap-1"
              >
                Resources
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {resourcesOpen && (
                <>
                  {/* Backdrop */}
                  <div className="fixed inset-0 z-10" onClick={() => setResourcesOpen(false)} />
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      href="/local-info"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setResourcesOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <span>📍</span>
                        <span className="font-medium">Local Info</span>
                      </div>
                    </Link>
                    <Link
                      href="/things-to-do-bellville-south"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setResourcesOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <span>🎯</span>
                        <span className="font-medium">Things to Do</span>
                      </div>
                    </Link>
                    <Link
                      href="/virtual-tour"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setResourcesOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <span>🏠</span>
                        <span className="font-medium">Virtual Tour</span>
                      </div>
                    </Link>
                    <Link
                      href="/faq"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setResourcesOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <span>❓</span>
                        <span className="font-medium">FAQ</span>
                      </div>
                    </Link>
                    <Link
                      href="/blog"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setResourcesOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <span>📝</span>
                        <span className="font-medium">Blog</span>
                      </div>
                    </Link>
                  </div>
                </>
              )}
            </div>

            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
            <Link
              href="/book-now"
              className="ml-2 px-6 py-2 bg-white text-[#7c9885] rounded-lg hover:bg-gray-100 transition-colors duration-200 font-bold shadow-lg"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#6d8876] border-t border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              href="/"
              className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              🏠 Home
            </Link>
            <Link
              href="/rooms"
              className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              🛏️ Rooms
            </Link>
            <Link
              href="/amenities"
              className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              ⭐ Amenities
            </Link>

            {/* Mobile Why Us Section */}
            <div className="border-t border-white/10 mt-2 pt-2">
              <div className="px-4 py-2 text-sm font-semibold opacity-75">Why Us</div>
              <Link
                href="/why-choose-60-on-kosmos"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                ⭐ Why Choose Us
              </Link>
              <Link
                href="/guesthouse-vs-hotel-bellville"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                🏨 vs Hotels
              </Link>
              <Link
                href="/guesthouse-vs-airbnb-bellville"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                🏡 vs Airbnb
              </Link>
            </div>

            {/* Mobile Locations Section */}
            <div className="border-t border-white/10 mt-2 pt-2">
              <div className="px-4 py-2 text-sm font-semibold opacity-75">Locations</div>
              <Link
                href="/northern-suburbs-accommodation-cape-town"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                📍 Northern Suburbs
              </Link>
              <Link
                href="/near-uwc-bellville"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                🎓 Near UWC
              </Link>
              <Link
                href="/accommodation-parow"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                📍 Near Parow
              </Link>
              <Link
                href="/accommodation-durbanville"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                📍 Near Durbanville
              </Link>
              <Link
                href="/accommodation-goodwood"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                📍 Near Goodwood
              </Link>
            </div>

            {/* Mobile Resources Section */}
            <div className="border-t border-white/10 mt-2 pt-2">
              <div className="px-4 py-2 text-sm font-semibold opacity-75">Resources</div>
              <Link
                href="/local-info"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                📍 Local Info
              </Link>
              <Link
                href="/things-to-do-bellville-south"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                🎯 Things to Do
              </Link>
              <Link
                href="/virtual-tour"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                🏠 Virtual Tour
              </Link>
              <Link
                href="/faq"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                ❓ FAQ
              </Link>
              <Link
                href="/blog"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                📝 Blog
              </Link>
            </div>

            <Link
              href="/contact"
              className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium border-t border-white/10 mt-2 pt-4"
              onClick={() => setIsOpen(false)}
            >
              📞 Contact
            </Link>
            <Link
              href="/book-now"
              className="block px-4 py-3 bg-white text-[#7c9885] rounded-lg hover:bg-gray-100 transition-colors font-bold text-center shadow-lg mt-2"
              onClick={() => setIsOpen(false)}
            >
              📅 Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { business } from "@/lib/site-facts"
import { Logo } from "./logo"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setResourcesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close dropdowns when pressing Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setResourcesOpen(false)
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <nav ref={navRef} className="bg-[#7c9885] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo size="sm" showTagline={false} className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/rooms"
              className="whitespace-nowrap px-2.5 xl:px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium"
            >
              Rooms
            </Link>
            <Link
              href="/contractor-accommodation"
              className="whitespace-nowrap px-2.5 xl:px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium"
            >
              For Teams
            </Link>
            <Link
              href="/amenities"
              className="whitespace-nowrap px-2.5 xl:px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium"
            >
              Amenities
            </Link>

            <Link
              href="/student-faq"
              className="whitespace-nowrap px-2.5 xl:px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium"
            >
              Visitor FAQ
            </Link>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="whitespace-nowrap px-2.5 xl:px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium flex items-center gap-1"
              >
                Resources
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {resourcesOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setResourcesOpen(false)} />
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      href="/local-info"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setResourcesOpen(false)}
                    >
                      <div className="font-medium">Local Info</div>
                    </Link>
                    <Link
                      href="/virtual-tour"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setResourcesOpen(false)}
                    >
                      <div className="font-medium">Virtual Tour</div>
                    </Link>
                    <Link
                      href="/faq"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setResourcesOpen(false)}
                    >
                      <div className="font-medium">FAQ</div>
                    </Link>
                    <Link
                      href="/blog"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setResourcesOpen(false)}
                    >
                      <div className="font-medium">Blog</div>
                    </Link>
                  </div>
                </>
              )}
            </div>

            <Link
              href="/contact"
              className="whitespace-nowrap px-2.5 xl:px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
            <Link
              href="/book-now"
              className="whitespace-nowrap px-2.5 xl:px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium"
            >
              Book Now
            </Link>
            <a
              href={`tel:${business.phoneIntl}`}
              className="ml-2 inline-flex whitespace-nowrap items-center gap-2 px-4 xl:px-5 py-2 bg-white text-sage-800 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-bold shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#7c9885]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {business.phone}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#6d8876] border-t border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              href="/"
              className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/rooms"
              className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Rooms
            </Link>
            <Link
              href="/contractor-accommodation"
              className="block px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors font-bold"
              onClick={() => setIsOpen(false)}
            >
              For Teams
            </Link>
            <Link
              href="/amenities"
              className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Amenities
            </Link>

            <div className="border-t border-white/10 mt-2 pt-2">
              <div className="px-4 py-2 text-sm font-semibold opacity-75">University Visitors</div>
              <Link
                href="/student-faq"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Visitor FAQ
              </Link>
            </div>

            <div className="border-t border-white/10 mt-2 pt-2">
              <div className="px-4 py-2 text-sm font-semibold opacity-75">Resources</div>
              <Link
                href="/local-info"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Local Info
              </Link>
              <Link
                href="/virtual-tour"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Virtual Tour
              </Link>
              <Link
                href="/faq"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/blog"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </div>

            <Link
              href="/contact"
              className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium border-t border-white/10 mt-2 pt-4"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/book-now"
              className="block px-4 py-3 bg-white text-[#7c9885] rounded-lg hover:bg-gray-100 transition-colors font-bold text-center shadow-lg mt-2"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

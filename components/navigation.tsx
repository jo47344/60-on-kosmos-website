"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsResourcesOpen(false)
      }
    }

    if (isResourcesOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isResourcesOpen])

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen)
  }

  const closeDropdown = () => {
    setIsResourcesOpen(false)
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/60-kosmos-elegant-logo.jpg"
              alt="60 on Kosmos Guesthouse"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-sage-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/rooms" className="text-gray-700 hover:text-sage-600 font-medium transition-colors">
              Rooms
            </Link>
            <Link href="/amenities" className="text-gray-700 hover:text-sage-600 font-medium transition-colors">
              Amenities
            </Link>
            <Link href="/local-info" className="text-gray-700 hover:text-sage-600 font-medium transition-colors">
              Location
            </Link>
            <Link href="/special-offers" className="text-gray-700 hover:text-sage-600 font-medium transition-colors">
              Special Offers
            </Link>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                ref={buttonRef}
                onClick={toggleResources}
                className="text-gray-700 hover:text-sage-600 font-medium transition-colors flex items-center gap-1 py-2"
                aria-expanded={isResourcesOpen}
                aria-haspopup="true"
              >
                Resources
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                ref={dropdownRef}
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 transition-all duration-200 origin-top ${
                  isResourcesOpen
                    ? "opacity-100 visible scale-100 translate-y-0"
                    : "opacity-0 invisible scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <Link
                  href="/blog"
                  className="block px-4 py-2.5 text-gray-700 hover:bg-sage-50 hover:text-sage-700 transition-colors"
                  onClick={closeDropdown}
                >
                  📚 Blog & Guides
                </Link>
                <Link
                  href="/faq"
                  className="block px-4 py-2.5 text-gray-700 hover:bg-sage-50 hover:text-sage-700 transition-colors"
                  onClick={closeDropdown}
                >
                  ❓ FAQ
                </Link>
                <Link
                  href="/virtual-tour"
                  className="block px-4 py-2.5 text-gray-700 hover:bg-sage-50 hover:text-sage-700 transition-colors"
                  onClick={closeDropdown}
                >
                  📸 Virtual Tour
                </Link>
                <Link
                  href="/things-to-do-bellville-south"
                  className="block px-4 py-2.5 text-gray-700 hover:bg-sage-50 hover:text-sage-700 transition-colors"
                  onClick={closeDropdown}
                >
                  🗺️ Things to Do
                </Link>
                <Link
                  href="/testimonials"
                  className="block px-4 py-2.5 text-gray-700 hover:bg-sage-50 hover:text-sage-700 transition-colors"
                  onClick={closeDropdown}
                >
                  ⭐ Testimonials
                </Link>
              </div>
            </div>

            <Link href="/contact" className="text-gray-700 hover:text-sage-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild variant="outline" className="border-sage-600 text-sage-600 hover:bg-sage-50 bg-white">
              <a href="tel:+27745245703">
                <Phone className="w-4 h-4 mr-2" />
                074 524 5703
              </a>
            </Button>
            <Button asChild className="bg-sage-600 hover:bg-sage-700 text-white">
              <Link href="/book-now">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2">
            {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-sage-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/rooms"
              className="block text-gray-700 hover:text-sage-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Rooms
            </Link>
            <Link
              href="/amenities"
              className="block text-gray-700 hover:text-sage-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Amenities
            </Link>
            <Link
              href="/local-info"
              className="block text-gray-700 hover:text-sage-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Location
            </Link>
            <Link
              href="/special-offers"
              className="block text-gray-700 hover:text-sage-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Special Offers
            </Link>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider px-3 py-2">Resources</div>
              <Link
                href="/blog"
                className="block text-gray-700 hover:text-sage-600 font-medium py-2 pl-6"
                onClick={() => setIsMenuOpen(false)}
              >
                📚 Blog & Guides
              </Link>
              <Link
                href="/faq"
                className="block text-gray-700 hover:text-sage-600 font-medium py-2 pl-6"
                onClick={() => setIsMenuOpen(false)}
              >
                ❓ FAQ
              </Link>
              <Link
                href="/virtual-tour"
                className="block text-gray-700 hover:text-sage-600 font-medium py-2 pl-6"
                onClick={() => setIsMenuOpen(false)}
              >
                📸 Virtual Tour
              </Link>
              <Link
                href="/things-to-do-bellville-south"
                className="block text-gray-700 hover:text-sage-600 font-medium py-2 pl-6"
                onClick={() => setIsMenuOpen(false)}
              >
                🗺️ Things to Do
              </Link>
              <Link
                href="/testimonials"
                className="block text-gray-700 hover:text-sage-600 font-medium py-2 pl-6"
                onClick={() => setIsMenuOpen(false)}
              >
                ⭐ Testimonials
              </Link>
            </div>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-sage-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 space-y-2">
              <Button asChild className="w-full bg-sage-600 hover:bg-sage-700 text-white">
                <Link href="/book-now" onClick={() => setIsMenuOpen(false)}>
                  Book Now
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-sage-600 text-sage-600 hover:bg-sage-50 bg-transparent"
              >
                <a href="tel:+27745245703">
                  <Phone className="w-4 h-4 mr-2" />
                  074 524 5703
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

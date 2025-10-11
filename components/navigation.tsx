"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/60-kosmos-elegant-logo.jpg"
              alt="60 on Kosmos Guesthouse"
              width={220}
              height={60}
              className="block"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-sage-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/rooms" className="text-gray-700 hover:text-sage-600 transition-colors font-medium">
              Rooms
            </Link>
            <Link href="/amenities" className="text-gray-700 hover:text-sage-600 transition-colors font-medium">
              Amenities
            </Link>
            <Link href="/local-info" className="text-gray-700 hover:text-sage-600 transition-colors font-medium">
              Location
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="text-gray-700 hover:text-sage-600 transition-colors font-medium flex items-center">
                Resources
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-50">
                  <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-sage-50 hover:text-sage-600">
                    📚 Accommodation Blog
                  </Link>
                  <Link
                    href="/blog/medical-staff-guide-tygerberg-hospital"
                    className="block px-4 py-2 text-gray-700 hover:bg-sage-50 hover:text-sage-600 text-sm"
                  >
                    Medical Staff Guide
                  </Link>
                  <Link
                    href="/blog/international-student-housing-uwc"
                    className="block px-4 py-2 text-gray-700 hover:bg-sage-50 hover:text-sage-600 text-sm"
                  >
                    International Students Guide
                  </Link>
                  <div className="border-t my-2"></div>
                  <Link
                    href="/contractor-accommodation-bellville-south"
                    className="block px-4 py-2 text-gray-700 hover:bg-sage-50 hover:text-sage-600 text-sm"
                  >
                    For Contractors
                  </Link>
                  <Link
                    href="/cheap-accommodation-bellville-south"
                    className="block px-4 py-2 text-gray-700 hover:bg-sage-50 hover:text-sage-600 text-sm"
                  >
                    Budget Accommodation
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-700 hover:text-sage-600 transition-colors font-medium">
              Contact
            </Link>
            <Button asChild className="bg-sage-600 hover:bg-sage-700 text-white">
              <a href="tel:0745245703">
                <Phone className="w-4 h-4 mr-2" />
                074 524 5703
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <div className="px-3 py-2 border-b border-gray-200 mb-2">
                <a href="tel:0745245703" className="text-sage-600 font-bold text-lg">
                  📞 074 524 5703
                </a>
              </div>
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-sage-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/rooms"
                className="block px-3 py-2 text-gray-700 hover:text-sage-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Rooms
              </Link>
              <Link
                href="/amenities"
                className="block px-3 py-2 text-gray-700 hover:text-sage-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Amenities
              </Link>
              <Link
                href="/local-info"
                className="block px-3 py-2 text-gray-700 hover:text-sage-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Location
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-sage-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                📚 Blog & Guides
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-sage-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <a href="https://wa.me/27745245703" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp Book
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

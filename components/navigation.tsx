"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [studentOpen, setStudentOpen] = useState(false)

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
              href="/contractor-accommodation"
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium"
            >
              Contractors
            </Link>
            <Link
              href="/amenities"
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium"
            >
              Amenities
            </Link>

            <div className="relative">
              <button
                onClick={() => setStudentOpen(!studentOpen)}
                className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium flex items-center gap-1"
              >
                Students
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${studentOpen ? "rotate-180" : ""}`}
                />
              </button>

              {studentOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setStudentOpen(false)} />
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      href="/near-uwc-bellville"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setStudentOpen(false)}
                    >
                      <div className="font-medium">UWC Accommodation</div>
                      <div className="text-xs text-gray-500">5.5km from campus</div>
                    </Link>
                    <Link
                      href="/near-cput-bellville"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setStudentOpen(false)}
                    >
                      <div className="font-medium">CPUT Accommodation</div>
                      <div className="text-xs text-gray-500">4.5km from campus</div>
                    </Link>
                    <Link
                      href="/student-faq"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#7c9885]/10 transition-colors"
                      onClick={() => setStudentOpen(false)}
                    >
                      <div className="font-medium">Student FAQ</div>
                      <div className="text-xs text-gray-500">Common questions</div>
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
              Contractors
            </Link>
            <Link
              href="/amenities"
              className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Amenities
            </Link>

            <div className="border-t border-white/10 mt-2 pt-2">
              <div className="px-4 py-2 text-sm font-semibold opacity-75">Students</div>
              <Link
                href="/near-uwc-bellville"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                UWC Accommodation
              </Link>
              <Link
                href="/near-cput-bellville"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                CPUT Accommodation
              </Link>
              <Link
                href="/student-faq"
                className="block px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Student FAQ
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

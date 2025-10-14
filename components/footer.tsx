import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">60 on Kosmos</h3>
            <p className="text-gray-400 text-sm mb-4">
              Affordable self-catering accommodation in Bellville South, Cape Town. Perfect for contractors, students,
              and young professionals.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/60onKosmos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/60onkosmos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/rooms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Rooms & Rates
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/local-info" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Local Info
                </Link>
              </li>
              <li>
                <Link href="/book-now" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Accommodation Types */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Accommodation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contractor-accommodation-bellville"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contractor Accommodation
                </Link>
              </li>
              <li>
                <Link href="/near-uwc-bellville" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Near UWC
                </Link>
              </li>
              <li>
                <Link
                  href="/accommodation-near-tygerberg-hospital"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Near Tygerberg Hospital
                </Link>
              </li>
              <li>
                <Link
                  href="/monthly-accommodation-bellville"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Monthly Accommodation
                </Link>
              </li>
              <li>
                <Link
                  href="/self-catering-accommodation-bellville"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Self-Catering Rooms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm">
                <MapPin className="w-5 h-5 mr-2 text-sage-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">60 Kosmos Street, Bellville South, Cape Town, 7530</span>
              </li>
              <li className="flex items-center text-sm">
                <Phone className="w-5 h-5 mr-2 text-sage-400 flex-shrink-0" />
                <a href="tel:+27745245703" className="text-gray-400 hover:text-white transition-colors">
                  074 524 5703
                </a>
              </li>
              <li className="flex items-center text-sm">
                <Mail className="w-5 h-5 mr-2 text-sage-400 flex-shrink-0" />
                <a href="mailto:info@60onkosmos.co.za" className="text-gray-400 hover:text-white transition-colors">
                  info@60onkosmos.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} 60 on Kosmos Guesthouse. All rights reserved. | Self-catering accommodation Bellville South,
            Cape Town
          </p>
        </div>
      </div>
    </footer>
  )
}

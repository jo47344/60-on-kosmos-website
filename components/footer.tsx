import Link from "next/link"
import { Facebook, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">60 on Kosmos</h3>
            <p className="text-sm mb-4">
              Affordable ensuite accommodation in Bellville South, Cape Town. Perfect for contractors, students, and
              families.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/60-On-Kosmos-61571946294679/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/rooms" className="hover:text-white transition-colors">
                  Rooms & Rates
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="hover:text-white transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/special-offers" className="hover:text-white transition-colors">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link href="/local-info" className="hover:text-white transition-colors">
                  Local Information
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Accommodation Types */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Accommodation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/serviced-accommodation-bellville" className="hover:text-white transition-colors">
                  Serviced Accommodation
                </Link>
              </li>
              <li>
                <Link href="/self-catering-accommodation-bellville" className="hover:text-white transition-colors">
                  Self-Catering Rooms
                </Link>
              </li>
              <li>
                <Link href="/monthly-accommodation-bellville" className="hover:text-white transition-colors">
                  Monthly Rates
                </Link>
              </li>
              <li>
                <Link href="/contractor-accommodation-bellville" className="hover:text-white transition-colors">
                  Contractor Accommodation
                </Link>
              </li>
              <li>
                <Link href="/near-uwc-bellville" className="hover:text-white transition-colors">
                  Near UWC
                </Link>
              </li>
              <li>
                <Link href="/accommodation-near-tygerberg-hospital" className="hover:text-white transition-colors">
                  Near Tygerberg Hospital
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  60 Kosmos Street
                  <br />
                  Bellville South, 7530
                  <br />
                  Cape Town, South Africa
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="tel:+27745245703" className="hover:text-white transition-colors">
                  074 524 5703
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="mailto:info@60onkosmos.co.za" className="hover:text-white transition-colors">
                  info@60onkosmos.co.za
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                href="/book-now"
                className="inline-block bg-sage-600 hover:bg-sage-700 text-white px-6 py-2 rounded-md transition-colors text-sm font-semibold"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2025 60 on Kosmos Guesthouse. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            {" | "}
            <Link href="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
            {" | "}
            <a
              href="https://www.airbnb.com/rooms/1332667439996159511"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Airbnb
            </a>
            {" | "}
            <a
              href="https://www.booking.com/hotel/za/60-on-kosmos-cape-town.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Booking.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

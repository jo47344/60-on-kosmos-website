import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Business Info */}
          <div>
            <div className="mb-4 bg-white rounded-lg p-2 inline-block">
              <Logo size="sm" showTagline={true} />
            </div>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-start mb-3">
                <MapPin className="w-5 h-5 mr-2 text-sage-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Address:</p>
                  <p>60 Kosmos Street</p>
                  <p>Bellville South, 7530</p>
                  <p>Western Cape, South Africa</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="w-5 h-5 mr-2 text-sage-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Phone:</p>
                  <a href="tel:+27745245703" className="hover:text-sage-400 transition-colors">
                    074 524 5703
                  </a>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 mr-2 text-sage-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Email:</p>
                  <a href="mailto:info@60onkosmos.co.za" className="hover:text-sage-400 transition-colors">
                    info@60onkosmos.co.za
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media & Booking Platforms */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-white mb-2">Find us online:</p>
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://www.facebook.com/60onKosmos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/60onkosmos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
              <div className="space-y-2 text-sm">
                <a
                  href="https://www.booking.com/hotel/za/60-on-kosmos-cape-town.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-300 hover:text-sage-100 transition-colors block"
                >
                  View on Booking.com
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=60+Kosmos+Street,+Bellville+South,+Cape+Town,+7530"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-300 hover:text-sage-100 transition-colors block"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Accommodation</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/contractor-accommodation"
                  className="hover:text-white transition-colors font-semibold text-sage-400"
                >
                  For Project Teams
                </Link>
              </li>
              <li>
                <Link href="/contractor-accommodation-n1-city-parow" className="hover:text-white transition-colors text-sm">
                  Near Parow
                </Link>
              </li>
              <li>
                <Link href="/contractor-accommodation-stikland" className="hover:text-white transition-colors text-sm">
                  Near Stikland
                </Link>
              </li>
              <li>
                <Link href="/contractor-accommodation-grandwest-goodwood" className="hover:text-white transition-colors text-sm">
                  Near Goodwood
                </Link>
              </li>
              <li>
                <Link href="/contractor-accommodation-kuils-river" className="hover:text-white transition-colors text-sm">
                  Near Kuils River
                </Link>
              </li>
              <li>
                <Link href="/contractor-accommodation" className="hover:text-white transition-colors text-sm">
                  In Bellville
                </Link>
              </li>
              <li>
                <Link href="/contractor-accommodation-northern-suburbs" className="hover:text-white transition-colors text-sm">
                  Northern Suburbs
                </Link>
              </li>
              <li>
                <Link href="/accommodation-durbanville" className="hover:text-white transition-colors text-sm">
                  Near Durbanville
                </Link>
              </li>
              <li>
                <Link href="/accommodation-brackenfell" className="hover:text-white transition-colors text-sm">
                  Near Brackenfell
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/amenities" className="hover:text-white transition-colors">
                  Amenities & Facilities
                </Link>
              </li>
              <li>
                <Link href="/local-info" className="hover:text-white transition-colors">
                  Local Information
                </Link>
              </li>
              <li>
                <Link href="/student-faq" className="hover:text-white transition-colors">
                  Student FAQ
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/guest-information" className="hover:text-white transition-colors">
                  Guest Information
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Guest Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Guest Information</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <strong className="text-white">Check-in:</strong> 14:00
              </p>
              <p>
                <strong className="text-white">Check-out:</strong> 10:00
              </p>
              <p>
                <strong className="text-white">Quiet Hours:</strong> 22:00 - 08:00
              </p>
              <p>
                <strong className="text-white">Parking:</strong> Free secure parking
              </p>
              <p>
                <strong className="text-white">Cleaning:</strong> Weekly service included
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-1">
              <Link href="/terms" className="text-sage-400 hover:text-white transition-colors text-sm">
                Terms & House Rules
              </Link>
              <Link href="/privacy-policy" className="text-sage-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
            </div>

            {/* Book Direct CTA */}
            <div className="mt-4">
              <Link
                href="/contractor-accommodation"
                className="inline-block bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-lg transition w-full text-center font-semibold"
              >
                Contractor Rates
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 60 on Kosmos Guesthouse. All rights reserved.</p>
          <p className="mt-2">
            Contractor accommodation in Bellville, Parow, Goodwood, Stikland & Northern Suburbs | Near N1, Sacks Circle
            & Mill Park
          </p>
          <p className="mt-2">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & House Rules
            </Link>
            {" | "}
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            {" | "}
            <span>Rates subject to change without notice</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

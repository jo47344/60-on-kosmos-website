import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Business Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">60 on Kosmos</h3>
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

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
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
          </div>

          {/* Column 2: Priority Pages */}
          <div>
            <h3 className="text-xl font-bold mb-4">Accommodation</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/uwc-student-accommodation" className="hover:text-white transition-colors">
                  UWC Student Accommodation
                </Link>
              </li>
              <li>
                <Link href="/cput-accommodation" className="hover:text-white transition-colors">
                  CPUT Accommodation
                </Link>
              </li>
              <li>
                <Link href="/tygerberg-hospital-accommodation" className="hover:text-white transition-colors">
                  Tygerberg Hospital Accommodation
                </Link>
              </li>
              <li>
                <Link href="/monthly-accommodation" className="hover:text-white transition-colors">
                  Monthly Accommodation
                </Link>
              </li>
              <li>
                <Link href="/self-catering-rooms" className="hover:text-white transition-colors">
                  Self-Catering Rooms
                </Link>
              </li>
              <li>
                <Link href="/contractor-accommodation" className="hover:text-white transition-colors">
                  Contractor Accommodation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/rooms" className="hover:text-white transition-colors">
                  Our Rooms
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
                <Link href="/virtual-tour" className="hover:text-white transition-colors">
                  Virtual Tour
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
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

            {/* Book Direct CTA */}
            <div className="mt-6">
              <Link
                href="/book-now"
                className="inline-block bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-lg transition w-full text-center font-semibold"
              >
                Book Direct & Save
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} 60 on Kosmos Guesthouse. All rights reserved.</p>
          <p className="mt-2">
            Self-catering accommodation in Bellville South, Cape Town | Near UWC, CPUT & Tygerberg Hospital
          </p>
        </div>
      </div>
    </footer>
  )
}

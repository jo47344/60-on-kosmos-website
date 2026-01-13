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

          <div>
            <h3 className="text-xl font-bold mb-4">Contractors</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/contractor-accommodation"
                  className="hover:text-white transition-colors font-semibold text-sage-400"
                >
                  Contractor Accommodation
                </Link>
              </li>
              <li>
                <Link href="/monthly-accommodation" className="hover:text-white transition-colors">
                  Monthly Accommodation
                </Link>
              </li>
              <li>
                <Link href="/weekly-accommodation" className="hover:text-white transition-colors">
                  Weekly Accommodation
                </Link>
              </li>
              <li>
                <Link href="/n1-city-accommodation" className="hover:text-white transition-colors">
                  N1 City Accommodation
                </Link>
              </li>
              <li>
                <Link href="/self-catering-rooms" className="hover:text-white transition-colors">
                  Self-Catering Rooms
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Other Guests */}
          <div>
            <h3 className="text-xl font-bold mb-4">Other Guests</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/uwc-student-accommodation" className="hover:text-white transition-colors">
                  UWC Students
                </Link>
              </li>
              <li>
                <Link href="/cput-accommodation" className="hover:text-white transition-colors">
                  CPUT Students
                </Link>
              </li>
              <li>
                <Link href="/tygerberg-hospital-accommodation" className="hover:text-white transition-colors">
                  Tygerberg Hospital
                </Link>
              </li>
              <li>
                <Link href="/airport-accommodation" className="hover:text-white transition-colors">
                  Airport Accommodation
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-white transition-colors">
                  All Rooms
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

            <div className="mt-4">
              <Link href="/terms" className="text-sage-400 hover:text-white transition-colors text-sm">
                Terms & House Rules
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
          <p>&copy; {currentYear} 60 on Kosmos Guesthouse. All rights reserved.</p>
          <p className="mt-2">
            Contractor accommodation in Bellville South, Cape Town | Near N1, UWC & Tygerberg Hospital
          </p>
          <p className="mt-2">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & House Rules
            </Link>
            {" | "}
            <span>Rates subject to change without notice</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

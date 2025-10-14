import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1: Business Info with NAP */}
          <div>
            <h3 className="text-xl font-bold mb-4">60 on Kosmos</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Address:</p>
                  <p>60 Kosmos Street</p>
                  <p>Bellville South, 7530</p>
                  <p>Western Cape, South Africa</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Phone:</p>
                  <a href="tel:+27745245703" className="hover:text-white">
                    +27 74 524 5703
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Email:</p>
                  <a href="mailto:info@60onkosmos.co.za" className="hover:text-white">
                    info@60onkosmos.co.za
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps & Reviews */}
            <div className="mt-6 space-y-3">
              <a
                href="https://maps.app.goo.gl/3FUxaVvNYN3Lv4qW7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition text-sm"
              >
                <MapPin className="w-4 h-4" />
                View on Google Maps
              </a>
              <br />
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJZxt_FVjDzB0ROI7aAQzlzMM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition text-sm"
              >
                ⭐ Leave us a Google Review
              </a>
            </div>

            {/* Social Media */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/60-On-Kosmos-61571946294679/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/60onkosmos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/rooms" className="hover:text-white transition">
                  Our Rooms
                </Link>
              </li>
              <li>
                <Link href="/contractor-accommodation-bellville" className="hover:text-white transition">
                  Contractor Accommodation
                </Link>
              </li>
              <li>
                <Link href="/near-uwc-bellville" className="hover:text-white transition">
                  UWC Accommodation
                </Link>
              </li>
              <li>
                <Link href="/accommodation-near-tygerberg-hospital" className="hover:text-white transition">
                  Tygerberg Hospital Accommodation
                </Link>
              </li>
              <li>
                <Link href="/monthly-accommodation-bellville" className="hover:text-white transition">
                  Monthly Rates
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="hover:text-white transition">
                  Amenities & Facilities
                </Link>
              </li>
              <li>
                <Link href="/local-info" className="hover:text-white transition">
                  Local Area Information
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact & Directions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog & Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Policies */}
          <div>
            <h3 className="text-xl font-bold mb-4">Guest Information</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-semibold text-white">Check-in:</p>
                <p>14:00 (2:00 PM)</p>
              </div>
              <div>
                <p className="font-semibold text-white">Check-out:</p>
                <p>10:00 (10:00 AM)</p>
              </div>
              <div>
                <p className="font-semibold text-white">Quiet Hours:</p>
                <p>22:00 - 08:00</p>
              </div>
              <div>
                <p className="font-semibold text-white">Parking:</p>
                <p>Free secure parking with 24/7 CCTV</p>
              </div>
              <div className="pt-4 border-t border-gray-700">
                <p className="text-sm">
                  <strong>Important:</strong> Adults only accommodation
                </p>
                <p className="text-sm mt-2">Damage deposit: R500 (cash, fully refundable)</p>
                <p className="text-sm mt-2">No smoking inside rooms</p>
              </div>
            </div>

            {/* Book Direct CTA */}
            <div className="mt-6">
              <Link
                href="/book-now"
                className="inline-block w-full text-center bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-6 py-3 rounded-lg transition"
              >
                Book Direct & Save
              </Link>
            </div>
          </div>
        </div>

        {/* SEO Footer Text */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-gray-400 text-sm leading-relaxed">
            <p className="mb-4">
              <strong className="text-white">60 on Kosmos</strong> is your trusted choice for affordable guesthouse
              accommodation in Bellville South, Cape Town. Located just minutes from the University of the Western Cape
              (UWC) and Tygerberg Hospital, we specialize in serviced accommodation for contractors, extended stays for
              medical professionals, student housing, and monthly accommodation for young professionals and digital
              nomads.
            </p>
            <p>
              Our self-catering ensuite rooms offer the perfect blend of comfort, security, and convenience. Each room
              features free high-speed WiFi, secure off-street parking, weekly cleaning service, and 24/7 CCTV
              surveillance. Whether you're a contractor working on a project in Cape Town, a nursing student at
              Tygerberg Hospital, an international student at UWC, or a young professional seeking affordable monthly
              accommodation, 60 on Kosmos provides quality lodging at competitive rates. Book direct for the best prices
              on accommodation near Bellville, Parow, and greater Cape Town.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} 60 on Kosmos. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/terms" className="hover:text-white transition">
              Terms & Conditions
            </Link>
            {" · "}
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

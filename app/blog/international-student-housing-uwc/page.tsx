import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, ArrowLeft, Phone, GraduationCap, CheckCircle, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "International Student Housing Near UWC 2025: Complete Guide",
  description:
    "Just accepted to UWC? Find temporary accommodation near University of the Western Cape. Pre-arrival housing guide, costs, safety tips, and campus res application timeline.",
  keywords:
    "uwc international student housing, accommodation near uwc, student housing bellville, uwc campus residence, pre-arrival accommodation cape town, uwc temporary housing",
  alternates: { canonical: "https://60onkosmos.co.za/blog/international-student-housing-uwc" },
}

export default function InternationalStudentHousingPage() {
  return (
    <article className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-sage-600 hover:text-sage-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            INTERNATIONAL STUDENTS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            International Student Housing Near UWC: Complete 2025 Guide
          </h1>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>9 January 2025</span>
            <span className="mx-2">•</span>
            <span>10 min read</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/twin-room-yellow.png"
            alt="International student accommodation near UWC Bellville"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6 font-medium">
            Congratulations on your acceptance to the University of the Western Cape (UWC)! Finding accommodation is one
            of the biggest challenges for international students. This comprehensive guide covers everything you need to
            know about housing options, costs, and settling in before you arrive.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-yellow-900 font-bold mb-2">⚠️ IMPORTANT: Book Accommodation BEFORE You Arrive</p>
                <p className="text-yellow-800">
                  UWC campus residence fills up fast and has long waiting lists. Most international students need
                  temporary accommodation for 1-6 months while they secure campus housing or find permanent off-campus
                  options.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">UWC Campus Residence: What You Need to Know</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Application Timeline</h3>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">1.</span>
                <span>
                  <strong>October-December:</strong> Apply for residence for the following academic year
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">2.</span>
                <span>
                  <strong>January-February:</strong> Residence placements announced (first-years prioritized)
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">3.</span>
                <span>
                  <strong>Late arrivals/postgrads:</strong> Often wait-listed or need off-campus accommodation
                </span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Campus Residence Costs (2025 estimates)</h3>

          <table className="w-full mb-8 text-left border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">Residence Type</th>
                <th className="p-3 border">Cost per Year</th>
                <th className="p-3 border">Includes</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border">
                <td className="p-3 border">Shared room (2-4 people)</td>
                <td className="p-3 border">R28,000 - R35,000</td>
                <td className="p-3 border">Meals, cleaning</td>
              </tr>
              <tr className="border">
                <td className="p-3 border">Single room</td>
                <td className="p-3 border">R40,000 - R48,000</td>
                <td className="p-3 border">Meals, cleaning</td>
              </tr>
              <tr className="border">
                <td className="p-3 border">Self-catering apartment</td>
                <td className="p-3 border">R36,000 - R45,000</td>
                <td className="p-3 border">Kitchen, no meals</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Temporary Accommodation Options</h2>

          <p className="text-gray-700 mb-6">
            While waiting for campus residence or looking for permanent accommodation, international students typically
            stay in:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h4 className="font-bold text-lg mb-4">🏨 Guesthouses (Recommended)</h4>
              <p className="text-sm text-gray-600 mb-3">Best for: 1-6 month stays</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cost:</strong> R530-750/night (R13,500-18,000/month)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Pros:</strong> WiFi, parking, no lease, fully furnished
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cons:</strong> More expensive than long-term rentals
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h4 className="font-bold text-lg mb-4">🏠 Shared Houses/Digs</h4>
              <p className="text-sm text-gray-600 mb-3">Best for: Students planning to stay off-campus</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cost:</strong> R3,000-6,000/month + utilities
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Pros:</strong> Cheapest option, social environment
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cons:</strong> Deposit required, 12-month lease, hard to find before arrival
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h4 className="font-bold text-lg mb-4">🏢 Private Student Accommodation</h4>
              <p className="text-sm text-gray-600 mb-3">Best for: Students wanting campus-like facilities</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cost:</strong> R4,500-8,000/month
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Pros:</strong> Security, social, study facilities
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cons:</strong> Often full, 10-12 month contracts
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h4 className="font-bold text-lg mb-4">🎒 Backpacker Hostels</h4>
              <p className="text-sm text-gray-600 mb-3">Best for: 1-2 week emergency accommodation</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cost:</strong> R250-400/night (dorms)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Pros:</strong> Very cheap, social, no commitment
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cons:</strong> No privacy, not ideal for studying
                  </span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
            <p className="text-green-900 font-bold mb-2">💡 Smart Strategy for International Students:</p>
            <p className="text-green-800 mb-4">Book a guesthouse for your first 1-3 months while you:</p>
            <ul className="space-y-1 text-green-800">
              <li>1. Apply for campus residence in person</li>
              <li>2. View off-campus accommodation options</li>
              <li>3. Meet other students and find housemates</li>
              <li>4. Learn the area and transport routes</li>
              <li>5. Set up a South African bank account</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Monthly Budget for International Students</h2>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <table className="w-full">
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-3">Accommodation (guesthouse/temporary)</td>
                  <td className="py-3 text-right">R13,500 - R18,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Food & Groceries</td>
                  <td className="py-3 text-right">R2,500 - R3,500</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Transport (taxis to campus)</td>
                  <td className="py-3 text-right">R800 - R1,500</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Airtime & Data</td>
                  <td className="py-3 text-right">R300 - R500</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Textbooks & Study Materials</td>
                  <td className="py-3 text-right">R500 - R1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Personal Expenses</td>
                  <td className="py-3 text-right">R1,000 - R2,000</td>
                </tr>
                <tr className="font-bold text-lg border-t-2">
                  <td className="py-3">Total Monthly Budget</td>
                  <td className="py-3 text-right text-blue-700">R18,600 - R26,500</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-600 mt-4 italic">
              *Costs reduce significantly once you move to campus residence (R2,500-4,000/month) or shared accommodation
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Safety Tips for International Students</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-red-50">
              <h4 className="font-bold text-lg mb-3 text-red-900">🚫 Don't Do This</h4>
              <ul className="space-y-2 text-red-800 text-sm">
                <li>• Walk alone at night (use Uber/Bolt)</li>
                <li>• Flash expensive phones/laptops in public</li>
                <li>• Leave bags unattended on campus</li>
                <li>• Accept lifts from strangers</li>
                <li>• Share too much info on social media</li>
              </ul>
            </Card>

            <Card className="p-6 bg-green-50">
              <h4 className="font-bold text-lg mb-3 text-green-900">✅ Do This Instead</h4>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Use campus shuttle services</li>
                <li>• Join UWC international student WhatsApp groups</li>
                <li>• Keep emergency numbers saved</li>
                <li>• Register with your embassy/consulate</li>
                <li>• Get comprehensive medical insurance</li>
              </ul>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Before You Arrive: Essential Checklist</h2>

          <div className="space-y-3 mb-8">
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Book temporary accommodation for first 1-3 months (before you fly!)</span>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Apply for study permit and collect it before arrival</span>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Get medical insurance (mandatory for international students)</span>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Book airport transfer (don't take random taxis)</span>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Download Uber/Bolt apps before you arrive</span>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Join "UWC International Students 2025" Facebook/WhatsApp groups</span>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Bring enough cash (USD/EUR) to exchange on arrival</span>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Print all important documents (study permit, accommodation, etc.)</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Getting from Airport to Bellville</h2>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h4 className="font-bold mb-3">🛬 Cape Town International Airport → Bellville South</h4>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Distance:</strong> 16km (20-30 minutes)
              </li>
              <li>
                <strong>Uber/Bolt:</strong> R150-250 (safest option, book via app)
              </li>
              <li>
                <strong>Pre-booked Transfer:</strong> R200-300 (arrange with your accommodation)
              </li>
              <li className="text-red-700 font-bold">⚠️ Avoid: Random taxis at airport (risk of overcharging)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Student Experiences</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-900">
                <strong>Amara, Zimbabwe 🇿🇼:</strong> "I booked a guesthouse for my first 2 months. Best decision! Gave
                me time to apply for campus res in person and view other options. Eventually found a great shared house
                with 3 other UWC students."
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-900">
                <strong>Kofi, Ghana 🇬🇭:</strong> "Don't wait until you arrive to find accommodation. I made that mistake
                and had to stay in a backpacker hostel for 2 weeks. Not fun when you're trying to focus on orientation."
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-900">
                <strong>Priya, India 🇮🇳:</strong> "Bellville South is way cheaper than staying in Cape Town CBD. The
                taxi to UWC is only R50-70. I saved so much money by not staying in touristy areas."
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 mt-12 text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Need Pre-Arrival Accommodation Near UWC?</h2>
          <p className="text-lg mb-6 opacity-90">
            60 on Kosmos is just 5km from UWC. Perfect for international students. Flexible terms, WiFi, secure parking.
            Book before you fly!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <a
                href="https://wa.me/27745245703?text=Hi%2C%20I'm%20an%20international%20student%20starting%20at%20UWC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp to Book Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-700 bg-transparent"
            >
              <Link href="/near-uwc-bellville">View Rooms & Prices</Link>
            </Button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Student Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/blog/nursing-student-accommodation-tygerberg" className="block hover:opacity-80">
              <Card className="p-4">
                <h4 className="font-bold mb-2">Nursing Students Guide</h4>
                <p className="text-sm text-gray-600">Accommodation near Tygerberg for medical students</p>
              </Card>
            </Link>
            <Link href="/blog/cheap-accommodation-bellville-south" className="block hover:opacity-80">
              <Card className="p-4">
                <h4 className="font-bold mb-2">Budget Accommodation</h4>
                <p className="text-sm text-gray-600">Find the cheapest safe rooms in Bellville South</p>
              </Card>
            </Link>
            <Link href="/near-uwc-bellville" className="block hover:opacity-80">
              <Card className="p-4">
                <h4 className="font-bold mb-2">Our UWC Rooms</h4>
                <p className="text-sm text-gray-600">View available student accommodation near UWC</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

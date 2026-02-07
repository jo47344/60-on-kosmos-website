import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, ArrowLeft, Phone, CheckCircle } from "lucide-react"
import { BlogShareButtons } from "@/components/blog-share-buttons"

export const metadata: Metadata = {
  title: "Complete Guide for Medical Staff Relocating to Tygerberg Hospital 2025",
  description:
    "Moving to Tygerberg Hospital for locum work or permanent position? Everything you need to know about accommodation, transport, living costs, and settling in Bellville.",
  keywords:
    "tygerberg hospital accommodation, locum doctor housing cape town, medical staff accommodation bellville, tygerberg hospital relocation guide, nursing accommodation tygerberg",
  alternates: { canonical: "https://60onkosmos.co.za/blog/medical-staff-guide-tygerberg-hospital" },
}

export default function MedicalStaffGuidePage() {
  const pageUrl = "https://60onkosmos.co.za/blog/medical-staff-guide-tygerberg-hospital"
  const pageTitle = "Complete Guide for Medical Staff Relocating to Tygerberg Hospital"

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
          <div className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            MEDICAL STAFF GUIDE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Guide for Medical Staff Relocating to Tygerberg Hospital
          </h1>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>10 January 2025</span>
            <span className="mx-2">•</span>
            <span>8 min read</span>
          </div>
        </div>

        {/* Share Buttons */}
        <BlogShareButtons title={pageTitle} url={pageUrl} />

        {/* Featured Image */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/sage-double-room.png"
            alt="Medical staff accommodation near Tygerberg Hospital"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6 font-medium">
            Relocating to Tygerberg Hospital for a locum position, registrar training, or permanent role? This complete
            guide covers everything you need to know about finding accommodation, transport, and settling into
            Bellville.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Why Medical Professionals Choose Bellville South
          </h2>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <p className="text-blue-900 font-semibold mb-2">💡 Insider Tip:</p>
            <p className="text-blue-800">
              Most locum doctors and medical staff stay in Bellville South or nearby areas rather than Cape Town CBD.
              It's 8km closer to the hospital, significantly cheaper, and has better parking.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Accommodation Options Near Tygerberg</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <Card className="p-6">
              <h4 className="font-bold text-lg mb-3">🏨 Short-Term (1-3 months)</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Guesthouses: R500-800/night (R13,500-18,000/month)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Airbnb: R600-1,200/night (often more expensive)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hospital guesthouses: Limited availability, book early</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h4 className="font-bold text-lg mb-3">🏠 Long-Term (3+ months)</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>1-bedroom flat: R6,000-9,000/month + utilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Shared house: R4,000-6,000/month + utilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Guesthouse monthly rate: R13,500-16,000 (all inclusive)</span>
                </li>
              </ul>
            </Card>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Getting to Tygerberg Hospital</h3>

          <p className="text-gray-700 mb-4">
            Tygerberg Hospital is located in Parow, about 8-12km from most Bellville South accommodation. Here are your
            transport options:
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h4 className="font-bold text-lg mb-4">🚗 Driving (Recommended)</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• 10-15 minute drive from Bellville South</li>
              <li>• Free parking available at hospital</li>
              <li>• Secure parking at 60 on Kosmos overnight</li>
              <li>• Safest option for night shifts</li>
            </ul>

            <h4 className="font-bold text-lg mt-6 mb-4">🚕 Uber/Bolt</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• R50-80 one way (R100-160/day)</li>
              <li>• R2,000-3,200/month for daily commute</li>
              <li>• Available 24/7 for night shifts</li>
              <li>• Share rides with other medical staff</li>
            </ul>

            <h4 className="font-bold text-lg mt-6 mb-4">🚌 Public Transport</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• MyCiTi bus: Closest route from Bellville</li>
              <li>• Golden Arrow buses available</li>
              <li>• Not recommended for night shifts</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Monthly Living Costs Breakdown</h3>

          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <table className="w-full text-left">
              <tbody className="text-gray-700">
                <tr className="border-b border-green-200">
                  <td className="py-3 font-medium">Accommodation (guesthouse)</td>
                  <td className="py-3 text-right">R13,500 - R16,000</td>
                </tr>
                <tr className="border-b border-green-200">
                  <td className="py-3 font-medium">Transport (Uber daily)</td>
                  <td className="py-3 text-right">R2,500 - R3,500</td>
                </tr>
                <tr className="border-b border-green-200">
                  <td className="py-3 font-medium">Groceries</td>
                  <td className="py-3 text-right">R3,000 - R4,000</td>
                </tr>
                <tr className="border-b border-green-200">
                  <td className="py-3 font-medium">Takeaways/Eating Out</td>
                  <td className="py-3 text-right">R2,000 - R3,000</td>
                </tr>
                <tr className="border-b border-green-200">
                  <td className="py-3 font-medium">Miscellaneous</td>
                  <td className="py-3 text-right">R1,000 - R2,000</td>
                </tr>
                <tr className="font-bold text-lg">
                  <td className="py-3">Total Monthly Cost</td>
                  <td className="py-3 text-right text-green-700">R22,000 - R28,500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Essential Services Near Bellville South</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-bold mb-3">🛒 Groceries & Shopping</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• SPAR Kasselsvlei (2km)</li>
                <li>• Pick n Pay Hypermarket (5km)</li>
                <li>• Checkers (6km)</li>
                <li>• Bellville Mall (7km)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3">🏥 Medical Services</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Bellville Mediclinic (6km)</li>
                <li>• Various GP practices nearby</li>
                <li>• 24-hour pharmacies available</li>
                <li>• Dental practices in Bellville</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3">🏋️ Fitness & Wellness</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Virgin Active (multiple locations)</li>
                <li>• Planet Fitness</li>
                <li>• Various yoga studios</li>
                <li>• Outdoor running routes</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3">🍽️ Restaurants & Takeaways</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Multiple restaurants in Bellville</li>
                <li>• Fast food chains nearby</li>
                <li>• Uber Eats available</li>
                <li>• Cafés with WiFi for study</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tips from Medical Staff at Tygerberg</h3>

          <div className="space-y-4 mb-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-900">
                <strong>Dr. Sarah K., Locum GP:</strong> "I stayed at a guesthouse in Bellville South for 3 months. Way
                cheaper than hotels and I had my own space. The 10-minute drive to Tygerberg was easy, even for night
                shifts."
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-900">
                <strong>Nurse Thando M., ICU:</strong> "Book accommodation BEFORE you arrive. Cape Town fills up fast,
                especially during summer. I use WhatsApp to book directly with guesthouses—it's easier and cheaper."
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-900">
                <strong>Dr. James L., Registrar:</strong> "Don't stay in Cape Town CBD if you're working at Tygerberg.
                The commute is brutal and expensive. Bellville is close, safe, and practical."
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Safety & Security</h3>

          <p className="text-gray-700 mb-4">
            Bellville South is a generally safe residential area, but standard Cape Town safety precautions apply:
          </p>

          <ul className="space-y-2 text-gray-700 mb-8">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
              <span>Choose accommodation with secure parking and CCTV</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
              <span>Use Uber/Bolt for night shifts rather than walking</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
              <span>Lock doors and windows, especially at night</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
              <span>Be aware of surroundings when withdrawing cash</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
              <span>Join local medical staff WhatsApp groups for safety updates</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Booking Your Accommodation</h3>

          <p className="text-gray-700 mb-6">
            When booking accommodation near Tygerberg Hospital, look for these features:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card className="p-4 bg-green-50">
              <h4 className="font-bold mb-2">✅ Must-Haves</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Secure parking</li>
                <li>• Fast WiFi</li>
                <li>• 24/7 access (for shifts)</li>
                <li>• Private bathroom</li>
                <li>• Within 15km of hospital</li>
              </ul>
            </Card>

            <Card className="p-4 bg-blue-50">
              <h4 className="font-bold mb-2">👍 Nice-to-Haves</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Bar fridge in room</li>
                <li>• Kitchen access</li>
                <li>• Laundry facilities</li>
                <li>• Workspace/desk</li>
                <li>• Quiet environment</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Share Again at Bottom */}
        <BlogShareButtons title={pageTitle} url={pageUrl} />

        {/* CTA Section */}
        <div className="bg-sage-600 text-white rounded-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Book Your Tygerberg Accommodation?</h2>
          <p className="text-lg mb-6 opacity-90">
            60 on Kosmos is just 8km from Tygerberg Hospital. Secure parking, fast WiFi, and flexible terms for medical
            professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-sage-600 hover:bg-gray-100">
              <a
                href="https://wa.me/27745245703?text=Hi%2C%20I'm%20a%20medical%20professional%20relocating%20to%20Tygerberg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp for Medical Staff Rates
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-sage-700 bg-transparent"
            >
              <Link href="/accommodation-near-tygerberg-hospital">View Our Tygerberg Rooms</Link>
            </Button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/blog/nursing-student-accommodation-tygerberg" className="block hover:opacity-80">
              <Card className="p-4">
                <h4 className="font-bold mb-2">Nursing Student Guide</h4>
                <p className="text-sm text-gray-600">Accommodation tips for nursing students at Tygerberg</p>
              </Card>
            </Link>
            <Link href="/blog/monthly-accommodation-bellville-south" className="block hover:opacity-80">
              <Card className="p-4">
                <h4 className="font-bold mb-2">Monthly Rates Guide</h4>
                <p className="text-sm text-gray-600">Save money with long-term accommodation in Bellville South</p>
              </Card>
            </Link>
            <Link href="/accommodation-near-tygerberg-hospital" className="block hover:opacity-80">
              <Card className="p-4">
                <h4 className="font-bold mb-2">Our Rooms</h4>
                <p className="text-sm text-gray-600">View available accommodation near Tygerberg Hospital</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

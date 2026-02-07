import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, ArrowLeft, Phone, CheckCircle, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Nursing Student Accommodation Near Tygerberg Hospital: Complete Guide 2025",
  description:
    "Starting practical training at Tygerberg Hospital? Find safe, affordable accommodation for nursing students in Bellville South. 3-6 month stays, WiFi, parking, quiet study environment.",
  keywords:
    "nursing student accommodation tygerberg, student nurse housing bellville, tygerberg hospital student accommodation, practical training housing cape town, nursing college accommodation",
  alternates: { canonical: "https://60onkosmos.co.za/blog/nursing-student-accommodation-tygerberg" },
}

export default function NursingStudentPage() {
  return (
    <article className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center text-sage-600 hover:text-sage-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <div className="mb-8">
          <div className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            NURSING STUDENTS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nursing Student Accommodation Near Tygerberg Hospital: What You Need to Know
          </h1>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>6 January 2025</span>
            <span className="mx-2">•</span>
            <span>5 min read</span>
          </div>
        </div>

        <div className="relative h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/triple-room-full.jpg"
            alt="Affordable nursing student accommodation near Tygerberg Hospital Bellville"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6 font-medium">
            Starting your practical training at Tygerberg Hospital? Finding affordable, safe accommodation close to the
            hospital is one of the biggest stresses for nursing students. This guide covers everything you need to know
            about student housing options in Bellville South.
          </p>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
            <p className="text-red-900 font-bold mb-2">📍 Location is Key:</p>
            <p className="text-red-800">
              Tygerberg Hospital is in Parow. Bellville South is 8-12km away (10-15 min drive). Most nursing students
              stay in Bellville South, Parow, or nearby suburbs to avoid long commutes during 12-hour shifts.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Accommodation Options for Nursing Students</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">🏨 Guesthouses (Recommended)</h3>
              <p className="text-sm mb-3">
                <strong>Best for:</strong> 3-6 month practical blocks
              </p>
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
                    <strong>Pros:</strong> WiFi, parking, no lease, furnished, quiet
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cons:</strong> More expensive than shared housing
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">🏠 Shared Student Digs</h3>
              <p className="text-sm mb-3">
                <strong>Best for:</strong> Longer placements (6+ months)
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cost:</strong> R3,000-5,000/month + utilities
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Pros:</strong> Cheapest option, social
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cons:</strong> Need deposit, 6-12 month lease, noisy
                  </span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
            <p className="text-green-900 font-bold mb-2">💡 Student Tip:</p>
            <p className="text-green-800">
              Most nursing students book guesthouses for their first practical block (3-4 months) while they look for
              shared accommodation or assess if they want to stay in the area. This gives you flexibility without
              committing to a long lease.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Monthly Budget Breakdown</h2>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <table className="w-full">
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-3">Accommodation (guesthouse)</td>
                  <td className="py-3 text-right">R13,500 - R16,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Food & Groceries</td>
                  <td className="py-3 text-right">R2,000 - R3,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Transport (Uber/taxi to hospital)</td>
                  <td className="py-3 text-right">R1,500 - R2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Scrubs & Nursing Supplies</td>
                  <td className="py-3 text-right">R500 - R1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Airtime & Data</td>
                  <td className="py-3 text-right">R300 - R500</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Personal Expenses</td>
                  <td className="py-3 text-right">R1,000 - R1,500</td>
                </tr>
                <tr className="font-bold text-lg border-t-2">
                  <td className="py-3">Total Monthly Budget</td>
                  <td className="py-3 text-right text-green-700">R18,800 - R24,500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Getting to Tygerberg Hospital</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-bold mb-3">🚗 If You Have a Car:</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• 10-15 min drive from Bellville South</li>
                <li>• Free parking at hospital</li>
                <li>• Safest option for night shifts</li>
                <li>• Secure parking at guesthouse</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">🚕 Without a Car:</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Uber/Bolt: R50-80 one way</li>
                <li>• Share rides with other students</li>
                <li>• R2,000-3,000/month transport</li>
                <li>• Not ideal for early morning shifts</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What to Look for in Accommodation</h2>

          <div className="space-y-3 mb-8">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-gray-900">Quiet Environment:</strong>
                <p className="text-gray-600 text-sm">
                  You need proper rest between 12-hour shifts. Avoid noisy party areas.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-gray-900">Study Space:</strong>
                <p className="text-gray-600 text-sm">
                  Desk or table for studying case notes and preparing for assessments.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-gray-900">Kitchen/Fridge:</strong>
                <p className="text-gray-600 text-sm">Bar fridge for snacks. Kitchen access helps save money on food.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-gray-900">24/7 Access:</strong>
                <p className="text-gray-600 text-sm">
                  Hospital shifts start early (6am) and end late (7pm). Need flexible access.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-gray-900">WiFi:</strong>
                <p className="text-gray-600 text-sm">
                  Essential for research, online assignments, and keeping in touch with family.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-gray-900">Safe Area:</strong>
                <p className="text-gray-600 text-sm">
                  Security important, especially for female students finishing late shifts.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Student Nurse Testimonials</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-900">
                <strong>Thandi, 3rd Year Nursing Student:</strong> "I stayed at a guesthouse in Bellville South for my
                4-month practical at Tygerberg. Quiet room, safe parking, 10 min drive to hospital. Way better than
                shared digs where it's noisy. Could actually study and rest properly."
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-900">
                <strong>Lerato, Graduate Nurse:</strong> "Book accommodation BEFORE you start your practical. I left it
                last minute and struggled to find anything. Most guesthouses near Tygerberg fill up fast when practical
                blocks start."
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tips for Nursing Students</h2>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">1.</span>
                <span>
                  <strong>Book 2-3 months before your practical starts</strong> to get the best options
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">2.</span>
                <span>
                  <strong>Ask about monthly rates</strong> if you're staying 3+ months (save R5,000-10,000)
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">3.</span>
                <span>
                  <strong>Join nursing student WhatsApp groups</strong> to find housemates or share transport
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">4.</span>
                <span>
                  <strong>Visit accommodation first if possible</strong> (or ask for video tour via WhatsApp)
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">5.</span>
                <span>
                  <strong>Check distance to SPAR/shops</strong> for easy access to groceries and meals
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-red-600 text-white rounded-lg p-8 mt-12 text-center">
          <Heart className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Starting Your Practical at Tygerberg?</h2>
          <p className="text-lg mb-6 opacity-90">
            Safe, affordable accommodation for nursing students. Quiet study environment, 24/7 access, WiFi included.
            Book your room today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <a
                href="https://wa.me/27745245703?text=Hi%2C%20I'm%20a%20nursing%20student%20starting%20at%20Tygerberg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp for Student Rates
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-red-700 bg-transparent"
            >
              <Link href="/accommodation-near-tygerberg-hospital">View Our Rooms</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}

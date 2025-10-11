import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Bellville vs Cape Town CBD Accommodation: Which is Better? [2025 Comparison]",
  description:
    "Comprehensive comparison: Bellville South vs Cape Town CBD accommodation. Cost, location, safety, amenities. See why smart travelers choose Bellville and save 40-60%.",
  keywords:
    "bellville vs cape town, bellville or cape town accommodation, where to stay cape town, bellville south vs cbd, cape town accommodation comparison",
}

export default function BellvilleVsCapeTownPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bellville South vs Cape Town CBD Accommodation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Honest comparison to help you decide where to stay. Spoiler: Bellville South wins on value, but Cape Town
            CBD wins on tourist attractions.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-green-500">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-green-700 mb-4">✅ Choose Bellville South If:</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You want to save 40-60% on accommodation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You're visiting UWC or Tygerberg Hospital</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You're a contractor working Northern Suburbs</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You have a rental car (or don't mind Uber)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You prefer quiet, residential areas</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You're visiting family in Northern Suburbs</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You're on a budget or long-term stay</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-500">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">🏙️ Choose Cape Town CBD If:</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You're here purely for tourism/sightseeing</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You don't have a car and need public transport</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You want to walk to restaurants/nightlife</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Budget is not a concern</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Your business meetings are in CBD</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You're only staying 1-2 nights</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You want 24/7 tourist atmosphere</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Detailed Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-bold">Category</th>
                  <th className="p-4 text-left font-bold">Bellville South</th>
                  <th className="p-4 text-left font-bold">Cape Town CBD</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4 font-semibold">💰 Cost</td>
                  <td className="p-4 bg-green-50">
                    <strong className="text-green-700">R530-750/night</strong>
                    <br />
                    <span className="text-sm">Monthly: R13,500-18,000</span>
                  </td>
                  <td className="p-4">
                    <strong>R1,000-2,000/night</strong>
                    <br />
                    <span className="text-sm">Monthly: R30,000-60,000</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold">🚗 Parking</td>
                  <td className="p-4 bg-green-50">
                    <Check className="w-5 h-5 text-green-600 inline mr-2" />
                    <strong>Free & Secure</strong>
                    <br />
                    <span className="text-sm">Behind locked gates, CCTV</span>
                  </td>
                  <td className="p-4">
                    <X className="w-5 h-5 text-red-600 inline mr-2" />
                    <strong>Expensive or None</strong>
                    <br />
                    <span className="text-sm">R200-400/day parking fees</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold">📶 WiFi</td>
                  <td className="p-4 bg-green-50">
                    <Check className="w-5 h-5 text-green-600 inline mr-2" />
                    <strong>Free, Fast Fiber</strong>
                    <br />
                    <span className="text-sm">50-100 Mbps, reliable</span>
                  </td>
                  <td className="p-4">
                    <Check className="w-5 h-5 text-green-600 inline mr-2" />
                    <strong>Usually Free</strong>
                    <br />
                    <span className="text-sm">Can be slow/unreliable</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold">🏥 Medical Access</td>
                  <td className="p-4 bg-green-50">
                    <strong>Excellent</strong>
                    <br />
                    <span className="text-sm">8km to Tygerberg Hospital, Mediclinic nearby</span>
                  </td>
                  <td className="p-4">
                    <strong>Good</strong>
                    <br />
                    <span className="text-sm">Private clinics, Groote Schuur 15 min away</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold">🎓 Universities</td>
                  <td className="p-4 bg-green-50">
                    <strong>Very Close</strong>
                    <br />
                    <span className="text-sm">UWC 5km, CPUT 6km</span>
                  </td>
                  <td className="p-4">
                    <strong>Far</strong>
                    <br />
                    <span className="text-sm">UWC 25km (30 min drive)</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold">🛒 Shopping</td>
                  <td className="p-4 bg-green-50">
                    <strong>Great</strong>
                    <br />
                    <span className="text-sm">SPAR 2km, Tyger Valley 8km, Canal Walk 12km</span>
                  </td>
                  <td className="p-4">
                    <strong>Excellent</strong>
                    <br />
                    <span className="text-sm">V&A Waterfront, Long Street shops walking distance</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold">🍽️ Restaurants</td>
                  <td className="p-4">
                    <strong>Moderate</strong>
                    <br />
                    <span className="text-sm">Chain restaurants 5-10km, Uber Eats available</span>
                  </td>
                  <td className="p-4 bg-green-50">
                    <strong>Excellent</strong>
                    <br />
                    <span className="text-sm">100+ restaurants walking distance, fine dining</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold">🌃 Nightlife</td>
                  <td className="p-4">
                    <strong>Limited</strong>
                    <br />
                    <span className="text-sm">Quiet residential, need to drive to nightlife</span>
                  </td>
                  <td className="p-4 bg-green-50">
                    <strong>Excellent</strong>
                    <br />
                    <span className="text-sm">Long Street, Kloof Street bars/clubs walking distance</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold">🏖️ Tourist Attractions</td>
                  <td className="p-4">
                    <strong>30-45 min drive</strong>
                    <br />
                    <span className="text-sm">Table Mountain, V&A, beaches require car/Uber</span>
                  </td>
                  <td className="p-4 bg-green-50">
                    <strong>Walking/Close</strong>
                    <br />
                    <span className="text-sm">Table Mountain cableway 10 min, V&A 5 min</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold">🔒 Safety</td>
                  <td className="p-4 bg-green-50">
                    <strong>Safer</strong>
                    <br />
                    <span className="text-sm">Quiet residential, lower crime than CBD</span>
                  </td>
                  <td className="p-4">
                    <strong>Higher Vigilance Needed</strong>
                    <br />
                    <span className="text-sm">Urban area, petty crime risk, avoid walking alone at night</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold">🚖 Transport</td>
                  <td className="p-4">
                    <strong>Car Recommended</strong>
                    <br />
                    <span className="text-sm">Uber available but adds cost. Public transport limited.</span>
                  </td>
                  <td className="p-4 bg-green-50">
                    <strong>Excellent Public Transport</strong>
                    <br />
                    <span className="text-sm">MyCiTi, taxis, Uber, walkable to most places</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold">✈️ Airport</td>
                  <td className="p-4 bg-green-50">
                    <strong>Closer</strong>
                    <br />
                    <span className="text-sm">15km (20 min drive)</span>
                  </td>
                  <td className="p-4">
                    <strong>Further</strong>
                    <br />
                    <span className="text-sm">22km (30-40 min with traffic)</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold">👨‍👩‍👧 Family-Friendly</td>
                  <td className="p-4 bg-green-50">
                    <Check className="w-5 h-5 text-green-600 inline mr-2" />
                    <strong>Very</strong>
                    <br />
                    <span className="text-sm">Quiet, triple rooms, safe, affordable</span>
                  </td>
                  <td className="p-4">
                    <strong>Moderate</strong>
                    <br />
                    <span className="text-sm">Busier, noisier, more expensive for families</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold">💼 Business Travel</td>
                  <td className="p-4 bg-green-50">
                    <strong>Great for Northern Suburbs work</strong>
                    <br />
                    <span className="text-sm">Perfect for contractors, medical staff, corporate relocations</span>
                  </td>
                  <td className="p-4">
                    <strong>Great for CBD meetings</strong>
                    <br />
                    <span className="text-sm">Walk to offices, conference centers</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold">📚 Students</td>
                  <td className="p-4 bg-green-50">
                    <Check className="w-5 h-5 text-green-600 inline mr-2" />
                    <strong>Perfect for UWC/CPUT</strong>
                    <br />
                    <span className="text-sm">Close to universities, affordable, quiet for studying</span>
                  </td>
                  <td className="p-4">
                    <X className="w-5 h-5 text-red-600 inline mr-2" />
                    <strong>Far from major unis</strong>
                    <br />
                    <span className="text-sm">UCT closer, but very expensive</span>
                  </td>
                </tr>

                <tr className="bg-gray-50 font-bold">
                  <td className="p-4">🏆 OVERALL WINNER</td>
                  <td className="p-4 text-green-700 text-xl">
                    Bellville South
                    <br />
                    <span className="text-sm font-normal">(for value & practical needs)</span>
                  </td>
                  <td className="p-4 text-blue-700 text-xl">
                    Cape Town CBD
                    <br />
                    <span className="text-sm font-normal">(for tourists & nightlife)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Real Guest Scenarios */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Real Guest Scenarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-green-500">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">✅ Perfect for Bellville South</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>
                    <strong>Sarah (Medical Student):</strong> "I had a 3-month placement at Tygerberg Hospital. Stayed
                    in Bellville South for R14,500/month vs R45,000 for CBD Airbnb. 10 min drive to hospital. Saved
                    R90,000 over 3 months!"
                  </p>
                  <p>
                    <strong>David (Contractor):</strong> "Working on Northern Suburbs project for 6 months. Bellville
                    South perfect—close to work sites, free parking, affordable. CBD would've been R180,000 more!"
                  </p>
                  <p>
                    <strong>Emily (Visiting Parents):</strong> "My daughter lives in Bellville. Stayed 2 weeks for
                    R8,680 vs R24,000+ in CBD. Close to her house, quiet, safe. Why would I pay 3x more?"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-500">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">🏙️ Perfect for Cape Town CBD</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>
                    <strong>James (Tourist from UK):</strong> "First time in Cape Town for 4 days. Wanted to experience
                    the city, walk to restaurants, see Table Mountain. CBD perfect for short tourist visit."
                  </p>
                  <p>
                    <strong>Lisa (Conference Attendee):</strong> "Business conference at Cape Town ICC for 2 nights.
                    Stayed in CBD, walked to venue. Short trip, company paying, CBD made sense."
                  </p>
                  <p>
                    <strong>Tom (Backpacker):</strong> "Traveling without a car, wanted nightlife and to meet other
                    travelers. Long Street hostels perfect for party atmosphere and public transport."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-sage-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Save 40-60% on Your Cape Town Stay?</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Based on this comparison, Bellville South is the smart choice for most visitors—especially if you're here
            for work, study, family, or long-term. Book direct for best rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <a
                href="https://wa.me/27745245703?text=Hi%2C%20I'd%20like%20to%20book%20in%20Bellville%20South"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp to Book Bellville South
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-green-700 bg-transparent"
            >
              <Link href="/rooms">View Rooms & Pricing</Link>
            </Button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            💡 Still unsure? WhatsApp us your situation—we'll honestly tell you if Bellville South is right for you or
            if you should stay in CBD.
          </p>
        </div>
      </div>
    </div>
  )
}

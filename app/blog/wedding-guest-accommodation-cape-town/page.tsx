import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, ArrowLeft, Phone, CheckCircle, Heart } from "lucide-react"
import { BlogShareButtons } from "@/components/blog-share-buttons"
import { NewsletterSignup } from "@/components/newsletter-signup"

export const metadata: Metadata = {
  title: "Wedding Guest Accommodation Cape Town: Complete Guide for Bellville Weddings 2025",
  description:
    "Attending a wedding in Bellville or Cape Town? Find affordable, convenient accommodation for wedding guests. Group bookings, flexible check-in, close to wedding venues.",
  keywords:
    "wedding guest accommodation cape town, bellville wedding accommodation, group accommodation wedding, wedding hotel bellville, cape town wedding lodging",
}

export default function WeddingGuestAccommodationPage() {
  const pageUrl = "https://60onkosmos.co.za/blog/wedding-guest-accommodation-cape-town"
  const pageTitle = "Wedding Guest Accommodation Cape Town: Complete Guide"

  return (
    <article className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center text-sage-600 hover:text-sage-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <div className="mb-8">
          <div className="inline-block bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            WEDDING GUESTS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wedding Guest Accommodation in Cape Town: The Smart Guide for Bellville Weddings
          </h1>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>5 January 2025</span>
            <span className="mx-2">•</span>
            <span>6 min read</span>
          </div>
        </div>

        <BlogShareButtons title={pageTitle} url={pageUrl} />

        <div className="relative h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/outdoor-seating.png"
            alt="Wedding guest accommodation near Bellville Cape Town venues"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6 font-medium">
            Attending a wedding at a Bellville venue? Finding affordable, convenient accommodation for out-of-town
            wedding guests can be stressful. This guide helps you book the perfect place to stay—close to venues,
            budget-friendly, and with flexible check-in for wedding day chaos.
          </p>

          <div className="bg-pink-50 border-l-4 border-pink-600 p-6 mb-8">
            <p className="text-pink-900 font-bold mb-2">💒 Wedding Planning Tip:</p>
            <p className="text-pink-800">
              Book accommodation within 10km of your wedding venue. Bellville South is perfectly located near popular
              venues like Bloemendal, Zorgvliet, and Kleine Zalze—but at half the price of staying at venue hotels.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Bellville South for Wedding Guests?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-green-50">
              <h3 className="font-bold text-lg mb-4">💰 Affordable Rates</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Venue hotels: R1,500-3,000/night</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Bellville South: R530-750/night</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Save R950-2,250 per night per couple</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Perfect for multi-day wedding events</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-blue-50">
              <h3 className="font-bold text-lg mb-4">📍 Convenient Location</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>15-25 min drive to most Bellville venues</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>20-30 min to Cape Town CBD venues</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>30 min to Stellenbosch wine farms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Free secure parking (no venue parking fees)</span>
                </li>
              </ul>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Popular Wedding Venues Near Bellville South</h2>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <table className="w-full text-sm">
              <thead className="border-b-2">
                <tr>
                  <th className="text-left py-3">Venue</th>
                  <th className="text-left py-3">Location</th>
                  <th className="text-right py-3">Distance</th>
                  <th className="text-right py-3">Drive Time</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-3 font-medium">Bloemendal</td>
                  <td className="py-3">Durbanville</td>
                  <td className="py-3 text-right">12km</td>
                  <td className="py-3 text-right">15 min</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 font-medium">Zorgvliet Wines</td>
                  <td className="py-3">Banhoek Valley</td>
                  <td className="py-3 text-right">25km</td>
                  <td className="py-3 text-right">25 min</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 font-medium">Kleine Zalze</td>
                  <td className="py-3">Stellenbosch</td>
                  <td className="py-3 text-right">28km</td>
                  <td className="py-3 text-right">30 min</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 font-medium">Cavalli Estate</td>
                  <td className="py-3">Stellenbosch</td>
                  <td className="py-3 text-right">32km</td>
                  <td className="py-3 text-right">35 min</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 font-medium">The Aleit Group Venues</td>
                  <td className="py-3">Various Cape Town</td>
                  <td className="py-3 text-right">15-25km</td>
                  <td className="py-3 text-right">20-30 min</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Nooitgedacht Estate</td>
                  <td className="py-3">Stellenbosch</td>
                  <td className="py-3 text-right">30km</td>
                  <td className="py-3 text-right">30 min</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Cost Comparison: Wedding Weekend</h2>

          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-lg mb-4">💑 Example: Couple attending 3-day wedding (Fri-Sun)</h3>
            <table className="w-full text-left">
              <tbody className="text-gray-700">
                <tr className="border-b border-green-200">
                  <td className="py-3">Venue Hotel (3 nights)</td>
                  <td className="py-3 text-right">R4,500 - R9,000</td>
                </tr>
                <tr className="border-b border-green-200">
                  <td className="py-3">Bellville South Guesthouse (3 nights)</td>
                  <td className="py-3 text-right">R1,590 - R2,250</td>
                </tr>
                <tr className="border-b border-green-200">
                  <td className="py-3">Uber to/from venue (3 days)</td>
                  <td className="py-3 text-right">R600 - R900</td>
                </tr>
                <tr className="font-bold text-lg border-t-2">
                  <td className="py-3">Total Bellville South Cost</td>
                  <td className="py-3 text-right text-green-700">R2,190 - R3,150</td>
                </tr>
                <tr className="text-green-700 font-bold">
                  <td className="py-3">💰 Savings</td>
                  <td className="py-3 text-right">R2,310 - R5,850</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-600 mt-4 italic">
              Use your savings for wedding gifts, outfits, or extending your Cape Town trip!
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Group Booking Benefits</h2>

          <p className="text-gray-700 mb-4">Coordinating accommodation for multiple wedding guests? We offer:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card className="p-4">
              <h4 className="font-bold mb-2">✨ For Couples/Families</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Private ensuite rooms</li>
                <li>• Double and twin options</li>
                <li>• Triple rooms for families with kids</li>
                <li>• Quiet environment for rest</li>
              </ul>
            </Card>

            <Card className="p-4">
              <h4 className="font-bold mb-2">👥 For Bridal Party</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Book multiple rooms together</li>
                <li>• Single billing for easy splitting</li>
                <li>• Flexible check-in times</li>
                <li>• Space for getting ready</li>
              </ul>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Wedding Day Logistics</h2>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-lg mb-4">📅 Typical Wedding Weekend Timeline</h3>

            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-bold">Friday (Arrival Day)</p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Late check-in available (most guests arrive evening)</li>
                  <li>• Rehearsal dinner: Easy Uber/drive to venue</li>
                  <li>• Secure parking overnight</li>
                </ul>
              </div>

              <div>
                <p className="font-bold">Saturday (Wedding Day)</p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Sleep in—no early checkout stress</li>
                  <li>• Get ready in private room with ensuite</li>
                  <li>• 24/7 access if staying elsewhere pre-ceremony</li>
                  <li>• Uber to venue for ceremony (guests shouldn't drive)</li>
                  <li>• Late return after reception (Uber drops you off)</li>
                </ul>
              </div>

              <div>
                <p className="font-bold">Sunday (Departure/Recovery)</p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Flexible check-out (request late checkout)</li>
                  <li>• Recovery breakfast nearby (SPAR 2km)</li>
                  <li>• Easy access to Cape Town airport (20 min)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Transport Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-bold mb-3">🚗 Driving Yourself</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Pros:</strong> Freedom, cheaper for groups
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cons:</strong> Can't drink at wedding
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Best for:</strong> Rehearsal dinner, morning-after brunch
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">🚕 Uber/Bolt</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Pros:</strong> Can drink freely, safe
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cost:</strong> R150-300 each way to most venues
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Best for:</strong> Wedding day ceremony/reception
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Things to Do Before/After the Wedding</h2>

          <p className="text-gray-700 mb-4">
            Extend your trip and explore Cape Town while you're here! Bellville South is perfectly positioned for:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <h4 className="font-bold mb-2">🍷 Wine Tasting</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Stellenbosch: 30 min drive</li>
                <li>• Durbanville Wine Route: 15 min</li>
                <li>• Franschhoek: 45 min</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2">🏔️ Tourist Attractions</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Table Mountain: 40 min</li>
                <li>• V&A Waterfront: 35 min</li>
                <li>• Camps Bay Beach: 45 min</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2">🍽️ Dining</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Bellville restaurants: 5-10 min</li>
                <li>• Cape Town CBD: 30 min</li>
                <li>• Casual spots nearby</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2">🛍️ Shopping</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Tyger Valley Mall: 10 min</li>
                <li>• Canal Walk: 15 min</li>
                <li>• V&A Waterfront: 35 min</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Guest Testimonials</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-900">
                <strong>Emma & John, UK Wedding Guests:</strong> "We stayed at 60 on Kosmos for our friend's
                Stellenbosch wedding. Saved a fortune compared to venue accommodation. Used the money we saved to
                explore Cape Town for 3 extra days. Highly recommend!"
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-900">
                <strong>Sarah, Maid of Honor:</strong> "Booked 4 rooms for the bridal party. Owner was so
                accommodating—let us check in super late Friday and checkout late Sunday. Clean rooms, safe parking,
                perfect base for wedding weekend."
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-900">
                <strong>David, Best Man:</strong> "Needed last-minute accommodation for groomsmen. Found 60 on Kosmos,
                booked via WhatsApp same day. Close to venue, affordable, no fuss. Would stay again."
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Booking Tips for Wedding Guests</h2>

          <div className="bg-purple-50 rounded-lg p-6 mb-8">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="font-bold text-purple-600 mr-3 mt-1">1.</span>
                <div>
                  <strong>Book Early</strong>
                  <p className="text-sm text-gray-600">
                    Cape Town wedding season (Oct-April) fills fast. Book 2-3 months ahead.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-purple-600 mr-3 mt-1">2.</span>
                <div>
                  <strong>Check Venue Distance</strong>
                  <p className="text-sm text-gray-600">
                    Use Google Maps to confirm drive time from accommodation to venue.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-purple-600 mr-3 mt-1">3.</span>
                <div>
                  <strong>Coordinate with Other Guests</strong>
                  <p className="text-sm text-gray-600">Book multiple rooms together to split Uber costs.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-purple-600 mr-3 mt-1">4.</span>
                <div>
                  <strong>Confirm Check-in Flexibility</strong>
                  <p className="text-sm text-gray-600">
                    Wedding guests often arrive late Friday or need late Sunday checkout.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-purple-600 mr-3 mt-1">5.</span>
                <div>
                  <strong>Budget for Transport</strong>
                  <p className="text-sm text-gray-600">
                    Add R300-600 for Uber if you're drinking at the wedding (worth it!).
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <BlogShareButtons title={pageTitle} url={pageUrl} />

        <NewsletterSignup />

        <div className="bg-pink-600 text-white rounded-lg p-8 mt-12 text-center">
          <Heart className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Attending a Bellville or Cape Town Wedding?</h2>
          <p className="text-lg mb-6 opacity-90">
            Affordable accommodation close to popular venues. Group bookings welcome. Book direct for best rates!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
              <a
                href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20accommodation%20for%20a%20wedding%20on%20[date]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp for Group Rates
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-pink-700 bg-transparent"
            >
              <Link href="/rooms">View Our Rooms</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}

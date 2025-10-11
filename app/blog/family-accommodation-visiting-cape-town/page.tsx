import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, ArrowLeft, Phone, CheckCircle, Users } from "lucide-react"
import { BlogShareButtons } from "@/components/blog-share-buttons"
import { NewsletterSignup } from "@/components/newsletter-signup"

export const metadata: Metadata = {
  title: "Family Accommodation Visiting Cape Town: Guide for Families 2025",
  description:
    "Visiting family in Cape Town? Find affordable family-friendly accommodation in Bellville South. Triple rooms, kitchen access, secure parking. Perfect for multi-generational visits.",
  keywords:
    "family accommodation cape town, visiting family bellville, family rooms cape town, affordable family lodging, multi-generational accommodation cape town",
}

export default function FamilyAccommodationPage() {
  const pageUrl = "https://60onkosmos.co.za/blog/family-accommodation-visiting-cape-town"
  const pageTitle = "Family Accommodation Visiting Cape Town: Complete Guide"

  return (
    <article className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center text-sage-600 hover:text-sage-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <div className="mb-8">
          <div className="inline-block bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            VISITING FAMILY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visiting Family in Cape Town? Your Complete Accommodation Guide
          </h1>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>4 January 2025</span>
            <span className="mx-2">•</span>
            <span>7 min read</span>
          </div>
        </div>

        <BlogShareButtons title={pageTitle} url={pageUrl} />

        <div className="relative h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/triple-room-full.jpg"
            alt="Family accommodation near Bellville South Cape Town for visiting relatives"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6 font-medium">
            Visiting family in Cape Town but their house is full? Or maybe you prefer your own space? Finding
            affordable, comfortable family accommodation close to your relatives doesn't have to be stressful. This
            guide helps you find the perfect base for your Cape Town family visit.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-8">
            <p className="text-orange-900 font-bold mb-2">👨‍👩‍👧‍👦 Family Visiting Scenario:</p>
            <p className="text-orange-800">
              Your kids live in Bellville or Cape Town. You're visiting for 1-2 weeks but don't want to impose staying
              at their place (especially with grandkids!). You need nearby accommodation that's affordable, clean, safe,
              and has parking. Bellville South is perfect—close to family, half the price of tourist areas.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Families Choose Bellville South</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">💰 Budget-Friendly</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>R530-750/night vs R1,000-2,000 in tourist areas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Save R5,000-15,000 on a 2-week visit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>More money for family outings and gifts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Affordable for retired/pensioner budgets</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">🏡 Family-Friendly Features</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Quiet residential area (not noisy tourist zone)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Secure parking (essential for rental car)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Triple rooms for couples with adult child</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Kitchen/fridge access for snacks</span>
                </li>
              </ul>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Family Visiting Scenarios</h2>

          <div className="space-y-6 mb-8">
            <Card className="p-6 bg-blue-50">
              <h3 className="font-bold text-lg mb-3">👴👵 Grandparents Visiting Adult Kids</h3>
              <p className="text-gray-700 mb-3">
                <strong>Situation:</strong> Your son/daughter lives in Bellville or nearby. Their house is small or full
                with grandkids. You want to visit for 1-2 weeks but need your own space.
              </p>
              <p className="text-gray-700">
                <strong>Solution:</strong> Book a double room in Bellville South. 5-15 min drive to their house. Visit
                during the day, have your own quiet space at night. Perfect balance of family time and privacy.
              </p>
            </Card>

            <Card className="p-6 bg-green-50">
              <h3 className="font-bold text-lg mb-3">👨‍👩‍👧 Parents + Teen/Young Adult</h3>
              <p className="text-gray-700 mb-3">
                <strong>Situation:</strong> Traveling as a family of 3. Your child is studying at UWC or your relative
                works nearby. Need accommodation for a week.
              </p>
              <p className="text-gray-700">
                <strong>Solution:</strong> Book a triple room (3 single beds). Everyone has their own bed, shared
                ensuite bathroom. More affordable and spacious than cramped hotel room.
              </p>
            </Card>

            <Card className="p-6 bg-purple-50">
              <h3 className="font-bold text-lg mb-3">🏥 Visiting for Medical Reasons</h3>
              <p className="text-gray-700 mb-3">
                <strong>Situation:</strong> Your family member is in Tygerberg Hospital. You're visiting daily for
                treatments/recovery. Need accommodation for several weeks.
              </p>
              <p className="text-gray-700">
                <strong>Solution:</strong> Bellville South is 8km from Tygerberg Hospital (10 min drive). Affordable
                long-term rates make extended medical visits more manageable financially.
              </p>
            </Card>

            <Card className="p-6 bg-yellow-50">
              <h3 className="font-bold text-lg mb-3">🎓 Visiting Student Children</h3>
              <p className="text-gray-700 mb-3">
                <strong>Situation:</strong> Your child is studying at UWC. You're visiting for graduation, parents'
                weekend, or just checking in. Student digs too small to host you.
              </p>
              <p className="text-gray-700">
                <strong>Solution:</strong> Stay 5km from UWC campus. Close enough to visit daily, far enough to give
                your student independence. Take them out for meals, do laundry together, quality family time.
              </p>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Cost Breakdown: 2-Week Family Visit</h2>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="font-bold mb-4">💑 Couple staying 14 nights (visiting adult children in Cape Town)</h3>
            <table className="w-full">
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-3">Accommodation Option</td>
                  <td className="py-3 text-right">Total Cost (14 nights)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">
                    <strong>Cape Town CBD Hotel</strong>
                    <br />
                    <span className="text-sm text-gray-600">R1,200/night average</span>
                  </td>
                  <td className="py-3 text-right font-bold text-red-700">R16,800</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">
                    <strong>Airbnb (Tourist Area)</strong>
                    <br />
                    <span className="text-sm text-gray-600">R900/night + cleaning fees</span>
                  </td>
                  <td className="py-3 text-right font-bold text-orange-700">R13,500</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="py-3">
                    <strong>Bellville South Guesthouse</strong>
                    <br />
                    <span className="text-sm text-gray-600">R620/night (monthly rate discount)</span>
                  </td>
                  <td className="py-3 text-right font-bold text-green-700">R8,680</td>
                </tr>
                <tr className="font-bold text-lg border-t-2">
                  <td className="py-3 text-green-700">Your Savings (vs Hotel)</td>
                  <td className="py-3 text-right text-green-700">R8,120</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-600 mt-4 italic">
              💡 Use savings for: Family dinners, gifts for grandkids, Cape Town tourist activities, extending your
              trip!
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What to Do When Visiting Family</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-3">👨‍👩‍👧‍👦 Family Activities</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Family braais (BBQ) at your kids' place</li>
                <li>• Take grandkids to beach (40 min to Blouberg)</li>
                <li>• Table Mountain cable car (family outing)</li>
                <li>• Kirstenbosch Botanical Gardens picnic</li>
                <li>• V&A Waterfront shopping & aquarium</li>
                <li>• Dinner out at Cape Town restaurants</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">🛒 Practical Errands</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• SPAR for groceries (2km from accommodation)</li>
                <li>• Pick n Pay, Checkers nearby</li>
                <li>• Help kids with shopping runs</li>
                <li>• Pharmacy runs (multiple nearby)</li>
                <li>• Tyger Valley Mall shopping (10 min)</li>
                <li>• Canal Walk entertainment (15 min)</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Transport & Getting Around</h2>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-lg mb-4">🚗 Car Rental (Recommended for Family Visits)</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Why rent a car for family visits:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>Freedom to visit family on your schedule</li>
                <li>Take kids/grandkids on outings without bothering parents</li>
                <li>Do grocery runs, errands independently</li>
                <li>Explore Cape Town tourist spots</li>
                <li>Secure parking at guesthouse (free!)</li>
              </ul>
              <p className="text-sm italic">
                💰 Cost: R350-500/day for compact car. For 14-day trip: R4,900-7,000 total. Still cheaper than staying
                in CBD + using Uber everywhere!
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Testimonials from Visiting Families</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-900">
                <strong>Margaret & Tom (Durban), visiting daughter in Bellville:</strong> "We stay at 60 on Kosmos every
                time we visit our daughter and grandkids. Clean, safe, quiet. 10 minutes to their house. Much better
                than crowding into their small place. Affordable for pensioners like us!"
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-900">
                <strong>David (Johannesburg), visiting son at UWC:</strong> "Booked for my son's graduation weekend.
                Close to campus, easy parking. He crashed in our triple room after graduation party—glad we had space!
                Would definitely book again for future visits."
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-900">
                <strong>Linda (Port Elizabeth), visiting husband in Tygerberg Hospital:</strong> "My husband had surgery
                at Tygerberg. I stayed at 60 on Kosmos for 3 weeks during his recovery. Close to hospital, affordable
                for long stay. The owner was very understanding of my situation."
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Booking Tips for Family Visits</h2>

          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="font-bold text-green-600 mr-3 mt-1">1.</span>
                <div>
                  <strong>Book Early for Peak Times</strong>
                  <p className="text-sm text-gray-600">
                    December holidays, Easter, school holidays fill fast. Book 1-2 months ahead.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-green-600 mr-3 mt-1">2.</span>
                <div>
                  <strong>Ask About Long-Term Rates</strong>
                  <p className="text-sm text-gray-600">
                    Staying 2+ weeks? Request monthly rate discount (save R100-150/night).
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-green-600 mr-3 mt-1">3.</span>
                <div>
                  <strong>Get Your Kids' Address Handy</strong>
                  <p className="text-sm text-gray-600">
                    Helps when booking—owner can confirm proximity and give directions.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-green-600 mr-3 mt-1">4.</span>
                <div>
                  <strong>Flexible Check-in/Check-out</strong>
                  <p className="text-sm text-gray-600">
                    Flights don't always align with standard times. Request flexibility when booking.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-green-600 mr-3 mt-1">5.</span>
                <div>
                  <strong>Book Direct via WhatsApp</strong>
                  <p className="text-sm text-gray-600">
                    Personal service, easy communication, better rates than booking sites.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Packing List for Family Visits</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card className="p-4">
              <h4 className="font-bold mb-2">✅ Essentials</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Adapters (SA uses type M plugs)</li>
                <li>• Comfortable walking shoes</li>
                <li>• Sunscreen & hat (Cape Town sun is strong)</li>
                <li>• Light jacket (evenings can be cool)</li>
                <li>• Medications & prescriptions</li>
              </ul>
            </Card>

            <Card className="p-4">
              <h4 className="font-bold mb-2">🎁 Nice to Have</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Gifts for grandkids/family</li>
                <li>• Photos from home to share</li>
                <li>• Snacks from your hometown</li>
                <li>• Travel guidebook for sightseeing</li>
                <li>• Camera for family photos</li>
              </ul>
            </Card>
          </div>
        </div>

        <BlogShareButtons title={pageTitle} url={pageUrl} />

        <NewsletterSignup />

        <div className="bg-orange-600 text-white rounded-lg p-8 mt-12 text-center">
          <Users className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Visiting Family in Bellville or Cape Town?</h2>
          <p className="text-lg mb-6 opacity-90">
            Affordable family accommodation close to your loved ones. Long-term rates available. Secure parking
            included!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <a
                href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20accommodation%20for%20a%20family%20visit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp for Family Rates
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-orange-700 bg-transparent"
            >
              <Link href="/rooms">View Our Family Rooms</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}

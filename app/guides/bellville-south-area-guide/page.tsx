import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ShoppingCart, Utensils, GraduationCap, Hospital, Car, Home, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Bellville South Area Guide 2025: Everything You Need to Know",
  description:
    "Comprehensive guide to Bellville South, Cape Town. Local amenities, transport, shopping, schools, medical facilities, safety, and things to do. Essential reading for visitors and new residents.",
  keywords:
    "bellville south guide, bellville south cape town, what to do bellville south, bellville south amenities, living in bellville south, bellville south suburbs",
}

export default function BellvilleSouthAreaGuidePage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Bellville South Area Guide 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Bellville South: shopping, dining, transport, medical facilities, schools,
            safety, and local attractions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <a href="#shopping" className="bg-purple-50 hover:bg-purple-100 p-4 rounded-lg text-center transition-colors">
            <ShoppingCart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <span className="text-sm font-semibold">Shopping</span>
          </a>
          <a href="#dining" className="bg-orange-50 hover:bg-orange-100 p-4 rounded-lg text-center transition-colors">
            <Utensils className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <span className="text-sm font-semibold">Dining</span>
          </a>
          <a href="#education" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg text-center transition-colors">
            <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <span className="text-sm font-semibold">Education</span>
          </a>
          <a href="#medical" className="bg-red-50 hover:bg-red-100 p-4 rounded-lg text-center transition-colors">
            <Hospital className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <span className="text-sm font-semibold">Medical</span>
          </a>
        </div>

        {/* About Section */}
        <section className="mb-16">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative h-64 lg:h-full">
                <Image
                  src="/images/exterior-building.png"
                  alt="Bellville South Cape Town residential area"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About Bellville South</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Bellville South is a well-established residential suburb in Cape Town's Northern Suburbs, located
                  approximately 25km from Cape Town CBD. The area is known for its convenient location, affordable cost
                  of living, and excellent access to major transport routes.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Originally developed in the 1950s-60s, Bellville South has evolved into a diverse, family-friendly
                  neighborhood popular with students, young professionals, and families. Its strategic position makes it
                  ideal for commuters working in Cape Town, contractors working on Northern Suburbs projects, and
                  visitors to nearby institutions like UWC and Tygerberg Hospital.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <p className="text-sm text-gray-600">Distance to CBD</p>
                    <p className="text-2xl font-bold text-gray-900">25km</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Population</p>
                    <p className="text-2xl font-bold text-gray-900">~15,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Avg. Property Price</p>
                    <p className="text-2xl font-bold text-gray-900">R1.2M</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Postal Code</p>
                    <p className="text-2xl font-bold text-gray-900">7530</p>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </section>

        {/* Shopping Section */}
        <section id="shopping" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <ShoppingCart className="w-8 h-8 text-purple-600 mr-3" />
            Shopping & Groceries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">SPAR Kasselsvlei</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    2km away (5 min drive)
                  </p>
                  <p>Full-service supermarket with bakery, butchery, and deli. Open 7 days.</p>
                  <p className="font-medium text-green-600">✓ Walking distance if needed</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Pick n Pay Hypermarket</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    5km away (10 min drive)
                  </p>
                  <p>Large hypermarket with clothing, home goods, pharmacy, and full grocery range.</p>
                  <p className="font-medium text-green-600">✓ Best prices for bulk shopping</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Tyger Valley Shopping Centre</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    8km away (10 min drive)
                  </p>
                  <p>
                    Major shopping mall with 180+ stores: Woolworths, Checkers, Clicks, fashion retailers, restaurants,
                    cinema.
                  </p>
                  <p className="font-medium text-green-600">✓ One-stop shopping destination</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Canal Walk Shopping Centre</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    12km away (15 min drive)
                  </p>
                  <p>
                    Africa's 3rd largest mall: 400+ stores, entertainment, cinema, restaurants. Great for tourists and
                    weekend outings.
                  </p>
                  <p className="font-medium text-green-600">✓ Entertainment + shopping</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dining Section */}
        <section id="dining" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Utensils className="w-8 h-8 text-orange-600 mr-3" />
            Restaurants & Dining
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Fast Food Chains</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• KFC (5km)</li>
                  <li>• McDonald's (6km)</li>
                  <li>• Steers (5km)</li>
                  <li>• Nando's (6km)</li>
                  <li>• Debonairs Pizza (5km)</li>
                  <li>• Roman's Pizza (4km)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Casual Dining</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Spur Steak Ranch (7km)</li>
                  <li>• Ocean Basket (8km)</li>
                  <li>• Wimpy (6km)</li>
                  <li>• Mugg & Bean (8km)</li>
                  <li>• Panarotti's Pizza (7km)</li>
                  <li>• Various local cafés</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Delivery Services</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Uber Eats (full coverage)</li>
                  <li>• Mr D Food (full coverage)</li>
                  <li>• Bolt Food (available)</li>
                  <li>• Most restaurants deliver</li>
                  <li>• 30-45 min typical delivery</li>
                  <li>• R20-50 delivery fees</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-sm text-gray-600 mt-4 italic">
            💡 Tip: Bellville CBD (7km) has many more restaurant options including sit-down dining, ethnic cuisine, and
            fine dining.
          </p>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
            Education & Universities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-blue-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">University of the Western Cape (UWC)</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    5km away (8 min drive)
                  </p>
                  <p>
                    Major public university with 20,000+ students. Faculties include Law, Medicine, Education, Science,
                    Arts, and Economic & Management Sciences.
                  </p>
                  <p className="font-medium mt-2">Popular with:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Students needing off-campus housing</li>
                    <li>• Parents visiting students</li>
                    <li>• International students new to Cape Town</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Other Nearby Institutions</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>
                    <strong>Cape Peninsula University of Technology (CPUT)</strong>
                    <br />
                    Bellville Campus - 6km away
                  </li>
                  <li>
                    <strong>Stellenbosch University</strong>
                    <br />
                    Main Campus - 28km away (30 min drive)
                  </li>
                  <li>
                    <strong>Private Schools</strong>
                    <br />
                    Multiple primary & high schools within 5km
                  </li>
                  <li>
                    <strong>Nursing Colleges</strong>
                    <br />
                    Tygerberg Nursing College nearby
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Medical Section */}
        <section id="medical" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Hospital className="w-8 h-8 text-red-600 mr-3" />
            Medical Facilities & Healthcare
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-red-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Tygerberg Hospital</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    8km away (10 min drive)
                  </p>
                  <p>Major academic hospital. Teaching hospital for Stellenbosch University Medical School.</p>
                  <p className="font-medium">Emergency, ICU, all specialties available.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Bellville Mediclinic</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    6km away (10 min drive)
                  </p>
                  <p>Private hospital with 24-hour emergency unit, specialists, and day clinic facilities.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Pharmacies</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Clicks (multiple locations, 5-8km)</li>
                  <li>• Dis-Chem (Tyger Valley, 8km)</li>
                  <li>• Independent pharmacies nearby</li>
                  <li>• Some open 24 hours</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">General Practitioners</h3>
                <p className="text-sm text-gray-700">
                  Multiple GP practices within 5km. Most accept medical aid and cash patients.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Dentists</h3>
                <p className="text-sm text-gray-700">
                  Several dental practices in Bellville and surrounding suburbs. Emergency dental care available.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Specialists</h3>
                <p className="text-sm text-gray-700">
                  Most specialists practice at Bellville Mediclinic or Tygerberg Hospital. Booking required.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Transport Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Car className="w-8 h-8 text-green-600 mr-3" />
            Transport & Getting Around
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Major Routes</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>N1 Highway:</strong> 3km away - connects to Cape Town CBD, Paarl, and beyond
                  </li>
                  <li>
                    <strong>M12 (Voortrekker Road):</strong> Main arterial road through Bellville
                  </li>
                  <li>
                    <strong>R300:</strong> Quick access to Cape Town International Airport
                  </li>
                  <li>
                    <strong>M13:</strong> Connects to Durbanville and wine routes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Distances from Bellville South</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Cape Town CBD: 25km (25-35 min)</li>
                  <li>• Cape Town Airport: 15km (20 min)</li>
                  <li>• Stellenbosch: 28km (30 min)</li>
                  <li>• Table Mountain: 30km (35 min)</li>
                  <li>• V&A Waterfront: 28km (30 min)</li>
                  <li>• Camps Bay Beach: 35km (40 min)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Public Transport</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>MyCiTi Bus:</strong> Connects Bellville to CBD, Waterfront (nearest stop 2-3km)
                  </li>
                  <li>
                    <strong>Golden Arrow Buses:</strong> Extensive local bus network
                  </li>
                  <li>
                    <strong>Metrorail:</strong> Bellville Station 4km away (trains to CBD, Strand, Stellenbosch)
                  </li>
                  <li>
                    <strong>Minibus Taxis:</strong> Local taxi routes available
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Uber & Ride-hailing</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>Uber & Bolt:</strong> Excellent coverage 24/7
                  </li>
                  <li>• To Cape Town CBD: R150-250</li>
                  <li>• To Airport: R100-150</li>
                  <li>• To Stellenbosch: R200-300</li>
                  <li>• Quick response times (5-10 min)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safety Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety & Security</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-3">General Safety</h3>
                  <p className="text-gray-700 mb-3">
                    Bellville South is a generally safe residential suburb with lower crime rates than Cape Town CBD.
                    Standard South African safety precautions apply.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Neighborhood watch active in area</li>
                    <li>• Visible security presence</li>
                    <li>• Well-lit main roads</li>
                    <li>• Regular police patrols</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3">Safety Tips</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Lock car doors while driving</li>
                    <li>✓ Don't leave valuables visible in car</li>
                    <li>✓ Use Uber/Bolt at night vs walking</li>
                    <li>✓ Be aware of surroundings at ATMs</li>
                    <li>✓ Keep accommodation doors/windows locked</li>
                    <li>✓ Avoid walking alone late at night</li>
                    <li>✓ Emergency numbers saved in phone</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Things to Do */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Things to Do & Nearby Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">🍷 Wine Routes</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Durbanville Wine Route (15 min)</li>
                  <li>• Stellenbosch Winelands (30 min)</li>
                  <li>• Franschhoek Valley (50 min)</li>
                  <li>• Paarl Wine Farms (35 min)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">🏖️ Beaches</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Bloubergstrand (30 min)</li>
                  <li>• Table View (25 min)</li>
                  <li>• Camps Bay (45 min)</li>
                  <li>• Clifton (50 min)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">🏔️ Nature & Hiking</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Table Mountain (40 min)</li>
                  <li>• Tygerberg Nature Reserve (5 min)</li>
                  <li>• Durbanville Hills trails (20 min)</li>
                  <li>• Kirstenbosch Gardens (45 min)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-sage-600 text-white rounded-lg p-8 text-center">
          <Home className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Need Accommodation in Bellville South?</h2>
          <p className="text-lg mb-6 opacity-90">
            Now that you know the area, book your stay at 60 on Kosmos. Perfect base for exploring Bellville South and
            Cape Town.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-sage-600 hover:bg-gray-100">
              <a
                href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20accommodation%20in%20Bellville%20South"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp to Book
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-sage-700 bg-transparent"
            >
              <Link href="/rooms">View Our Rooms</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

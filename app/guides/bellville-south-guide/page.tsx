import type { Metadata } from "next"
import { MapPin, Phone, Shield, Utensils, Bus, Building2, Heart, Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Guide to Bellville South - 60 on Kosmos",
  description:
    "Comprehensive guide to staying in Bellville South, Cape Town. Maps, transport, restaurants, safety tips, and more.",
  robots: "index", // Don't index the printable version
}

export default function BellvilleSouthGuidePage() {
  return (
    <div className="print:p-8 max-w-4xl mx-auto bg-white">
      {/* Cover Page */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 print:break-after-page">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Complete Guide to</h1>
          <h2 className="text-6xl md:text-7xl font-bold text-sage-700">Bellville South</h2>
        </div>
        <p className="text-xl text-gray-600 mb-8">Your insider's guide to the area</p>
        <div className="space-y-2 text-lg text-gray-700">
          <p>✓ Interactive Maps & Distances</p>
          <p>✓ Transport Routes & Costs</p>
          <p>✓ Local Restaurant Guide</p>
          <p>✓ Safety Tips & Emergency Contacts</p>
          <p>✓ Things to Do in Cape Town</p>
          <p>✓ Local Insider Secrets</p>
        </div>
        <div className="mt-12 text-sm text-gray-600">
          <p>Provided by 60 on Kosmos Guesthouse</p>
          <p>60 Kosmos Road, Bellville South, Cape Town</p>
          <p>www.60onkosmos.co.za</p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="p-8 print:break-after-page">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Table of Contents</h2>
        <div className="space-y-3 text-lg">
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>1. Welcome to Bellville South</span>
            <span className="text-gray-600">3</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>2. Getting Around - Transport Guide</span>
            <span className="text-gray-600">4</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>3. Area Map & Key Locations</span>
            <span className="text-gray-600">6</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>4. Where to Eat - Restaurant Guide</span>
            <span className="text-gray-600">8</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>5. Shopping & Essentials</span>
            <span className="text-gray-600">11</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>6. Safety Guide & Tips</span>
            <span className="text-gray-600">13</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>7. Emergency Contacts</span>
            <span className="text-gray-600">15</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>8. Day Trips from Bellville South</span>
            <span className="text-gray-600">16</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>9. Local Insider Tips</span>
            <span className="text-gray-600">18</span>
          </div>
        </div>
      </div>

      {/* Chapter 1: Welcome */}
      <div className="p-8 print:break-after-page">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="w-8 h-8 text-sage-600" />
          <h2 className="text-3xl font-bold text-gray-900">Welcome to Bellville South</h2>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Welcome to Bellville South, a vibrant and diverse suburb located in the Northern Suburbs of Cape Town. This
            guide will help you make the most of your stay, whether you're here for studies, work, or exploring Cape
            Town.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">About the Area</h3>
          <p className="text-gray-700 mb-4">
            Bellville South is strategically located near major institutions like the University of the Western Cape
            (UWC) and Tygerberg Hospital, making it popular with students, medical professionals, and families. The area
            offers affordable accommodation, excellent transport links, and easy access to Cape Town's main attractions.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Key Features</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-sage-600 font-bold">•</span>
              <span>
                <strong>Perfect Location:</strong> 5-10 minutes from UWC, 15 minutes from Tygerberg Hospital
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sage-600 font-bold">•</span>
              <span>
                <strong>Affordable:</strong> More budget-friendly than central Cape Town
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sage-600 font-bold">•</span>
              <span>
                <strong>Well-Connected:</strong> Excellent public transport to CBD and surrounding areas
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sage-600 font-bold">•</span>
              <span>
                <strong>Local Amenities:</strong> Shopping centers, restaurants, and services within walking distance
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sage-600 font-bold">•</span>
              <span>
                <strong>Safe & Secure:</strong> Residential area with active community watch programs
              </span>
            </li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">What to Expect</h3>
          <p className="text-gray-700 mb-2">
            Bellville South is a working-class neighborhood with a strong community feel. You'll find:
          </p>
          <ul className="space-y-2 text-gray-700 ml-6">
            <li>• Diverse local restaurants and takeaways</li>
            <li>• Well-stocked SPAR and other convenience stores</li>
            <li>• Friendly locals who are happy to help visitors</li>
            <li>• Regular public transport to major destinations</li>
            <li>• Quiet residential streets perfect for walking</li>
          </ul>
        </div>
      </div>

      {/* Chapter 2: Transport */}
      <div className="p-8 print:break-after-page">
        <div className="flex items-center gap-3 mb-6">
          <Bus className="w-8 h-8 text-sage-600" />
          <h2 className="text-3xl font-bold text-gray-900">Getting Around - Transport Guide</h2>
        </div>

        <div className="prose max-w-none">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Uber & Bolt (Recommended)</h3>
          <div className="bg-sage-50 p-4 rounded-lg mb-6">
            <p className="font-semibold text-gray-900 mb-2">Average Costs from 60 on Kosmos:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• To UWC: R25-35 (5 min)</li>
              <li>• To Tygerberg Hospital: R40-55 (10 min)</li>
              <li>• To Bellville CBD: R35-45 (8 min)</li>
              <li>• To Cape Town CBD: R120-150 (25 min)</li>
              <li>• To V&A Waterfront: R140-170 (30 min)</li>
              <li>• To Cape Town International Airport: R150-180 (20 min)</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Golden Arrow Bus Service</h3>
          <p className="text-gray-700 mb-3">
            Affordable and reliable public bus service connecting Bellville to Cape Town and surrounding areas.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="font-semibold text-gray-900 mb-2">Key Routes from Bellville Station:</p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Route 107:</strong> Bellville → Cape Town CBD (R15-20, 40 min)
              </li>
              <li>
                <strong>Route 108:</strong> Bellville → Parow → Observatory (R12-18, 30 min)
              </li>
              <li>
                <strong>Route 221:</strong> Bellville → Tygerberg Hospital → Parow Valley (R10-15, 25 min)
              </li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 italic">
            💡 Tip: Buy a ClipCard at Bellville Station for discounted fares (save up to 20%)
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">MyCiTi Bus</h3>
          <p className="text-gray-700 mb-3">
            Modern bus rapid transit system connecting to Table View, Blouberg, and Airport.
          </p>
          <div className="bg-purple-50 p-4 rounded-lg mb-4">
            <p className="font-semibold text-gray-900 mb-2">Routes & Costs:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• To Cape Town CBD: R15-25 (requires transfer at Civic Centre)</li>
              <li>• To Airport: R25-35 (40 min, catch from Bellville)</li>
              <li>• To Table View: R20-30 (30 min)</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">Minibus Taxis</h3>
          <p className="text-gray-700 mb-3">
            Cheapest option but can be crowded. Main taxi rank is at Bellville Station.
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">Common Routes:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Bellville → Cape Town CBD: R12-15</li>
              <li>• Bellville → Parow: R8-10</li>
              <li>• Bellville → Tygerberg: R8-12</li>
            </ul>
            <p className="text-sm text-gray-600 mt-2 italic">
              ⚠️ Safety Tip: Avoid using minibus taxis late at night. Uber is safer after dark.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">Walking</h3>
          <p className="text-gray-700 mb-2">Many destinations are within walking distance from 60 on Kosmos:</p>
          <ul className="space-y-1 text-gray-700 ml-6">
            <li>• SPAR Supermarket: 5 min walk</li>
            <li>• Local restaurants: 5-10 min walk</li>
            <li>• Bus stops: 8-10 min walk to Bellville Station</li>
          </ul>
          <p className="text-sm text-gray-600 mt-2 italic">
            💡 Walking is safe during daylight hours. Always walk in groups after dark.
          </p>
        </div>
      </div>

      {/* Chapter 3: Area Map */}
      <div className="p-8 print:break-after-page">
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-8 h-8 text-sage-600" />
          <h2 className="text-3xl font-bold text-gray-900">Area Map & Key Locations</h2>
        </div>

        <div className="prose max-w-none">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Distances from 60 on Kosmos</h3>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border border-sage-200 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🎓 Education</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  UWC Campus: <strong>2.5 km (5 min drive)</strong>
                </li>
                <li>
                  Northlink College: <strong>3 km (7 min drive)</strong>
                </li>
                <li>
                  Bellville High: <strong>2 km (5 min drive)</strong>
                </li>
              </ul>
            </div>

            <div className="border border-blue-200 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🏥 Healthcare</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  Tygerberg Hospital: <strong>5 km (10 min drive)</strong>
                </li>
                <li>
                  Mediclinic Bellville: <strong>3.5 km (8 min drive)</strong>
                </li>
                <li>
                  Life Vincent Pallotti: <strong>4 km (9 min drive)</strong>
                </li>
              </ul>
            </div>

            <div className="border border-green-200 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🛒 Shopping</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  SPAR Bellville South: <strong>400m (5 min walk)</strong>
                </li>
                <li>
                  Bellville Mall: <strong>2.5 km (6 min drive)</strong>
                </li>
                <li>
                  Tygervalley Centre: <strong>6 km (12 min drive)</strong>
                </li>
              </ul>
            </div>

            <div className="border border-purple-200 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🚌 Transport</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  Bellville Station: <strong>2 km (15 min walk)</strong>
                </li>
                <li>
                  Nearest Bus Stop: <strong>500m (7 min walk)</strong>
                </li>
                <li>
                  Taxi Rank: <strong>2 km (at station)</strong>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Major Attractions (from Bellville South)</h3>
          <div className="bg-gradient-to-r from-sage-50 to-blue-50 p-4 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>
                • <strong>Table Mountain:</strong> 25 km (30 min drive) - R140 Uber
              </li>
              <li>
                • <strong>V&A Waterfront:</strong> 22 km (30 min drive) - R150 Uber
              </li>
              <li>
                • <strong>Bloubergstrand Beach:</strong> 15 km (20 min drive) - R100 Uber
              </li>
              <li>
                • <strong>Kirstenbosch Gardens:</strong> 20 km (25 min drive) - R120 Uber
              </li>
              <li>
                • <strong>Cape Point:</strong> 65 km (1 hour drive) - R400 Uber or day tour
              </li>
              <li>
                • <strong>Stellenbosch Winelands:</strong> 35 km (30 min drive) - R200 Uber
              </li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
            <p className="text-sm text-gray-700">
              <strong>💡 Pro Tip:</strong> Download the Uber and Bolt apps before your trip. Both offer competitive
              pricing and are the safest transport options in Cape Town.
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 4: Restaurants */}
      <div className="p-8 print:break-after-page">
        <div className="flex items-center gap-3 mb-6">
          <Utensils className="w-8 h-8 text-sage-600" />
          <h2 className="text-3xl font-bold text-gray-900">Where to Eat - Restaurant Guide</h2>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">
            Bellville South offers a diverse range of dining options, from traditional South African cuisine to
            international flavors. Here are our top recommendations:
          </p>

          {/* Budget-Friendly */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Budget-Friendly (R30-60 per person)</h3>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900">Nando's Bellville</h4>
                <p className="text-sm text-gray-600">Bellville Civic Centre, 6 min drive</p>
                <p className="text-gray-700 mt-1">
                  Famous Portuguese-style peri-peri chicken. Great value, reliable quality.
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Must Try:</strong> Quarter chicken with pap and chakalaka (R65)
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900">Chicken Licken</h4>
                <p className="text-sm text-gray-600">Bellville South, 5 min walk</p>
                <p className="text-gray-700 mt-1">
                  Local favorite for fried chicken and burgers. Quick and affordable.
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Must Try:</strong> SoulFire chicken burger (R42)
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900">Wimpy Bellville</h4>
                <p className="text-sm text-gray-600">Bellville Civic Centre, 6 min drive</p>
                <p className="text-gray-700 mt-1">Family-friendly with all-day breakfast and classic comfort food.</p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Must Try:</strong> Wimpy breakfast (R55)
                </p>
              </div>
            </div>
          </div>

          {/* Mid-Range */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🍽️ Mid-Range (R80-150 per person)</h3>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900">Ocean Basket</h4>
                <p className="text-sm text-gray-600">Bellville Central, 5 min drive</p>
                <p className="text-gray-700 mt-1">
                  Fresh seafood, Mediterranean-style. Great for groups and celebrations.
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Must Try:</strong> Hake & chips platter (R115)
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900">Spur Steak Ranch</h4>
                <p className="text-sm text-gray-600">Tygervalley Centre, 12 min drive</p>
                <p className="text-gray-700 mt-1">
                  South African steakhouse chain with ribs, burgers, and family meals.
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Must Try:</strong> 500g T-bone steak (R145)
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900">Col'Cacchio Pizzeria</h4>
                <p className="text-sm text-gray-600">Tygervalley Centre, 12 min drive</p>
                <p className="text-gray-700 mt-1">Premium pizzas and Italian cuisine with fresh ingredients.</p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Must Try:</strong> Quattro Formaggi pizza (R125)
                </p>
              </div>
            </div>
          </div>

          {/* Local Favorites */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">⭐ Local Hidden Gems</h3>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-gray-900">Mama's Kitchen</h4>
                <p className="text-sm text-gray-600">Bellville South, 8 min walk</p>
                <p className="text-gray-700 mt-1">Authentic Cape Malay cuisine. Best for lunch specials.</p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Must Try:</strong> Curry bunny chow (R45)
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-gray-900">Gatsby & Co</h4>
                <p className="text-sm text-gray-600">Near UWC, 5 min drive</p>
                <p className="text-gray-700 mt-1">Cape Town's famous Gatsby sandwiches - massive and delicious!</p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Must Try:</strong> Masala steak Gatsby, quarter size (R50)
                </p>
              </div>
            </div>
          </div>

          {/* Coffee & Breakfast */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">☕ Coffee & Breakfast Spots</h3>

            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-bold text-gray-900">Vida e Caffè</h4>
                <p className="text-sm text-gray-600">Tygervalley Centre, 12 min drive</p>
                <p className="text-gray-700 mt-1">Premium coffee chain with excellent breakfast options.</p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Must Try:</strong> Eggs Benedict with coffee (R75)
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-bold text-gray-900">Mugg & Bean</h4>
                <p className="text-sm text-gray-600">Bellville Central, 6 min drive</p>
                <p className="text-gray-700 mt-1">All-day breakfast and generous portions. Free Wi-Fi.</p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Must Try:</strong> Big breakfast (R89) - serves 2 people!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-sage-50 border border-sage-200 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>💡 Money-Saving Tip:</strong> Most restaurants offer daily lunch specials between 12pm-3pm with
              30-50% off regular prices. Perfect for students and budget travelers!
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 5: Shopping */}
      <div className="p-8 print:break-after-page">
        <div className="flex items-center gap-3 mb-6">
          <Building2 className="w-8 h-8 text-sage-600" />
          <h2 className="text-3xl font-bold text-gray-900">Shopping & Essentials</h2>
        </div>

        <div className="prose max-w-none">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Supermarkets & Groceries</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">SPAR Bellville South</h4>
              <p className="text-sm text-gray-600 mb-2">400m walk (5 minutes) from 60 on Kosmos</p>
              <p className="text-gray-700 mb-2">Your closest option for groceries, toiletries, and essentials.</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  • <strong>Hours:</strong> Mon-Sat 8am-7pm, Sun 9am-2pm
                </li>
                <li>
                  • <strong>What to buy:</strong> Fresh produce, basics, toiletries
                </li>
                <li>
                  • <strong>Price Range:</strong> Mid-range, slightly higher than big chains
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Pick n Pay Hypermarket</h4>
              <p className="text-sm text-gray-600 mb-2">Bellville Central, 2.5 km (R30 Uber)</p>
              <p className="text-gray-700 mb-2">Massive selection, best prices for bulk shopping.</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  • <strong>Hours:</strong> Mon-Sat 8am-8pm, Sun 8am-6pm
                </li>
                <li>
                  • <strong>Best for:</strong> Weekly shopping, bulk buys, branded items
                </li>
                <li>
                  • <strong>Bonus:</strong> SmartShopper loyalty program for discounts
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Checkers Hypermarket</h4>
              <p className="text-sm text-gray-600 mb-2">Tygervalley Centre, 6 km (R40 Uber)</p>
              <p className="text-gray-700 mb-2">Great for fresh produce and deli items. Open late.</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  • <strong>Hours:</strong> Mon-Sun 8am-9pm
                </li>
                <li>
                  • <strong>Best for:</strong> Fresh meat, seafood, bakery items
                </li>
                <li>
                  • <strong>Bonus:</strong> Xtra Savings card for member-only deals
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Shopping Malls</h3>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-sage-500 pl-4">
              <h4 className="font-bold text-gray-900">Tygervalley Shopping Centre</h4>
              <p className="text-sm text-gray-600">6 km, 12 min drive (R40-50 Uber)</p>
              <p className="text-gray-700 mt-1">
                Largest mall in the area with 200+ stores, cinemas, restaurants, and entertainment.
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Stores:</strong> Woolworths, Edgars, Zara, Mr Price, Clicks, Dis-Chem
              </p>
              <p className="text-sm text-gray-700">
                <strong>Services:</strong> Banks, cellphone shops, optometrists, hairdressers
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-gray-900">Bellville CBD</h4>
              <p className="text-sm text-gray-600">2.5 km, 6 min drive (R30 Uber)</p>
              <p className="text-gray-700 mt-1">Downtown shopping with department stores, banks, and services.</p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Best for:</strong> Government services (Home Affairs), electronics, budget clothing
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Essential Services</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-200 p-3 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">💊 Pharmacies</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Clicks Tygervalley (10 min)</li>
                <li>• Dis-Chem Bellville (8 min)</li>
                <li>• Independent Pharmacy (5 min walk)</li>
              </ul>
            </div>

            <div className="border border-gray-200 p-3 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🏦 Banks/ATMs</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• ABSA Bellville (6 min)</li>
                <li>• FNB Bellville (6 min)</li>
                <li>• Capitec Bellville (5 min)</li>
              </ul>
            </div>

            <div className="border border-gray-200 p-3 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">📱 Cellphone Shops</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Vodacom (Tygervalley)</li>
                <li>• MTN (Bellville CBD)</li>
                <li>• Cell C (Tygervalley)</li>
              </ul>
            </div>

            <div className="border border-gray-200 p-3 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🏥 Medical</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Medicross Urgent Care (24/7)</li>
                <li>• Dr. Lee Practice (General)</li>
                <li>• Bellville Dental Centre</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
            <p className="text-sm text-gray-700">
              <strong>💡 Shopping Tip:</strong> SPAR is closest for quick purchases, but for weekly groceries, take an
              Uber to Pick n Pay or Checkers to save 20-30% on your shopping bill.
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 6: Safety */}
      <div className="p-8 print:break-after-page">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-sage-600" />
          <h2 className="text-3xl font-bold text-gray-900">Safety Guide & Tips</h2>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">
            Bellville South is generally safe, but like any urban area, it's important to stay aware and take basic
            precautions. Follow these guidelines to stay safe during your stay.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">✅ General Safety: Good to Know</h3>
            <p className="text-gray-700 mb-2">
              Bellville South has active Neighbourhood Watch programs and good community relationships. Most visitors
              experience no issues when following basic safety guidelines.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🚶 Walking Safety</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <div>
                <p className="font-semibold text-gray-900">During Daylight (6am-6pm)</p>
                <p className="text-gray-700">Walking is generally safe. Stick to main roads and busy areas.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <div>
                <p className="font-semibold text-gray-900">Walk in Groups</p>
                <p className="text-gray-700">Especially if you're new to the area or walking at dusk.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <div>
                <p className="font-semibold text-gray-900">Stay Alert</p>
                <p className="text-gray-700">
                  Keep your phone out of sight, don't wear expensive jewelry, stay aware of your surroundings.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-600 text-xl">✗</span>
              <div>
                <p className="font-semibold text-gray-900">After Dark (after 7pm)</p>
                <p className="text-gray-700">
                  Use Uber/Bolt instead of walking. It's safer and cheap (R25-40 to most places).
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🚗 Transport Safety</h3>
          <div className="space-y-3 mb-6">
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="font-semibold text-gray-900 mb-1">Uber & Bolt (Recommended)</p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• Always verify the driver's name and license plate before getting in</li>
                <li>• Share your trip details with a friend using the app's share feature</li>
                <li>• Sit in the back seat</li>
                <li>• If you feel uncomfortable, cancel and order another ride</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-3 rounded-lg">
              <p className="font-semibold text-gray-900 mb-1">Minibus Taxis</p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• Use during daylight hours only</li>
                <li>• Keep bags and valuables on your lap</li>
                <li>• Have exact change ready (drivers often don't have change)</li>
                <li>• Know your fare beforehand to avoid being overcharged</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">📱 Phone & Valuables</h3>
          <div className="space-y-2 mb-6">
            <p className="text-gray-700">
              <strong>• Don't use your phone while walking in public.</strong> Rather stop in a shop or safe area if you
              need to check something.
            </p>
            <p className="text-gray-700">
              <strong>• Keep your phone in a front pocket,</strong> not a back pocket or bag.
            </p>
            <p className="text-gray-700">
              <strong>• Don't display expensive items</strong> like jewelry, cameras, or laptops in public.
            </p>
            <p className="text-gray-700">
              <strong>• Use a money belt or hidden pouch</strong> for cash and cards when sightseeing.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🏠 At Your Accommodation</h3>
          <div className="space-y-2 mb-6">
            <p className="text-gray-700">• Always lock doors and windows, even when you're inside</p>
            <p className="text-gray-700">• Use the provided safe for valuables, passports, and extra cash</p>
            <p className="text-gray-700">• Don't let strangers into the property</p>
            <p className="text-gray-700">• Keep your room key secure - don't leave it lying around</p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🆘 If Something Happens</h3>
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Stay calm.</strong> Your safety is the priority, not your belongings.
              </li>
              <li>
                <strong>Don't resist</strong> if someone tries to take your phone or bag. Hand it over - it's insured.
              </li>
              <li>
                <strong>Report to police</strong> for insurance purposes, but realistically, recovery is unlikely.
              </li>
              <li>
                <strong>Contact your accommodation immediately.</strong> We can help you arrange new documents, bank
                cards, etc.
              </li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-sage-50 border border-sage-200 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">💡 Remember: Common Sense Goes a Long Way</p>
            <p className="text-sm text-gray-700">
              Most visitors to Bellville South have a safe and enjoyable experience. Be aware, be smart, and don't let
              fear prevent you from exploring. The local community is friendly and helpful!
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 7: Emergency Contacts */}
      <div className="p-8 print:break-after-page">
        <div className="flex items-center gap-3 mb-6">
          <Phone className="w-8 h-8 text-sage-600" />
          <h2 className="text-3xl font-bold text-gray-900">Emergency Contacts</h2>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">
            Save these important numbers to your phone before you arrive. In South Africa, dial the area code even for
            local calls.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🚨 Emergency Services</h3>
          <div className="bg-red-50 border-2 border-red-500 p-4 rounded-lg mb-6">
            <ul className="space-y-2 text-lg">
              <li className="font-bold text-gray-900">
                <Phone className="inline w-5 h-5 mr-2" />
                Emergency (All Services): <span className="text-red-600">10111</span>
              </li>
              <li className="font-bold text-gray-900">
                <Phone className="inline w-5 h-5 mr-2" />
                Ambulance: <span className="text-red-600">10177</span>
              </li>
              <li className="font-bold text-gray-900">
                <Phone className="inline w-5 h-5 mr-2" />
                Fire Department: <span className="text-red-600">021 535 1100</span>
              </li>
              <li className="font-bold text-gray-900">
                <Phone className="inline w-5 h-5 mr-2" />
                Police (Bellville): <span className="text-red-600">021 957 9000</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🏥 Hospitals & Medical</h3>
          <div className="space-y-3 mb-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-bold text-gray-900">Tygerberg Hospital (24/7)</p>
              <p className="text-gray-700">Francie van Zijl Drive, Tygerberg</p>
              <p className="text-sage-700">
                <Phone className="inline w-4 h-4 mr-1" />
                021 938 4911
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-bold text-gray-900">Mediclinic Bellville (24/7)</p>
              <p className="text-gray-700">Voortrekker Road, Bellville</p>
              <p className="text-sage-700">
                <Phone className="inline w-4 h-4 mr-1" />
                021 948 8293
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-bold text-gray-900">Medicross Urgent Care (24/7)</p>
              <p className="text-gray-700">Tygervalley Centre</p>
              <p className="text-sage-700">
                <Phone className="inline w-4 h-4 mr-1" />
                021 914 0915
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🚕 Transport</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-200 p-3 rounded-lg">
              <p className="font-semibold text-gray-900">Uber</p>
              <p className="text-sm text-gray-600">App-based only</p>
            </div>
            <div className="border border-gray-200 p-3 rounded-lg">
              <p className="font-semibold text-gray-900">Bolt</p>
              <p className="text-sm text-gray-600">App-based only</p>
            </div>
            <div className="border border-gray-200 p-3 rounded-lg">
              <p className="font-semibold text-gray-900">Golden Arrow Bus</p>
              <p className="text-sm text-gray-600">
                <Phone className="inline w-4 h-4 mr-1" />
                0800 656 463
              </p>
            </div>
            <div className="border border-gray-200 p-3 rounded-lg">
              <p className="font-semibold text-gray-900">MyCiTi Bus</p>
              <p className="text-sm text-gray-600">
                <Phone className="inline w-4 h-4 mr-1" />
                0800 65 64 63
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🏨 Your Accommodation</h3>
          <div className="bg-sage-50 border-2 border-sage-500 p-4 rounded-lg mb-6">
            <p className="font-bold text-gray-900 text-lg mb-2">60 on Kosmos Guesthouse</p>
            <p className="text-gray-700">60 Kosmos Road, Bellville South, 7530</p>
            <p className="text-sage-700 font-semibold mt-2">
              <Phone className="inline w-4 h-4 mr-1" />
              +27 21 XXX XXXX (Available 24/7)
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Don't hesitate to contact us anytime for assistance, directions, or safety concerns.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">📞 Other Important Numbers</h3>
          <div className="space-y-2">
            <p className="text-gray-700">
              <strong>Poison Information Centre:</strong> 0861 555 777
            </p>
            <p className="text-gray-700">
              <strong>Gender-Based Violence Hotline:</strong> 0800 428 428
            </p>
            <p className="text-gray-700">
              <strong>Rape Crisis:</strong> 021 447 9762
            </p>
            <p className="text-gray-700">
              <strong>ER24 Private Ambulance:</strong> 084 124
            </p>
            <p className="text-gray-700">
              <strong>City of Cape Town (General):</strong> 0860 103 089
            </p>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
            <p className="text-sm font-semibold text-gray-900 mb-1">⚠️ Important Note on Calling Emergency Services</p>
            <p className="text-sm text-gray-700">
              Emergency services in Cape Town can sometimes be slow to respond. For urgent medical emergencies, private
              ambulance services (ER24, Netcare 911) are faster but cost money. Your travel insurance should cover this.
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 8: Day Trips */}
      <div className="p-8 print:break-after-page">
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-8 h-8 text-sage-600" />
          <h2 className="text-3xl font-bold text-gray-900">Day Trips from Bellville South</h2>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">
            Cape Town is one of the world's most beautiful cities with incredible attractions within easy reach of
            Bellville South. Here are the must-see destinations:
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🏔️ Table Mountain</h3>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Distance:</strong> 25 km (30 min drive) | <strong>Cost:</strong> R140 Uber one way
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Cable Car:</strong> R395 adult return | <strong>Hours:</strong> 8am-6pm (weather dependent)
            </p>
            <p className="text-gray-700 mb-3">
              Icon of Cape Town with breathtaking 360° views. The cable car rotates as it climbs!
            </p>
            <div className="bg-white p-3 rounded border border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">💡 Money-Saving Tip:</p>
              <p className="text-sm text-gray-700">
                Book cable car tickets online in advance for 15% discount. Go early (8-9am) or late afternoon (4-5pm) to
                avoid crowds. Check weather forecast - the cable car closes in high winds.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🛍️ V&A Waterfront</h3>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Distance:</strong> 22 km (30 min drive) | <strong>Cost:</strong> R150 Uber one way
            </p>
            <p className="text-gray-700 mb-3">
              Working harbor with 450+ shops, restaurants, and entertainment. See seals at the harbor!
            </p>
            <div className="bg-white p-3 rounded border border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Top Activities:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Two Oceans Aquarium (R235 adult)</li>
                <li>• Zeitz MOCAA Art Museum (Free entry!)</li>
                <li>• Harbour sunset cruise (R250-400)</li>
                <li>• Shopping at Watershed craft market</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🏖️ Bloubergstrand Beach</h3>
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Distance:</strong> 15 km (20 min drive) | <strong>Cost:</strong> R100 Uber one way
            </p>
            <p className="text-gray-700 mb-3">
              Famous beach with the iconic Table Mountain view. Perfect for photos and sunset watching!
            </p>
            <div className="bg-white p-3 rounded border border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">What to Do:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Beach walks and swimming (water is cold!)</li>
                <li>• Kitesurfing lessons (R600 for 2 hours)</li>
                <li>• Beachfront restaurants for lunch</li>
                <li>• Best sunset view in Cape Town</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🌺 Kirstenbosch Botanical Gardens</h3>
          <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-4 rounded-lg mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Distance:</strong> 20 km (25 min drive) | <strong>Cost:</strong> R120 Uber one way
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Entry:</strong> R85 adult | <strong>Hours:</strong> 8am-7pm (summer), 8am-6pm (winter)
            </p>
            <p className="text-gray-700 mb-3">
              World-famous gardens at the foot of Table Mountain. Stunning indigenous plants and tree canopy walkway.
            </p>
            <div className="bg-white p-3 rounded border border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">💡 Insider Tip:</p>
              <p className="text-sm text-gray-700">
                Bring a picnic and enjoy the sunset summer concerts (Nov-Apr, Sundays). Book tickets early - they sell
                out!
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🍷 Stellenbosch Winelands</h3>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Distance:</strong> 35 km (30 min drive) | <strong>Cost:</strong> R200 Uber or join wine tour
            </p>
            <p className="text-gray-700 mb-3">
              Historic university town surrounded by world-class wine estates. Perfect for a day of wine tasting!
            </p>
            <div className="bg-white p-3 rounded border border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Recommended Wine Estates:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Spier Wine Farm (tasting R50, family-friendly)</li>
                <li>• Tokara (stunning views, tasting R120)</li>
                <li>• Delaire Graff (luxury experience, R150)</li>
              </ul>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Pro Tip:</strong> Book a wine tour from Cape Town (R600-900) - includes transport and 4-5
                tastings. Safer than driving yourself!
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🐧 Boulders Beach (Penguins)</h3>
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-4 rounded-lg mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Distance:</strong> 45 km (45 min drive) | <strong>Best as:</strong> Day tour with Cape Point
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Entry:</strong> R190 adult | <strong>Best time:</strong> Morning (9-11am)
            </p>
            <p className="text-gray-700 mb-3">
              See African penguins in their natural habitat. Adorable and great for photos!
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🌊 Cape Point & Cape of Good Hope</h3>
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Distance:</strong> 65 km (1 hour drive) | <strong>Best option:</strong> Full day tour (R800-1200)
            </p>
            <p className="text-gray-700 mb-3">
              Dramatic cliffs, lighthouse, and the meeting point of two oceans. Combine with Boulders Beach penguin
              visit.
            </p>
            <div className="bg-white p-3 rounded border border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">What's Included in Most Tours:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Hotel pickup and drop-off</li>
                <li>• Boulders Beach penguins</li>
                <li>• Cape Point and lighthouse</li>
                <li>• Chapman's Peak Drive (scenic coastal road)</li>
                <li>• Hout Bay harbor stop</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-sage-50 border border-sage-200 rounded-lg">
            <p className="text-sm font-semibold text-gray-900 mb-2">🗓️ Planning Your Days Out</p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Budget travelers:</strong> Focus on free/cheap options like Blouberg Beach, Company's Garden (free
              park in CBD), and hiking Lion's Head.
            </p>
            <p className="text-sm text-gray-700">
              <strong>First-time visitors must-do:</strong> Table Mountain, V&A Waterfront, and a winelands tour. These
              three give you the essential Cape Town experience!
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 9: Local Insider Tips */}
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <Info className="w-8 h-8 text-sage-600" />
          <h2 className="text-3xl font-bold text-gray-900">Local Insider Tips</h2>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">
            After hosting hundreds of guests, here are our top insider tips to help you experience Bellville South like
            a local:
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Money Matters</h3>
          <div className="space-y-3 mb-6">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="font-semibold text-gray-900 mb-1">Cash vs Card</p>
              <p className="text-sm text-gray-700">
                Most places accept card, but carry R200-300 cash for minibus taxis, street vendors, and small shops.
                ATMs are everywhere but watch for skimming devices - use bank ATMs inside branches only.
              </p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="font-semibold text-gray-900 mb-1">Tipping Culture</p>
              <p className="text-sm text-gray-700">
                • Restaurants: 10-15% (not always included in bill)
                <br />• Uber/taxi: Round up or add R10-20
                <br />• Petrol attendants: R5-10 (they pump your gas)
                <br />• Car guards: R5-10 (guys watching parking lots)
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🍽️ Where Locals Really Eat</h3>
          <div className="space-y-2 mb-6">
            <p className="text-gray-700">
              <strong>Best Gatsby in town:</strong> Uncle's Takeaway (near UWC) - R45 for a quarter that feeds 2 people
            </p>
            <p className="text-gray-700">
              <strong>Cheapest groceries:</strong> Shoprite (not SPAR) - 30% cheaper for basics
            </p>
            <p className="text-gray-700">
              <strong>Sunday lunch deal:</strong> Spur's R99 special (burger + drink + dessert)
            </p>
            <p className="text-gray-700">
              <strong>Best coffee:</strong> Vida e Caffè at Tygervalley (better than Starbucks, half the price)
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">📱 Stay Connected</h3>
          <div className="bg-purple-50 p-4 rounded-lg mb-6">
            <p className="font-semibold text-gray-900 mb-2">Get a Local SIM Card</p>
            <p className="text-sm text-gray-700 mb-2">International roaming is expensive! Buy a local prepaid SIM:</p>
            <ul className="text-sm text-gray-700 space-y-1 ml-4">
              <li>
                • <strong>Vodacom (best coverage):</strong> R30 SIM + R100 airtime = 1GB data + calls
              </li>
              <li>
                • <strong>MTN (good value):</strong> R5 SIM + R50 airtime = 500MB data
              </li>
              <li>• Available at Pick n Pay, SPAR, or network stores</li>
              <li>• Bring your passport (RICA registration required by law)</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🌤️ Weather & What to Pack</h3>
          <div className="space-y-2 mb-6">
            <p className="text-gray-700">
              <strong>Summer (Nov-Mar):</strong> Hot & dry. 25-35°C. Pack sunscreen, hat, light clothes. UV is intense!
            </p>
            <p className="text-gray-700">
              <strong>Winter (Jun-Aug):</strong> Wet & cool. 8-18°C. Pack warm layers, rain jacket, closed shoes.
            </p>
            <p className="text-gray-700">
              <strong>Cape Doctor wind:</strong> Strong SE wind in summer. Great for kitesurfing, annoying for beach
              days!
            </p>
            <p className="text-gray-700">
              <strong>Load Shedding:</strong> Scheduled power cuts (2-4 hours). Download "EskomSePush" app to see
              schedule.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🎒 Student Tips</h3>
          <div className="bg-yellow-50 p-4 rounded-lg mb-6">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <strong>UWC Library:</strong> Free Wi-Fi and study spaces. Guest access available with student ID.
              </li>
              <li>
                <strong>Cheap meals:</strong> UWC campus cafeteria - R25-35 for full meal
              </li>
              <li>
                <strong>Printing:</strong> R1-2 per page at internet cafés near UWC
              </li>
              <li>
                <strong>Student discounts:</strong> Ask everywhere - cinema, restaurants, attractions. Bring your
                student card!
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🚗 If You Rent a Car</h3>
          <div className="space-y-2 mb-6">
            <p className="text-gray-700">
              • <strong>Never leave valuables visible</strong> - not even a phone charger. Smash-and-grabs are common.
            </p>
            <p className="text-gray-700">
              • <strong>Lock doors while driving</strong> - especially at traffic lights
            </p>
            <p className="text-gray-700">
              • <strong>Use parking guards</strong> - the guys in orange/yellow vests watch your car (tip R5-10)
            </p>
            <p className="text-gray-700">
              • <strong>Avoid parking on street at night</strong> - use secure parking garages
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">🗣️ Useful Local Phrases</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="border border-gray-200 p-3 rounded">
              <p className="font-semibold text-gray-900">Howzit?</p>
              <p className="text-sm text-gray-600">Informal "how are you?"</p>
            </div>
            <div className="border border-gray-200 p-3 rounded">
              <p className="font-semibold text-gray-900">Sharp sharp</p>
              <p className="text-sm text-gray-600">"Okay" / "cool"</p>
            </div>
            <div className="border border-gray-200 p-3 rounded">
              <p className="font-semibold text-gray-900">Just now</p>
              <p className="text-sm text-gray-600">Later (maybe 30 min)</p>
            </div>
            <div className="border border-gray-200 p-3 rounded">
              <p className="font-semibold text-gray-900">Now now</p>
              <p className="text-sm text-gray-600">Very soon (5-10 min)</p>
            </div>
            <div className="border border-gray-200 p-3 rounded">
              <p className="font-semibold text-gray-900">Lekker</p>
              <p className="text-sm text-gray-600">"Nice" / "great"</p>
            </div>
            <div className="border border-gray-200 p-3 rounded">
              <p className="font-semibold text-gray-900">Braai</p>
              <p className="text-sm text-gray-600">BBQ (huge part of culture!)</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-sage-50 to-green-50 border-2 border-sage-300 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">🏠 Your Home Away From Home</h3>
            <p className="text-gray-700 text-center mb-4">
              We hope this guide helps you make the most of your stay in Bellville South! Remember, we're here 24/7 if
              you need anything - directions, recommendations, or just a friendly chat.
            </p>
            <div className="text-center">
              <p className="font-bold text-gray-900 text-lg">60 on Kosmos Guesthouse</p>
              <p className="text-gray-700">60 Kosmos Road, Bellville South</p>
              <p className="text-sage-700 font-semibold mt-2">📞 +27 21 XXX XXXX | 💬 WhatsApp Available</p>
              <p className="text-gray-700 mt-2">www.60onkosmos.co.za</p>
            </div>
          </div>

          <div className="mt-6 text-center text-gray-600 text-sm">
            <p>Last updated: January 2025</p>
            <p className="mt-2">© 2025 60 on Kosmos. All information subject to change.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

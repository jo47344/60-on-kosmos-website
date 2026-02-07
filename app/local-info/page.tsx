import type { Metadata } from "next"
import { MapPin, Car, ShoppingBag, GraduationCap, Building, Wine } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Local Area & Attractions - 60 on Kosmos Bellville South | Near UWC & Tygerberg Hospital",
  description:
    "Perfect location near UWC (5km), Tygerberg Hospital (8km), SPAR Kasselsvlei Centre (2km). Easy transport to Cape Town CBD. Guesthouse Bellville South with local knowledge. Call 074 524 5703",
  keywords:
    "Bellville South location, near UWC accommodation, Tygerberg Hospital guesthouse, SPAR Kasselsvlei Centre, transport Cape Town CBD, local attractions Bellville South",
  alternates: { canonical: "https://60onkosmos.co.za/local-info" },
  openGraph: {
    title: "Local Area & Attractions - 60 on Kosmos Bellville South",
    description: "Perfectly located near UWC, Tygerberg Hospital and major Cape Town attractions",
  },
}

export default function LocalInfoPage() {
  const attractions = [
    {
      icon: ShoppingBag,
      name: "SPAR Kasselsvlei Centre",
      distance: "2km",
      description: "Full-service supermarket and shopping centre with restaurants, pharmacy, and banking services.",
      type: "Shopping",
    },
    {
      icon: Building,
      name: "Castle of Good Hope",
      distance: "15km",
      description: "Historic fort and museum, one of Cape Town's most significant cultural landmarks.",
      type: "Attraction",
    },
    {
      icon: Wine,
      name: "Jordan Wine Estate",
      distance: "25km",
      description: "Award-winning wine estate in Stellenbosch with tastings and beautiful vineyard views.",
      type: "Wine & Dining",
    },
    {
      icon: GraduationCap,
      name: "University of the Western Cape (UWC)",
      distance: "5km",
      description: "Major university campus. Perfect location for visiting students and families.",
      type: "Education",
    },
    {
      icon: Building,
      name: "Tygerberg Hospital",
      distance: "8km",
      description: "Major medical facility and teaching hospital. Convenient for medical professionals.",
      type: "Healthcare",
    },
    {
      icon: Car,
      name: "Voortrekker Road",
      distance: "3km",
      description: "Main transport route with easy access to Cape Town CBD and surrounding areas.",
      type: "Transport",
    },
  ]

  const transportOptions = [
    {
      type: "Taxi Rank",
      location: "Kasselsvlei Centre",
      distance: "2km walk",
      description: "Regular minibus taxis to Cape Town CBD, Bellville, and surrounding areas",
    },
    {
      type: "Bus Route",
      location: "Voortrekker Road",
      distance: "3km",
      description: "MyCiTi and Golden Arrow bus services to various Cape Town destinations",
    },
    {
      type: "Train Station",
      location: "Bellville Station",
      distance: "6km",
      description: "Metrorail services to Cape Town, Stellenbosch, and other destinations",
    },
  ]

  const essentialServices = [
    "SPAR Supermarket - 2km",
    "Pharmacy - Kasselsvlei Centre",
    "Banking (ATMs) - Multiple locations",
    "Petrol Stations - Voortrekker Road",
    "Restaurants - Kasselsvlei Centre",
    "Medical Centre - 3km",
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Banner */}
        <div className="bg-green-600 text-white rounded-lg p-4 mb-8 text-center">
          <p className="text-lg font-semibold">
            📞 Local Info & Directions:{" "}
            <a href="tel:0745245703" className="underline hover:no-underline">
              074 524 5703
            </a>
          </p>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Local Area & Attractions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            60 on Kosmos is perfectly located in Bellville South with easy access to universities, hospitals, shopping,
            and Cape Town's major attractions.
          </p>
        </div>

        {/* Key Attractions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nearby Attractions & Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <attraction.icon className="w-8 h-8 text-green-600 mr-3 mt-1" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{attraction.name}</h3>
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                          {attraction.distance}
                        </span>
                      </div>
                      <p className="text-sm text-green-600 mb-2">{attraction.type}</p>
                      <p className="text-gray-600 text-sm">{attraction.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Transport Options */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Getting Around</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transportOptions.map((transport, index) => (
              <div key={index} className="text-center">
                <Car className="w-10 h-10 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{transport.type}</h3>
                <p className="text-sm text-green-600 mb-2">{transport.location}</p>
                <p className="text-sm font-medium text-gray-700 mb-2">{transport.distance}</p>
                <p className="text-sm text-gray-600">{transport.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Essential Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Services Nearby</h2>
            <div className="space-y-3">
              {essentialServices.map((service, index) => (
                <div key={index} className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Perfect For</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <GraduationCap className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Students & Families</h3>
                  <p className="text-gray-600">Just 5km from UWC campus - ideal for visiting students or families</p>
                </div>
              </div>
              <div className="flex items-start">
                <Building className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Contractors & Workers</h3>
                  <p className="text-gray-600">Close to industrial areas and major transport routes</p>
                </div>
              </div>
              <div className="flex items-start">
                <Car className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Medical Professionals</h3>
                  <p className="text-gray-600">Convenient to Tygerberg Hospital and medical facilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local Tips */}
        <div className="bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Local Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Getting to Cape Town CBD</h3>
              <p className="text-gray-600 mb-4">
                Multiple transport options available. Taxi from Kasselsvlei Centre (2km walk) or bus from Voortrekker
                Road (3km). Journey time approximately 30-45 minutes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Shopping & Dining</h3>
              <p className="text-gray-600 mb-4">
                SPAR Kasselsvlei Centre has everything you need - groceries, restaurants, pharmacy, and banking. Perfect
                for longer stays or picking up essentials.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Safety</h3>
              <p className="text-gray-600 mb-4">
                Bellville South is a well-established residential area. We recommend using registered transport services
                and staying aware of your surroundings.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Local Knowledge</h3>
              <p className="text-gray-600 mb-4">
                Our caretaker knows the area well and can provide directions, transport advice, and recommendations for
                local services. Call us at 074 524 5703.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

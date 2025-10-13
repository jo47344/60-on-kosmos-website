import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ShoppingCart, Utensils, Coffee, Building, Trees, GraduationCap, Navigation } from "lucide-react"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Things to Do Near Bellville South | 60 on Kosmos Local Guide",
  description:
    "Discover the best restaurants, shopping, attractions and activities near 60 on Kosmos Bellville South. Complete guide to exploring the area around UWC and Tygerberg Hospital.",
  keywords:
    "things to do Bellville South, restaurants near Bellville South, shopping Bellville Cape Town, attractions near UWC, Bellville South guide, what to do Bellville",
}

export default function ThingsToDoPage() {
  const attractions = [
    {
      title: "University of the Western Cape (UWC)",
      category: "Education & Culture",
      distance: "5km (8 min drive)",
      icon: GraduationCap,
      color: "bg-blue-100 text-blue-600",
      description:
        "Historic university campus with beautiful architecture. Visitors can explore the campus, visit the Robben Island Mayibuye Archive, and enjoy the botanical gardens.",
      image: "/images/exterior-building.png",
      activities: ["Campus tours", "Museum visits", "Botanical gardens", "Student events"],
    },
    {
      title: "SPAR Kasselsvlei Centre",
      category: "Shopping & Services",
      distance: "2km (5 min drive)",
      icon: ShoppingCart,
      color: "bg-green-100 text-green-600",
      description:
        "Modern shopping center with SPAR supermarket, restaurants, pharmacy, banks, and various retail stores. Everything you need for daily essentials.",
      image: "/images/exterior-courtyard.png",
      activities: ["Grocery shopping", "Banking", "Pharmacy", "Restaurants & takeaways"],
    },
    {
      title: "Cape Town CBD & V&A Waterfront",
      category: "Tourism & Entertainment",
      distance: "20km (25 min drive)",
      icon: Building,
      color: "bg-purple-100 text-purple-600",
      description:
        "Explore Cape Town's bustling city center and the iconic V&A Waterfront. World-class shopping, dining, entertainment, and the famous Two Oceans Aquarium.",
      image: "/images/outdoor-seating.png",
      activities: ["Shopping", "Waterfront dining", "Aquarium", "Boat tours"],
    },
    {
      title: "Table Mountain & Cable Car",
      category: "Nature & Adventure",
      distance: "25km (30 min drive)",
      icon: Trees,
      color: "bg-orange-100 text-orange-600",
      description:
        "One of the New 7 Wonders of Nature. Take the rotating cable car to the summit for breathtaking 360° views of Cape Town, or hike one of many trails.",
      image: "/images/outdoor-area.png",
      activities: ["Cable car rides", "Hiking trails", "Photography", "Nature walks"],
    },
  ]

  const restaurants = [
    {
      name: "Ocean Basket Bellville",
      cuisine: "Seafood",
      distance: "4km",
      priceRange: "R150-R250 per person",
      description: "Fresh seafood and Mediterranean dishes. Family-friendly atmosphere with excellent sushi.",
    },
    {
      name: "Nando's Bellville",
      cuisine: "Peri-Peri Chicken",
      distance: "3.5km",
      priceRange: "R80-R150 per person",
      description: "Famous South African flame-grilled chicken chain. Perfect for quick, tasty meals.",
    },
    {
      name: "Spur Steak Ranches",
      cuisine: "Steakhouse",
      distance: "4km",
      priceRange: "R120-R200 per person",
      description: "Family steakhouse with great burgers, ribs, and salads. Kids eat free on Sundays.",
    },
    {
      name: "KFC Kasselsvlei",
      cuisine: "Fast Food",
      distance: "2km",
      priceRange: "R50-R100 per person",
      description: "Quick service and familiar favorites. Open late for convenient dining.",
    },
    {
      name: "Debonairs Pizza Bellville",
      cuisine: "Pizza",
      distance: "3km",
      priceRange: "R80-R150 per person",
      description: "South African pizza chain with unique flavors. Delivery available to our guesthouse.",
    },
    {
      name: "Chicken Licken",
      cuisine: "Fast Food",
      distance: "2.5km",
      priceRange: "R60-R120 per person",
      description: "Popular local fast food chain. Try their famous Soul Sister sauce!",
    },
  ]

  const cafes = [
    {
      name: "Vida e Caffè Bellville",
      type: "Coffee Shop",
      distance: "4km",
      specialty: "Artisan coffee and pastries",
    },
    {
      name: "Mugg & Bean",
      type: "Family Restaurant & Coffee Shop",
      distance: "4.5km",
      specialty: "Generous portions, breakfast all day",
    },
    {
      name: "Seattle Coffee Company",
      type: "Coffee Shop",
      distance: "5km",
      specialty: "Premium coffee and light meals",
    },
  ]

  const services = [
    {
      name: "Tygerberg Hospital",
      type: "Medical Services",
      distance: "8km",
      description: "Major public hospital with emergency services and specialist clinics",
    },
    {
      name: "Clicks Pharmacy Kasselsvlei",
      type: "Pharmacy",
      distance: "2km",
      description: "Full pharmacy services, health products, and beauty supplies",
    },
    {
      name: "Bellville Train Station",
      type: "Transport Hub",
      distance: "6km",
      description: "Metrorail services to Cape Town CBD and surrounding areas",
    },
    {
      name: "Cape Gate Shopping Centre",
      type: "Major Mall",
      distance: "8km",
      description: "Large shopping mall with 140+ stores, cinema, and restaurants",
    },
  ]

  const breadcrumbItems = [
    { name: "Home", url: "" },
    { name: "Things to Do", url: "/things-to-do-bellville-south" },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-sage-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <MapPin className="w-16 h-16 text-sage-600 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Things to Do Near Bellville South</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your complete guide to exploring the area around 60 on Kosmos. Discover restaurants, shopping,
                attractions, and services within easy reach of our guesthouse.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild className="bg-white">
                <a href="#attractions">Attractions</a>
              </Button>
              <Button variant="outline" asChild className="bg-white">
                <a href="#restaurants">Restaurants</a>
              </Button>
              <Button variant="outline" asChild className="bg-white">
                <a href="#cafes">Coffee Shops</a>
              </Button>
              <Button variant="outline" asChild className="bg-white">
                <a href="#services">Services</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Attractions */}
        <section id="attractions" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Top Attractions Near Bellville South</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {attractions.map((attraction, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
                      {attraction.distance}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${attraction.color}`}
                      >
                        <attraction.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{attraction.title}</h3>
                        <p className="text-sm text-gray-600">{attraction.category}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{attraction.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-900">Things to do:</p>
                      <div className="flex flex-wrap gap-2">
                        {attraction.activities.map((activity, aIndex) => (
                          <span key={aIndex} className="text-xs bg-sage-100 text-sage-700 px-3 py-1 rounded-full">
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Restaurants */}
        <section id="restaurants" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Utensils className="w-12 h-12 text-sage-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Restaurants Near 60 on Kosmos</h2>
              <p className="text-lg text-gray-600">
                Delicious dining options within 5km of our Bellville South guesthouse
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((restaurant, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{restaurant.name}</h3>
                        <p className="text-sm text-sage-600">{restaurant.cuisine}</p>
                      </div>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        {restaurant.distance}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">{restaurant.description}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-semibold">💰 {restaurant.priceRange}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coffee Shops */}
        <section id="cafes" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Coffee className="w-12 h-12 text-sage-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Coffee Shops & Cafés</h2>
              <p className="text-lg text-gray-600">Perfect spots for work or relaxation near Bellville South</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cafes.map((cafe, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <Coffee className="w-10 h-10 text-sage-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{cafe.name}</h3>
                    <p className="text-sm text-sage-600 mb-2">{cafe.type}</p>
                    <p className="text-sm text-gray-700 mb-3">{cafe.specialty}</p>
                    <span className="text-xs bg-sage-100 text-sage-700 px-3 py-1 rounded-full">
                      {cafe.distance} away
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Essential Services */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Building className="w-12 h-12 text-sage-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Services & Amenities</h2>
              <p className="text-lg text-gray-600">Everything you need within easy reach of Bellville South</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-sage-600 mr-4 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-gray-900">{service.name}</h3>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded whitespace-nowrap ml-2">
                            {service.distance}
                          </span>
                        </div>
                        <p className="text-sm text-sage-600 mb-2">{service.type}</p>
                        <p className="text-sm text-gray-700">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Around */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Navigation className="w-12 h-12 text-sage-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Getting Around Bellville South</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">By Car</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Free secure parking at 60 on Kosmos</li>
                    <li>✓ Easy access to N1 highway (3km)</li>
                    <li>✓ 20 minutes to Cape Town CBD</li>
                    <li>✓ Uber/Bolt readily available</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Public Transport</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Taxi rank at Kasselsvlei Centre (2km)</li>
                    <li>✓ Bellville train station (6km)</li>
                    <li>✓ MyCiTi bus routes nearby</li>
                    <li>✓ Regular minibus taxis to CBD</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-sage-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore Bellville South?</h2>
            <p className="text-lg mb-8 opacity-90">
              Book your stay at 60 on Kosmos and discover everything this vibrant area has to offer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
              >
                <a href="/book-now">Book Your Stay</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-sage-700 px-8 py-6 text-lg font-semibold bg-transparent"
              >
                <a href="tel:+27745245703">Call 074 524 5703</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

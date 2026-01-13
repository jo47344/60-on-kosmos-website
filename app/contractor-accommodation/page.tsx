import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Briefcase, Wifi, Car, Utensils, Shield, CheckCircle2, Users, Clock, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contractor Accommodation Bellville | From R550/Night | 60 on Kosmos",
  description:
    "Purpose-built contractor accommodation in Bellville South. Standard R550, Double R620, Triple R750/night. Weekly cleaning, secure parking, WiFi. Near N1, industrial area. Book direct.",
  alternates: {
    canonical: "https://60onkosmos.co.za/contractor-accommodation",
  },
  openGraph: {
    title: "Contractor Accommodation Bellville | From R550/Night",
    description:
      "Purpose-built for construction crews, project managers & technical teams. Weekly cleaning, secure parking, WiFi included.",
    url: "https://60onkosmos.co.za/contractor-accommodation",
    type: "website",
  },
}

export default function ContractorAccommodationPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "60 on Kosmos - Contractor Accommodation",
    description: "Purpose-built contractor accommodation in Bellville South for construction workers and project teams",
    address: {
      "@type": "PostalAddress",
      streetAddress: "60 Kosmosdalweg",
      addressLocality: "Bellville South",
      addressRegion: "Western Cape",
      postalCode: "7530",
      addressCountry: "ZA",
    },
    telephone: "+27745245703",
    url: "https://60onkosmos.co.za/contractor-accommodation",
    priceRange: "R550 - R750",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi" },
      { "@type": "LocationFeatureSpecification", name: "Free Parking" },
      { "@type": "LocationFeatureSpecification", name: "Self-Catering Kitchen" },
      { "@type": "LocationFeatureSpecification", name: "Weekly Cleaning" },
      { "@type": "LocationFeatureSpecification", name: "24/7 Security" },
    ],
  }

  const roomTypes = [
    {
      name: "Standard Room",
      tagline: "The High-Value Essential",
      price: "R550",
      perPerson: null,
      capacity: "1-2 People",
      layout: "2 Single Beds",
      bestFor: "Junior Staff / Colleagues",
      image: "/images/twin-room-yellow.png",
      features: [
        "2 comfortable single beds",
        "Ensuite bathroom",
        "Free WiFi",
        "Access to communal kitchenette",
        "Large shared refrigerator",
        "Weekly cleaning included",
        "Secure parking",
      ],
      pitch: "Our most cost-effective option for staff. Clean, secure, and functional.",
      highlight: false,
    },
    {
      name: "Double Room",
      tagline: "The Manager's Choice",
      price: "R620",
      perPerson: null,
      capacity: "1-2 People",
      layout: "1 Double Bed",
      bestFor: "Managers / Supervisors",
      image: "/images/sage-double-room.png",
      features: [
        "Spacious double bed",
        "Ensuite bathroom",
        "Private bar fridge",
        "Microwave in room",
        "Workspace desk",
        "Free WiFi",
        "Weekly cleaning included",
        "Secure parking",
      ],
      pitch: "Designed for project leads and supervisors who need extra space and privacy.",
      highlight: true,
    },
    {
      name: "Triple Suite",
      tagline: "The Team Hub",
      price: "R750",
      perPerson: "R250",
      capacity: "3 People",
      layout: "3 Single Beds",
      bestFor: "Technical Teams / Crews",
      image: "/images/triple-room-full.jpg",
      features: [
        "3 comfortable single beds",
        "Ensuite bathroom",
        "Private bar fridge",
        "Kettle & cups",
        "Free WiFi",
        "Weekly cleaning included",
        "Secure parking",
        "Best value per person",
      ],
      pitch: "Maximum savings for 3-man crews without compromising on individual comfort.",
      highlight: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/exterior-building.png"
            alt="60 on Kosmos Contractor Accommodation Bellville"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              <span>Contractor Accommodation Specialist</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Contractor Accommodation in Bellville</h1>
            <p className="text-xl text-gray-300 mb-8">
              Purpose-built for construction crews, project managers & technical teams.
              <br className="hidden md:block" />
              Weekly cleaning, secure parking, WiFi included. From R550/night.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg">
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20contractor%20accommodation%20rates">
                  Get a Quote on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg"
              >
                <a href="tel:+27745245703">
                  <Phone className="mr-2 h-5 w-5" />
                  074 524 5703
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-sage-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Weekly Cleaning</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Secure Parking</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>WiFi Included</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Self-Catering</span>
            </div>
          </div>
        </div>
      </section>

      {/* Room Pricing Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Room Type</h2>
            <p className="text-lg text-gray-600">Three options to fit your team structure and budget</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <Card
                key={index}
                className={`overflow-hidden ${room.highlight ? "ring-2 ring-sage-600 shadow-xl scale-105" : "hover:shadow-lg"} transition-all`}
              >
                {room.highlight && (
                  <div className="bg-sage-600 text-white text-center py-2 text-sm font-semibold">MOST POPULAR</div>
                )}
                <div className="relative h-48">
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={`${room.name} - Contractor accommodation Bellville`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <p className="text-sm text-sage-600 font-medium mb-1">{room.tagline}</p>
                    <h3 className="text-2xl font-bold text-gray-900">{room.name}</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-sage-600">{room.price}</span>
                      <span className="text-gray-600">/night</span>
                    </div>
                    {room.perPerson && (
                      <p className="text-sm text-sage-700 font-semibold mt-1">Only {room.perPerson} per person!</p>
                    )}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3 mb-4 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-gray-500">Capacity:</span> {room.capacity}
                      </div>
                      <div>
                        <span className="text-gray-500">Layout:</span> {room.layout}
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="text-gray-500">Best for:</span>{" "}
                      <span className="font-medium">{room.bestFor}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 italic">"{room.pitch}"</p>

                  <ul className="space-y-2 mb-6">
                    {room.features.slice(0, 5).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${room.highlight ? "bg-sage-600 hover:bg-sage-700" : "bg-gray-900 hover:bg-gray-800"}`}
                  >
                    <a
                      href={`https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(room.name)}%20for%20contractors`}
                    >
                      Book {room.name}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Who Stays With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-sage-600" />
              <h3 className="text-xl font-bold mb-2">Junior Staff & Colleagues</h3>
              <p className="text-gray-600 mb-4">
                Standard Room saves costs while the communal kitchen builds team spirit. Perfect for crews who work
                together.
              </p>
              <p className="text-sage-600 font-semibold">From R550/night</p>
            </Card>
            <Card className="text-center p-6 ring-2 ring-sage-600">
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-sage-600" />
              <h3 className="text-xl font-bold mb-2">Managers & Supervisors</h3>
              <p className="text-gray-600 mb-4">
                Double Room gives workspace and privacy for admin work. Your own fridge and microwave for late nights.
              </p>
              <p className="text-sage-600 font-semibold">From R620/night</p>
            </Card>
            <Card className="text-center p-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-sage-600" />
              <h3 className="text-xl font-bold mb-2">3-Man Technical Crews</h3>
              <p className="text-gray-600 mb-4">
                Triple Suite maximizes savings without sacrificing comfort. Best cost-per-head at only R250 per person.
              </p>
              <p className="text-sage-600 font-semibold">R750/night (R250 each)</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Contractors Choose 60 on Kosmos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Car className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Secure Parking</h3>
                <p className="text-gray-600">Safe parking for work vehicles and tools behind locked gates with CCTV</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Utensils className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Self-Catering</h3>
                <p className="text-gray-600">Full kitchen facilities to save money by cooking your own meals</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Wifi className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Free WiFi</h3>
                <p className="text-gray-600">Stay connected with family and work throughout your stay</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">24/7 Security</h3>
                <p className="text-gray-600">CCTV monitoring for safe and secure accommodation</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Weekly Cleaning</h3>
                <p className="text-gray-600">Professional cleaning service and fresh linen included</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-8 h-8 text-sage-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Strategic Location</h3>
                <p className="text-gray-600">Near N1 highway, easy access to construction sites across Cape Town</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Strategic Location for Major Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <Card className="p-6">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-sage-600" />
              <h3 className="font-bold text-lg">N1 City</h3>
              <p className="text-gray-600">10km</p>
              <p className="text-sm text-gray-500">Construction projects</p>
            </Card>
            <Card className="p-6">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-sage-600" />
              <h3 className="font-bold text-lg">Bellville CBD</h3>
              <p className="text-gray-600">3km</p>
              <p className="text-sm text-gray-500">Shops & services</p>
            </Card>
            <Card className="p-6">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-sage-600" />
              <h3 className="font-bold text-lg">Tygerberg Hospital</h3>
              <p className="text-gray-600">8km</p>
              <p className="text-sm text-gray-500">Medical contractors</p>
            </Card>
            <Card className="p-6">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-sage-600" />
              <h3 className="font-bold text-lg">Cape Town Airport</h3>
              <p className="text-gray-600">15 minutes</p>
              <p className="text-sm text-gray-500">Easy access</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contractor FAQ</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Is there parking for work vehicles?</h3>
              <p className="text-gray-600">
                Yes, we have secure parking behind locked gates with 24/7 CCTV. Bakkies and work vehicles are welcome.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">What if our project runs longer than expected?</h3>
              <p className="text-gray-600">
                No problem. We offer flexible terms with no long-term lease required. Extend your stay as needed.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Can we cook our own meals?</h3>
              <p className="text-gray-600">
                Absolutely. All rooms have access to self-catering facilities. Double and Triple rooms have private
                fridges. Standard rooms have full access to the communal kitchenette with large shared refrigerator.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Do you offer group discounts for 5+ workers?</h3>
              <p className="text-gray-600">
                Contact us directly for group rates. We can accommodate teams and offer competitive rates for larger
                bookings.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">How often is cleaning done?</h3>
              <p className="text-gray-600">
                Weekly cleaning service is included in all room rates, with fresh linen provided.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Accommodate Your Team?</h2>
          <p className="text-xl mb-8 text-sage-50">Get a quote today. Standard R550, Double R620, Triple R750/night.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-6 text-lg">
              <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20contractor%20accommodation">
                WhatsApp for Quote
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-sage-700 px-8 py-6 text-lg bg-transparent"
            >
              <a href="tel:+27745245703">Call 074 524 5703</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">More Accommodation Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                <Link href="/monthly-accommodation" className="text-sage-600 hover:text-sage-700">
                  Monthly Accommodation
                </Link>
              </h3>
              <p className="text-gray-600">Extended stays with special rates</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                <Link href="/weekly-accommodation" className="text-sage-600 hover:text-sage-700">
                  Weekly Accommodation
                </Link>
              </h3>
              <p className="text-gray-600">Short-term project stays</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                <Link href="/n1-city-accommodation" className="text-sage-600 hover:text-sage-700">
                  N1 City Accommodation
                </Link>
              </h3>
              <p className="text-gray-600">10km from N1 construction projects</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

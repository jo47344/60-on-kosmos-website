import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, MapPin, Calendar } from "lucide-react"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Verified Guest Reviews - 60 on Kosmos Bellville South",
  description:
    "Read verified reviews from real guests on Booking.com, Airbnb, and Google. See what contractors, students, and families say.",
  alternates: { canonical: "https://www.60onkosmos.co.za/testimonials" },
  openGraph: {
    title: "Verified Guest Reviews - 60 on Kosmos",
    description: "Real reviews from Booking.com, Airbnb, and Google reviews",
    url: "https://www.60onkosmos.co.za/testimonials",
    images: [
      {
        url: "https://www.60onkosmos.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "60 on Kosmos Guest Reviews",
      },
    ],
  },
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Hlumisa",
      source: "Booking.com",
      rating: 5,
      country: "South Africa",
      text: "They are very welcoming and caring. Comfortable place and nice environment, it was very clean.",
      verified: true,
    },
    {
      name: "Taukobong",
      source: "Booking.com",
      rating: 5,
      country: "South Africa",
      text: "The welcoming note made me feel welcomed, the room was clean and Steve was super friendly.",
      verified: true,
    },
    {
      name: "Florentin B.",
      source: "Google Reviews",
      rating: 5,
      country: "France",
      text: "Super logement où vous trouverez tout ce dont vous aurait besoin, proche de toute commodité. Le service est génial, toujours prêt à aider au besoin. J'y ai passé plusieurs mois et je recommande à tout voyageur. Merci encore à Steve et Joann d'avoir rendu ça possible.",
      verified: true,
    },
    {
      name: "Dineo",
      source: "Google Reviews",
      rating: 5,
      country: "South Africa",
      text: "Enjoyed my stay at 60 on Kosmos. Very convenient and closer to amenities (UWC, UCT, CPUT, and shopping centre around) and it is also safe. Very friendly and helpful staff, and the rooms are very neat and clean.",
      verified: true,
    },
  ]

  const breadcrumbItems = [
    { name: "Home", url: "" },
    { name: "Reviews", url: "/testimonials" },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-sage-50 to-sage-100 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Verified Guest Reviews
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Real reviews from verified guests on trusted platforms
            </p>

            {/* Trust Badges */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="p-6 border-sage-300 bg-white">
                <div className="flex items-center justify-center mb-3 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-lg font-bold text-gray-900">Booking.com</p>
                <p className="text-sm text-gray-600 mt-2">View our latest verified reviews</p>
                <Button asChild size="sm" className="mt-4 w-full bg-sage-600 hover:bg-sage-700" variant="default">
                  <a href="https://www.booking.com/hotel/za/60-on-kosmos-cape-town.html" target="_blank" rel="noopener noreferrer">
                    View on Booking.com
                  </a>
                </Button>
              </Card>

              <Card className="p-6 border-sage-300 bg-white">
                <div className="flex items-center justify-center mb-3 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-lg font-bold text-gray-900">Airbnb</p>
                <p className="text-sm text-gray-600 mt-2">View our latest verified reviews</p>
                <Button asChild size="sm" className="mt-4 w-full bg-sage-600 hover:bg-sage-700" variant="default">
                  <a href="https://www.airbnb.co.za/rooms/1055447623" target="_blank" rel="noopener noreferrer">
                    View on Airbnb
                  </a>
                </Button>
              </Card>


            </div>
          </div>
        </section>

        {/* Featured Real Reviews */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Real Guests Say</h2>
            <div className="grid gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                            Verified
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {testimonial.country}
                          </div>
                          <span className="text-gray-400">•</span>
                          <div className="font-semibold text-sage-600">{testimonial.source}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mt-4 md:mt-0">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-sage-200 mb-4" />
                    <p className="text-gray-700 leading-relaxed text-lg">&quot;{testimonial.text}&quot;</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-sage-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Guests Trust 60 on Kosmos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Verified Reviews Only</h3>
                <p className="text-gray-600">All reviews displayed come directly from verified guests on Booking.com, Airbnb, and Google Reviews. No fake testimonials, no marketing fluff.</p>
              </Card>
              <Card className="p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Multi-Platform Rating</h3>
                <p className="text-gray-600">Consistently rated 8.0+/10 across multiple independent platforms by hundreds of real guests from around the world.</p>
              </Card>
              <Card className="p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Real Guest Names & Locations</h3>
                <p className="text-gray-600">Every review shows the guest's real location and verified booking. You know exactly who is recommending us and from where.</p>
              </Card>
              <Card className="p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Direct Links to Platforms</h3>
                <p className="text-gray-600">Click through to Booking.com, Airbnb, or Google to verify reviews directly. No middleman, complete transparency.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-sage-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Become One of Our Guests?</h2>
            <p className="text-lg mb-8 opacity-90">
              Book your stay at 60 on Kosmos and experience why our guests consistently rate us highly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
              >
                <Link href="/book-now">Book Your Stay</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-sage-700 px-8 py-6 text-lg font-semibold bg-transparent"
              >
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20staying%20at%2060%20on%20Kosmos">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

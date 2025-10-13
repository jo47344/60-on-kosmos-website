import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Clock, Users, Briefcase, Calendar, Gift, Phone } from "lucide-react"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Special Offers & Packages - 60 on Kosmos Bellville South",
  description:
    "Save on accommodation at 60 on Kosmos Bellville South. Special rates for contractors, students, monthly stays, and UWC parents. Book direct for best prices.",
  keywords:
    "special offers Bellville South, contractor rates Cape Town, monthly accommodation deals, student discounts UWC, guesthouse packages Bellville",
}

export default function SpecialOffersPage() {
  const offers = [
    {
      title: "Contractor Monthly Rate",
      description: "Extended stay discount for contractors working in Cape Town",
      discount: "20% OFF",
      icon: Briefcase,
      color: "bg-blue-100 text-blue-600",
      features: [
        "R16,960 per month (was R21,200)",
        "Daily room cleaning",
        "Free WiFi & secure parking",
        "Flexible check-out times",
        "Priority booking",
      ],
      terms: "Minimum 30-day stay. Valid contractor ID required.",
      cta: "Get Contractor Rate",
      image: "/images/twin-room-yellow.png",
    },
    {
      title: "UWC Parents Package",
      description: "Special rates for parents visiting students at UWC",
      discount: "15% OFF",
      icon: Users,
      color: "bg-green-100 text-green-600",
      features: [
        "3 nights from R1,581 (was R1,860)",
        "Welcome tea/coffee kit",
        "Free WiFi throughout stay",
        "Secure parking included",
        "UWC directions & tips",
      ],
      terms: "Valid during academic terms. UWC student ID required.",
      cta: "Book Parents Package",
      image: "/images/sage-double-room.png",
    },
    {
      title: "Early Bird Special",
      description: "Book 30+ days in advance and save",
      discount: "10% OFF",
      icon: Calendar,
      color: "bg-purple-100 text-purple-600",
      features: [
        "Standard Twin from R477/night",
        "Double Room from R558/night",
        "Free cancellation up to 7 days",
        "All standard amenities included",
        "Best rate guarantee",
      ],
      terms: "Book at least 30 days before arrival. Non-refundable after 7 days before check-in.",
      cta: "Book Early & Save",
      image: "/images/deluxe-twin-navy.jpg",
    },
    {
      title: "Medical Professional Rate",
      description: "Special pricing for Tygerberg Hospital staff",
      discount: "18% OFF",
      icon: Star,
      color: "bg-red-100 text-red-600",
      features: [
        "From R434/night for medical staff",
        "Monthly rates available",
        "8km to Tygerberg Hospital",
        "Quiet environment for rest",
        "Fast WiFi for telemedicine",
      ],
      terms: "Valid hospital ID or payslip required. Subject to availability.",
      cta: "Get Medical Rate",
      image: "/images/twin-room-yellow.png",
    },
    {
      title: "Student Long-Term Stay",
      description: "Affordable semester rates for UWC & CPUT students",
      discount: "25% OFF",
      icon: Users,
      color: "bg-orange-100 text-orange-600",
      features: [
        "From R397/night (semester rate)",
        "3-6 month contracts available",
        "Study-friendly environment",
        "High-speed WiFi for classes",
        "Close to UWC & CPUT",
      ],
      terms: "Valid student ID required. Minimum 3-month stay. Academic year only.",
      cta: "Apply for Student Rate",
      image: "/images/triple-room-full.jpg",
    },
    {
      title: "Last-Minute Deal",
      description: "Book within 48 hours and get instant discount",
      discount: "12% OFF",
      icon: Clock,
      color: "bg-yellow-100 text-yellow-600",
      features: [
        "Standard Twin from R466/night",
        "Double Room from R546/night",
        "Instant confirmation",
        "Same-day check-in available",
        "All amenities included",
      ],
      terms: "Subject to availability. Book within 48 hours of arrival.",
      cta: "Book Last Minute",
      image: "/images/sage-double-room.png",
    },
  ]

  const breadcrumbItems = [
    { name: "Home", url: "" },
    { name: "Special Offers", url: "/special-offers" },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-600 to-sage-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Gift className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Special Offers & Discounted Rates</h1>
            <p className="text-xl mb-6 opacity-90">Save up to 25% on accommodation at 60 on Kosmos Bellville South</p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Book direct for the best rates on ensuite accommodation near UWC and Tygerberg Hospital. Special packages
              for contractors, students, and families.
            </p>
          </div>
        </section>

        {/* Urgency Banner */}
        <section className="bg-yellow-50 border-y border-yellow-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-4 text-center flex-wrap">
              <Clock className="w-5 h-5 text-yellow-600" />
              <span className="font-semibold text-gray-900">Limited Time Offers!</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-700">Book today to lock in these special rates</span>
              <span className="text-gray-600">•</span>
              <span className="text-sage-600 font-semibold">Only 3 rooms left this weekend</span>
            </div>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offers.map((offer, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg z-10">
                    {offer.discount}
                  </div>

                  {/* Image */}
                  <div className="relative h-48">
                    <Image src={offer.image || "/placeholder.svg"} alt={offer.title} fill className="object-cover" />
                  </div>

                  <CardContent className="p-6">
                    {/* Icon & Title */}
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${offer.color}`}>
                        <offer.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{offer.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{offer.description}</p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {offer.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start text-sm text-gray-700">
                          <span className="text-green-500 mr-2 mt-0.5">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Terms */}
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <p className="text-xs text-gray-600">
                        <strong>Terms:</strong> {offer.terms}
                      </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-2">
                      <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">
                        <a href="/book-now">{offer.cta}</a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-sage-600 text-sage-600 hover:bg-sage-50 bg-transparent"
                      >
                        <a
                          href="https://wa.me/27745245703?text=Hi, I'm interested in the special offer"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          WhatsApp for Details
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Refer a Friend */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Users className="w-16 h-16 text-sage-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Refer a Friend & Both Save R100</h2>
            <p className="text-lg text-gray-600 mb-8">
              Know someone looking for accommodation in Bellville South? Refer them and you both get R100 off your next
              booking!
            </p>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How It Works:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-3 text-sage-600 font-bold text-xl">
                    1
                  </div>
                  <p className="text-gray-700">Refer a friend to 60 on Kosmos</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-3 text-sage-600 font-bold text-xl">
                    2
                  </div>
                  <p className="text-gray-700">They book and mention your name</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-3 text-sage-600 font-bold text-xl">
                    3
                  </div>
                  <p className="text-gray-700">You both get R100 credit</p>
                </div>
              </div>
              <Button asChild size="lg" className="mt-8 bg-sage-600 hover:bg-sage-700 text-white px-8">
                <a
                  href="https://wa.me/27745245703?text=I want to refer a friend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Referring
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Booking Guarantee */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Booking Guarantee</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Best Rate Guarantee</h3>
                <p className="text-sm text-gray-600">Find a lower rate? We'll match it + 10% off</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Cancellation</h3>
                <p className="text-sm text-gray-600">Free cancellation up to 7 days before arrival</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Instant Confirmation</h3>
                <p className="text-sm text-gray-600">Get booking confirmation within 5 minutes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">Contact us anytime via phone or WhatsApp</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-sage-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't Miss These Limited-Time Offers</h2>
            <p className="text-lg mb-8 opacity-90">
              Book now to secure your discounted rate at 60 on Kosmos Bellville South
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
              >
                <a href="/book-now">Book Now & Save</a>
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

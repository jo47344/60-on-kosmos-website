import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Clock, Users, Briefcase, Calendar, Gift, Phone, CheckCircle2, TrendingDown } from "lucide-react"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Special Offers & Packages - 60 on Kosmos Bellville South | Save Up To 20%",
  description:
    "Book direct and save at 60 on Kosmos Bellville South. Special rates for contractors, students, medical professionals. Monthly rates from R12,720. Free WiFi & parking.",
  keywords:
    "special offers Bellville South, contractor rates Cape Town, monthly accommodation deals, student discounts UWC, guesthouse packages Bellville, book direct save",
}

export default function SpecialOffersPage() {
  const offers = [
    {
      title: "Contractor Monthly Rate",
      description: "Extended stay discount for contractors working in Cape Town",
      discount: "20% OFF",
      icon: Briefcase,
      color: "bg-blue-100 text-blue-600",
      regularPrice: "R15,900",
      specialPrice: "R12,720",
      savingsAmount: "R3,180",
      perNight: "R424/night",
      features: [
        "R12,720 per month (save R3,180)",
        "R424 per night rate",
        "Daily room cleaning included",
        "Free high-speed WiFi",
        "Secure parking bay",
        "Flexible check-out times",
        "Priority room selection",
        "Monthly invoice provided",
      ],
      terms: "Minimum 30-day stay required. Valid contractor ID or company letter needed. Payment upfront or weekly.",
      cta: "Get Contractor Rate",
      image: "/images/twin-room-yellow.png",
    },
    {
      title: "Weekly Stay Discount",
      description: "Save 10% when you stay 7 nights or more",
      discount: "10% OFF",
      icon: Calendar,
      color: "bg-green-100 text-green-600",
      regularPrice: "R3,710",
      specialPrice: "R3,339",
      savingsAmount: "R371",
      perNight: "R477/night",
      features: [
        "7 nights from R3,339 (save R371)",
        "R477 per night rate",
        "Free WiFi throughout stay",
        "Daily cleaning service",
        "Secure parking included",
        "All standard amenities",
        "Flexible payment options",
      ],
      terms: "Valid for stays of 7 nights or longer. Subject to availability. Cannot be combined with other offers.",
      cta: "Book Weekly Stay",
      image: "/images/sage-double-room.png",
    },
    {
      title: "Medical Professional Rate",
      description: "Special pricing for Tygerberg Hospital staff and locum doctors",
      discount: "15% OFF",
      icon: Star,
      color: "bg-red-100 text-red-600",
      regularPrice: "R530",
      specialPrice: "R450.50",
      savingsAmount: "R79.50",
      perNight: "R450.50/night",
      features: [
        "From R450.50 per night (save R79.50)",
        "Monthly rate: R13,515 (save R2,385)",
        "Only 8km to Tygerberg Hospital",
        "Quiet environment for rest",
        "Fast WiFi for telemedicine",
        "24/7 access & checkout",
        "Weekly or monthly options",
      ],
      terms: "Valid hospital ID, payslip, or medical council registration required. Subject to availability.",
      cta: "Get Medical Rate",
      image: "/images/twin-room-yellow.png",
    },
    {
      title: "Student Semester Rate",
      description: "Affordable long-term rates for UWC & CPUT students",
      discount: "15% OFF",
      icon: Users,
      color: "bg-orange-100 text-orange-600",
      regularPrice: "R15,900",
      specialPrice: "R13,515",
      savingsAmount: "R2,385",
      perNight: "R450.50/night",
      features: [
        "From R13,515 per month (save R2,385)",
        "R450.50 per night rate",
        "3-6 month contracts available",
        "Study-friendly environment",
        "High-speed WiFi for online classes",
        "Close to UWC (5km) & CPUT (7km)",
        "Quiet study areas",
      ],
      terms:
        "Valid student ID required. Minimum 3-month commitment. Academic year only (Feb-Nov). Payment monthly in advance.",
      cta: "Apply for Student Rate",
      image: "/images/triple-room-full.jpg",
    },
    {
      title: "Last-Minute Saver",
      description: "Book within 48 hours and get instant 10% discount",
      discount: "10% OFF",
      icon: Clock,
      color: "bg-yellow-100 text-yellow-600",
      regularPrice: "R530",
      specialPrice: "R477",
      savingsAmount: "R53",
      perNight: "R477/night",
      features: [
        "Standard Twin from R477/night (save R53)",
        "Double Room from R558/night",
        "Instant confirmation via WhatsApp",
        "Same-day check-in available",
        "All standard amenities",
        "Free WiFi & parking",
        "No booking fees",
      ],
      terms: "Subject to availability. Must book within 48 hours of arrival date. Check availability via WhatsApp.",
      cta: "Check Availability",
      image: "/images/sage-double-room.png",
    },
    {
      title: "UWC Parents Weekend",
      description: "Special rate for parents visiting students at UWC",
      discount: "10% OFF",
      icon: Users,
      color: "bg-purple-100 text-purple-600",
      regularPrice: "R1,590",
      specialPrice: "R1,431",
      savingsAmount: "R159",
      perNight: "R477/night",
      features: [
        "3 nights from R1,431 (save R159)",
        "R477 per night rate",
        "Welcome information pack",
        "UWC directions & campus map",
        "Restaurant recommendations",
        "Free WiFi & secure parking",
        "Quiet, comfortable rooms",
      ],
      terms:
        "Valid during UWC academic terms. Student ID or proof of UWC enrollment required. Weekend bookings preferred.",
      cta: "Book Parents Package",
      image: "/images/double-room.png",
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
            <p className="text-xl mb-6 opacity-90">
              Save up to 20% when you book direct at 60 on Kosmos Bellville South
            </p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              No hidden fees. No booking commissions. Best rates guaranteed when you book directly with us.
            </p>
          </div>
        </section>

        {/* Book Direct Benefits */}
        <section className="bg-gradient-to-r from-blue-50 to-green-50 border-y border-blue-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Book Direct?</h2>
              <p className="text-gray-600">Save money and get better service by booking directly with us</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <TrendingDown className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Lower Prices</h3>
                <p className="text-sm text-gray-600">No booking fees or commissions. Save 10-20% vs online platforms</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <CheckCircle2 className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Instant Confirmation</h3>
                <p className="text-sm text-gray-600">Book via WhatsApp or phone and get confirmed within 5 minutes</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Star className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Better Service</h3>
                <p className="text-sm text-gray-600">Direct contact with owners. Personalized service & flexibility</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Gift className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Exclusive Deals</h3>
                <p className="text-sm text-gray-600">Access special offers not available on booking platforms</p>
              </div>
            </div>
          </div>
        </section>

        {/* Price Comparison Table */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Book Direct & Save</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-sage-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Booking Method</th>
                    <th className="px-6 py-4 text-center">Nightly Rate</th>
                    <th className="px-6 py-4 text-center">Monthly Rate</th>
                    <th className="px-6 py-4 text-center">Fees</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Booking.com</td>
                    <td className="px-6 py-4 text-center text-gray-600">R635</td>
                    <td className="px-6 py-4 text-center text-gray-600">R19,050</td>
                    <td className="px-6 py-4 text-center text-red-600">+20% commission</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Airbnb</td>
                    <td className="px-6 py-4 text-center text-gray-600">R615</td>
                    <td className="px-6 py-4 text-center text-gray-600">R18,450</td>
                    <td className="px-6 py-4 text-center text-red-600">+16% service fee</td>
                  </tr>
                  <tr className="bg-green-50 hover:bg-green-100">
                    <td className="px-6 py-4 font-bold text-sage-700">Book Direct (Standard)</td>
                    <td className="px-6 py-4 text-center font-bold text-sage-700">R530</td>
                    <td className="px-6 py-4 text-center font-bold text-sage-700">R15,900</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">No fees!</td>
                  </tr>
                  <tr className="bg-green-100 hover:bg-green-200">
                    <td className="px-6 py-4 font-bold text-sage-800">Book Direct (Monthly)</td>
                    <td className="px-6 py-4 text-center font-bold text-sage-800">R424</td>
                    <td className="px-6 py-4 text-center font-bold text-sage-800">R12,720</td>
                    <td className="px-6 py-4 text-center font-bold text-green-700">Save R6,330!</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              💰 Book monthly and save <span className="font-bold text-sage-700">R6,330 compared to Booking.com</span>
            </p>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Choose Your Special Offer</h2>
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
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{offer.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{offer.description}</p>

                    {/* Pricing */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600 line-through text-sm">{offer.regularPrice}</span>
                        <span className="text-2xl font-bold text-sage-700">{offer.specialPrice}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">{offer.perNight}</span>
                        <span className="text-sm font-semibold text-green-600">Save {offer.savingsAmount}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {offer.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
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
                      <Button asChild className="w-full bg-sage-600 hover:bg-sage-700 text-white">
                        <a href="/book-now">{offer.cta}</a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-sage-600 text-sage-600 hover:bg-sage-50 bg-transparent"
                      >
                        <a
                          href={`https://wa.me/27745245703?text=Hi, I'm interested in the ${offer.title}`}
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
                  <p className="text-gray-700">Share 60 on Kosmos with a friend</p>
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
              <div className="mt-6 bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-gray-700 font-semibold">
                  💡 Refer 5 friends and earn <span className="text-sage-700">one FREE night</span>!
                </p>
              </div>
              <Button asChild size="lg" className="mt-8 bg-sage-600 hover:bg-sage-700 text-white px-8">
                <a
                  href="https://wa.me/27745245703?text=I want to refer a friend to 60 on Kosmos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Referring Now
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Booking Guarantee */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Direct Booking Guarantee</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Best Rate Guarantee</h3>
                <p className="text-sm text-gray-600">Find a lower rate online? We'll match it + give you 10% off</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Cancellation</h3>
                <p className="text-sm text-gray-600">Free cancellation up to 7 days before arrival date</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Instant Confirmation</h3>
                <p className="text-sm text-gray-600">Get your booking confirmed via WhatsApp within 5 minutes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">24/7 Contact</h3>
                <p className="text-sm text-gray-600">Reach us anytime via phone or WhatsApp for urgent matters</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-sage-600 to-sage-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Save on Your Bellville South Accommodation?</h2>
            <p className="text-lg mb-8 opacity-90">
              Book now to secure your discounted rate. Limited availability during peak season.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg"
              >
                <a href="/book-now">Book Now & Save</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-sage-800 px-8 py-6 text-lg font-semibold bg-transparent"
              >
                <a href="https://wa.me/27745245703?text=Hi, I want to book" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp: 074 524 5703
                </a>
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-80">💳 Secure payment. No hidden fees. Instant confirmation.</p>
          </div>
        </section>
      </div>
    </>
  )
}

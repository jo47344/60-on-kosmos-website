import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote } from "lucide-react"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Guest Reviews & Testimonials - 60 on Kosmos Bellville South",
  description:
    "Read real reviews from contractors, students, and families who stayed at 60 on Kosmos guesthouse Bellville South. See why we're rated 4.8/5 stars.",
  openGraph: {
    title: "Guest Testimonials - 60 on Kosmos Guesthouse Bellville South",
    description: "See what our guests say about their stay at our Bellville South guesthouse",
  },
}

export default function TestimonialsPage() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "William M.",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Perfect location for contractors working in Cape Town. The rooms are spotlessly clean, secure parking is a huge plus, and the WiFi works great. I've stayed here for 3 months and it's become my home away from home. The owner is very accommodating with monthly rates.",
        datePublished: "2024-12-15",
        itemReviewed: {
          "@type": "LodgingBusiness",
          name: "60 on Kosmos Guesthouse Bellville South",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Zanele K.",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Stayed here while visiting my daughter at UWC. Only 5km away which is so convenient! The guesthouse is safe, clean, and very affordable compared to other options. The host was welcoming and gave us great local tips. Highly recommend for UWC parents!",
        datePublished: "2024-12-10",
        itemReviewed: {
          "@type": "LodgingBusiness",
          name: "60 on Kosmos Guesthouse Bellville South",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Dr. Lerato P.",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "As a locum doctor at Tygerberg Hospital, I needed affordable monthly accommodation. 60 on Kosmos is perfect - only 8km from the hospital, secure parking for my car, and reliable WiFi for video calls. Much better value than the hotels near the hospital.",
        datePublished: "2024-11-28",
        itemReviewed: {
          "@type": "LodgingBusiness",
          name: "60 on Kosmos Guesthouse Bellville South",
        },
      },
    ],
  }

  const testimonials = [
    {
      name: "William M.",
      role: "Contractor from Cape Town",
      rating: 5,
      date: "December 2024",
      image: "/images/twin-room-yellow.png",
      text: "Perfect location for contractors working in Cape Town. The rooms are spotlessly clean, secure parking is a huge plus, and the WiFi works great. I've stayed here for 3 months and it's become my home away from home. The owner is very accommodating with monthly rates.",
      verified: true,
    },
    {
      name: "Zanele K.",
      role: "UWC Parent from East London",
      rating: 5,
      date: "December 2024",
      image: "/images/sage-double-room.png",
      text: "Stayed here while visiting my daughter at UWC. Only 5km away which is so convenient! The guesthouse is safe, clean, and very affordable compared to other options. The host was welcoming and gave us great local tips. Highly recommend for UWC parents!",
      verified: true,
    },
    {
      name: "Dr. Lerato P.",
      role: "Locum Doctor at Tygerberg Hospital",
      rating: 5,
      date: "November 2024",
      image: "/images/deluxe-twin-navy.jpg",
      text: "As a locum doctor at Tygerberg Hospital, I needed affordable monthly accommodation. 60 on Kosmos is perfect - only 8km from the hospital, secure parking for my car, and reliable WiFi for video calls. Much better value than the hotels near the hospital.",
      verified: true,
    },
    {
      name: "Thabo N.",
      role: "UWC Student",
      rating: 5,
      date: "November 2024",
      image: "/images/triple-room-full.jpg",
      text: "Great student accommodation near UWC! Much more comfortable than residence and not much more expensive. The triple room was perfect for me and my two roommates. Free WiFi is fast enough for online classes. Definitely recommending to other students.",
      verified: true,
    },
    {
      name: "Sarah & John V.",
      role: "Wedding Guests from Johannesburg",
      rating: 5,
      date: "October 2024",
      image: "/images/sage-double-room.png",
      text: "We stayed here for a family wedding in Cape Town. The double room was spacious and comfortable. The location made it easy to get to the wedding venue and explore Cape Town. Much more affordable than CBD hotels but still close to everything.",
      verified: true,
    },
    {
      name: "Michael B.",
      role: "Business Traveler",
      rating: 5,
      date: "October 2024",
      image: "/images/twin-room-yellow.png",
      text: "I travel to Cape Town frequently for business and 60 on Kosmos is now my go-to. Reliable WiFi, secure parking, and the owner remembers my preferences. The location is perfect for accessing both northern suburbs and CBD clients.",
      verified: true,
    },
    {
      name: "Nomsa M.",
      role: "Nursing Student",
      rating: 5,
      date: "September 2024",
      image: "/images/deluxe-twin-navy.jpg",
      text: "Perfect for nursing students at Tygerberg! Close to the hospital for practicals, quiet for studying, and affordable on a student budget. The ensuite bathroom is a luxury compared to shared dorms. Highly recommend!",
      verified: true,
    },
    {
      name: "James & Family",
      role: "Family Vacation from Durban",
      rating: 5,
      date: "September 2024",
      image: "/images/triple-room-full.jpg",
      text: "We booked the triple room for our Cape Town family vacation. It was perfect for our family of 3. The owner gave us great tips for family-friendly attractions. The secure parking and 24/7 security gave us peace of mind. Great value for money!",
      verified: true,
    },
  ]

  const breadcrumbItems = [
    { name: "Home", url: "" },
    { name: "Testimonials", url: "/testimonials" },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-sage-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Guests Say About 60 on Kosmos
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Real reviews from contractors, students, and families who stayed at our Bellville South guesthouse
            </p>
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.8/5</span>
              <span className="text-gray-600">• Based on 25+ verified reviews</span>
            </div>
            <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg">
              <a href="/book-now">Book Your Stay Now</a>
            </Button>
          </div>
        </section>

        {/* Featured Reviews */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={`${testimonial.name} review`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                          {testimonial.verified && (
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Verified</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <div className="flex items-center mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                          ))}
                          <span className="text-xs text-gray-500 ml-2">{testimonial.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-sage-200" />
                      <p className="text-gray-700 leading-relaxed pl-6">{testimonial.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Review Stats */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Guest Satisfaction Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-sage-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Clean Rooms</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sage-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Would Recommend</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sage-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Excellent Location</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sage-600 mb-2">92%</div>
                <div className="text-sm text-gray-600">Great Value</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-sage-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience 60 on Kosmos?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join hundreds of satisfied guests who chose our Bellville South guesthouse
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

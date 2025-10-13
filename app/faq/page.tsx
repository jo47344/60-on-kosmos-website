import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle } from "lucide-react"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - 60 on Kosmos Bellville South",
  description:
    "Common questions about our Bellville South guesthouse. Learn about parking, rates, location, amenities, and booking policies.",
  openGraph: {
    title: "FAQ - 60 on Kosmos Guesthouse Bellville South",
    description: "Get answers to frequently asked questions about our accommodation",
  },
}

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How far is 60 on Kosmos from UWC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are approximately 5km from the University of the Western Cape (UWC) campus, which is about a 10-minute drive. Many UWC students and visiting parents choose our accommodation for its convenient location and affordable rates.",
        },
      },
      {
        "@type": "Question",
        name: "Is there parking available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide secure on-site parking behind locked gates with 24/7 CCTV surveillance. Parking is completely free for all guests and there is ample space for multiple vehicles.",
        },
      },
      {
        "@type": "Question",
        name: "Do you welcome contractors and offer monthly rates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we are very contractor-friendly and offer competitive monthly rates for long-term stays. Many contractors working in Cape Town choose 60 on Kosmos as their home base. Contact us directly for a personalized monthly rate quote.",
        },
      },
      {
        "@type": "Question",
        name: "How far is Tygerberg Hospital from your guesthouse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tygerberg Hospital is approximately 8km away, about a 12-15 minute drive. We regularly host medical professionals, locum doctors, and nursing students doing placements at Tygerberg Hospital.",
        },
      },
      {
        "@type": "Question",
        name: "What's included in the room rate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each room includes: private ensuite bathroom, free high-speed WiFi, bar fridge, weekly cleaning service, fresh linen and towels, secure parking, and 24/7 CCTV security. Our accommodation is self-catering with no meals provided.",
        },
      },
      {
        "@type": "Question",
        name: "Is breakfast included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, we are a self-catering establishment and do not provide meals or breakfast. Each room has a bar fridge for your convenience. There is a SPAR supermarket 2km away, and many restaurants and takeaways nearby in Bellville South.",
        },
      },
      {
        "@type": "Question",
        name: "Do you allow children or families?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our accommodation is designed for young professionals, contractors, and students (18+). We do not accommodate children to maintain a quiet, professional environment suitable for working adults.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get from Cape Town Airport to your guesthouse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are approximately 20km from Cape Town International Airport, about a 20-25 minute drive. We recommend using Uber, Bolt, or booking a private taxi service. We do not currently offer airport transfer services, but can recommend reliable transport providers.",
        },
      },
      {
        "@type": "Question",
        name: "What are your check-in and check-out times?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard check-in time is from 14:00 (2pm) and check-out is by 10:00 (10am). If you need early check-in or late check-out, please contact us in advance and we'll do our best to accommodate you based on availability.",
        },
      },
      {
        "@type": "Question",
        name: "Is WiFi included and is it fast enough for work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, free high-speed WiFi is included in all rooms. Our internet is reliable and fast enough for video calls, online work, streaming, and online classes. Many remote workers and students stay with us long-term.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide daily cleaning service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide weekly cleaning service which includes changing linen, towels, and cleaning your room. This helps us keep rates affordable while maintaining high cleanliness standards. If you need additional cleaning during your stay, please let us know.",
        },
      },
      {
        "@type": "Question",
        name: "Are pets allowed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, we do not allow pets on the property to maintain a clean, allergen-free environment for all guests and to comply with health and safety regulations.",
        },
      },
      {
        "@type": "Question",
        name: "Is smoking allowed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, smoking is not permitted inside the rooms or buildings. This is a non-smoking property to ensure fresh, clean air for all guests. Designated outdoor smoking areas may be available.",
        },
      },
      {
        "@type": "Question",
        name: "What payment methods do you accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We accept cash, credit cards, debit cards, and bank transfers (EFT). Payment is required at check-in or in advance for longer stays. We can provide banking details for EFT payments.",
        },
      },
      {
        "@type": "Question",
        name: "How do I make a booking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book directly by calling us at 074 524 5703, sending a WhatsApp message, or emailing info@60onkosmos.co.za. We also accept bookings through Airbnb and Booking.com. Direct bookings often get the best rates.",
        },
      },
    ],
  }

  const faqs = [
    {
      question: "How far is 60 on Kosmos from UWC?",
      answer:
        "We are approximately 5km from the University of the Western Cape (UWC) campus, which is about a 10-minute drive. Many UWC students and visiting parents choose our accommodation for its convenient location and affordable rates.",
    },
    {
      question: "Is there parking available?",
      answer:
        "Yes, we provide secure on-site parking behind locked gates with 24/7 CCTV surveillance. Parking is completely free for all guests and there is ample space for multiple vehicles.",
    },
    {
      question: "Do you welcome contractors and offer monthly rates?",
      answer:
        "Yes, we are very contractor-friendly and offer competitive monthly rates for long-term stays. Many contractors working in Cape Town choose 60 on Kosmos as their home base. Contact us directly for a personalized monthly rate quote.",
    },
    {
      question: "How far is Tygerberg Hospital from your guesthouse?",
      answer:
        "Tygerberg Hospital is approximately 8km away, about a 12-15 minute drive. We regularly host medical professionals, locum doctors, and nursing students doing placements at Tygerberg Hospital.",
    },
    {
      question: "What's included in the room rate?",
      answer:
        "Each room includes: private ensuite bathroom, free high-speed WiFi, bar fridge, weekly cleaning service, fresh linen and towels, secure parking, and 24/7 CCTV security. Our accommodation is self-catering with no meals provided.",
    },
    {
      question: "Is breakfast included?",
      answer:
        "No, we are a self-catering establishment and do not provide meals or breakfast. Each room has a bar fridge for your convenience. There is a SPAR supermarket 2km away, and many restaurants and takeaways nearby in Bellville South.",
    },
    {
      question: "Do you allow children or families?",
      answer:
        "Our accommodation is designed for young professionals, contractors, and students (18+). We do not accommodate children to maintain a quiet, professional environment suitable for working adults.",
    },
    {
      question: "How do I get from Cape Town Airport to your guesthouse?",
      answer:
        "We are approximately 20km from Cape Town International Airport, about a 20-25 minute drive. We recommend using Uber, Bolt, or booking a private taxi service. We do not currently offer airport transfer services, but can recommend reliable transport providers.",
    },
    {
      question: "What are your check-in and check-out times?",
      answer:
        "Standard check-in time is from 14:00 (2pm) and check-out is by 10:00 (10am). If you need early check-in or late check-out, please contact us in advance and we'll do our best to accommodate you based on availability.",
    },
    {
      question: "Is WiFi included and is it fast enough for work?",
      answer:
        "Yes, free high-speed WiFi is included in all rooms. Our internet is reliable and fast enough for video calls, online work, streaming, and online classes. Many remote workers and students stay with us long-term.",
    },
    {
      question: "Do you provide daily cleaning service?",
      answer:
        "We provide weekly cleaning service which includes changing linen, towels, and cleaning your room. This helps us keep rates affordable while maintaining high cleanliness standards. If you need additional cleaning during your stay, please let us know.",
    },
    {
      question: "Are pets allowed?",
      answer:
        "No, we do not allow pets on the property to maintain a clean, allergen-free environment for all guests and to comply with health and safety regulations.",
    },
    {
      question: "Is smoking allowed?",
      answer:
        "No, smoking is not permitted inside the rooms or buildings. This is a non-smoking property to ensure fresh, clean air for all guests. Designated outdoor smoking areas may be available.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, credit cards, debit cards, and bank transfers (EFT). Payment is required at check-in or in advance for longer stays. We can provide banking details for EFT payments.",
    },
    {
      question: "How do I make a booking?",
      answer:
        "You can book directly by calling us at 074 524 5703, sending a WhatsApp message, or emailing info@60onkosmos.co.za. We also accept bookings through Airbnb and Booking.com. Direct bookings often get the best rates.",
    },
  ]

  const breadcrumbItems = [
    { name: "Home", url: "" },
    { name: "FAQ", url: "/faq" },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-sage-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to know about staying at 60 on Kosmos Bellville South
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl text-sage-700">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're here to help! Contact us directly for personalized answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white">
                <a href="tel:+27745245703">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 074 524 5703
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sage-600 text-sage-600 hover:bg-sage-50 bg-transparent"
              >
                <a href="https://wa.me/27745245703" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sage-600 text-sage-600 hover:bg-sage-50 bg-transparent"
              >
                <a href="mailto:info@60onkosmos.co.za">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-sage-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Stay?</h2>
            <p className="text-lg mb-8 opacity-90">Secure, affordable accommodation in Bellville South awaits you</p>
            <Button
              asChild
              size="lg"
              className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            >
              <a href="/book-now">Book Now</a>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}

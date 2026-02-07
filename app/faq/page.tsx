import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, Phone, Mail } from "lucide-react"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | 60 on Kosmos Bellville South",
  description:
    "Get answers to common questions about 60 on Kosmos guesthouse in Bellville South. Parking, rates, amenities, communal kitchen, location near UWC and Tygerberg Hospital.",
  alternates: { canonical: "https://60onkosmos.co.za/faq" },
  openGraph: {
    title: "FAQ - 60 on Kosmos Guesthouse Bellville South",
    description: "Frequently asked questions about our Bellville South accommodation",
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
          text: "We are approximately 5km from the University of the Western Cape (UWC) campus in Bellville. It's about a 10-minute drive, making us ideal accommodation for UWC students, parents visiting students, and staff.",
        },
      },
      {
        "@type": "Question",
        name: "Is there secure parking available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer free secure on-site parking behind locked gates with 24/7 CCTV surveillance. Your vehicle will be safe throughout your stay.",
        },
      },
      {
        "@type": "Question",
        name: "Do you allow contractors and offer monthly rates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We welcome contractors and offer discounted weekly and monthly rates. We provide detailed invoices for all bookings, perfect for contractors needing receipts for company expenses. Contact us directly for a personalized quote.",
        },
      },
      {
        "@type": "Question",
        name: "How far are you from Tygerberg Hospital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tygerberg Hospital is approximately 8km away, roughly a 12-15 minute drive. We're a popular choice for locum doctors, nursing students, and medical staff needing affordable accommodation near the hospital.",
        },
      },
      {
        "@type": "Question",
        name: "What's included in the room rate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each room includes a private ensuite bathroom, free WiFi, bar fridge, clean linen and towels, weekly cleaning service, and welcome refreshments. You also have access to our communal kitchenette with gas stove, microwave, and air fryer for light meal preparation.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a kitchen I can use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We have a communal kitchenette area equipped with a gas stove, microwave, air fryer, and basic cooking utensils. This is perfect for preparing light meals. Each room also has a bar fridge. There's a SPAR supermarket 2km away for groceries.",
        },
      },
      {
        "@type": "Question",
        name: "Is breakfast included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, we are self-catering accommodation and do not provide meals. However, you have access to our communal kitchenette with a gas stove, microwave, and air fryer to prepare your own meals. Each room also has a bar fridge.",
        },
      },
      {
        "@type": "Question",
        name: "What payment methods do you accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We accept EFT (Electronic Fund Transfer) bank payments only. We provide banking details upon booking confirmation and issue detailed invoices for all payments. This is perfect for contractors and companies requiring proper documentation for expenses.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide invoices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We provide detailed invoices for all bookings. This is especially useful for contractors, companies, and anyone needing receipts for tax or expense purposes. Invoices are emailed immediately after payment confirmation.",
        },
      },
      {
        "@type": "Question",
        name: "What are your check-in and check-out times?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check-in time is from 14:00 (2 PM) and check-out is by 10:00 AM. If you need different times, please contact us in advance and we'll try to accommodate you.",
        },
      },
      {
        "@type": "Question",
        name: "Is WiFi available and reliable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide free high-speed WiFi throughout the property. It's reliable enough for video calls, online classes, and remote work - perfect for students and professionals.",
        },
      },
      {
        "@type": "Question",
        name: "Are children allowed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, 60 on Kosmos is adults-only accommodation (18+). We cater primarily to young professionals, contractors, and students seeking a quiet environment.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get to the property from Cape Town International Airport?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are approximately 25km from Cape Town International Airport, about a 25-30 minute drive. We don't offer airport transfers, but you can use Uber, Bolt, or arrange a private taxi. Many guests find ride-sharing apps to be the most convenient and affordable option.",
        },
      },
      {
        "@type": "Question",
        name: "What cooking facilities are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We have a communal kitchenette with a gas stove, microwave, air fryer, kettle, and basic cooking utensils. This is shared by all guests and is perfect for preparing light meals. Each room also has its own bar fridge.",
        },
      },
      {
        "@type": "Question",
        name: "What is your cancellation policy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our cancellation policy varies depending on how you book. Please contact us directly or check your booking confirmation for specific cancellation terms. We try to be as flexible as possible with our guests.",
        },
      },
      {
        "@type": "Question",
        name: "How far is Bellville Station from the property?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bellville Train Station is approximately 4km away, about an 8-minute drive. This makes us convenient for guests using public transport to commute to Cape Town CBD or other areas.",
        },
      },
      {
        "@type": "Question",
        name: "Are pets allowed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, unfortunately we do not allow pets on the property to ensure a comfortable environment for all guests, particularly those with allergies.",
        },
      },
      {
        "@type": "Question",
        name: "Is smoking allowed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, smoking is not permitted inside the rooms or buildings. This is a non-smoking property. Designated outdoor smoking areas may be available.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide cleaning services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide weekly cleaning service which includes changing linen, towels, and cleaning your room. This helps keep our rates affordable while maintaining cleanliness. If you need additional cleaning, please let us know.",
        },
      },
    ],
  }

  const faqs = [
    {
      question: "How far is 60 on Kosmos from UWC?",
      answer:
        "We are approximately 5km from the University of the Western Cape (UWC) campus in Bellville. It's about a 10-minute drive, making us ideal accommodation for UWC students, parents visiting students, and staff.",
    },
    {
      question: "Is there secure parking available?",
      answer:
        "Yes, we offer free secure on-site parking behind locked gates with 24/7 CCTV surveillance. Your vehicle will be safe throughout your stay.",
    },
    {
      question: "Do you allow contractors and offer monthly rates?",
      answer:
        "We welcome contractors and offer discounted weekly and monthly rates. We provide detailed invoices for all bookings, perfect for contractors needing receipts for company expenses. Contact us directly for a personalized quote.",
    },
    {
      question: "How far are you from Tygerberg Hospital?",
      answer:
        "Tygerberg Hospital is approximately 8km away, roughly a 12-15 minute drive. We're a popular choice for locum doctors, nursing students, and medical staff needing affordable accommodation near the hospital.",
    },
    {
      question: "What's included in the room rate?",
      answer:
        "Each room includes a private ensuite bathroom, free WiFi, bar fridge, clean linen and towels, weekly cleaning service, and welcome refreshments. You also have access to our communal kitchenette with gas stove, microwave, and air fryer for light meal preparation.",
    },
    {
      question: "Is there a kitchen I can use?",
      answer:
        "Yes! We have a communal kitchenette area equipped with a gas stove, microwave, air fryer, and basic cooking utensils. This is perfect for preparing light meals. Each room also has a bar fridge. There's a SPAR supermarket 2km away for groceries.",
    },
    {
      question: "Is breakfast included?",
      answer:
        "No, we are self-catering accommodation and do not provide meals. However, you have access to our communal kitchenette with a gas stove, microwave, and air fryer to prepare your own meals. Each room also has a bar fridge.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept EFT (Electronic Fund Transfer) bank payments only. We provide banking details upon booking confirmation and issue detailed invoices for all payments. This is perfect for contractors and companies requiring proper documentation for expenses.",
    },
    {
      question: "Do you provide invoices?",
      answer:
        "Yes! We provide detailed invoices for all bookings. This is especially useful for contractors, companies, and anyone needing receipts for tax or expense purposes. Invoices are emailed immediately after payment confirmation.",
    },
    {
      question: "What are your check-in and check-out times?",
      answer:
        "Check-in time is from 14:00 (2 PM) and check-out is by 10:00 AM. If you need different times, please contact us in advance and we'll try to accommodate you.",
    },
    {
      question: "Is WiFi available and reliable?",
      answer:
        "Yes, we provide free high-speed WiFi throughout the property. It's reliable enough for video calls, online classes, and remote work - perfect for students and professionals.",
    },
    {
      question: "Are children allowed?",
      answer:
        "No, 60 on Kosmos is adults-only accommodation (18+). We cater primarily to young professionals, contractors, and students seeking a quiet environment.",
    },
    {
      question: "How do I get to the property from Cape Town International Airport?",
      answer:
        "We are approximately 25km from Cape Town International Airport, about a 25-30 minute drive. We don't offer airport transfers, but you can use Uber, Bolt, or arrange a private taxi. Many guests find ride-sharing apps to be the most convenient and affordable option.",
    },
    {
      question: "What cooking facilities are available?",
      answer:
        "We have a communal kitchenette with a gas stove, microwave, air fryer, kettle, and basic cooking utensils. This is shared by all guests and is perfect for preparing light meals. Each room also has its own bar fridge.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Our cancellation policy varies depending on how you book. Please contact us directly or check your booking confirmation for specific cancellation terms. We try to be as flexible as possible with our guests.",
    },
    {
      question: "How far is Bellville Station from the property?",
      answer:
        "Bellville Train Station is approximately 4km away, about an 8-minute drive. This makes us convenient for guests using public transport to commute to Cape Town CBD or other areas.",
    },
    {
      question: "Are pets allowed?",
      answer:
        "No, unfortunately we do not allow pets on the property to ensure a comfortable environment for all guests, particularly those with allergies.",
    },
    {
      question: "Is smoking allowed?",
      answer:
        "No, smoking is not permitted inside the rooms or buildings. This is a non-smoking property. Designated outdoor smoking areas may be available.",
    },
    {
      question: "Do you provide cleaning services?",
      answer:
        "Yes, we provide weekly cleaning service which includes changing linen, towels, and cleaning your room. This helps keep our rates affordable while maintaining cleanliness. If you need additional cleaning, please let us know.",
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
              Everything you need to know about staying at 60 on Kosmos Guesthouse Bellville South
            </p>
          </div>
        </section>

        {/* FAQ Items */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <details className="group">
                      <summary className="flex items-start justify-between cursor-pointer list-none">
                        <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                        <ChevronDown className="w-5 h-5 text-sage-600 flex-shrink-0 transition-transform group-open:rotate-180" />
                      </summary>
                      <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                    </details>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're here to help! Contact us directly and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg">
                <a href="tel:+27745245703">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 074 524 5703
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sage-600 text-sage-600 hover:bg-sage-50 px-8 py-6 text-lg bg-transparent"
              >
                <a href="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Send a Message
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Booking CTA */}
        <section className="py-16 bg-sage-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Stay?</h2>
            <p className="text-lg mb-8 opacity-90">Secure your room at 60 on Kosmos today</p>
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

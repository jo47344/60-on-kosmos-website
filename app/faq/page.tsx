import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Mail, ChevronDown, ChevronUp } from "lucide-react"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | 60 on Kosmos Guesthouse Bellville South",
  description:
    "Common questions about staying at 60 on Kosmos guesthouse in Bellville South. Check-in times, parking, security, monthly rates, and more.",
  openGraph: {
    title: "FAQ - 60 on Kosmos Guesthouse Bellville South",
    description: "Answers to frequently asked questions about our Bellville South accommodation",
  },
}

export default function FAQPage() {
  const breadcrumbItems = [
    { name: "Home", url: "" },
    { name: "FAQ", url: "faq" },
  ]

  const faqs = [
    {
      question: "What time is check-in and check-out at 60 on Kosmos?",
      answer:
        "Check-in is from 2:00 PM and check-out is by 10:00 AM. We can arrange early check-in or late check-out on request, subject to availability. Please call us at 074 524 5703 to make arrangements.",
    },
    {
      question: "Is there secure parking at 60 on Kosmos?",
      answer:
        "Yes, we provide free secure on-site parking behind locked gates with 24/7 CCTV monitoring for all guests. Your vehicle will be safe throughout your stay.",
    },
    {
      question: "Do you welcome contractors and offer long-term rates?",
      answer:
        "We welcome contractors and young professionals. We offer competitive monthly rates for long-term stays. Contact us at 074 524 5703 for monthly rate quotations tailored to your needs.",
    },
    {
      question: "How far is 60 on Kosmos from UWC?",
      answer:
        "We're approximately 5km (about 8 minutes drive) from the University of the Western Cape (UWC) campus, making us ideal for students, parents visiting their children, and university staff.",
    },
    {
      question: "What is included in the room rate?",
      answer:
        "All rooms include: ensuite bathroom with hot water 24/7, free high-speed WiFi, bar fridge, clean linen and towels, welcome refreshments (tea, coffee, rusks), secure parking, 24/7 CCTV security, and weekly cleaning service.",
    },
    {
      question: "How far is 60 on Kosmos from Tygerberg Hospital?",
      answer:
        "We're approximately 8km from Tygerberg Hospital (about 12 minutes drive), perfect for medical professionals, nursing students, locum doctors, and patients' families.",
    },
    {
      question: "Is there public transport near 60 on Kosmos?",
      answer:
        "Yes, the taxi rank at SPAR Kasselsvlei Centre is 2km away (walkable distance) with regular minibus taxi services to Cape Town CBD, Bellville, and surrounding areas. Bellville train station is 6km away.",
    },
    {
      question: "Do you offer monthly rates for long-term accommodation?",
      answer:
        "Yes, we offer discounted monthly rates for contractors, young professionals, students, and anyone needing long-term self-catering accommodation in Bellville South. Please contact us at 074 524 5703 for a personalized monthly rate quote.",
    },
    {
      question: "Is cleaning service provided?",
      answer:
        "Yes, we provide weekly cleaning service for all rooms. Fresh linen and towels are provided weekly. If you need additional cleaning during your stay, please let us know and we can arrange it.",
    },
    {
      question: "Do you provide meals or breakfast?",
      answer:
        "No, we are a self-catering guesthouse. Each room has a bar fridge, and we provide welcome refreshments (tea, coffee, rusks, milk). SPAR Kasselsvlei Centre is just 2km away for groceries. There are also restaurants and takeaways nearby.",
    },
    {
      question: "Are children allowed at 60 on Kosmos?",
      answer:
        "60 on Kosmos is designed primarily for young professionals, contractors, and adult students (18+). We do not accommodate children to maintain a professional, quiet environment suitable for working professionals.",
    },
    {
      question: "Do you offer airport transfer services?",
      answer:
        "We do not currently offer airport transfer services. However, we can recommend reliable taxi services and Uber/Bolt are readily available in Cape Town. Cape Town International Airport is approximately 20km away.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, credit/debit cards, and bank transfers (EFT). For monthly stays, we can arrange invoicing for corporate bookings and contractors.",
    },
    {
      question: "Is WiFi included and how fast is it?",
      answer:
        "Yes, free high-speed WiFi is included in all rooms. Our internet is suitable for remote work, video calls, streaming, and online studies - perfect for professionals and students.",
    },
    {
      question: "Can I smoke at 60 on Kosmos?",
      answer:
        "60 on Kosmos is a non-smoking property. Smoking is not permitted inside rooms or in covered areas. There are designated outdoor areas where smoking is allowed.",
    },
    {
      question: "Are pets allowed at the guesthouse?",
      answer: "No, we do not allow pets at 60 on Kosmos to maintain a clean, allergen-free environment for all guests.",
    },
  ]

  // FAQ Schema for Google Rich Results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions - 60 on Kosmos Bellville South
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about staying at our guesthouse in Bellville South. Can't find your answer?
              Call us at{" "}
              <a href="tel:+27745245703" className="text-sage-600 font-semibold hover:underline">
                074 524 5703
              </a>
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      <ChevronDown className="w-5 h-5 text-sage-600 group-open:hidden" />
                      <ChevronUp className="w-5 h-5 text-sage-600 hidden group-open:block" />
                    </div>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed border-t pt-4">{faq.answer}</div>
                </details>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="bg-sage-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg mb-6 opacity-90">
              Our friendly team is here to help. Contact us directly for any inquiries about staying at 60 on Kosmos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-sage-600 hover:bg-gray-100">
                <a href="tel:+27745245703">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 074 524 5703
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-sage-700 bg-transparent"
              >
                <a href="https://wa.me/27745245703" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-sage-700 bg-transparent"
              >
                <a href="mailto:info@60onkosmos.co.za">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

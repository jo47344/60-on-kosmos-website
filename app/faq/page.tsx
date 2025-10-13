import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Shield, Wifi, DollarSign, Users, Utensils } from "lucide-react"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - 60 on Kosmos Bellville South Guesthouse",
  description:
    "Get answers to common questions about 60 on Kosmos accommodation in Bellville South. Learn about check-in, parking, rates, location, and more.",
  keywords:
    "60 on Kosmos FAQ, Bellville South guesthouse questions, UWC accommodation info, Tygerberg Hospital lodging, contractor accommodation FAQ",
}

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Booking & Rates",
      icon: DollarSign,
      color: "bg-green-100 text-green-600",
      questions: [
        {
          question: "What are your room rates at 60 on Kosmos Bellville South?",
          answer:
            "Our standard rates are R530/night for Twin Rooms, R620/night for Double Rooms, and R750/night for Triple Rooms. We offer special discounts for monthly stays (20% off), contractors (20% off), students (15% off), and medical professionals (15% off). Book direct for the best rates with no booking fees.",
        },
        {
          question: "How do I book a room at 60 on Kosmos?",
          answer:
            "You can book directly via WhatsApp (074 524 5703), phone call, our online booking form, or email (info@60onkosmos.co.za). We provide instant confirmation within 5 minutes. Booking direct saves you money compared to online platforms.",
        },
        {
          question: "Do you require a deposit to secure my booking?",
          answer:
            "Yes, we require a 50% deposit to confirm your booking. The remaining balance is due on arrival. We accept bank transfers, cash, or card payments. For monthly bookings, payment can be arranged weekly or monthly.",
        },
        {
          question: "What is your cancellation policy?",
          answer:
            "Free cancellation up to 7 days before arrival. Cancellations within 7 days forfeit the deposit. For monthly bookings, 14 days notice is required. We understand emergencies happen - contact us to discuss your situation.",
        },
        {
          question: "Can I extend my stay if I need to?",
          answer:
            "Subject to availability, you can extend your stay. Contact us as soon as you know your plans. Extended stays qualify for discounted weekly or monthly rates. We're flexible and will work with your schedule.",
        },
        {
          question: "Do you offer special rates for contractors?",
          answer:
            "Yes! Contractors get 20% off for monthly stays (R424/night = R12,720/month). We provide monthly invoices, flexible check-out, and priority booking. Valid contractor ID or company letter required. Many contractors make us their home base in Cape Town.",
        },
      ],
    },
    {
      category: "Check-In & Location",
      icon: MapPin,
      color: "bg-blue-100 text-blue-600",
      questions: [
        {
          question: "What time is check-in and check-out at 60 on Kosmos?",
          answer:
            "Standard check-in is from 2:00 PM and check-out is by 10:00 AM. Early check-in and late check-out can be arranged based on availability - just let us know your arrival time. We're flexible for contractors and monthly guests.",
        },
        {
          question: "Where exactly is 60 on Kosmos located in Bellville South?",
          answer:
            "We're at 60 Kosmos Street, Bellville South, Cape Town, 7530. Just 5km from UWC, 8km from Tygerberg Hospital, 2km from SPAR Kasselsvlei Centre, and 3km from N1 highway access. Easy to find and centrally located in Bellville South.",
        },
        {
          question: "How do I get to 60 on Kosmos from Cape Town Airport?",
          answer:
            "From Cape Town Airport (25km away, 25-30 min drive): Take N2 to N1 towards Paarl/Bellville, exit at Bellville, follow Voortrekker Road, turn onto Kosmos Street. Uber/Bolt costs R180-250. Airport shuttle available on request. We'll send you detailed directions after booking.",
        },
        {
          question: "Is there public transport near 60 on Kosmos?",
          answer:
            "Yes! Taxi rank at SPAR Kasselsvlei Centre (2km) has regular services to Cape Town CBD, Bellville, and surrounding areas. Bellville train station (6km) connects to Metrorail network. MyCiTi buses serve the area. We're also on major Uber/Bolt routes.",
        },
        {
          question: "How far is 60 on Kosmos from UWC?",
          answer:
            "Only 5km (approximately 8 minutes drive) from the University of the Western Cape (UWC) main campus. Perfect for visiting students, parents during orientation/graduation, and UWC staff. Many UWC parents stay with us regularly.",
        },
        {
          question: "How close are you to Tygerberg Hospital?",
          answer:
            "We're approximately 8km from Tygerberg Hospital (12 minutes drive). Ideal for medical professionals, locum doctors, nursing students, and families visiting patients. Quiet location perfect for rest after hospital shifts.",
        },
      ],
    },
    {
      category: "Facilities & Amenities",
      icon: Wifi,
      color: "bg-purple-100 text-purple-600",
      questions: [
        {
          question: "Is WiFi included at 60 on Kosmos?",
          answer:
            "Yes! High-speed WiFi is free for all guests throughout the property. Fast enough for video calls, streaming, online work, and student assignments. No data limits. Each room has strong signal. WiFi details provided at check-in.",
        },
        {
          question: "Do you have parking at the Bellville South guesthouse?",
          answer:
            "Yes, free secure on-site parking behind locked gates with 24/7 CCTV monitoring. Each room gets one parking bay. Additional parking available for multiple vehicles. Your car is safe and secure throughout your stay.",
        },
        {
          question: "What's included in the room at 60 on Kosmos?",
          answer:
            "All rooms include: ensuite bathroom with hot water, free WiFi, bar fridge, clean linen and towels, welcome kit (tea, coffee, rusks, milk, sugar), secure parking, 24/7 CCTV security, and daily room service. Everything you need for a comfortable stay.",
        },
        {
          question: "Do rooms have their own bathrooms?",
          answer:
            "Yes! All rooms at 60 on Kosmos have private ensuite bathrooms with shower, toilet, basin, and hot water 24/7. No shared bathrooms. Your own private space with all amenities. Bathrooms are cleaned daily.",
        },
        {
          question: "Is there a kitchen I can use?",
          answer:
            "Rooms have bar fridges for storing food and drinks. Shared kitchen facilities available for guest use (kettle, microwave, basic utensils). Many restaurants and takeaways within 2-5km. We can recommend great local food spots.",
        },
        {
          question: "Do you provide cleaning services?",
          answer:
            "Yes! Daily room cleaning and fresh towels included. For monthly stays, cleaning is done 2-3 times per week. Linen changed weekly. We maintain high cleanliness standards. If you prefer privacy on certain days, just let us know.",
        },
      ],
    },
    {
      category: "House Rules & Policies",
      icon: Shield,
      color: "bg-red-100 text-red-600",
      questions: [
        {
          question: "Do you allow pets at 60 on Kosmos?",
          answer:
            "Unfortunately, we do not allow pets at the guesthouse. This policy helps maintain cleanliness and ensures comfort for guests with allergies. Service animals may be accommodated - please contact us to discuss.",
        },
        {
          question: "Is smoking allowed at 60 on Kosmos?",
          answer:
            "60 on Kosmos is a non-smoking property. Smoking is only allowed in designated outdoor areas. Please respect other guests and do not smoke in rooms or common indoor areas. Smoking in rooms may result in cleaning fees.",
        },
        {
          question: "Can I bring visitors to my room?",
          answer:
            "Day visitors are welcome with prior notice for security purposes. Overnight visitors require approval and may incur additional charges. We maintain security for all guests. Please register all visitors at reception for access.",
        },
        {
          question: "What are the quiet hours at 60 on Kosmos?",
          answer:
            "Quiet hours are 10:00 PM to 7:00 AM. We ask guests to be considerate of others. Perfect for contractors needing rest and students studying. This is a residential area and we maintain peaceful environment.",
        },
        {
          question: "Do you accept students at 60 on Kosmos?",
          answer:
            "Yes! We welcome UWC, CPUT, and other university students. We offer special student rates (15% off) for semester stays. Study-friendly environment with fast WiFi. Many students stay with us during academic year. Student ID required.",
        },
        {
          question: "Do you accommodate contractors and workers?",
          answer:
            "We specialize in contractor accommodation. We offer 20% monthly discounts, provide invoices for companies, and understand workers' schedules. Many contractors make us their Cape Town base. Reliable, clean, and professional service.",
        },
      ],
    },
    {
      category: "Safety & Security",
      icon: Shield,
      color: "bg-orange-100 text-orange-600",
      questions: [
        {
          question: "Is 60 on Kosmos safe and secure?",
          answer:
            "Yes! We have 24/7 CCTV monitoring, secure locked gates, on-site presence, well-lit property, and alarm systems. Located in established residential area of Bellville South. Your safety is our priority. Many solo travelers and families feel very secure here.",
        },
        {
          question: "Is the neighborhood safe?",
          answer:
            "Bellville South is an established residential area. We're in a safe part of the neighborhood with good security. The area has street lighting, neighborhood watch, and regular police patrols. We provide safety tips and local guidance to all guests.",
        },
        {
          question: "What security measures do you have?",
          answer:
            "24/7 CCTV cameras covering all exterior areas, secure parking behind locked gates, burglar bars on windows, security lighting, alarm system, on-site management presence, and visitor registration system. Multiple layers of security for your peace of mind.",
        },
        {
          question: "Can I leave valuables in my room?",
          answer:
            "While we have security measures, we recommend keeping valuables with you or using your room safe if available. We're not responsible for lost items, but we maintain high security standards. Lock your room when leaving.",
        },
      ],
    },
    {
      category: "Local Area & Activities",
      icon: Utensils,
      color: "bg-yellow-100 text-yellow-600",
      questions: [
        {
          question: "What restaurants are near 60 on Kosmos?",
          answer:
            "Within 2-5km: Ocean Basket (seafood), Nando's, Spur Steakhouse, KFC, Debonairs Pizza, Chicken Licken, Vida e Caffè, Mugg & Bean. SPAR Kasselsvlei Centre (2km) has multiple food options. We provide a restaurant guide at check-in with delivery options.",
        },
        {
          question: "Where can I buy groceries near Bellville South?",
          answer:
            "SPAR Kasselsvlei Centre (2km) has supermarket, pharmacy, banks, and shops. Checkers and Pick n Pay in Bellville (5km). Cape Gate Shopping Centre (8km) has 140+ stores. Everything you need is nearby. We can direct you to the closest options.",
        },
        {
          question: "What can I do in Bellville South and Cape Town?",
          answer:
            "Visit Table Mountain (25km), V&A Waterfront (20km), wine farms in Stellenbosch (30km), beaches (15-25km), Robben Island tours, Cape Point, and more. We're centrally located for exploring Cape Town while staying affordable. Ask us for recommendations!",
        },
        {
          question: "Is there a gym or fitness center nearby?",
          answer:
            "Virgin Active and Planet Fitness are within 5-8km in Bellville. Some offer day passes. UWC has sports facilities (5km). We can provide gym recommendations and directions. Perfect for maintaining fitness routine during your stay.",
        },
      ],
    },
    {
      category: "Special Circumstances",
      icon: Users,
      color: "bg-pink-100 text-pink-600",
      questions: [
        {
          question: "Can you accommodate families with children?",
          answer:
            "Yes! Our Triple Rooms are perfect for families (3 single beds). Safe, secure environment with outdoor space. Close to family-friendly restaurants and activities. Children are welcome. Many families stay with us when visiting UWC or exploring Cape Town.",
        },
        {
          question: "Do you offer long-term monthly rates?",
          answer:
            "Yes! Monthly rates start at R12,720 (20% discount). Perfect for contractors, locum doctors, visiting academics, and long-term travelers. We provide monthly invoices, flexible terms, and personalized service. Minimum 30-day stay required.",
        },
        {
          question: "Can I book just for one night?",
          answer:
            "Yes, one-night stays are welcome subject to availability. Standard rates apply. Perfect for quick Cape Town visits, UWC events, or Tygerberg Hospital appointments. Book via WhatsApp for fastest confirmation.",
        },
        {
          question: "Do you offer airport pickup service?",
          answer:
            "Airport transfers can be arranged for an additional fee (approximately R250-350 depending on time). We can also recommend reliable Uber/Bolt drivers or shuttle services. Let us know your arrival time and we'll help coordinate pickup.",
        },
        {
          question: "Can you store luggage if I check out early?",
          answer:
            "Yes, we offer luggage storage for guests before check-in or after check-out (same day only). Free of charge. Perfect if you have a late flight. Your bags are secure while you explore Cape Town on your last day.",
        },
        {
          question: "Do you provide receipts and invoices?",
          answer:
            "Yes! We provide detailed receipts and invoices for all bookings. Company invoices available for corporate/contractor bookings with company details and VAT if applicable. Emailed immediately after payment. Perfect for expense claims.",
        },
      ],
    },
  ]

  const breadcrumbItems = [
    { name: "Home", url: "" },
    { name: "FAQ", url: "/faq" },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      })),
    ),
  }

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-sage-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 mb-6">
              Everything you need to know about staying at 60 on Kosmos Bellville South
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our guesthouse, booking process, amenities, location, and more.
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </section>

        {/* Quick Contact Banner */}
        <section className="bg-gradient-to-r from-blue-50 to-green-50 border-y border-blue-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <p className="font-semibold text-gray-900">Still have questions?</p>
              <div className="flex gap-4">
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                  <a
                    href="https://wa.me/27745245703?text=Hi, I have a question about 60 on Kosmos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-sage-600 text-sage-600 hover:bg-sage-50 bg-white">
                  <a href="tel:+27745245703">
                    <Phone className="w-4 h-4 mr-2" />
                    Call 074 524 5703
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${category.color}`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
                  </div>

                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <Card key={faqIndex} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-sage-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Didn't Find Your Answer?</h2>
            <p className="text-lg mb-8 opacity-90">
              Our team is here to help! Contact us directly and we'll answer any questions you have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
              >
                <a
                  href="https://wa.me/27745245703?text=Hi, I have a question"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp: 074 524 5703
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-sage-700 px-8 py-6 text-lg font-semibold bg-transparent"
              >
                <Link href="/contact">Visit Contact Page</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

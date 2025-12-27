import type { Metadata } from "next"
import { PricingTable } from "@/components/pricing-table"
import { ContractorQuoteForm } from "@/components/contractor-quote-form"
import { CTASection } from "@/components/cta-section"
import { Check, Info } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Pricing & Rates | Accommodation from R530/night",
  description:
    "Transparent pricing for 60 on Kosmos accommodation. Nightly rates from R530, weekly and monthly discounts available. Contractor quotes on request. All rooms include WiFi, parking, and weekly cleaning.",
  alternates: {
    canonical: "https://60onkosmos.co.za/pricing",
  },
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 mb-6">
              No hidden fees. All rates include free WiFi, secure parking, weekly cleaning, and welcome refreshments.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <Check className="w-4 h-4" />
              <span>Book direct for the best rates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingTable showContractorNote={true} />
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included in Every Stay</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Free High-Speed WiFi", desc: "Perfect for remote work and streaming" },
              { title: "Secure Parking", desc: "Behind locked gates with CCTV" },
              { title: "Weekly Cleaning", desc: "Professional housekeeping service" },
              { title: "Welcome Kit", desc: "Tea, coffee, rusks & milk on arrival" },
              { title: "24/7 Security", desc: "CCTV monitoring throughout" },
              { title: "Ensuite Bathroom", desc: "Private bathroom in every room" },
            ].map((item, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Discount Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Save More with Longer Stays</h2>
            <p className="text-gray-600">The longer you stay, the more you save</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">7+</div>
                <h3 className="font-semibold text-lg mb-2">Weekly Rates</h3>
                <p className="text-gray-600">Special rates for 7+ nights</p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-500 border-2">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-green-600 mb-2">30+</div>
                <h3 className="font-semibold text-lg mb-2">Monthly Rates</h3>
                <p className="text-gray-600">Best value for monthly stays</p>
                <div className="mt-2 text-sm font-medium text-green-600">Most Popular</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">90+</div>
                <h3 className="font-semibold text-lg mb-2">Long-Term</h3>
                <p className="text-gray-600">Custom rates for extended projects</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardContent className="pt-6 flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700">
                  <strong>Contact us for exact weekly and monthly rates.</strong> Rates vary by room type and season.
                  Call 074 524 5703 or WhatsApp for a personalized quote.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contractor Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-4xl mb-4 block">👷</span>
          <h2 className="text-3xl font-bold mb-4">Contractor & Project Team Pricing</h2>
          <p className="text-xl text-gray-300 mb-8">
            Special confidential rates for contractors, construction teams, and long-term projects. Custom pricing based
            on your specific needs.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left mb-8">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Volume Discounts</div>
                <div className="text-sm text-gray-400">Better rates for multiple rooms</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Flexible Terms</div>
                <div className="text-sm text-gray-400">Project-based agreements</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Invoicing Available</div>
                <div className="text-sm text-gray-400">Company billing supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contractor Quote Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Request Your Contractor Quote</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get a confidential, customized quote within 2 hours during business hours. All information is kept
              strictly private.
            </p>
          </div>
          <ContractorQuoteForm />
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="primary" />
    </div>
  )
}

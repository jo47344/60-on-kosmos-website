import type { Metadata } from "next"
import { GuideDownloadForm } from "@/components/guide-download-form"
import { Card } from "@/components/ui/card"
import { CheckCircle, MapPin, Utensils, Bus, Shield, Star, Download } from "lucide-react"
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Free Guide: Complete Guide to Staying in Bellville South | 60 on Kosmos",
  description:
    "Download our free comprehensive guide to Bellville South. Includes maps, transport routes, restaurant recommendations, safety tips, and local insider information.",
  openGraph: {
    title: "Free Guide: Complete Guide to Staying in Bellville South",
    description: "Get our insider's guide to making the most of your stay in Bellville South, Cape Town.",
    type: "website",
  },
}

export default function FreeGuidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://60onkosmos.co.za" },
          { name: "Free Guide", url: "https://60onkosmos.co.za/free-guide" },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-sage-600 rounded-full mb-6">
                <Download className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Complete Guide to Staying in Bellville South
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Your free 20-page insider's guide to making the most of your visit
              </p>
              <div className="flex items-center justify-center gap-2 text-sage-700">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <span className="ml-2 text-gray-600">Rated 4.9/5 by 200+ visitors</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
              {/* Guide Preview */}
              <div className="space-y-6">
                <Card className="p-6 bg-white shadow-lg">
                  <div className="relative aspect-[3/4] mb-4 bg-gradient-to-br from-sage-100 to-sage-200 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Complete Guide to</h3>
                        <h2 className="text-3xl font-bold text-sage-800 mb-4">Bellville South</h2>
                        <div className="space-y-2 text-left text-sm text-gray-700">
                          <p>✓ Interactive Maps</p>
                          <p>✓ Transport Routes</p>
                          <p>✓ Local Restaurants</p>
                          <p>✓ Safety Tips</p>
                          <p>✓ Things to Do</p>
                          <p>✓ Emergency Contacts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 text-center">Preview of the guide cover</p>
                </Card>

                <div className="bg-sage-50 p-6 rounded-lg border border-sage-200">
                  <h3 className="font-semibold text-gray-900 mb-3">What's Inside:</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Detailed Maps:</strong> Walking distances to UWC, Tygerberg Hospital, and shopping
                        centers
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Public Transport Guide:</strong> Bus routes, Uber costs, and taxi ranks with safety
                        ratings
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Restaurant Directory:</strong> 15+ local eateries with photos, menus, and price ranges
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Safety Guide:</strong> Area safety tips, emergency numbers, and 24/7 services
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Cape Town Day Trips:</strong> Best attractions, how to get there, and insider tips
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Local Insider Secrets:</strong> Where locals shop, eat, and relax
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Download Form */}
              <div className="space-y-6">
                <Card className="p-8 bg-white shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Your Free Guide</h2>
                  <p className="text-gray-600 mb-6">
                    Enter your email to download the complete guide instantly. We'll also send you exclusive deals and
                    Cape Town travel tips.
                  </p>
                  <GuideDownloadForm />
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    We respect your privacy. Unsubscribe anytime. No spam, ever.
                  </p>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 text-center">
                    <MapPin className="w-8 h-8 text-sage-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-gray-900">Interactive Maps</p>
                    <p className="text-xs text-gray-600">With distances</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <Bus className="w-8 h-8 text-sage-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-gray-900">Transport Routes</p>
                    <p className="text-xs text-gray-600">With costs</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <Utensils className="w-8 h-8 text-sage-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-gray-900">Restaurant Guide</p>
                    <p className="text-xs text-gray-600">15+ reviewed</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <Shield className="w-8 h-8 text-sage-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-gray-900">Safety Tips</p>
                    <p className="text-xs text-gray-600">Stay secure</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">What Visitors Say About Our Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-sage-600 text-sage-600" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    "This guide was incredibly helpful! The transport information saved me so much time and money."
                  </p>
                  <p className="text-xs font-semibold text-gray-900">Sarah M.</p>
                  <p className="text-xs text-gray-600">UWC Student, 2024</p>
                </Card>
                <Card className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-sage-600 text-sage-600" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    "The restaurant recommendations were spot on. Found some amazing local spots I wouldn't have
                    discovered otherwise."
                  </p>
                  <p className="text-xs font-semibold text-gray-900">James T.</p>
                  <p className="text-xs text-gray-600">Business Traveler, 2024</p>
                </Card>
                <Card className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-sage-600 text-sage-600" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    "As a first-time visitor to Cape Town, this guide made me feel confident exploring the area. Highly
                    recommend!"
                  </p>
                  <p className="text-xs font-semibold text-gray-900">Linda K.</p>
                  <p className="text-xs text-gray-600">Tourist, 2024</p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

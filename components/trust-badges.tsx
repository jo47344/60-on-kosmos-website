import { Shield, Award, ThumbsUp, Users, Star, CheckCircle } from "lucide-react"

export function TrustBadges() {
  return (
    <section className="py-8 bg-gradient-to-r from-blue-50 to-green-50 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-xs font-semibold text-gray-900">24/7 Security</p>
            <p className="text-xs text-gray-600">CCTV Monitored</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
            <p className="text-xs font-semibold text-gray-900">4.8/5 Rating</p>
            <p className="text-xs text-gray-600">25+ Reviews</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <ThumbsUp className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-xs font-semibold text-gray-900">98% Satisfied</p>
            <p className="text-xs text-gray-600">Would Recommend</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-xs font-semibold text-gray-900">500+ Guests</p>
            <p className="text-xs text-gray-600">Since 2020</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
            <p className="text-xs font-semibold text-gray-900">Best Rates</p>
            <p className="text-xs text-gray-600">Book Direct</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-2">
              <CheckCircle className="w-6 h-6 text-pink-600" />
            </div>
            <p className="text-xs font-semibold text-gray-900">Instant Confirm</p>
            <p className="text-xs text-gray-600">Within 5 Min</p>
          </div>
        </div>
      </div>
    </section>
  )
}

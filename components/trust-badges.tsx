import Link from "next/link"
import { Shield, Star, FileText, Clock } from "lucide-react"

export function TrustBadges() {
  return (
    <section className="py-8 bg-gradient-to-r from-blue-50 to-green-50 border-y border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link href="/testimonials" className="text-center block">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-8 h-8 text-yellow-600 fill-current" />
            </div>
            <div className="font-bold text-gray-900">Verified Reviews</div>
            <div className="text-sm text-gray-600">See our latest ratings</div>
          </Link>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <div className="font-bold text-gray-900">CCTV-Monitored</div>
            <div className="text-sm text-gray-600">CCTV & secure gates</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <div className="font-bold text-gray-900">Company Invoices</div>
            <div className="text-sm text-gray-600">Provided on request</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <div className="font-bold text-gray-900">Book Direct</div>
            <div className="text-sm text-gray-600">WhatsApp or enquiry form</div>
          </div>
        </div>
      </div>
    </section>
  )
}

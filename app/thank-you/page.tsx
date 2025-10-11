import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Thank You for Your Booking! - 60 on Kosmos Guesthouse",
  description: "Your booking request for 60 on Kosmos Guesthouse has been received. We will contact you shortly.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sage-50 p-4">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg border shadow-lg text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/60-kosmos-elegant-logo.jpg"
            alt="60 on Kosmos Guesthouse"
            width={200}
            height={55}
            className="block"
          />
        </div>
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your booking request has been successfully sent. We will contact you shortly via phone or WhatsApp to confirm
          your stay.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-sage-600 text-white rounded-md font-semibold hover:bg-sage-700 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}

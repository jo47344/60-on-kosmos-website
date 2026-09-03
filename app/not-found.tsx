import type { Metadata } from "next"
import Link from "next/link"
import { Home, Search, Phone, MessageCircle } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Find rooms, rates, and contact details for 60 on Kosmos Guesthouse in Bellville South.",
  robots: {
    index: false,
    follow: true,
  },
}

const popularLinks = [
  { href: "/rooms", label: "Our Rooms" },
  { href: "/book-now", label: "Book Now" },
  { href: "/contractor-accommodation", label: "Contractor Accommodation" },
  { href: "/monthly-accommodation", label: "Monthly Accommodation" },
  { href: "/amenities", label: "Amenities" },
  { href: "/faq", label: "FAQ" },
]

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sage-50 p-4 py-16">
      <div className="max-w-lg w-full mx-auto p-8 bg-white rounded-lg border shadow-lg text-center">
        <div className="flex justify-center mb-6">
          <Logo size="sm" showTagline={true} />
        </div>
        <p className="text-sage-600 font-bold text-6xl mb-2">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists.
        </p>

        <Button
          asChild
          size="lg"
          className="w-full bg-sage-600 hover:bg-sage-700 text-white mb-8"
        >
          <Link href="/">
            <Home className="mr-2 h-5 w-5" />
            Back to Homepage
          </Link>
        </Button>

        <div className="text-left mb-8">
          <p className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-3">
            <Search className="w-4 h-4" />
            Popular Pages
          </p>
          <div className="grid grid-cols-2 gap-2">
            {popularLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-sage-600 hover:text-sage-700 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="outline" className="flex-1 bg-transparent">
            <a href="https://wa.me/27745245703">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Us
            </a>
          </Button>
          <Button asChild variant="outline" className="flex-1 bg-transparent">
            <a href="tel:+27745245703">
              <Phone className="mr-2 h-4 w-4" />
              074 524 5703
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

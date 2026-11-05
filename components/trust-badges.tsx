import Link from "next/link"
import { Shield, Star, FileText, MessageCircle } from "lucide-react"

const items = [
  { icon: Star, title: "Verified reviews", detail: "Booking.com and Google", href: "/testimonials" },
  { icon: Shield, title: "CCTV-monitored", detail: "CCTV and secure gates" },
  { icon: FileText, title: "Company invoices", detail: "Provided on request" },
  { icon: MessageCircle, title: "Book direct", detail: "WhatsApp or enquiry form" },
]

export function TrustBadges() {
  return (
    <section aria-label="Why guests book with us" className="border-b border-sage-100 bg-sage-50">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-5 px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8">
        {items.map(({ icon: Icon, title, detail, href }) => {
          const content = (
            <>
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-white text-sage-700 ring-1 ring-sage-200">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-gray-900">{title}</span>
                <span className="block text-sm text-gray-600">{detail}</span>
              </span>
            </>
          )
          return (
            <li key={title}>
              {href ? (
                <Link href={href} className="flex items-center gap-3 rounded-lg hover:text-sage-800">
                  {content}
                </Link>
              ) : (
                <div className="flex items-center gap-3">{content}</div>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

"use client"
import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { business } from "@/lib/site-facts"

const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
  "Hi, I'd like to book at 60 on Kosmos. My dates and number of guests:",
)}`

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-green-700 shadow-lg border-t border-green-800">
        <div className="flex items-center justify-center gap-3 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <Button
            asChild
            size="sm"
            className="flex-1 bg-white text-green-800 hover:bg-gray-100 font-semibold rounded-full shadow-md"
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
              WhatsApp Us
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="flex-1 bg-white text-green-800 hover:bg-gray-100 font-semibold rounded-full shadow-md"
          >
            <a href={`tel:${business.phoneIntl}`}>
              <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
              Call {business.phone}
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

"use client"
import { Phone, MessageCircle } from "lucide-react"

export function StickyMobileCTA() {
  return (
    <div className="mobile-cta-bar fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="border-t border-sage-900 bg-sage-800/95 shadow-lg">
        <div className="grid grid-cols-2 gap-2 p-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
          <a
            href="https://wa.me/27745245703?text=Hi%2C%20I%27d%20like%20to%20book%20a%20room%20at%2060%20on%20Kosmos.%20Dates%3A%20"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-3 font-semibold text-gray-900 hover:bg-[#3be07a]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp us
          </a>
          <a
            href="tel:+27745245703"
            className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-3 font-semibold text-sage-900 hover:bg-sage-50"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            074 524 5703
          </a>
        </div>
      </div>
    </div>
  )
}

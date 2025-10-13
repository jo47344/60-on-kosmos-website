"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 200px
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-green-600 shadow-lg border-t border-green-700">
        <div className="flex items-center justify-center gap-3 p-3">
          <Button
            asChild
            size="sm"
            className="flex-1 bg-white text-green-600 hover:bg-gray-100 font-semibold rounded-full shadow-md"
          >
            <a
              href="https://wa.me/27745245703?text=Hi%2C%20I%20want%20to%20book%20a%20room%20at%2060%20on%20Kosmos%20from%20[insert%20dates]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4 mr-2" />💬 WhatsApp Us
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="flex-1 bg-white text-green-600 hover:bg-gray-100 font-semibold rounded-full shadow-md"
          >
            <a href="tel:0745245703">
              <Phone className="w-4 h-4 mr-2" />📞 Call Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

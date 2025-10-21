"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = "27823254286"
  const message = encodeURIComponent("Hi! I would like to inquire about accommodation at 60 on Kosmos.")

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 w-80 rounded-lg bg-white shadow-2xl border border-gray-200 animate-in slide-in-from-bottom-5">
            <div className="bg-[#25D366] text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-semibold">60 on Kosmos</h3>
                  <p className="text-xs opacity-90">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-gray-50">
              <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
                <p className="text-sm text-gray-700">
                  Hi there! 👋
                  <br />
                  <br />
                  How can we help you today? Ask us about:
                </p>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• Room availability</li>
                  <li>• Pricing & special offers</li>
                  <li>• Monthly rates</li>
                  <li>• Facilities & amenities</li>
                </ul>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Start Chat on WhatsApp
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative"
          aria-label="Open WhatsApp chat"
        >
          {!isOpen && <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />}
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </>
  )
}

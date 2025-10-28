"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const whatsappNumber = "27745245703"
  const defaultMessage = "Hi, I'd like to book a room at 60 on Kosmos. Can you help me with availability and rates?"

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  if (!isVisible) return null

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 mb-2 animate-in slide-in-from-bottom-5">
            <div className="bg-green-600 text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">60 on Kosmos</h3>
                  <p className="text-xs opacity-90">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-green-700 rounded-full p-1 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <div className="bg-gray-100 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Hi there!</strong> 👋
                </p>
                <p className="text-sm text-gray-600">
                  Need help booking a room? We're here to assist you with availability, rates, and any questions!
                </p>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Start Chat on WhatsApp
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">Chat with us on WhatsApp</p>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label="Open WhatsApp chat"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageCircle className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                1
              </span>
            </>
          )}
        </button>
      </div>

      {/* Mobile WhatsApp FAB (shows on mobile only) */}
      <div className="fixed bottom-20 right-4 z-40 md:hidden">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
          </span>
        </button>
      </div>
    </>
  )
}

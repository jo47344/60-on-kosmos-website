"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export default function ContactPageClient() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("https://formspree.io/f/mblkjbkg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...formData, _subject: "New Contact Form Message - 60 on Kosmos" }),
      })

      if (response.ok) {
        router.push("/thank-you")
        return
      } else {
        throw new Error("Failed to send message")
      }
    } catch {
      setError("Sorry, there was an error sending your message. Please try calling us directly at 074 524 5703.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact & Book Your Stay</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to book your stay? Get in touch with us directly or use our convenient booking options.
          </p>
          <div className="mt-6 p-4 bg-green-100 rounded-lg inline-block">
            <p className="text-2xl font-bold text-green-800">
              📞{" "}
              <a href="tel:+27745245703" className="hover:underline">
                074 524 5703
              </a>
            </p>
            <p className="text-green-700">Call or WhatsApp for availability and quotations</p>
          </div>
          <p className="text-sm text-gray-500 mt-3">We reply to all enquiries within 24 hours.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-green-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    60 Kosmos Street
                    <br />
                    Bellville South
                    <br />
                    Cape Town, 7530
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-green-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600 text-lg font-semibold">
                    <a href="tel:+27745245703" className="hover:text-green-600">
                      074 524 5703
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-green-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@60onkosmos.co.za</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-green-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Check-in Hours</h3>
                  <p className="text-gray-600">
                    Check-in: From 2:00 PM
                    <br />
                    Check-out: By 10:00 AM
                    <br />
                    <span className="text-sm text-gray-500">Early/late arrangements available on request</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Booking Options */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Quick Booking</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white flex-1">
                  <a href="https://wa.me/27745245703" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1 bg-transparent">
                  <a href="tel:+27745245703">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Direct
                  </a>
                </Button>
              </div>

              <div className="pt-4 border-t">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Also Listed On</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild variant="outline" className="flex-1 bg-transparent">
                    <a href="https://www.booking.com/hotel/za/60-on-kosmos-cape-town.html" target="_blank" rel="noopener noreferrer">
                      Book on Booking.com
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 bg-transparent">
                    <a href="https://www.airbnb.co.za/rooms/1055447623" target="_blank" rel="noopener noreferrer">
                      Book on Airbnb
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4" data-form-name="contact_form">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your stay requirements, dates, or any questions..."
                    required
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-green-600 hover:bg-green-700">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Google Map Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Find Us - 60 Kosmos Street, Bellville South
          </h2>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=60+Kosmos+Street,+Bellville+South,+Cape+Town,+7530&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="60 on Kosmos Guesthouse Bellville South location map - affordable accommodation Cape Town near UWC"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600 mb-2">
              <strong>Address:</strong> 60 Kosmos Street, Bellville South, Cape Town 7530
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://maps.google.com/?q=60+Kosmos+Street,+Bellville+South,+Cape+Town"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 underline"
              >
                📍 Open in Google Maps
              </a>
              <a
                href="https://waze.com/ul?q=60%20Kosmos%20Street%20Bellville%20South"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 underline"
              >
                🚗 Open in Waze
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Direct Booking?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Direct Rates</h3>
              <p className="text-gray-600">No third-party booking fees when you book directly with us</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Personal Service</h3>
              <p className="text-gray-600">Speak directly with our team for personalized assistance</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Terms</h3>
              <p className="text-gray-600">More flexibility with check-in times and special requests</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

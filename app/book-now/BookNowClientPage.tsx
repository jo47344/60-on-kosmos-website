"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Mail, Phone, User, Loader2, MessageCircle, ShieldCheck, Wifi, Car } from "lucide-react"
import { business, rooms, reviewPlatforms, stayTerms } from "@/lib/site-facts"

const fromPrice = Math.min(...rooms.map((room) => room.price))

function formatDate(value: string) {
  if (!value) return ""
  const date = new Date(`${value}T00:00:00`)
  if (isNaN(date.getTime())) return value
  return date.toLocaleDateString("en-ZA", { weekday: "short", day: "numeric", month: "short", year: "numeric" })
}

export default function BookNowClientPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    checkinDate: "",
    checkoutDate: "",
    guestCount: "",
    companyName: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError("")
  }

  // Build the WhatsApp message from whatever the guest has filled in so far,
  // so the fastest route to a booking never depends on completing the form.
  const whatsappLines = ["Hi, I'd like to book a room at 60 on Kosmos."]
  if (formData.checkinDate) whatsappLines.push(`Check-in: ${formatDate(formData.checkinDate)}`)
  if (formData.checkoutDate) whatsappLines.push(`Check-out: ${formatDate(formData.checkoutDate)}`)
  if (formData.guestCount) whatsappLines.push(`Guests: ${formData.guestCount}`)
  if (formData.name) whatsappLines.push(`Name: ${formData.name}`)
  if (formData.companyName) whatsappLines.push(`Company: ${formData.companyName}`)
  if (formData.notes) whatsappLines.push(`Notes: ${formData.notes}`)
  if (!formData.checkinDate && !formData.checkoutDate) whatsappLines.push("My dates are: ")
  const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(whatsappLines.join("\n"))}`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    if (!formData.name || !formData.phone || !formData.guestCount || !formData.checkinDate || !formData.checkoutDate) {
      setError("Please fill in your dates, number of guests, name and phone number.")
      setIsSubmitting(false)
      return
    }

    const checkin = new Date(formData.checkinDate)
    const checkout = new Date(formData.checkoutDate)
    if (isNaN(checkin.getTime()) || isNaN(checkout.getTime()) || checkin >= checkout) {
      setError("Invalid dates. Check-out date must be after check-in date.")
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("https://formspree.io/f/mblkjbkg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push("/thank-you")
        return
      } else {
        const result = await response.json().catch(() => null)
        setError(
          result?.errors
            ? result.errors.map((err: any) => err.message).join(", ")
            : "We couldn't send your request. Please use the WhatsApp button instead so we don't miss you.",
        )
      }
    } catch (networkError) {
      console.error("Network error during Formspree submission:", networkError)
      setError("We couldn't send your request. Please use the WhatsApp button instead so we don't miss you.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = "w-full border rounded p-3 text-gray-700 focus:ring-sage-500 focus:border-sage-500"

  return (
    <div className="min-h-screen bg-sage-50 px-4 py-8 sm:py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex justify-center mb-4">
            <Logo size="sm" showTagline={true} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Book Your Stay</h1>
          <p className="mt-2 text-gray-700">
            Private ensuite rooms in Bellville South from <strong>R{fromPrice}/night</strong> when you book direct.
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-1.5">
              <Car className="w-4 h-4 text-sage-700" aria-hidden="true" /> Secure gated parking
            </li>
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sage-700" aria-hidden="true" /> CCTV and ADT armed response
            </li>
            <li className="flex items-center gap-1.5">
              <Wifi className="w-4 h-4 text-sage-700" aria-hidden="true" /> WiFi included
            </li>
          </ul>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Booking form */}
          <div className="lg:col-span-3 p-5 sm:p-6 bg-white rounded-lg border shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Your dates</h2>
            <p className="text-sm text-gray-600 mb-4">
              Fill in your dates, then book on WhatsApp for the quickest answer or send us a request.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4" data-form-name="book_now_form" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="checkinDate" className="text-sm font-medium text-gray-700">
                    Check-in Date *
                  </Label>
                  <div className="relative mt-1">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="checkinDate"
                      name="checkinDate"
                      type="date"
                      required
                      value={formData.checkinDate}
                      onChange={handleInputChange}
                      className={`pl-10 ${inputClass}`}
                      min={new Date().toISOString().split("T")[0]}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="checkoutDate" className="text-sm font-medium text-gray-700">
                    Check-out Date *
                  </Label>
                  <div className="relative mt-1">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="checkoutDate"
                      name="checkoutDate"
                      type="date"
                      required
                      value={formData.checkoutDate}
                      onChange={handleInputChange}
                      className={`pl-10 ${inputClass}`}
                      min={formData.checkinDate || new Date().toISOString().split("T")[0]}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="guestCount" className="text-sm font-medium text-gray-700">
                  Number of guests or team members *
                </Label>
                <Input
                  id="guestCount"
                  name="guestCount"
                  type="number"
                  inputMode="numeric"
                  min="1"
                  required
                  value={formData.guestCount}
                  onChange={handleInputChange}
                  className={`mt-1 ${inputClass}`}
                  placeholder="e.g., 2"
                  disabled={isSubmitting}
                />
              </div>

              {/* Fastest route: WhatsApp, pre-filled with the dates above */}
              <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-base font-semibold rounded-md"
                >
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                    Book on WhatsApp
                  </a>
                </Button>
                <p className="text-xs text-gray-600 text-center mt-2">
                  Quickest option. Your dates are added to the message for you.
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-gray-500">
                <span className="h-px flex-1 bg-gray-200" />
                or send a booking request
                <span className="h-px flex-1 bg-gray-200" />
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md" role="alert">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name *
                </Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`pl-10 ${inputClass}`}
                    placeholder="Your full name"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone / WhatsApp Number *
                </Label>
                <div className="relative mt-1">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`pl-10 ${inputClass}`}
                    placeholder="e.g., 074 123 4567"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address (optional)
                </Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`pl-10 ${inputClass}`}
                    placeholder="you@example.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                  Company name (optional)
                </Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  autoComplete="organization"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className={`mt-1 ${inputClass}`}
                  placeholder="For company invoices"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Label htmlFor="notes" className="text-sm font-medium text-gray-700">
                  Special Requests (Optional)
                </Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className={`mt-1 ${inputClass}`}
                  placeholder="Room preference, arrival time, work vehicle or trailer..."
                  rows={3}
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3 rounded-md font-semibold transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  "Send Booking Request"
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                We usually reply the same day. By submitting, you agree to be contacted via phone or WhatsApp to
                confirm your booking.
              </p>
            </form>
          </div>

          {/* Rates and other ways to book */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-5 sm:p-6 bg-white rounded-lg border shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Direct rates per room, per night</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th scope="col" className="py-2 font-medium">Room</th>
                    <th scope="col" className="py-2 font-medium text-right">1-6 nights</th>
                    <th scope="col" className="py-2 font-medium text-right">7-27</th>
                    <th scope="col" className="py-2 font-medium text-right">{stayTerms.monthlyRateMinNights}+</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((room) => (
                    <tr key={room.name} className="border-b last:border-0">
                      <th scope="row" className="py-2.5 text-left font-medium text-gray-900">
                        {room.name}
                        <span className="block text-xs font-normal text-gray-500">{room.layout}</span>
                      </th>
                      <td className="py-2.5 text-right text-gray-900">R{room.price}</td>
                      <td className="py-2.5 text-right text-gray-700">R{room.weeklyPrice}</td>
                      <td className="py-2.5 text-right text-gray-700">R{room.monthlyPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-gray-500 mt-3">
                Every room has a private ensuite bathroom. Check-in from {stayTerms.checkIn}, check-out by{" "}
                {stayTerms.checkOut}. Direct bookings are paid by EFT; company invoices on request.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-white rounded-lg border shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Other ways to book</h2>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full border-sage-600 text-sage-700 hover:bg-sage-50">
                  <a href={`tel:${business.phoneIntl}`}>
                    <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                    Call {business.phone}
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full border-sage-600 text-sage-700 hover:bg-sage-50">
                  <a href={reviewPlatforms.booking} target="_blank" rel="noopener noreferrer">
                    Book on Booking.com
                  </a>
                </Button>
                <p className="text-xs text-gray-500">
                  Prefer to book online or want to read guest reviews first? Our Booking.com listing shows live
                  availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

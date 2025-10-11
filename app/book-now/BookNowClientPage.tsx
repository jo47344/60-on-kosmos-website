"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Phone, User, CheckCircle, Loader2 } from "lucide-react"

export default function BookNowClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkinDate: "",
    checkoutDate: "",
    roomType: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError("")
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      roomType: value,
    })
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    if (!formData.name || !formData.phone || !formData.checkinDate || !formData.checkoutDate || !formData.roomType) {
      setError("Please fill in all required fields.")
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
        setIsSubmitted(true)
        setFormData({
          name: "",
          phone: "",
          checkinDate: "",
          checkoutDate: "",
          roomType: "",
          notes: "",
        })
      } else {
        const result = await response.json()
        setError(
          result.errors
            ? result.errors.map((err: any) => err.message).join(", ")
            : "Failed to send booking request. Please try again.",
        )
      }
    } catch (networkError) {
      console.error("Network error during Formspree submission:", networkError)
      setError("Network error. Please check your internet connection or try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sage-50 p-4">
        <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg border shadow-sm">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/60-kosmos-elegant-logo.jpg"
              alt="60 on Kosmos Guesthouse"
              width={200}
              height={55}
              className="block"
            />
          </div>
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Booking Request Sent!</h3>
          <p className="text-gray-600 mb-6 text-center">
            Thank you for your booking request. We will contact you shortly to confirm your stay.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3 rounded-md font-semibold transition-colors"
          >
            Make Another Booking
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-sage-50 p-4">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg border shadow-sm">
        <div className="flex justify-center mb-4">
          <Image
            src="/images/60-kosmos-elegant-logo.jpg"
            alt="60 on Kosmos Guesthouse"
            width={200}
            height={55}
            className="block"
          />
        </div>
        <h1 className="text-center text-2xl font-bold mb-6 text-gray-900">Book Your Stay</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md">
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
                required
                value={formData.name}
                onChange={handleInputChange}
                className="pl-10 w-full border rounded p-3 text-gray-700 focus:ring-sage-500 focus:border-sage-500"
                placeholder="Your full name"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number *
            </Label>
            <div className="relative mt-1">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="pl-10 w-full border rounded p-3 text-gray-700 focus:ring-sage-500 focus:border-sage-500"
                placeholder="e.g., 074 123 4567"
                disabled={isSubmitting}
              />
            </div>
          </div>

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
                  className="pl-10 w-full border rounded p-3 text-gray-700 focus:ring-sage-500 focus:border-sage-500"
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
                  className="pl-10 w-full border rounded p-3 text-gray-700 focus:ring-sage-500 focus:border-sage-500"
                  min={formData.checkinDate || new Date().toISOString().split("T")[0]}
                  disabled={isSubmitting}
                />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="roomType" className="text-sm font-medium text-gray-700">
              Room Type *
            </Label>
            <Select onValueChange={handleSelectChange} required disabled={isSubmitting}>
              <SelectTrigger className="mt-1 w-full border rounded p-3 text-gray-700 focus:ring-sage-500 focus:border-sage-500">
                <SelectValue placeholder="Select room type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard-twin">Standard Twin Room (R530/night)</SelectItem>
                <SelectItem value="double-room">Double Room (R620/night)</SelectItem>
                <SelectItem value="deluxe-twin">Deluxe Twin Room (R580/night)</SelectItem>
                <SelectItem value="triple-room">Triple Room (R750/night)</SelectItem>
              </SelectContent>
            </Select>
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
              className="mt-1 w-full border rounded p-3 text-gray-700 focus:ring-sage-500 focus:border-sage-500"
              placeholder="Any special requests or questions..."
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
              "📧 Send Booking Request"
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center mt-4">
            By submitting, you agree to be contacted via phone or WhatsApp to confirm your booking.
          </p>
        </form>
      </div>
    </div>
  )
}

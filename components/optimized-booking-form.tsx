"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Phone, User, MessageCircle, CheckCircle, Loader2 } from "lucide-react"

export function OptimizedBookingForm() {
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
    setError("") // Clear error on input change
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      roomType: value,
    })
    setError("") // Clear error on select change
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("") // Clear previous errors

    try {
      const response = await fetch("https://formspree.io/f/mblkjbkg", {
        // Replace 'mblkjbkg' with your actual Formspree form ID
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form
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
      console.error("Network error during booking submission:", networkError)
      setError(
        "Network error. Please check your internet connection or try again later. Alternatively, call us directly at 074 524 5703.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Booking Request Sent!</h3>
          <p className="text-gray-600 mb-6">Thanks! We'll confirm your booking via WhatsApp.</p>
          <div className="space-y-3">
            <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
              <a
                href="https://wa.me/27745245703?text=Hi%2C%20I%20just%20submitted%20a%20booking%20request%20for%2060%20on%20Kosmos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us Now
              </a>
            </Button>
            <Button onClick={() => setIsSubmitted(false)} variant="outline" className="w-full bg-transparent">
              Make Another Booking
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold text-gray-900">Book Your Stay</CardTitle>
        <p className="text-center text-gray-600 text-sm">Best rates guaranteed when you book direct</p>
      </CardHeader>
      <CardContent>
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
                className="pl-10"
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
                className="pl-10"
                placeholder="074 123 4567"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="checkinDate" className="text-sm font-medium text-gray-700">
                Check-in *
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
                  className="pl-10"
                  min={new Date().toISOString().split("T")[0]}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="checkoutDate" className="text-sm font-medium text-gray-700">
                Check-out *
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
                  className="pl-10"
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
              <SelectTrigger className="mt-1">
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
              className="mt-1"
              placeholder="Any special requests or questions..."
              rows={3}
              disabled={isSubmitting}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3"
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
            By submitting, you agree to be contacted via phone or WhatsApp to confirm your booking.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

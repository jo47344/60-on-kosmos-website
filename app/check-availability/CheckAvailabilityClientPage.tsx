"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Loader2 } from "lucide-react"

export default function CheckAvailabilityClientPage() {
  const [formData, setFormData] = useState({
    purpose: "",
    peopleCount: "",
    nightsCount: "",
    whatsapp: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError("")
  }

  const handlePurposeChange = (value: string) => {
    setFormData({
      ...formData,
      purpose: value,
    })
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    if (!formData.purpose || !formData.peopleCount || !formData.nightsCount) {
      setError("Please answer all three questions.")
      setIsSubmitting(false)
      return
    }

    if (!formData.whatsapp && !formData.email) {
      setError("Please provide a WhatsApp number or an email address so we can reach you.")
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
        body: JSON.stringify({
          formType: "Check Availability",
          ...formData,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          purpose: "",
          peopleCount: "",
          nightsCount: "",
          whatsapp: "",
          email: "",
        })
      } else {
        const result = await response.json()
        setError(
          result.errors
            ? result.errors.map((err: any) => err.message).join(", ")
            : "Failed to send your request. Please try again.",
        )
      }
    } catch (networkError) {
      console.error("Network error during check availability submission:", networkError)
      setError("Network error. Please check your internet connection or try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sage-50 p-4">
        <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg border shadow-sm text-center">
          <div className="flex justify-center mb-4">
            <Logo size="sm" showTagline={true} />
          </div>
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900 mb-2">Request Sent</h1>
          <p className="text-gray-600 mb-6">
            We&apos;ll get back to you shortly via WhatsApp or email with availability.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3 rounded-md font-semibold transition-colors"
          >
            Check Another Date
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-sage-50 p-4 py-10">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg border shadow-sm">
        <div className="flex justify-center mb-4">
          <Logo size="sm" showTagline={true} />
        </div>
        <h1 className="text-center text-2xl font-bold mb-2 text-gray-900">Check availability</h1>
        <p className="text-center text-sm text-gray-600 mb-6">
          Answer three quick questions and we&apos;ll get back to you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <div>
            <Label htmlFor="purpose" className="text-sm font-medium text-gray-700">
              1. What brings you to Cape Town? *
            </Label>
            <Select onValueChange={handlePurposeChange} value={formData.purpose} required disabled={isSubmitting}>
              <SelectTrigger className="mt-1 w-full border rounded p-3 text-gray-700 focus:ring-sage-500 focus:border-sage-500">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Work project">Work project</SelectItem>
                <SelectItem value="Corporate stay">Corporate stay</SelectItem>
                <SelectItem value="University">University</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-sm font-medium text-gray-700">2. How many people, how many nights? *</Label>
            <div className="grid grid-cols-2 gap-3 mt-1">
              <Input
                id="peopleCount"
                name="peopleCount"
                type="number"
                min="1"
                required
                value={formData.peopleCount}
                onChange={handleInputChange}
                className="w-full border rounded p-3 text-gray-700 focus:ring-sage-500 focus:border-sage-500"
                placeholder="People"
                aria-label="Number of people"
                disabled={isSubmitting}
              />
              <Input
                id="nightsCount"
                name="nightsCount"
                type="number"
                min="1"
                required
                value={formData.nightsCount}
                onChange={handleInputChange}
                className="w-full border rounded p-3 text-gray-700 focus:ring-sage-500 focus:border-sage-500"
                placeholder="Nights"
                aria-label="Number of nights"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <Label className="text-sm font-medium text-gray-700">3. Contact details — WhatsApp/email *</Label>
            <div className="space-y-3 mt-1">
              <Input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                value={formData.whatsapp}
                onChange={handleInputChange}
                className="w-full border rounded p-3 text-gray-700 focus:ring-sage-500 focus:border-sage-500"
                placeholder="WhatsApp number"
                disabled={isSubmitting}
              />
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border rounded p-3 text-gray-700 focus:ring-sage-500 focus:border-sage-500"
                placeholder="Email address"
                disabled={isSubmitting}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Provide at least one so we can reach you.</p>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3 rounded-md font-semibold transition-colors"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              "Check availability"
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}

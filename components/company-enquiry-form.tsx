"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2 } from "lucide-react"

const initialFormData = {
  companyName: "",
  contactPerson: "",
  phone: "",
  email: "",
  guestCount: "",
  arrivalDate: "",
  departureDate: "",
  workLocation: "",
  specialRequirements: "",
}

export function CompanyEnquiryForm() {
  const [formData, setFormData] = useState(initialFormData)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    if (
      !formData.companyName ||
      !formData.contactPerson ||
      !formData.phone ||
      !formData.guestCount ||
      !formData.arrivalDate ||
      !formData.departureDate ||
      !formData.workLocation
    ) {
      setError("Please fill in all required fields.")
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
          formType: "Company Enquiry",
          ...formData,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData(initialFormData)
      } else {
        const result = await response.json()
        setError(
          result.errors
            ? result.errors.map((err: any) => err.message).join(", ")
            : "Failed to send your request. Please try again.",
        )
      }
    } catch (networkError) {
      console.error("Network error during company enquiry submission:", networkError)
      setError("Network error. Please check your internet connection or try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl border p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Request received</h3>
        <p className="text-gray-600 mb-6">
          Thanks — we&apos;ll confirm the best available room combination and company rate shortly.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="bg-transparent"
        >
          Submit another request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border p-6 sm:p-8 space-y-5">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
            Company name *
          </Label>
          <Input
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            className="mt-1"
            placeholder="Your company"
          />
        </div>
        <div>
          <Label htmlFor="contactPerson" className="text-sm font-medium text-gray-700">
            Contact person *
          </Label>
          <Input
            id="contactPerson"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            className="mt-1"
            placeholder="Full name"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone / WhatsApp *
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            className="mt-1"
            placeholder="074 524 5703"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isSubmitting}
            className="mt-1"
            placeholder="you@company.co.za"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="guestCount" className="text-sm font-medium text-gray-700">
          Number of guests *
        </Label>
        <Input
          id="guestCount"
          name="guestCount"
          type="number"
          min="1"
          value={formData.guestCount}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className="mt-1"
          placeholder="e.g., 4"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="arrivalDate" className="text-sm font-medium text-gray-700">
            Arrival date *
          </Label>
          <Input
            id="arrivalDate"
            name="arrivalDate"
            type="date"
            value={formData.arrivalDate}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="departureDate" className="text-sm font-medium text-gray-700">
            Departure date *
          </Label>
          <Input
            id="departureDate"
            name="departureDate"
            type="date"
            value={formData.departureDate}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="workLocation" className="text-sm font-medium text-gray-700">
          Work / project location *
        </Label>
        <Input
          id="workLocation"
          name="workLocation"
          value={formData.workLocation}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className="mt-1"
          placeholder="e.g., Sacks Circle Industrial"
        />
      </div>

      <div>
        <Label htmlFor="specialRequirements" className="text-sm font-medium text-gray-700">
          Special requirements
        </Label>
        <Textarea
          id="specialRequirements"
          name="specialRequirements"
          value={formData.specialRequirements}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="mt-1"
          placeholder="Anything else we should know"
          rows={3}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full bg-sage-600 hover:bg-sage-700 text-white"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          "Request Company Accommodation"
        )}
      </Button>
    </form>
  )
}

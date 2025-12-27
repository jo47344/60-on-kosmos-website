"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export function ContractorQuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      // Simulate form submission - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
      ;(e.target as HTMLFormElement).reset()
    } catch (err) {
      setError("Failed to submit quote request. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Quote Request Received!</h3>
            <p className="text-gray-600 mb-4">
              Thank you for your inquiry. We'll review your requirements and send you a confidential quote within 2
              hours during business hours.
            </p>
            <Button onClick={() => setIsSuccess(false)}>Submit Another Request</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Request Contractor Quote</CardTitle>
        <CardDescription>
          Fill out the form below to receive a confidential quote tailored to your project needs. All information is
          kept strictly private.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name *</Label>
              <Input id="companyName" name="companyName" required placeholder="ABC Construction Ltd" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactPerson">Contact Person *</Label>
              <Input id="contactPerson" name="contactPerson" required placeholder="John Smith" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" name="phone" type="tel" required placeholder="074 524 5703" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectLocation">Project Location *</Label>
            <Select name="projectLocation" required>
              <SelectTrigger>
                <SelectValue placeholder="Select project area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tygerberg">Tygerberg Hospital Area</SelectItem>
                <SelectItem value="n1city">N1 City Area</SelectItem>
                <SelectItem value="airport">Airport Area</SelectItem>
                <SelectItem value="bellville">Bellville CBD</SelectItem>
                <SelectItem value="other">Other - Cape Town</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration">Project Duration *</Label>
              <Select name="duration" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-3months">1-3 months</SelectItem>
                  <SelectItem value="3-6months">3-6 months</SelectItem>
                  <SelectItem value="6-12months">6-12 months</SelectItem>
                  <SelectItem value="12plus">12+ months</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="roomsNeeded">Number of Rooms *</Label>
              <Select name="roomsNeeded" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select rooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 room</SelectItem>
                  <SelectItem value="2">2 rooms</SelectItem>
                  <SelectItem value="3">3 rooms</SelectItem>
                  <SelectItem value="4">4 rooms</SelectItem>
                  <SelectItem value="5plus">5+ rooms</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="checkInDate">Estimated Check-in Date</Label>
            <Input id="checkInDate" name="checkInDate" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalRequirements">Additional Requirements</Label>
            <Textarea
              id="additionalRequirements"
              name="additionalRequirements"
              placeholder="Any special requirements, preferences, or questions..."
              rows={4}
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
              <AlertCircle className="w-5 h-5" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
            <p className="flex items-start gap-2">
              <span className="text-green-600 font-bold">🔒</span>
              <span>
                Your information is confidential and used only for providing accurate quotes. We respect your privacy
                and will never share your details with third parties.
              </span>
            </p>
          </div>

          <Button type="submit" size="lg" className="w-full bg-[#16a34a] hover:bg-[#15803d]" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Request Confidential Quote"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

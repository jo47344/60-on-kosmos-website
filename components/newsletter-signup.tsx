"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"
import { trackNewsletterSignup } from "@/lib/analytics"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage("Thanks! Check your email for accommodation tips.")
        setEmail("")
        trackNewsletterSignup()
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Network error. Please try again.")
    }

    setTimeout(() => setStatus("idle"), 5000)
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-sage-50 to-white border-sage-200">
      <div className="flex items-center mb-4">
        <Mail className="w-6 h-6 text-sage-600 mr-3" />
        <h3 className="text-xl font-bold text-gray-900">Get Accommodation Tips</h3>
      </div>
      <p className="text-gray-600 mb-4 text-sm">
        Get our <strong>FREE Complete Guide to Bellville South</strong> PDF (20 pages!) plus exclusive deals and Cape
        Town travel tips delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "loading"}
          className="w-full"
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-sage-600 hover:bg-sage-700 text-white"
        >
          {status === "loading" ? "Subscribing..." : "Get Free Guide"}
        </Button>
      </form>

      {status === "success" && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-start">
          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-green-800">{message}</p>
        </div>
      )}

      {status === "error" && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start">
          <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-red-800">{message}</p>
        </div>
      )}

      <p className="text-xs text-gray-500 mt-3">We respect your privacy. Unsubscribe anytime.</p>
    </Card>
  )
}

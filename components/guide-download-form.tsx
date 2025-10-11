"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

export function GuideDownloadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/download-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage("Success! Check your email for the download link.")

        // Track the guide download
        trackEvent("guide_download", {
          event_category: "conversion",
          event_label: "bellville_south_guide",
          value: 8,
        })

        // Trigger actual download
        if (data.downloadUrl) {
          window.open(data.downloadUrl, "_blank")
        }

        setFormData({ name: "", email: "" })
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Network error. Please try again.")
    }

    setTimeout(() => setStatus("idle"), 8000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
          Your Name
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="John Smith"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          disabled={status === "loading"}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          disabled={status === "loading"}
          className="mt-1"
        />
      </div>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-sage-600 hover:bg-sage-700 text-white font-semibold py-3"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Preparing Your Guide...
          </>
        ) : (
          "Download Free Guide"
        )}
      </Button>

      {status === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-green-800">Download Started!</p>
            <p className="text-sm text-green-700 mt-1">{message}</p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
          <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-red-800">Oops!</p>
            <p className="text-sm text-red-700 mt-1">{message}</p>
          </div>
        </div>
      )}
    </form>
  )
}

"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { analyticsAllowed, setAnalyticsOptOut } from "@/lib/analytics-consent"
import { clearStoredAttribution } from "@/lib/analytics-attribution"

export function AnalyticsOptOut() {
  const [allowed, setAllowed] = useState<boolean | null>(null)

  useEffect(() => {
    setAllowed(analyticsAllowed())
  }, [])

  if (allowed === null) return null

  const toggle = () => {
    const optOut = allowed
    setAnalyticsOptOut(optOut)
    if (optOut) clearStoredAttribution()
    setAllowed(!optOut)
  }

  return (
    <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
      <p className="text-muted-foreground text-sm" role="status">
        Website analytics on this device: <strong>{allowed ? "on" : "off"}</strong>
      </p>
      <Button type="button" variant="outline" size="sm" onClick={toggle} className="bg-transparent w-fit">
        {allowed ? "Turn off analytics on this device" : "Turn analytics back on"}
      </Button>
    </div>
  )
}

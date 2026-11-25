"use client"

import { useEffect, useRef, useState } from "react"
import { trackWhatsAppClick, trackEvent } from "@/lib/analytics"

export function StayEstimate() {
  const frame = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(2300)
  useEffect(() => {
    function receive(event: MessageEvent) {
      if (event.origin !== window.location.origin || event.source !== frame.current?.contentWindow) return
      if (event.data?.type === "kosmos-estimate-height" && Number.isFinite(event.data.height)) {
        setHeight(Math.max(800, Math.min(14000, event.data.height)))
      }
      if (event.data?.type === "kosmos-estimate-whatsapp") trackWhatsAppClick("link")
      if (event.data?.type === "kosmos-estimate-event" && ["estimate_calculated", "estimate_pdf_ready"].includes(event.data.name)) {
        trackEvent(event.data.name, {}, event.data.name)
      }
    }
    window.addEventListener("message", receive)
    return () => window.removeEventListener("message", receive)
  }, [])
  return <section id="stay-estimate" aria-label="Accommodation estimate calculator">
    <iframe ref={frame} src="/stay-estimate/index.html?embedded=1" title="Calculate your accommodation estimate"
      style={{ width: "100%", height, border: 0, display: "block" }} />
    <p className="text-sm text-center py-3"><a href="/stay-estimate/index.html" className="underline">Open the calculator in its own page</a></p>
  </section>
}

"use client"

import { useEffect } from "react"

export function PerformanceOptimizations() {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = ["/images/sage-double-room.png", "/images/twin-room-yellow.png", "/images/twin-room-black.png"]

    preloadLinks.forEach((href) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "image"
      link.href = href
      document.head.appendChild(link)
    })

    // Optimize third-party scripts
    const optimizeScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src*="analytics"], script[src*="gtag"]')
      scripts.forEach((script) => {
        script.setAttribute("defer", "")
      })
    }

    optimizeScripts()

    // Intersection Observer for lazy loading
    const observerOptions = {
      root: null,
      rootMargin: "50px",
      threshold: 0.1,
    }

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.removeAttribute("data-src")
            imageObserver.unobserve(img)
          }
        }
      })
    }, observerOptions)

    // Observe images for lazy loading
    const lazyImages = document.querySelectorAll("img[data-src]")
    lazyImages.forEach((img) => imageObserver.observe(img))

    return () => {
      imageObserver.disconnect()
    }
  }, [])

  return null
}

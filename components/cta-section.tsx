import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail } from "lucide-react"

interface CTASectionProps {
  variant?: "primary" | "contractor" | "emergency"
  className?: string
}

export function CTASection({ variant = "primary", className = "" }: CTASectionProps) {
  const variants = {
    primary: {
      headline: "Ready to Book Your Stay?",
      subtext: "Experience affordable, comfortable accommodation in Bellville South. Book direct for the best rates!",
      bgColor: "bg-[#7c9885]",
    },
    contractor: {
      headline: "Get Your Custom Contractor Quote",
      subtext:
        "Confidential quotes within 2 hours. Special rates for long-term projects and multiple rooms. Custom pricing for your project needs.",
      bgColor: "bg-[#1e3a8a]",
    },
    emergency: {
      headline: "Need Accommodation Tonight?",
      subtext: "We're here to help. Call us now for immediate availability and same-day check-in.",
      bgColor: "bg-[#ea580c]",
    },
  }

  const config = variants[variant]

  return (
    <section className={`py-16 ${config.bgColor} text-white ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{config.headline}</h2>
        <p className="text-lg md:text-xl mb-8 opacity-95">{config.subtext}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg">
            <a href="https://wa.me/27745245703?text=Hi%2C%20I%27d%20like%20to%20book%20accommodation">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
          >
            <a href="tel:+27745245703">
              <Phone className="mr-2 h-5 w-5" />
              Call 074 524 5703
            </a>
          </Button>

          {variant !== "emergency" && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
            >
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Email Quote
              </Link>
            </Button>
          )}
        </div>

        {variant === "contractor" && (
          <div className="mt-6 text-sm opacity-90">
            <p>✓ Confidential pricing • ✓ Volume discounts • ✓ Flexible payment terms</p>
          </div>
        )}
      </div>
    </section>
  )
}

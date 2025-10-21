import type { Metadata } from "next"
import Link from "next/link"
import { Check, X, MessageCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Guesthouse vs Airbnb in Bellville | 60 on Kosmos Comparison",
  description:
    "Compare guesthouse vs Airbnb accommodation in Bellville. Discover why 60 on Kosmos offers more reliability, better value, and professional service without hidden fees.",
  keywords:
    "guesthouse vs airbnb bellville, airbnb alternative bellville, reliable accommodation bellville, no booking fees",
}

export default function GuesthouseVsAirbnbPage() {
  const whatsappNumber = "27823254286"
  const whatsappMessage = encodeURIComponent("Hi! I'd like to book accommodation at 60 on Kosmos.")

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://60onkosmos.co.za",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Guesthouse vs Airbnb",
                item: "https://60onkosmos.co.za/guesthouse-vs-airbnb-bellville",
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16">
        <div className="container mx-auto px-4">
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Guesthouse vs Airbnb</span>
          </nav>

          <h1 className="mb-6 text-4xl font-bold text-balance md:text-5xl">Guesthouse vs Airbnb in Bellville</h1>
          <p className="max-w-3xl text-lg text-muted-foreground text-pretty">
            Why 60 on Kosmos offers more reliability, better value, and professional service compared to Airbnb rentals
            in Bellville.
          </p>
        </div>
      </section>

      {/* Key Differences */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">The Real Differences</h2>

          <div className="mx-auto max-w-5xl overflow-x-auto">
            <table className="w-full rounded-lg border bg-card">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center bg-primary/5">60 on Kosmos</th>
                  <th className="p-4 text-center">Typical Airbnb</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Booking Fees</td>
                  <td className="p-4 text-center bg-primary/5">
                    <span className="text-primary font-bold">R0</span>
                  </td>
                  <td className="p-4 text-center text-muted-foreground">10-15% service fee</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Cleaning Fee</td>
                  <td className="p-4 text-center bg-primary/5">
                    <span className="text-primary font-semibold">Included</span>
                  </td>
                  <td className="p-4 text-center text-muted-foreground">R300-R800 extra</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Consistency</td>
                  <td className="p-4 text-center bg-primary/5">
                    <div className="flex flex-col items-center gap-1">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-xs">Same quality always</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                      <span className="text-xs text-muted-foreground">Varies by host</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Professional Management</td>
                  <td className="p-4 text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center text-muted-foreground">Individual hosts</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Cancellation Risk</td>
                  <td className="p-4 text-center bg-primary/5">
                    <span className="text-primary font-semibold">Very Low</span>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                      <span className="text-xs text-muted-foreground">Host can cancel</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">On-Site Support</td>
                  <td className="p-4 text-center bg-primary/5">
                    <div className="flex flex-col items-center gap-1">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-xs">Always available</span>
                    </div>
                  </td>
                  <td className="p-4 text-center text-muted-foreground">Remote host</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Weekly Cleaning</td>
                  <td className="p-4 text-center bg-primary/5">
                    <div className="flex flex-col items-center gap-1">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-xs">Included free</span>
                    </div>
                  </td>
                  <td className="p-4 text-center text-muted-foreground">Extra fee or DIY</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Business Invoices</td>
                  <td className="p-4 text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Long-term Discounts</td>
                  <td className="p-4 text-center bg-primary/5">
                    <div className="flex flex-col items-center gap-1">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-xs">Up to 30% off</span>
                    </div>
                  </td>
                  <td className="p-4 text-center text-muted-foreground">Varies by host</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Booking Process</td>
                  <td className="p-4 text-center bg-primary/5">
                    <span className="text-sm">WhatsApp - instant</span>
                  </td>
                  <td className="p-4 text-center text-muted-foreground">Request & wait</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hidden Costs */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold">The Hidden Costs of Airbnb</h2>
          <p className="mb-12 text-center text-muted-foreground">What you actually pay vs what you see</p>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-lg border-2 border-primary bg-card p-8">
              <h3 className="mb-6 text-center text-2xl font-bold text-primary">60 on Kosmos</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Room (7 nights @ R450)</span>
                  <span className="font-semibold">R3,150</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Fee</span>
                  <span className="font-semibold text-primary">R0</span>
                </div>
                <div className="flex justify-between">
                  <span>Cleaning Fee</span>
                  <span className="font-semibold text-primary">R0</span>
                </div>
                <div className="flex justify-between">
                  <span>Booking Fee</span>
                  <span className="font-semibold text-primary">R0</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total You Pay</span>
                    <span className="text-primary">R3,150</span>
                  </div>
                  <p className="mt-2 text-sm text-primary">✓ What you see is what you pay</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-8">
              <h3 className="mb-6 text-center text-2xl font-bold">Typical Airbnb</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Room (7 nights @ R500)</span>
                  <span className="font-semibold">R3,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Fee (14%)</span>
                  <span className="font-semibold">R490</span>
                </div>
                <div className="flex justify-between">
                  <span>Cleaning Fee</span>
                  <span className="font-semibold">R500</span>
                </div>
                <div className="flex justify-between">
                  <span>Booking Fee</span>
                  <span className="font-semibold">R150</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total You Pay</span>
                    <span>R4,640</span>
                  </div>
                  <p className="mt-2 text-sm text-destructive font-semibold">R1,490 MORE than advertised</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="mb-6 rounded-lg bg-primary/10 p-6 inline-block">
              <p className="text-2xl font-bold text-primary">Save R1,490 per week with transparent pricing!</p>
              <p className="mt-2 text-muted-foreground">No hidden fees, no surprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Airbnb Problems */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Common Airbnb Problems We Solve</h2>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4 flex items-start gap-3">
                <AlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-600" />
                <div>
                  <h3 className="mb-2 font-semibold">"Photos Don't Match Reality"</h3>
                  <p className="text-sm text-muted-foreground">
                    With 60 on Kosmos, what you see is what you get. Our photos are accurate and we maintain consistent
                    quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4 flex items-start gap-3">
                <AlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-600" />
                <div>
                  <h3 className="mb-2 font-semibold">"Host Cancelled Last Minute"</h3>
                  <p className="text-sm text-muted-foreground">
                    We're a professional guesthouse, not an individual. Your booking is guaranteed and we're always
                    here.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4 flex items-start gap-3">
                <AlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-600" />
                <div>
                  <h3 className="mb-2 font-semibold">"Can't Reach the Host"</h3>
                  <p className="text-sm text-muted-foreground">
                    We're on-site and available. Message us on WhatsApp anytime for immediate assistance.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4 flex items-start gap-3">
                <AlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-600" />
                <div>
                  <h3 className="mb-2 font-semibold">"Surprise Fees at Checkout"</h3>
                  <p className="text-sm text-muted-foreground">
                    Our price is our price. No hidden fees, no cleaning charges, no surprises.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4 flex items-start gap-3">
                <AlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-600" />
                <div>
                  <h3 className="mb-2 font-semibold">"Inconsistent Cleanliness"</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional weekly cleaning service included. We maintain high standards across all rooms.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4 flex items-start gap-3">
                <AlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-600" />
                <div>
                  <h3 className="mb-2 font-semibold">"No Business Invoices"</h3>
                  <p className="text-sm text-muted-foreground">
                    We provide proper invoices for business travelers and contractors who need to claim expenses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Choose Each */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Which is Right for You?</h2>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-lg border-2 border-primary bg-card p-6">
              <h3 className="mb-4 text-xl font-bold text-primary">Choose 60 on Kosmos If You:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Want guaranteed availability and no cancellations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Need transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Require professional service and support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Need business invoices for expenses</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Want consistent quality every time</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Staying for weeks or months</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-xl font-bold">Choose Airbnb If You:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  <span>Want a unique or quirky property</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  <span>Need an entire house for a group</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  <span>Don't mind variable quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  <span>Can handle host cancellations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  <span>Don't need professional invoices</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  <span>Are okay with hidden fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Book with Confidence Today</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Professional service, transparent pricing, guaranteed availability
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
                <MessageCircle className="h-5 w-5" />
                Book on WhatsApp
              </Button>
            </Link>
            <Link href="/rooms">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                View Our Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

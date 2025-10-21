import type { Metadata } from "next"
import Link from "next/link"
import { Check, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Guesthouse vs Hotel in Bellville | 60 on Kosmos Comparison",
  description:
    "Compare guesthouse vs hotel accommodation in Bellville. See why 60 on Kosmos offers better value, more space, and superior amenities than traditional hotels.",
  keywords:
    "guesthouse vs hotel bellville, bellville accommodation comparison, hotel alternative bellville, best value accommodation",
}

export default function GuesthouseVsHotelPage() {
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
                name: "Guesthouse vs Hotel",
                item: "https://60onkosmos.co.za/guesthouse-vs-hotel-bellville",
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
            <span className="text-foreground">Guesthouse vs Hotel</span>
          </nav>

          <h1 className="mb-6 text-4xl font-bold text-balance md:text-5xl">Guesthouse vs Hotel in Bellville</h1>
          <p className="max-w-3xl text-lg text-muted-foreground text-pretty">
            Discover why choosing a guesthouse like 60 on Kosmos offers better value, more space, and superior amenities
            compared to traditional hotels in Bellville.
          </p>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Side-by-Side Comparison</h2>

          <div className="mx-auto max-w-5xl overflow-x-auto">
            <table className="w-full rounded-lg border bg-card">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center bg-primary/5">60 on Kosmos Guesthouse</th>
                  <th className="p-4 text-center">Typical Bellville Hotel</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Average Nightly Rate</td>
                  <td className="p-4 text-center bg-primary/5">
                    <span className="text-primary font-bold">R450-R650</span>
                  </td>
                  <td className="p-4 text-center text-muted-foreground">R800-R1500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Room Size</td>
                  <td className="p-4 text-center bg-primary/5">
                    <span className="text-primary font-semibold">Spacious 25-30m²</span>
                  </td>
                  <td className="p-4 text-center text-muted-foreground">Standard 18-22m²</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Kitchen Facilities</td>
                  <td className="p-4 text-center bg-primary/5">
                    <div className="flex flex-col items-center gap-1">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-xs">Full kitchen</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <X className="h-5 w-5 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">None</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Parking</td>
                  <td className="p-4 text-center bg-primary/5">
                    <div className="flex flex-col items-center gap-1">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-xs">Free & Secure</span>
                    </div>
                  </td>
                  <td className="p-4 text-center text-muted-foreground">R50-R150/day</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Breakfast</td>
                  <td className="p-4 text-center bg-primary/5">
                    <span className="text-sm">Cook your own & save</span>
                  </td>
                  <td className="p-4 text-center text-muted-foreground">R120-R180 extra</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Laundry Facilities</td>
                  <td className="p-4 text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center text-muted-foreground">R50-R80/load</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Weekly Cleaning</td>
                  <td className="p-4 text-center bg-primary/5">
                    <div className="flex flex-col items-center gap-1">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-xs">Included</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <Check className="h-5 w-5 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Daily</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Monthly Rates</td>
                  <td className="p-4 text-center bg-primary/5">
                    <div className="flex flex-col items-center gap-1">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-xs">Up to 30% off</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Personal Service</td>
                  <td className="p-4 text-center bg-primary/5">
                    <div className="flex flex-col items-center gap-1">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-xs">Direct owner contact</span>
                    </div>
                  </td>
                  <td className="p-4 text-center text-muted-foreground">Corporate service</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Booking Process</td>
                  <td className="p-4 text-center bg-primary/5">
                    <span className="text-sm">WhatsApp - instant</span>
                  </td>
                  <td className="p-4 text-center text-muted-foreground">Online forms & calls</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold">Real Cost Comparison</h2>
          <p className="mb-12 text-center text-muted-foreground">See how much you actually save over a typical stay</p>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-lg border-2 border-primary bg-card p-8">
              <h3 className="mb-6 text-center text-2xl font-bold text-primary">60 on Kosmos</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Room (7 nights)</span>
                  <span className="font-semibold">R3,150</span>
                </div>
                <div className="flex justify-between">
                  <span>Parking</span>
                  <span className="font-semibold text-primary">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Kitchen (save on meals)</span>
                  <span className="font-semibold text-primary">-R1,400</span>
                </div>
                <div className="flex justify-between">
                  <span>Laundry</span>
                  <span className="font-semibold text-primary">Free</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total Cost</span>
                    <span className="text-primary">R1,750</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Effective cost after meal savings</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-8">
              <h3 className="mb-6 text-center text-2xl font-bold">Typical Hotel</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Room (7 nights)</span>
                  <span className="font-semibold">R7,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Parking (7 days)</span>
                  <span className="font-semibold">R700</span>
                </div>
                <div className="flex justify-between">
                  <span>Meals (eating out)</span>
                  <span className="font-semibold">R2,100</span>
                </div>
                <div className="flex justify-between">
                  <span>Laundry (2 loads)</span>
                  <span className="font-semibold">R120</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total Cost</span>
                    <span>R9,920</span>
                  </div>
                  <p className="mt-2 text-sm text-destructive font-semibold">You pay R8,170 MORE</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="mb-6 rounded-lg bg-primary/10 p-6 inline-block">
              <p className="text-2xl font-bold text-primary">Save R8,170 per week by choosing 60 on Kosmos!</p>
              <p className="mt-2 text-muted-foreground">That's over R32,000 saved per month</p>
            </div>
            <div>
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Book Direct & Save
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* When to Choose Each */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Which is Right for You?</h2>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-lg border-2 border-primary bg-card p-6">
              <h3 className="mb-4 text-xl font-bold text-primary">Choose 60 on Kosmos If You:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Want to save money on accommodation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Prefer cooking your own meals</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Need accommodation for weeks or months</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Value space and privacy</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Want personal, friendly service</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Work at Tygerberg Hospital or UWC</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-xl font-bold">Choose a Hotel If You:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  <span>Only staying 1-2 nights</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  <span>Need daily housekeeping</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  <span>Want 24/7 reception desk</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  <span>Prefer eating out for every meal</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  <span>Have an unlimited budget</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  <span>Need conference facilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Experience Better Value Today</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Join hundreds of satisfied guests who chose smart accommodation
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

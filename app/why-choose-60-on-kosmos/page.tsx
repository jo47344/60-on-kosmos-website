import type { Metadata } from "next"
import Link from "next/link"
import { Check, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Why Choose 60 on Kosmos | Best Value Accommodation in Bellville",
  description:
    "Discover why 60 on Kosmos offers the best value accommodation in Bellville. Compare our rates, amenities, and service to see why guests choose us over hotels and Airbnb.",
  keywords:
    "why choose 60 on kosmos, best guesthouse bellville, value accommodation cape town, bellville accommodation comparison",
}

export default function WhyChoosePage() {
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
                name: "Why Choose Us",
                item: "https://60onkosmos.co.za/why-choose-60-on-kosmos",
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
            <span className="text-foreground">Why Choose Us</span>
          </nav>

          <h1 className="mb-6 text-4xl font-bold text-balance md:text-5xl">Why Choose 60 on Kosmos?</h1>
          <p className="max-w-3xl text-lg text-muted-foreground text-pretty">
            Discover what makes 60 on Kosmos the smart choice for accommodation in Bellville South. Better value, better
            service, better location.
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">What Sets Us Apart</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Unbeatable Value</h3>
              <p className="text-muted-foreground">
                From R450/night with no hidden fees. Save 40-60% compared to hotels while getting more space and
                amenities.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Prime Location</h3>
              <p className="text-muted-foreground">
                5 minutes to Tygerberg Hospital, 10 minutes to UWC, easy N1 access. Perfect for medical staff, students,
                and contractors.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Flexible Booking</h3>
              <p className="text-muted-foreground">
                Daily, weekly, or monthly rates. No minimum stay. Book direct via WhatsApp for instant confirmation.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Self-Catering Freedom</h3>
              <p className="text-muted-foreground">
                Fully equipped kitchens in every room. Cook your own meals and save even more money during your stay.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Weekly Cleaning</h3>
              <p className="text-muted-foreground">
                Professional cleaning service included weekly. Fresh linens and towels provided at no extra cost.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Secure Parking</h3>
              <p className="text-muted-foreground">
                Free on-site parking behind secure gates. Your vehicle is safe and protected throughout your stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold">Compare the Value</h2>
          <p className="mb-12 text-center text-muted-foreground">See how much you save by choosing 60 on Kosmos</p>

          <div className="mx-auto max-w-4xl overflow-x-auto">
            <table className="w-full rounded-lg border bg-card">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">60 on Kosmos</th>
                  <th className="p-4 text-center">Hotels</th>
                  <th className="p-4 text-center">Airbnb</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Nightly Rate</td>
                  <td className="p-4 text-center text-primary font-semibold">From R450</td>
                  <td className="p-4 text-center text-muted-foreground">R800-R1500</td>
                  <td className="p-4 text-center text-muted-foreground">R600-R1200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Kitchen Facilities</td>
                  <td className="p-4 text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </td>
                  <td className="p-4 text-center">
                    <X className="mx-auto h-5 w-5 text-muted-foreground" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="mx-auto h-5 w-5 text-muted-foreground" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Free Parking</td>
                  <td className="p-4 text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </td>
                  <td className="p-4 text-center text-muted-foreground">R50-R150/day</td>
                  <td className="p-4 text-center">
                    <Check className="mx-auto h-5 w-5 text-muted-foreground" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Weekly Cleaning</td>
                  <td className="p-4 text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="mx-auto h-5 w-5 text-muted-foreground" />
                  </td>
                  <td className="p-4 text-center text-muted-foreground">Extra Fee</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Monthly Discounts</td>
                  <td className="p-4 text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </td>
                  <td className="p-4 text-center">
                    <X className="mx-auto h-5 w-5 text-muted-foreground" />
                  </td>
                  <td className="p-4 text-center text-muted-foreground">Varies</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Booking Fees</td>
                  <td className="p-4 text-center text-primary font-semibold">R0</td>
                  <td className="p-4 text-center text-muted-foreground">Varies</td>
                  <td className="p-4 text-center text-muted-foreground">10-15%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                Book Direct on WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Guest Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">What Our Guests Say</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">
                "Best value for money in Bellville! Clean, comfortable, and the kitchen saved me so much on food costs
                during my 3-month contract."
              </p>
              <p className="font-semibold">- John M., Contractor</p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">
                "Perfect location for Tygerberg Hospital. I can get to work in 5 minutes. Much better than expensive
                hotels in the area."
              </p>
              <p className="font-semibold">- Dr. Sarah L., Medical Staff</p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">
                "Booking via WhatsApp was so easy! No complicated forms or hidden fees. Highly recommend for anyone
                working in the area."
              </p>
              <p className="font-semibold">- Mike T., Business Traveler</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Experience the Difference?</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Book direct and save. No booking fees, no hidden costs.
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

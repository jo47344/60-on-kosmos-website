import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LocalBusinessSchema } from "@/components/local-business-schema"

export const metadata: Metadata = {
  title: "Terms & House Rules | 60 on Kosmos Guest House",
  description: "Booking terms, cancellation policy, and house rules for 60 on Kosmos Guest House in Bellville South.",
  alternates: {
    canonical: "https://60onkosmos.co.za/terms",
  },
}

export default function TermsPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-sage-700 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Terms & House Rules</h1>
            <p className="text-lg text-sage-100">Please read before booking</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Cancellation Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Cancellation Policy</h2>

            <div className="bg-muted rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-lg mb-3">Before Check-In</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong>48+ hours notice:</strong> Full refund
                </li>
                <li>
                  <strong>Under 48 hours:</strong> First night charged
                </li>
                <li>
                  <strong>No-show:</strong> Full booking charged
                </li>
              </ul>
            </div>

            <div className="bg-muted rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-lg mb-3">After Check-In</h3>
              <p className="text-muted-foreground mb-3">
                Once checked in, accommodation fees are non-refundable. If you need to leave early:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong>Days used:</strong> Charged in full
                </li>
                <li>
                  <strong>Remaining days:</strong> Credit note for future stay (valid 6 months)
                </li>
                <li>
                  <strong>No cash refunds</strong> after check-in
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3 italic">
                Exception: Medical emergency or death in family (with proof) - pro-rata refund minus 1 night admin fee.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-amber-800">Monthly Bookings (14+ nights)</h3>
              <p className="text-amber-700">7 days written notice required for cancellation or early departure.</p>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Payment Terms</h2>
            <div className="bg-muted rounded-lg p-6">
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <strong>Short stays (1-6 nights):</strong> Full payment due on booking
                </li>
                <li>
                  <strong>Weekly stays (7-13 nights):</strong> R50 deposit to secure booking, balance due on arrival
                </li>
                <li>
                  <strong>Monthly stays (14+ nights):</strong> 50% deposit to secure booking, balance due on arrival
                </li>
                <li>
                  <strong>Accepted methods:</strong> EFT, Cash
                </li>
              </ul>
            </div>
          </section>

          {/* Check-in/out */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Check-In & Check-Out</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-sage-600 mb-2">14:00</p>
                <p className="text-muted-foreground">Check-In Time</p>
              </div>
              <div className="bg-muted rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-sage-600 mb-2">10:00</p>
                <p className="text-muted-foreground">Check-Out Time</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Early check-in or late check-out may be available on request, subject to availability.
            </p>
          </section>

          {/* House Rules */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">House Rules</h2>
            <div className="bg-muted rounded-lg p-6">
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <strong>Quiet hours:</strong> 22:00 - 08:00
                </li>
                <li>
                  <strong>Smoking:</strong> Outside designated areas only, not in rooms
                </li>
                <li>
                  <strong>Visitors:</strong> No overnight visitors without prior arrangement
                </li>
                <li>
                  <strong>Parking:</strong> One vehicle per room, at owner's risk
                </li>
                <li>
                  <strong>Kitchen:</strong> Clean up after yourself, label your food
                </li>
                <li>
                  <strong>Laundry:</strong> No laundry machines on-site. 24/7 laundromat available at Spar Centre nearby
                </li>
                <li>
                  <strong>Damages:</strong> Guests are responsible for any damage to property
                </li>
              </ul>
            </div>
          </section>

          {/* Rates Notice */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Rates</h2>
            <div className="bg-muted rounded-lg p-6">
              <p className="text-muted-foreground mb-4">
                Current rates start from <strong>R530 per night</strong> for a Standard Room.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Rates are subject to change without notice. The rate confirmed at time of booking will be honoured for
                that booking.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-sage-50 rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold text-foreground mb-2">Questions?</h2>
            <p className="text-muted-foreground mb-4">Contact us if you need clarification on any of these terms.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+27745245703"
                className="inline-flex items-center justify-center bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-lg transition font-semibold"
              >
                Call: 074 524 5703
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-sage-600 text-sage-600 hover:bg-sage-50 px-6 py-3 rounded-lg transition font-semibold"
              >
                Contact Form
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

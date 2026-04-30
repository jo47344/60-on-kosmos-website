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
            <p className="text-lg text-sage-100">Please read before booking. By confirming a booking at 60 on Kosmos, you agree to these terms.</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Payment Terms */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Payment Terms</h2>

            <div className="bg-muted rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-lg mb-3">Short stays (1–6 nights)</h3>
              <p className="text-muted-foreground">
                Full payment due at time of booking to confirm reservation. EFT only — no cash accepted.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-lg mb-3">Weekly stays (7–27 nights)</h3>
              <p className="text-muted-foreground">
                50% deposit due at time of booking. Balance due on arrival via EFT.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-lg mb-3">Monthly stays (28+ nights)</h3>
              <p className="text-muted-foreground">
                First month&apos;s accommodation due in full before or on check-in. Subsequent months due on the 1st of each calendar month. Late payment may result in termination of stay.
              </p>
            </div>

            <div className="bg-sage-50 border border-sage-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Accepted payment methods</h3>
              <p className="text-muted-foreground mb-4">EFT (bank transfer) only. No cash. No payment on arrival for short stays.</p>
              
              <h4 className="font-semibold mb-2">Banking details for all payments:</h4>
              <div className="bg-white rounded p-4 text-sm space-y-1">
                <p><strong>Account Name:</strong> Giose Prop Investments PTY</p>
                <p><strong>Bank:</strong> ABSA Business Bank</p>
                <p><strong>Account No:</strong> 4114284574</p>
                <p><strong>Branch Code:</strong> 632005</p>
                <p><strong>Reference:</strong> Your name + room type</p>
              </div>
            </div>
          </section>

          {/* Security Deposit */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Security Deposit</h2>
            <div className="bg-muted rounded-lg p-6">
              <p className="text-muted-foreground mb-3">
                A refundable security deposit of <strong>R1,500</strong> is required for all stays of 7 nights or more.
              </p>
              <p className="text-muted-foreground mb-3">
                The deposit is returned via EFT within 7 days of checkout, subject to room inspection.
              </p>
              <p className="text-muted-foreground">
                Deductions may be made for damages, missing items, excessive cleaning required, or lost/unreturned keys (R500 replacement fee).
              </p>
            </div>
          </section>

          {/* Cancellation Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Cancellation Policy</h2>

            <div className="bg-muted rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-lg mb-3">Short stays (1–27 nights)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>7+ days before arrival:</strong> Full refund minus R500 admin fee</li>
                <li><strong>48 hours to 7 days before arrival:</strong> 50% refund</li>
                <li><strong>Under 48 hours before arrival:</strong> No refund</li>
                <li><strong>No-show:</strong> Full booking amount forfeited</li>
              </ul>
            </div>

            <div className="bg-muted rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-lg mb-3">Monthly stays (28+ nights)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>30+ days before arrival:</strong> Full refund minus R1,500 admin fee</li>
                <li><strong>14–29 days before arrival:</strong> First month non-refundable, balance refunded</li>
                <li><strong>Under 14 days before arrival:</strong> First month non-refundable</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-lg mb-3 text-amber-800">Early departure from monthly stays</h3>
              <p className="text-amber-700 mb-2">
                Written notice of 20 business days required for early departure, in compliance with the Consumer Protection Act.
              </p>
              <p className="text-amber-700 mb-2">
                No refund for unused nights within a paid month.
              </p>
              <p className="text-amber-700">
                Security deposit returned within 7 days of checkout if no damages.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Exceptions</h3>
              <p className="text-muted-foreground">
                Medical emergency or death in immediate family (documentary proof required): pro-rata refund minus one night admin fee, at management&apos;s discretion.
              </p>
            </div>
          </section>

          {/* Check-in/out */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Check-In & Check-Out</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-muted rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-sage-600 mb-2">14:00 – 20:00</p>
                <p className="text-muted-foreground">Check-In Time</p>
              </div>
              <div className="bg-muted rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-sage-600 mb-2">10:00</p>
                <p className="text-muted-foreground">Check-Out Time</p>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <ul className="space-y-2 text-muted-foreground">
                <li>Late check-in after 20:00 must be arranged in advance via WhatsApp</li>
                <li>Early check-in and late check-out subject to availability and may incur an additional charge</li>
                <li>Valid South African ID or passport required from all guests at check-in</li>
                <li>International guests must present a valid passport and visa documentation</li>
              </ul>
            </div>
          </section>

          {/* What's Included */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">What&apos;s Included</h2>
            <div className="bg-sage-50 border border-sage-200 rounded-lg p-6">
              <p className="text-muted-foreground mb-3">Every room rate includes:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Private ensuite bathroom with hot water 24/7</li>
                <li>• Weekly cleaning service with fresh linen and towel change</li>
                <li>• Free high-speed WiFi</li>
                <li>• Secure parking (one vehicle per room)</li>
                <li>• Welcome refreshments at check-in (tea, coffee, milk)</li>
                <li>• Access to communal self-catering kitchen</li>
              </ul>
            </div>
          </section>

          {/* What's Not Included */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">What&apos;s Not Included</h2>
            <div className="bg-muted rounded-lg p-6">
              <ul className="space-y-2 text-muted-foreground">
                <li>• Daily cleaning (weekly service only)</li>
                <li>• Meals or catering of any kind</li>
                <li>• Laundry service (24/7 laundromat available at Spar Kasselsvlei Centre, 2km away)</li>
                <li>• Personal consumables beyond welcome kit</li>
                <li>• Electricity beyond reasonable residential use — excessive usage may result in a surcharge</li>
              </ul>
            </div>
          </section>

          {/* House Rules */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">House Rules</h2>
            <div className="space-y-4">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold mb-2">Quiet hours</h3>
                <p className="text-muted-foreground">22:00 – 08:00. Noise and disruptive activity during these hours will result in a formal warning. Repeat offences may result in immediate termination of stay without refund.</p>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold mb-2">Smoking</h3>
                <p className="text-muted-foreground">Strictly outside only in the designated outdoor area. No smoking inside rooms, bathrooms, or covered areas. Violation results in forfeiture of security deposit.</p>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold mb-2">Visitors</h3>
                <p className="text-muted-foreground">No overnight visitors without prior written approval from management. Day visitors must be signed in and may not access guest rooms without the host present.</p>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold mb-2">Parking</h3>
                <p className="text-muted-foreground">One vehicle per room, parked at owner&apos;s risk. No unauthorised vehicles. Work vehicles and bakkies welcome in designated areas.</p>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold mb-2">Kitchen & communal areas</h3>
                <p className="text-muted-foreground">Clean up after yourself. Label your food. Communal areas are shared — treat them with respect.</p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold mb-2 text-red-800">Prohibited appliances</h3>
                <p className="text-red-700">Personal plug-in heaters, bar heaters, gas heaters, hotplates, and any high-wattage appliances over 1,000W are strictly prohibited in rooms. This is a firm fire safety and electrical capacity rule enforced for all guests. Violation will result in immediate removal of the appliance and may result in termination of stay. Approved heating alternatives are available from management on request — please enquire before bringing personal heating equipment.</p>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold mb-2">Damages</h3>
                <p className="text-muted-foreground">Guests are financially responsible for any damage to property, furniture, or fittings caused during their stay. Costs will be deducted from the security deposit or invoiced directly.</p>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold mb-2">Keys & access</h3>
                <p className="text-muted-foreground">Lost or unreturned keys incur a R500 replacement fee.</p>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold mb-2">Maximum occupancy</h3>
                <p className="text-muted-foreground">Room occupancy limits must be respected at all times. Exceeding stated occupancy without prior approval is grounds for immediate termination of stay.</p>
              </div>
            </div>
          </section>

          {/* Rates Notice */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Rates</h2>
            <div className="bg-muted rounded-lg p-6">
              <p className="text-muted-foreground mb-4">
                Current rates start from <strong>R580/night</strong> (Standard Twin Room, 1–6 nights). Monthly contractor rates from <strong>R464/night</strong>.
              </p>
              <p className="text-sm text-muted-foreground italic">
                All rates confirmed at time of booking are honoured for that booking period. Rates are subject to change for new bookings without prior notice.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-sage-50 rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold text-foreground mb-2">Questions?</h2>
            <p className="text-muted-foreground mb-4">Contact us if you need clarification on any of these terms.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/27745245703"
                className="inline-flex items-center justify-center bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-lg transition font-semibold"
              >
                WhatsApp: 074 524 5703
              </Link>
              <Link
                href="mailto:info@60onkosmos.co.za"
                className="inline-flex items-center justify-center border border-sage-600 text-sage-600 hover:bg-sage-50 px-6 py-3 rounded-lg transition font-semibold"
              >
                Email: info@60onkosmos.co.za
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

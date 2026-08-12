import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | 60 on Kosmos Guest House",
  description: "How 60 on Kosmos Guest House collects, uses, and protects your personal information, in line with South Africa's POPIA.",
  alternates: {
    canonical: "https://www.60onkosmos.co.za/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-sage-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-sage-100">
            How we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm text-muted-foreground mb-10">Last updated: 12 August 2026</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Who We Are</h2>
          <div className="bg-muted rounded-lg p-6">
            <p className="text-muted-foreground">
              60 on Kosmos Guest House (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates from 60 Kosmos Street,
              Bellville South, Cape Town, 7530, South Africa. This policy explains how we handle personal
              information in accordance with South Africa&apos;s Protection of Personal Information Act, 2013
              (POPIA).
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
          <div className="bg-muted rounded-lg p-6">
            <p className="text-muted-foreground mb-3">When you contact us or request a booking, we collect:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Name, phone number, and email address</li>
              <li>• Requested check-in/check-out dates and number of guests</li>
              <li>• Company name, if you book as a corporate/contractor group</li>
              <li>• Any message content or special requests you provide</li>
              <li>• South African ID or passport details collected on arrival for guest registration</li>
              <li>• Basic usage data (pages visited) via Google Analytics, once enabled</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
          <div className="bg-muted rounded-lg p-6">
            <ul className="space-y-2 text-muted-foreground">
              <li>• To respond to enquiries and process booking requests</li>
              <li>• To confirm your stay and communicate with you via phone, WhatsApp, or email</li>
              <li>• To meet legal guest-registration requirements</li>
              <li>• To send invoices for corporate or contractor bookings, on request</li>
              <li>• To understand how visitors use our website, so we can improve it</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              We do not sell your personal information, and we do not use it for marketing without your consent.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Who We Share It With</h2>
          <div className="bg-muted rounded-lg p-6">
            <p className="text-muted-foreground mb-3">
              We use the following third-party services to run our booking and enquiry process. Information you
              submit through our contact and booking forms is processed by:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                • <strong>Formspree</strong> — handles and delivers form submissions to our inbox
              </li>
              <li>
                • <strong>Google Analytics</strong> — anonymised website usage statistics, once enabled
              </li>
            </ul>
            <p className="text-muted-foreground mt-3">
              If you book through Booking.com or Airbnb instead of directly with us, your information is also
              subject to their respective privacy policies.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
          <div className="bg-muted rounded-lg p-6">
            <p className="text-muted-foreground">
              We keep booking and guest-registration records for as long as necessary to meet legal, tax, and
              accommodation-establishment record-keeping obligations. Enquiry messages that don&apos;t lead to a
              booking are retained only as long as needed to respond to you.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
          <div className="bg-muted rounded-lg p-6">
            <p className="text-muted-foreground">
              Our website may use cookies for basic functionality and, once enabled, Google Analytics to
              understand how visitors use the site. You can disable cookies in your browser settings at any time.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights Under POPIA</h2>
          <div className="bg-sage-50 border border-sage-200 rounded-lg p-6">
            <p className="text-muted-foreground mb-3">You have the right to:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Ask what personal information we hold about you</li>
              <li>• Request that we correct or delete inaccurate information</li>
              <li>• Withdraw consent to processing, where consent is the basis for it</li>
              <li>• Object to how your information is being processed</li>
              <li>• Lodge a complaint with the Information Regulator of South Africa</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Security</h2>
          <div className="bg-muted rounded-lg p-6">
            <p className="text-muted-foreground">
              We take reasonable technical and organisational measures to protect your personal information
              against loss, unauthorised access, or disclosure.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-sage-50 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-foreground mb-2">Questions or Data Requests</h2>
          <p className="text-muted-foreground mb-4">
            To ask about your information, or to request access, correction, or deletion, contact us directly.
          </p>
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
    </div>
  )
}

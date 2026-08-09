import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Guest Information | 60 on Kosmos",
  description:
    "Verified guest information for 60 on Kosmos in Bellville South, including rooms, amenities, rates, arrival times, payment, and contact details.",
  alternates: { canonical: "/guest-information" },
  openGraph: {
    title: "Guest Information | 60 on Kosmos",
    description:
      "Verified guest information for 60 on Kosmos in Bellville South.",
    url: "/guest-information",
    type: "website",
  },
}

const facts = [
  ["Address", "60 Kosmos Street, Bellville South, Cape Town"],
  ["Phone and WhatsApp", "074 524 5703"],
  ["Check-in", "14:00"],
  ["Check-out", "10:00"],
  ["Payment", "EFT only; cash is not accepted"],
  ["Invoices", "Provided on request"],
  ["Monthly stays", "Monthly rates apply to stays of 28 nights or more"],
]

const rooms = [
  ["Standard Twin", "Two single beds, private ensuite bathroom, WiFi, and no bar fridge"],
  ["Deluxe Twin", "Two single beds, private ensuite bathroom, WiFi, and a bar fridge"],
  ["Double Room", "Double bed, private ensuite bathroom, WiFi, and a bar fridge"],
  ["Triple Room", "Three single beds, private ensuite bathroom, WiFi, and a bar fridge"],
]

export default function GuestInformationPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto flex max-w-5xl flex-col gap-5 px-6 py-16 md:px-10 lg:py-24">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">60 on Kosmos · verified information</p>
          <h1 className="max-w-3xl text-balance font-serif text-4xl leading-tight md:text-6xl">Everything guests need to know before booking</h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            This page summarises the current business information for 60 on Kosmos. If you need a quote or have a question about availability, contact us directly on 074 524 5703.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-14 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
        <div className="flex flex-col gap-5">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">At a glance</p>
          <h2 className="font-serif text-3xl">Practical details</h2>
          <p className="leading-relaxed text-muted-foreground">We offer furnished private-ensuite accommodation in Bellville South for short stays and longer stays of 28 nights or more.</p>
          <Link className="font-medium text-primary underline underline-offset-4" href="/rooms">View rooms and current rates</Link>
        </div>
        <dl className="grid gap-0 divide-y divide-border border-y border-border">
          {facts.map(([label, value]) => (
            <div className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6" key={label}>
              <dt className="font-medium">{label}</dt>
              <dd className="leading-relaxed text-muted-foreground">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 lg:py-20">
          <div className="flex flex-col gap-5">
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">Accommodation</p>
            <h2 className="font-serif text-3xl">Four room types</h2>
            <p className="max-w-2xl leading-relaxed text-muted-foreground">All rooms have private ensuite bathrooms and WiFi. Fridge availability differs by room type as listed below.</p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {rooms.map(([name, description]) => (
              <article className="bg-background p-6" key={name}>
                <h3 className="font-serif text-xl">{name}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-5xl flex-col gap-5 px-6 py-14 md:px-10 lg:py-20">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">Booking note</p>
        <h2 className="font-serif text-3xl">Need a quote?</h2>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">Rates and availability can change. Contact 60 on Kosmos directly for a current quote. Invoices are provided on request. Visa documentation requirements should be confirmed with the relevant authorities before booking.</p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground" href="tel:+27745245703">Call 074 524 5703</a>
          <a className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 font-medium" href="https://wa.me/27745245703">WhatsApp us</a>
        </div>
      </section>
    </main>
  )
}

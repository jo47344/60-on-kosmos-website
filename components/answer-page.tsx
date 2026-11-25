import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Phone, ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { FAQSchema } from "@/components/faq-schema"
import { PerPersonRatesTable } from "@/components/per-person-rates-table"
import {
  business,
  facilities,
  lowestPerPerson,
  lowestPerPersonQualifier,
  rooms,
  stayTerms,
} from "@/lib/site-facts"

// Shared layout for "answer pages": pages written to answer one specific buyer
// question (the kind people type into ChatGPT or Google) in a form that search
// engines and AI assistants can quote directly — a short factual answer first,
// then the supporting facts, prices, FAQs and machine-readable schema.

export interface AnswerSection {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export interface AnswerFAQ {
  question: string
  answer: string
}

export interface AnswerPageProps {
  path: string
  breadcrumb: string
  eyebrow: string
  h1: string
  quickAnswer: string
  serviceName: string
  serviceDescription: string
  areaServed: string[]
  whatsappText: string
  sections: AnswerSection[]
  faqs: AnswerFAQ[]
  related: { href: string; label: string }[]
  heroImage?: string
}

const SITE = "https://www.60onkosmos.co.za"

const roomLow = Math.min(...rooms.map((r) => r.monthlyPrice))
const roomHigh = Math.max(...rooms.map((r) => r.price))

export function AnswerPage(props: AnswerPageProps) {
  const url = `${SITE}${props.path}`
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Contractor Accommodation", url: "/contractor-accommodation" },
    { name: props.breadcrumb, url: props.path },
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: props.serviceName,
    serviceType: "Contractor and project team accommodation",
    description: props.serviceDescription,
    url,
    provider: { "@id": `${SITE}/#lodgingbusiness`, name: business.name },
    areaServed: props.areaServed.map((name) => ({ "@type": "Place", name })),
    // Prices are per room per night throughout: lowPrice is the cheapest room on
    // the 28+ night rate, highPrice the most expensive room on the 1–6 night rate.
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "ZAR",
      lowPrice: roomLow,
      highPrice: roomHigh,
      offerCount: rooms.length,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "ZAR",
        minPrice: roomLow,
        maxPrice: roomHigh,
        unitText: "per room per night",
      },
      description: `R${roomLow}–R${roomHigh} per room per night, depending on room and length of stay.`,
    },
  }

  const wa = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(props.whatsappText)}`

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={props.faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            {breadcrumbItems.map((item, i) => (
              <li key={item.url} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {i < breadcrumbItems.length - 1 ? (
                  <Link href={item.url} className="hover:text-sage-600">
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-gray-900 font-medium">{item.name}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src={props.heroImage ?? "/images/house-front.jpg"}
            alt={`${business.name}, ${business.fullAddress}`}
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            <span>{props.eyebrow}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">{props.h1}</h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 text-pretty max-w-3xl mx-auto">
            Rooms R{roomLow}–R{roomHigh} per night · secure gated parking · CCTV and ADT armed response · company
            invoices
          </p>
          <p className="text-sm text-gray-300 mb-8 -mt-4 text-pretty max-w-3xl mx-auto">
            From R{lowestPerPerson.monthly} per person per night with {lowestPerPersonQualifier}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg">
              <Link href="/contractor-accommodation#company-enquiry">Get a Team Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              <a href={wa} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp {business.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick answer: the paragraph search engines and AI assistants quote */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-sage-600 bg-sage-50 rounded-r-lg p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-sage-700 mb-2">Quick answer</h2>
            <p className="text-lg text-gray-900 leading-relaxed">{props.quickAnswer}</p>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">60 on Kosmos at a glance</h2>
          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-700">
            <div>
              <dt className="font-semibold text-gray-900 inline">Address: </dt>
              <dd className="inline">{business.fullAddress}</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900 inline">Rooms: </dt>
              <dd className="inline">
                4 rooms, each with its own en-suite bathroom. 7 single beds and 1 double bed; up to 9 adults only
                with two sharing the double bed
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900 inline">Price: </dt>
              <dd className="inline">
                R{roomLow}–R{roomHigh} per room per night. From R{lowestPerPerson.monthly} per person per night with{" "}
                {lowestPerPersonQualifier}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900 inline">Stays: </dt>
              <dd className="inline">
                Nightly, weekly (7+ nights) and monthly ({stayTerms.monthlyRateMinNights}+ nights)
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900 inline">Payment: </dt>
              <dd className="inline">EFT, company invoices on request</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900 inline">Check-in / out: </dt>
              <dd className="inline">
                From {stayTerms.checkIn} / by {stayTerms.checkOut}
              </dd>
            </div>
          </dl>
          <ul className="grid sm:grid-cols-2 gap-3 mt-6">
            {facilities.map((f) => (
              <li key={f} className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Body sections */}
      {props.sections.length > 0 && (
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {props.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{s.heading}</h2>
              {s.paragraphs?.map((p) => (
                <p key={p.slice(0, 40)} className="text-gray-700 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
      )}

      {/* Prices */}
      <section className="py-12 bg-white" id="rates">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Rates per person and per room</h2>
          <p className="text-gray-600 mb-6">
            Official direct rates in South African rand. Rooms are priced per room per night; the per-person figure is
            the room rate divided by the number of beds when the room is fully shared.
          </p>
          <PerPersonRatesTable />
        </div>
      </section>

      {/* FAQs (visible copy of the FAQPage schema) */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-6">
            {props.faqs.map((f) => (
              <div key={f.question}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.question}</h3>
                <p className="text-gray-700 leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related + CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related pages</h2>
          <ul className="grid sm:grid-cols-2 gap-3 mb-10">
            {props.related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="inline-flex items-center gap-2 text-sage-700 hover:underline">
                  <ArrowRight className="w-4 h-4" />
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="bg-gray-900 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Get a quote for your team today</h2>
            <p className="text-gray-300 mb-6">
              Send your team size, dates and work-site location. Team quotes usually go out the same day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white">
                <Link href="/contractor-accommodation#company-enquiry">Request a Team Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

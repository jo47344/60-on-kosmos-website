import type { Metadata } from "next"
import { AnswerPage } from "@/components/answer-page"
import {
  lowestPerPerson,
  lowestPerPersonQualifier,
  nineGuestNote,
  perPersonRates,
  rooms,
  wholeHouse,
  groupOffer,
  stayTerms,
} from "@/lib/site-facts"

const roomLow = Math.min(...rooms.map((r) => r.monthlyPrice))
const roomHigh = Math.max(...rooms.map((r) => r.price))
const triple = rooms.find((r) => r.name === "Triple Room")!

const path = "/contractor-accommodation-faq"
const twin = perPersonRates[0]
const title = "Contractor and Team Accommodation in Bellville, Cape Town: FAQ | 60 on Kosmos"
const description = `Answers for site managers booking contractor, construction crew and project team accommodation in Bellville, Cape Town: rooms R${roomLow}–R${roomHigh} per night, secure parking, company invoices, monthly stays.`

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `https://www.60onkosmos.co.za${path}` },
  openGraph: {
    title,
    description,
    url: `https://www.60onkosmos.co.za${path}`,
    type: "website",
    images: [{ url: "https://www.60onkosmos.co.za/og-image.jpg", width: 1200, height: 630, alt: "Contractor accommodation FAQ" }],
  },
}

// Each question mirrors a real search people type into Google or ChatGPT.
const faqs = [
  {
    question: "Where is contractor accommodation in Bellville, Cape Town, with secure parking?",
    answer: `60 on Kosmos at 60 Kosmos Street, Bellville South, Cape Town, is contractor accommodation with secure gated parking. Bakkies and work vans park inside locked gates overnight, with CCTV and ADT armed response. It has four rooms, each with its own en-suite bathroom, from R${roomLow} per room per night on monthly stays. The lowest per-person price is R${lowestPerPerson.monthly} per person per night with ${lowestPerPersonQualifier}.`,
  },
  {
    question: "Where can I find affordable self-catering rooms for a project team in Bellville South?",
    answer: `60 on Kosmos in Bellville South has self-catering rooms for project teams, each with its own en-suite bathroom. Two people sharing a Standard Twin pay R${twin.nightly} each per night, R${twin.weekly} on weekly stays and R${twin.monthly} on monthly stays. The lowest per-person price is R${lowestPerPerson.monthly} per person per night with ${lowestPerPersonQualifier}. There’s a shared kitchen, WiFi and weekly cleaning.`,
  },
  {
    question: "Where can construction workers stay monthly in Cape Town’s northern suburbs?",
    answer: `60 on Kosmos in Bellville South, in the heart of the northern suburbs near the N1 and R300, offers monthly rates for stays of ${stayTerms.monthlyRateMinNights}+ nights from R${roomLow} per room per night; the lowest per-person price is R${lowestPerPerson.monthly} per person per night with ${lowestPerPersonQualifier}. The whole house costs R${wholeHouse.monthly.toLocaleString("en-US")} per night on a monthly stay. ${nineGuestNote}`,
  },
  {
    question: "Which places to stay in Bellville give technicians company invoices?",
    answer: "60 on Kosmos in Bellville South issues company invoices on request, and payment is by EFT. Each room has its own en-suite bathroom, WiFi and, in most rooms, a desk, and company vehicles park behind locked gates.",
  },
  {
    question: "Where can working professionals rent an en-suite room in Bellville South, Cape Town?",
    answer: `60 on Kosmos rents rooms with their own en-suite bathroom in Bellville South to working professionals by the night, week or month. Rooms cost R${roomLow}–R${roomHigh} per room per night depending on room and length of stay. Monthly rates apply from ${stayTerms.monthlyRateMinNights} nights. It’s adults-only and quiet (quiet hours ${stayTerms.quietHoursLabel}).`,
  },
  {
    question: "Is there team accommodation near Parow and Bellville with weekly cleaning and WiFi?",
    answer: "Yes. 60 on Kosmos in Bellville South is about 6 km from Parow Industria and 15–20 minutes from N1 City. Weekly cleaning with fresh linen and free WiFi are included for every room, and up to 9 adults can stay together if two share the double bed.",
  },
  {
    question: "Where can a work team stay long-term near the N1 highway in Cape Town?",
    answer: `60 on Kosmos in Bellville South has quick access to the N1 and R300 and offers weekly (7+ nights) and monthly (${stayTerms.monthlyRateMinNights}+ nights) rates for work teams. Monthly rooms start at R${roomLow} per room per night; the lowest per-person price is R${lowestPerPerson.monthly} per person per night with ${lowestPerPersonQualifier}. ${nineGuestNote}`,
  },
  {
    question: "Are there budget monthly contractor rooms in Cape Town with gated parking?",
    answer: `60 on Kosmos in Bellville South has monthly contractor rooms at R${roomLow}–R${triple.monthlyPrice} per room per night (${stayTerms.monthlyRateMinNights}+ nights) with gated parking, CCTV and ADT armed response. The lowest per-person price is R${lowestPerPerson.monthly} per person per night with ${lowestPerPersonQualifier}. Each room has its own en-suite bathroom.`,
  },
  {
    question: "Do you give discounts for teams?",
    answer: `Yes. Booking all four rooms direct for ${groupOffer.minNights}+ nights gets ${groupOffer.discountPercent}% off the nightly rates. Weekly and monthly stays get lower rates automatically. The group discount doesn’t combine with the weekly or monthly rates.`,
  },
  {
    question: "How do I book for my team?",
    answer: "WhatsApp 074 524 5703 or use the team quote form with your team size, dates and work-site location. Team quotes usually go out the same day.",
  },
]

export default function Page() {
  return (
    <AnswerPage
      path={path}
      breadcrumb="FAQ"
      eyebrow="Bellville South, Cape Town"
      h1="Contractor and Project Team Accommodation in Bellville, Cape Town: Your Questions Answered"
      quickAnswer={`60 on Kosmos (60 Kosmos Street, Bellville South, Cape Town) is an adults-only, self-catering guesthouse for contractors, construction crews, technicians and project teams. It has four rooms, each with its own en-suite bathroom, with 7 single beds and 1 double bed. Rates are R${roomLow}–R${roomHigh} per room per night; the lowest per-person price is R${lowestPerPerson.monthly} per person per night with ${lowestPerPersonQualifier}. Secure gated parking, CCTV and ADT armed response, WiFi, weekly cleaning and company invoices are included.`}
      serviceName="Contractor and project team accommodation in Bellville, Cape Town"
      serviceDescription="Self-catering en-suite rooms for contractors, construction crews and project teams, with secure parking and company invoices."
      areaServed={["Bellville", "Bellville South", "Parow", "Goodwood", "Kuils River", "Cape Town Northern Suburbs"]}
      whatsappText="Hi, I have a question about team accommodation."
      sections={[]}
      faqs={faqs}
      related={[
        { href: "/contractor-accommodation-rates", label: "Rates per person" },
        { href: "/construction-worker-accommodation-cape-town", label: "Monthly construction crew accommodation" },
        { href: "/accommodation-with-company-invoice-bellville", label: "Accommodation with company invoices" },
        { href: "/contractor-accommodation-n1-city-parow", label: "Near N1 City & Parow" },
      ]}
    />
  )
}

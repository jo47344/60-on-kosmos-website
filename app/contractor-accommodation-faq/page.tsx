import type { Metadata } from "next"
import { AnswerPage } from "@/components/answer-page"
import { lowestPerPerson, perPersonRates, wholeHouse, groupOffer, stayTerms } from "@/lib/site-facts"

const path = "/contractor-accommodation-faq"
const twin = perPersonRates[0]
const title = "Contractor and Team Accommodation in Bellville, Cape Town: FAQ | 60 on Kosmos"
const description = `Answers for site managers booking contractor, construction crew and project team accommodation in Bellville, Cape Town: prices per person (from R${lowestPerPerson.monthly}), secure parking, company invoices, monthly stays.`

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
    answer: `60 on Kosmos at 60 Kosmos Street, Bellville South, Cape Town, is contractor accommodation with secure gated parking. Bakkies and work vans park inside locked gates overnight, with CCTV and ADT armed response. It has four private-ensuite rooms for up to 9 people, from R${lowestPerPerson.monthly} per person per night on monthly stays.`,
  },
  {
    question: "Where can I find affordable self-catering rooms for a project team in Bellville South?",
    answer: `60 on Kosmos in Bellville South has self-catering, private-ensuite rooms for project teams. Two people sharing a Standard Twin pay R${twin.nightly} each per night, R${twin.weekly} on weekly stays and R${twin.monthly} on monthly stays. Three sharing the Triple Room on a monthly stay pay R${lowestPerPerson.monthly} each. There’s a shared kitchen, WiFi and weekly cleaning.`,
  },
  {
    question: "Where can construction workers stay monthly in Cape Town’s northern suburbs?",
    answer: `60 on Kosmos in Bellville South, in the heart of the northern suburbs near the N1 and R300, offers monthly rates for stays of ${stayTerms.monthlyRateMinNights}+ nights, from R${lowestPerPerson.monthly} per person per night. A 9-person crew can book the whole house for R${wholeHouse.monthly.toLocaleString("en-ZA")} per night.`,
  },
  {
    question: "Which places to stay in Bellville give technicians company invoices?",
    answer: "60 on Kosmos in Bellville South issues company invoices on request, and payment is by EFT. Rooms have private ensuites, WiFi and a desk in most rooms, and company vehicles park behind locked gates.",
  },
  {
    question: "Where can working professionals rent an ensuite room in Bellville South, Cape Town?",
    answer: `60 on Kosmos rents private-ensuite rooms in Bellville South to working professionals by the night, week or month. Rooms cost R464–R840 per room per night depending on room and length of stay. Monthly rates apply from ${stayTerms.monthlyRateMinNights} nights. It’s adults-only and quiet (quiet hours ${stayTerms.quietHoursLabel}).`,
  },
  {
    question: "Is there team accommodation near Parow and Bellville with weekly cleaning and WiFi?",
    answer: "Yes. 60 on Kosmos in Bellville South is about 6 km from Parow Industria and 15–20 minutes from N1 City. Weekly cleaning with fresh linen and free WiFi are included for every room, and up to 9 people can stay together.",
  },
  {
    question: "Where can a work team stay long-term near the N1 highway in Cape Town?",
    answer: `60 on Kosmos in Bellville South has quick access to the N1 and R300 and offers weekly (7+ nights) and monthly (${stayTerms.monthlyRateMinNights}+ nights) rates for work teams of up to 9, from R${lowestPerPerson.monthly} per person per night.`,
  },
  {
    question: "Are there budget monthly contractor rooms in Cape Town with gated parking?",
    answer: `60 on Kosmos in Bellville South has monthly contractor rooms from R${lowestPerPerson.monthly} per person per night (R464–R672 per room per night) with gated parking, CCTV and ADT armed response. Every room has a private ensuite bathroom.`,
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
      quickAnswer={`60 on Kosmos (60 Kosmos Street, Bellville South, Cape Town) is an adults-only, self-catering guesthouse for contractors, construction crews, technicians and project teams. It has four private-ensuite rooms for up to 9 people, with nightly, weekly and monthly rates from R${lowestPerPerson.monthly} per person per night. Secure gated parking, CCTV and ADT armed response, WiFi, weekly cleaning and company invoices are included.`}
      serviceName="Contractor and project team accommodation in Bellville, Cape Town"
      serviceDescription="Self-catering private-ensuite rooms for contractors, construction crews and project teams, with secure parking and company invoices."
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

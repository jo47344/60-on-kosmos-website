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

const path = "/contractor-accommodation-rates"
const pp = Object.fromEntries(perPersonRates.map((r) => [r.name, r]))
const room = Object.fromEntries(rooms.map((r) => [r.name, r]))
const roomLow = Math.min(...rooms.map((r) => r.monthlyPrice))
const roomHigh = Math.max(...rooms.map((r) => r.price))
const rand = (n: number) => `R${n.toLocaleString("en-US")}`

const title = "Contractor Accommodation Rates in Bellville, Cape Town | Per Room and Per Person | 60 on Kosmos"
const description = `Self-catering en-suite rooms for project teams in Bellville South, Cape Town: R${roomLow}–R${roomHigh} per room per night. From R${lowestPerPerson.monthly} per person with three adults sharing the Triple Room for ${stayTerms.monthlyRateMinNights}+ nights. Secure parking, company invoices.`

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `https://www.60onkosmos.co.za${path}` },
  openGraph: {
    title,
    description,
    url: `https://www.60onkosmos.co.za${path}`,
    type: "website",
    images: [{ url: "https://www.60onkosmos.co.za/og-image.jpg", width: 1200, height: 630, alt: "60 on Kosmos rates" }],
  },
}

// Worked examples: real totals a site manager can drop into a budget, all
// calculated from the central rates in lib/site-facts.ts. There is only one
// room of each type, so a crew of four uses the Standard Twin + Deluxe Twin.
const N = stayTerms.monthlyRateMinNights
const twinPairMonthlyNight = room["Standard Twin"].monthlyPrice + room["Deluxe Twin"].monthlyPrice
const team4Month = N * twinPairMonthlyNight
const team3Month = N * room["Triple Room"].monthlyPrice
const team9Month = N * wholeHouse.monthly

export default function Page() {
  return (
    <AnswerPage
      path={path}
      breadcrumb="Rates"
      eyebrow="Bellville South, Cape Town"
      h1="Affordable Contractor Accommodation Rates in Bellville, Cape Town"
      quickAnswer={`60 on Kosmos in Bellville South, Cape Town, charges R${roomLow}–R${roomHigh} per room per night for contractor and project teams, depending on the room and length of stay. The lowest per-person price is R${lowestPerPerson.monthly} per night, with ${lowestPerPersonQualifier}. Each room has its own en-suite bathroom, and the rate includes WiFi, weekly cleaning, secure gated parking and access to the self-catering kitchen. Company invoices are provided.`}
      serviceName="Affordable contractor accommodation in Bellville South, Cape Town"
      serviceDescription="Budget self-catering en-suite rooms for contractors, construction crews and project teams, with weekly and monthly rates."
      areaServed={["Bellville", "Bellville South", "Parow", "Goodwood", "Kuils River", "Cape Town Northern Suburbs"]}
      whatsappText="Hi, I’d like a quote for contractor accommodation. Team size: , dates: "
      sections={[
        {
          heading: "What a team actually pays",
          paragraphs: [
            "Most contractor accommodation is quoted per person, so here is the same comparison for 60 on Kosmos. These are the official direct rates, subject to availability; rates on booking platforms can differ because of platform fees. There is one room of each type.",
          ],
          bullets: [
            `2 adults sharing the Standard Twin for ${N} nights: ${rand(N * room["Standard Twin"].monthlyPrice)} for the room, ${rand(pp["Standard Twin"].monthly)} per person per night.`,
            `3 adults sharing the Triple Room for ${N} nights: ${rand(team3Month)} for the room, ${rand(pp["Triple Room"].monthly)} per person per night.`,
            `A crew of 4 in the Standard Twin and Deluxe Twin for ${N} nights: ${rand(team4Month)} in total (${rand(twinPairMonthlyNight)} per night, about ${rand(Math.round(twinPairMonthlyNight / 4))} per person).`,
            `A crew of 9 in the whole house for ${N} nights: ${rand(team9Month)} in total, about ${rand(Math.round(wholeHouse.monthly / 9))} per person per night. Two of the nine share the double bed.`,
            `A crew of 9 for a week (7 nights): ${rand(7 * wholeHouse.weekly)} in total, with two sharing the double bed.`,
          ],
        },
        {
          heading: "What is included in the rate",
          bullets: [
            "Each room has its own en-suite bathroom, used only by that room’s occupants.",
            "Each room has its own outside entrance, so early starts don’t wake the rest of the house.",
            "Free WiFi and weekly cleaning with fresh linen.",
            "Shared self-catering kitchenette (gas stove, microwave, air fryer, kettle). Deluxe Twin, Double and Triple rooms also have a bar fridge; the Standard Twin does not.",
            "Secure gated parking: work vans and bakkies stay inside the locked gates overnight, on CCTV, with ADT armed response. Please confirm trailers before booking.",
            "Company invoices for the accounts department. Payment by EFT.",
          ],
        },
        {
          heading: "Discounts for longer stays and bigger teams",
          paragraphs: [
            `Stays of 7 nights or more get the weekly rate (about 10% off), and stays of ${stayTerms.monthlyRateMinNights} nights or more get the monthly rate (about 20% off). Teams that book all four rooms direct for ${groupOffer.minNights} nights or more get ${groupOffer.discountPercent}% off the nightly rates. The group discount doesn’t combine with the weekly or monthly rates, which are already discounted. A ${groupOffer.depositPercent}% deposit confirms a group booking.`,
          ],
        },
      ]}
      faqs={[
        {
          question: "How much is contractor accommodation per person in Bellville, Cape Town?",
          answer: `At 60 on Kosmos in Bellville South rooms cost R${roomLow}–R${roomHigh} per room per night. The lowest per-person price is R${lowestPerPerson.monthly} per night, with ${lowestPerPersonQualifier}. Two people sharing a Standard Twin pay R${pp["Standard Twin"].monthly} each per night monthly, R${pp["Standard Twin"].weekly} weekly or R${pp["Standard Twin"].nightly} for shorter stays.`,
        },
        {
          question: "Can a 9-person crew stay together?",
          answer: `Yes, if two adults are happy to share the double bed. ${nineGuestNote} For ${N}+ nights the whole house costs ${rand(wholeHouse.monthly)} per night, about ${rand(Math.round(wholeHouse.monthly / 9))} per person, subject to availability.`,
        },
        {
          question: "Are the rates per room or per person?",
          answer: "Rates are per room per night. The per-person figures on this page are the room rate divided by the number of beds when the room is fully shared.",
        },
        {
          question: "Do you give company invoices?",
          answer: "Yes. Company invoices are provided on request and payment is by EFT. Cash is not accepted.",
        },
      ]}
      related={[
        { href: "/contractor-accommodation", label: "Contractor accommodation in Bellville" },
        { href: "/construction-worker-accommodation-cape-town", label: "Monthly construction crew accommodation" },
        { href: "/group-accommodation", label: "Whole-house group bookings" },
        { href: "/contractor-accommodation-faq", label: "Contractor accommodation FAQ" },
      ]}
    />
  )
}

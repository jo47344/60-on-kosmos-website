import type { Metadata } from "next"
import { AnswerPage } from "@/components/answer-page"
import {
  formatRand,
  groupOffer,
  nineGuestNote,
  quoteStay,
  roomRateRange,
  rooms,
  stayTerms,
  tripleShareMonthly,
  wholeHouse,
} from "@/lib/site-facts"

const path = "/contractor-accommodation-rates"
const N = stayTerms.monthlyRateMinNights
const room = Object.fromEntries(rooms.map((r) => [r.name, r]))

const title = "Contractor Accommodation Rates in Bellville, Cape Town | Per Room | 60 on Kosmos"
const description = `Self-catering en-suite rooms for project teams in Bellville South, Cape Town: R${roomRateRange.low}–R${roomRateRange.high} per room per night, depending on room and nights. ${N}+ night rates from R${roomRateRange.low} per room. Secure parking, company invoices.`

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

// Worked examples: totals for the rooms reserved and the nights stayed, all
// from quoteStay() in lib/site-facts.ts. There is one room of each type.
const allFour = rooms.map((r) => r.name)
const ex = {
  twinsN: quoteStay(["Standard Twin", "Deluxe Twin"], N),
  tripleN: quoteStay(["Triple Room"], N),
  stdN: quoteStay(["Standard Twin"], N),
  allN: quoteStay(allFour, N),
  all7: quoteStay(allFour, 7),
  all3: quoteStay(allFour, 3),
}
const n28 = (rn: string) => formatRand(room[rn].monthlyPrice)

export default function Page() {
  return (
    <AnswerPage
      path={path}
      breadcrumb="Rates"
      eyebrow="Bellville South, Cape Town"
      h1="Contractor Accommodation Rates in Bellville, Cape Town"
      quickAnswer={`60 on Kosmos in Bellville South, Cape Town, charges R${roomRateRange.low}–R${roomRateRange.high} per room per night for contractor and project teams, depending on the room and the number of nights. For stays of ${N}+ nights the rooms cost ${n28("Standard Twin")} (Standard Twin), ${n28("Deluxe Twin")} (Deluxe Twin), ${n28("Double Room")} (Double Room) and ${n28("Triple Room")} (Triple Room) per room per night. Each room has its own en-suite bathroom, and the rate includes WiFi, weekly cleaning, secure gated parking and access to the self-catering kitchenette. Company invoices are provided.`}
      serviceName="Contractor accommodation in Bellville South, Cape Town"
      serviceDescription="Self-catering en-suite rooms for contractors, construction crews and project teams, with 7–27 night and 28+ night rates."
      areaServed={["Bellville", "Bellville South", "Parow", "Goodwood", "Kuils River", "Cape Town Northern Suburbs"]}
      whatsappText="Hi, I’d like a quote for contractor accommodation. Team size: , dates: "
      sections={[
        {
          heading: "What a team actually pays",
          paragraphs: [
            "You pay for the rooms you reserve and the nights you stay, at the rate for the length of the stay. There is one room of each type. These are the official direct rates, subject to availability; rates on booking platforms can differ because of platform fees.",
          ],
          bullets: [
            `Crew of 4 in the Standard Twin and Deluxe Twin for ${N} nights: ${formatRand(ex.twinsN.perNight)} per night, ${formatRand(ex.twinsN.total)} for ${N} nights.`,
            `Crew of 3 in the Triple Room for ${N} nights: ${formatRand(ex.tripleN.perNight)} per night, ${formatRand(ex.tripleN.total)} for ${N} nights. Shared by three adults, that’s approximately ${formatRand(tripleShareMonthly.perPerson)} per person per night, the lowest per-person equivalent we offer.`,
            `One person in the Standard Twin for ${N} nights: ${formatRand(ex.stdN.perNight)} per night, ${formatRand(ex.stdN.total)} for ${N} nights.`,
            `All four rooms for ${N} nights: ${formatRand(ex.allN.perNight)} per night, ${formatRand(ex.allN.total)} for ${N} nights. Up to 9 adults, with two sharing the double bed.`,
            `All four rooms for 7 nights: ${formatRand(ex.all7.perNight)} per night, ${formatRand(ex.all7.total)} for 7 nights.`,
            `All four rooms for 3 nights, booked direct: ${formatRand(ex.all3.perNight)} per night with the ${groupOffer.discountPercent}% group discount, ${formatRand(ex.all3.total)} for 3 nights.`,
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
          heading: "Longer stays and group bookings",
          paragraphs: [
            `Stays of 7–27 nights use the 7–27 night rate for every night, and stays of ${N} nights or more use the ${N}+ night rate for every night. Teams that book all four rooms direct for ${groupOffer.minNights}–6 nights get ${groupOffer.discountPercent}% off the 1–6 night rates. The group discount doesn’t combine with the 7–27 or ${N}+ night rates. A ${groupOffer.depositPercent}% deposit confirms a group booking.`,
          ],
        },
      ]}
      faqs={[
        {
          question: "How much does contractor accommodation cost in Bellville, Cape Town?",
          answer: `At 60 on Kosmos in Bellville South rooms cost R${roomRateRange.low}–R${roomRateRange.high} per room per night, depending on the room and the number of nights. For ${N}+ nights: Standard Twin ${n28("Standard Twin")}, Deluxe Twin ${n28("Deluxe Twin")}, Double Room ${n28("Double Room")}, Triple Room ${n28("Triple Room")} per room per night.`,
        },
        {
          question: "What is the lowest price per person?",
          answer: `Approximately ${formatRand(tripleShareMonthly.perPerson)} per person per night, ${tripleShareMonthly.qualifier}. Other rooms and shorter stays cost more per person.`,
        },
        {
          question: "Can a 9-person crew stay together?",
          answer: `Yes, if two adults share the double bed. ${nineGuestNote} For ${N} nights all four rooms cost ${formatRand(wholeHouse.monthly)} per night, ${formatRand(ex.allN.total)} for ${N} nights, subject to availability.`,
        },
        {
          question: "Are the rates per room or per person?",
          answer: "Rates are per room per night, charged for the rooms reserved and the nights stayed. Per-person figures on this page are examples only.",
        },
        {
          question: "Do you give company invoices?",
          answer: "Yes. Company invoices are provided on request and payment is by EFT. Cash is not accepted.",
        },
      ]}
      related={[
        { href: "/contractor-accommodation", label: "Contractor accommodation in Bellville" },
        { href: "/construction-worker-accommodation-cape-town", label: "Long-stay construction crew accommodation" },
        { href: "/group-accommodation", label: "Whole-house group bookings" },
        { href: "/contractor-accommodation-faq", label: "Contractor accommodation FAQ" },
      ]}
    />
  )
}

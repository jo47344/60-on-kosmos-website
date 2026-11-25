import type { Metadata } from "next"
import { AnswerPage } from "@/components/answer-page"
import { lowestPerPerson, perPersonRates, wholeHouse, groupOffer, stayTerms } from "@/lib/site-facts"

const path = "/contractor-accommodation-rates"
const pp = Object.fromEntries(perPersonRates.map((r) => [r.name, r]))
const rand = (n: number) => `R${n.toLocaleString("en-ZA")}`

const title = `Contractor Accommodation Rates Cape Town: From R${lowestPerPerson.monthly} pp | 60 on Kosmos`
const description = `Affordable self-catering rooms for project teams in Bellville South, Cape Town. From R${lowestPerPerson.monthly} per person per night on monthly stays, R${lowestPerPerson.weekly} weekly. Secure parking, WiFi, company invoices.`

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

// Worked examples: real totals a site manager can drop into a budget.
const team4Month = 2 * 28 * 464 // two Standard Twins, 28 nights
const team3Month = 28 * 672 // one Triple, 28 nights
const team9Month = 28 * wholeHouse.monthly

export default function Page() {
  return (
    <AnswerPage
      path={path}
      breadcrumb="Rates"
      eyebrow="Bellville South, Cape Town"
      h1="Affordable Contractor Accommodation Rates in Bellville, Cape Town"
      quickAnswer={`60 on Kosmos in Bellville South, Cape Town, charges from R${lowestPerPerson.monthly} per person per night for contractor and project teams on monthly stays (${stayTerms.monthlyRateMinNights}+ nights, Triple Room shared by three), R${lowestPerPerson.weekly} per person on weekly stays and R${lowestPerPerson.nightly} per person for shorter stays. Every room has a private ensuite bathroom, and the rate includes WiFi, weekly cleaning, secure gated parking and access to the self-catering kitchen. Company invoices are provided.`}
      serviceName="Affordable contractor accommodation in Bellville South, Cape Town"
      serviceDescription="Budget self-catering, private-ensuite rooms for contractors, construction crews and project teams, with weekly and monthly rates."
      areaServed={["Bellville", "Bellville South", "Parow", "Goodwood", "Kuils River", "Cape Town Northern Suburbs"]}
      whatsappText="Hi, I’d like a quote for contractor accommodation. Team size: , dates: "
      sections={[
        {
          heading: "What a team actually pays",
          paragraphs: [
            "Most contractor accommodation is quoted per person, so here is the same comparison for 60 on Kosmos. These are the official direct rates; rates on booking platforms can differ because of platform fees.",
          ],
          bullets: [
            `2 people sharing a Standard Twin for a month (28 nights): ${rand(28 * 464)} for the room, ${rand(pp["Standard Twin"].monthly)} per person per night.`,
            `3 people sharing the Triple Room for a month: ${rand(team3Month)} for the room, ${rand(pp["Triple Room"].monthly)} per person per night.`,
            `A crew of 4 in two Standard Twins for 28 nights: ${rand(team4Month)} in total.`,
            `A crew of 9 in the whole house for 28 nights: ${rand(team9Month)} in total, about ${rand(Math.round(wholeHouse.monthly / 9))} per person per night.`,
            `A crew of 9 for a week (7 nights): ${rand(7 * wholeHouse.weekly)} in total.`,
          ],
        },
        {
          heading: "What is included in the rate",
          bullets: [
            "Private ensuite bathroom in every room. Nobody shares a bathroom.",
            "Each room has its own outside entrance, so early starts don’t wake the rest of the house.",
            "Free WiFi and weekly cleaning with fresh linen.",
            "Shared self-catering kitchen, plus a bar fridge and kettle in the room (no bar fridge in the Standard Twin).",
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
          answer: `At 60 on Kosmos in Bellville South it starts at R${lowestPerPerson.monthly} per person per night on monthly stays of ${stayTerms.monthlyRateMinNights}+ nights (three people sharing the Triple Room). Two people sharing a Standard Twin pay R${pp["Standard Twin"].monthly} each per night monthly, R${pp["Standard Twin"].weekly} weekly or R${pp["Standard Twin"].nightly} for shorter stays.`,
        },
        {
          question: "What is the cheapest way to house a 9-person crew?",
          answer: `Book the whole house (all four rooms) for ${stayTerms.monthlyRateMinNights}+ nights: ${rand(wholeHouse.monthly)} per night for all nine people, about ${rand(Math.round(wholeHouse.monthly / 9))} per person per night, with private ensuites, secure parking and WiFi included.`,
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

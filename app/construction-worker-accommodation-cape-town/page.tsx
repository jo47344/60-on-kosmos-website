import type { Metadata } from "next"
import { AnswerPage } from "@/components/answer-page"
import { formatRand, nineGuestNote, quoteStay, roomRateRange, rooms, stayTerms, wholeHouse } from "@/lib/site-facts"

const N = stayTerms.monthlyRateMinNights
const allN = quoteStay(rooms.map((r) => r.name), N)

const path = "/construction-worker-accommodation-cape-town"
const title = "Construction Worker Accommodation Cape Town Northern Suburbs | Long Stays | 60 on Kosmos"
const description = `Long-stay accommodation for construction workers and site crews in Cape Town’s northern suburbs. Bellville South, near the N1 and R300. ${N}+ night rates from R${roomRateRange.low} per room per night. Gated parking for bakkies, CCTV.`

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `https://www.60onkosmos.co.za${path}` },
  openGraph: {
    title,
    description,
    url: `https://www.60onkosmos.co.za${path}`,
    type: "website",
    images: [{ url: "https://www.60onkosmos.co.za/og-image.jpg", width: 1200, height: 630, alt: "Construction crew accommodation Cape Town" }],
  },
}

export default function Page() {
  return (
    <AnswerPage
      path={path}
      breadcrumb="Construction Crews"
      eyebrow="Cape Town Northern Suburbs"
      h1="Long-Stay Accommodation for Construction Workers in Cape Town’s Northern Suburbs"
      quickAnswer={`60 on Kosmos is a gated, self-catering guesthouse at 60 Kosmos Street, Bellville South, in Cape Town’s northern suburbs, set up for construction crews on long stays. For stays of ${N}+ nights, rooms cost R${roomRateRange.low}–R${Math.max(...rooms.map((r) => r.monthlyPrice))} per room per night. All four rooms cost ${formatRand(wholeHouse.monthly)} per night for ${N}+ nights (${formatRand(allN.total)} for ${N} nights) and sleep up to 9 adults, with two sharing the double bed. Bakkies and work vans park inside locked gates on CCTV with ADT armed response. Each room has its own en-suite bathroom, and WiFi, weekly cleaning and company invoices are included.`}
      serviceName="Long-stay construction worker accommodation, Cape Town northern suburbs"
      serviceDescription="Long-stay, budget accommodation for construction workers, site crews and artisans near the N1 and R300 in Bellville South, Cape Town."
      areaServed={[
        "Bellville",
        "Bellville South",
        "Parow",
        "Goodwood",
        "Kuils River",
        "Brackenfell",
        "Durbanville",
        "Stikland",
        "Cape Town Northern Suburbs",
      ]}
      whatsappText="Hi, I need long-stay accommodation for a construction crew. Crew size: , start date: , site: "
      sections={[
        {
          heading: "Built for site crews, not tourists",
          paragraphs: [
            "Construction teams need a quiet bed, a hot shower, somewhere to cook and a safe place for the vehicle. That’s what 60 on Kosmos provides. It’s an adults-only house with four rooms, each with its own en-suite bathroom and its own outside entrance, so a 05:30 start doesn’t wake anyone else up.",
            `There is one each of the Standard Twin, Deluxe Twin, Double Room and Triple Room: 7 single beds and 1 double bed. Eight adults can each have their own bed; a ninth is possible only if two adults share the double bed. The whole crew stays under one roof and one invoice.`,
          ],
        },
        {
          heading: "Gated parking for bakkies and work vans",
          bullets: [
            "Work vans and bakkies stay inside locked gates overnight.",
            "CCTV and ADT armed response on the property.",
            "Trailers can sometimes be accommodated. Please confirm before booking.",
          ],
        },
        {
          heading: "Where 60 on Kosmos is, and how far the sites are",
          paragraphs: [
            "The house is in Bellville South, central to Cape Town’s northern suburbs, with quick access to the N1 and R300. Sacks Circle is about 2 km away, Stikland Industrial about 5 km and Parow Industria about 6 km. Kuils River, Blackheath and Saxenburg Park are roughly 15–20 minutes away, N1 City is 15–20 minutes, and Century City is about 20–25 minutes, depending on traffic.",
          ],
        },
        {
          heading: "Long-stay terms that suit project budgets",
          bullets: [
            `${N}+ night rate for stays of ${N} nights or more, charged per room per night for every night of the stay.`,
            "7–27 night rate for shorter phases and call-outs.",
            "Weekly cleaning with fresh linen, so the crew isn’t living in a mess by week three.",
            "Company invoices and EFT payment, so it fits straight into project costing.",
            "A refundable security deposit may apply to extended stays.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Where can construction workers stay long-term in Cape Town’s northern suburbs?",
          answer: `60 on Kosmos in Bellville South offers ${N}+ night rates for construction crews from R${roomRateRange.low} per room per night. It has four rooms, each with its own en-suite bathroom, with 7 single beds and 1 double bed, a self-catering kitchen, WiFi, weekly cleaning and gated parking for work vehicles.`,
        },
        {
          question: "Is there secure parking for bakkies and company vehicles?",
          answer: "Yes. Vehicles park inside locked gates overnight, with CCTV and ADT armed response. Please confirm trailers before booking.",
        },
        {
          question: "How close is 60 on Kosmos to the N1?",
          answer: "Bellville South has quick access to the N1 and R300. N1 City is roughly 15–20 minutes away and Century City about 20–25 minutes, depending on traffic.",
        },
        {
          question: "Can a whole crew book the house?",
          answer: `Yes, subject to availability. ${nineGuestNote} For ${N} nights all four rooms cost ${formatRand(wholeHouse.monthly)} per night, ${formatRand(allN.total)} in total.`,
        },
      ]}
      related={[
        { href: "/contractor-accommodation-rates", label: "Room rates" },
        { href: "/contractor-accommodation-northern-suburbs", label: "Northern suburbs accommodation" },
        { href: "/contractor-accommodation-n1-city-parow", label: "Near N1 City & Parow" },
        { href: "/monthly-accommodation", label: "Long-stay accommodation" },
      ]}
    />
  )
}

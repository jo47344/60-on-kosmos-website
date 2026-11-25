import type { Metadata } from "next"
import { AnswerPage } from "@/components/answer-page"
import { formatRand, nineGuestNote, quoteStay, roomRateRange, stayTerms } from "@/lib/site-facts"

const std5 = quoteStay(["Standard Twin"], 5)

const path = "/accommodation-with-company-invoice-bellville"
const title = "Bellville Accommodation for Technicians with Company Invoices | 60 on Kosmos, Cape Town"
const description = `Places to stay in Bellville, Cape Town, for technicians, installers and engineers that issue company invoices. En-suite rooms R${roomRateRange.low}–R${roomRateRange.high} per room per night, secure parking, WiFi, EFT payment.`

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `https://www.60onkosmos.co.za${path}` },
  openGraph: {
    title,
    description,
    url: `https://www.60onkosmos.co.za${path}`,
    type: "website",
    images: [{ url: "https://www.60onkosmos.co.za/og-image.jpg", width: 1200, height: 630, alt: "Technician accommodation Bellville" }],
  },
}

export default function Page() {
  return (
    <AnswerPage
      path={path}
      breadcrumb="Company Invoices"
      eyebrow="Bellville, Cape Town"
      h1="Accommodation in Bellville for Technicians, with Company Invoices"
      quickAnswer={`60 on Kosmos at 60 Kosmos Street, Bellville South, Cape Town, houses technicians, installers, engineers and site supervisors on company business, and issues company invoices on request. Payment is by EFT. Each room has its own en-suite bathroom, with WiFi, a desk in most rooms, weekly cleaning and secure gated parking for company vehicles. Rooms cost R${roomRateRange.low}–R${roomRateRange.high} per room per night. For example, two technicians in the Standard Twin for 5 nights pay ${formatRand(std5.perNight)} per night, ${formatRand(std5.total)} for the room.`}
      serviceName="Business accommodation with company invoicing, Bellville"
      serviceDescription="En-suite rooms for technicians and company staff, with company invoices, EFT payment and secure parking for company vehicles."
      areaServed={["Bellville", "Bellville South", "Parow", "Tygervalley", "Cape Town Northern Suburbs"]}
      whatsappText="Hi, I need accommodation with a company invoice. Company: , people: , dates: "
      sections={[
        {
          heading: "Paperwork that works for the accounts department",
          bullets: [
            "Company invoices issued on request, made out to your company.",
            "EFT payment. Cash is not accepted, which keeps a clean paper trail.",
            "One invoice can cover several rooms for the whole team.",
            "Clear published rates with no platform fees when you book direct.",
            `7–27 night and ${stayTerms.monthlyRateMinNights}+ night rates for longer call-outs and installs.`,
          ],
        },
        {
          heading: "Rooms suited to working technicians",
          bullets: [
            "Each room has its own en-suite bathroom, used only by that room’s occupants.",
            "Desk or workspace in every room except the Deluxe Twin, plus fast WiFi for reports and remote support.",
            "Own outside entrance per room for early call-outs.",
            "Company vehicles and tools stay behind locked gates on CCTV, with ADT armed response.",
            "Shared self-catering kitchenette (gas stove, microwave, air fryer, kettle). Deluxe Twin, Double and Triple rooms also have a bar fridge; the Standard Twin does not.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Which places to stay in Bellville give company invoices?",
          answer: "60 on Kosmos in Bellville South, Cape Town, issues company invoices on request for technicians, contractors and corporate staff. Payment is by EFT.",
        },
        {
          question: "Can one invoice cover a whole team?",
          answer: `Yes. Book several rooms, or all four, and we’ll issue one company invoice for the stay. ${nineGuestNote}`,
        },
        {
          question: "Is there a workspace in the rooms?",
          answer: "Every room except the Deluxe Twin has a desk or workspace, and all rooms have free WiFi.",
        },
      ]}
      related={[
        { href: "/corporate", label: "Corporate stays" },
        { href: "/contractor-accommodation-rates", label: "Rates per person" },
        { href: "/contractor-accommodation", label: "Contractor accommodation in Bellville" },
        { href: "/contractor-accommodation-faq", label: "Contractor accommodation FAQ" },
      ]}
    />
  )
}

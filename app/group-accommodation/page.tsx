import { RateTable } from "@/components/rate-table"
import { EstimateLink } from "@/components/estimate-link"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ChevronDown, DoorOpen, MessageCircle, Phone, ShieldCheck, Users } from "lucide-react"
import { FAQSchema } from "@/components/faq-schema"
import { business, capacity, groupOffer, rooms, stayTerms } from "@/lib/site-facts"

const pageUrl = "https://www.60onkosmos.co.za/group-accommodation"

// Standard totals are the published per-room rates added up. The group rate
// is the owner-confirmed discount in site-facts applied to the nightly total.
const allRoomsNightly = rooms.reduce((total, room) => total + room.price, 0)
const groupNightly = Math.round((allRoomsNightly * (100 - groupOffer.discountPercent)) / 100)
const perPersonGroup = Math.round(groupNightly / capacity.maxGuests)
const rand = (amount: number) => `R${amount.toLocaleString("en-ZA").replace(/ /g, " ")}`

const description = `Book all ${capacity.roomCount} private ensuite rooms at 60 on Kosmos, Bellville South. Sleeps up to ${capacity.maxGuests} adults, with all guest rooms reserved for your group; caretaker onsite. From R${perPersonGroup} per person a night (${rand(groupNightly)} for all rooms) on direct bookings of ${groupOffer.minNights} to 6 nights.`

export const metadata: Metadata = {
  title: `Group Accommodation Bellville | Sleeps ${capacity.maxGuests} Adults`,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `Group Accommodation in Bellville South | Sleeps ${capacity.maxGuests} Adults`,
    description,
    url: pageUrl,
    type: "website",
    images: [
      {
        url: "https://www.60onkosmos.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Group accommodation at 60 on Kosmos, Bellville South",
      },
    ],
  },
}

const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
  "Hi, I'd like to book all four rooms at 60 on Kosmos for a group.\nNumber of adults: \nCheck-in: \nCheck-out: ",
)}`

const whoItSuits = [
  {
    title: "Wedding and funeral guests",
    text: "Several couples or relatives who need to stay close to each other, each with their own room and bathroom.",
  },
  {
    title: "Family visiting for the holidays",
    text: "Adult relatives coming to Cape Town when the family home is already full.",
  },
  {
    title: "Church, sports and event groups",
    text: "Small adult groups in the northern suburbs for a conference, tournament or event.",
  },
  {
    title: "Friends travelling together",
    text: "A self-catering base for a group that wants privacy at night and a shared table by day.",
  },
]

const included = [
  "A private ensuite bathroom in every room",
  "Every room has its own outside entrance",
  "Covered outdoor seating area for the group",
  "Communal kitchenette and self-catering facilities",
  "Secure gated parking, with CCTV and ADT armed response",
  "WiFi included",
]

const faqs = [
  {
    question: "How many people can stay if we book all the rooms?",
    answer: `Up to ${capacity.maxGuests} adults across ${capacity.roomCount} rooms: the Triple Room sleeps three in single beds, the two twin rooms sleep two each in single beds, and the Double Room sleeps two sharing a double bed.`,
  },
  {
    question: "Will there be other guests on the property?",
    answer: `Not when your group books all ${capacity.roomCount} rooms. There are only ${capacity.roomCount} guest rooms, so there are no unrelated overnight guests. Our caretaker lives onsite and assists with arrival and property upkeep. Shared facilities and house rules apply.`,
  },
  {
    question: "Can children stay?",
    answer:
      "No. 60 on Kosmos is an adults-only property. The rooms are separate, each sleeps a maximum of two or three, and they open onto the parking courtyard, so the layout is not suited to children.",
  },
  {
    question: "What does it cost to book all the rooms?",
    answer: `Book all ${capacity.roomCount} rooms directly with us for ${groupOffer.minNights} to 6 nights and the group rate is ${rand(groupNightly)} a night, which is ${groupOffer.discountPercent}% off the standard ${rand(allRoomsNightly)} and works out to about R${perPersonGroup} per person with ${capacity.maxGuests} adults. A single night is ${rand(allRoomsNightly)}. Weekly and monthly totals depend on sharing and supervisor privacy. Use our calculator for the room arrangement; no discounts are stacked.`,
  },
  {
    question: "How do we pay?",
    answer: `A ${groupOffer.depositPercent}% deposit confirms a group booking. Direct bookings are paid by EFT; we don't take cash. Banking details are on your quotation. Check-in is from ${stayTerms.checkIn} and check-out is by ${stayTerms.checkOut}.`,
  },
  {
    question: "Can we book fewer than four rooms?",
    answer:
      "Yes. Tell us how many adults are in your group and we'll confirm the best room combination, but other guests may then be staying in the remaining rooms.",
  },
]

export default function GroupAccommodationPage() {
  return (
    <div className="min-h-screen bg-white">
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative bg-gray-900 py-14 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/outdoor-seating.jpg"
            alt="Covered outdoor seating area at 60 on Kosmos, Bellville South"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Group Accommodation in Bellville South
          </h1>
          <p className="text-base sm:text-lg text-gray-200 text-pretty mb-8">
            Book all {capacity.roomCount} private ensuite rooms for your group, with our caretaker living onsite. Sleeps up
            to {capacity.maxGuests} adults, from R{perPersonGroup} per person a night: {rand(groupNightly)} for all{" "}
            {capacity.roomCount} rooms when you book direct for {groupOffer.minNights} to 6 nights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                WhatsApp your dates
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
              <a href={`tel:${business.phoneIntl}`}>
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                Call {business.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
<EstimateLink />

      {/* Why it works for groups */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Together, with your own room</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <DoorOpen className="w-6 h-6 text-sage-600 mb-3" aria-hidden="true" />
              <p className="font-medium text-gray-900 mb-1">Your own door and bathroom</p>
              <p className="text-sm text-gray-600">
                Each room has a private ensuite and its own outside entrance, so nobody shares a bathroom or walks
                through someone else&apos;s space.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <Users className="w-6 h-6 text-sage-600 mb-3" aria-hidden="true" />
              <p className="font-medium text-gray-900 mb-1">Only your group</p>
              <p className="text-sm text-gray-600">
                There are only {capacity.roomCount} guest rooms. Book them all and there are no other guests on the
                property. Our caretaker remains onsite and assists with arrival and property upkeep.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <ShieldCheck className="w-6 h-6 text-sage-600 mb-3" aria-hidden="true" />
              <p className="font-medium text-gray-900 mb-1">Cars behind the gate</p>
              <p className="text-sm text-gray-600">
                Secure gated parking inside the walled courtyard, with CCTV and ADT armed response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms and rates */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">The four rooms</h2>
          <p className="text-gray-600 mb-6">
            The rooms are compact and made for sleeping, with a maximum of two guests each, or three in the Triple
            Room.
          </p>
          <div className="overflow-hidden rounded-lg border bg-white">
            <RateTable />
          </div>
          <div className="mt-6 rounded-lg border-2 border-sage-600 bg-white p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-sage-700">Group rate, book direct</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">From R{perPersonGroup} per person a night</p>
            <p className="mt-1 text-base font-semibold text-gray-900">
              {rand(groupNightly)} a night for all four rooms
            </p>
            <p className="mt-2 text-sm text-gray-700">
              That is {groupOffer.discountPercent}% off the standard {rand(allRoomsNightly)}. The per-person figure is
              with {capacity.maxGuests} adults sharing; a smaller group pays the same {rand(groupNightly)} in total. It
              applies when one group books all {capacity.roomCount} rooms directly with us for {groupOffer.minNights}{" "}
              to 6 nights.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              A {groupOffer.depositPercent}% deposit confirms your group booking.
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Rates in the table are per room, per night. All-room totals depend on sharing and supervisor privacy; use the calculator for the full stay cost. The 10% group discount applies only to 2–6 nights and is not stacked with weekly or monthly rates.
          </p>
        </div>
      </section>

      {/* Who it suits */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Who books the whole property</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whoItSuits.map((item) => (
              <Card key={item.title}>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-6">
            60 on Kosmos is an adults-only property. It is not suited to children.
          </p>
        </div>
      </section>

      {/* Included */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What your group gets</h2>
          <ul className="space-y-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-600 mt-6">
            Approximately 5–8 minutes from UWC and the CPUT Bellville campus by car, subject to traffic.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Group booking questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="flex items-start justify-between cursor-pointer list-none">
                      <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                      <ChevronDown className="w-5 h-5 text-sage-600 flex-shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-sage-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Check your dates</h2>
          <p className="mb-8 text-sage-100">
            Send us your dates and the number of adults. Quotes usually go out the same day, and a{" "}
            {groupOffer.depositPercent}% deposit confirms the booking.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild size="lg" className="bg-white text-sage-700 hover:bg-gray-100">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                WhatsApp your dates
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-sage-700">
              <Link href="/book-now">Send a booking request</Link>
            </Button>
          </div>
          <p className="text-sm text-sage-100 mt-6">
            <Link href="/rooms" className="underline hover:no-underline">
              See photos and details of each room
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}

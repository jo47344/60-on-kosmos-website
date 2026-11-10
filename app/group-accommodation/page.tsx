import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ChevronDown, DoorOpen, MessageCircle, Phone, ShieldCheck, Users } from "lucide-react"
import { FAQSchema } from "@/components/faq-schema"
import { business, capacity, rooms, stayTerms } from "@/lib/site-facts"

const pageUrl = "https://www.60onkosmos.co.za/group-accommodation"

// All four rooms together, at the published per-room rates. No separate
// group price is invented here: these are the room rates added up.
const allRoomsNightly = rooms.reduce((total, room) => total + room.price, 0)
const allRoomsWeekly = rooms.reduce((total, room) => total + room.weeklyPrice, 0)
const perPersonNightly = Math.round(allRoomsNightly / capacity.maxGuests)
const perPersonWeekly = Math.round(allRoomsWeekly / capacity.maxGuests)
const rand = (amount: number) => `R${amount.toLocaleString("en-ZA").replace(/ /g, " ")}`

const description = `Book all ${capacity.roomCount} private ensuite rooms at 60 on Kosmos, Bellville South. Sleeps up to ${capacity.maxGuests} adults, with the property to your group alone. From ${rand(allRoomsNightly)} a night for all rooms.`

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
    answer: `Not when your group books all ${capacity.roomCount} rooms. There are only ${capacity.roomCount} guest rooms, so the property is yours for the stay.`,
  },
  {
    question: "Can children stay?",
    answer:
      "No. 60 on Kosmos is an adults-only property. The rooms are separate, each sleeps a maximum of two or three, and they open onto the parking courtyard, so the layout is not suited to children.",
  },
  {
    question: "What does it cost to book all the rooms?",
    answer: `All ${capacity.roomCount} rooms together come to ${rand(allRoomsNightly)} a night for stays of 1 to 6 nights, and ${rand(allRoomsWeekly)} a night for stays of 7 to 27 nights. That is the published rate for each room added up.`,
  },
  {
    question: "How do we pay?",
    answer: `Direct bookings are paid by EFT; we don't take cash. Banking details are on your quotation. Check-in is from ${stayTerms.checkIn} and check-out is by ${stayTerms.checkOut}.`,
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
            src="/images/outdoor-seating.png"
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
            Book all {capacity.roomCount} private ensuite rooms and have 60 on Kosmos to your group alone. Sleeps up
            to {capacity.maxGuests} adults, from {rand(allRoomsNightly)} a night for all rooms.
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
                property.
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
            <table className="w-full text-left">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th scope="col" className="px-4 py-3 text-sm font-semibold">Room</th>
                  <th scope="col" className="px-4 py-3 text-sm font-semibold">Beds</th>
                  <th scope="col" className="px-4 py-3 text-sm font-semibold text-right">1-6 nights</th>
                  <th scope="col" className="px-4 py-3 text-sm font-semibold text-right">7-27 nights</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room, idx) => (
                  <tr key={room.name} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <th scope="row" className="px-4 py-3 text-sm font-medium text-gray-900">{room.name}</th>
                    <td className="px-4 py-3 text-sm text-gray-600">{room.layout}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 text-right">R{room.price}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 text-right">R{room.weeklyPrice}</td>
                  </tr>
                ))}
                <tr className="bg-sage-50 border-t-2 border-sage-600">
                  <th scope="row" className="px-4 py-3 text-sm font-bold text-gray-900">All four rooms</th>
                  <td className="px-4 py-3 text-sm text-gray-700">Up to {capacity.maxGuests} adults</td>
                  <td className="px-4 py-3 text-sm font-bold text-gray-900 text-right">{rand(allRoomsNightly)}</td>
                  <td className="px-4 py-3 text-sm font-bold text-gray-900 text-right">{rand(allRoomsWeekly)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Rates are per room, per night. With {capacity.maxGuests} adults sharing, all four rooms work out to about
            R{perPersonNightly} per person a night, or about R{perPersonWeekly} on stays of 7 nights or more. Final
            rates depend on dates and availability.
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
            Send us your dates and the number of adults. Quotes usually go out the same day.
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

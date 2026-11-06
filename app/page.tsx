import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageCircle, Phone } from "lucide-react"
import { LatestBlogPosts } from "@/components/latest-blog-posts"
import { business, capacity, reviewPlatforms, rooms, stayTerms } from "@/lib/site-facts"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bellville South Accommodation for Contractors & Teams | 60 on Kosmos",
  description:
    "Private ensuite accommodation in Bellville South for contractors, project teams and working professionals. Secure parking, WiFi, weekly cleaning and company invoices. Request a quote.",
  alternates: {
    canonical: "https://www.60onkosmos.co.za/",
  },
  openGraph: {
    title: "Bellville South Accommodation for Contractors & Teams | 60 on Kosmos",
    description:
      "Private ensuite accommodation in Bellville South for contractors, project teams and working professionals. Secure parking, WiFi, weekly cleaning and company invoices. Request a quote.",
    url: "https://www.60onkosmos.co.za/",
    type: "website",
    images: [
      {
        url: "https://www.60onkosmos.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "60 on Kosmos Guesthouse Bellville",
      },
    ],
  },
}

const roomPhotos: Record<(typeof rooms)[number]["name"], { src: string; alt: string }> = {
  "Standard Twin": {
    src: "/images/standard-twin-room.jpg",
    alt: "Standard Twin room with two single beds",
  },
  "Deluxe Twin": {
    src: "/images/deluxe-twin-room.jpg",
    alt: "Deluxe Twin room with two single beds",
  },
  "Double Room": {
    src: "/images/sage-double-room.png",
    alt: "Double Room with one double bed",
  },
  "Triple Room": {
    src: "/images/triple-room.jpg",
    alt: "Triple Room with three single beds",
  },
}

const lowestMonthlyRate = Math.min(...rooms.map((room) => room.monthlyPrice))
const telHref = `tel:${business.phoneIntl}`
const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
  "Hi, I'd like a quote for my team. Dates and team size:",
)}`
const quoteHref = "/contractor-accommodation#company-enquiry"

const faqs = [
  {
    question: `Can you take a crew of more than ${capacity.maxGuests} people?`,
    answer: `We're a four-room house that sleeps up to ${capacity.maxGuests}, designed for smaller skilled teams. Long labour-crew deployments are usually better served by a rented house near site.`,
  },
  {
    question: "Can you provide visa documentation?",
    answer:
      "We don't provide visa documentation. Please confirm what you need with the relevant authorities before booking.",
  },
]

function ContactButtons({ onDark = false }: { onDark?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={telHref}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-green-700 px-6 font-semibold text-white transition-colors hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call {business.phone}
      </a>
      <a
        href={whatsappHref}
        className={`inline-flex h-12 items-center justify-center gap-2 rounded-md border-2 px-6 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
          onDark
            ? "border-white text-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-gray-900"
            : "border-green-700 text-green-800 hover:bg-green-50 focus-visible:ring-green-700"
        }`}
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        WhatsApp us
      </a>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* Hero: what this is, who it's for, and how to reach us */}
      <section className="bg-sage-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <h1 className="max-w-2xl text-balance text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Accommodation for small project teams in Bellville
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-gray-700">
              Private ensuite rooms, secure gated parking, WiFi, weekly cleaning and company invoices, at{" "}
              {business.streetAddress}, {business.addressLocality}.
            </p>
            <p className="mt-6 text-base font-semibold text-gray-900">
              {capacity.roomCount} rooms · Sleeps up to {capacity.maxGuests} · From R{lowestMonthlyRate}/night on
              monthly stays
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <Link
                href={quoteHref}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-sage-700 px-8 text-lg font-semibold text-white transition-colors hover:bg-sage-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-700 focus-visible:ring-offset-2 sm:w-fit"
              >
                Get a team quote
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <ContactButtons />
            </div>
            <p className="mt-6 text-sm text-gray-700">
              Booking a short stay for yourself?{" "}
              <Link
                href="/check-availability"
                className="font-semibold text-sage-700 underline underline-offset-4 hover:text-sage-800"
              >
                Check availability
              </Link>
            </p>
          </div>

          <figure className="mx-auto w-full max-w-sm lg:max-w-none">
            <Image
              src="/images/main-entrance.png"
              alt="Front door and paved yard with covered parking at 60 on Kosmos, Bellville South"
              width={720}
              height={960}
              priority
              sizes="(min-width: 1024px) 416px, (min-width: 640px) 384px, 100vw"
              className="aspect-[4/3] h-auto w-full rounded-lg object-cover shadow-sm lg:aspect-auto"
            />
            <figcaption className="mt-3 text-sm text-gray-600">
              The entrance and paved yard at {business.streetAddress}.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* The spec sheet: rooms, beds and rates */}
      <section id="rates" aria-labelledby="rates-heading" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 id="rates-heading" className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Rooms, beds and rates
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-gray-700">
              Every room has a private ensuite, WiFi and weekly cleaning. Weekly rates apply from{" "}
              {stayTerms.weeklyRateMinNights} nights and monthly rates from {stayTerms.monthlyRateMinNights} nights.
            </p>
          </div>

          <table className="mt-10 w-full border-collapse text-left">
            <caption className="sr-only">
              Rooms at 60 on Kosmos with beds, bar fridge and rates per room per night
            </caption>
            <thead className="hidden border-b-2 border-gray-900 text-sm text-gray-700 md:table-header-group">
              <tr>
                <th scope="col" className="py-3 pr-4 font-semibold">
                  Room
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Beds
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Bar fridge
                </th>
                <th scope="col" className="px-4 py-3 text-right font-semibold">
                  Nightly
                </th>
                <th scope="col" className="px-4 py-3 text-right font-semibold">
                  Weekly ({stayTerms.weeklyRateMinNights}–{stayTerms.monthlyRateMinNights - 1} nights)
                </th>
                <th scope="col" className="py-3 pl-4 text-right font-semibold">
                  Monthly ({stayTerms.monthlyRateMinNights}+ nights)
                </th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {rooms.map((room) => {
                const photo = roomPhotos[room.name]
                return (
                  <tr
                    key={room.name}
                    className="grid grid-cols-[5rem_1fr] gap-x-4 gap-y-1 border-b border-gray-200 py-5 md:table-row md:py-0"
                  >
                    <th scope="row" className="col-span-2 font-normal md:py-4 md:pr-4">
                      <span className="flex items-center gap-4">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          width={80}
                          height={60}
                          className="h-[60px] w-20 shrink-0 rounded object-cover"
                        />
                        <span>
                          <span className="block text-lg font-semibold text-gray-900">{room.name}</span>
                          <span className="block text-sm text-gray-700">Sleeps {room.sleeps}</span>
                        </span>
                      </span>
                    </th>
                    <td className="col-span-2 text-gray-800 md:px-4 md:py-4">
                      <span className="sr-only md:hidden">Beds: </span>
                      {room.layout}
                      <span className="md:hidden">{room.barFridge ? " · Bar fridge" : " · No bar fridge"}</span>
                    </td>
                    <td className="hidden text-gray-800 md:table-cell md:px-4 md:py-4">
                      {room.barFridge ? "Yes" : "No"}
                    </td>
                    <td className="col-span-2 flex justify-between text-gray-900 md:table-cell md:px-4 md:py-4 md:text-right md:tabular-nums">
                      <span className="text-gray-700 md:hidden">Nightly</span>
                      <span>From R{room.price}</span>
                    </td>
                    <td className="col-span-2 flex justify-between text-gray-900 md:table-cell md:px-4 md:py-4 md:text-right md:tabular-nums">
                      <span className="text-gray-700 md:hidden">
                        Weekly ({stayTerms.weeklyRateMinNights}–{stayTerms.monthlyRateMinNights - 1} nights)
                      </span>
                      <span>From R{room.weeklyPrice}</span>
                    </td>
                    <td className="col-span-2 flex justify-between font-semibold text-sage-800 md:table-cell md:py-4 md:pl-4 md:text-right md:tabular-nums">
                      <span className="font-normal text-gray-700 md:hidden">
                        Monthly ({stayTerms.monthlyRateMinNights}+ nights)
                      </span>
                      <span>From R{room.monthlyPrice}</span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
            <tfoot className="block md:table-footer-group">
              <tr className="block md:table-row">
                <th scope="row" colSpan={6} className="block pt-4 text-left font-semibold text-gray-900 md:table-cell">
                  {capacity.roomCount} rooms · Sleeps up to {capacity.maxGuests} in total
                </th>
              </tr>
            </tfoot>
          </table>

          <p className="mt-6 text-sm text-gray-700">
            Rates are per room, per night. Your quote confirms the price for your dates.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <Link
              href={quoteHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-sage-700 px-8 font-semibold text-white transition-colors hover:bg-sage-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-700 focus-visible:ring-offset-2"
            >
              Get a team quote
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/rooms"
              className="font-semibold text-sage-700 underline underline-offset-4 hover:text-sage-800"
            >
              Room photos and details
            </Link>
          </div>
        </div>
      </section>

      {/* On site: security, the house, and times */}
      <section aria-labelledby="onsite-heading" className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:px-8">
          <div>
            <h2 id="onsite-heading" className="text-3xl font-bold text-gray-900 sm:text-4xl">
              On site
            </h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Security and parking</h3>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li>Secure gated parking for work vehicles</li>
                  <li>CCTV and ADT armed response</li>
                  <li>Bringing a trailer? Confirm space with us before booking.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">In the house</h3>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li>Private ensuite in every room</li>
                  <li>WiFi included</li>
                  <li>Weekly cleaning</li>
                  <li>Communal kitchenette for self&#8209;catering</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Times</h3>
                <dl className="mt-3 space-y-2 text-gray-700">
                  <div className="flex gap-2">
                    <dt>Check-in:</dt>
                    <dd className="font-semibold text-gray-900">from {stayTerms.checkIn}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt>Check-out:</dt>
                    <dd className="font-semibold text-gray-900">by {stayTerms.checkOut}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt>Quiet hours:</dt>
                    <dd className="font-semibold text-gray-900">{stayTerms.quietHoursLabel}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <figure className="w-full max-w-[337px]">
            <Image
              src="/images/secure-parking-cctv.jpg"
              alt="Night-time CCTV view of guest vehicles parked inside the gated yard"
              width={337}
              height={182}
              className="h-auto w-full rounded-lg"
            />
            <figcaption className="mt-3 text-sm text-gray-600">The gated yard on the on-site CCTV camera.</figcaption>
          </figure>
        </div>
      </section>

      {/* How booking works: terms beside the contact actions */}
      <section aria-labelledby="booking-heading" className="bg-gray-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="booking-heading" className="text-3xl font-bold sm:text-4xl">
            How booking works
          </h2>
          <ol className="mt-10 grid gap-10 md:grid-cols-3">
            <li>
              <p className="text-sm font-semibold text-sage-300">Step 1</p>
              <h3 className="mt-1 text-xl font-semibold">Send your dates and team size</h3>
              <p className="mt-2 text-gray-300">WhatsApp or call {business.phone}.</p>
            </li>
            <li>
              <p className="text-sm font-semibold text-sage-300">Step 2</p>
              <h3 className="mt-1 text-xl font-semibold">Get your quote</h3>
              <p className="mt-2 text-gray-300">Quotes usually go out the same day.</p>
            </li>
            <li>
              <p className="text-sm font-semibold text-sage-300">Step 3</p>
              <h3 className="mt-1 text-xl font-semibold">Pay by EFT</h3>
              <p className="mt-2 text-gray-300">
                EFT only; cash is not accepted. A refundable security deposit may apply to extended stays. Invoices on
                request.
              </p>
            </li>
          </ol>
          <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
            <ContactButtons onDark />
            <Link
              href={quoteHref}
              className="font-semibold text-white underline underline-offset-4 hover:text-sage-200"
            >
              Or send a company quote request
            </Link>
          </div>
        </div>
      </section>

      {/* Guest reviews */}
      <section aria-labelledby="reviews-heading" className="bg-sage-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="reviews-heading" className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What guests say
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {[
              {
                quote: "They are very welcoming and caring. Comfortable place and nice environment, it was very clean.",
                name: "Hlumisa",
              },
              {
                quote: "The room was clean and Steve was super friendly.",
                name: "Taukobong",
              },
            ].map((review) => (
              <figure key={review.name}>
                <blockquote className="text-pretty text-xl leading-relaxed text-gray-900">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-gray-700">
                  <span className="font-semibold text-gray-900">{review.name}</span>, guest review on Booking.com
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-10 text-pretty text-gray-700">
            Read all our reviews on{" "}
            <a
              href={reviewPlatforms.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sage-700 underline underline-offset-4 hover:text-sage-800"
            >
              Booking.com
            </a>{" "}
            and{" "}
            <a
              href={reviewPlatforms.airbnb}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sage-700 underline underline-offset-4 hover:text-sage-800"
            >
              Airbnb
            </a>
            .
          </p>
        </div>
      </section>

      {/* Also staying with us */}
      <section aria-labelledby="also-heading" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="also-heading" className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Not booking for a team?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-700">
            Students, hospital staff and individual guests stay with us too.
          </p>
          <ul className="mt-8 grid border-t border-gray-200 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/accommodation-near-uwc",
                label: "UWC students",
                detail: "Accommodation near UWC",
              },
              {
                href: "/accommodation-near-cput",
                label: "CPUT students",
                detail: "Accommodation near CPUT",
              },
              {
                href: "/monthly-accommodation",
                label: "Tygerberg Hospital staff",
                detail: "Monthly stays for medical staff",
              },
              {
                href: "/check-availability",
                label: "Short stays",
                detail: "Check dates for a night or a week",
              },
            ].map((item) => (
              <li key={item.href} className="border-b border-gray-200">
                <Link
                  href={item.href}
                  className="group flex h-full items-center justify-between gap-4 py-5 pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-700 sm:pr-6"
                >
                  <span>
                    <span className="block font-semibold text-gray-900 group-hover:text-sage-800">{item.label}</span>
                    <span className="block text-sm text-gray-700">{item.detail}</span>
                  </span>
                  <ArrowRight
                    className="h-5 w-5 shrink-0 text-sage-700 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LatestBlogPosts />

      {/* FAQ: only what the sections above don't already answer */}
      <section aria-labelledby="faq-heading" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Other questions
            </h2>
            <dl className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
              {faqs.map((faq) => (
                <div key={faq.question} className="py-6">
                  <dt className="text-lg font-semibold text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-gray-700">{faq.answer}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-gray-700">
              More answers in the{" "}
              <Link
                href="/faq"
                className="font-semibold text-sage-700 underline underline-offset-4 hover:text-sage-800"
              >
                full FAQ
              </Link>{" "}
              and the{" "}
              <Link
                href="/guest-information"
                className="font-semibold text-sage-700 underline underline-offset-4 hover:text-sage-800"
              >
                guest information
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      {/* FAQPage schema: mirrors the visible questions exactly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
    </>
  )
}

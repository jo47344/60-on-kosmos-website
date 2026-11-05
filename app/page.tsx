import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MapPin,
  Phone,
  Star,
  Wifi,
  Car,
  Shield,
  Coffee,
  CheckCircle2,
  Users,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { TrustBadges } from "@/components/trust-badges"
import { LatestBlogPosts } from "@/components/latest-blog-posts"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bellville South Accommodation for Contractors & Teams | 60 on Kosmos",
  description: "Private ensuite accommodation in Bellville South for contractors, project teams and working professionals. Secure parking, WiFi, weekly cleaning and company invoices. Request a quote.",
  alternates: {
    canonical: "https://www.60onkosmos.co.za/",
  },
  openGraph: {
    title: "Bellville South Accommodation for Contractors & Teams | 60 on Kosmos",
    description: "Private ensuite accommodation in Bellville South for contractors, project teams and working professionals. Secure parking, WiFi, weekly cleaning and company invoices. Request a quote.",
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

export default function HomePage() {
  const roomTypes = [
    {
      name: "Standard Twin Room",
      price: "From R580/night",
      image: "/images/standard-twin-room.jpg",
      bestFor: "Best for 2 contractors sharing",
      features: ["2 single beds", "Private ensuite", "Free WiFi", "Kitchen access"],
    },
    {
      name: "Deluxe Twin Room",
      price: "From R650/night",
      image: "/images/deluxe-twin-room.jpg",
      bestFor: "Best for professionals wanting extra comfort",
      features: ["2 single beds", "Private ensuite", "Bar fridge", "Premium linens"],
    },
    {
      name: "Double Room",
      price: "From R680/night",
      image: "/images/sage-double-room.png",
      bestFor: "Best for solo professionals or couples",
      features: ["Double bed", "Private ensuite", "Bar fridge", "Premium bedding"],
    },
    {
      name: "Triple Room",
      price: "From R840/night",
      image: "/images/triple-room.jpg",
      bestFor: "Best for 3-person crews",
      features: ["3 single beds", "Private ensuite", "From R224/person monthly", "Best value"],
    },
  ]

  return (
    <>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative isolate flex min-h-[540px] items-end overflow-hidden sm:min-h-[600px] lg:min-h-[660px]">
          <Image
            src="/images/exterior-building.png"
            alt="60 on Kosmos Guesthouse Bellville South - accommodation for project teams and contractors in Cape Town"
            fill
            className="-z-10 object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-sage-900/95 via-sage-900/70 to-sage-900/20 md:bg-gradient-to-r md:from-sage-900/95 md:via-sage-900/70 md:to-sage-900/10"
          />
          <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
            <div className="flex max-w-2xl flex-col gap-5 text-white sm:gap-6">
              <p className="text-sm font-semibold text-sage-100">Bellville South, Cape Town · Near the N1</p>
              <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                Accommodation for Small Project Teams in Bellville
              </h1>
              <p className="max-w-xl text-lg text-white/90 sm:text-xl">
                Private ensuite rooms, secure parking, WiFi, weekly cleaning and flexible company rates for teams of
                up to eight.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-auto bg-white px-7 py-4 text-base font-semibold text-sage-900 hover:bg-sage-50"
                >
                  <Link href="/contractor-accommodation#company-enquiry">Get a Company Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-auto border-white/70 bg-transparent px-7 py-4 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/check-availability">Check Short-Stay Availability</Link>
                </Button>
              </div>
              <dl className="mt-2 grid max-w-xl grid-cols-3 gap-4 border-t border-white/20 pt-5 text-white">
                <div>
                  <dt className="text-xs text-white/75 sm:text-sm">Rooms from</dt>
                  <dd className="font-display text-xl font-bold sm:text-2xl">R580<span className="text-sm font-medium text-white/75">/night</span></dd>
                </div>
                <div>
                  <dt className="text-xs text-white/75 sm:text-sm">Team size</dt>
                  <dd className="font-display text-xl font-bold sm:text-2xl">Up to 8</dd>
                </div>
                <div>
                  <dt className="text-xs text-white/75 sm:text-sm">Monthly rates</dt>
                  <dd className="font-display text-xl font-bold sm:text-2xl">28+ nights</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadges />

        {/* Project teams */}
        <section className="bg-sage-900 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold sm:text-4xl">Built for project teams</h2>
              <p className="max-w-xl text-lg text-sage-100">
                Flexible terms, group quotes and company invoices on request. Monthly rates apply to stays of 28
                nights or more.
              </p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-sage-900 hover:bg-sage-50">
                  <Link href="/contractor-accommodation">
                    Team &amp; contractor rates
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20looking%20for%20accommodation%20for%20my%20team">
                    WhatsApp your team&apos;s dates
                  </a>
                </Button>
              </div>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-xl bg-white/15 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { icon: MapPin, title: "Near the N1", detail: "Easy access to sites across the northern suburbs" },
                { icon: Shield, title: "Secure gated parking", detail: "CCTV, secure gates and ADT armed response" },
                { icon: Wifi, title: "Free high-speed WiFi", detail: "For calls, reports and downtime" },
              ].map(({ icon: Icon, title, detail }) => (
                <li key={title} className="flex items-start gap-4 bg-sage-900 p-5">
                  <Icon className="mt-0.5 h-6 w-6 flex-none text-sage-300" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-sage-100">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Rooms Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-3 sm:mb-12">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Our Rooms</h2>
              <p className="max-w-2xl text-lg text-gray-600">
                Clean, comfortable ensuite rooms with free WiFi, secure parking, and weekly cleaning included.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {roomTypes.map((room, index) => (
                <Card key={index} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                  <div className="relative h-48 sm:h-52">
                    <Image
                      src={room.image || "/placeholder.svg"}
                      alt={`${room.name} - Accommodation Bellville South`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading={index > 0 ? "lazy" : undefined}
                      quality={80}
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg sm:text-xl">{room.name}</CardTitle>
                    <CardDescription className="text-sm font-medium text-sage-700">
                      {room.bestFor}
                    </CardDescription>
                    <div className="mt-2 flex flex-col">
                      <span className="font-display text-lg font-bold text-gray-900">{room.price}</span>
                      <span className="text-sm text-gray-600">Monthly rates for 28+ nights</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <ul className="mb-5 space-y-2">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle2 className="mr-2 h-4 w-4 flex-shrink-0 text-sage-600" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="mt-auto w-full bg-sage-600 hover:bg-sage-700">
                      <Link href="/rooms">View {room.name}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 sm:mt-10">
              <Button asChild size="lg" variant="outline" className="w-full border-sage-600 text-sage-800 sm:w-auto">
                <Link href="/rooms">Compare all rooms</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Guest Reviews */}
        <section className="py-12 sm:py-16 bg-sage-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-3 sm:mb-10">
              <p className="text-sm font-semibold text-sage-700">Trusted by guests</p>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Clean, safe, and welcoming</h2>
              <p className="text-base sm:text-lg text-gray-600">Read verified guest feedback on Booking.com and Google Reviews.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                { quote: "They are very welcoming and caring. Comfortable place and nice environment, it was very clean.", name: "Hlumisa", source: "Booking.com" },
                { quote: "The room was clean and Steve was super friendly.", name: "Taukobong", source: "Booking.com" },
                { quote: "Very friendly and helpful staff, and the rooms are very neat and clean.", name: "Dineo", source: "Google Reviews" },
              ].map((review) => (
                <Card key={review.name} className="border-sage-200 bg-white">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="flex gap-1" aria-label="5 star review">
                      {[...Array(5)].map((_, index) => <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-lg leading-relaxed text-gray-800">&ldquo;{review.quote}&rdquo;</p>
                    <p className="text-sm font-semibold text-gray-900">{review.name} <span className="font-normal text-gray-500">· {review.source}</span></p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild variant="outline" className="border-sage-600 text-sage-800">
                <Link href="/testimonials">Read more guest reviews</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-3 sm:mb-12">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Who Stays With Us?</h2>
              <p className="max-w-2xl text-lg text-gray-600">
                Project teams, visiting students and working professionals, from a single night to several months.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="flex flex-col ring-2 ring-sage-600">
                <CardContent className="flex flex-1 flex-col items-start gap-3 p-6">
                  <div className="rounded-full bg-sage-600 px-3 py-1 text-xs font-bold text-white">
                    Most popular
                  </div>
                  <Briefcase className="h-9 w-9 text-sage-600" aria-hidden="true" />
                  <h3 className="text-xl font-bold">Project Teams & Contractors</h3>
<p className="flex-1 text-gray-600">
            Daily and weekly rates, plus monthly rates for stays of 28 nights or more. Group quotes are available, and check-in is from 14:00.
          </p>
                  <Button asChild className="mt-2 w-full bg-sage-600 hover:bg-sage-700">
                    <Link href="/contractor-accommodation">Team Rates</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex flex-col">
                <CardContent className="flex flex-1 flex-col items-start gap-3 p-6">
                  <GraduationCap className="h-9 w-9 text-sage-600" aria-hidden="true" />
                  <h3 className="text-xl font-bold">International Students</h3>
                  <p className="flex-1 text-gray-600">
                    Approximately 5–8 minutes from UWC or CPUT by car, subject to traffic. For exchange, research and
                    short-programme visits.
                  </p>
                  <Button asChild variant="outline" className="mt-2 w-full border-sage-600 bg-transparent text-sage-800">
                    <Link href="/accommodation-near-uwc">Student Options</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex flex-col">
                <CardContent className="flex flex-1 flex-col items-start gap-3 p-6">
                  <Users className="h-9 w-9 text-sage-600" aria-hidden="true" />
                  <h3 className="text-xl font-bold">Working Professionals & Visitors</h3>
                  <p className="flex-1 text-gray-600">
                    Short and medium stays for training, site visits, and business travel in Cape Town's northern
                    suburbs.
                  </p>
                  <Button asChild variant="outline" className="mt-2 w-full border-sage-600 bg-transparent text-sage-800">
                    <Link href="/rooms">View Rooms</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-10">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">What&apos;s Included</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-sage-100">
                  <Wifi className="h-6 w-6 text-sage-700" aria-hidden="true" />
                </div>
                <div><h3 className="text-lg font-semibold">Free WiFi</h3>
                <p className="text-sm text-gray-600">High-speed internet</p></div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-sage-100">
                  <Car className="h-6 w-6 text-sage-700" aria-hidden="true" />
                </div>
                <div><h3 className="text-lg font-semibold">Secure Parking</h3>
                <p className="text-sm text-gray-600">CCTV + ADT armed response</p></div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-sage-100">
                  <Sparkles className="h-6 w-6 text-sage-700" aria-hidden="true" />
                </div>
                <div><h3 className="text-lg font-semibold">Weekly Cleaning</h3>
                <p className="text-sm text-gray-600">Fresh linen included</p></div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-sage-100">
                  <Coffee className="h-6 w-6 text-sage-700" aria-hidden="true" />
                </div>
                <div><h3 className="text-lg font-semibold">Self-Catering</h3>
                <p className="text-sm text-gray-600">Kitchen facilities</p></div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-sage-600 bg-transparent text-sage-800 sm:w-auto"
              >
                <Link href="/amenities">View All Amenities</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <LatestBlogPosts />

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-3 sm:mb-10">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Quick answers to common questions about our accommodation</p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Can you accommodate a small team?</h3>
                <p className="text-gray-700 text-sm sm:text-base">Yes. Our private-ensuite guest rooms can accommodate teams of up to 8 guests, depending on the required room-sharing arrangement. Multi-room bookings are subject to availability.</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">How does invoicing work?</h3>
                <p className="text-gray-700 text-sm sm:text-base">Invoices are provided on request. Monthly rates apply to stays of 28 nights or more; a refundable security deposit may apply to extended stays.</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Is there parking for work vehicles?</h3>
                <p className="text-gray-700 text-sm sm:text-base">Yes, secure gated parking is available for work vehicles, with CCTV and ADT armed response. If you need to bring a trailer, please confirm with us before booking so we can check space is available.</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Can the team cook?</h3>
                <p className="text-gray-700 text-sm sm:text-base">Yes, guests have kitchen access.</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">How fast can you confirm a booking?</h3>
                <p className="text-gray-700 text-sm sm:text-base">WhatsApp 074 524 5703 with dates and team size; quotes usually go out the same day.</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Do you have real guest reviews?</h3>
                <p className="text-gray-700 text-sm sm:text-base">Yes — view our latest verified reviews directly on <a href="https://www.booking.com/hotel/za/60-on-kosmos-cape-town.html" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-700 font-semibold underline">Booking.com</a> and <a href="https://www.airbnb.co.za/rooms/1055447623" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-700 font-semibold underline">Airbnb</a>. Both link directly to the real listings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-sage-800 py-12 text-white sm:py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold md:text-4xl">Need rooms for your team?</h2>
              <p className="max-w-xl text-lg text-sage-100">
                Send your dates and team size on WhatsApp. Quotes usually go out the same day.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-auto w-full bg-white px-7 py-4 text-base font-semibold text-sage-900 hover:bg-sage-50 sm:w-auto"
              >
                <Link href="/book-now">Book Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-auto w-full border-white/70 bg-transparent px-7 py-4 text-base font-semibold text-white hover:bg-white/10 hover:text-white sm:w-auto"
              >
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20looking%20for%20accommodation%20for%20myself%20or%20my%20team">WhatsApp 074 524 5703</a>
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* FAQPage Schema (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can you accommodate a small team?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Our private-ensuite guest rooms can accommodate teams of up to 8 guests, depending on the required room-sharing arrangement. Multi-room bookings are subject to availability.",
                },
              },
              {
                "@type": "Question",
                name: "How does invoicing work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Invoices are provided on request. Monthly rates apply to stays of 28 nights or more; a refundable security deposit may apply to extended stays.",
                },
              },
              {
                "@type": "Question",
                name: "Is there parking for work vehicles?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, secure gated parking is available for work vehicles, with CCTV and ADT armed response. If you need to bring a trailer, please confirm with us before booking so we can check space is available.",
                },
              },
              {
                "@type": "Question",
                name: "Can the team cook?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, guests have kitchen access.",
                },
              },
              {
                "@type": "Question",
                name: "How fast can you confirm a booking?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "WhatsApp 074 524 5703 with dates and team size; quotes usually go out the same day.",
                },
              },
              {
                "@type": "Question",
                name: "Do you have real guest reviews?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — view our latest verified reviews directly on Booking.com and Airbnb. Both link directly to the real listings.",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}

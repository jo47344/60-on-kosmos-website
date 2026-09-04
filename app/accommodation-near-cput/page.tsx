import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Wifi, Car, Users, Shield, CheckCircle2, Clock, MapPin, Phone, GraduationCap, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { FAQSchema } from "@/components/faq-schema"
import { capacity, facilities } from "@/lib/site-facts"

export const metadata: Metadata = {
  title: { absolute: "Accommodation Near CPUT Bellville Campus" },
  description:
    "Guest accommodation near the CPUT Bellville campus for exchange students, visiting researchers, short courses, graduations and family visiting students. Ensuite rooms, WiFi, secure parking.",
  alternates: {
    canonical: "https://www.60onkosmos.co.za/accommodation-near-cput",
  },
  keywords: [
    "accommodation near cput bellville campus",
    "guest accommodation cput bellville",
    "cput visiting student accommodation",
    "cput exchange student housing",
    "accommodation for cput graduation",
    "cput visiting lecturer accommodation",
  ],
  openGraph: {
    title: "Accommodation Near CPUT Bellville Campus",
    description:
      "Guest accommodation near the CPUT Bellville campus for exchange students, visiting researchers, short courses, graduations and family visiting students.",
    url: "https://www.60onkosmos.co.za/accommodation-near-cput",
    type: "website",
    images: [
      {
        url: "https://www.60onkosmos.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Guest Accommodation Near CPUT Bellville Campus",
      },
    ],
  },
}

const faqs = [
  {
    question: "Is this a CPUT campus residence or NSFAS-accredited property?",
    answer:
      "No. 60 on Kosmos is an independent guesthouse, not a CPUT campus residence and not an NSFAS-accredited student property. We are not a substitute for full academic-year residence — we're a practical option for shorter stays of a few weeks to a few months.",
  },
  {
    question: "How far is 60 on Kosmos from CPUT Bellville campus?",
    answer:
      "60 on Kosmos is approximately 5–8 minutes from the CPUT Bellville campus by car, subject to traffic.",
  },
  {
    question: "Who typically stays here for CPUT-related visits?",
    answer:
      "Exchange and research students, visitors on short university programmes, people attending graduations, seminars, conferences or training, visiting lecturers and staff, and parents or family visiting students at CPUT.",
  },
  {
    question: "Can I book for just a few weeks?",
    answer:
      "Yes. We accommodate short stays as well as longer stays of 28 nights or more, which qualify for our monthly rate. Contact us with your dates for a quote.",
  },
]

export default function AccommodationNearCputPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Accommodation Near CPUT", url: "/accommodation-near-cput" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <li>
              <Link href="/" className="hover:text-sage-600">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 font-medium">Accommodation Near CPUT</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/exterior-building.png"
            alt="60 on Kosmos guest accommodation near CPUT Bellville campus"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>Near the CPUT Bellville Campus</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
              Accommodation Near CPUT Bellville Campus
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 text-pretty max-w-3xl mx-auto">
              Private ensuite rooms in Bellville, approximately 5–8 minutes from the CPUT Bellville campus by car,
              subject to traffic. Built for short and medium stays — not a campus residence or NSFAS-accredited
              property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg">
                <Link href="/check-availability">Check Availability</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg"
              >
                <a
                  href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20looking%20for%20accommodation%20near%20CPUT%20Bellville%20campus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Who this is for</h2>
          <p className="text-gray-700 mb-6">
            We're not trying to be a permanent student residence — our real markets around CPUT Bellville are
            shorter, defined stays:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "International visiting students staying for several weeks or months",
              "Exchange and research students",
              "Short university programmes",
              "Graduations",
              "Seminars, conferences and training",
              "Visiting lecturers and staff",
              "Parents and family visiting students",
              "Contractors working at or near the campus",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Looking specifically for accommodation for a contractor or project team working near CPUT? See our{" "}
            <Link href="/contractor-accommodation-uwc-cput-bellville" className="text-sage-600 underline">
              contractor accommodation near UWC &amp; CPUT
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      {/* Rooms / facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Rooms &amp; what&apos;s included</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            {capacity.roomCount} private ensuite rooms at 60 on Kosmos, suitable for individuals, couples, or small
            groups of up to {capacity.maxGuests} guests in total.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Users, label: facilities[0] },
              { icon: Wifi, label: facilities[3] },
              { icon: Car, label: facilities[1] },
              { icon: Shield, label: facilities[2] },
              { icon: CheckCircle2, label: facilities[5] },
              { icon: Clock, label: facilities[4] },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200">
                <Icon className="w-5 h-5 text-sage-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">{label}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/rooms" className="text-sage-600 underline font-medium">
              View room types and current rates
            </Link>
          </div>
        </div>
      </section>

      {/* Duration guidance */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Short stay or a few months?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">A few nights to a few weeks</h3>
                    <p className="text-gray-600 text-sm">
                      Nightly and weekly rates for graduations, conferences, short programmes, or a family visit.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <GraduationCap className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">A semester or exchange programme</h3>
                    <p className="text-gray-600 text-sm">
                      Our monthly rate applies to stays of 28 nights or more — see{" "}
                      <Link href="/monthly-accommodation" className="text-sage-600 underline">
                        monthly accommodation
                      </Link>{" "}
                      for details.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Send us your dates for a quote</h2>
          <p className="text-lg text-gray-100 mb-8">
            Tell us your arrival date and how long you need to stay near CPUT, and we&apos;ll confirm availability
            and rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold">
              <Link href="/check-availability">Check Availability</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-sage-700 px-8 py-6 text-lg"
            >
              <a
                href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20looking%20for%20accommodation%20near%20CPUT%20Bellville%20campus"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-10 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-center text-sm">
            <Link href="/accommodation-near-uwc" className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium">
              <Briefcase className="w-4 h-4" />
              Accommodation near UWC
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/monthly-accommodation" className="text-sage-600 hover:text-sage-700">
              Monthly accommodation
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/blog/international-student-housing-uwc" className="text-sage-600 hover:text-sage-700">
              International student guide
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/student-faq" className="text-sage-600 hover:text-sage-700">
              Visitor FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

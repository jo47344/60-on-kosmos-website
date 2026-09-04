import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Wifi, Car, Users, Shield, CheckCircle2, Clock, MapPin, Phone, ArrowRight, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Company Accommodation Near UWC & CPUT Bellville | 60 on Kosmos",
  description:
    "Company and project team accommodation near UWC and CPUT Bellville campus. 4 private ensuite rooms, up to 8 guests, weekly/monthly rates, company invoicing.",
  alternates: {
    canonical: "https://www.60onkosmos.co.za/contractor-accommodation-uwc-cput-bellville",
  },
  keywords: [
    "contractor accommodation near UWC",
    "contractor accommodation near CPUT Bellville",
    "company accommodation Bellville",
    "project team accommodation near UWC",
  ],
  openGraph: {
    title: "Company Accommodation Near UWC & CPUT Bellville | 60 on Kosmos",
    description:
      "Company and project team accommodation near UWC and CPUT Bellville campus. 4 private ensuite rooms, up to 8 guests.",
    url: "https://www.60onkosmos.co.za/contractor-accommodation-uwc-cput-bellville",
    type: "website",
    images: [
      {
        url: "https://www.60onkosmos.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Company Accommodation Near UWC and CPUT Bellville",
      },
    ],
  },
}

export default function UwcCputBellvillePage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Contractor Accommodation", url: "/contractor-accommodation" },
    { name: "UWC & CPUT Bellville", url: "/contractor-accommodation-uwc-cput-bellville" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={breadcrumbItems} />

      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <li>
              <Link href="/" className="hover:text-sage-600">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/contractor-accommodation" className="hover:text-sage-600">
                Contractor Accommodation
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 font-medium">UWC & CPUT Bellville</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/exterior-building.png"
            alt="60 on Kosmos accommodation near UWC and CPUT Bellville"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>UWC & CPUT Bellville Campus</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
              Company Accommodation Near UWC & CPUT Bellville
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 text-pretty max-w-3xl mx-auto">
              Practical, private-ensuite accommodation in Bellville South for company staff, visiting trainers, and
              project teams working near the University of the Western Cape and CPUT Bellville campus. Suitable for
              teams of up to 8 guests, with weekly and monthly stay options and company invoicing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg">
                <Link href="/contractor-accommodation#company-enquiry">Get a Company Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg"
              >
                <a
                  href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20contractor%20accommodation%20near%20UWC%2FCPUT%20Bellville"
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

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Company accommodation near UWC and CPUT Bellville</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              The University of the Western Cape off Robert Sobukwe Road, and the CPUT Bellville campus on Symphony
              Way, both draw a steady flow of visiting staff who aren&apos;t students: guest lecturers, external
              examiners, short-course trainers, IT and maintenance contractors servicing campus buildings, and
              company representatives running recruitment days or corporate training sessions on campus.
            </p>
            <p>
              60 on Kosmos in Bellville South is roughly a 5–10 minute drive from both campuses via Robert Sobukwe
              Road and Modderdam Road, making it a convenient, professional base for this kind of short-term
              company visit. This is company and professional accommodation, not student digs — private ensuite
              rooms, a proper kitchen, and secure parking, geared toward working adults rather than a shared
              student house.
            </p>
            <p>
              We regularly host visiting trainers running short courses, maintenance and facilities contractors
              working on campus infrastructure, and company staff attending multi-day sessions at UWC or CPUT — all
              of whom need somewhere close, quiet, and easy to invoice back to head office.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Who this is for</h2>
          <p className="text-gray-700 mb-6">
            This location suits company and professional visitors to the UWC and CPUT Bellville campuses, including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Visiting lecturers, external examiners and short-course trainers",
              "Company recruitment teams running campus career days",
              "IT, electrical and facilities maintenance contractors on campus",
              "Corporate training attendees on multi-day courses",
              "Conference and event support staff",
              "Company staff visiting for a few days rather than settling in long-term",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 bg-white rounded-lg p-4 border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby work areas */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Nearby project areas</h2>
          <p className="text-gray-700 mb-6">
            60 on Kosmos is well positioned for company visits and project work around both campuses, including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "University of the Western Cape, Robert Sobukwe Road",
              "CPUT Bellville campus, Symphony Way",
              "Northlink College Bellville",
              "Tygerberg Hospital and medical campus",
              "Bellville CBD and Voortrekker Road offices",
              "Modderdam Road commercial premises",
            ].map((area) => (
              <div key={area} className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4 text-sage-600 flex-shrink-0" />
                <span className="text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why suitable / rooms / amenities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Why 60 on Kosmos works for this project area</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">5–10 minutes from both campuses</h3>
                    <p className="text-gray-600 text-sm">
                      A short drive via Robert Sobukwe Road or Modderdam Road, easy for early lecture slots or
                      campus maintenance call-outs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Building2 className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Professional, not student, accommodation</h3>
                    <p className="text-gray-600 text-sm">
                      Private ensuite rooms and a quiet setting built for working adults on company business, with
                      invoicing your finance department can process directly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold text-center mb-6">Rooms & what&apos;s included</h3>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            4 private ensuite rooms at 60 on Kosmos, suitable for small teams of up to 8 guests in total.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Users, label: "Private ensuite rooms" },
              { icon: Wifi, label: "Wi-Fi included" },
              { icon: Car, label: "Secure parking" },
              { icon: CheckCircle2, label: "Weekly & monthly options" },
              { icon: Shield, label: "Company invoicing" },
              { icon: Clock, label: "Easy extensions, subject to availability" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200">
                <Icon className="w-5 h-5 text-sage-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Send us your dates, team size and work location for a company quote.</h2>
          <p className="text-lg text-gray-100 mb-8">
            We&apos;ll confirm the best available room combination for your team or visiting staff near UWC or CPUT
            Bellville.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold">
              <Link href="/contractor-accommodation#company-enquiry">Get a Company Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-sage-700 px-8 py-6 text-lg"
            >
              <a
                href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20contractor%20accommodation%20near%20UWC%2FCPUT%20Bellville"
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
            <Link href="/contractor-accommodation" className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium">
              <ArrowRight className="w-4 h-4 rotate-180" />
              All contractor accommodation locations
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contractor-accommodation" className="text-sage-600 hover:text-sage-700">
              Bellville &amp; Bellville South
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contractor-accommodation-stikland" className="text-sage-600 hover:text-sage-700">
              Stikland Industrial
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

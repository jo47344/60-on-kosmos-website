import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Wifi, Car, Users, Shield, CheckCircle2, Clock, MapPin, Phone, ArrowRight, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Contractor Accommodation Near N1 City & Parow | 60 on Kosmos",
  description:
    "Accommodation for project teams working near N1 City and Parow. 4 private ensuite rooms, up to 8 guests, weekly/monthly rates, company invoicing.",
  alternates: {
    canonical: "https://www.60onkosmos.co.za/contractor-accommodation-n1-city-parow",
  },
  keywords: [
    "contractor accommodation N1 City",
    "accommodation near N1 City for workers",
    "contractor accommodation Parow",
    "project accommodation Parow Cape Town",
  ],
  openGraph: {
    title: "Contractor Accommodation Near N1 City & Parow | 60 on Kosmos",
    description:
      "Accommodation for project teams working near N1 City and Parow. 4 private ensuite rooms, up to 8 guests.",
    url: "https://www.60onkosmos.co.za/contractor-accommodation-n1-city-parow",
    type: "website",
    images: [
      {
        url: "https://www.60onkosmos.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contractor Accommodation Near N1 City and Parow",
      },
    ],
  },
}

export default function N1CityParowPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Contractor Accommodation", url: "/contractor-accommodation" },
    { name: "N1 City & Parow", url: "/contractor-accommodation-n1-city-parow" },
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
            <li className="text-gray-900 font-medium">N1 City & Parow</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/exterior-building.png"
            alt="60 on Kosmos accommodation near N1 City and Parow"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>N1 City & Parow</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
              Contractor Accommodation Near N1 City & Parow
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 text-pretty max-w-3xl mx-auto">
              Practical, private-ensuite accommodation in Bellville South for teams working retail, office and mixed
              commercial projects around N1 City and Parow. Suitable for teams of up to 8 guests, with weekly and
              monthly stay options and company invoicing.
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
                  href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20contractor%20accommodation%20near%20N1%20City%2FParow"
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
          <h2 className="text-3xl font-bold mb-6">Working around N1 City and Parow?</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              N1 City, off Willie van Schoor Drive and the N1 highway, combines a large retail mall with a growing
              office and medical precinct, while neighbouring Parow along Voortrekker Road and Parow Industria
              further south hold a mix of retail, distribution and light-industrial premises. Project teams working
              here span retail fit-outs, office refurbishments, HVAC and electrical maintenance, and distribution
              centre work — all needing a base that&apos;s close but doesn&apos;t cost city-hotel rates.
            </p>
            <p>
              60 on Kosmos in Bellville South is only a short hop from both N1 City and Parow — typically 10–15
              minutes by road via Voortrekker Road or the N1, depending on the site. That makes it realistic for
              teams to get to an early call time without factoring in a long commute, and to get back for a proper
              rest at the end of a shift.
            </p>
            <p>
              We regularly host retail fit-out crews, office refurbishment teams, and maintenance technicians
              working this corridor — people who need dependable Wi-Fi for admin and reporting, secure overnight
              parking, and a kitchen so they&apos;re not relying on takeaways every night of a multi-week job.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Who this is for</h2>
          <p className="text-gray-700 mb-6">
            This location suits teams working retail, office and mixed commercial projects around N1 City and
            Parow, including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Retail fit-out and shopfitting crews at N1 City Mall",
              "Office refurbishment and IT installation teams",
              "HVAC, electrical and plumbing maintenance contractors",
              "Distribution and warehouse teams in Parow Industria",
              "Signage and shop-front installation crews",
              "Project supervisors managing multiple Parow-area sites",
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
            60 on Kosmos is well positioned for teams working across this retail and industrial corridor, including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "N1 City Mall and office precinct, Willie van Schoor Drive",
              "Parow CBD and Voortrekker Road commercial strip",
              "Parow Industria light-industrial and distribution sites",
              "Tygerberg Business Park",
              "Goodwood retail strip (a short drive further)",
              "Bellville CBD, minutes from base",
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
                    <h3 className="font-bold mb-2">10–15 minutes to N1 City or Parow</h3>
                    <p className="text-gray-600 text-sm">
                      A short, predictable drive via Voortrekker Road or the N1 highway, no matter which end of the
                      corridor your site is on.
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
                    <h3 className="font-bold mb-2">Flexible for multi-week retail projects</h3>
                    <p className="text-gray-600 text-sm">
                      Weekly and monthly rates with easy extensions where availability allows, suited to retail
                      fit-out timelines that can shift.
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
            We&apos;ll confirm the best available room combination for your team near N1 City or Parow.
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
                href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20contractor%20accommodation%20near%20N1%20City%2FParow"
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
            <Link href="/contractor-accommodation-grandwest-goodwood" className="text-sage-600 hover:text-sage-700">
              GrandWest & Goodwood
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contractor-accommodation" className="text-sage-600 hover:text-sage-700">
              Bellville
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contractor-accommodation-century-city" className="text-sage-600 hover:text-sage-700">
              Century City
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

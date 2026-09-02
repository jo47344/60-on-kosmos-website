import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Wifi, Car, Users, Shield, CheckCircle2, Clock, MapPin, Phone, ArrowRight, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Contractor Accommodation Blackheath & Saxenburg Park | 60 on Kosmos",
  description:
    "Worker accommodation for teams at Blackheath Industrial and Saxenburg Park. 5 private ensuite rooms, up to 8 guests, weekly/monthly rates, company invoicing.",
  alternates: {
    canonical: "https://www.60onkosmos.co.za/contractor-accommodation-blackheath-saxenburg",
  },
  keywords: [
    "contractor accommodation Blackheath",
    "contractor accommodation Saxenburg",
    "worker accommodation Blackheath Industrial",
    "project team accommodation Saxenburg Park",
  ],
  openGraph: {
    title: "Contractor Accommodation Blackheath & Saxenburg Park | 60 on Kosmos",
    description:
      "Worker accommodation for teams at Blackheath Industrial and Saxenburg Park. 5 private ensuite rooms, up to 8 guests.",
    url: "https://www.60onkosmos.co.za/contractor-accommodation-blackheath-saxenburg",
    type: "website",
    images: [
      {
        url: "https://www.60onkosmos.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contractor Accommodation Blackheath and Saxenburg Park",
      },
    ],
  },
}

export default function BlackheathSaxenburgPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Contractor Accommodation", url: "/contractor-accommodation" },
    { name: "Blackheath & Saxenburg Park", url: "/contractor-accommodation-blackheath-saxenburg" },
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "60 on Kosmos - Contractor Accommodation Near Blackheath & Saxenburg Park",
    description:
      "Private-ensuite accommodation for contractor and project teams working Blackheath Industrial and Saxenburg Park. 5 rooms, suitable for teams of up to 8 guests. Secure parking, WiFi, weekly and monthly rates, company invoicing.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "60 Kosmos Street",
      addressLocality: "Bellville South",
      addressRegion: "Western Cape",
      postalCode: "7530",
      addressCountry: "ZA",
    },
    geo: { "@type": "GeoCoordinates", latitude: -33.9347, longitude: 18.6489 },
    telephone: "+27745245703",
    priceRange: "R464-R840",
    url: "https://www.60onkosmos.co.za/contractor-accommodation-blackheath-saxenburg",
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
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
            <li className="text-gray-900 font-medium">Blackheath & Saxenburg Park</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/exterior-building.png"
            alt="60 on Kosmos accommodation near Blackheath and Saxenburg Park"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>Blackheath Industrial & Saxenburg Park</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
              Contractor Accommodation Near Blackheath & Saxenburg Park
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 text-pretty max-w-3xl mx-auto">
              Practical, private-ensuite accommodation in Bellville South for warehouse, engineering, manufacturing
              and logistics teams working Blackheath Industrial and Saxenburg Park. Suitable for teams of up to 8
              guests, with weekly and monthly stay options and company invoicing.
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
                  href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20contractor%20accommodation%20near%20Blackheath%2FSaxenburg"
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
          <h2 className="text-3xl font-bold mb-6">Serving the Blackheath and Saxenburg Park industrial belt</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              Blackheath Industrial and Saxenburg Park, off the R300 and Robert Sobukwe Road near Kuils River, are
              home to a dense cluster of warehousing, engineering workshops, manufacturing plants and logistics
              yards. Projects here tend to run on shift schedules — early starts, machinery downtime windows, and
              crews that need consistent, no-fuss accommodation rather than a hotel room they barely see.
            </p>
            <p>
              60 on Kosmos is based in Bellville South, roughly a 15–20 minute drive from Blackheath and Saxenburg
              Park via the R300. That&apos;s close enough for teams to get to site early without the unpredictability
              of staying further out, and central enough that supervisors going between multiple industrial sites in
              the Northern Suburbs aren&apos;t adding unnecessary driving time to their day.
            </p>
            <p>
              We regularly accommodate small crews on shutdown, installation, and maintenance contracts in this
              area — people who need a proper bed, a kitchen to cook in after a long shift, and secure parking for
              a bakkie loaded with tools, not a generic hotel stay.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Who this is for</h2>
          <p className="text-gray-700 mb-6">
            This location suits industrial and technical teams working the Blackheath and Saxenburg Park belt,
            including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Warehouse fit-out and racking installation crews",
              "Engineering and mechanical maintenance teams",
              "Manufacturing plant shutdown and turnaround crews",
              "Logistics and fleet servicing teams",
              "Riggers, welders and boilermakers on short contracts",
              "Site supervisors coordinating multiple industrial sites",
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
            60 on Kosmos is well positioned for teams working across this industrial belt, including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Blackheath Industrial, off Robert Sobukwe Road",
              "Saxenburg Park 1, 2 and 3 industrial estates",
              "Kuils River warehousing and logistics precincts",
              "R300 corridor engineering and manufacturing sites",
              "Van Riebeeck Road industrial premises",
              "Stikland Industrial (a short drive back toward Bellville)",
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
                    <h3 className="font-bold mb-2">Reliable commute via the R300</h3>
                    <p className="text-gray-600 text-sm">
                      Around 15–20 minutes to Blackheath and Saxenburg Park, avoiding the longer drive from the city
                      or southern suburbs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Wrench className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Built for shift and shutdown work</h3>
                    <p className="text-gray-600 text-sm">
                      Self-catering kitchen and flexible weekly/monthly terms suit crews on irregular shutdown or
                      maintenance schedules.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold text-center mb-6">Rooms & what&apos;s included</h3>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            5 private ensuite rooms at 60 on Kosmos, suitable for small teams of up to 8 guests in total.
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
            We&apos;ll confirm the best available room combination for your team near Blackheath or Saxenburg Park.
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
                href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20contractor%20accommodation%20near%20Blackheath%2FSaxenburg"
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
            <Link href="/contractor-accommodation-kuils-river" className="text-sage-600 hover:text-sage-700">
              Kuils River
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contractor-accommodation-stikland" className="text-sage-600 hover:text-sage-700">
              Stikland Industrial
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contractor-accommodation-northern-suburbs" className="text-sage-600 hover:text-sage-700">
              Northern Suburbs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

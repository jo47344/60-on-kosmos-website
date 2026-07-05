import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Briefcase,
  Wifi,
  Car,
  Utensils,
  Shield,
  CheckCircle2,
  Users,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Define all available suburb pages
const suburbData: Record<
  string,
  {
    title: string
    metaTitle: string
    metaDescription: string
    h1: string
    intro: string
    location: string
    nearby: string[]
  }
> = {
  parow: {
    title: "Project Team Accommodation Near Parow",
    metaTitle: "Project Team Accommodation Near Parow | 60 on Kosmos, Bellville South",
    metaDescription:
      "Accommodation for project teams working in Parow. Based in Bellville South, 60 on Kosmos offers secure private ensuite rooms, parking, and corporate terms for site crews.",
    h1: "Accommodation for Teams Working in Parow",
    intro:
      "Based in Bellville South, minutes from Parow and Parow Industria, 60 on Kosmos is a private, secure base for project teams and professionals working sites in the area — without the daily commute a rental or city hotel would mean.",
    location: "Parow & Parow Industria",
    nearby: ["Parow Industrial", "Parow Business District", "Bellville South (base location)"],
  },
  stikland: {
    title: "Project Team Accommodation Near Stikland",
    metaTitle: "Project Team Accommodation Near Stikland | 60 on Kosmos, Bellville South",
    metaDescription:
      "Stikland Industrial is minutes away. 60 on Kosmos offers private ensuite rooms, secure parking, and one invoice for project teams working in Stikland.",
    h1: "Accommodation for Teams Working in Stikland",
    intro:
      "Stikland Industrial is minutes from our door. For project teams and technical staff working sites there, 60 on Kosmos offers private ensuite rooms, secure overnight parking, and one invoice for your company's books — instead of a lease for a short-term job.",
    location: "Stikland Industrial",
    nearby: ["Stikland Industrial Park", "Stikland Highway Access", "Bellville South (base location)"],
  },
  goodwood: {
    title: "Project Team Accommodation Near Goodwood & Epping Industria",
    metaTitle: "Project Team Accommodation Near Goodwood | 60 on Kosmos, Bellville South",
    metaDescription:
      "Accommodation for project teams and technical professionals working in Goodwood and Epping Industria. Private ensuite rooms, secure parking, and flexible corporate terms.",
    h1: "Accommodation for Teams Working in Goodwood & Epping Industria",
    intro:
      "A short drive from Goodwood and Epping Industria, 60 on Kosmos hosts project teams and technical professionals working in the area — private ensuite rooms, secure parking, and corporate terms that flex with your project timeline.",
    location: "Goodwood & Epping Industria",
    nearby: ["Goodwood Industrial", "Epping Industrial", "Bellville South (base location)"],
  },
  "kuils-river": {
    title: "Project Team Accommodation Near Kuils River",
    metaTitle: "Project Team Accommodation Near Kuils River | 60 on Kosmos, Bellville South",
    metaDescription:
      "For project teams working around Kuils River and the R300 corridor. 60 on Kosmos offers secure accommodation in Bellville South with ensuite rooms and corporate invoicing.",
    h1: "Accommodation for Teams Working in Kuils River",
    intro:
      "For project teams and professionals working sites around Kuils River and the R300 corridor, 60 on Kosmos offers a private, secure base in Bellville South — minutes away via the R300, with ensuite rooms and one invoice for your company.",
    location: "Kuils River & R300 Corridor",
    nearby: ["Kuils River Industrial", "R300 Highway Access", "Bellville South (base location)"],
  },
  bellville: {
    title: "Project Team Accommodation in Bellville",
    metaTitle: "Project Team Accommodation in Bellville | 60 on Kosmos, Bellville South",
    metaDescription:
      "Right in Bellville South, 60 on Kosmos is a private base for project teams. Ensuite rooms, secure parking, and corporate invoicing for teams working in Bellville's business and industrial areas.",
    h1: "Accommodation for Teams Working in Bellville",
    intro:
      "Right in Bellville South, 60 on Kosmos is a private, serviced base for project teams and working professionals — ensuite rooms, secure parking, and monthly corporate invoicing, five minutes from Bellville's business and industrial areas.",
    location: "Bellville South",
    nearby: ["Bellville CBD", "Sacks Circle Industrial", "Mill Park Industrial", "TAC Business Park"],
  },
  "northern-suburbs": {
    title: "Project Team Accommodation, Cape Town Northern Suburbs",
    metaTitle: "Project Team Accommodation, Cape Town Northern Suburbs | 60 on Kosmos",
    metaDescription:
      "Based at the N1/R300 interchange, 60 on Kosmos serves project teams across Cape Town's Northern Suburbs. One base reaches Durbanville, Brackenfell, Kuils River, Parow, and beyond.",
    h1: "Accommodation for Teams Working Across the Northern Suburbs",
    intro:
      "Bellville South sits right on the N1/R300 interchange — putting project teams within easy reach of Durbanville, Brackenfell, Kuils River, Parow, and everywhere in between. One base, the whole region reachable, with private ensuite rooms and corporate invoicing.",
    location: "Northern Suburbs & N1/R300 Interchange",
    nearby: ["Durbanville", "Brackenfell", "Kuils River", "Parow", "N1 Highway", "R300 Highway"],
  },
}

export async function generateStaticParams() {
  return Object.keys(suburbData).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const suburb = suburbData[slug]

  if (!suburb) {
    return {
      title: "Not Found",
    }
  }

  return {
    title: suburb.metaTitle,
    description: suburb.metaDescription,
    alternates: {
      canonical: `https://60onkosmos.co.za/contractor-accommodation-${slug}`,
    },
    openGraph: {
      title: suburb.metaTitle,
      description: suburb.metaDescription,
      url: `https://60onkosmos.co.za/contractor-accommodation-${slug}`,
      type: "website",
    },
  }
}

export default async function ContractorAccommodationSuburbPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const suburb = suburbData[slug]

  if (!suburb) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-6">This location page does not exist.</p>
          <Link href="/contractor-accommodation">
            <Button>Back to Contractor Accommodation</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/exterior-building.png"
            alt="60 on Kosmos Contractor Accommodation"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>{suburb.location}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">{suburb.h1}</h1>
            <p className="text-xl text-gray-300 mb-8">{suburb.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg">
                <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20project%20team%20accommodation.%20Please%20send%20me%20a%20quote.">
                  Get a Quote on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg"
              >
                <a href="tel:+27745245703">
                  <Phone className="mr-2 h-5 w-5" />
                  074 524 5703
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose 60 on Kosmos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Briefcase className="w-12 h-12 text-sage-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Corporate Ready</h3>
                <p className="text-gray-600">
                  Professional invoicing, corporate rates, and flexible payment terms for your company.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-sage-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
                <p className="text-gray-600">
                  24/7 CCTV surveillance, secure parking for work vehicles, and locked gates for your team's safety.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-sage-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">No Long-Term Commitment</h3>
                <p className="text-gray-600">
                  Book by the week or month. Perfect for short-term projects without the hassle of a lease.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Nearby Industrial Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {suburb.nearby.map((location, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                <MapPin className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">{location}</h3>
                  <p className="text-gray-600">Minutes away from our accommodation</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">What's Included in Every Room</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Wifi, label: "Free WiFi" },
              { icon: Car, label: "Secure Parking" },
              { icon: Users, label: "Private Ensuite" },
              { icon: Utensils, label: "Self-Catering Kitchen" },
              { icon: CheckCircle2, label: "Weekly Cleaning" },
              { icon: Shield, label: "24/7 CCTV Security" },
            ].map(({ icon: Icon, label }, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <Icon className="w-6 h-6 text-sage-600 flex-shrink-0" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-lg mb-8 text-gray-100">
            Contact us for a custom quote tailored to your project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold"
            >
              <a href="https://wa.me/27745245703?text=Hi%2C%20I%27m%20interested%20in%20project%20team%20accommodation.%20Please%20send%20me%20a%20quote.">
                Get Quote on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-sage-700 px-8 py-6 text-lg"
            >
              <a href="/contractor-accommodation">
                View All Locations
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Back to Hub */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/contractor-accommodation" className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to All Locations
          </Link>
        </div>
      </section>
    </div>
  )
}

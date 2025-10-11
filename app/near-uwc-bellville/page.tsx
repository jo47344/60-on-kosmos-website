import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Car, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "Accommodation Near UWC Bellville | Private Ensuite Rooms 5–10 min",
  description:
    "Parents & visitors: clean, secure rooms near UWC & CPUT with parking & WiFi. Book direct via WhatsApp for best rates.",
  keywords:
    "accommodation near uwc bellville, rooms near uwc, parents visiting uwc accommodation, uwc visitor accommodation bellville",
  openGraph: {
    title: "Accommodation Near UWC Bellville | 60 on Kosmos",
    description: "Comfortable ensuite rooms just minutes from UWC campus with secure parking",
  },
}

export default function NearUWCPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-sage-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Near UWC Bellville</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-sage-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-green-600 mb-4">
                <GraduationCap className="w-6 h-6" />
                <span className="font-semibold">UWC Visitor Accommodation</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Accommodation Near UWC Bellville — Private Ensuite Rooms
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Parents & visitors: clean, secure rooms near UWC & CPUT with parking & WiFi. Perfect for orientation
                weekends, graduation visits, or supporting your student.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 font-semibold">📍 Just 5km from UWC campus — short drive or taxi ride</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <a
                    href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20accommodation%20near%20UWC%20Bellville"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp to Book
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent">
                  <Link href="/rooms">View Rooms & Rates</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/sage-double-room.png"
                alt="Clean ensuite room near UWC Bellville at 60 on Kosmos with comfortable double bed"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Parents Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Parents & Visitors Choose 60 on Kosmos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Close to Campus</h3>
              <p className="text-gray-600">Quick drive or taxi to UWC main campus. Easy morning drop-offs.</p>
            </Card>
            <Card className="text-center p-6">
              <Car className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Safe Parking</h3>
              <p className="text-gray-600">Secure enclosed parking with CCTV if you're driving from out of town.</p>
            </Card>
            <Card className="text-center p-6">
              <Phone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Easy Booking</h3>
              <p className="text-gray-600">WhatsApp to check availability. Flexible check-in times.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">UWC Events & Visits</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Orientation weekends for new students</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Graduation ceremonies and celebrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Parent weekends and campus tours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Supporting your student during exams</span>
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Also Near CPUT Bellville</h3>
              <p className="text-gray-600 mb-4">
                We're also convenient for visitors to CPUT Bellville campus, Tygerberg Hospital, and other institutions
                in the area.
              </p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/near-cput-bellville">CPUT Accommodation Info</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Rooms Near UWC</h2>
          <p className="text-center text-gray-600 mb-8">All rooms include private ensuite bathroom and free WiFi</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/sage-double-room.png"
                  alt="Double room near UWC at 60 on Kosmos with comfortable bed"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Double Room</h3>
                <p className="text-2xl font-bold text-green-600 mb-4">From R620/night</p>
                <p className="text-sm text-gray-600 mb-4">Perfect for parents visiting alone or couples</p>
                <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                  <Link href="/rooms/double">View Details</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/twin-room-yellow.png"
                  alt="Twin room near UWC at 60 on Kosmos with two single beds"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Twin Room</h3>
                <p className="text-2xl font-bold text-green-600 mb-4">From R530/night</p>
                <p className="text-sm text-gray-600 mb-4">Ideal for parents visiting together</p>
                <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                  <Link href="/rooms/standard-twin">View Details</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/triple-room-full.jpg"
                  alt="Triple room near UWC at 60 on Kosmos for families with workspace and kettle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Triple Room</h3>
                <p className="text-2xl font-bold text-green-600 mb-4">From R750/night</p>
                <p className="text-sm text-gray-600 mb-4">Great for families or groups with workspace area</p>
                <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                  <Link href="/rooms">View All Rooms</Link>
                </Button>
              </CardContent>
            </Card>
            {/* Deluxe Twin Room */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/deluxe-twin-navy.jpg"
                  alt="Deluxe twin room near UWC at 60 on Kosmos with navy blue headboards"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Deluxe Twin Room</h3>
                <p className="text-2xl font-bold text-green-600 mb-4">From R650/night</p>
                <p className="text-sm text-gray-600 mb-4">Ideal for parents visiting together with added comfort</p>
                <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                  <Link href="/rooms/deluxe-twin">View Details</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Stay Near UWC Today</h2>
          <p className="text-xl mb-8 opacity-90">WhatsApp us now to check availability for your UWC visit</p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <a
              href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20accommodation%20near%20UWC%20Bellville"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp to Book Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

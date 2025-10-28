import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Wifi, Shield, Clock, GraduationCap, Utensils, Car } from "lucide-react"

export const metadata: Metadata = {
  title: "CPUT Accommodation Bellville | Student Rooms Near CPUT Campus - 60 on Kosmos",
  description:
    "Affordable student accommodation near CPUT Bellville campus. Self-catering ensuite rooms just 4.5km away with WiFi, secure parking, and weekly cleaning. Perfect for CPUT students, parents, and academic visitors.",
  keywords:
    "CPUT accommodation Bellville, student housing near CPUT, rooms near CPUT campus, affordable student accommodation Cape Town, CPUT visitor lodging, self-catering accommodation CPUT, engineering student housing Bellville, CPUT parent accommodation",
  openGraph: {
    title: "CPUT Accommodation Bellville | 60 on Kosmos Guesthouse",
    description:
      "Comfortable ensuite rooms just 4.5km from CPUT Bellville campus. Perfect for students, parents, and visitors. Secure parking, free WiFi, weekly cleaning.",
    images: [
      {
        url: "/images/twin-room-yellow.png",
        width: 1200,
        height: 630,
        alt: "Clean student room near CPUT Bellville at 60 on Kosmos",
      },
    ],
  },
}

export default function NearCPUTPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-sage-600">
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li>
                <span className="text-gray-900">CPUT Accommodation</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-purple-600 mb-4">
                <GraduationCap className="w-6 h-6" />
                <span className="font-semibold">CPUT Student Accommodation</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Accommodation Near CPUT Bellville — Affordable Student Rooms
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Engineering students, parents & visitors: comfortable, affordable rooms just 4.5km from CPUT Bellville
                campus with WiFi, parking & kitchen access. Perfect for exam weeks, project deadlines, or semester
                accommodation.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                <p className="text-purple-800 font-semibold">📍 Just 4.5km from CPUT campus — 8-minute drive or taxi</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <a
                    href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20student%20accommodation%20near%20CPUT%20Bellville"
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
                src="/images/twin-room-yellow.png"
                alt="Affordable student room near CPUT Bellville at 60 on Kosmos"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why CPUT Students Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why CPUT Students & Parents Choose 60 on Kosmos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Close to CPUT Campus</h3>
              <p className="text-gray-600">
                Just 4.5km from CPUT Bellville — quick 8-minute drive or affordable Uber/Bolt. Save time and transport
                costs compared to staying further away.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Utensils className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Self-Catering Kitchen</h3>
              <p className="text-gray-600">
                Access to communal kitchenette + bar fridge in room. Cook your own meals and save money. Perfect for
                students on a budget.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Wifi className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free High-Speed WiFi</h3>
              <p className="text-gray-600">
                Fast, reliable WiFi included. Perfect for online assignments, research, video calls home, and streaming
                during breaks.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Safe & Secure</h3>
              <p className="text-gray-600">
                24/7 CCTV surveillance and secure parking. Parents have peace of mind knowing their students are safe.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Weekly Cleaning</h3>
              <p className="text-gray-600">
                Fresh linen, towels, and professional cleaning every week. Focus on your studies, not housework.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Easy Transport</h3>
              <p className="text-gray-600">
                Close to Bellville Station and major taxi routes. Easy access to shops, restaurants, and entertainment.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Perfect For CPUT Students */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Perfect For CPUT Students & Visitors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                For CPUT Students
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Short-term accommodation during exam periods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Project deadline weeks when you need to focus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Engineering students working on intensive projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>International students during semester breaks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Monthly accommodation for full semester stays</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">👨‍👩‍👧</span>
                For Parents & Visitors
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Parents visiting for orientation weekends</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Graduation ceremonies and celebrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Academic visitors and guest lecturers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Supporting students during stressful exam periods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Campus tours and open day visitors</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Student Budget Comparison */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Why We're Better Than Campus Residences
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="pb-4 pr-4">Feature</th>
                    <th className="pb-4 px-4 text-center">60 on Kosmos</th>
                    <th className="pb-4 px-4 text-center">Campus Residence</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-4">Private Ensuite Bathroom</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-green-600 font-semibold text-xl">✓</span>
                    </td>
                    <td className="py-4 px-4 text-center text-gray-400">✗ (Shared)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-4">Self-Catering Kitchen</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-green-600 font-semibold text-xl">✓</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-green-600 font-semibold text-xl">✓</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-4">Free High-Speed WiFi</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-green-600 font-semibold text-xl">✓</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-green-600 font-semibold text-xl">✓</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-4">Weekly Professional Cleaning</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-green-600 font-semibold text-xl">✓</span>
                    </td>
                    <td className="py-4 px-4 text-center text-gray-400">✗</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-4">Secure Parking</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-green-600 font-semibold text-xl">✓</span>
                    </td>
                    <td className="py-4 px-4 text-center text-gray-400">Limited</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-4">Quiet Study Environment</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-green-600 font-semibold text-xl">✓</span>
                    </td>
                    <td className="py-4 px-4 text-center text-gray-400">✗ (Noisy)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-4">Flexible Check-in/out</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-green-600 font-semibold text-xl">✓</span>
                    </td>
                    <td className="py-4 px-4 text-center text-gray-400">✗ (Fixed dates)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Transport & Directions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Easy Access to CPUT Campus</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Transport Options</h3>
              <div className="space-y-6">
                <Card className="p-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Car className="w-5 h-5 text-purple-600" />
                    By Uber/Bolt
                  </h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Distance:</strong> 4.5km
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Time:</strong> 8-10 minutes
                  </p>
                  <p className="text-gray-700">
                    <strong>Estimated Cost:</strong> R30-R50 per trip
                  </p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-xl">🚌</span>
                    Public Transport
                  </h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Golden Arrow Buses:</strong> Multiple routes to CPUT
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>From Bellville Station:</strong> 3km from us
                  </p>
                  <p className="text-gray-700">
                    <strong>Cost:</strong> Budget-friendly option for daily commute
                  </p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Car className="w-5 h-5 text-green-600" />
                    By Own Vehicle
                  </h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Secure Parking:</strong> Available at 60 on Kosmos
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>CPUT Parking:</strong> Student parking available on campus
                  </p>
                  <p className="text-gray-700">
                    <strong>Route:</strong> Simple 8-minute drive via R300
                  </p>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Location Map</h3>
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8462395621847!2d18.646723!3d-33.934700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5b0e9e8c8c8f%3A0x1e8c8c8f0e9e8c8c!2s60%20Kosmos%20St%2C%20Bellville%20South%2C%20Cape%20Town%2C%207530!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="60 on Kosmos location map - near CPUT Bellville campus"
                  className="w-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-semibold text-purple-900 mb-1">🏛️ To CPUT Bellville</p>
                  <p className="text-purple-700">4.5km • 8 min drive</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900 mb-1">🎓 To UWC Campus</p>
                  <p className="text-blue-700">5.5km • 10 min drive</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-green-900 mb-1">🏥 Tygerberg Hospital</p>
                  <p className="text-green-700">7.5km • 15 min drive</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-orange-900 mb-1">🚉 Bellville Station</p>
                  <p className="text-orange-700">3km • 8 min drive</p>
                </div>
              </div>
              <Button asChild className="w-full mt-6 bg-purple-600 hover:bg-purple-700" size="lg">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=-33.9347,18.6467"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions to 60 on Kosmos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Student Rooms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Affordable Student Rooms</h2>
          <p className="text-center text-gray-600 mb-8">
            All rooms include ensuite bathroom, free WiFi, and weekly cleaning
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/twin-room-yellow.png"
                  alt="Twin room near CPUT Bellville for students"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Twin Room</h3>
                <p className="text-2xl font-bold text-purple-600 mb-4">From R530/night</p>
                <p className="text-sm text-gray-600 mb-4">Perfect for students sharing or friends</p>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/rooms/standard-twin">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-purple-200">
              <div className="bg-purple-600 text-white text-center py-2 text-sm font-semibold">MOST POPULAR</div>
              <div className="relative h-48">
                <Image
                  src="/images/sage-double-room.png"
                  alt="Double room near CPUT for single students"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Double Room</h3>
                <p className="text-2xl font-bold text-purple-600 mb-4">From R620/night</p>
                <p className="text-sm text-gray-600 mb-4">Ideal for students who want privacy</p>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/rooms/double">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/triple-room-full.jpg"
                  alt="Triple room near CPUT with workspace for group projects"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Triple Room</h3>
                <p className="text-2xl font-bold text-purple-600 mb-4">From R750/night</p>
                <p className="text-sm text-gray-600 mb-4">Great for group projects with workspace</p>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/rooms">View All Rooms</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Monthly Rate Info */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">📅 Need Monthly Accommodation?</h3>
            <p className="text-lg mb-6 opacity-90">
              Get special discounted rates for full semester stays. Perfect for engineering students working on
              long-term projects.
            </p>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/monthly-accommodation-bellville">View Monthly Rates →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Accommodation Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">UWC Accommodation</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Also close to UWC campus. Perfect if you have friends at both universities.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/near-uwc-bellville">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">Self-Catering Rooms</h4>
                <p className="text-gray-600 text-sm mb-4">Kitchen access to cook your own meals and save money.</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/self-catering-accommodation-bellville">View Details →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">Budget Accommodation</h4>
                <p className="text-gray-600 text-sm mb-4">Affordable options for students on a tight budget.</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/cheap-accommodation-bellville-south">Check Rates →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your CPUT Accommodation Today</h2>
          <p className="text-xl mb-8 opacity-90">
            WhatsApp us now for availability and student rates. Perfect for exam weeks, project deadlines, or full
            semester stays.
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            <a
              href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20student%20accommodation%20near%20CPUT%20Bellville"
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

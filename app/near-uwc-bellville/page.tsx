import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Wifi, Shield, Clock, GraduationCap, Utensils, Car, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "UWC Graduation Accommodation | Parents & Visiting Professors Near UWC",
  description:
    "Short-term accommodation near UWC for graduations, block week, visiting professors and parents. No long-term student leases - nightly and weekly rates only.",
  alternates: {
    canonical: "https://60onkosmos.co.za/near-uwc-bellville",
  },
}

export default function NearUWCPage() {
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
                <span className="text-gray-900">UWC Accommodation</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-sage-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <GraduationCap className="w-6 h-6" />
                <span className="font-semibold">University Accommodation</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                UWC Graduation & Short-Stay Accommodation
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Short-term accommodation near UWC for graduations, block week exams, visiting professors, and parents. 
                No long-term student leases - nightly and weekly bookings only. Self-catering rooms with WiFi and secure parking.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 font-semibold">
                  📍 5km from UWC • 4.5km from CPUT • 7.5km from Tygerberg Hospital
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700">
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
                  <a href="#uwc-cput-accommodation">View More Info</a>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/sage-double-room.png"
                alt="Affordable accommodation near UWC and CPUT Bellville at 60 on Kosmos"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEW CONTENT SECTION: UWC & CPUT Accommodation Details */}
      <section id="uwc-cput-accommodation" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Students & Parents Choose 60 on Kosmos for UWC & CPUT Accommodation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're perfectly located between both campuses, offering affordable self-catering rooms with all the
              amenities students and visitors need. Close to Tygerberg Hospital too!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Benefits List */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits for Students & Parents</h3>
              <div className="space-y-4">
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Perfect Location</h4>
                      <p className="text-gray-600 text-sm">
                        5km from UWC (10 min), 4.5km from CPUT (8 min), and only 7.5km from Tygerberg Hospital. Easy
                        access to all major institutions.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Utensils className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Self-Catering Facilities</h4>
                      <p className="text-gray-600 text-sm">
                        Communal kitchenette access + bar fridge in every room. Cook your own meals and save money
                        compared to eating out or campus food.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Wifi className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Free High-Speed WiFi</h4>
                      <p className="text-gray-600 text-sm">
                        Reliable, fast internet included. Perfect for online lectures, research, assignments, and video
                        calls home. No data limits or extra charges.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Safe & Secure Environment</h4>
                      <p className="text-gray-600 text-sm">
                        24/7 CCTV surveillance, secure enclosed parking, and safe residential neighborhood. Parents can
                        have peace of mind.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Weekly Cleaning Service</h4>
                      <p className="text-gray-600 text-sm">
                        Professional cleaning, fresh linen, and towels every week. Students can focus on their studies,
                        not housework.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Car className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Budget-Friendly Transport</h4>
                      <p className="text-gray-600 text-sm">
                        Close to Bellville Station (3km) for Golden Arrow buses. Uber/Bolt to campus costs R30-R50. Easy
                        access to shops and restaurants.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Google Map */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8462395621847!2d18.646723!3d-33.934700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5b0e9e8c8c8f%3A0x1e8c8c8f0e9e8c8c!2s60%20Kosmos%20St%2C%20Bellville%20South%2C%20Cape%20Town%2C%207530!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="60 on Kosmos location - near UWC and CPUT Bellville campuses"
                  className="w-full"
                />
              </div>

              {/* Distance Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-blue-50 border-blue-200">
                  <div className="text-center">
                    <p className="font-semibold text-blue-900 mb-1">🎓 UWC Campus</p>
                    <p className="text-blue-700 text-sm">5.5km • 10 min drive</p>
                  </div>
                </Card>
                <Card className="p-4 bg-purple-50 border-purple-200">
                  <div className="text-center">
                    <p className="font-semibold text-purple-900 mb-1">🏛️ CPUT Bellville</p>
                    <p className="text-purple-700 text-sm">4.5km • 8 min drive</p>
                  </div>
                </Card>
                <Card className="p-4 bg-green-50 border-green-200">
                  <div className="text-center">
                    <p className="font-semibold text-green-900 mb-1">🏥 Tygerberg Hospital</p>
                    <p className="text-green-700 text-sm">7.5km • 15 min drive</p>
                  </div>
                </Card>
                <Card className="p-4 bg-orange-50 border-orange-200">
                  <div className="text-center">
                    <p className="font-semibold text-orange-900 mb-1">🚉 Bellville Station</p>
                    <p className="text-orange-700 text-sm">3km • 8 min drive</p>
                  </div>
                </Card>
              </div>

              <Button asChild className="w-full mt-6 bg-blue-600 hover:bg-blue-700" size="lg">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=-33.9347,18.6467"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions from Google Maps
                </a>
              </Button>
            </div>
          </div>

          {/* Internal Links Section */}
          <div className="bg-gradient-to-r from-sage-50 to-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore More Accommodation Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Self-Catering Accommodation</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Kitchen access to cook your own meals. Perfect for students on a budget.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/self-catering-accommodation-bellville">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Monthly Accommodation Rates</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Discounted rates for semester-long stays. Save money on accommodation.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/monthly-accommodation-bellville">
                      View Rates <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Tygerberg Hospital Accommodation</h4>
                  <p className="text-gray-600 text-sm mb-4">Also perfect for medical students and hospital staff.</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/accommodation-near-tygerberg-hospital">
                      View Details <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Perfect For UWC & CPUT Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                Students
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">✓</span>
                  <span>Short-term accommodation during exam periods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">✓</span>
                  <span>Semester or year-long monthly accommodation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">✓</span>
                  <span>International students during breaks when campus residences are closed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">✓</span>
                  <span>Postgraduate and honors students needing quiet study space</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">✓</span>
                  <span>Engineering and medical students near both campuses and Tygerberg Hospital</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">👨‍👩‍👧</span>
                Parents & Visitors
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">✓</span>
                  <span>Parents attending UWC or CPUT orientation weekends</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">✓</span>
                  <span>Graduation ceremonies and celebrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">✓</span>
                  <span>Visiting students during stressful exam periods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">✓</span>
                  <span>Academic visitors, guest lecturers, and conference attendees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">✓</span>
                  <span>Prospective students visiting campus for tours and open days</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Student-Friendly Rooms Near UWC & CPUT</h2>
          <p className="text-center text-gray-600 mb-8">
            All rooms include ensuite bathroom, free WiFi, bar fridge, and weekly cleaning
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/twin-room-yellow.png"
                  alt="Twin room near UWC for students sharing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Twin Room</h3>
                <p className="text-2xl font-bold text-sage-600 mb-4">From R530/night</p>
                <p className="text-sm text-gray-600 mb-4">Ideal for students sharing or friends visiting together</p>
                <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                  <Link href="/rooms">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-sage-200">
              <div className="bg-sage-600 text-white text-center py-2 text-sm font-semibold">MOST POPULAR</div>
              <div className="relative h-48">
                <Image
                  src="/images/sage-double-room.png"
                  alt="Double room near UWC with study space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Double Room</h3>
                <p className="text-2xl font-bold text-sage-600 mb-4">From R620/night</p>
                <p className="text-sm text-gray-600 mb-4">Perfect for single students or parents visiting</p>
                <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                  <Link href="/rooms">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/triple-room-full.jpg"
                  alt="Triple room near UWC with workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Triple Room</h3>
                <p className="text-2xl font-bold text-sage-600 mb-4">From R750/night</p>
                <p className="text-sm text-gray-600 mb-4">Extra space with desk for studying and projects</p>
                <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                  <Link href="/rooms">View All Rooms</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-sage-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your UWC or CPUT Accommodation Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Perfect location for students, parents, and visitors. Book direct for the best rates!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-sage-600 hover:bg-gray-100">
              <a
                href="https://wa.me/27745245703?text=Hi%2C%20I%20need%20accommodation%20near%20UWC%20Bellville"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp to Book
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10">
              <a href="tel:+27745245703">Call 074 524 5703</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

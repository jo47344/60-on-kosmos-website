import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Star, MapPin, Shield, Wifi, Car } from "lucide-react"

export const metadata: Metadata = {
  title: "Bellville South Guesthouse | Best Accommodation in Bellville South Cape Town",
  description:
    "Looking for a guesthouse in Bellville South? 60 on Kosmos offers secure, affordable accommodation with free WiFi, parking & 24/7 security. 5km from UWC. Book now!",
  keywords:
    "bellville south guesthouse, bellville guesthouse, guesthouse bellville south cape town, affordable guesthouse bellville, best guesthouse bellville south",
  alternates: {
    canonical: "https://60onkosmos.co.za/bellville-south-guesthouse",
  },
}

export default function BellvilleSouthGuesthousePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-600 to-sage-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">#1 Rated Guesthouse in Bellville South Cape Town</h1>
            <p className="text-xl mb-8 opacity-90">
              ★★★★★ Secure Accommodation | Free WiFi & Parking | 5km from UWC | From R530/night
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-sage-600 hover:bg-gray-100">
                <Link href="/book-now">Book Direct - Best Rates</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <a href="tel:+27745245703">
                  <Phone className="w-4 h-4 mr-2" />
                  074 524 5703
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why 60 on Kosmos is the Best Guesthouse in Bellville South
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">24/7 Security</h3>
              <p className="text-gray-600">
                CCTV monitoring, secure gates, and on-site security for complete peace of mind
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Prime Location</h3>
              <p className="text-gray-600">5km to UWC, 8km to Tygerberg Hospital, 2km to SPAR Kasselsvlei Centre</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">★★★★★ Rated</h3>
              <p className="text-gray-600">Consistently excellent reviews from contractors, students, and families</p>
            </Card>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/sage-double-room.png"
                alt="Ensuite double room at 60 on Kosmos Bellville South guesthouse"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/outdoor-seating.png"
                alt="Outdoor seating area at Bellville South guesthouse"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Makes Our Bellville South Guesthouse Special</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <Wifi className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Free High-Speed WiFi</h3>
                <p className="text-sm text-gray-600">Perfect for remote work, streaming, and staying connected</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Car className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Secure Free Parking</h3>
                <p className="text-sm text-gray-600">On-site parking behind locked gates with 24/7 CCTV</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Shield className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">24/7 Security</h3>
                <p className="text-sm text-gray-600">CCTV monitoring and secure access for guest safety</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl flex-shrink-0">🛏️</span>
              <div>
                <h3 className="font-bold mb-1">Ensuite Bathrooms</h3>
                <p className="text-sm text-gray-600">Private bathrooms in every room with hot water</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl flex-shrink-0">☕</span>
              <div>
                <h3 className="font-bold mb-1">Welcome Kit</h3>
                <p className="text-sm text-gray-600">Tea, coffee, and rusks provided in every room</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl flex-shrink-0">🧊</span>
              <div>
                <h3 className="font-bold mb-1">Bar Fridge</h3>
                <p className="text-sm text-gray-600">Keep your drinks cold and snacks fresh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sage-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Stay at Bellville South's Best Guesthouse?</h2>
          <p className="text-xl mb-8 opacity-90">From R530/night | Book direct for best rates | No booking fees</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-sage-600 hover:bg-gray-100">
              <Link href="/book-now">Book Online Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <a
                href="https://wa.me/27745245703?text=Hi%2C%20I%20want%20to%20book%20at%20your%20Bellville%20South%20guesthouse"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp 074 524 5703
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Guests Say About Our Bellville South Guesthouse</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Perfect guesthouse in Bellville South! Close to UWC, secure parking, and spotlessly clean. Will
                definitely be back."
              </p>
              <p className="font-bold">- Sarah M., UWC Parent</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Best value guesthouse in Bellville South. Great WiFi for remote work, secure parking, friendly owners.
                Highly recommend!"
              </p>
              <p className="font-bold">- James T., Contractor</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Excellent Bellville South accommodation. Much more affordable than Cape Town CBD but still close to
                everything. Will stay again!"
              </p>
              <p className="font-bold">- Lisa K., Tourist</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

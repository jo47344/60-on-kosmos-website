import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Coffee, Car, Shield, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Rooms & Rates - 60 on Kosmos Guesthouse Bellville South | Monthly from R464/night",
  description:
    "Self-catering rooms with private ensuite bathrooms. Standard Twin from R580/night, monthly from R464/night. Free WiFi, secure parking, weekly cleaning. Perfect for contractors & professionals. Book 074 524 5703",
  keywords:
    "Self-catering rooms Bellville South, contractor accommodation Cape Town, rooms with ensuite Bellville, monthly accommodation Bellville, private bathroom accommodation Cape Town",
  alternates: { canonical: "https://60onkosmos.co.za/rooms" },
  openGraph: {
    title: "Rooms & Rates - 60 on Kosmos | Private Ensuite Rooms from R464/night",
    description:
      "Self-catering rooms with private ensuite bathrooms. Monthly rates from R464/night. Perfect for contractors and professionals.",
  },
}

export default function RoomsPage() {
  const rooms = [
    {
      id: 1,
      name: "Standard Twin Room",
      price: "R580/night",
      weeklyPrice: "R522/night",
      monthlyPrice: "R464/night",
      image: "/images/twin-room-yellow.png",
      alt: "Standard twin room guesthouse Bellville South - self-catering accommodation Cape Town near UWC with ensuite bathroom",
      bestFor: "Best for 2 contractors or 2 professionals sharing.",
      features: [
        "2 single beds",
        "Private ensuite bathroom",
        "Free WiFi",
        "Weekly cleaning",
      ],
      description:
        "Clean, comfortable twin beds with modern ensuite bathroom. Access to communal kitchen.",
    },
    {
      id: 2,
      name: "Deluxe Twin Room",
      price: "R650/night",
      weeklyPrice: "R585/night",
      monthlyPrice: "R520/night",
      image: "/images/deluxe-twin-navy.jpg",
      alt: "Deluxe twin room guesthouse Bellville South - premium contractor self-catering accommodation Cape Town with navy blue headboards",
      bestFor: "Best for 2 professionals wanting extra comfort.",
      features: [
        "2 single beds",
        "Private ensuite bathroom",
        "Bar fridge",
        "Premium bedding",
        "Weekly cleaning",
      ],
      description:
        "Our premium twin room with bar fridge, elegant navy blue headboards and quality bedding. Perfect for business travelers.",
    },
    {
      id: 3,
      name: "Double Room",
      price: "R680/night",
      weeklyPrice: "R612/night",
      monthlyPrice: "R544/night",
      image: "/images/sage-double-room.png",
      alt: "Double room guesthouse Bellville South - self-catering accommodation Cape Town near UWC and Tygerberg Hospital with ensuite bathroom",
      bestFor: "Best for solo professionals, couples, or site supervisors.",
      features: [
        "Double bed",
        "Private ensuite bathroom",
        "Bar fridge",
        "Free WiFi",
        "Premium bedding",
        "Weekly cleaning",
      ],
      description:
        "Comfortable double bed with sage green accents and modern ensuite facilities. Extra space and privacy.",
    },
    {
      id: 4,
      name: "Triple Room",
      price: "R840/night",
      weeklyPrice: "R756/night",
      monthlyPrice: "R672/night",
      perPerson: "From R224/person/night on monthly stays",
      image: "/images/triple-room-full.jpg",
      alt: "Triple room guesthouse Bellville South - self-catering accommodation Cape Town near UWC with three single beds and workspace",
      bestFor: "Best value for 3-person contractor crews.",
      features: [
        "3 single beds",
        "Private ensuite bathroom",
        "Kettle",
        "Workspace area",
        "Weekly cleaning",
      ],
      description:
        "Spacious room perfect for 3-person crews. Best value per person for contractor teams.",
    },
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Banner */}
        <div className="bg-green-600 text-white rounded-lg p-4 mb-8 text-center">
          <p className="text-lg font-semibold">
            📞 Book Direct:{" "}
            <a href="tel:+27745245703" className="underline hover:no-underline">
              074 524 5703
            </a>{" "}
            |
            <a
              href="https://wa.me/27745245703?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20monthly%20rates"
              className="ml-2 underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp for Monthly Rates
            </a>
          </p>
        </div>

        {/* Ensuite Highlight */}
        <div className="bg-sage-50 border border-sage-200 rounded-lg p-4 mb-8 text-center">
          <p className="text-sage-800 font-medium">
            All rooms have private ensuite bathrooms - no shared facilities
          </p>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Self-Catering Rooms & Rates</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            All rooms include a private ensuite bathroom, bar fridge, free WiFi, clean linen, welcome refreshments, and weekly cleaning service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.alt}
                  fill
                  className="object-cover professional-image loading-optimized"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={room.id <= 2}
                />
                <Badge className="absolute top-4 left-4 bg-green-600">Available</Badge>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-1">{room.name}</h3>
                  <p className="text-sm text-sage-600 font-medium">{room.bestFor}</p>
                </div>

                {/* Pricing Table */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    <div>
                      <div className="text-xs text-gray-500">1-6 nights</div>
                      <div className="font-bold text-gray-900">{room.price.replace('/night', '')}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">7-27 nights</div>
                      <div className="font-bold text-sage-600">{room.weeklyPrice.replace('/night', '')}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">28+ nights</div>
                      <div className="font-bold text-green-600">{room.monthlyPrice.replace('/night', '')}</div>
                    </div>
                  </div>
                  {room.perPerson && (
                    <div className="text-center mt-2 pt-2 border-t border-gray-200">
                      <span className="text-xs text-green-600 font-medium">{room.perPerson}</span>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 mb-4 text-sm">{room.description}</p>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-sm text-gray-900">Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {room.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <a href="https://wa.me/27745245703" target="_blank" rel="noopener noreferrer">
                      <Phone className="w-4 h-4 mr-2" />
                      WhatsApp Book
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <a href="tel:+27745245703">📞 Call 074 524 5703</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Monthly Rates Section */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">Monthly Contractor Stays (28+ nights)</h2>
          <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            We offer discounted 28+ night rates for contractors, project teams, and long-stay professionals. 
            Secure parking, self-catering facilities, WiFi, and weekly cleaning are included.
          </p>
          
          {/* Pricing Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full max-w-3xl mx-auto text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4">Room</th>
                  <th className="text-center py-3 px-4">Standard<br/><span className="text-xs text-gray-400">1-6 nights</span></th>
                  <th className="text-center py-3 px-4">Weekly<br/><span className="text-xs text-gray-400">7-27 nights</span></th>
                  <th className="text-center py-3 px-4">Monthly<br/><span className="text-xs text-gray-400">28+ nights</span></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Standard Twin</td>
                  <td className="text-center py-3 px-4">R580</td>
                  <td className="text-center py-3 px-4 text-sage-400">R522</td>
                  <td className="text-center py-3 px-4 text-green-400 font-bold">R464</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Deluxe Twin</td>
                  <td className="text-center py-3 px-4">R650</td>
                  <td className="text-center py-3 px-4 text-sage-400">R585</td>
                  <td className="text-center py-3 px-4 text-green-400 font-bold">R520</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Double Room</td>
                  <td className="text-center py-3 px-4">R680</td>
                  <td className="text-center py-3 px-4 text-sage-400">R612</td>
                  <td className="text-center py-3 px-4 text-green-400 font-bold">R544</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Triple Room</td>
                  <td className="text-center py-3 px-4">R840</td>
                  <td className="text-center py-3 px-4 text-sage-400">R756</td>
                  <td className="text-center py-3 px-4 text-green-400 font-bold">R672</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-sage-400 text-sm mb-6">
            Special crew pricing available for 2 or more rooms. Contact us for a quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700">
              <a href="https://wa.me/27745245703?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20monthly%20rates" target="_blank" rel="noopener noreferrer">
                WhatsApp for Monthly Rates
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/10">
              <a href="tel:+27745245703">
                Call 074 524 5703
              </a>
            </Button>
          </div>
        </div>

        {/* Bathroom Showcase */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modern Ensuite Bathrooms</h2>
              <p className="text-gray-600 mb-6">
                Every room features a private, modern bathroom with hot water, quality fixtures, and clean towels.
                Weekly cleaning service maintains high standards of cleanliness.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                  Hot water 24/7
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                  Clean towels provided
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                  Modern fixtures
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                  Weekly cleaning service
                </li>
              </ul>
            </div>
            <div className="relative h-64 lg:h-80">
              <Image
                src="/images/bathroom.png"
                alt="Modern ensuite bathroom guesthouse Bellville South - clean self-catering accommodation Cape Town with hot water 24/7"
                fill
                className="object-cover rounded-lg professional-image"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Included Amenities */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Included with Every Room</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Wifi className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold">Free WiFi</h3>
            </div>
            <div className="text-center">
              <Coffee className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold">Welcome Kit</h3>
            </div>
            <div className="text-center">
              <Car className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold">Safe Parking</h3>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold">24/7 Security</h3>
            </div>
          </div>
        </div>

        {/* Self-Catering Info */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">ℹ️ Self-Catering Accommodation</h3>
          <p className="text-gray-700 mb-4">
            60 on Kosmos is a self-catering guesthouse. We do not provide meals or daily cleaning. Each room has a bar
            fridge for your convenience.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
              Weekly cleaning service included
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
              SPAR Kasselsvlei Centre 2km away for groceries
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
              Multiple restaurants and takeaways nearby
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
              Perfect for young professionals and contractors (18+)
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

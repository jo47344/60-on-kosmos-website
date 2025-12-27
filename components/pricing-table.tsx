import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface PricingTableProps {
  showContractorNote?: boolean
}

export function PricingTable({ showContractorNote = true }: PricingTableProps) {
  const rooms = [
    {
      name: "Standard Twin",
      priceFrom: 530,
      beds: "2 single beds",
      features: ["Ensuite bathroom", "Free WiFi", "Clean linen", "Secure parking"],
    },
    {
      name: "Double Room",
      priceFrom: 620,
      beds: "1 double bed",
      features: ["Ensuite bathroom", "Microwave", "Bar fridge", "Free WiFi", "Secure parking"],
      popular: true,
    },
    {
      name: "Deluxe Twin",
      priceFrom: 580,
      beds: "2 single beds",
      features: ["Ensuite bathroom", "Bar fridge", "Premium bedding", "Free WiFi", "Secure parking"],
    },
    {
      name: "Triple Room",
      priceFrom: 750,
      beds: "3 single beds",
      features: ["Ensuite bathroom", "Bar fridge", "Workspace area", "Free WiFi", "Secure parking"],
    },
  ]

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rooms.map((room, idx) => (
          <Card key={idx} className={`relative ${room.popular ? "border-[#16a34a] border-2" : ""}`}>
            {room.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#16a34a] text-white px-4 py-1 rounded-full text-xs font-bold">Most Popular</span>
              </div>
            )}

            <CardHeader>
              <CardTitle className="text-xl">{room.name}</CardTitle>
              <CardDescription>{room.beds}</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="mb-4">
                <div className="text-3xl font-bold text-[#1e3a8a]">
                  From R{room.priceFrom}
                  <span className="text-sm font-normal text-gray-600">/night</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="font-medium">Weekly</span>
                  <span className="ml-auto text-green-600">Available</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="font-medium">Monthly</span>
                  <span className="ml-auto text-green-600">Available</span>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t">
                {room.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <Button asChild className="w-full bg-[#7c9885] hover:bg-[#6d8876]">
                <Link href="/contact">Request Quote</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">Need Exact Rates?</h3>
            <p className="text-gray-600 mb-4">
              Contact us for specific weekly and monthly rates. All stays include welcome refreshments, weekly cleaning,
              free WiFi, and secure parking.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild variant="outline">
                <a href="tel:+27745245703">Call 074 524 5703</a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://wa.me/27745245703">WhatsApp Us</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {showContractorNote && (
        <Card className="bg-gray-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">👷</span>
              <div>
                <h3 className="font-semibold text-lg mb-2">Contractor & Long-Term Rates</h3>
                <p className="text-gray-600">
                  Special pricing available for contractors, project teams, and long-term stays. Rates are customized
                  based on project duration and number of rooms required. Contact us for a confidential quote.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

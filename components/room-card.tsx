import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Users } from "lucide-react"

interface RoomCardProps {
  roomName: string
  roomType: string
  priceFrom: number
  imageSrc: string
  imageAlt: string
  features: string[]
  maxOccupancy: number
  bedConfiguration: string
  roomSlug: string
}

export function RoomCard({
  roomName,
  roomType,
  priceFrom,
  imageSrc,
  imageAlt,
  features,
  maxOccupancy,
  bedConfiguration,
  roomSlug,
}: RoomCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi, I'd like to get a quote for:\n- Room: ${roomName}\n- Type: ${roomType}\n- Beds: ${bedConfiguration}`,
  )

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 shadow-lg">
          {roomType}
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl">{roomName}</CardTitle>
        <CardDescription className="flex items-center gap-2 text-gray-600">
          <Users className="w-4 h-4" />
          {bedConfiguration} • Up to {maxOccupancy} guests
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <div className="text-3xl font-bold text-[#1e3a8a]">
            From R{priceFrom}
            <span className="text-sm font-normal text-gray-600">/night</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">Weekly & monthly rates available</p>
        </div>

        <div className="space-y-2">
          {features.slice(0, 4).map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button asChild variant="outline" className="flex-1 bg-transparent">
          <Link href={`/rooms/${roomSlug}`}>View Details</Link>
        </Button>
        <Button asChild className="flex-1 bg-[#16a34a] hover:bg-[#15803d]">
          <a href={`https://wa.me/27745245703?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
            Get Quote
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TestimonialCardProps {
  reviewerName: string
  reviewerCompany?: string
  reviewerType: "contractor" | "student" | "medical" | "other"
  rating: number
  reviewText: string
  reviewDate: string
  verified: boolean
}

const reviewIcons = {
  contractor: "👷",
  student: "🎓",
  medical: "⚕️",
  other: "👤",
}

export function TestimonialCard({
  reviewerName,
  reviewerCompany,
  reviewerType,
  rating,
  reviewText,
  reviewDate,
  verified,
}: TestimonialCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
            ))}
          </div>
          {verified && (
            <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
              Verified Guest
            </Badge>
          )}
        </div>

        <blockquote className="text-gray-700 mb-4 leading-relaxed">"{reviewText}"</blockquote>

        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          <span className="text-2xl">{reviewIcons[reviewerType]}</span>
          <div className="flex-1">
            <p className="font-semibold text-gray-900">{reviewerName}</p>
            {reviewerCompany && <p className="text-sm text-gray-600">{reviewerCompany}</p>}
            <p className="text-xs text-gray-500 mt-1">{reviewDate}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

import { ReviewSchema } from "@/components/review-schema"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Testimonials", url: "/testimonials" },
]

export default function TestimonialsPage() {
  return (
    <>
      <ReviewSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* rest of the page content */}
    </>
  )
}

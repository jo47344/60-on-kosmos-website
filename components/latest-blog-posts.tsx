import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export function LatestBlogPosts() {
  const posts = [
    {
      slug: "medical-staff-guide-tygerberg-hospital",
      title: "Medical Staff Guide: Relocating to Tygerberg Hospital",
      excerpt:
        "Everything you need to know about accommodation, transport, and settling in for locum doctors and medical professionals.",
      image: "/images/sage-double-room.png",
      category: "Medical Staff",
      date: "2025-01-10",
    },
    {
      slug: "international-student-housing-uwc",
      title: "International Student Housing Near UWC",
      excerpt:
        "Complete guide for international students starting at UWC. Pre-arrival accommodation, costs, and settling in tips.",
      image: "/images/twin-room-yellow.png",
      category: "Students",
      date: "2025-01-09",
    },
    {
      slug: "digital-nomad-guide-bellville-south",
      title: "Digital Nomad Guide: Working Remotely from Bellville South",
      excerpt:
        "Why Bellville South is Cape Town's best-kept secret for digital nomads. Fast WiFi, low cost, great community.",
      image: "/images/deluxe-twin-navy.jpg",
      category: "Remote Work",
      date: "2025-01-07",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Accommodation Guides</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert tips and guides for finding accommodation in Bellville South, Cape Town
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-sage-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sage-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-2" />
                      <span>{new Date(post.date).toLocaleDateString("en-GB")}</span>
                    </div>
                    <span className="text-sage-600 text-sm font-semibold group-hover:underline">Read More →</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg" className="bg-transparent">
            <Link href="/blog">
              View All Guides <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

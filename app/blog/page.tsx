import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Accommodation Blog - Tips for Staying in Bellville South Cape Town | 60 on Kosmos",
  description:
    "Expert accommodation guides for Bellville South. Tips for medical staff, students, contractors, and visitors staying near UWC, Tygerberg Hospital, and Cape Town.",
  keywords:
    "bellville south accommodation blog, cape town visitor guide, tygerberg hospital tips, uwc student housing guide, bellville south living",
}

export default function BlogPage() {
  const posts = [
    {
      slug: "medical-staff-guide-tygerberg-hospital",
      title: "Complete Guide for Medical Staff Relocating to Tygerberg Hospital",
      excerpt:
        "Moving to Tygerberg for a locum position or permanent role? Everything you need to know about accommodation, transport, and settling in.",
      image: "/images/sage-double-room.png",
      category: "Medical Staff",
      date: "2025-01-10",
      readTime: "8 min read",
    },
    {
      slug: "international-student-housing-uwc",
      title: "International Student Housing Near UWC: Complete 2025 Guide",
      excerpt:
        "Just accepted to UWC? Find temporary accommodation while you settle in, navigate campus housing, and explore Bellville South.",
      image: "/images/twin-room-yellow.png",
      category: "Students",
      date: "2025-01-09",
      readTime: "10 min read",
    },
    {
      slug: "corporate-relocation-cape-town",
      title: "Corporate Relocation to Cape Town: Why Choose Bellville South",
      excerpt:
        "Relocating employees to Cape Town? Discover why Bellville South offers the best value for corporate accommodation.",
      image: "/images/outdoor-seating.png",
      category: "Business",
      date: "2025-01-08",
      readTime: "6 min read",
    },
    {
      slug: "digital-nomad-guide-bellville-south",
      title: "Digital Nomad Guide: Working Remotely from Bellville South",
      excerpt:
        "Why Bellville South is Cape Town's best-kept secret for digital nomads. Fast WiFi, low cost, great community.",
      image: "/images/deluxe-twin-navy.jpg",
      category: "Remote Work",
      date: "2025-01-07",
      readTime: "7 min read",
    },
    {
      slug: "nursing-student-accommodation-tygerberg",
      title: "Nursing Student Accommodation Near Tygerberg Hospital: What You Need",
      excerpt:
        "Starting your practical training at Tygerberg? Find safe, affordable accommodation close to the hospital.",
      image: "/images/triple-room-full.jpg",
      category: "Students",
      date: "2025-01-06",
      readTime: "5 min read",
    },
    {
      slug: "wedding-guest-accommodation-cape-town",
      title: "Affordable Wedding Guest Accommodation in Cape Town",
      excerpt: "Attending a Cape Town wedding? Save money with budget-friendly group accommodation in Bellville South.",
      image: "/images/exterior-courtyard.png",
      category: "Events",
      date: "2025-01-05",
      readTime: "4 min read",
    },
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Accommodation Blog & Guides</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert tips and guides for finding accommodation in Bellville South, Cape Town. Written by locals who know
            the area.
          </p>
        </div>

        {/* CTA Banner */}
        <div className="bg-green-600 text-white rounded-lg p-6 mb-12 text-center">
          <p className="text-lg font-semibold mb-4">
            📞 Need accommodation advice? Call us:{" "}
            <a href="tel:0745245703" className="underline hover:no-underline">
              074 524 5703
            </a>
          </p>
          <Button asChild className="bg-white text-green-600 hover:bg-gray-100">
            <a
              href="https://wa.me/27745245703?text=Hi%2C%20I%20have%20questions%20about%20accommodation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp Us
            </a>
          </Button>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Link
            href={`/blog/${posts[0].slug}`}
            className="block bg-sage-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src={posts[0].image || "/placeholder.svg"}
                  alt={posts[0].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <div className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  FEATURED
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{posts[0].title}</h2>
                <p className="text-gray-600 mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(posts[0].date).toLocaleDateString("en-GB")}</span>
                  <span className="mx-2">•</span>
                  <span>{posts[0].readTime}</span>
                </div>
                <Button variant="outline" className="bg-transparent">
                  Read Full Guide <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sage-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-2" />
                    <span>{new Date(post.date).toLocaleDateString("en-GB")}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-sage-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Accommodation Tips & Special Offers</h2>
          <p className="text-gray-600 mb-6">Subscribe to receive our latest guides and exclusive booking discounts.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sage-600 focus:border-transparent"
            />
            <Button className="bg-sage-600 hover:bg-sage-700">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

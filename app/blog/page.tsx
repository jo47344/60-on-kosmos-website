import { NewsletterSignup } from "@/components/newsletter-signup"

const posts = [
  {
    slug: "corporate-relocation-cape-town",
    title: "Corporate Relocation to Cape Town: Why HR Managers Choose Bellville South",
    excerpt: "Cost-effective corporate accommodation solutions. Save 40-60% vs CBD hotels for employee relocations.",
    image: "/images/outdoor-seating.png",
    category: "Corporate",
    date: "2025-01-08",
  },
  {
    slug: "digital-nomad-guide-bellville-south",
    title: "Digital Nomad Guide: Working Remotely from Bellville South",
    excerpt:
      "Fast WiFi, low cost, great community. Why Bellville South is Cape Town's best-kept secret for remote workers.",
    image: "/images/deluxe-twin-navy.jpg",
    category: "Remote Work",
    date: "2025-01-07",
  },
  {
    slug: "nursing-student-accommodation-tygerberg",
    title: "Nursing Student Accommodation Near Tygerberg Hospital",
    excerpt:
      "Safe, affordable housing for nursing students on practical training. Study space, WiFi, quiet environment.",
    image: "/images/triple-room-full.jpg",
    category: "Students",
    date: "2025-01-06",
  },
  {
    slug: "wedding-guest-accommodation-cape-town",
    title: "Wedding Guest Accommodation: Smart Guide for Bellville Weddings",
    excerpt:
      "Attending a Cape Town wedding? Save 40-60% on accommodation. Close to venues, flexible check-in, group bookings.",
    image: "/images/outdoor-seating.png",
    category: "Weddings",
    date: "2025-01-05",
  },
  {
    slug: "family-accommodation-visiting-cape-town",
    title: "Visiting Family in Cape Town? Your Complete Accommodation Guide",
    excerpt:
      "Affordable family accommodation for visiting relatives. Long-term rates, secure parking, close to Bellville.",
    image: "/images/triple-room-full.jpg",
    category: "Family",
    date: "2025-01-04",
  },
]

export default function BlogPage() {
  return (
    <div>
      {/* Blog posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <div key={post.slug} className="bg-white p-6 rounded shadow">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="mb-4 rounded" />
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <p className="text-gray-500">Category: {post.category}</p>
            <p className="text-gray-500">Date: {post.date}</p>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-12 max-w-2xl mx-auto">
        <NewsletterSignup />
      </div>

      {/* CTA section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Accommodation?</h3>
        <p className="text-gray-600 mb-8">Explore more options and book your stay today.</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">View All Posts</button>
      </div>
    </div>
  )
}

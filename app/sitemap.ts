import { SitemapStream, streamToPromise } from "sitemap"
import { createGzip } from "zlib"
import type { Response } from "express"
import { getAllPosts } from "./blog"

export async function generateSitemap(res: Response) {
  const smStream = new SitemapStream({ hostname: "https://60onkosmos.co.za" })
  const pipeline = smStream.pipe(createGzip())

  // Add blog routes to the sitemap
  const posts = await getAllPosts()
  posts.forEach((post) => {
    smStream.write({
      url: `/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })
  })

  // Add the free guide page to the sitemap
  smStream.write({
    url: "https://60onkosmos.co.za/free-guide",
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  })

  // Finalize the sitemap
  smStream.end()
  const sitemapOutput = await streamToPromise(pipeline)
  res.header("Content-Type", "application/xml")
  res.header("Content-Encoding", "gzip")
  res.send(sitemapOutput)
}

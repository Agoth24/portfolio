import { getBlogPosts } from 'app/blog/utils'

// TODO: replace with the real deployed URL before shipping.
// Feeds sitemap.xml, robots.txt, /rss, OG image URLs, and each post's JSON-LD.
export const baseUrl = 'https://agotharop.com'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}

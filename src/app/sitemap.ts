import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.mighty-five.com'

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    url: `${baseUrl}/about`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/portfolio`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${baseUrl}/contact`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5,
  },
]

// Based on your portfolio project links
const projects = [
  { slug: 'Bigmoes' },
  { slug: 'verdent' },
  { slug: 'assetavenue' },
  { slug: 'UbCode' },
  // Add more as needed, e.g., { slug: 'new-project' },
]

const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
  url: `${baseUrl}/portfolio/${project.slug}`,
  lastModified: new Date(), // Swap with real dates from your data
  changeFrequency: 'monthly',
  priority: 0.6,
}))

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...projectRoutes]
}
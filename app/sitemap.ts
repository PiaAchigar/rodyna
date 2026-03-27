import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.rodynafarmacias.com.ar'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/sucursales', priority: 0.9, changeFrequency: 'monthly' as const },
    { route: '/nosotros', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/catalogo', priority: 0.9, changeFrequency: 'daily' as const },
    { route: '/terminos-y-condiciones', priority: 0.3, changeFrequency: 'yearly' as const },
    { route: '/politica-de-privacidad', priority: 0.3, changeFrequency: 'yearly' as const },
    { route: '/politica-de-devoluciones', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const locales = ['', '/en'] // '' = español (default), '/en' = inglés

  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const { route, priority, changeFrequency } of staticRoutes) {
      entries.push({
        url: `${BASE_URL}${locale}${route}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
      })
    }
  }

  // TODO Etapa 2: agregar productos dinámicos desde la API
  // const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`).then(r => r.json())
  // for (const product of products) {
  //   entries.push({ url: `${BASE_URL}/producto/${product.slug}`, ... })
  // }

  return entries
}

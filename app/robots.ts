import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.rodynafarmacias.com.ar'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/admin/',
          '/cuenta',
          '/checkout',
          '/carrito',
          '/mp/',
          '/api/',
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}

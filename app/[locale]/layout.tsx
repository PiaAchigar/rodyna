import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Providers from '@/components/layout/Providers'
import '../globals.css'

// JSON-LD: Organization schema para búsquedas locales
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Pharmacy',
  name: 'Rodyna Farmacias',
  url: 'https://www.rodynafarmacias.com.ar',
  logo: 'https://www.rodynafarmacias.com.ar/assets/cruz_color_claro.svg',
  image: 'https://www.rodynafarmacias.com.ar/assets/cruz_color_claro.svg',
  description:
    'Farmacias online con envío rápido a CABA y AMBA. Dermocosmética, OTC y perfumería.',
  telephone: '+5491161333590',
  email: 'info@rodynafarmacias.com.ar',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AR',
    addressLocality: 'Buenos Aires',
    addressRegion: 'Buenos Aires',
  },
  areaServed: ['CABA', 'Gran Buenos Aires', 'AMBA'],
  sameAs: [
    'https://www.instagram.com/farmaciashunko/',
    'https://www.facebook.com/FarmaciasHunko/',
  ],
  hasMap: 'https://www.rodynafarmacias.com.ar/sucursales',
}

export const metadata: Metadata = {
  title: {
    default: 'Rodyna Farmacias',
    template: '%s | Rodyna Farmacias',
  },
  description:
    'Tu farmacia online de confianza en Argentina. Envíos en el día a CABA y AMBA. Dermocosmética, perfumería y productos OTC.',
  keywords: [
    'farmacia online',
    'farmacia Buenos Aires',
    'envío medicamentos CABA',
    'dermocosmética online',
    'Rodyna Farmacias',
    'comprar farmacia AMBA',
  ],
  metadataBase: new URL('https://www.rodynafarmacias.com.ar'),
  openGraph: {
    type: 'website',
    siteName: 'Rodyna Farmacias',
    locale: 'es_AR',
    url: 'https://www.rodynafarmacias.com.ar',
    title: 'Rodyna Farmacias',
    description:
      'Tu farmacia online de confianza. Envíos rápidos en CABA y AMBA.',
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rodyna Farmacias',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rodyna Farmacias',
    description: 'Tu farmacia online de confianza. Envíos rápidos en CABA y AMBA.',
    images: ['/assets/og-image.png'],
  },
  icons: {
    icon: '/assets/cruz_color_claro.svg',
    shortcut: '/assets/cruz_color_claro.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Validar que el locale sea uno de los soportados
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }

  // Pasar los mensajes al cliente
  const messages = await getMessages()

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main
                id="main-content"
                className="flex-1"
                tabIndex={-1}
              >
                {children}
              </main>
              <Footer />
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://www.rodynafarmacias.com.ar'
const SITE_NAME = 'Rodyna Farmacias'
const DEFAULT_DESCRIPTION =
  'Rodyna Farmacias: tu farmacia de confianza en CABA y AMBA. Dermocosmética, perfumería y medicamentos OTC. Próximamente envíos a domicilio y retiro en sucursales.'
const DEFAULT_IMAGE = `${BASE_URL}/pildora.webp`

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  noindex?: boolean
  ogType?: string
  schema?: object | object[]
}

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical = '/',
  noindex = false,
  ogType = 'website',
  schema,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Farmacia Online — CABA y AMBA`
  const canonicalUrl = `${BASE_URL}${canonical}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}

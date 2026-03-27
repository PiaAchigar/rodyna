import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

export default function CatalogoPlaceholder() {
  const { t } = useTranslation()

  return (
    <section className="flex-1 flex items-center justify-center py-20 px-4" aria-labelledby="catalog-title">
      <SEO
        canonical="/catalogo"
        title="Catálogo — Próximamente"
        description="Próximamente catálogo online de Rodyna Farmacias con envíos a CABA y AMBA. Dermocosmética, perfumería y medicamentos OTC."
      />
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h1 id="catalog-title" className="text-3xl font-bold text-main-dark mb-3">{t('nav.catalog')}</h1>
        <p className="text-secondary-gray mb-8">{t('comingSoon')} — Estamos cargando nuestros productos.</p>
        <Link to="/" className="btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}

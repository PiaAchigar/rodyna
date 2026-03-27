import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SEO } from '../components/SEO'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <section className="flex-1 flex items-center justify-center py-20 px-4" aria-labelledby="not-found-title">
      <SEO title="Página no encontrada" noindex={true} />
      <div className="text-center max-w-md">
        {/* Número 404 */}
        <p className="text-9xl font-black text-primary/20 select-none" aria-hidden="true">404</p>

        <h1 id="not-found-title" className="text-3xl font-bold text-main-dark mt-2 mb-3">
          {t('notFound.title')}
        </h1>
        <p className="text-secondary-gray mb-8">
          {t('notFound.description')}
        </p>

        <Link to="/" className="btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t('notFound.goHome')}
        </Link>
      </div>
    </section>
  )
}

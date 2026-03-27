import Link from 'next/link'

// Esta página está fuera del layout [locale], por lo que no tiene acceso
// a next-intl. Se usa español como idioma por defecto.
export default function NotFound() {
  return (
    <section
      className="flex-1 flex items-center justify-center py-20 px-4 min-h-screen bg-slate-50"
      aria-labelledby="not-found-title"
    >
      <div className="text-center max-w-md">
        {/* Número 404 */}
        <p
          className="text-9xl font-black select-none"
          style={{ color: 'rgba(157,199,97,0.2)' }}
          aria-hidden="true"
        >
          404
        </p>

        <h1 id="not-found-title" className="text-3xl font-bold mt-2 mb-3" style={{ color: '#1d2343' }}>
          Página no encontrada
        </h1>
        <p className="mb-8" style={{ color: '#77767a' }}>
          Lo sentimos, la página que buscás no existe.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-colors"
          style={{ backgroundColor: '#1d2343' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}

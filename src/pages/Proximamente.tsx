import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

const WHATSAPP_NUMBER = 'PLACEHOLDER_WHATSAPP' // TODO: reemplazar con número real

export default function Proximamente() {
  return (
    <section
      className="flex-1 flex items-center justify-center py-24 px-4 bg-white"
      aria-labelledby="proximamente-title"
    >
      <SEO
        canonical="/catalogo"
        title="Catálogo — Próximamente"
        description="Próximamente catálogo online de Rodyna Farmacias con envíos a CABA y AMBA. Dermocosmética, perfumería y medicamentos OTC."
      />
      <div className="text-center max-w-lg">
        {/* Ícono */}
        <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Badge animado */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 uppercase tracking-wider">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          En construcción
        </div>

        <h1
          id="proximamente-title"
          className="text-4xl font-black text-main-dark mb-4 leading-tight"
        >
          Catálogo <span className="text-primary">próximamente</span>
        </h1>

        <p className="text-secondary-gray text-base leading-relaxed mb-10">
          Estamos preparando nuestro catálogo online para que puedas hacer tus
          compras desde casa. Mientras tanto, podés contactarnos por WhatsApp o
          visitarnos en cualquiera de nuestras sucursales.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver al inicio
          </Link>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#25D366] text-[#128C7E] font-semibold rounded-xl hover:bg-[#25D366] hover:text-white transition-all active:scale-95"
            aria-label="Consultar por WhatsApp (abre en nueva pestaña)"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.399 5.61L0 24l6.545-1.38A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.367l-.36-.214-3.713.783.798-3.618-.235-.372A9.818 9.818 0 012.182 12C2.182 6.566 6.566 2.182 12 2.182S21.818 6.566 21.818 12 17.434 21.818 12 21.818z" />
            </svg>
            Consultar por WhatsApp
          </a>
        </div>

        <p className="mt-10 text-xs text-secondary-gray/60">
          ¿Necesitás algo urgente?{' '}
          <Link to="/sucursales" className="text-primary hover:underline font-medium">
            Visitá nuestras sucursales
          </Link>
        </p>
      </div>
    </section>
  )
}

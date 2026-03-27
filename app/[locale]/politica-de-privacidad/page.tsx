import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Política de privacidad de Rodyna Farmacias. Cómo recopilamos, usamos y protegemos tus datos personales conforme a la Ley 25.326.',
  alternates: {
    canonical: 'https://www.rodynafarmacias.com.ar/politica-de-privacidad',
  },
}

export default function PoliticaPrivacidadPage() {
  return (
    <section className="py-16" aria-labelledby="privacy-title">
      <div className="container-page max-w-3xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-secondary-gray">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-main-dark font-medium" aria-current="page">
              Política de Privacidad
            </li>
          </ol>
        </nav>

        <h1 id="privacy-title" className="text-4xl font-black text-main-dark mb-2">
          Política de Privacidad
        </h1>
        <p className="text-sm text-secondary-gray mb-10">Última actualización: Marzo 2025</p>

        {/* Coming Soon */}
        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-10 text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-main-dark mb-3">Próximamente</h2>
          <p className="text-secondary-gray max-w-md mx-auto mb-6">
            Nuestra Política de Privacidad está siendo elaborada conforme a la Ley 25.326 de
            Protección de Datos Personales de la República Argentina. Será publicada previo al
            lanzamiento de la tienda online.
          </p>
          <p className="text-sm text-secondary-gray mb-8">
            Ante cualquier consulta sobre el tratamiento de tus datos, podés contactarnos por
            WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Volver al inicio
            </Link>
            <a
              href="https://wa.me/+5491161333590"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="Contactar por WhatsApp (abre en nueva pestaña)"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        {/* Aviso sanitario */}
        <div className="mt-10 p-5 bg-slate-50 rounded-xl border border-secondary-gray/20 text-xs text-secondary-gray leading-relaxed">
          <strong className="text-main-dark block mb-1">Aviso sanitario</strong>
          Venta responsable de medicamentos y productos de parafarmacia. Ante cualquier duda sobre el
          uso de un producto, consultá a tu médico o farmacéutico. Leé siempre el prospecto antes de
          usar cualquier medicamento.
        </div>
      </div>
    </section>
  )
}

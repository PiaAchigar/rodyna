import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'

export const metadata: Metadata = {
  title: 'Pago pendiente',
  robots: { index: false, follow: false },
}

export default function MpPendingPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16 px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="h-10 w-10 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-black text-main-dark mb-3">Pago pendiente</h1>
        <p className="text-secondary-gray mb-2">
          Tu pago está siendo procesado. Te notificaremos cuando sea confirmado.
        </p>
        <p className="text-sm text-secondary-gray/70 mb-8">
          Esto puede demorar algunos minutos. Revisá tu email para más información.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/cuenta" className="btn-primary">
            Ver mis pedidos
          </Link>
          <Link href="/" className="btn-secondary">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}

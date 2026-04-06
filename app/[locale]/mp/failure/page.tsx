import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'

export const metadata: Metadata = {
  title: 'Pago fallido',
  robots: { index: false, follow: false },
}

export default function MpFailurePage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16 px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-3xl font-black text-main-dark mb-3">El pago no pudo procesarse</h1>
        <p className="text-secondary-gray mb-2">
          Hubo un problema al procesar tu pago. No se realizó ningún cargo.
        </p>
        <p className="text-sm text-secondary-gray/70 mb-8">
          Podés intentarlo nuevamente o elegir otro método de pago.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/checkout" className="btn-primary">
            Intentar de nuevo
          </Link>
          <Link href="/carrito" className="btn-secondary">
            Volver al carrito
          </Link>
        </div>
      </div>
    </div>
  )
}

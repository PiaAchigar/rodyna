import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'

export const metadata: Metadata = {
  title: 'Pago exitoso',
  robots: { index: false, follow: false },
}

export default function MpSuccessPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16 px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-black text-main-dark mb-3">¡Pago exitoso!</h1>
        <p className="text-secondary-gray mb-2">
          Tu pedido fue confirmado. En breve recibirás un email con los detalles.
        </p>
        <p className="text-sm text-secondary-gray/70 mb-8">
          Podés seguir el estado de tu pedido desde tu cuenta.
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

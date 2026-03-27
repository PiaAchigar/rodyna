import { Link } from '@/i18n/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Confirmación de pedido',
  robots: { index: false, follow: false },
}

export default function ConfirmacionPage() {
  return (
    <div className="container-page py-20 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-black text-main-dark mb-3">
          ¡Pedido confirmado!
        </h1>
        <p className="text-secondary-gray mb-2">
          Recibimos tu pedido y lo estamos preparando.
        </p>
        <p className="text-secondary-gray text-sm mb-8">
          Te enviaremos un email con los detalles y el seguimiento.
        </p>
        <Link href="/" className="btn-primary">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

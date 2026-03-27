'use client'

import { Link } from '@/i18n/navigation'
import { useCartStore } from '@/store/useCartStore'
import { useCurrencyStore } from '@/store/useCurrencyStore'
import { formatPrice } from '@/lib/currency'

function EmptyCart() {
  return (
    <div className="flex-1 flex items-center justify-center py-20">
      <div className="text-center max-w-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-secondary-gray/20 mx-auto mb-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <h2 className="text-xl font-bold text-main-dark mb-2">
          Tu carrito está vacío
        </h2>
        <p className="text-secondary-gray text-sm mb-6">
          Agregá productos desde nuestro catálogo.
        </p>
        <Link href="/catalogo" className="btn-primary">
          Ver catálogo
        </Link>
      </div>
    </div>
  )
}

export default function CarritoPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore()
  const currency = useCurrencyStore((s) => s.currency)

  if (items.length === 0) return <EmptyCart />

  const subtotal = totalPrice()
  const SHIPPING_THRESHOLD = 15000
  const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : 2500
  const total = subtotal + shipping

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-black text-main-dark mb-8">Tu Carrito</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Items */}
        <section className="flex-1" aria-label="Productos en el carrito">
          <ul className="space-y-4" role="list">
            {items.map((item) => (
              <li
                key={item.id}
                className="bg-white rounded-2xl p-5 flex items-center gap-5 shadow-sm"
              >
                <div className="w-20 h-20 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <Link
                    href={`/producto/${item.slug}`}
                    className="font-semibold text-main-dark text-sm hover:text-primary transition-colors line-clamp-2 focus-visible:outline-none focus-visible:underline"
                  >
                    {item.name}
                  </Link>
                  <p className="text-primary font-black mt-1">
                    {formatPrice(item.price, currency)}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {/* Cantidad */}
                  <div className="flex items-center border border-secondary-gray/30 rounded-xl overflow-hidden text-sm">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="px-3 py-1.5 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-label={`Reducir cantidad de ${item.name}`}
                    >
                      –
                    </button>
                    <span
                      className="px-3 font-semibold min-w-[2rem] text-center"
                      aria-live="polite"
                    >
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="px-3 py-1.5 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-label={`Aumentar cantidad de ${item.name}`}
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal item */}
                  <p className="font-black text-main-dark text-sm w-24 text-right hidden sm:block">
                    {formatPrice(item.price * item.quantity, currency)}
                  </p>

                  {/* Eliminar */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-secondary-gray hover:text-red-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300 rounded-full"
                    aria-label={`Eliminar ${item.name} del carrito`}
                  >
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 text-sm text-secondary-gray hover:text-primary transition-colors mt-6 focus-visible:outline-none focus-visible:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
            Seguir comprando
          </Link>
        </section>

        {/* Resumen */}
        <aside className="lg:w-80 shrink-0" aria-label="Resumen del pedido">
          <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
            <h2 className="font-bold text-main-dark text-lg mb-5">
              Resumen del pedido
            </h2>

            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-secondary-gray">Subtotal</dt>
                <dd className="font-semibold">
                  {formatPrice(subtotal, currency)}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-secondary-gray">Envío</dt>
                <dd
                  className={
                    shipping === 0
                      ? 'text-primary font-semibold'
                      : 'font-semibold'
                  }
                >
                  {shipping === 0 ? 'Gratis' : formatPrice(shipping, currency)}
                </dd>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-secondary-gray bg-slate-50 rounded-lg p-2">
                  Agregá{' '}
                  {formatPrice(SHIPPING_THRESHOLD - subtotal, currency)} más
                  para envío gratis.
                </p>
              )}
              <div className="border-t border-secondary-gray/20 pt-3 flex justify-between font-black text-main-dark text-base">
                <dt>Total</dt>
                <dd>{formatPrice(total, currency)}</dd>
              </div>
            </dl>

            <Link
              href="/checkout"
              className="btn-primary w-full justify-center mt-6 text-base"
            >
              Continuar con el pago
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <p className="text-xs text-secondary-gray text-center mt-4">
              Podés completar la compra como invitado
            </p>

            {/* Badges de seguridad */}
            <div className="flex items-center justify-center gap-4 mt-5 pt-5 border-t border-secondary-gray/15">
              <div className="flex items-center gap-1 text-xs text-secondary-gray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Pago seguro
              </div>
              <div className="flex items-center gap-1 text-xs text-secondary-gray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Compra protegida
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link, useRouter } from '@/i18n/navigation'
import { useCartStore } from '@/store/useCartStore'
import { useCurrencyStore } from '@/store/useCurrencyStore'
import { useAuthStore } from '@/store/useAuthStore'
import { formatPrice } from '@/lib/currency'
import { branches } from '@/lib/branches'

const TIME_SLOTS = ['09:00 – 13:00', '13:00 – 17:00', '17:00 – 21:00']
const SHIPPING_METHODS = [
  { id: 'retiro', label: 'Retiro en sucursal', description: 'Sin costo', cost: 0 },
  { id: 'moto-caba', label: 'Envío en el día — CABA', description: '$2.500', cost: 2500 },
  { id: 'moto-amba', label: 'Envío en el día — AMBA', description: '$3.500', cost: 3500 },
]

const checkoutSchema = z
  .object({
    firstName: z.string().min(2, 'Requerido'),
    lastName: z.string().min(2, 'Requerido'),
    email: z.string().email('Email inválido'),
    phone: z.string().min(8, 'Teléfono inválido'),
    shippingMethod: z.enum(['retiro', 'moto-caba', 'moto-amba']),
    branchId: z.string().optional(),
    address: z.string().optional(),
    addressNumber: z.string().optional(),
    city: z.string().optional(),
    timeSlot: z.string().optional(),
    notes: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.shippingMethod === 'retiro' && !data.branchId) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Seleccioná una sucursal',
        path: ['branchId'],
      })
    }
    if (data.shippingMethod !== 'retiro') {
      if (!data.address)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Requerido',
          path: ['address'],
        })
      if (!data.timeSlot)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Seleccioná una franja',
          path: ['timeSlot'],
        })
    }
  })

type CheckoutForm = z.infer<typeof checkoutSchema>

const inputCls = (err?: string) =>
  `w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
    err ? 'border-red-400' : 'border-secondary-gray/30 focus:border-primary'
  }`

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalPrice, clearCart } = useCartStore()
  const currency = useCurrencyStore((s) => s.currency)
  const { isAuthenticated, user } = useAuthStore()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
      shippingMethod: 'retiro',
    },
  })

  const shippingMethod = watch('shippingMethod')
  const selectedShipping = SHIPPING_METHODS.find(
    (m) => m.id === shippingMethod
  )!
  const subtotal = totalPrice()
  const total = subtotal + (selectedShipping?.cost ?? 0)

  const onSubmit = async (_data: CheckoutForm) => {
    // TODO: POST /api/orders → luego POST /api/payments/mp/preference → redirect (Etapa 3)
    await new Promise((r) => setTimeout(r, 1000))
    alert('Checkout completado (modo demo). En Etapa 3 se conecta con Mercado Pago.')
    clearCart()
    router.push('/')
  }

  if (items.length === 0) {
    return (
      <div className="container-page py-20 text-center">
        <p className="text-xl font-bold text-main-dark mb-4">
          Tu carrito está vacío
        </p>
        <Link href="/catalogo" className="btn-primary">
          Ver catálogo
        </Link>
      </div>
    )
  }

  return (
    <div className="container-page py-10">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="text-sm text-secondary-gray mb-8 flex items-center gap-2"
      >
        <Link href="/carrito" className="hover:text-primary transition-colors">
          Carrito
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-main-dark font-medium" aria-current="page">
          Checkout
        </span>
      </nav>

      <h1 className="text-3xl font-black text-main-dark mb-8">
        Finalizar compra
      </h1>

      {/* Aviso invitado */}
      {!isAuthenticated && (
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-8 flex items-start gap-3 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-primary shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>
            Podés comprar como invitado.{' '}
            <Link
              href="/login"
              className="text-primary font-semibold hover:underline"
            >
              Ingresá o registrate
            </Link>{' '}
            para guardar tus datos y ver el historial.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Formulario */}
          <div className="flex-1 space-y-8">
            {/* Datos de contacto */}
            <section aria-labelledby="contact-title">
              <h2
                id="contact-title"
                className="text-lg font-bold text-main-dark mb-4 pb-2 border-b border-secondary-gray/20"
              >
                1. Datos de contacto
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-main-dark mb-1.5"
                    >
                      Nombre
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className={inputCls(errors.firstName?.message)}
                      {...register('firstName')}
                    />
                    {errors.firstName && (
                      <p role="alert" className="mt-1 text-xs text-red-500">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-main-dark mb-1.5"
                    >
                      Apellido
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className={inputCls(errors.lastName?.message)}
                      {...register('lastName')}
                    />
                    {errors.lastName && (
                      <p role="alert" className="mt-1 text-xs text-red-500">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-main-dark mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={inputCls(errors.email?.message)}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p role="alert" className="mt-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-main-dark mb-1.5"
                  >
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+54 11 ..."
                    className={inputCls(errors.phone?.message)}
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <p role="alert" className="mt-1 text-xs text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* Método de entrega */}
            <section aria-labelledby="shipping-title">
              <h2
                id="shipping-title"
                className="text-lg font-bold text-main-dark mb-4 pb-2 border-b border-secondary-gray/20"
              >
                2. Método de entrega
              </h2>
              <div className="space-y-3">
                {SHIPPING_METHODS.map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                      shippingMethod === method.id
                        ? 'border-primary bg-primary/5'
                        : 'border-secondary-gray/20 hover:border-secondary-gray/40'
                    }`}
                  >
                    <input
                      type="radio"
                      value={method.id}
                      className="accent-primary h-4 w-4"
                      {...register('shippingMethod')}
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-main-dark text-sm">
                        {method.label}
                      </p>
                      <p className="text-xs text-secondary-gray">
                        {method.description}
                      </p>
                    </div>
                    {method.cost === 0 && (
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        Gratis
                      </span>
                    )}
                  </label>
                ))}
              </div>

              {/* Retiro en sucursal */}
              {shippingMethod === 'retiro' && (
                <div className="mt-4">
                  <label
                    htmlFor="branchId"
                    className="block text-sm font-semibold text-main-dark mb-1.5"
                  >
                    Sucursal de retiro
                  </label>
                  <select
                    id="branchId"
                    className={inputCls(errors.branchId?.message)}
                    {...register('branchId')}
                  >
                    <option value="">Seleccioná una sucursal</option>
                    {branches.map((b) => (
                      <option key={b.id} value={String(b.id)}>
                        {b.name} — {b.address}, {b.city}
                      </option>
                    ))}
                  </select>
                  {errors.branchId && (
                    <p role="alert" className="mt-1 text-xs text-red-500">
                      {errors.branchId.message}
                    </p>
                  )}
                </div>
              )}

              {/* Envío a domicilio */}
              {shippingMethod !== 'retiro' && (
                <div className="mt-4 space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <label
                        htmlFor="address"
                        className="block text-sm font-semibold text-main-dark mb-1.5"
                      >
                        Calle
                      </label>
                      <input
                        id="address"
                        type="text"
                        className={inputCls(errors.address?.message)}
                        {...register('address')}
                      />
                      {errors.address && (
                        <p role="alert" className="mt-1 text-xs text-red-500">
                          {errors.address.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="addressNumber"
                        className="block text-sm font-semibold text-main-dark mb-1.5"
                      >
                        Número
                      </label>
                      <input
                        id="addressNumber"
                        type="text"
                        className={inputCls()}
                        {...register('addressNumber')}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-semibold text-main-dark mb-1.5"
                    >
                      Ciudad / Barrio
                    </label>
                    <input
                      id="city"
                      type="text"
                      className={inputCls()}
                      {...register('city')}
                    />
                  </div>

                  {/* Franja horaria */}
                  <div>
                    <p className="text-sm font-semibold text-main-dark mb-2">
                      Franja horaria de entrega
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {TIME_SLOTS.map((slot) => (
                        <label
                          key={slot}
                          className={`flex flex-col items-center text-center p-3 border-2 rounded-xl cursor-pointer transition-colors text-xs font-medium ${
                            watch('timeSlot') === slot
                              ? 'border-primary bg-primary/5 text-primary'
                              : 'border-secondary-gray/20 hover:border-secondary-gray/40 text-secondary-gray'
                          }`}
                        >
                          <input
                            type="radio"
                            value={slot}
                            className="sr-only"
                            {...register('timeSlot')}
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mb-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {slot}
                        </label>
                      ))}
                    </div>
                    {errors.timeSlot && (
                      <p role="alert" className="mt-1 text-xs text-red-500">
                        {errors.timeSlot.message}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </section>

            {/* Observaciones */}
            <section aria-labelledby="notes-title">
              <h2
                id="notes-title"
                className="text-lg font-bold text-main-dark mb-4 pb-2 border-b border-secondary-gray/20"
              >
                3. Observaciones{' '}
                <span className="text-secondary-gray font-normal text-sm">
                  (opcional)
                </span>
              </h2>
              <textarea
                rows={3}
                placeholder="Indicaciones especiales para la entrega, piso, depto, etc."
                className="w-full px-4 py-3 border border-secondary-gray/30 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                {...register('notes')}
              />
            </section>
          </div>

          {/* Resumen del pedido */}
          <aside className="lg:w-80 shrink-0" aria-label="Resumen del pedido">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h2 className="font-bold text-main-dark text-base mb-4">
                Resumen
              </h2>

              {/* Items */}
              <ul className="space-y-3 mb-4" role="list">
                {items.map((item) => (
                  <li key={item.id} className="flex items-center gap-3 text-sm">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <span className="flex-1 text-secondary-gray line-clamp-1">
                      {item.name} ×{item.quantity}
                    </span>
                    <span className="font-semibold text-main-dark shrink-0">
                      {formatPrice(item.price * item.quantity, currency)}
                    </span>
                  </li>
                ))}
              </ul>

              <dl className="space-y-2 text-sm border-t border-secondary-gray/15 pt-4">
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
                      selectedShipping?.cost === 0
                        ? 'text-primary font-semibold'
                        : 'font-semibold'
                    }
                  >
                    {selectedShipping?.cost === 0
                      ? 'Gratis'
                      : formatPrice(selectedShipping?.cost ?? 0, currency)}
                  </dd>
                </div>
                <div className="flex justify-between font-black text-main-dark text-base border-t border-secondary-gray/15 pt-3 mt-1">
                  <dt>Total</dt>
                  <dd>{formatPrice(total, currency)}</dd>
                </div>
              </dl>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-5 text-base"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Procesando...
                  </>
                ) : (
                  <>
                    Pagar con Mercado Pago
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
                  </>
                )}
              </button>

              <p className="text-center text-xs text-secondary-gray mt-3 flex items-center justify-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
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
                Pago 100% seguro
              </p>
            </div>
          </aside>
        </div>
      </form>
    </div>
  )
}

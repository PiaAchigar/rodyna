'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link, useRouter } from '@/i18n/navigation'
import { useAuthStore } from '@/store/useAuthStore'
import { useCurrencyStore } from '@/store/useCurrencyStore'

// formatPrice inline para evitar import.meta.env de Vite
function formatPrice(arsPrice: number, currency: 'ARS' | 'USD'): string {
  const USD_RATE = Number(process.env.NEXT_PUBLIC_USD_RATE) || 1100
  if (currency === 'USD') {
    const usd = arsPrice / USD_RATE
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(usd)
  }
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(arsPrice)
}

const profileSchema = z.object({
  firstName: z.string().min(2, 'Mínimo 2 caracteres'),
  lastName: z.string().min(2, 'Mínimo 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
})
type ProfileForm = z.infer<typeof profileSchema>

type Section = 'overview' | 'orders' | 'addresses' | 'profile'

// Órdenes de ejemplo — se reemplaza con datos reales del API (Etapa 3)
const MOCK_ORDERS = [
  { id: 'RDN-0001', date: '2025-03-10', status: 'Entregado', total: 45000, items: 3 },
  { id: 'RDN-0002', date: '2025-03-05', status: 'En camino', total: 22000, items: 1 },
  { id: 'RDN-0003', date: '2025-02-28', status: 'Entregado', total: 118000, items: 5 },
]

const STATUS_COLORS: Record<string, string> = {
  Entregado: 'bg-green-100 text-green-700',
  'En camino': 'bg-yellow-100 text-yellow-700',
  Pendiente: 'bg-blue-100 text-blue-700',
  Cancelado: 'bg-red-100 text-red-700',
}

function NavItem({
  label,
  section,
  current,
  onClick,
}: {
  label: string
  section: Section
  current: Section
  onClick: () => void
}) {
  const isActive = section === current
  return (
    <button
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-colors flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
        isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-secondary-gray hover:bg-slate-100'
      }`}
    >
      {label}
    </button>
  )
}

export default function CuentaPage() {
  const { isAuthenticated, user, logout } = useAuthStore()
  const currency = useCurrencyStore((s) => s.currency)
  const router = useRouter()
  const [section, setSection] = useState<Section>('overview')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login')
    }
  }, [isAuthenticated, router])

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: user?.firstName || 'Usuario',
      lastName: user?.lastName || 'Demo',
      email: user?.email || 'usuario@demo.com',
      phone: '',
    },
  })

  // Evitar flash de contenido si no está autenticado
  if (!isAuthenticated) return null

  const onSave = async (_data: ProfileForm) => {
    await new Promise((r) => setTimeout(r, 600))
    // TODO: PUT /api/me (Etapa 3)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div className="container-page py-10">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Sidebar */}
        <aside className="lg:w-56 shrink-0" aria-label="Navegación de cuenta">
          {/* Avatar */}
          <div className="text-center mb-6 lg:block hidden">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-2">
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <p className="font-bold text-main-dark text-sm">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-xs text-secondary-gray">{user?.email}</p>
          </div>

          <nav className="space-y-1">
            <NavItem label="Resumen" section="overview" current={section} onClick={() => setSection('overview')} />
            <NavItem label="Mis pedidos" section="orders" current={section} onClick={() => setSection('orders')} />
            <NavItem label="Direcciones" section="addresses" current={section} onClick={() => setSection('addresses')} />
            <NavItem label="Mis datos" section="profile" current={section} onClick={() => setSection('profile')} />
          </nav>

          <div className="mt-4 pt-4 border-t border-secondary-gray/20">
            <button
              onClick={logout}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm text-red-500 hover:bg-red-50 transition-colors flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
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
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Cerrar sesión
            </button>
          </div>
        </aside>

        {/* Contenido */}
        <main className="flex-1 min-w-0">

          {/* Resumen */}
          {section === 'overview' && (
            <section aria-labelledby="overview-title">
              <h1 id="overview-title" className="text-2xl font-black text-main-dark mb-2">
                Resumen de cuenta
              </h1>
              <p className="text-secondary-gray text-sm mb-6">Gestioná tu perfil y revisá tus pedidos.</p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Pedidos totales', value: MOCK_ORDERS.length, icon: '📦' },
                  {
                    label: 'Pedidos activos',
                    value: MOCK_ORDERS.filter((o) => o.status === 'En camino').length,
                    icon: '🚴',
                  },
                  {
                    label: 'Gastado total',
                    value: formatPrice(
                      MOCK_ORDERS.reduce((s, o) => s + o.total, 0),
                      currency
                    ),
                    icon: '💳',
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-secondary-gray/15"
                  >
                    <p className="text-2xl mb-1">{stat.icon}</p>
                    <p className="text-xs text-secondary-gray">{stat.label}</p>
                    <p className="text-xl font-black text-main-dark mt-0.5">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Pedidos recientes */}
              <div className="bg-white rounded-2xl shadow-sm border border-secondary-gray/15 overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-secondary-gray/15">
                  <h2 className="font-bold text-main-dark">Pedidos recientes</h2>
                  <button
                    onClick={() => setSection('orders')}
                    className="text-sm text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    Ver todos
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-xs font-bold text-secondary-gray uppercase tracking-wide">
                        <th className="px-5 py-3 text-left">Pedido</th>
                        <th className="px-5 py-3 text-left">Fecha</th>
                        <th className="px-5 py-3 text-left">Estado</th>
                        <th className="px-5 py-3 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary-gray/10">
                      {MOCK_ORDERS.slice(0, 3).map((order) => (
                        <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-5 py-3.5 font-semibold text-main-dark">#{order.id}</td>
                          <td className="px-5 py-3.5 text-secondary-gray">{order.date}</td>
                          <td className="px-5 py-3.5">
                            <span
                              className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                                STATUS_COLORS[order.status] || 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="px-5 py-3.5 text-right font-bold text-main-dark">
                            {formatPrice(order.total, currency)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* Pedidos */}
          {section === 'orders' && (
            <section aria-labelledby="orders-title">
              <h1 id="orders-title" className="text-2xl font-black text-main-dark mb-6">
                Mis pedidos
              </h1>
              {MOCK_ORDERS.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-secondary-gray mb-4">Aún no hiciste pedidos.</p>
                  <Link href="/catalogo" className="btn-primary">
                    Ir al catálogo
                  </Link>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-secondary-gray/15 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-xs font-bold text-secondary-gray uppercase tracking-wide">
                          <th className="px-5 py-3 text-left">Pedido</th>
                          <th className="px-5 py-3 text-left">Fecha</th>
                          <th className="px-5 py-3 text-left">Items</th>
                          <th className="px-5 py-3 text-left">Estado</th>
                          <th className="px-5 py-3 text-right">Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-secondary-gray/10">
                        {MOCK_ORDERS.map((order) => (
                          <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-5 py-3.5 font-semibold text-main-dark">#{order.id}</td>
                            <td className="px-5 py-3.5 text-secondary-gray">{order.date}</td>
                            <td className="px-5 py-3.5 text-secondary-gray">{order.items} productos</td>
                            <td className="px-5 py-3.5">
                              <span
                                className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                                  STATUS_COLORS[order.status] || 'bg-slate-100 text-slate-600'
                                }`}
                              >
                                {order.status}
                              </span>
                            </td>
                            <td className="px-5 py-3.5 text-right font-bold text-main-dark">
                              {formatPrice(order.total, currency)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Direcciones */}
          {section === 'addresses' && (
            <section aria-labelledby="addresses-title">
              <h1 id="addresses-title" className="text-2xl font-black text-main-dark mb-6">
                Mis direcciones
              </h1>
              <div className="text-center py-16 bg-white rounded-2xl border border-secondary-gray/15">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-secondary-gray/30 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-secondary-gray text-sm mb-4">No tenés direcciones guardadas.</p>
                <button className="btn-primary text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Agregar dirección
                </button>
              </div>
            </section>
          )}

          {/* Perfil */}
          {section === 'profile' && (
            <section aria-labelledby="profile-title">
              <h1 id="profile-title" className="text-2xl font-black text-main-dark mb-6">
                Mis datos
              </h1>
              <div className="bg-white rounded-2xl shadow-sm border border-secondary-gray/15 p-6">
                <form onSubmit={handleSubmit(onSave)} noValidate className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="p-firstName" className="block text-sm font-semibold text-main-dark mb-1.5">
                        Nombre
                      </label>
                      <input
                        id="p-firstName"
                        type="text"
                        className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                          errors.firstName ? 'border-red-400' : 'border-secondary-gray/30'
                        }`}
                        {...register('firstName')}
                      />
                      {errors.firstName && (
                        <p role="alert" className="mt-1 text-xs text-red-500">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="p-lastName" className="block text-sm font-semibold text-main-dark mb-1.5">
                        Apellido
                      </label>
                      <input
                        id="p-lastName"
                        type="text"
                        className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                          errors.lastName ? 'border-red-400' : 'border-secondary-gray/30'
                        }`}
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
                    <label htmlFor="p-email" className="block text-sm font-semibold text-main-dark mb-1.5">
                      Email
                    </label>
                    <input
                      id="p-email"
                      type="email"
                      className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.email ? 'border-red-400' : 'border-secondary-gray/30'
                      }`}
                      {...register('email')}
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1 text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="p-phone" className="block text-sm font-semibold text-main-dark mb-1.5">
                      Teléfono{' '}
                      <span className="text-secondary-gray font-normal">(opcional)</span>
                    </label>
                    <input
                      id="p-phone"
                      type="tel"
                      placeholder="+54 11 ..."
                      className="w-full px-4 py-3 border border-secondary-gray/30 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      {...register('phone')}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {saved && (
                      <p role="status" className="text-sm text-green-600 font-semibold flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Cambios guardados
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ml-auto bg-main-dark text-white font-bold px-6 py-3 rounded-xl hover:bg-main-dark/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Guardando...' : 'Guardar cambios'}
                    </button>
                  </div>
                </form>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'

// Nota: el noindex para esta ruta se configura en el layout.tsx adyacente,
// que sí puede exportar metadata (Server Component).

const ADMIN_PASSWORD = 'ADMIN_PLACEHOLDER'

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simula latencia para evitar timing attacks básicos
    await new Promise((r) => setTimeout(r, 500))

    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
    } else {
      setError('Contraseña incorrecta.')
      setPassword('')
    }
    setIsLoading(false)
  }

  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-main-dark flex items-center justify-center px-4">
        <div className="text-center max-w-lg w-full">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-black text-white mb-2">Área de administración</h1>
            <p className="text-white/50 text-sm mb-6">En construcción — disponible en etapas futuras.</p>
            <div className="bg-primary/10 border border-primary/20 rounded-xl px-5 py-4 text-left">
              <p className="text-primary text-sm font-semibold mb-1">Estado del sistema</p>
              <ul className="text-white/60 text-xs space-y-1">
                <li>• Panel de productos: pendiente (Etapa 4)</li>
                <li>• Gestión de pedidos: pendiente (Etapa 4)</li>
                <li>• Analytics: pendiente (Etapa 5)</li>
                <li>• Configuración: pendiente (Etapa 5)</li>
              </ul>
            </div>
            <button
              onClick={() => {
                setIsAuthenticated(false)
                setPassword('')
              }}
              className="mt-6 text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Cerrar sesión de administración
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-main-dark flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <Image
            src="/assets/cruz_color_claro.svg"
            alt="Rodyna Farmacias"
            width={48}
            height={48}
            className="h-12 w-auto mx-auto mb-4 opacity-80"
            unoptimized
          />
          <h1 className="text-xl font-black text-white">Administración</h1>
          <p className="text-white/40 text-sm mt-1">Acceso restringido</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="admin-password" className="block text-sm font-semibold text-white/70 mb-1.5">
                Contraseña
              </label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                placeholder="••••••••"
                aria-describedby={error ? 'admin-error' : undefined}
                aria-invalid={!!error}
                required
                className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                  error ? 'border-red-400/60 focus:ring-red-400/40' : 'border-white/15 focus:border-primary'
                }`}
              />
              {error && (
                <p id="admin-error" role="alert" className="mt-1.5 text-xs text-red-400 font-medium">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading || !password}
              className="w-full bg-primary text-main-dark font-bold py-3.5 rounded-xl hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Verificando...
                </>
              ) : (
                'Acceder'
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-white/20 mt-6">
          Esta área es de acceso exclusivo para administradores.
        </p>
      </div>
    </div>
  )
}

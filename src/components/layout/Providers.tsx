'use client'

/**
 * Providers client-side.
 * Centraliza todos los Context providers que requieren 'use client'.
 * Agregar acá nuevos providers (ej: react-query, toast, theme) en etapas futuras.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

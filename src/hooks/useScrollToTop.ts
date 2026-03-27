'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Cada vez que cambia la ruta, hace scroll suave hasta el tope de la página.
 */
export function useScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
}

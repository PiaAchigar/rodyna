import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Cada vez que cambia la ruta, hace scroll suave hasta el tope de la página.
 * Usa el comportamiento nativo `smooth` del navegador, con un easing natural.
 */
export function useScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
}

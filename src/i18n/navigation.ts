/**
 * Helpers de navegación con locale automático.
 * Usar estos en lugar de 'next/link' y 'next/navigation'
 * para que las rutas respeten el locale activo.
 *
 * Ejemplo:
 *   import { Link, useRouter, usePathname } from '@/i18n/navigation'
 */
import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)

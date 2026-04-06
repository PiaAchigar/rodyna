import createMiddleware from 'next-intl/middleware'
import { routing } from './src/i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Aplicar el middleware a todas las rutas excepto:
  // - /api/* (rutas de API de Next.js)
  // - /_next/* (assets internos de Next.js)
  // - /assets/* (assets estáticos en /public/assets)
  // - archivos con extensión (ej: favicon.ico, robots.txt)
  matcher: ['/((?!api|_next|_vercel|assets|.*\\..*).*)'],
}

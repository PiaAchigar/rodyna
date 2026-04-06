// Root layout requerido por Next.js.
// El layout real (con <html>, <body>, providers) está en app/[locale]/layout.tsx.
// Este wrapper es necesario para que Next.js maneje correctamente el not-found
// del nivel raíz y otras rutas especiales.

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement
}

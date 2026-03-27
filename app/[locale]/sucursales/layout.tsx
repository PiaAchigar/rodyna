import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sucursales — Caseros, Liniers, Almagro y Palermo',
  description:
    'Encontrá las 4 sucursales de Rodyna Farmacias en CABA y AMBA: Caseros, Liniers, Almagro y Palermo. Horarios, teléfonos y obras sociales.',
  openGraph: {
    title: 'Sucursales | Rodyna Farmacias',
    description:
      'Encontrá la sucursal Rodyna Farmacias más cercana. Caseros, Liniers, Almagro y Palermo.',
    url: 'https://www.rodynafarmacias.com.ar/sucursales',
  },
  alternates: {
    canonical: 'https://www.rodynafarmacias.com.ar/sucursales',
  },
}

export default function SucursalesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

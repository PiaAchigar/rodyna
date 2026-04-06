import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Administración | Rodyna Farmacias',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

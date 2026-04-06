'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { Link, useRouter, usePathname } from '@/i18n/navigation'
import { useCartStore } from '@/store/useCartStore'
import { useAuthStore } from '@/store/useAuthStore'
import { useCurrencyStore } from '@/store/useCurrencyStore'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+5491161333590'

export default function Header() {
  const t = useTranslations()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const totalItems = useCartStore((s) => s.totalItems())
  const { isAuthenticated } = useAuthStore()
  const { currency, toggle: toggleCurrency } = useCurrencyStore()

  const toggleLang = () => {
    const nextLocale = locale === 'es' ? 'en' : 'es'
    router.replace(pathname, { locale: nextLocale })
  }

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/sucursales', label: t('nav.branches') },
    { href: '/nosotros', label: t('nav.about') },
    { href: '/catalogo', label: t('nav.catalog') },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary-gray/20 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container-page h-16 md:h-20 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="Rodyna Farmacias – Inicio"
        >
          <Image
            src="/assets/cruz_color_claro.svg"
            alt="Rodyna Farmacias"
            width={36}
            height={36}
            className="h-9 w-auto"
            priority
            unoptimized
          />
          <span className="text-lg font-extrabold tracking-tight text-main-dark hidden sm:block">
            Rodyna <span className="text-primary">Farmacias</span>
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navegación principal">
          {navLinks.map((l) => (
            <NavLink key={l.href} href={l.href} currentPathname={pathname}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Currency toggle */}
          <button
            onClick={toggleCurrency}
            className="hidden sm:flex items-center gap-1 text-xs font-bold text-secondary-gray hover:text-main-dark transition-colors px-2 py-1 rounded-full hover:bg-light-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Cambiar a ${currency === 'ARS' ? 'USD' : 'ARS'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {currency}
          </button>

          {/* Lang toggle */}
          <button
            onClick={toggleLang}
            className="hidden sm:flex items-center gap-1 text-xs font-bold text-secondary-gray hover:text-main-dark transition-colors px-2 py-1 rounded-full hover:bg-light-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Cambiar idioma"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            {locale === 'es' ? 'ES' : 'EN'}
          </button>

          {/* Search */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-secondary-gray hover:text-main-dark hover:bg-light-bg rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Buscar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Cart */}
          <Link
            href="/carrito"
            className="relative p-2 text-secondary-gray hover:text-main-dark hover:bg-light-bg rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`${t('nav.cart')} (${totalItems} items)`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </Link>

          {/* User */}
          <Link
            href={isAuthenticated ? '/cuenta' : '/login'}
            className="hidden sm:flex p-2 text-secondary-gray hover:text-main-dark hover:bg-light-bg rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={isAuthenticated ? t('nav.account') : t('nav.login')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-secondary-gray hover:text-main-dark rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Search bar expandible */}
      {searchOpen && (
        <div className="border-t border-secondary-gray/20 bg-white px-4 py-3">
          <div className="container-page">
            <div className="relative max-w-lg mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-secondary-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                placeholder={t('search')}
                autoFocus
                className="w-full pl-10 pr-4 py-2.5 border border-secondary-gray/30 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={t('search')}
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-secondary-gray/20 bg-white" aria-label="Navegación móvil">
          <div className="container-page py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium transition-colors text-secondary-gray hover:bg-light-bg"
              >
                {l.label}
              </Link>
            ))}
            <div className="border-t border-secondary-gray/20 pt-3 mt-2 flex items-center justify-between px-4">
              <Link
                href={isAuthenticated ? '/cuenta' : '/login'}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-main-dark hover:text-primary transition-colors"
              >
                {isAuthenticated ? t('nav.account') : t('nav.login')}
              </Link>
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 text-xs font-bold text-secondary-gray hover:text-main-dark transition-colors"
              >
                {locale === 'es' ? 'ES → EN' : 'EN → ES'}
              </button>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mx-4 mt-2 flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.399 5.61L0 24l6.545-1.38A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.367l-.36-.214-3.713.783.798-3.618-.235-.372A9.818 9.818 0 012.182 12C2.182 6.566 6.566 2.182 12 2.182S21.818 6.566 21.818 12 17.434 21.818 12 21.818z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

// NavLink con estado activo basado en pathname
function NavLink({
  href,
  currentPathname,
  children,
}: {
  href: string
  currentPathname: string
  children: React.ReactNode
}) {
  const isActive = href === '/' ? currentPathname === '/' : currentPathname.startsWith(href)

  return (
    <Link
      href={href as '/'}
      className={`text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded ${
        isActive ? 'text-primary font-semibold' : 'text-secondary-gray'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  )
}

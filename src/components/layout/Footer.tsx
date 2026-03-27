import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'

const WHATSAPP_NUMBER = '+5491161333590' // TODO: mover a env
const INSTAGRAM_URL = 'https://www.instagram.com/farmaciashunko/'
const FACEBOOK_URL = 'https://www.facebook.com/FarmaciasHunko/'
const CONTACT_EMAIL = 'info@rodynafarmacias.com.ar' // TODO: confirmar

export default async function Footer() {
  const t = await getTranslations()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-main-dark text-white">
      <div className="container-page py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/assets/cruz_color_claro.svg"
                alt="Rodyna Farmacias"
                width={32}
                height={32}
                className="h-8 w-auto brightness-0 invert"
                unoptimized
              />
              <span className="font-extrabold text-lg">
                Rodyna <span className="text-primary">Farmacias</span>
              </span>
            </div>
            <p className="text-secondary-gray text-sm leading-relaxed mb-5">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-3">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 bg-white/10 hover:bg-primary/30 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.399 5.61L0 24l6.545-1.38A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.367l-.36-.214-3.713.783.798-3.618-.235-.372A9.818 9.818 0 012.182 12C2.182 6.566 6.566 2.182 12 2.182S21.818 6.566 21.818 12 17.434 21.818 12 21.818z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 bg-white/10 hover:bg-primary/30 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 bg-white/10 hover:bg-primary/30 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-secondary-gray mb-4">
              {t('footer.navigation')}
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: t('nav.home') },
                { href: '/sucursales', label: t('nav.branches') },
                { href: '/nosotros', label: t('nav.about') },
                { href: '/catalogo', label: t('nav.catalog') },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href as '/'}
                    className="text-sm text-secondary-gray hover:text-primary transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-secondary-gray mb-4">
              {t('footer.legal')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/terminos-y-condiciones"
                  className="text-sm text-secondary-gray hover:text-primary transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidad"
                  className="text-sm text-secondary-gray hover:text-primary transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-devoluciones"
                  className="text-sm text-secondary-gray hover:text-primary transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  {t('footer.returns')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-secondary-gray mb-4">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3 text-sm text-secondary-gray">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  WhatsApp: Rodyna Farmacias
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer sanitario */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-xs text-secondary-gray/70 text-center leading-relaxed max-w-2xl mx-auto">
            {t('footer.disclaimer')}
          </p>
          <p className="text-xs text-secondary-gray/50 text-center mt-4">
            © {year} Rodyna Farmacias. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}

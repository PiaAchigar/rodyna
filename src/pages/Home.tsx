import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { branches } from '../lib/branches'
import pildora from '../assets/pildora.png'

const WHATSAPP_NUMBER = '+5491161333590' // TODO: reemplazar con número real

// Íconos inline para no depender de librería externa aún
function IconShield() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

function IconHeart() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

function IconTruck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m0 0h3l3 3v4h-3m-3 0H9m3 0a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

function IconLocation() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function IconClock() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full py-16 lg:py-28 bg-white overflow-hidden" aria-label="Hero">
        {/* fondo decorativo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-main-dark/5 blur-3xl" />
        </div>

        <div className="container-page relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="order-2 lg:order-1">
            {/* badge "próximamente" */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 uppercase tracking-wider">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              {t('hero.badge')}
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-main-dark leading-[1.1] mb-6 tracking-tight">
              {t('hero.title')}<br />
              <span className="text-primary">{t('hero.subtitle')}</span>
            </h1>

            <p className="text-lg text-secondary-gray mb-10 max-w-lg leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/catalogo"
                className="btn-primary text-base"
                aria-label={t('hero.ctaCatalog')}
              >
                {t('hero.ctaCatalog')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#25D366] text-[#128C7E] font-semibold rounded-xl hover:bg-[#25D366] hover:text-white transition-all active:scale-95 text-base"
                aria-label={`${t('hero.ctaWhatsapp')} (abre en nueva pestaña)`}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.399 5.61L0 24l6.545-1.38A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.367l-.36-.214-3.713.783.798-3.618-.235-.372A9.818 9.818 0 012.182 12C2.182 6.566 6.566 2.182 12 2.182S21.818 6.566 21.818 12 17.434 21.818 12 21.818z"/>
                </svg>
                {t('hero.ctaWhatsapp')}
              </a>
            </div>
          </div>

          {/* Imagen hero */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end" aria-hidden="true">
            <div className="relative">
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src={pildora}
                  alt="Productos farmacéuticos Rodyna"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* badge flotante */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <IconShield />
                </div>
                <div>
                  <p className="text-xs font-bold text-main-dark">Farmacia Habilitada</p>
                  <p className="text-xs text-secondary-gray">Ministerio de Salud</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOSOTROS / FEATURES ── */}
      <section id="nosotros" className="py-20 bg-slate-50" aria-labelledby="nosotros-title">
        <div className="container-page text-center">
          <h2 id="nosotros-title" className="section-title mb-4">{t('about.title')}</h2>
          <p className="text-secondary-gray max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('about.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <IconShield />, title: t('about.feature1Title'), desc: t('about.feature1Desc') },
              { icon: <IconHeart />,  title: t('about.feature2Title'), desc: t('about.feature2Desc') },
              { icon: <IconTruck />,  title: t('about.feature3Title'), desc: t('about.feature3Desc') },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-left">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5">
                  {f.icon}
                </div>
                <h3 className="font-bold text-main-dark text-lg mb-2">{f.title}</h3>
                <p className="text-secondary-gray text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUCURSALES TEASER ── */}
      <section id="sucursales" className="py-20 bg-white" aria-labelledby="sucursales-title">
        <div className="container-page">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div>
              <h2 id="sucursales-title" className="section-title">{t('branches.title')}</h2>
              <p className="text-secondary-gray mt-1 text-sm">{t('branches.subtitle')}</p>
            </div>
            <Link to="/sucursales" className="text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded flex items-center gap-1">
              {t('branches.seeAll')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((b) => (
              <article key={b.id} className="bg-white border border-secondary-gray/20 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-36 bg-main-dark/5 overflow-hidden">
                  <img
                    src={b.image}
                    alt={b.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-main-dark text-sm mb-2">{b.name}</h3>
                  <p className="flex items-start gap-1.5 text-xs text-secondary-gray mb-1">
                    <IconLocation />
                    <span>{b.address}, {b.city}</span>
                  </p>
                  <p className="flex items-center gap-1.5 text-xs text-secondary-gray mb-3">
                    <IconPhone />
                    <a href={`https://wa.me/${b.phone}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{b.phone}</a>
                  </p>
                  <a
                    href={b.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    {t('branches.seeMap')}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HORARIOS ── */}
      <section className="py-20 bg-main-dark text-white" aria-labelledby="horarios-title">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
          {/* Horarios */}
          <div>
            <h2 id="horarios-title" className="text-3xl font-bold mb-8">{t('schedule.title')}</h2>
            <div className="space-y-4">
              {branches.map((b) => (
                <div key={b.id} className="bg-white/5 rounded-xl p-5">
                  <p className="font-semibold text-primary mb-2">{b.name}</p>
                  <div className="space-y-1 text-sm text-secondary-gray">
                    <div className="flex items-center gap-2">
                      <IconClock />
                      <span>Lun–Vie: <span className="text-white">{b.hours.weekdays}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconClock />
                      <span>Sábado: <span className="text-white">{b.hours.saturday}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconClock />
                      <span>Domingo: <span className="text-white">{b.hours.sunday}</span></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mapa placeholder */}
          <div>
            <h3 className="text-2xl font-bold mb-3">{t('schedule.location')}</h3>
            <p className="text-secondary-gray mb-6 text-sm leading-relaxed">{t('schedule.locationDesc')}</p>
            {/* TODO: Reemplazar con Google Maps embed real */}
            <div className="w-full h-95 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
              <div className="text-center text-secondary-gray/50">
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.1153242042974!2d-58.56744168881245!3d-34.62652585859004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8063c4fc6e5%3A0x5efe3a5baabe88df!2sAv.%20Marcelo%20Torcuato%20de%20Alvear%204787%2C%20B1678%20Buenos%20Aires%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1773447341522!5m2!1ses!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-16 bg-primary/10" aria-label="Llamada a la acción">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-main-dark mb-4">¿Listo para comenzar?</h2>
          <p className="text-secondary-gray mb-8 max-w-md mx-auto">
            Muy pronto podrás hacer tus compras online. Mientras tanto, visitanos en nuestras sucursales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sucursales" className="btn-primary">
              Ver sucursales
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="Contactar por WhatsApp (abre en nueva pestaña)"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

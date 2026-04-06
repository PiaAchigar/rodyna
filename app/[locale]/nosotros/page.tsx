import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'

export const metadata: Metadata = {
  title: 'Nosotros — Quiénes somos',
  description:
    'Rodyna Farmacias, ex Farmacia Social Hunko. Al servicio de la salud en CABA y AMBA. Conocé nuestro equipo, historia y valores.',
  openGraph: {
    title: 'Nosotros | Rodyna Farmacias',
    description:
      'Más de 30 años al servicio de la salud en CABA y AMBA. Conocé nuestra historia, valores y el equipo detrás de Rodyna Farmacias.',
    url: 'https://www.rodynafarmacias.com.ar/nosotros',
  },
  alternates: {
    canonical: 'https://www.rodynafarmacias.com.ar/nosotros',
  },
}

// ── Datos estáticos ────────────────────────────────────────────────────────────

const valores = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Compromiso',
    desc: 'Dedicación total a las necesidades de cada paciente, priorizando su bienestar sobre todo.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Calidad',
    desc: 'Productos certificados y procesos de alta seguridad bajo normas del Ministerio de Salud.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Asesoría',
    desc: 'Atención personalizada por farmacéuticos expertos listos para orientarte en cada consulta.',
  },
]

const proposito = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Cercanía Humana',
    desc: 'Escuchamos con empatía para entender que detrás de cada receta hay una historia, una familia y un sueño de bienestar.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Excelencia Técnica',
    desc: 'Garantizamos precisión y conocimiento actualizado en cada entrega, actuando como guardianes de tu seguridad farmacológica.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Impacto Social',
    desc: 'Promovemos hábitos saludables preventivos y facilitamos el acceso a la salud en cada comunidad donde estamos presentes.',
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function NosotrosPage() {
  return (
    <>
      {/* ── HERO con imagen de fondo ── */}
      <section
        className="relative h-80 md:h-96 w-full flex items-end overflow-hidden"
        aria-labelledby="nosotros-hero-title"
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-main-dark/20 mix-blend-multiply z-0"
          aria-hidden="true"
        />
        {/* Imagen fondo */}
        <Image
          src="/assets/fondo_farmacia.png"
          alt="Fachada de Rodyna Farmacias"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="container-page relative z-20 pb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider mb-4">
            Nuestra Identidad
          </span>
          <h1
            id="nosotros-hero-title"
            className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter max-w-2xl"
          >
            Cuidando tu salud<br />desde el corazón
          </h1>
        </div>
      </section>

      {/* ── NUESTRA HISTORIA ── */}
      <section className="py-16 lg:py-24 bg-white" aria-labelledby="historia-title">
        <div className="container-page max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-primary text-xs font-bold uppercase tracking-widest">Nuestra Historia</p>
              <h2 id="historia-title" className="text-3xl font-bold text-main-dark leading-tight">
                Más que una farmacia,<br />somos una familia.
              </h2>
              <p className="text-secondary-gray leading-relaxed">
                En Rodyna Farmacias, nuestra trayectoria comenzó con una visión simple: humanizar la atención
                farmacéutica. Fundada bajo el compromiso de brindar no solo medicamentos, sino bienestar integral
                a nuestra comunidad, crecimos junto a las familias del barrio durante más de treinta años.
              </p>
              <p className="text-secondary-gray leading-relaxed">
                Hoy contamos con cuatro sucursales en Buenos Aires — Caseros, Liniers, Almagro y Palermo — cada
                una con el mismo espíritu de servicio cercano, profesional y humano que nos dio origen.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square shadow-2xl shadow-main-dark/10">
              <Image
                src="/assets/farmaceutica.png"
                alt="Farmacéuticos de Rodyna Farmacias atendiendo a un paciente"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── VALORES PROFESIONALES ── */}
      <section className="py-16 lg:py-20 bg-slate-50" aria-labelledby="valores-title">
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 id="valores-title" className="text-3xl font-bold text-main-dark mb-3">
              Nuestros Valores Profesionales
            </h2>
            <p className="text-secondary-gray max-w-xl mx-auto">
              Los pilares que sostienen nuestro compromiso con vos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {valores.map((v) => (
              <div
                key={v.title}
                className="bg-white p-8 rounded-2xl border border-main-dark/10 hover:shadow-xl hover:-translate-y-1 transition-all text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-main-dark mb-2">{v.title}</h3>
                <p className="text-secondary-gray text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROPÓSITO ── */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="proposito-title">
        <div className="container-page max-w-5xl">
          <div className="text-center mb-14 space-y-3">
            <h2 id="proposito-title" className="text-4xl font-black text-main-dark tracking-tight">
              Nuestro Propósito: Más Allá de los Medicamentos
            </h2>
            <p className="text-secondary-gray text-lg max-w-2xl mx-auto">
              Nuestra misión no es solo dispensar fármacos, sino ser el puente hacia una vida más plena,
              saludable y digna para cada vecino que cruza nuestras puertas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {proposito.map((p) => (
              <div
                key={p.title}
                className="group p-8 rounded-3xl bg-slate-50 border border-main-dark/5 transition-all hover:bg-white hover:shadow-2xl hover:shadow-main-dark/10 hover:border-main-dark/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-main-dark text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-main-dark/20">
                  {p.icon}
                </div>
                <h3 className="text-lg font-extrabold mb-3 text-primary">{p.title}</h3>
                <p className="text-secondary-gray leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link href="/catalogo" className="btn-primary text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              Explorar Catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA SUCURSALES ── */}
      <section className="py-14 bg-main-dark text-white" aria-label="Visitanos en nuestras sucursales">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold mb-3">¿Querés conocernos en persona?</h2>
          <p className="text-secondary-gray mb-8 max-w-md mx-auto">
            Visitá cualquiera de nuestras 4 sucursales en Buenos Aires. Nuestro equipo te espera.
          </p>
          <Link
            href="/sucursales"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Ver sucursales
          </Link>
        </div>
      </section>
    </>
  )
}

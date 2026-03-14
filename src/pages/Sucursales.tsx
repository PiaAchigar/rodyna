import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { branches, type Branch } from '../lib/branches'

function IconSm({ path }: { path: string | string[] }) {
  const paths = Array.isArray(path) ? path : [path]
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      {paths.map((d, i) => <path key={i} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />)}
    </svg>
  )
}

function BranchCard({ branch, onSelect, isSelected }: { branch: Branch; onSelect: () => void; isSelected: boolean }) {
  const { t } = useTranslation()
  return (
    <article
      className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer border-2 ${isSelected ? 'border-primary' : 'border-transparent'}`}
      onClick={onSelect}
      aria-current={isSelected ? 'true' : undefined}
    >
      {/* Franja de color superior con nombre — reemplaza la imagen placeholder */}
      <div className="h-2 bg-gradient-to-r from-main-dark to-primary" aria-hidden="true" />

      <div className="p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-bold text-main-dark">{branch.name}</h2>
            <span className="flex items-center gap-1 text-[10px] font-bold text-primary uppercase tracking-wide">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              Abierto
            </span>
          </div>

          <ul className="space-y-1.5 text-xs text-secondary-gray">
            <li className="flex items-start gap-1.5">
              <IconSm path={["M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z","M15 11a3 3 0 11-6 0 3 3 0 016 0z"]} />
              <span>{branch.address}, {branch.city}</span>
            </li>
            <li className="flex items-center gap-1.5">
              <IconSm path="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              <a
                href={`tel:${branch.phone.replace(/\s/g, '')}`}
                className="hover:text-primary transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {branch.phone}
              </a>
            </li>
            <li className="flex items-start gap-1.5">
              <IconSm path="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              <div>
                <p>Lun–Vie: {branch.hours.weekdays}</p>
                <p>Sáb: {branch.hours.saturday} · Dom: {branch.hours.sunday}</p>
              </div>
            </li>
          </ul>

          {/* Obras Sociales */}
          <div className="mt-3">
            <p className="text-[10px] font-bold text-main-dark uppercase tracking-wide mb-1.5">Obras sociales:</p>
            <div className="flex flex-wrap gap-1">
              {branch.healthInsurances.map((os) => (
                <span key={os} className="text-[10px] bg-primary/10 text-main-dark px-1.5 py-0.5 rounded-full font-medium">
                  {os}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-secondary-gray/10 flex gap-4">
          <a
            href={branch.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded flex items-center gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            {t('branches.seeMap')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href={`tel:${branch.phone.replace(/\s/g, '')}`}
            className="text-xs font-semibold text-secondary-gray hover:text-main-dark transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Llamar
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Sucursales() {
  const { t } = useTranslation()
  const [selectedBranch, setSelectedBranch] = useState<Branch>(branches[0])

  return (
    <>
      {/* Hero de página */}
      <section className="bg-main-dark text-white py-14" aria-labelledby="sucursales-page-title">
        <div className="container-page">
          <h1 id="sucursales-page-title" className="text-4xl font-black mb-2">{t('branches.title')}</h1>
          <p className="text-secondary-gray max-w-xl text-sm">{t('branches.subtitle')}</p>
        </div>
      </section>

      {/* Mapa Google Maps — cambia al seleccionar sucursal */}
      <section className="h-64 md:h-80 bg-slate-200" aria-label={`Mapa de ${selectedBranch.name}`}>
        <iframe
          key={selectedBranch.id}
          src={selectedBranch.mapEmbedSrc}
          title={`Ubicación ${selectedBranch.name}`}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>

      {/* Indicador de sucursal seleccionada */}
      <div className="bg-primary text-white text-center text-sm font-medium py-2">
        Mostrando mapa de: <strong>{selectedBranch.name}</strong> — hacé clic en otra sucursal para cambiar
      </div>

      {/* Cards de sucursales */}
      <section className="py-12 bg-slate-50" aria-label="Lista de sucursales">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {branches.map((b) => (
              <BranchCard
                key={b.id}
                branch={b}
                isSelected={selectedBranch.id === b.id}
                onSelect={() => setSelectedBranch(b)}
              />
            ))}
          </div>

          {/* Aviso obras sociales */}
          <div className="mt-10 bg-primary/10 border border-primary/20 rounded-2xl p-6 text-center">
            <h3 className="font-bold text-main-dark mb-2">Atendemos Obras Sociales</h3>
            <p className="text-sm text-secondary-gray">
              Consultá la lista de obras sociales disponible en cada sucursal. Las coberturas pueden variar según la ubicación.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

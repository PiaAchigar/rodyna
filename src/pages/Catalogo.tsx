import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { mockProducts, CATEGORIES, type Product } from '../lib/mockProducts'
import { formatPrice } from '../lib/currency'
import { useCurrencyStore } from '../store/useCurrencyStore'
import { useCartStore } from '../store/useCartStore'

const SORT_OPTIONS = [
  { value: 'relevance', label: 'Relevancia' },
  { value: 'price-asc', label: 'Precio: Menor a Mayor' },
  { value: 'price-desc', label: 'Precio: Mayor a Menor' },
]

const PAGE_SIZE = 8

function ProductCard({ product }: { product: Product }) {
  const currency = useCurrencyStore((s) => s.currency)
  const addItem = useCartStore((s) => s.addItem)
  const hasPromo = !!product.promoPrice
  const displayPrice = product.promoPrice ?? product.price

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <Link to={`/producto/${product.slug}`} className="block relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-t-2xl">
        {hasPromo && (
          <span className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {Math.round((1 - displayPrice / product.price) * 100)}% OFF
          </span>
        )}
        <div className="h-48 bg-slate-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="p-4">
        <p className="text-xs text-secondary-gray font-medium uppercase tracking-wide mb-0.5">{product.brand}</p>
        <Link
          to={`/producto/${product.slug}`}
          className="block text-sm font-semibold text-main-dark leading-snug mb-3 hover:text-primary transition-colors focus-visible:outline-none focus-visible:underline"
        >
          {product.name}
        </Link>

        <div className="flex items-center justify-between">
          <div>
            {hasPromo && (
              <p className="text-xs text-secondary-gray line-through">{formatPrice(product.price, currency)}</p>
            )}
            <p className="text-base font-black text-main-dark">{formatPrice(displayPrice, currency)}</p>
          </div>
          <button
            onClick={() => addItem({ id: product.id, slug: product.slug, name: product.name, price: displayPrice, image: product.image })}
            aria-label={`Agregar ${product.name} al carrito`}
            className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}

function EmptyState() {
  return (
    <div className="col-span-full py-20 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary-gray/30 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <p className="text-secondary-gray font-medium">No encontramos productos con esa búsqueda.</p>
      <p className="text-sm text-secondary-gray/60 mt-1">Probá con otros términos o eliminá los filtros.</p>
    </div>
  )
}

export default function Catalogo() {
  const { t } = useTranslation()
  const currency = useCurrencyStore((s) => s.currency)
  const toggleCurrency = useCurrencyStore((s) => s.toggle)

  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos')
  const [sort, setSort] = useState('relevance')
  const [page, setPage] = useState(1)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const filtered = useMemo(() => {
    let list = [...mockProducts]

    if (selectedCategory !== 'Todos') {
      list = list.filter((p) => p.category === selectedCategory)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.tags.some((t) => t.includes(q))
      )
    }
    if (sort === 'price-asc') list.sort((a, b) => (a.promoPrice ?? a.price) - (b.promoPrice ?? b.price))
    if (sort === 'price-desc') list.sort((a, b) => (b.promoPrice ?? b.price) - (a.promoPrice ?? a.price))

    return list
  }, [search, selectedCategory, sort])

  const paginated = filtered.slice(0, page * PAGE_SIZE)
  const hasMore = paginated.length < filtered.length

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat)
    setPage(1)
  }

  return (
    <>
      {/* Hero de página */}
      <section className="bg-white border-b border-secondary-gray/15 py-8" aria-labelledby="catalog-title">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="text-sm text-secondary-gray mb-3 flex items-center gap-2">
            <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span className="text-main-dark font-medium" aria-current="page">{t('nav.catalog')}</span>
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 id="catalog-title" className="text-4xl font-black text-main-dark">Farmacia y Bienestar</h1>
              <p className="text-secondary-gray mt-1">Encontrá los mejores productos para tu salud y cuidado personal.</p>
            </div>
            <div className="flex items-center gap-3">
              {/* Toggle moneda */}
              <button
                onClick={toggleCurrency}
                className="flex items-center gap-1.5 text-sm font-semibold text-secondary-gray border border-secondary-gray/30 px-3 py-1.5 rounded-full hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`Cambiar a ${currency === 'ARS' ? 'USD' : 'ARS'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {currency}
              </button>
              {/* Ordenar */}
              <select
                value={sort}
                onChange={(e) => { setSort(e.target.value); setPage(1) }}
                className="text-sm border border-secondary-gray/30 rounded-full px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary text-secondary-gray"
                aria-label="Ordenar productos"
              >
                {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías nav */}
      <nav className="bg-white border-b border-secondary-gray/15 sticky top-16 md:top-20 z-10 overflow-x-auto" aria-label="Categorías de productos">
        <div className="container-page flex items-center gap-6 py-3 min-w-max">
          {['Todos', ...CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              aria-pressed={selectedCategory === cat}
              className={`text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:underline pb-0.5 border-b-2 ${
                selectedCategory === cat
                  ? 'text-main-dark border-main-dark font-bold'
                  : 'text-secondary-gray border-transparent hover:text-main-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      <div className="container-page py-8">
        <div className="flex gap-8">
          {/* Sidebar filtros — desktop */}
          <aside className="hidden lg:block w-60 shrink-0" aria-label="Filtros">
            <h2 className="text-sm font-bold uppercase tracking-wider text-main-dark mb-5">Filtros</h2>

            {/* Búsqueda */}
            <div className="mb-6">
              <label htmlFor="search-sidebar" className="text-xs font-bold text-secondary-gray uppercase tracking-wide block mb-2">Buscar</label>
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-secondary-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  id="search-sidebar"
                  type="search"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setPage(1) }}
                  placeholder="Nombre, marca..."
                  className="w-full pl-9 pr-3 py-2 border border-secondary-gray/30 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Categorías */}
            <div>
              <p className="text-xs font-bold text-secondary-gray uppercase tracking-wide mb-3">Categorías</p>
              <ul className="space-y-1">
                {['Todos', ...CATEGORIES].map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryChange(cat)}
                      className={`w-full text-left text-sm px-3 py-2 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        selectedCategory === cat ? 'bg-primary/10 text-primary font-semibold' : 'text-secondary-gray hover:bg-slate-100'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Productos */}
          <div className="flex-1 min-w-0">
            {/* Barra mobile: búsqueda + filtro */}
            <div className="flex items-center gap-3 mb-5 lg:hidden">
              <div className="relative flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-secondary-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="search"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setPage(1) }}
                  placeholder={t('search')}
                  className="w-full pl-9 pr-3 py-2.5 border border-secondary-gray/30 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="flex items-center gap-1.5 border border-secondary-gray/30 px-3 py-2.5 rounded-xl text-sm font-medium text-secondary-gray hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filtrar
              </button>
            </div>

            {/* Contador resultados */}
            <p className="text-sm text-secondary-gray mb-4" aria-live="polite">
              <span className="font-semibold text-main-dark">{filtered.length}</span> productos encontrados
              {selectedCategory !== 'Todos' && <> en <span className="font-semibold">{selectedCategory}</span></>}
            </p>

            {/* Grid de productos */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4" role="list" aria-label="Productos">
              {filtered.length === 0 ? (
                <EmptyState />
              ) : (
                paginated.map((p) => (
                  <div key={p.id} role="listitem">
                    <ProductCard product={p} />
                  </div>
                ))
              )}
            </div>

            {/* Cargar más */}
            {hasMore && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setPage((n) => n + 1)}
                  className="border-2 border-main-dark text-main-dark font-bold px-10 py-3 rounded-xl hover:bg-main-dark hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Cargar más productos
                </button>
                <p className="text-xs text-secondary-gray mt-2">
                  Mostrando {paginated.length} de {filtered.length} productos
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

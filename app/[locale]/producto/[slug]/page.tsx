'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Link, useRouter } from '@/i18n/navigation'
import { mockProducts } from '@/lib/mockProducts'
import { formatPrice } from '@/lib/currency'
import { useCurrencyStore } from '@/store/useCurrencyStore'
import { useCartStore } from '@/store/useCartStore'

export default function ProductoPage() {
  const params = useParams()
  const slug = params.slug as string
  const router = useRouter()
  const currency = useCurrencyStore((s) => s.currency)
  const addItem = useCartStore((s) => s.addItem)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const product = mockProducts.find((p) => p.slug === slug)

  if (!product) {
    return (
      <div className="container-page py-20 text-center">
        <p className="text-2xl font-bold text-main-dark mb-4">
          Producto no encontrado
        </p>
        <Link href="/catalogo" className="btn-primary">
          Ver catálogo
        </Link>
      </div>
    )
  }

  const displayPrice = product.promoPrice ?? product.price
  const hasPromo = !!product.promoPrice

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addItem({
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: displayPrice,
        image: product.image,
      })
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="container-page py-10">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="text-sm text-secondary-gray mb-8 flex items-center gap-2 flex-wrap"
      >
        <Link href="/" className="hover:text-primary transition-colors">
          Inicio
        </Link>
        <span aria-hidden="true">/</span>
        <Link href="/catalogo" className="hover:text-primary transition-colors">
          Catálogo
        </Link>
        <span aria-hidden="true">/</span>
        <Link
          href={`/catalogo?cat=${product.category}`}
          className="hover:text-primary transition-colors"
        >
          {product.category}
        </Link>
        <span aria-hidden="true">/</span>
        <span
          className="text-main-dark font-medium truncate max-w-xs"
          aria-current="page"
        >
          {product.name}
        </span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Imagen */}
        <div className="relative">
          {hasPromo && (
            <span className="absolute top-4 left-4 z-10 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
              {Math.round((1 - displayPrice / product.price) * 100)}% OFF
            </span>
          )}
          <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div>
          <p className="text-sm font-semibold text-secondary-gray uppercase tracking-wide mb-1">
            {product.brand}
          </p>
          <h1 className="text-3xl font-black text-main-dark leading-tight mb-2">
            {product.name}
          </h1>
          <p className="text-sm text-secondary-gray mb-1">
            Categoría:{' '}
            <span className="font-medium text-main-dark">
              {product.category}
            </span>
          </p>

          {/* Precio */}
          <div className="my-6">
            {hasPromo && (
              <p className="text-lg text-secondary-gray line-through">
                {formatPrice(product.price, currency)}
              </p>
            )}
            <p className="text-4xl font-black text-main-dark">
              {formatPrice(displayPrice, currency)}
            </p>
            {hasPromo && (
              <p className="text-sm text-primary font-semibold mt-1">
                ¡Precio especial!
              </p>
            )}
          </div>

          {/* Descripción */}
          <p className="text-secondary-gray text-sm leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Stock */}
          <p
            className={`text-sm font-semibold mb-6 flex items-center gap-2 ${
              product.stock > 0 ? 'text-green-600' : 'text-red-500'
            }`}
          >
            <span
              className={`inline-block w-2 h-2 rounded-full ${
                product.stock > 0 ? 'bg-green-500' : 'bg-red-500'
              }`}
              aria-hidden="true"
            />
            {product.stock > 0
              ? `Stock disponible (${product.stock} unidades)`
              : 'Sin stock'}
          </p>

          {/* Cantidad */}
          <div className="flex items-center gap-4 mb-6">
            <label className="text-sm font-semibold text-main-dark">
              Cantidad:
            </label>
            <div className="flex items-center border border-secondary-gray/30 rounded-xl overflow-hidden">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-4 py-2 text-main-dark hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Reducir cantidad"
              >
                –
              </button>
              <span
                className="px-4 py-2 font-semibold text-main-dark min-w-[3rem] text-center"
                aria-live="polite"
                aria-atomic="true"
              >
                {qty}
              </span>
              <button
                onClick={() =>
                  setQty((q) => Math.min(product.stock, q + 1))
                }
                className="px-4 py-2 text-main-dark hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Aumentar cantidad"
              >
                +
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="flex-1 bg-primary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {added ? (
                <>
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  ¡Agregado!
                </>
              ) : (
                <>
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Agregar al carrito
                </>
              )}
            </button>
            <button
              onClick={() => {
                handleAddToCart()
                router.push('/checkout')
              }}
              disabled={product.stock === 0}
              className="flex-1 bg-main-dark text-white font-bold py-4 rounded-xl hover:bg-main-dark/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Comprar ahora
            </button>
          </div>

          {/* Disclaimer sanitario */}
          <div className="mt-6 p-4 bg-slate-50 rounded-xl text-xs text-secondary-gray leading-relaxed">
            <strong className="text-main-dark block mb-1">Aviso sanitario</strong>
            Venta responsable. Leé siempre el prospecto. Ante cualquier duda
            consultá a tu médico o farmacéutico.
          </div>
        </div>
      </div>

      {/* Productos relacionados */}
      <section className="mt-16" aria-labelledby="related-title">
        <h2 id="related-title" className="section-title mb-6">
          Productos relacionados
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mockProducts
            .filter(
              (p) => p.id !== product.id && p.category === product.category
            )
            .slice(0, 4)
            .map((p) => (
              <Link
                key={p.id}
                href={`/producto/${p.slug}`}
                className="bg-white rounded-xl overflow-hidden border border-secondary-gray/15 hover:shadow-md transition-shadow group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="h-36 bg-slate-100 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs text-secondary-gray">{p.brand}</p>
                  <p className="text-sm font-semibold text-main-dark leading-snug mt-0.5 line-clamp-2">
                    {p.name}
                  </p>
                  <p className="text-sm font-black text-primary mt-1">
                    {formatPrice(p.promoPrice ?? p.price, currency)}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  )
}

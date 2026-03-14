const USD_RATE = Number(import.meta.env.VITE_USD_RATE) || 1100

export function formatPrice(arsPrice: number, currency: 'ARS' | 'USD'): string {
  if (currency === 'USD') {
    const usd = arsPrice / USD_RATE
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(usd)
  }
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(arsPrice)
}

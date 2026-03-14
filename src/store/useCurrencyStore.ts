import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Currency = 'ARS' | 'USD'

interface CurrencyState {
  currency: Currency
  toggle: () => void
}

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set, get) => ({
      currency: (import.meta.env.VITE_DEFAULT_CURRENCY as Currency) || 'ARS',
      toggle: () => set({ currency: get().currency === 'ARS' ? 'USD' : 'ARS' }),
    }),
    { name: 'rodyna-currency' }
  )
)

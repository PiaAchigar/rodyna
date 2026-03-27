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
      currency: ((process.env.NEXT_PUBLIC_DEFAULT_CURRENCY as Currency) || 'ARS') as Currency,
      toggle: () => set({ currency: get().currency === 'ARS' ? 'USD' : 'ARS' }),
    }),
    { name: 'rodyna-currency' }
  )
)

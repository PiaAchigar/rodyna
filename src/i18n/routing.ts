import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  // 'as-needed' = español sin prefijo (/), inglés con prefijo (/en/...)
  localePrefix: 'as-needed',
})

export type Locale = (typeof routing.locales)[number]

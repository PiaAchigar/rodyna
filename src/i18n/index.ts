import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './es.json'
import en from './en.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    lng: import.meta.env.VITE_DEFAULT_LOCALE || 'es',
    fallbackLng: import.meta.env.VITE_FALLBACK_LOCALE || 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n

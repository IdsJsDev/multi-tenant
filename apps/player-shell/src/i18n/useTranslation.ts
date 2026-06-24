import { useTenant } from '@/context/TenantContext'
import { en } from './en'
import { de } from './de'
import { uk } from './uk'

const translations = { en, de, uk }

type Lang = keyof typeof translations

function getLang(locale: string): Lang {
  const lang = locale.split('-')[0] as Lang
  return lang in translations ? lang : 'en'
}

export function useTranslation() {
  const { locale } = useTenant()
  return translations[getLang(locale)]
}

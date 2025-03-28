import { createI18n } from 'vue-i18n'
import { messages } from './translations'

/**
 * Get the user's preferred language from browser settings
 * @returns {string} The primary language code (e.g., 'en', 'es')
 */
export const getBrowserLanguage = () => {
  try {
    return navigator.language.split('-')[0]
  } catch (error) {
    console.warn('Failed to get browser language:', error)
    return 'en'
  }
}

/**
 * Determine the default language based on browser settings and available languages
 * @returns {string} The selected language code
 */
export const getDefaultLanguage = () => {
  const browserLanguage = getBrowserLanguage()
  const availableLanguages = ['en', 'es']
  return availableLanguages.includes(browserLanguage) ? browserLanguage : 'en'
}

/**
 * Initialize i18n with error handling
 * @returns {import('vue-i18n').I18n} The configured i18n instance
 */
export const initializeI18n = () => {
  try {
    return createI18n({
      globalInjection: true,
      legacy: false, // Enable Composition API mode
      locale: getDefaultLanguage(),
      fallbackLocale: 'en',
      warnHtmlMessage: false,
      warnHtmlInMessage: "off",
      messages
    })
  } catch (error) {
    console.error('Failed to initialize i18n:', error)
    throw error
  }
} 
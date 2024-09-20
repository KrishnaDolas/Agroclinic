import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import en from './en.json'; // English translations
import mr from './mr.json'; // Marathi translations

// Get the user's device language
const locales = RNLocalize.getLocales();

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: { translation: en },
    mr: { translation: mr },
  },
  lng: locales[0]?.languageTag || 'en', // Use the first locale or fallback to English
  fallbackLng: 'en', // Fallback to English if the language isn't available
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;

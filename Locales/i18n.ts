import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json'; // Import the English translations
import mr from './mr.json'; // Import the Marathi translations

// Define your language resources
const resources = {
  en: { translation: en },
  mr: { translation: mr },
};

i18next
  .use(initReactI18next)
  .init({
    debug: false, // Turn on for development debugging
    lng: 'en', // Default language set to English
    fallbackLng: 'en', // Fallback to English if Marathi translation is unavailable
    compatibilityJSON: 'v3', // For compatibility issues with JSON structure
    resources, // Add language resources
    interpolation: {
      escapeValue: false, // React already handles escaping values
    },
  });

export default i18next;

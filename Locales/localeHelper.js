import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import en from './locales/en.json';
import mr from './locales/mr.json';

i18n.fallbacks = true;
i18n.translations = { en, mr };
i18n.locale = Localization.locale;

export const setLanguage = (lang) => {
  i18n.locale = lang;
};

export default i18n;

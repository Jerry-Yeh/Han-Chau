import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import zh_tw from './locales/zh_TW.json';

const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh_tw,
  },
};

i18n.use(initReactI18next).init({
  resources, // Translate resource
  fallbackLng: 'en', // Use this language if the page doesn't have a corresponding translation.
  lng: 'zh', // Default language
  interpolation: {
    // Let the word 'escaped' prevent XSS attacks or not.
    // Because React does that, so you can just set false.
    escapeValue: false,
  },
});

export default i18n;

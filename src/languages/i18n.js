// src/i18n/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import your translation files
import en from "../languages/en.json";
import mh from "../languages/mh.json";
import kn from "../languages/kn.json";
import hi from "../languages/hi.json";

// i18n Configuration
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    mh: { translation: mh },
    kn: { translation: kn },
    hi: { translation: hi },
  },
  lng: "mh", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;

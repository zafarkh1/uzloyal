import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";

import uzTranslation from "./components/utils/locales/uz.json";
import ruTranslation from "./components/utils/locales/ru.json";
import enTranslation from "./components/utils/locales/en.json";
import trTranslation from "./components/utils/locales/tr.json";
import cnTranslation from "./components/utils/locales/cn.json";

const lang = localStorage.getItem("i18nextLng") || "en";

i18n
  .use(Backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: lang,
    debug: true,
    resources: {
      uz: { translation: uzTranslation },
      ru: { translation: ruTranslation },
      en: { translation: enTranslation },
      tr: { translation: trTranslation },
      cn: { translation: cnTranslation },
    },
  });

export default i18n;

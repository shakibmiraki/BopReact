import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

//translate json files
import ar from "./locales/ar/translation.json";
import az from "./locales/az/translation.json";
import de from "./locales/de/translation.json";
import en from "./locales/en/translation.json";
import fa from "./locales/fa/translation.json";
import ku from "./locales/ku/translation.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: false,
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ar: { translations: ar },
      az: { translations: az },
      de: { translations: de },
      en: { translations: en },
      fa: { translations: fa },
      ku: { translations: ku },
    },
    detection: {
      lookupLocalStorage: "i18nextLng",
      order: ["localStorage"],
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;

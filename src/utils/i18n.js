import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Welcome: "Welcome to React and react-i18next",
      Send: "Send",
    },
  },
  ko: {
    translation: {
      Welcome: "React와 react-i18next에 오신 것을 환영합니다",
      Send: "보내기",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

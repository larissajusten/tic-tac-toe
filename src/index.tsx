import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import { i18nConfig } from "./i18n";
import translations from './i18n/locales/index'

const language = navigator.language.split(/[-_]/)[0];

const messages: any = {
  'pt': translations.pt,
  'en': translations.en,
 };

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <IntlProvider
      locale={language}
      defaultLocale={i18nConfig.defaultNS}
      messages={messages[language]}
    >
      <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

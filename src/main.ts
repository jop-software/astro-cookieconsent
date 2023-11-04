/// <reference path="vanilla-cookieconsent.d.ts" />

import * as CookieConsent from 'vanilla-cookieconsent';

const createPlugin = (config: UserConfig) => {
  return {
    name: "@jop-software/astro-cookieconsent",
    hooks: {
      "astro:config:setup": async ({ injectScript }: any) => {
        injectScript(
          "page",
          "import 'vanilla-cookieconsent';"
        );
        injectScript(
          "page-ssr",
          "import 'vanilla-cookieconsent/dist/cookieconsent.css';"
        );
        injectScript(
          "page",
          `window.cookieConsentConfiguration = ${JSON.stringify(config)}`
        );
        injectScript("page", `window.cookieConsent = initCookieConsent();`);
        injectScript(
          "page",
          `window.cookieConsent.run(window.cookieConsentConfiguration);`
        );
      },
    },
  };
};

export type { CookieConsent };

export default createPlugin;

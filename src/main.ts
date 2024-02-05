import { type AstroIntegration } from "astro";
import { type CookieConsentConfig } from "vanilla-cookieconsent";

const createPlugin = (config: CookieConsentConfig): AstroIntegration => {
  return {
    name: "@jop-software/astro-cookieconsent",
    hooks: {
      "astro:config:setup": async ({ injectScript }) => {
        injectScript(
          "page",
          "import * as cookieConsent from 'vanilla-cookieconsent';"
        );
        injectScript(
          "page-ssr",
          "import 'vanilla-cookieconsent/dist/cookieconsent.css';"
        );
        injectScript("page", `cookieConsent.run(${JSON.stringify(config)});`);
      },
    },
  };
};

export type { CookieConsentConfig };

export default createPlugin;

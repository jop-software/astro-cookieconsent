import * as CookieConsent from "vanilla-cookieconsent";

const createPlugin = (config: UserConfig) => {
	return {
		name: "@jop-software/astro-cookie-consent",
		hooks: {
			"astro:config:setup": async ({ injectScript }: any) => {
				injectScript("page", "import 'vanilla-cookieconsent'; import 'vanilla-cookieconsent/dist/cookieconsent.css';");
                injectScript("page", `window.cookieConentConfiguration = ${JSON.stringify(config)}`);
				injectScript("page", `window.cookieConent = initCookieConsent();`)
				injectScript("page", `window.cookieConent.run(window.cookieConentConfiguration);`)
			},
		},
	};
};

export type { CookieConsent };

export default createPlugin;

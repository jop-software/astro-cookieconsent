# 3.0.0

> [!WARNING]  
> This Update includes breaking changes. Please read the changelogs to see what you might need to change.

**Breaking Changes**

- Upgrade `vanilla-cookieconsent` to version 3.0.0  
  See [their changelog](https://github.com/orestbida/cookieconsent/releases?q=cookieconsent+v3) for more information.

# 2.0.0

> [!WARNING]  
> This Update includes breaking changes. Please read the changelogs to see what you might need to change.

**Breaking Changes**

- Renamed variable `window.cookieConent` to `window.cookieConsent`
- Renamed variable `window.cookieConentConfiguration` to `window.cookieConsentConfiguration`
- Renamed the itegration from `@jop-software/astro-cookie-consent` to `@jop-software/astro-cookieconsent`

When you interact with the cookie consent directly, for e.G. a "Open Cookie Consent" button, you need to change the variable name from `window.cookieConent` to `window.cookieConsent`.

**Bugfixes**

- The CSS now is imported automatically by the package. You don't need to import it manually anymore.

**Other Changes**

- Migrated vite configuation to TypeScript

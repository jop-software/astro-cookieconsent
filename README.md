<div align="center">
    <h1>vanilla-cookieconsent + Astro Integration</h1>
</div>

> Use [vanilla-cookieconsent](https://github.com/orestbida/cookieconsent) natively in Astro 🍪

## Installation

### Installation using the Astro CLI

Using the Astro CLI is the [recommended way](https://docs.astro.build/en/guides/integrations-guide/#automatic-integration-setup) to setup integrations in Astro.

```console
# npm
npx astro add @jop-software/astro-cookieconsent

# pnpm
pnpm astro add @jop-software/astro-cookieconsent
```

### Manual Installation

When the automatic setup from Astro is not an option for you, feel free to install the package manually.

```console
# npm
npm install @jop-software/astro-cookieconsent

# pnpm
pnpm add @jop-software/astro-cookieconsent
```

Make sure that either your package manager installs peer dependencies or to manually install the [`vanilla-cookieconsent`](https://www.npmjs.com/package/vanilla-cookieconsent) package.

## Usage

> [!NOTE]  
> This is an example configuration, passing JavaScript callbacks here is currently not supported.

```javascript
// astro.config.mjs

import jopSoftwarecookieconsent from '@jop-software/astro-cookieconsent';

export default defineConfig({
    // ...
    integrations: [
        // ...
        jopSoftwarecookieconsent({
            // ...
            guiOptions: {
                consentModal: {
                    layout: 'box',
                    position: 'bottom left',
                    equalWeightButtons: true,
                    flipButtons: false,
                },
                preferencesModal: {
                    layout: 'box',
                    position: 'right',
                    equalWeightButtons: true,
                    flipButtons: false,
                },
            },            
            categories: { // Required, at least one category is required
                necessary: {
                enabled: true, // this category is enabled by default
                readOnly: true, // this category cannot be disabled
                },
                preferences: {
                enabled: true, // this category is enabled by default
                },
                statistics: {
                enabled: true,
                },
                marketing: {
                enabled: true,
                },
            },            
            language: { // Required, at least one language is required
                default: 'en',
                translations: { // This is a template content
                    en: {
                        consentModal: {
                            title: 'This website uses cookies',
                            description: 'We use cookies to ...',
                            acceptAllBtn: 'Allow all',
                            acceptNecessaryBtn: 'Deny',
                            showPreferencesBtn: 'Allow selection',
                        },
                        preferencesModal: {
                            title: 'Manage cookie preferences',
                            acceptAllBtn: 'Allow all',
                            acceptNecessaryBtn: 'Deny all',
                            savePreferencesBtn: 'Allow selection',
                            closeIconLabel: 'Close cokkie preferences',
                            sections: [
                                {
                                title: 'This website uses cookies',
                                description:'We use cookies to ...',
                                },
                                {
                                title: 'Necessary',
                                description: 'Necessary cookies ...',
                                linkedCategory: 'necessary',
                                },
                                {
                                title: 'Preferences',
                                description: 'Preference cookies ...',
                                linkedCategory: 'preferences',
                                },
                                {
                                title: 'Statistics',
                                description: 'Statistic cookies ...',
                                linkedCategory: 'statistics',
                                },
                                {
                                title: 'Marketing',
                                description: 'Marketing cookies ...',
                                linkedCategory: 'marketing',
                                },                            
                                {
                                title: 'More information',
                                description: `Cookies are ...`,
                                },
                            ],
                        },
                    },
                },
            },
            // ...
        }),
    ],
});
```

When you call the integration, you can use the same configuration as you can in the [vanilla-cookieconsent](https://github.com/orestbida/cookieconsent) package. 
Check their [Readme](https://github.com/orestbida/cookieconsent/blob/master/Readme.md) for more information and documentation.

## Versions

| Version | State | `vanilla-cookieconsent` Version |
| --- | --- | --- |
| `3.x` | ![Unsupported](https://img.shields.io/badge/active_support-green?style=for-the-badge) | `3.x` |
| `2.x` | ![Unsupported](https://img.shields.io/badge/security_and_enterprise-orange?style=for-the-badge) | `2.x` |
| `1.x` | ![Unsupported](https://img.shields.io/badge/unsupported-red?style=for-the-badge) | `2.x` |


## Professional support

Professional support is available. Please contact [support@jop-software.de](mailto:support@jop-software.de) for more information.

<div align=center>&copy 2023, <a href="https://jop-software.de">jop-software Inh. Johannes Przymusinski</a></div>

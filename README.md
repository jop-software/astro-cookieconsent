<div align="center">
    <h1>vanilla-cookieconent + Astro Integration</h1>
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

```javascript
// astro.config.mjs

import cookieconsent from "@jop-software/astro-cookieconsent";

export default defineConfig({
    // ...
    integrations: [
        // ...
        cookieconsent({
            // ...
            gui_options: {
                consent_modal: {
                    layout: 'cloud',               // box/cloud/bar
                    position: 'bottom center',     // bottom/middle/top + left/right/center
                    transition: 'slide',           // zoom/slide
                    swap_buttons: false            // enable to invert buttons
                },
                settings_modal: {
                    layout: 'box',                 // box/bar
                    // position: 'left',           // left/right
                    transition: 'slide'            // zoom/slide
                }
            }
            // ...
        }),
    ],
});
```

When you call the integration, you can use the same configuration as you can in the [vanilla-cookieconsent](https://github.com/orestbida/cookieconsent) package. 
Check their [Readme](https://github.com/orestbida/cookieconsent/blob/master/Readme.md) for more information and documentation.

## Professional support

Professional support is available. Please contact [support@jop-software.de](mailto:support@jop-software.de) for more information.

<div align=center>&copy 2023, <a href="https://jop-software.de">jop-software Inh. Johannes Przymusinski</a></div>

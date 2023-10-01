// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'AstroCookieconsent',
      // the proper extensions will be added
      fileName: (format) => `astro-cookieconsent.${format}.js`,

    },
  },
})

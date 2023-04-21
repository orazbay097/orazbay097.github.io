import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  srcDir: 'src',
  css: [
    resolve('./src/assets/style/main.scss')
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
              @import '${resolve('./src/assets/style/partials')}';
            `
        }
      }
    }
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap' }
      ]
    }
  }
})

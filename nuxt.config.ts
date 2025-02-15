// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify']
  },
  modules: ['@nuxtjs/i18n',(_options, nuxt) => {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error
      config.plugins.push(vuetify({ autoImport: true }))
    })
  }],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      }
    }
  },
  routeRules: {
    '/login': { ssr: false },
    '/signup': { ssr: false },
    '/order/**': { ssr: false },
    '/account/**': { ssr: false },
    '/listing/**': { ssr: true },
    '/profile/**': { ssr: true },
    '/api/**': { cors: true }
  },
  i18n: {
    locales: ['en','es'],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts'
  },
  runtimeConfig: {
    DB_USER: '',
    DB_PASSWORD: ''
  }
})

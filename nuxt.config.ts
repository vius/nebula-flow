// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    'shadcn-nuxt',
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  ui: {
    fonts: false,
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})
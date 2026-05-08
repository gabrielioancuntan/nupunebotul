// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      formspreeEndpoint: process.env.NUXT_PUBLIC_FORMSPREE_ENDPOINT || ''
    }
  },
  app: {
    head: {
      script: [
        {
          src: '/_vercel/insights/script.js',
          defer: true
        }
      ]
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css'
  },
  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit']
    }
  }
})

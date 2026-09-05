export default defineNuxtConfig({
  compatibilityDate: '2026-09-05',
  devtools: { enabled: false },
  nitro: {
    preset: 'cloudflare_module',
  },
  app: {
    head: {
      title: 'tsui.moe',
      htmlAttrs: { lang: 'en' },
      meta: [{ name: 'description', content: 'the personal space of tsui.moe. projects, writing, collections, artifacts, and archives.' }],
      link: [{ rel: 'preload', href: '/fonts/instrument-sans-regular.ttf', as: 'font', type: 'font/ttf', crossorigin: '' }],
    },
  },
})

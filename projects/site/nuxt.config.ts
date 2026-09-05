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
      meta: [{ name: 'description', content: 'tsui.moe — coming soon.' }],
    },
  },
})

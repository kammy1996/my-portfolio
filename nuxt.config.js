import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  vite: {
    plugins: [tailwindcss()],
  },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/scss/main.scss',
  ],

  modules: [
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxtjs/sanity',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  components: true,

  sanity: {
    projectId: '3ze9usig',
    apiVersion: '2021-10-21',
    dataset: 'production',
    useCdn: true,
  },

  sitemap: {
    hostname: 'https://codewithkamran.com',
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
  },

  app: {
    head: {
      title: 'Kamran Memon | Portfolio',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
        { name: 'description', content: 'I am Kamran Memon, A Fullstack Web Developer and a Tech Enthusiast who is addicted to Learning and loves Javascript, My Tech Stack- Vue.js | Nuxt.js | Node.js' },
        { name: 'author', content: 'Kamran Memon' },
        { name: 'keywords', content: 'Kamran Memon' },
        { name: 'google-site-verification', content: 'FPy1ivfWZ7tTV3Sti2p1kwBWTBKU3KIffrDbGVGODrE' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Kamran Memon | Portfolio' },
        { property: 'og:description', content: 'I am Kamran Memon, A Fullstack Web Developer and a Tech Enthusiast who is addicted to Learning and loves Javascript, My Tech Stack- Vue.js | Nuxt.js | Node.js' },
        { property: 'og:image', content: 'https://codewithkamran.com/assets/card-image.png' },
        { property: 'og:url', content: 'https://codewithkamran.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap' },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
})

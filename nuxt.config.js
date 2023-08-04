import axios from 'axios';
export default {
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Kamran Memon | Portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "I am Kamran Memon, A Fullstack Web Developer and a Tech Enthusiast who is addicted to Learning and loves Javascript, My Tech Stack- Vue.js | Nuxt.js | Node.js",
      },
      { 
        hid:'author',
        name:'author',
        content:'Kamran Memon'
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "Kamran Memon",
      },

      //Open Graph
      { hid: "og-type", property: "og:type", content: "website" },
      {
        hid: "og-title",
        property: "og:title",
        content: "Kamran Memon | Portfolio",
      },
      {
        hid: "og-desc",
        property: "og:description",
        content:
          "I am Kamran Memon, A Fullstack Web Developer and a Tech Enthusiast who is addicted to Learning and loves Javascript, My Tech Stack- Vue.js | Nuxt.js | Node.js",
      },
      {
        hid: "og-image",
        property: "og:image",
        content: "https://codewithkamran.com/assets/card-image.png",
      },
      { hid: "og-url", property: "og:url", content: "https://codewithkamran.com" },

      //Twitter
      { hid: "t-type", name: "twitter:card", content: "summary_large_image" },


      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "google-site-verification",
        content: "FPy1ivfWZ7tTV3Sti2p1kwBWTBKU3KIffrDbGVGODrE",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/static/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/sanity/module",
    "@nuxtjs/fontawesome",
    [
      // Simple usage
      "@nuxtjs/vuetify",

      // With options
      [
        "@nuxtjs/vuetify",
        {
          /* module options */
        },
      ],
    ],
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  generate: {
    routes() {
      return axios.get('https://3ze9usig.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22blogsList%22%5D').then(res => {
        return res.data.result.map(blog => {
          return '/blog/' + blog.slug.current
        })
      })
    },
    fallback: true
  },

  sanity: {
    projectId: "3ze9usig",
    apiVersion: "2021-10-21",
  },

  axios: {
    baseURL:
      "https://626cdf84459f1a418c99312c--dapper-gelato-89bc3d.netlify.app",
  },

  sitemap: {
    hostname: "https://codewithkamran.com",
  },

  robots: {
    UserAgent: '*',
    Disallow: ''
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/sitemap",
    '@nuxtjs/robots',
    "@nuxtjs/axios",
    [
      "nuxt-mail",
      {
        message: {
          to: "kamranmemon25@gmail.com",
        },
        smtp: {
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: "memonkamran25@gmail.com",
            pass: "Kam_mo@786",
          },
        },
      },
    ],
    [
      "nuxt-highlightjs",
      {
        style: "obsidian",
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: "src",
        },
      },
      sass: {
        implementation: require("sass"),
      },
      scss: {
        implementation: require("sass"),
      },
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      });
    },
  },
};

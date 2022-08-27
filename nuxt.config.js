export default {
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "my-portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
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
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/sitemap",
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

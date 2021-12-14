export default {
  generate: {
    fallback: true,
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Oakhill Asset Management",
    titleTemplate: "Oakhill Asset Management - %s",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon-oakhill.ico" },

      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
      },
    ],

    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript",
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript",
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript",
      },
      {
        src: "/libs/cinchy.js",
        type: "text/javascript",
      },
      {
        src: "/libs/cinchy-helper.js",
        type: "text/javascript",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "assets/css/dashforge.css",
    "assets/scss/style.scss",
    "assets/css/main.css",
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/vue-awesome-swiper.js",
    "~/plugins/silentbox.js",
    "~/plugins/vue2-google-maps.js",
    "~/plugins/vuejs-paginate.js",
    "~/plugins/vue-select.js",
    "~/plugins/vue-schema-form.js",
    {
      src: "~/plugins/aos",
      ssr: false,
    },
    {
      src: "~/plugins/typed.js",
      ssr: true,
    },
    {
      src: "~plugins/vue-backtotop.js",
      ssr: false,
    },
    {
      src: "~plugins/service.js",
      ssr: false,
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: {
    dirs: [
      "~/components",
      "~/components/home",
      "~/components/products",
      "~/components/managers",
      "~/components/common",
      "~/components/headers",
      "~/components/cinchy",
      "~/components/subscription",
    ],
  },
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/style-resources",
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    // 'jquery',
  ],

  axios: {
    proxy: true, // Can be also an object with default options
  },

  styleResources: {
    scss: ["~/assets/scss/_variables.scss"],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {},

    transpile: [/^vue2-google-maps($|\/)/],
  },
  server: {
    host: "0",
  },

  ssr: false,

  target: 'static',

  router: {
    base: '/oakhill-web/'
  }
};

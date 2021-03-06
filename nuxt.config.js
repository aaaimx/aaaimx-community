
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'AAAIMX Community',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Contributing to more students having knowledge of Artificial Intelligence and other increasingly popular related fields'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://www.aaaimx.org/img/favicons/favicon.ico'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      }
    ]
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  ssr: false,
  telemetry: false,

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // '~/plugins/axios'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/dotenv'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha'
  ],

  recaptcha: {
    hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
    language: 'es', // Recaptcha language (v2)
    siteKey:
      process.env.NODE_ENV === 'development'
        ? process.env.RECAPTCHA_SITE_KEY_TEST
        : process.env.RECAPTCHA_SITE_KEY, // Site key for requests
    version: 'v2', // Version
    size: 'invisible' // Size: 'compact', 'normal', 'invisible' (v2)
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8000/api'
        : process.env.API_BASE_URL,
    credentials: false
  },

  target: 'static',
  router: {
    base: '/community/'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // publicPath: '/aaaimx-community/'
  }
}

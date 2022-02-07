export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // server: {
  //   host: '192.168.1.11'
  // },

  router: {
    linkExactActiveClass: 'text-white bg-sky-500 sm:text-sky-500 sm:bg-transparent'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Daniel Martínez | Full-Stack Developer',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    //https://image.nuxtjs.org/components/nuxt-img
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/robots',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  robots: {
    UserAgent: '*',
    Disallow: '/',
    // Allow: '/'
  }
}

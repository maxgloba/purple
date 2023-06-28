export default {
  ssr: false,
  head: {
    title: 'Purple website',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0'},
      {hid: 'description', name: 'description', content: 'Purple website'},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [],
    script: [],
  },
  css: [
    '@/assets/scss/style.scss'
  ],
  components: true,
  router: {
    base: '/purple/',
    mode: 'history',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'error',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue'),
      })
    },
  },
  modules: [
    '@nuxtjs/style-resources',
  ],
  generate: {
    dir: './dist'
  },
  build: {
    target: 'static'
  },
  server: {
    port: 9003,
    host: 'localhost'
  },
}

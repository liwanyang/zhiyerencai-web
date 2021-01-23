const webpack = require('webpack')
const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '竹子阅读-专注2~12岁儿童中文分级阅读',
    meta: [
      { charset: 'utf-8' },
      { name: "viewport", content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" },
      { name: 'keywords', content: '竹子阅读,bamboo reading,儿童中文分级阅读,绘本,图书,汉字,古诗,诗词,教育,自主阅读,语文,启蒙' },
      { hid: 'description', name: 'description', content: '竹子阅读是分阅稚学科技发展（上海）有限公司推出的产品，为2-12岁儿童提供中文分级阅读内容和分级标准。其构建了一套中文阅读分级标准及阅读能力评测体系，并由内容团队精心打造原创读本。目前已有20+类目、5000+本分级读本。竹子阅读让你的孩子读对、读好，在阅读中建构精神世界，读着读着就能得到多元智能的全面提升。' }
    ],

    script: [
      { src: 'https://at.alicdn.com/t/font_1393507_d8qr7rfrn2w.js' },
      { src: 'js/jquery.js' },
      { src: 'js/jquery.bigcolorpicker.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }
    ]
  },
  css: [
    '~assets/main.css',
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    { src: '~assets/stylus/app.styl', lang: 'stylus' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    analyze: {
      analyzerMode: 'static'
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.resolve.alias['~/utils'] = path.join(__dirname, 'utils'),
        config.resolve.alias['~/constant'] = path.join(__dirname, 'constant')
    },
    // 自定义 webpack 加载器
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000, // 10kb
          name: 'img/[name].[hash].[ext]'
        }
      }
    ],
    // 自定义 postcss 配置
    postcss: [
      require('postcss-nested')(),
      require('postcss-responsive-type')(),
      require('postcss-hexrgba')(),
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ],
    vendor: [
      'axios',
      '~/plugins/acre.js',
      '~/plugins/http.js',
      '~/plugins/mixins.js',
      '~/plugins/vue-i18n.js',
    ]
  },
  // 全局中间件设置
  router: {
    middleware: 'i18n',
    middleware: 'listen-route',
    middleware: 'auth',
  },
  /*代理IP的使用*/
  modules: [
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': {
      target: 'https://api.bambooreading.com/v1/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
  plugins: [
    '~/plugins/acre.js',
    '~/plugins/http.js',
    '~/plugins/mixins.js',
    '~/plugins/vue-i18n.js',
    {src:'~/plugins/store-cache',ssr:false}
  ]
}

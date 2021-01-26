const webpack = require('webpack')
const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '志业人才提供蓝领招聘、企业用工、职业教育、灵活用工、企业成本优化、人力外包等服务',
    meta: [
      { charset: 'utf-8' },
      { name: "viewport", content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" },
      { name: 'keywords', content: '志业人才，职业蛙' },
      { hid: 'description', name: 'description', content: '志业人才，蓝领人力资源服务定制领跑者。公司致力于打造世界领先的产、教、研融合的人才生涯服务，累计帮助百万人入职2700余家中大型企业的心仪岗位，定制化深度解决全国企业的新生代蓝领用工痛点。与全国超50所中高职院校联合建立实训学院，聚焦现代服务业、制造业服务外包、人才招聘与派遣、中高端灵活用工、残疾人就业安置、财税筹划管理咨询等服务。' }
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

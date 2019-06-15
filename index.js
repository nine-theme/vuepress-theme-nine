const path = require('path')

// Theme API.
module.exports = (themeConfig, ctx) => ({
  enhanceAppFiles: resolve(__dirname, 'enhanceApp.js'),
  alias () {
    // const { themeConfig, siteConfig } = ctx
    // // resolve algolia
    // const isAlgoliaSearch = (
    //   themeConfig.algolia
    //   || Object.keys(siteConfig.locales && themeConfig.locales || {})
    //     .some(base => themeConfig.locales[base].algolia)
    // )
    // return {
    //   '@AlgoliaSearchBox': isAlgoliaSearch
    //     ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
    //     : path.resolve(__dirname, 'noopModule.js')
    // }
  },

  css: {
    extract: true,
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }

  },
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
  },
  chainWebpack: (config, isServer) => {
    config
        .module
        .rule('less')
        .use('less-loader')
        .loader('less-loader')
        .options({
          javascriptEnabled: true
        })
  },

  plugins: [
    ['@vuepress/active-header-links', themeConfig.activeHeaderLinks],
    '@vuepress/search',
    '@vuepress/plugin-nprogress',
    ['container', {
      type: 'tip',
      defaultTitle: {
        '/zh/': '提示'
      }
    }],
    ['container', {
      type: 'warning',
      defaultTitle: {
        '/zh/': '注意'
      }
    }],
    ['container', {
      type: 'danger',
      defaultTitle: {
        '/zh/': '警告'
      }
    }]
  ]
})

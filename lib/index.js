const path = require('path')

module.exports = (opts, ctx) => {
  // set default theme config
  Object.assign(opts, Object.assign({
    lang: require('./langs/zh-CN'),
    comments: {},
    personalInfo: {},
    defaultPages: {},
    header: {},
    plugins: {},
    pagination: {
      perPage: 5,
    },
  }, opts))

  const { comments, lang, defaultPages } = opts

  const options = {
    name: 'vuepress-theme-nine',

    plugins: [
      '@vuepress/active-header-links',
      '@vuepress/plugin-back-to-top',
      ['@vuepress/last-updated', {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        },
      }],
      ['@vuepress/medium-zoom', true],
      '@vuepress/pagination',
      [require('./plugins/blog'), { lang }],
      ['@vuepress/register-components', { componentsDir: 'components/public' }],
      ['@vuepress/search', { searchMaxSuggestions: 10 }],
      ['vuepress-plugin-container', { type: 'tip' }],
      ['vuepress-plugin-container', { type: 'warning' }],
      ['vuepress-plugin-container', { type: 'danger' }],
      'vuepress-plugin-nprogress',
      ['vuepress-plugin-smooth-scroll', opts.plugins['smooth-scroll'] || {}],
      ['vuepress-plugin-zooming', opts.plugins['zooming'] || {}],
    ],

    globalUIComponents: 'Iconfont',

    enhanceAppFiles: [
      path.resolve(__dirname, 'enhanceApp.js'),
    ],

    chainWebpack (config, isServer) {
      // to make geopattern work
      if (isServer === false) {
        config.node.set('Buffer', false)
      }

      // to use jsx syntax with evergreen config
      if (ctx.siteConfig.evergreen) {
        config.module
          .rule('js')
          .test(/\.js$/)
          .exclude.add(filePath => {
            if (filePath.startsWith(path.resolve(__dirname))) {
              return false
            }
            return true
          }).end()
          .use('cache-loader')
          .loader('cache-loader')
          .options({
            cacheDirectory: ctx.cacheDirectory,
            cacheIdentifier: ctx.cacheIdentifier,
          })
          .end()
          .use('babel-loader')
          .loader('babel-loader')
          .options({
            babelrc: false,
            configFile: false,
            presets: [
              require.resolve('@vue/babel-preset-jsx'),
            ],
          })
      }
    },

    ready () {
      if (defaultPages.home !== false) {
        ctx.addPage({
          permalink: '/',
          frontmatter: {
            title: lang.home,
            layout: 'Home',
          },
        })
      }

      if (defaultPages.posts !== false) {
        ctx.addPage({
          permalink: '/posts/',
          frontmatter: {
            title: lang.posts,
            layout: 'Posts',
          },
        })
      }
    },
  }

  if (comments.enable !== false) {
    options.plugins.push(
      ['@vssue/vuepress-plugin-vssue', Object.assign({
        platform: 'github',
      }, comments)],
    )
  }

  return options
}

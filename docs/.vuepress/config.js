const path = require('path')

module.exports = {
  title: 'vuepress-theme-nine',

  description: 'nine\'s homepage',

  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },

  evergreen: true,

  plugins: [
    ['@vuepress/google-analytics', {
      'ga': '',
    }],
  ],

  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router|vssue)[\\/]/,
            name: 'vendor.vue',
            chunks: 'all',
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.commons',
            chunks: 'all',
          },
        },
      })
    }
  },

  theme: path.resolve(__dirname, '../../lib'),

  themeConfig: {
    lang: require(path.resolve(__dirname, '../../lib/langs/en-US')),
    // lang: require(path.resolve(__dirname, '../../lib/langs/zh-CN')),
    // lang: require(path.resolve(__dirname, '../../lib/langs/pt-BR')),

    personalInfo: {
      nickname: 'NineSwardsMonster',
      description: 'coder',
      email: 'wangjia_1919@163.com',
      location: 'Su Zhou City, China',
      organization: '',

      avatar: '/img/default_avatar.jpg',

      sns: {
        github: {
          account: 'NineSwardsMonster',
          link: 'https://github.com/NineSwardsMonster',
        },
      },
    },

    header: {
      background: {
        // url: '/assets/img/bg.jpg',
        useGeo: true,
      },
      showTitle: true,
    },

    lastUpdated: true,

    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'Custom Pages', link: '/custom-pages/', exact: false },
      { text: 'Changelog', link: 'https://github.com/NineSwordsMonster/vuepress-theme-nine/blob/master/CHANGELOG.md' },
      { text: 'Github', link: 'https://github.com/NineSwordsMonster/vuepress-theme-nine' },
    ],

    comments: {
      owner: 'NineSwardsMonster',
      repo: 'gitment-comments',
      clientId: '',
      clientSecret: '',
      autoCreateIssue: false,
    },

    pagination: {
      perPage: 5,
    },
  },
}

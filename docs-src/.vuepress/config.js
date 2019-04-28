const path = require('path')

module.exports = {
  title: 'vuepress-theme-nine',

  description: 'nine\'s homepage',
  base: '/vuepress-theme-nine/',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },

  evergreen: true,

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
    lang: require(path.resolve(__dirname, '../../lib/langs/zh-CN')),
    // lang: require(path.resolve(__dirname, '../../lib/langs/zh-CN')),
    // lang: require(path.resolve(__dirname, '../../lib/langs/pt-BR')),

    personalInfo: {
      nickname: 'NineSwardsMonster',
      description: 'coder',
      email: 'wangjia_1919@163.com',
      location: 'Su Zhou City, China',
      organization: '',

      avatar: '/img/default_avatar.jpeg',
      geoBg: {
        enable: true,
        color: '#abc',
      },

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
        useGeo: {
          enable: true,
          color: '#ccc',
        },
      },
      showTitle: true,
    },

    lastUpdated: true,
    headerSearch: true,
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'Custom Pages', link: '/custom-pages/', exact: false },
      { text: 'Changelog', link: 'https://github.com/NineSwordsMonster/vuepress-theme-nine/blob/master/CHANGELOG.md' },
      { text: 'Github', link: 'https://github.com/NineSwordsMonster/vuepress-theme-nine' },
    ],
    comments: {
      enable: false,
    },
    pagination: {
      perPage: 5,
    },
  },
}

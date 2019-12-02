module.exports = {
  title: 'Hello VuePress',
  theme: require.resolve('../..'),

  themeConfig: {
    // type: 'blog',

    author: 'nine',
    startYear: 2014,
    lastUpdated: '2019',

    // icp 备案信息
    icp: '111',
    recordLink: '222',
    record: '333',

    valineConfig: {
      visitor: true
    },

    logo: '111',
    repo: 'NineSwordsMonster',
    search: true,
    algolia: {},

    nav: [
      { text: 'TimeLine', link: '/timeline/', icon: 'nine-date' }
    ],
    locales: {},
    blogConfig: {},
    sidebarDepth: 4,
    displayAllHeaders: false,

    themePicker: false,
    // keyPage: {
    //   keys: ['123456'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // }
  }

}

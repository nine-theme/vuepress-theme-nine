module.exports = {
  title: 'Hello VuePress',
  theme: require.resolve('../..'),

  themeConfig: {
    author: 'nine',
    startYear: 2014,

    // icp 备案信息
    icp: '111',
    recordLink: '222',
    record: '333',

    valineConfig: {
      visitor: true
    },

    logo: '111'
  }

}

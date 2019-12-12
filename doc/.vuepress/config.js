module.exports = {
  title: "vuepress-theme-nine",
  description: 'A simple and beautiful vuepress blog theme.',
  dest: 'doc/public',
  head: [
    ['link', { rel: 'icon', href: '/10054584.jpeg' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  // theme: 'nine',
  theme: require.resolve('../..'),
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'nine-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'nine-date' },
      { text: 'sidebar', link: '/views/sidebar/' },
      { text: 'sidebar', link: '/views/sidebargroup/' }
    ],
    sidebar: {
      '/views/sidebar/': [
        '',
        'bar1',
        'bar2'
      ],
      '/views/sidebargroup/': [
        {
          title: '基础',
          collapsable: true,
          children: [
            '',
            'bar1'
          ]
        },
        {
          title: '进阶',
          collapsable: true,
          children: [
            'bar2'
          ]
        },
      ]
    },
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    logo: '/10054584.jpeg',
    authorAvatar: '/10054584.jpeg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    sidebarDepth: 4,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'nine',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2014',
    /**
     * 密钥 (if your blog is private)
     */
    friendLink: [
      {
        title: '九剑',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'wangjia_1919@163.com',
        link: 'https://hub.alili.fun'
      },
      {
        title: 'vuepress-theme-nine',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://hub.alili.fun",
        link: 'https://hub.alili.fun'
      },
    ],
    /**
     * support for
     * '' | 'default'
     * 'coy'
     * 'dark'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     * 'twilight'
     */
    codeTheme: 'tomorrow',
    user3DTag: false
  }
}

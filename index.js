module.exports = {
  layoutDir: './src/layouts',
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    // ['@vuepress/pwa', {
    //   serviceWorker: true,
    //   updatePopup: {
    //     message: "发现新内容!",
    //     buttonText: "点击刷新"
    //   }
    // }],
    // ['@vuepress/pagination', {
    //   postsFilter: (({type}) => type === 'post'),
    //   postsSorter: ((prev, next) => {
    //     const prevTime = new Date(prev.frontmatter.date).getTime();
    //     const nextTime = new Date(next.frontmatter.date).getTime();
    //     return prevTime - nextTime > 0 ? -1 : 1
    //   })
    // }],
    // ['@vuepress/register-components', {
    //   componentsDir: 'components'
    // }],
    // '@vuepress/google-analytics',
    // '@vuepress/last-updated',
    // '@vuepress/back-to-top',
    // '@vuepress/active-header-links',
    // '@vuepress/blog'
  ],
  configureWebpack: (config, isServer) => {
    if (!isServer) {

    }
  },
  chainWebpack: (config, isServer) => {
    if (!isServer) {
      console.log(config.module)
      config.module
        .rule('vue')
        .test(/\.vue$/)
        .use('iview-loader')
        .loader('iview-loader')
        .tap(() => {
          return {
            prefix: false
          }
        })
        .end()
    }
  }
}

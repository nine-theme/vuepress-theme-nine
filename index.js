module.exports = {
  extend: '@vuepress/theme-default',
  layoutDir: './src/layouts',
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/pwa', {
      serviceWorker: true
    }],
    ['@vuepress/pagination', {
      postsFilter: (({type}) => type === 'post'),
      postsSorter: ((prev, next) => {
        const prevTime = new Date(prev.frontmatter.date).getTime();
        const nextTime = new Date(next.frontmatter.date).getTime();
        return prevTime - nextTime > 0 ? -1 : 1
      })
    }],
    ['@vuepress/register-components', {
      componentsDir: 'components'
    }
    ],
    '@vuepress/google-analytics',
    '@vuepress/last-updated',
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    '@vuepress/blog'
  ],
  chainWebpack: config => {

  }
}

module.exports = {
  layoutDir: 'layouts',
  plugins: [
    '@vuepress/google-analytics',
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: true
    }
  ]
}

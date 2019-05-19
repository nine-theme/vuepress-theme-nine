module.exports = (themeConfig, ctx) => {
    return {
        dist: 'dist',
        plugins: [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true
            },
            ''
        ],
        chainWebpack: config => {
            config.module
                .rule('less')
                .use('less-loader')
                .loader("less-loader")
                .tap(options => {
                    options = options || {}
                    Object.assign(options, { javascriptEnabled: true })
                    return options
                }).end()
        }
    }
}
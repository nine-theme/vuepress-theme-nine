module.exports = (themeConfig, ctx) => {
    return {
        plugins: [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true
            }
        ],
        chainWebpack: config => {
            config.module
                .rule('less')
                .test(/\.less$/)
                .use('less-loader')
                .loader('less-loader')
                .tap(options => {
                    return {
                        javascriptEnabled: true
                    }
                }).end()
        }
    }
}
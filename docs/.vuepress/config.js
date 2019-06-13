const path = require('path')

module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    theme: path.resolve(__dirname, '../../index.js'),

    css: {
        extract: true,
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }

    },
    chainWebpack: (config, isServer) => {
        config
            .module
            .rule('less')
            .test(/\.less$/)
            .use('less-loader')
            .loader('less-loader')
            .options({
                javascriptEnabled: true
            }).end()
    },
}

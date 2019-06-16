const path = require('path')

module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    theme: path.resolve(__dirname, '../../index.js'),

    // css: {
    //     extract: true,
    //     loaderOptions: {
    //         less: {
    //             javascriptEnabled: true
    //         }
    //     }
    //
    // },
    configureWebpack: (config, isServer) => {
        if (!isServer) {
            // 修改客户端的 webpack 配置
        }
    },
    chainWebpack: (config, isServer) => {
        config.module
            .rule('less')
            .test(/\.less$/)
            .use('less-loader')
            .loader('less-loader')
            .tap(() => {
                return {
                    javascriptEnabled: true
                }
            }).end()
    },
}

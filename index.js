/* eslint-disable */
const path = require('path');

// Theme API.
module.exports = (themeConfig, ctx) => ({
    layoutDir: 'layouts',

    enhanceAppFiles: [
        resolve(__dirname, 'enhanceApp.js')
    ],

    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },

    configureWebpack: (config, isServer) => {
        if (!isServer) {
            // 修改客户端的 webpack 配置
        }
    },
    chainWebpack: (config, isServer) => {

    },

    plugins: [
        ['@vuepress/active-header-links', themeConfig.activeHeaderLinks],
        '@vuepress/search',
        '@vuepress/plugin-nprogress',
        ['container', {
            type: 'tip',
            defaultTitle: {
                '/zh/': '提示'
            }
        }],
        ['container', {
            type: 'warning',
            defaultTitle: {
                '/zh/': '注意'
            }
        }],
        ['container', {
            type: 'danger',
            defaultTitle: {
                '/zh/': '警告'
            }
        }]
    ]
});

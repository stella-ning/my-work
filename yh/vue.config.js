const path = require('path')
const webpack = require('webpack');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const targetUrl = 'http://yhh5.zhiyunzixun.com/'
module.exports = {
    // 基本路径
    publicPath: "./",
    // // 输出文件目录
    // outputDir: path.resolve(__dirname, "../video_web/h5_share/"),
    lintOnSave: false,
    devServer: {
        port: 8081, // 端口
        open: true,
        //proxy: targetUrl,
        overlay: {
            warning: false,
            errors: false
        }
    },
    pluginOptions: { // 第三方插件配置
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, './src/assets/style/var.less')] // less所在文件路径
        }
    },
    css: {
        loaderOptions: {
            less: {
                globalVars: {
                    //hack: `true; @import '~@/assets/style/var.less';`
                }
            }
        }
    }
};
const path = require('path');
const webpack = require('webpack');
const htmlwebpackplugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|gif|jpeg|jpg)$/i,
                use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 1048576,
                        name: 'img/[name].[hash:8].[ext]'
                    },
                },
                ],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_compontents)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },
    plugins: [
        // new webpack.BannerPlugin('最终版权我来解释'),
        new htmlwebpackplugin({
            template: 'index.html'
        })
    ],
    // devServer: {
    //     contentBase: './dist',
    //     inline: true
    // }
}
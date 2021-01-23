const webpackmerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackmerge(baseConfig, {
    devServer: {
        contentBase: './dist',
        inline: true
    }
})

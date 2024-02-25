// webpack-merge module
const { merge } = require('webpack-merge');

// the common webpack configuration that both build environments share
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './src'
    },
    // needed if there's multiple entry points
    // optimization: {
    //     runtimeChunk: 'single'
    // },
});
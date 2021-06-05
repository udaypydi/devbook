const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config');
const paths = require('./paths');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    ...webpackBaseConfig({ plugins: [
        new webpack.HotModuleReplacementPlugin()
    ] }),
    entry: {
        index: [
            "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
            paths.entry,
        ]
    },

};